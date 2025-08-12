
import { Link } from "react-router-dom";
import {
  Building2,
  Home,
  Wrench,
  Hammer,
  PaintBucket,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ServicesIndex = () => {
  const services = [
    {
      name: "Nieuwbouw",
      description: "Van fundering tot afwerking, wij bouwen uw droomhuis.",
      icon: Building2,
      link: "/nieuwbouw-hasselt-limburg"
    },
    {
      name: "Verbouwing", 
      description: "Vernieuw en verbeter uw woning met onze verbouwingsdiensten.",
      icon: Wrench,
      link: "/verbouwing-hasselt-limburg"
    },
    {
      name: "Renovatie",
      description: "Geef uw huis een nieuwe look met onze renovatiediensten.",
      icon: Home,
      link: "/renovatie-hasselt-limburg"
    },
    {
      name: "Aanbouw",
      description: "Creëer extra ruimte met een aanbouw op maat.",
      icon: Hammer,
      link: "/aanbouw-hasselt-limburg"
    },
    {
      name: "Dakwerken",
      description: "Voor al uw dakwerken, van reparatie tot volledige vernieuwing.",
      icon: Home,
      link: "/dakwerken-hasselt-limburg"
    },
    {
      name: "Metselwerk",
      description: "Professioneel metselwerk voor nieuwbouw en renovatie.",
      icon: Home,
      link: "/metselwerk-hasselt-limburg"
    },
    {
      name: "Timmerwerk",
      description: "Maatwerk timmerwerk voor interieur en exterieur.",
      icon: Home,
      link: "/timmerwerk-hasselt-limburg"
    },
    {
      name: "Sloopwerk",
      description: "Veilig en efficiënt sloopwerk voor uw project.",
      icon: Home,
      link: "/sloopwerk-hasselt-limburg"
    },
    {
      name: "Afbraakwerken",
      description: "Professionele afbraakwerken met milieuvriendelijke aanpak.",
      icon: Hammer,
      link: "/afbraakwerken-hasselt-limburg"
    },
    {
      name: "Badkamerrenovatie",
      description: "Uw droombadkamer, van ontwerp tot realisatie.",
      icon: Home,
      link: "/badkamerrenovatie-hasselt-limburg"
    },
    {
      name: "Keukenrenovatie",
      description: "Een nieuwe keuken die perfect aansluit bij uw wensen.",
      icon: Home,
      link: "/keukenrenovatie-hasselt-limburg"
    },
    {
      name: "Vloerleggen",
      description: "Professioneel vloerleggen voor een perfect resultaat.",
      icon: Home,
      link: "/vloerleggen-hasselt-limburg"
    },
    {
      name: "Tegelwerk",
      description: "Stijlvol tegelwerk voor badkamer, keuken en meer.",
      icon: Home,
      link: "/tegelwerk-hasselt-limburg"
    },
    {
      name: "Stucwerk",
      description: "Gladde muren en plafonds met professioneel stucwerk.",
      icon: Home,
      link: "/stucwerk-hasselt-limburg"
    },
    {
      name: "Schilderwerk",
      description: "Kleur en bescherming met professioneel schilderwerk.",
      icon: PaintBucket,
      link: "/schilderwerk-hasselt-limburg"
    },
    {
      name: "Laminaat Leggen",
      description: "Snel en vakkundig laminaat gelegd.",
      icon: Home,
      link: "/laminaat-leggen-hasselt-limburg"
    },
    {
      name: "Parket Leggen",
      description: "Duurzame parketvloeren, vakkundig gelegd.",
      icon: Home,
      link: "/parket-leggen-hasselt-limburg"
    },
    {
      name: "Gevelrenovatie",
      description: "Geef uw gevel een nieuwe uitstraling.",
      icon: Home,
      link: "/gevelrenovatie-hasselt-limburg"
    },
    {
      name: "Dakbedekking",
      description: "Nieuwe dakbedekking voor een waterdicht dak.",
      icon: Home,
      link: "/dakbedekking-hasselt-limburg"
    },
    {
      name: "Tuinmuren",
      description: "Stevige en mooie tuinmuren.",
      icon: Home,
      link: "/tuinmuren-hasselt-limburg"
    },
    {
      name: "Bestrating",
      description: "Professionele bestrating voor uw tuin en oprit.",
      icon: Home,
      link: "/bestrating-hasselt-limburg"
    },
    {
      name: "Schuttingen",
      description: "Privacy en bescherming met een nieuwe schutting.",
      icon: Home,
      link: "/schuttingen-hasselt-limburg"
    },
    {
      name: "Terrasbouw",
      description: "Geniet van uw tuin met een terras op maat.",
      icon: Home,
      link: "/terrasbouw-hasselt-limburg"
    },
    {
      name: "Carport",
      description: "Bescherm uw auto met een carport.",
      icon: Home,
      link: "/carport-hasselt-limburg"
    },
    {
      name: "Elektriciteit",
      description: "Elektriciteitswerken voor uw woning.",
      icon: Zap,
      link: "/elektriciteit-hasselt-limburg"
    },
    {
      name: "Loodgieterswerk",
      description: "Professioneel loodgieterswerk voor installatie en reparatie.",
      icon: Wrench,
      link: "/loodgieterswerk-hasselt-limburg"
    },
    {
      name: "Isolatie",
      description: "Professionele isolatiewerken voor optimale thermische isolatie.",
      icon: Home,
      link: "/isolatie-hasselt-limburg"
    },
    {
      name: "Kozijnen",
      description: "Professionele kozijnen installatie, renovatie en reparatie.",
      icon: Home,
      link: "/kozijnen-hasselt-limburg"
    },
    {
      name: "Ramen Plaatsen",
      description: "Professionele raaminstallatie voor particuliere woningen en bedrijfspanden.",
      icon: Home,
      link: "/ramen-plaatsen-hasselt-limburg"
    },
    {
      name: "Deuren Plaatsen",
      description: "Professionele deurinstallatie voor binnen- en buitendeuren.",
      icon: Home,
      link: "/deuren-plaatsen-hasselt-limburg"
    },
    {
      name: "Onderhoud en Herstelling",
      description: "Professioneel onderhoud en herstelling van gebouwen.",
      icon: Wrench,
      link: "/onderhoud-herstelling-hasselt-limburg"
    },
    {
      name: "Plaatsing Zonnepanelen",
      description: "Professionele installatie van zonnepanelen voor duurzame energie.",
      icon: Zap,
      link: "/plaatsing-zonnepanelen-hasselt-limburg"
    },
    {
      name: "Batterijen Zonnepanelen",
      description: "Hoogwaardige batterijen voor optimale energieopslag bij uw zonnepanelen.",
      icon: Zap,
      link: "/batterijen-zonnepanelen-hasselt-limburg"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Diensten | MMT Projects - Complete bouw- en renovatiediensten</title>
        <meta name="description" content="Ontdek alle diensten van MMT Projects: nieuwbouw, renovatie, verbouwing, dakwerken, keukenrenovatie en meer in Hasselt en Limburg." />
        <link rel="canonical" href="https://www.mmtprojects.be/diensten" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Onze <span className="text-blue-600">Diensten</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van nieuwbouw tot specialistische renovatiewerken - MMT Projects biedt een volledig pakket aan diensten voor al uw bouwprojecten in Hasselt en omgeving.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link to={service.link} key={index}>
                  <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-xl mr-4 flex-shrink-0">
                          <service.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{service.name}</h3>
                          <p className="text-gray-700">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ServicesIndex;
