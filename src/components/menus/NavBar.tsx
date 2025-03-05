"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { Button } from "../ui/button";
import Logo from "@/assets/images/logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`px-5 ${
        isOpen ? "h-svh absolute md:sticky md:h-20" : "sticky"
      } select-none top-0 bg-white/95 md:h-20 w-full z-50`}
    >
      <div className="max-w-[82rem] mx-auto h-full">
        <div
          className={`flex h-full ${
            isOpen
              ? "flex-col md:flex-row"
              : "flex-col md:flex-row md:items-center"
          } justify-between`}
        >
          <div className="flex h-20 md:h-full items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image
                src={Logo}
                width={260}
                height={260}
                alt={`Wallio wallet logo`}
                className="h-8 w-8"
              />
              <p className="text-primary text-2xl font-black">Wallio</p>
            </div>
            <Button
              size={"icon"}
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                aria-hidden={true}
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden={true}
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden={true}
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </Button>
          </div>

          <div
            className={`${
              isOpen
                ? "flex flex-col justify-between md:flex-row flex-1 md:flex-none w-full md:w-auto"
                : "hidden md:flex"
            } items-center gap-x-6`}
          >
            <div className="flex flex-col w-full md:flex-row items-start justify-start md:items-center gap-2 md:gap-6">
              <div className="flex w-full md:inline md:w-auto">
                <Link
                  prefetch={true}
                  href={""}
                  className="hover:text-primary flex-1 md:flex-none py-1 md:py-0"
                >
                  About
                </Link>
              </div>
              <div className="flex w-full md:inline md:w-auto">
                <Link
                  prefetch={true}
                  href={""}
                  className="hover:text-primary flex-1 md:flex-none py-1 md:py-0"
                >
                  Faucet
                </Link>
              </div>
              <div className="flex w-full md:inline md:w-auto">
                <Link
                  prefetch={true}
                  href={routes.auth.login}
                  className="hover:text-primary flex-1 md:flex-none py-1 md:py-0"
                >
                  Login
                </Link>
              </div>
            </div>

            <div className="pb-5 md:pb-0">
              <Link
                prefetch={true}
                href={routes.auth.create}
                className="bg-primary text-nowrap text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200"
              >
                Create a smart wallet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
