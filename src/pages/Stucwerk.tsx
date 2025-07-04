
import { Helmet } from 'react-helmet-async';
import { Palette, Award, Users, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
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

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Start Uw Stucproject
                </h2>
                <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                  Klaar voor professioneel stucwerk? Neem contact op voor een vrijblijvend adviesgesprek en gratis offerte.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  0484 11 77 27
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold">
                  <Mail className="mr-2 h-5 w-5" />
                  E-mail versturen
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">
                MMT Projects - Uw Stucwerk Specialist
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Daaleindestraat 100, 3720 Hasselt</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">info@mmtprojects.be</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">0484 11 77 27</span>
                </div>
              </div>
              
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professionele stucwerk specialist in Hasselt en heel Limburg. 
                Van glad tot decoratief - wij maken uw muren en plafonds perfect.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Stucwerk;
