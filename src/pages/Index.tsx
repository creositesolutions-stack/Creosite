import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const DOMAIN = "https://creositesolutions.com";
const TITLE = "Creosite Solutions — Affordable Static Websites in Kerala";
const DESCRIPTION =
  "Creosite Solutions builds fast, SEO-ready and affordable static websites for small businesses in Malappuram, Kannur, Kozhikode, and Kasargod. Get a professional website that helps your business grow.";
const OG_IMAGE = `${DOMAIN}/images/og-preview.jpg`;
const PHONE = "+91-6238947490"; // replace with your real number

const Index = () => {
  // JSON-LD structured data (for Google local business SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Creosite Solutions",
    url: DOMAIN,
    logo: `${DOMAIN}/images/logo.png`,
    description: DESCRIPTION,
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malappuram",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    areaServed: ["Malappuram", "Kannur", "Kozhikode", "Kasargod"],
    priceRange: "₹4999 - ₹19,999",
    sameAs: [
      "https://www.facebook.com/YourPage",
      "https://www.linkedin.com/company/YourCompany",
    ],
  };

  return (
    <div className="min-h-screen">
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="Creosite, web development Kerala, static website, affordable websites Malappuram, Kannur, Kozhikode, Kasargod"
        />
        <meta name="author" content="Creosite Solutions" />
        <link rel="canonical" href={`${DOMAIN}/`} />

        {/* ✅ Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={DOMAIN} />
        <meta property="og:site_name" content="Creosite Solutions" />

        {/* ✅ Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* ✅ Local SEO meta */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Malappuram, Kerala" />
        <meta name="geo.position" content="11.073;75.865" />
        <meta name="ICBM" content="11.073, 75.865" />

        {/* ✅ JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* ✅ Your Page Layout */}
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
