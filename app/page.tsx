import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { MethodMac, Research, PipelineTerminal } from "@/components/Showcase";
import {
  MvpNotice,
  Problem,
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
        <MethodMac />
        <Research />
        <PipelineTerminal />
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
