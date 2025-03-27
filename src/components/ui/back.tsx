"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "./button";

function BackButton() {
  const router = useRouter();
  return (
    <Button
      type={"button"}
      variant={"ghost"}
      size={"icon"}
      className="text-dark hover:bg-light -translate-x-3"
      title="Back"
      onClick={() => router.back()}
    >
      <ArrowLeft height={23} />
    </Button>
  );
}

export default BackButton;
