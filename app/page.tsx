import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Ghost from "./components/Ghost";
import Proof from "./components/Proof";
import Mechanism from "./components/Mechanism";
import Boundaries from "./components/Boundaries";
import CTA from "./components/CTA";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
      <main className="artboard">
        <Reveal y={20}>
          <Hero />
        </Reveal>
        <div id="problem">
          <Reveal>
            <Problem />
          </Reveal>
        </div>
        <Reveal>
          <Ghost />
        </Reveal>
        <div id="trial">
          <Reveal>
            <Proof />
          </Reveal>
        </div>
        <div id="science">
          <Reveal>
            <Mechanism />
          </Reveal>
        </div>
        <Reveal>
          <Boundaries />
        </Reveal>
        <Reveal>
          <CTA />
        </Reveal>
      </main>
  );
}
