import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import Contact from "@/components/Contact";
import {
  MvpNotice,
  Problem,
  Capabilities,
  Example,
  DataStrategy,
  TechFoundation,
  Roadmap,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <MvpNotice />
        <Problem />
        <Workflow />
        <Capabilities />
        <Example />
        <DataStrategy />
        <TechFoundation />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
