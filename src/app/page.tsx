import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";
import { Navbar } from "~/components/navbar";
import { Projects } from "~/components/projects";
import { Skills } from "~/components/skills";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar  />
      <Hero  />
      <Skills />
      <Projects />
      {/* <About /> */}
      <Contact />
      <Footer />
    </main>
  );
}
