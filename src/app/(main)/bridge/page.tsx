import Section from "@/components/layouts/Section";
import Header from "@/components/ui/header";

export default function Bridge() {
  return (
    <Section>
      <div className="scrollbar-hide flex h-full flex-col overflow-scroll">
        <div className="sticky top-0 z-50 flex h-14 items-center justify-between border-b bg-white px-5">
          <Header title="Dashboard" isBack={false} />
        </div>
        <div>
        </div>
      </div>
    </Section>
  );
}
