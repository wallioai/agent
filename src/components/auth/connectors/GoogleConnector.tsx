import React, { useState, useEffect } from "react";
import { ConnectorWrapper } from "../ConnectorWrapper";
import { GoogleLogo } from "@/components/icons/logo";
import { API_URL, SERVER_API } from "@/config/env.config";
import useToast from "@/hooks/toast.hook";
import { initWebAuthLoginProcess, initWebAuthRegistration } from "../auth";
import { useAccount } from "@/context/account.context";
import { useAppDispatch } from "@/hooks/redux.hook";
import { setAuth } from "@/slices/account/auth.slice";
import { initAuthentication, initRegistration } from "@/actions/auth.action";
import { useRouter } from "next/navigation";
import { routes } from "@/lib/routes";

type Props = {
  type: "register" | "login";
  name?: string;
};

const POPUP_WIDTH = 400;
const POPUP_HEIGHT = 600;

export default function GoogleConnector({
  type,
  name = "Create with Google",
}: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const { error, loading, success } = useToast();
  const { setCredentials } = useAccount();

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.screen.width,
        height: window.screen.height,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const handleAuthError = (err: any, defaultMessage: string) => {
    if (
      typeof err.message === "string" &&
      err.message.includes("not allowed")
    ) {
      return error({ msg: "Operation rejected" });
    }
    error({ msg: defaultMessage });
  };

  const handleGoogleRegistration = async (event: MessageEvent) => {
    switch (event.data.request) {
      case "register": {
        loading({ msg: "Generating credentials" });
        try {
          const response = await initRegistration({
            name: event.data.name,
            email: event.data.email,
            fromGoogle: true,
          });
          if (response.status && response.data) {
            const regResponse = await initWebAuthRegistration(
              response.data,
              event.data.email,
            );
            if (regResponse && regResponse.status) {
              dispatch(setAuth(true));
              setCredentials(regResponse.credentials);
              success({ msg: "Registration successful" });
              router.push(routes.app.home);
            }
          }
        } catch (err: any) {
          handleAuthError(err, "Error registering user");
        } finally {
          setIsLoading(false);
        }
        break;
      }
      case "login": {
        error({ msg: "User already exists" });
        break;
      }
    }
  };

  const handleGoogleAuthentication = async (event: MessageEvent) => {
    loading({ msg: "Authenticating..." });
    try {
      const response = await initAuthentication(event.data.email);
      if (response.status && response.data) {
        const authResponse = await initWebAuthLoginProcess(
          response.data,
          event.data.email,
        );
        if (authResponse && authResponse.status) {
          dispatch(setAuth(true));
          setCredentials(authResponse.credentials);
          success({ msg: "Login successful" });
          router.push(routes.app.home);
        }
      }
    } catch (err: any) {
      handleAuthError(err, "Error logging in");
    } finally {
      setIsLoading(false);
    }
  };

  const openGoogleAuthPopup = () => {
    setIsLoading(true);

    const redirectUrl = new URL(`${SERVER_API}/auth/google/login`);
    const popupLeft = (screenSize.width - POPUP_WIDTH) / 2;
    const popupTop = (screenSize.height - POPUP_HEIGHT) / 2;

    const popup = window.open(
      redirectUrl,
      "popup",
      `width=${POPUP_WIDTH},height=${POPUP_HEIGHT},top=${popupTop},left=${popupLeft},popup=true`,
    );

    if (popup) {
      const handleMessage = async (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;
        if (event.data.type === "GOOGLE_AUTH_SUCCESS") {
          popup.close();
          window.removeEventListener("message", handleMessage);
          if (type === "register") {
            await handleGoogleRegistration(event);
          } else if (type === "login") {
            await handleGoogleAuthentication(event);
          }
        }
      };
      window.addEventListener("message", handleMessage);
    }
  };
  return (
    <ConnectorWrapper
      connector={{
        id: "google-connect",
        name,
        icon: GoogleLogo,
        onClick: isLoading ? () => {} : openGoogleAuthPopup,
      }}
    />
  );
}
