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
import { WallioProvider } from "@/context/wallio.context";
import { RouterProvider } from "@/context/router.context";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Wallio",
  description: "A smart wallet powering web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className} overflow-clip antialiased`}>
        <ReduxProvider>
          <RootProvider>
            <ReactQueryProvider>
              <RouterProvider
                preserveParams={["chat"]}
                excludePaths={["/login", "/register", "/auth"]}
              >
                <NetworkProvider>
                  <AuthProvider>
                    <AccountProvider>
                      <BridgeProvider>
                        <WallioProvider>
                          {children}
                          <HelperProvider />
                        </WallioProvider>
                      </BridgeProvider>
                    </AccountProvider>
                  </AuthProvider>
                </NetworkProvider>
              </RouterProvider>
            </ReactQueryProvider>
          </RootProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
