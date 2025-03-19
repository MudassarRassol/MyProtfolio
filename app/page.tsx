import Herosection from "@/components/Herosection";
import Aboutme from "@/components/Aboutme";
import Experience from "@/components/Experience";
import Navber from "@/components/Navber";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      {/* Navbar */}
      <Navber />
      {/* Hero Section */}
      <Herosection />
      {/* About Me */}
      <Aboutme />
      {/* Experience */}
      <Experience />
      {/* Projects */}
      <Projects />
      {/* Contact */}
      <Contact />
    </div>
  );
}
