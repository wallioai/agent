import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import NavBar from "@/components/menus/NavBar";

export default function Home() {
  return (
    <Container>
      <Section>
        <div className="overflow-y-scroll h-svh relative">
          <NavBar />
        </div>
      </Section>
    </Container>
  );
}
