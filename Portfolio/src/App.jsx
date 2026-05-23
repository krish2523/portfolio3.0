import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <>
      {/* Custom Cursor */}
      <Cursor />

      {/* Particle background */}
      <ParticleBackground />

      {/* Main gradient background */}
      <div
        className="fixed -z-10 min-h-screen w-full"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 10%, rgba(124, 58, 237, 0.25) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 80%, rgba(37, 99, 235, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 70%),
            linear-gradient(135deg, #04010f 0%, #070212 30%, #080118 60%, #04010f 100%)
          `,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="fixed -z-10 min-h-screen w-full opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <main className="relative z-10 flex flex-col w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <Tech />
        <Experience />
        <Project />
        <Contact />
      </main>
    </>
  );
}

export default App;
