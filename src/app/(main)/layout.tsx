import Chats from "@/components/chats/Chats";
import Aside from "@/components/layouts/Aside";
import Container from "@/components/layouts/Container";
import MobileMenu from "@/components/layouts/MobileMenu";
import Sidebar from "@/components/layouts/Sidebar";
import { apiRoutes } from "@/lib/routes";
import { DexAiInfo } from "@/components/info-cards/dexai.card";
import Ai from "@/assets/images/ai.png";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-svh flex-col justify-between overflow-hidden overscroll-contain sm:flex-row sm:justify-start">
      <Sidebar />
      <div className="bg-light w-full flex-1 overflow-hidden lg:w-4/5">
        <Container>
          {children}
          <Aside className="w-[38rem]">
            <Chats
              endpoint={apiRoutes.agents.dexai}
              welcomeComponent={DexAiInfo}
              aiImage={Ai}
            />
          </Aside>
        </Container>
      </div>
      <MobileMenu />
    </div>
  );
}
