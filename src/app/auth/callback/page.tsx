"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { routes } from "@/lib/routes";
import { Fragment } from "react";

export default function GoogleCallback() {
  const router = useRouter();

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.slice(1));
    const email = hashParams.get("email");
    const request = hashParams.get("type");
    const name = hashParams.get("name");

    if (email) {
      if (window.opener) {
        // Send the email and requestType to the parent window
        window.opener.postMessage(
          { type: "GOOGLE_AUTH_SUCCESS", email, request, name },
          window.location.origin,
        );
      } else {
        // If opened directly (not in a popup), redirect to the home page or handle the token
        router.push(routes.auth.create);
      }
    }
  }, [router]);

  return <Fragment></Fragment>;
}
