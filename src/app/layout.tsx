import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import RootProvider from "@/providers/RootProvider";
import { HelperProvider } from "@/providers/HelperProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { AccountProvider } from "@/context/account.context";
import { AuthProvider } from "@/context/auth.context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dexa Wallet",
  description: "A smart wallet powering web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <RootProvider>
            <ReactQueryProvider>
              <AuthProvider>
                <AccountProvider>
                  {children}
                  <HelperProvider />
                </AccountProvider>
              </AuthProvider>
            </ReactQueryProvider>
          </RootProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
