import Section from "@/components/layouts/Section";
import Header from "@/components/ui/header";
import Dashboard from "@/components/home/Dashboard";

export default function Home() {
  return (
    <Section>
      <div className="scrollbar-hide flex h-full flex-col overflow-scroll">
        <div className="sticky top-0 z-50 flex h-14 items-center justify-between border-b bg-white px-5">
          <Header title="Dashboard" isBack={false} />
        </div>
        <div className="flex-1 scrollbar-hide overflow-scroll">
          <Dashboard />
        </div>
      </div>
    </Section>
  );
}
