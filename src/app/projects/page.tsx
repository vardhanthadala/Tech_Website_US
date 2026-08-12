import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />
      
      <main className="flex-1 w-full pt-16">
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
