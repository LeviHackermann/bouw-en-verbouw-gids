import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Home,
  Wrench,
  Hammer,
  PaintBucket,
  Zap,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Shield,
  Award,
  Users,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren",
    "As", "Opglabbeek", "Oudsbergen", "Hamont-Achel"
  ];

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

  const whyChooseUs = [
    {
      title: "Lokale Expertise",
      description: "Wij kennen Hasselt en Limburg als onze broekzak.",
      icon: MapPin
    },
    {
      title: "Kwaliteit",
      description: "Wij leveren hoogwaardige kwaliteit en vakmanschap.",
      icon: Shield
    },
    {
      title: "Ervaring",
      description: "Meer dan 15 jaar ervaring in de bouwsector.",
      icon: Award
    },
    {
      title: "Persoonlijk",
      description: "Wij luisteren naar uw wensen en denken met u mee.",
      icon: Users
    }
  ];

  const testimonials = [
    {
      name: "Familie Peeters",
      text: "MMT Projects heeft onze droomwoning gebouwd. Vakmanschap en kwaliteit staan hoog in het vaandel.",
      stars: 5
    },
    {
      name: "Jan & Marieke",
      text: "Onze badkamerrenovatie is perfect uitgevoerd. We zijn zeer tevreden met het resultaat.",
      stars: 4
    },
    {
      name: "Peter S.",
      text: "Snel en vakkundig laminaat gelegd. Een echte aanrader!",
      stars: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>MMT Projects - Uw partner in bouw en renovatie</title>
        <meta name="description" content="MMT Projects is uw partner in Hasselt voor nieuwbouw, renovatie, verbouwing en meer. Vraag nu uw gratis offerte aan!" />
        <link rel="canonical" href="https://www.mmtprojects.be/" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad6d1ba6a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="MMT Projects"
              className="object-cover w-full h-full opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Home className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Uw partner in bouw en renovatie</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  MMT Projects - <span className="text-blue-600">Uw droom, onze expertise</span>
                </h1>

                <p className="mt-6 text-xl text-gray-700 max-w-lg">
                  Van nieuwbouw tot renovatie, MMT Projects staat voor u klaar. Met meer dan 15 jaar ervaring realiseren wij uw projecten in Hasselt en omgeving.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    Gratis offerte aanvragen
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300">
                    Bekijk onze projecten
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="hidden md:block relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="MMT Projects Team"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">15+ Jaar</h2>
                    <p className="text-white/90">Ervaring in de bouwsector</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Onze diensten</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Van nieuwbouw tot renovatie, wij bieden een breed scala aan diensten om uw project te realiseren.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link to={service.link} key={index}>
                  <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <service.icon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
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

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom kiezen voor MMT Projects?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wij zijn uw betrouwbare partner in Hasselt en omgeving. Met meer dan 15 jaar ervaring en een focus op kwaliteit realiseren wij uw projecten.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Service gebied</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wij zijn actief in Hasselt en een straal van 50km rondom.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Wat onze klanten zeggen</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 inline-block" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                    <p className="text-gray-900 font-medium">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Klaar om uw project te starten?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Neem vandaag nog contact met ons op voor een vrijblijvende offerte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  0484 11 77 27
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-5 w-5" />
                  info@mmtprojects.be
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Index;
