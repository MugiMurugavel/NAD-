import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Ghost from "./components/Ghost";
import Proof from "./components/Proof";
import Mechanism from "./components/Mechanism";
import Boundaries from "./components/Boundaries";
import CTA from "./components/CTA";
import Reveal from "./components/Reveal";
import Journey from "./components/Journey";

export default function Home() {
  return (
    <main>
      {/* Hero keeps the simple block reveal; every other section now
          self-reveals with its own staggered entrance choreography. */}
      <div className="artboard">
        <Reveal y={20}>
          <Hero />
        </Reveal>
        <div id="problem">
          <Problem />
        </div>
        <Ghost />
      </div>
      {/* Full-bleed, fluid pinned-scroll sequence — rendered OUTSIDE the
          zoom-scaled artboard so the sticky pin works and it stays responsive. */}
      <div id="how">
        <Journey />
      </div>
      <div className="artboard">
        <div id="trial">
          <Proof />
        </div>
        <div id="science">
          <Mechanism />
        </div>
        <Boundaries />
        <CTA />
      </div>
    </main>
  );
}
