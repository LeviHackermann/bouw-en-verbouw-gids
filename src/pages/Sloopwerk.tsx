
import { Helmet } from 'react-helmet-async';
import { Hammer, Award, Shield, Clock } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesList } from "@/components/ServicesList";
import { ServiceArea } from "@/components/ServiceArea";
import { RecentProjects } from "@/components/RecentProjects";

const Sloopwerk = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren"
  ];

  const specializations = [
    "Gecontroleerde sloop woningen en gebouwen",
    "Interne sloopwerken en verbouwingen",
    "Asbest veilig verwijderen en saneren",
    "Afbraak bijgebouwen en garages",
    "Terrein opruiming en afvoer materialen"
  ];

  const recentProjects = [
    "Volledige sloop woning Hasselt-Centrum",
    "Interne verbouwing kantoor Genk",
    "Garage afbraak Sint-Truiden",
    "Asbest sanering appartement Tongeren"
  ];

  const stats = [
    { number: "150+", label: "Sloopprojecten", icon: Hammer },
    { number: "15+", label: "Jaar ervaring", icon: Award },
    { number: "100%", label: "Veilig uitgevoerd", icon: Shield },
    { number: "24/7", label: "Bereikbaar", icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>Sloopwerk Hasselt | MMT Projects - Professionele Sloop Limburg</title>
        <meta name="description" content="Sloopwerk specialist in Hasselt en omgeving. MMT Projects voert sloopwerken veilig uit met 15+ jaar ervaring. Gratis offerte voor sloopwerk in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="sloopwerk hasselt, sloop limburg, afbraak, asbest sanering, gebouw sloop" />
        <link rel="canonical" href="https://www.mmtprojects.be/sloopwerk-hasselt-limburg" />
        
        <meta property="og:title" content="Sloopwerk Hasselt | MMT Projects - Professionele Sloop Limburg" />
        <meta property="og:description" content="Sloopwerk specialist in Hasselt en omgeving. MMT Projects voert sloopwerken veilig uit met 15+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/sloopwerk-hasselt-limburg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sloopwerk Hasselt | MMT Projects - Professionele Sloop Limburg" />
        <meta name="twitter:description" content="Sloopwerk specialist in Hasselt en omgeving. MMT Projects voert sloopwerken veilig uit met 15+ jaar ervaring." />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white">
        <ServiceHero
          title="Veilig"
          highlightedWord="Sloopwerk"
          description="Heeft u sloopwerk nodig? MMT Projects is uw specialist voor veilige en gecontroleerde sloopwerken in Hasselt en Limburg. Van kleine verbouwingen tot complete afbraak - altijd veilig uitgevoerd."
          badgeText="Sloopwerk Specialist"
          badgeIcon={Hammer}
          stats={stats}
          imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
          imageAlt="Sloopwerk Hasselt"
          overlayTitle="Gecontroleerde Sloop"
          overlayDescription="Veiligheid staat voorop"
          colorScheme="red"
        />

        <ServicesList
          title="Onze Sloopwerk Services"
          description="Van kleine sloopwerken tot volledige afbraak - MMT Projects verzorgt al uw sloopprojecten in Hasselt en omgeving met maximale veiligheid en efficiency."
          services={specializations}
          colorScheme="red"
        />

        <ServiceArea
          title="Sloopwerk in Heel Limburg"
          description="MMT Projects voert professionele sloopwerken uit in Hasselt en omliggende gemeenten binnen een straal van 50 kilometer."
          serviceAreas={serviceAreas}
          serviceName="Sloopwerk"
          colorScheme="red"
        />

        <RecentProjects
          title="Recente Sloopwerk Projecten"
          description="Ontdek onze laatst uitgevoerde sloopprojecten in Hasselt en omgeving."
          projects={recentProjects}
          completionText="Veilig uitgevoerd door MMT Projects"
        />
      </div>
      
      <Footer />
    </>
  );
};

export default Sloopwerk;
