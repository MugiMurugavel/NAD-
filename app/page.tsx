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
        {/* Hero keeps the simple block reveal; every other section now
            self-reveals with its own staggered entrance choreography. */}
        <Reveal y={20}>
          <Hero />
        </Reveal>
        <div id="problem">
          <Problem />
        </div>
        <Ghost />
        <div id="trial">
          <Proof />
        </div>
        <div id="science">
          <Mechanism />
        </div>
        <Boundaries />
        <CTA />
      </main>
  );
}
