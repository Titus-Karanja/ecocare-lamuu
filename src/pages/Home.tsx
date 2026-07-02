import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import GetInvolvedSection from "../components/GetInvolvedSection";
import HeroSection from "../components/HeroSection";
import MediaSection from "../components/MediaSection";
import Navbar from "../components/Navbar";
import NetworkSection from "../components/NetworkSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background  overflow-x-hidden">
      {/* Navbar  */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <MediaSection />
        <NetworkSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}