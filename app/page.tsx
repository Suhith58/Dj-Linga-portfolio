import ScrollyCanvas from "@/components/ScrollyCanvas";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] flex flex-col">
      <ScrollyCanvas />
      <Services />
      <Contact />

      {/* Simple Footer */}
      <footer className="py-12 text-center text-white/30 text-sm">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </main>
  );
}
