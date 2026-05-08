import CursorFollower from "@/components/cursor-follower";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LocationContactSection from "@/components/location-contact-section";
import ServiceBentoGrid from "@/components/service-bento-grid";
import StickyNav from "@/components/sticky-nav";
import TestimonialsSection from "@/components/testimonials-section";
import TrustSlider from "@/components/trust-slider";
import WhatsAppFAB from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-slate-50 text-slate-950">
      <CursorFollower />
      <StickyNav />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(249,168,212,0.12),transparent_20%)]" />
      <div className="relative">
        <HeroSection />
        <ServiceBentoGrid />
        <TrustSlider />
        <TestimonialsSection />
        <LocationContactSection />
        <Footer />
      </div>
      <WhatsAppFAB />
    </main>
  );
}
