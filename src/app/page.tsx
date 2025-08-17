import CallToAction from "@/sections/CallToAction";
import Contact from "@/sections/Contact";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import Skills from "@/sections/Skills";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Skills />
            <Features />
            <Integrations />
            <Contact />
            {/* <Faqs /> */}
            {/* <CallToAction /> */}
            {/* <Footer /> */}
        </>
    );
}
