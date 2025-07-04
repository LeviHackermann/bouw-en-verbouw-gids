
import { Helmet } from 'react-helmet-async';
import { Brush, Award, Clock, Shield } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesList } from "@/components/ServicesList";
import { ServiceArea } from "@/components/ServiceArea";
import { RecentProjects } from "@/components/RecentProjects";

const Schilderwerk = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren"
  ];

  const specializations = [
    "Binnenschilderwerk muren en plafonds",
    "Buitenschilderwerk gevels en kozijnen",
    "Decoratief schilderwerk en behangwerk",
    "Houtwerk behandeling en lakwerk",
    "Industrieel schilderwerk bedrijfspanden"
  ];

  const recentProjects = [
    "Complete schilderbeurt woning Hasselt",
    "Gevel schilderwerk appartement Genk",
    "Decoratief schilderwerk villa Sint-Truiden",
    "Bedrijfspand schilderen Tongeren"
  ];

  const stats = [
    { number: "800+", label: "Schilderprojecten", icon: Brush },
    { number: "18+", label: "Jaar ervaring", icon: Award },
    { number: "24/7", label: "Service", icon: Clock },
    { number: "100%", label: "Kwaliteitsgarantie", icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>Schilderwerk Hasselt | MMT Projects - Professionele Schilders Limburg</title>
        <meta name="description" content="Schilderwerk specialist in Hasselt en omgeving. MMT Projects verzorgt binnen- en buitenschilderwerk professioneel met 18+ jaar ervaring. Gratis offerte voor schilderwerk in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="schilderwerk hasselt, schilder limburg, binnenschilderwerk, buitenschilderwerk" />
        <link rel="canonical" href="https://www.mmtprojects.be/schilderwerk-hasselt-limburg" />
        
        <meta property="og:title" content="Schilderwerk Hasselt | MMT Projects - Professionele Schilders Limburg" />
        <meta property="og:description" content="Schilderwerk specialist in Hasselt en omgeving. MMT Projects verzorgt binnen- en buitenschilderwerk professioneel met 18+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/schilderwerk-hasselt-limburg" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white">
        <ServiceHero
          title="Professioneel"
          highlightedWord="Schilderwerk"
          description="Schilderwerk nodig? MMT Projects is uw specialist voor binnen- en buitenschilderwerk in Hasselt en Limburg. Vakkundige schilders, kwaliteitsverf en perfecte afwerking."
          badgeText="Schilderwerk Specialist"
          badgeIcon={Brush}
          stats={stats}
          imageUrl="https://images.unsplash.com/photo-1562259949-e8e7689d7828"
          imageAlt="Schilderwerk Hasselt"
          overlayTitle="Vakkundig Schilderwerk"
          overlayDescription="Perfecte afwerking gegarandeerd"
          colorScheme="yellow"
        />

        <ServicesList
          title="Onze Schilderwerk Services"
          description="Van binnen- tot buitenschilderwerk - MMT Projects verzorgt alle schilderwerken in Hasselt en omgeving met hoogwaardige materialen en vakkundige uitvoering."
          services={specializations}
          colorScheme="yellow"
        />

        <ServiceArea
          title="Schilderwerk in Heel Limburg"
          description="MMT Projects verzorgt professioneel schilderwerk in Hasselt en omliggende gemeenten binnen een straal van 50 kilometer."
          serviceAreas={serviceAreas}
          serviceName="Schilderwerk"
          colorScheme="yellow"
        />

        <RecentProjects
          title="Recente Schilderwerk Projecten"
          description="Ontdek onze laatst uitgevoerde schilderwerk projecten in Hasselt en omgeving."
          projects={recentProjects}
          completionText="Vakkundig uitgevoerd door MMT Projects"
        />
      </div>
      
      <Footer />
    </>
  );
};

export default Schilderwerk;
