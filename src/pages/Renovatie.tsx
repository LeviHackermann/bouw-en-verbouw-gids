
import { Helmet } from 'react-helmet-async';
import { Building2, Award, Clock, Shield } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesList } from "@/components/ServicesList";
import { ServiceArea } from "@/components/ServiceArea";
import { RecentProjects } from "@/components/RecentProjects";

const Renovatie = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren"
  ];

  const specializations = [
    "Complete woningrenovatie van A tot Z",
    "Badkamerrenovatie en keukenrenovatie",
    "Gevelrenovatie en dakwerken",
    "Energetische renovatie en isolatie",
    "Renovatie begeleiding en projectmanagement"
  ];

  const recentProjects = [
    "Complete renovatie woning Hasselt-Centrum",
    "Energetische renovatie villa Genk",
    "Badkamer en keuken renovatie Sint-Truiden",
    "Gevelrenovatie appartement Tongeren"
  ];

  const stats = [
    { number: "400+", label: "Renovatie projecten", icon: Building2 },
    { number: "15+", label: "Jaar ervaring", icon: Award },
    { number: "24/7", label: "Projectbegeleiding", icon: Clock },
    { number: "100%", label: "Tevreden klanten", icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>Renovatie Hasselt | MMT Projects - Professionele Renovatie Services Limburg</title>
        <meta name="description" content="Renovatie specialist in Hasselt en omgeving. MMT Projects verzorgt complete renovaties professioneel met 15+ jaar ervaring. Gratis offerte voor renovatie in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="renovatie hasselt, woningrenovatie limburg, badkamerrenovatie, keukenrenovatie" />
        <link rel="canonical" href="https://www.mmtprojects.be/renovatie-hasselt-limburg" />
        
        <meta property="og:title" content="Renovatie Hasselt | MMT Projects - Professionele Renovatie Services Limburg" />
        <meta property="og:description" content="Renovatie specialist in Hasselt en omgeving. MMT Projects verzorgt complete renovaties professioneel met 15+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/renovatie-hasselt-limburg" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white">
        <ServiceHero
          title="Complete"
          highlightedWord="Renovatie"
          description="Woning aan renovatie toe? MMT Projects is uw specialist voor complete renovaties in Hasselt en Limburg. Van badkamer tot volledige woning - alles onder één dak."
          badgeText="Renovatie Specialist"
          badgeIcon={Building2}
          stats={stats}
          imageUrl="https://images.unsplash.com/photo-1484154218962-a197022b5858"
          imageAlt="Renovatie Hasselt"
          overlayTitle="Complete Renovatie"
          overlayDescription="Van ontwerp tot oplevering"
          colorScheme="purple"
        />

        <ServicesList
          title="Onze Renovatie Services"
          description="Van kleine aanpassingen tot complete renovaties - MMT Projects verzorgt alle renovatiewerken in Hasselt en omgeving met oog voor detail en kwaliteit."
          services={specializations}
          colorScheme="purple"
        />

        <ServiceArea
          title="Renovatie in Heel Limburg"
          description="MMT Projects verzorgt professionele renovaties in Hasselt en omliggende gemeenten binnen een straal van 50 kilometer."
          serviceAreas={serviceAreas}
          serviceName="Renovatie"
          colorScheme="purple"
        />

        <RecentProjects
          title="Recente Renovatie Projecten"
          description="Ontdek onze laatst uitgevoerde renovatie projecten in Hasselt en omgeving."
          projects={recentProjects}
          completionText="Professioneel uitgevoerd door MMT Projects"
        />
      </div>
      
      <Footer />
    </>
  );
};

export default Renovatie;
