import React, { useState, useEffect } from "react";
import { ConnectorWrapper } from "../ConnectorWrapper";
import { GoogleLogo } from "@/components/icons/logo";
import { type PublicKeyCredentialCreationOptionsJSON } from "@simplewebauthn/browser";
import { API_URL } from "@/config/env.config";
import { initAuthentication, initRegistration } from "@/actions/auth.action";
import useToast from "@/hooks/toast.hook";
import { initWebAuthLoginProcess, initWebAuthRegistration } from "../auth";

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
  //const router = useRouter();
  //const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const { error, loading, success } = useToast();

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
          if (response.status) {
            const options =
              response.data as PublicKeyCredentialCreationOptionsJSON;

            const webAuthAccount = await initWebAuthRegistration(
              options,
              event.data.email
            );
            if (webAuthAccount) {
              success({ msg: "Registration successful" });
              setIsLoading(false);
            }
          }
        } catch (err: any) {
          console.log(err);
          if (
            typeof err.message === "string" &&
            err.message.includes("not allowed")
          ) {
            return error({ msg: "Operation rejected" });
          }
          error({ msg: "Error registering user" });
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
      if (response.status) {
        const options = response.data;
        const webAuthAccount = await initWebAuthLoginProcess(
          options,
          event.data.email
        );
        if (webAuthAccount) {
          success({ msg: "Login successful" });
          setIsLoading(false);
        }
      }
    } catch (err: any) {
      console.log(err);
      if (
        typeof err.message === "string" &&
        err.message.includes("not allowed")
      ) {
        return error({ msg: "Operation rejected" });
      }
      error({ msg: "Error logging in" });
    }
  };

  const openGoogleAuthPopup = () => {
    setIsLoading(true);

    const redirectUrl = new URL(`${API_URL}/auth/google/login`);
    const popupLeft = (screenSize.width - POPUP_WIDTH) / 2;
    const popupTop = (screenSize.height - POPUP_HEIGHT) / 2;

    const popup = window.open(
      redirectUrl,
      "popup",
      `width=${POPUP_WIDTH},height=${POPUP_HEIGHT},top=${popupTop},left=${popupLeft},popup=true`
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
