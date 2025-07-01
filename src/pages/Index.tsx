
import { Link } from "react-router-dom";
import {
  Building2,
  Home,
  Wrench,
  Hammer,
  Phone,
  Mail,
  ArrowRight,
  Shield,
  Award,
  Users,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";

const Index = () => {
  const services = [
    {
      title: "Nieuwbouw",
      description: "Van ontwerp tot realisatie bouwen wij uw droomhuis op maat.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/nieuwbouw-hasselt-limburg"
    },
    {
      title: "Renovatie & verbouwing",
      description: "Wilt u uw woning moderniseren, uitbreiden of verbouwen? Wij zorgen voor een resultaat dat aan al uw wensen voldoet.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/renovatie-hasselt-limburg"
    },
    {
      title: "Totaalprojecten",
      description: "Van eerste schets tot de laatste afwerking nemen wij u al het werk uit uw handen.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/aanbouw-hasselt-limburg"
    },
    {
      title: "Herstelling en onderhoud",
      description: "Van kleine reparaties tot het onderhoud van uw woning, wij bieden duurzame oplossingen.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/verbouwing-hasselt-limburg"
    },
    {
      title: "Dakwerken",
      description: "Plaatsen van een nieuw dak of gewoon vernieuwen wij doen het allemaal.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/dakwerken-hasselt-limburg"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Ervaring & expertise",
      description: "Met tientallen projecten op onze naam weten wij precies wat er nodig is om uw bouwplannen te realiseren."
    },
    {
      icon: Users,
      title: "Klantgericht",
      description: "Wij luisteren naar uw wensen en denken met u mee. Samen maken we van uw project een succes."
    },
    {
      icon: Award,
      title: "Betrouwbaarheid",
      description: "Afspraak is afspraak. U kunt rekenen op transparante communicatie en een vlekkeloze proces."
    }
  ];

  const benefits = [
    {
      icon: Phone,
      title: "Persoonlijke begeleiding & communicatie",
      description: "Onze vakkundige projectleiders houden u tijdens het hele bouwproces op de hoogte. Met korte lijnen en duidelijke communicatie weet u precies waar u aan toe bent."
    },
    {
      icon: CheckCircle,
      title: "Alles onder een dak",
      description: "Van ontwerp tot oplevering verzorgen wij het complete traject. U heeft één aanspreekpunt voor alle bouwwerkzaamheden, wat zorgt voor een zorgeloze ervaring."
    },
    {
      icon: Award,
      title: "Kwaliteit tegen scherpe prijzen",
      description: "Door onze jarenlange samenwerking met betrouwbare partners en leveranciers kunnen wij altijd de beste kwaliteit materialen en expertise garanderen tegen scherpe prijzen."
    }
  ];

  return (
    <>
      <Helmet>
        <title>MMT Projects - Uw partner in bouw en renovatie</title>
        <meta name="description" content="MMT Projects is uw partner in Hasselt voor nieuwbouw, renovatie, verbouwing en meer. Vraag nu uw gratis offerte aan!" />
        <link rel="canonical" href="https://www.mmtprojects.be/" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Building2 className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Professionele bouwpartner</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-6">
                  Uw partner in{" "}
                  <span className="text-blue-600">bouwen</span>
                  <br />
                  <span className="text-blue-600">& verbouwen</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                  Van droomhuis tot renovatie - wij realiseren uw bouwplannen met vakmanschap en betrouwbaarheid
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="mr-2 h-5 w-5" />
                    Neem contact op
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300">
                    Onze diensten
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Vakmanschap</h2>
                  <p className="text-blue-100 mb-6">Met passie voor bouwen</p>
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waar staan wij voor</h2>
              <p className="text-xl text-gray-600">De waarden die ons drijven</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Wat doen wij?</h2>
              <p className="text-xl text-gray-600">Onze specialisaties op een rij</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link to={service.link} key={index}>
                  <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <Building2 className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        Meer informatie
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Ontdek de voordelen van ons bedrijf</h2>
              <p className="text-xl text-gray-600">Waarom kiezen voor ons?</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-16 rounded-3xl shadow-xl">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Samen bouwen aan uw toekomst</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Heeft u plannen om te bouwen of verbouwen? Neem dan vandaag nog contact met ons op. Ons team staat klaar om uw ideeën werkelijkheid te maken.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Phone className="mr-2 h-5 w-5" />
                    Bel ons direct
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Offerte aanvragen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  <span className="text-lg font-bold text-gray-900">MMT Projects</span>
                </div>
                <p className="text-gray-600">
                  Uw betrouwbare partner in bouwen & verbouwen
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Diensten</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/nieuwbouw-hasselt-limburg" className="hover:text-blue-600">Nieuwbouw</Link></li>
                  <li><Link to="/renovatie-hasselt-limburg" className="hover:text-blue-600">Renovatie</Link></li>
                  <li><Link to="/verbouwing-hasselt-limburg" className="hover:text-blue-600">Totaalprojecten</Link></li>
                  <li><Link to="/dakwerken-hasselt-limburg" className="hover:text-blue-600">Dakwerken</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                  <li><Link to="/diensten" className="hover:text-blue-600">Diensten</Link></li>
                  <li><Link to="/over-ons" className="hover:text-blue-600">Over ons</Link></li>
                  <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    +32 484 11 77 27
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    info@mmtprojects.be
                  </li>
                  <li>3500 Hasselt, België</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
              <p>© {new Date().getFullYear()} MMT Projects. Alle rechten voorbehouden.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
