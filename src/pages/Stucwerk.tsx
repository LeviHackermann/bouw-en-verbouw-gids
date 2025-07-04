
import { Helmet } from 'react-helmet-async';
import { Palette, Award, Users, Shield } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesList } from "@/components/ServicesList";
import { ServiceArea } from "@/components/ServiceArea";
import { RecentProjects } from "@/components/RecentProjects";

const Stucwerk = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren"
  ];

  const specializations = [
    "Glad stucwerk voor moderne afwerking",
    "Decoratief stucwerk en ornamenten", 
    "Herstel en renovatie oud stucwerk",
    "Buitenstuc en gevelafwerking",
    "Speciaal stucwerk en textuurafwerkingen"
  ];

  const recentProjects = [
    "Glad stucwerk nieuwbouw Hasselt-Noord",
    "Decoratief plafond herenhuis Genk",
    "Gevelstuc renovatie Sint-Truiden",
    "Modern stucwerk appartement Tongeren"
  ];

  const stats = [
    { number: "400+", label: "Stucwerk projecten", icon: Palette },
    { number: "15+", label: "Jaar ervaring", icon: Award },
    { number: "100%", label: "Tevreden klanten", icon: Users },
    { number: "5j", label: "Garantie", icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>Stucwerk Hasselt | MMT Projects - Professionele Stukadoors Limburg</title>
        <meta name="description" content="Stucwerk specialist in Hasselt en omgeving. MMT Projects verzorgt stucwerk vakkundig met 15+ jaar ervaring. Gratis offerte voor stucwerk in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="stucwerk hasselt, stukadoor limburg, glad stucwerk, decoratief stucwerk" />
        <link rel="canonical" href="https://www.mmtprojects.be/stucwerk-hasselt-limburg" />
        
        <meta property="og:title" content="Stucwerk Hasselt | MMT Projects - Professionele Stukadoors Limburg" />
        <meta property="og:description" content="Stucwerk specialist in Hasselt en omgeving. MMT Projects verzorgt stucwerk vakkundig met 15+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/stucwerk-hasselt-limburg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stucwerk Hasselt | MMT Projects - Professionele Stukadoors Limburg" />
        <meta name="twitter:description" content="Stucwerk specialist in Hasselt en omgeving. MMT Projects verzorgt stucwerk vakkundig met 15+ jaar ervaring." />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white">
        <ServiceHero
          title="Professioneel"
          highlightedWord="Stucwerk"
          description="Op zoek naar vakkundig stucwerk? MMT Projects is uw specialist voor alle stucwerken in Hasselt en Limburg. Van glad stucwerk tot decoratieve afwerkingen - altijd perfect afgewerkt."
          badgeText="Stucwerk Specialist"
          badgeIcon={Palette}
          stats={stats}
          imageUrl="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
          imageAlt="Stucwerk Hasselt"
          overlayTitle="Perfect Stucwerk"
          overlayDescription="Van glad tot decoratief"
          colorScheme="purple"
        />

        <ServicesList
          title="Onze Stucwerk Services"
          description="Van traditioneel tot modern - MMT Projects verzorgt al uw stucwerk in Hasselt en omgeving met vakmanschap en oog voor detail."
          services={specializations}
          colorScheme="purple"
        />

        <ServiceArea
          title="Stucwerk in Heel Limburg"
          description="MMT Projects verzorgt professioneel stucwerk in Hasselt en omliggende gemeenten binnen een straal van 50 kilometer."
          serviceAreas={serviceAreas}
          serviceName="Stucwerk"
          colorScheme="purple"
        />

        <RecentProjects
          title="Recente Stucwerk Projecten"
          description="Ontdek onze laatst uitgevoerde stucprojecten in Hasselt en omgeving."
          projects={recentProjects}
          completionText="Vakkundig uitgevoerd door MMT Projects"
        />
      </div>
      
      <Footer />
    </>
  );
};

export default Stucwerk;
