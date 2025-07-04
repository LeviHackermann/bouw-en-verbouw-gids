
import { Helmet } from 'react-helmet-async';
import { Sun, Award, Clock, Shield } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesList } from "@/components/ServicesList";
import { ServiceArea } from "@/components/ServiceArea";
import { RecentProjects } from "@/components/RecentProjects";

const PlaatsingZonnepanelen = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren"
  ];

  const specializations = [
    "Professionele installatie van zonnepanelen",
    "Advies en ontwerp van zonnepanelensystemen",
    "Aansluiting op het elektriciteitsnet",
    "Installatie van omvormers en monitoring",
    "Onderhoud en service van zonnepanelen"
  ];

  const recentProjects = [
    "20 zonnepanelen installatie woning Hasselt",
    "Bedrijfspand zonnepanelen systeem Genk",
    "Zonnepanelen met batterij Sint-Truiden",
    "Zonnepanelen onderhoud Tongeren"
  ];

  const stats = [
    { number: "300+", label: "Zonnepanelen projecten", icon: Sun },
    { number: "10+", label: "Jaar ervaring", icon: Award },
    { number: "24/7", label: "Service", icon: Clock },
    { number: "100%", label: "Gecertificeerd", icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>Plaatsing Zonnepanelen Hasselt | MMT Projects - Professionele Installatie Limburg</title>
        <meta name="description" content="Plaatsing zonnepanelen specialist in Hasselt en omgeving. MMT Projects installeert zonnepanelen professioneel met 10+ jaar ervaring. Gratis offerte voor zonnepanelen in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="plaatsing zonnepanelen hasselt, zonnepanelen limburg, installatie, omvormers" />
        <link rel="canonical" href="https://www.mmtprojects.be/plaatsing-zonnepanelen-hasselt-limburg" />
        
        <meta property="og:title" content="Plaatsing Zonnepanelen Hasselt | MMT Projects - Professionele Installatie Limburg" />
        <meta property="og:description" content="Plaatsing zonnepanelen specialist in Hasselt en omgeving. MMT Projects installeert zonnepanelen professioneel met 10+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/plaatsing-zonnepanelen-hasselt-limburg" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white">
        <ServiceHero
          title="Professionele"
          highlightedWord="Zonnepanelen"
          description="Wilt u zonnepanelen laten plaatsen? MMT Projects is uw specialist voor professionele installatie van zonnepanelen in Hasselt en Limburg. Duurzaam, betrouwbaar en vakkundig uitgevoerd."
          badgeText="Zonnepanelen Specialist"
          badgeIcon={Sun}
          stats={stats}
          imageUrl="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d"
          imageAlt="Plaatsing Zonnepanelen Hasselt"
          overlayTitle="Duurzame Energie"
          overlayDescription="Professioneel geïnstalleerd"
          colorScheme="orange"
        />

        <ServicesList
          title="Onze Zonnepanelen Services"
          description="Van advies tot installatie en onderhoud - MMT Projects verzorgt alle aspecten van zonnepanelen in Hasselt en omgeving voor optimale energieopbrengst."
          services={specializations}
          colorScheme="orange"
        />

        <ServiceArea
          title="Zonnepanelen in Heel Limburg"
          description="MMT Projects installeert professionele zonnepanelen in Hasselt en omliggende gemeenten binnen een straal van 50 kilometer."
          serviceAreas={serviceAreas}
          serviceName="Zonnepanelen"
          colorScheme="orange"
        />

        <RecentProjects
          title="Recente Zonnepanelen Projecten"
          description="Ontdek onze laatst geïnstalleerde zonnepanelen projecten in Hasselt en omgeving."
          projects={recentProjects}
          completionText="Professioneel geïnstalleerd door MMT Projects"
        />
      </div>
      
      <Footer />
    </>
  );
};

export default PlaatsingZonnepanelen;
