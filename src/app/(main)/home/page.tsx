"use client";
import Section from "@/components/layouts/Section";
import Header from "@/components/ui/header";
import Dashboard from "@/components/home/Dashboard";
import { useWallio } from "@/context/wallio.context";

export default function Home() {
  const { isMobile } = useWallio();
  return (
    <Section>
      <div className="scrollbar-hide flex h-full flex-col overflow-scroll">
        <div className="sticky top-0 z-50 flex h-14 items-center justify-between border-b bg-white px-5">
          <Header title="Dashboard" isBack={isMobile} />
        </div>
        <div className="scrollbar-hide flex-1 overflow-scroll">
          <Dashboard />
        </div>
      </div>
    </Section>
  );
}
