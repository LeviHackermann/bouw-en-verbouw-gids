
import { Helmet } from 'react-helmet-async';
import { Building2, Award, Clock, Shield } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesList } from "@/components/ServicesList";
import { ServiceArea } from "@/components/ServiceArea";
import { RecentProjects } from "@/components/RecentProjects";

const RamenPlaatsen = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren"
  ];

  const specializations = [
    "Professionele installatie van ramen en kozijnen",
    "Vervanging van oude ramen door nieuwe",
    "Energiezuinige ramen en beglazing",
    "Reparatie en onderhoud van ramen",
    "Maatwerk ramen voor speciale projecten"
  ];

  const recentProjects = [
    "Complete raamvervanging woning Hasselt",
    "Nieuwe ramen nieuwbouw Genk",
    "Energiezuinige ramen appartement Sint-Truiden",
    "Raam reparatie kantoor Tongeren"
  ];

  const stats = [
    { number: "500+", label: "Ramen geplaatst", icon: Building2 },
    { number: "12+", label: "Jaar ervaring", icon: Award },
    { number: "24/7", label: "Service", icon: Clock },
    { number: "100%", label: "Garantie", icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>Ramen Plaatsen Hasselt | MMT Projects - Professionele Installatie Limburg</title>
        <meta name="description" content="Ramen plaatsen specialist in Hasselt en omgeving. MMT Projects installeert ramen en kozijnen professioneel met 12+ jaar ervaring. Gratis offerte voor ramen plaatsen in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="ramen plaatsen hasselt, kozijnen limburg, raaminstallatie, energiezuinige ramen" />
        <link rel="canonical" href="https://www.mmtprojects.be/ramen-plaatsen-hasselt-limburg" />
        
        <meta property="og:title" content="Ramen Plaatsen Hasselt | MMT Projects - Professionele Installatie Limburg" />
        <meta property="og:description" content="Ramen plaatsen specialist in Hasselt en omgeving. MMT Projects installeert ramen en kozijnen professioneel met 12+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/ramen-plaatsen-hasselt-limburg" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white">
        <ServiceHero
          title="Professioneel"
          highlightedWord="Ramen Plaatsen"
          description="Nieuwe ramen nodig? MMT Projects is uw specialist voor professionele plaatsing van ramen en kozijnen in Hasselt en Limburg. Energiezuinig, vakkundig en met volledige garantie."
          badgeText="Ramen Specialist"
          badgeIcon={Building2}
          stats={stats}
          imageUrl="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13"
          imageAlt="Ramen Plaatsen Hasselt"
          overlayTitle="Energiezuinige Ramen"
          overlayDescription="Professioneel geïnstalleerd"
          colorScheme="green"
        />

        <ServicesList
          title="Onze Ramen Plaatsing Services"
          description="Van meting tot installatie - MMT Projects verzorgt alle aspecten van ramen plaatsen in Hasselt en omgeving met focus op kwaliteit en energiezuinigheid."
          services={specializations}
          colorScheme="green"
        />

        <ServiceArea
          title="Ramen Plaatsen in Heel Limburg"
          description="MMT Projects plaatst professionele ramen en kozijnen in Hasselt en omliggende gemeenten binnen een straal van 50 kilometer."
          serviceAreas={serviceAreas}
          serviceName="Ramen Plaatsen"
          colorScheme="green"
        />

        <RecentProjects
          title="Recente Ramen Projecten"
          description="Ontdek onze laatst geplaatste ramen projecten in Hasselt en omgeving."
          projects={recentProjects}
          completionText="Professioneel geplaatst door MMT Projects"
        />
      </div>
      
      <Footer />
    </>
  );
};

export default RamenPlaatsen;
