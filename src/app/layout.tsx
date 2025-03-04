import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import RootProvider from "@/providers/RootProvider";
import { HelperProvider } from "@/providers/HelperProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { AccountProvider } from "@/context/account.context";
import { AuthProvider } from "@/context/auth.context";
import { NetworkProvider } from "@/context/network.context";
import { BridgeProvider } from "@/context/bridge.context";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`${barlow.className} antialiased`}>
        <ReduxProvider>
          <RootProvider>
            <ReactQueryProvider>
              <NetworkProvider>
                <BridgeProvider>
                  <AuthProvider>
                    <AccountProvider>
                      {children}
                      <HelperProvider />
                    </AccountProvider>
                  </AuthProvider>
                </BridgeProvider>
              </NetworkProvider>
            </ReactQueryProvider>
          </RootProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
