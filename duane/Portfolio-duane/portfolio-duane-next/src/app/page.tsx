import LandingPage from "@/Components/LandingPage";
import Header from "@/Components/Header";
import Packaging from "@/Components/Packaging";
import Logo from "@/Components/Logo";
import Footer from "@/Components/Footer";
import Photo from "@/Components/Photo";

export default function Home() {
  return (
    <div>
      <Header />
      <div id="logo-section">
        <Logo />
      </div>
      <div id="packaging-section">
        <Packaging />
      </div>
      <div id="photo-section">
        <Photo />
      </div>
      <div id="contact-section">
        <LandingPage />
      </div>
      <Footer />
    </div>
  );
}

