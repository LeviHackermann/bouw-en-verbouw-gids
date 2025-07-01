
import { Phone, Mail, MapPin, CheckCircle, Home, Shield, Clock, Users, Star, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const Kozijnen = () => {
  const services = [
    {
      title: "Nieuwe Kozijnen Installatie",
      items: [
        "Kunststof kozijnen plaatsing",
        "Houten kozijnen op maat",
        "Aluminium kozijnenframes",
        "Energiezuinige kozijnen oplossingen",
        "Professionele montage en afwerking"
      ]
    },
    {
      title: "Kozijnen Renovatie & Onderhoud",
      items: [
        "Bestaande kozijnen herstellen",
        "Kozijnen schilderen en afwerken",
        "Rubber vervangen en kitten",
        "Hang- en sluitwerk reparaties",
        "Preventief onderhoud"
      ]
    },
    {
      title: "Kozijnen Reparatie Service",
      items: [
        "Snelle kozijnen reparaties",
        "Glasreparatie en vervanging",
        "Slot- en scharnier reparaties",
        "Noodreparaties kozijnen",
        "24/7 spoedservice beschikbaar"
      ]
    }
  ];

  const hoofdsteden = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen", 
    "Diepenbeek", "Lommel", "Beringen", "Heusden-Zolder", "Lanaken"
  ];

  const gemeenten = [
    "Alken", "As", "Bocholt", "Borgloon", "Bree", "Dilsen-Stokkem", 
    "Gingelom", "Halen", "Ham", "Hamont-Achel", "Hechtel-Eksel", 
    "Herck-de-Stad", "Herk-de-Stad", "Hoeselt", "Houthalen-Helchteren", 
    "Kinrooi", "Kortessem", "Leopoldsburg", "Lummen", "Maaseik", 
    "Maasmechelen", "Nieuwerkerken", "Opglabbeek", "Oudsbergen", 
    "Peer", "Riemst", "Tessenderlo", "Voeren", "Wellen", "Zonhoven", "Zutendaal"
  ];

  const voordelen = [
    "Lokale expertise: Jarenlange ervaring met kozijnen in Hasselt en heel Limburg",
    "Kwaliteitsgarantie: Uitgebreide garantie op materialen en vakmanschap",
    "Snelle service: Kozijnen diensten binnen 50km van Hasselt",
    "Gratis advies: Persoonlijk adviesgesprek en maatwerkoplossingen",
    "Gecertificeerde monteurs: Vakkundige installatie volgens alle normen"
  ];

  const waaromKiezen = [
    {
      icon: MapPin,
      title: "Lokaal bedrijf in Hasselt",
      description: "Kennis van lokale bouwvoorschriften en klimaat"
    },
    {
      icon: Shield,
      title: "Kwaliteit en garantie",
      description: "Hoogwaardige materialen met volledige garantie"
    },
    {
      icon: Clock,
      title: "Snelle service binnen 50km",
      description: "Korte lijnen en flexibele planning"
    },
    {
      icon: Users,
      title: "Persoonlijke service",
      description: "Directe communicatie en maatwerk"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kozijnen Hasselt - Professionele Kozijnen Installatie & Renovatie | MMT Projects</title>
        <meta name="description" content="Expert Kozijnen Services in Hasselt en Omgeving ✓ MMT Projects - Professionele kozijnen installatie, renovatie en reparatie in Hasselt, Genk, Sint-Truiden. Gratis offerte!" />
        <link rel="canonical" href="https://www.mmtprojects.be/kozijnen-hasselt-limburg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Home className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kozijnen Hasselt - Professionele Kozijnen Installatie & Renovatie
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                MMT Projects is uw betrouwbare partner voor kozijnen in Hasselt en de gehele provincie Limburg. Met jarenlange ervaring in de bouw leveren wij kwalitatieve kozijnen installatie, renovatie en reparatie diensten aan particulieren en bedrijven in een straal van 50 kilometer rondom Hasselt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel 0484117727
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-5 w-5" />
                  Gratis offerte
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Onze Kozijnen Diensten in Hasselt
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600 flex items-center">
                      <Wrench className="mr-2 h-6 w-6" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Waarom Kiezen voor MMT Projects Kozijnen?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {waaromKiezen.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Onze Voordelen</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Waarom MMT Projects?</h4>
                  <ul className="space-y-2">
                    {voordelen.map((voordeel, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{voordeel}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Lokale Expertise in Limburg</h4>
                  <p className="text-gray-700 mb-4">
                    Met onze vestiging in Hasselt kennen wij de lokale bouwvoorschriften en klimatologische omstandigheden in Limburg door en door. Dit lokale voordeel betekent dat wij kozijnen kunnen leveren die perfect aangepast zijn aan de Limburgse weersomstandigheden en architectuur.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Aangepast aan lokaal klimaat</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Kennis van bouwvoorschriften</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Passend bij Limburgse architectuur</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Servicegebied: Hasselt en 50km Omgeving
              </h2>
              <p className="text-xl text-gray-600">
                MMT Projects verzorgt kozijnen diensten in heel Limburg en omliggende gebieden
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden en Grote Steden</h3>
                <div className="grid grid-cols-2 gap-4">
                  {hoofdsteden.map((stad, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">{stad}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Kleinere Gemeenten in de Regio</h3>
                <div className="grid grid-cols-2 gap-4 max-h-80 overflow-y-auto">
                  {gemeenten.map((gemeente, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">{gemeente}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-green-600 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 inline-flex items-center px-4 py-2 rounded-full mb-6">
                <Home className="h-5 w-5 mr-2" />
                <span className="font-medium">Gratis Kozijnen Offerte</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                🏠 Gratis Offerte Kozijnen Hasselt
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Wilt u weten wat nieuwe kozijnen of kozijnen renovatie voor uw pand kost? Neem vandaag nog contact met ons op voor een vrijblijvende offerte. Onze specialists komen graag langs voor een persoonlijk adviesgesprek en maatwerkoplossing.
              </p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Phone className="mr-2 h-6 w-6" />
                0484 11 77 27
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contact MMT Projects - Kozijnen Specialist Hasselt
              </h2>
              <p className="text-xl text-gray-300">
                Voor kozijnen in Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen en heel Limburg
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Adres</h3>
                <p className="text-gray-300">Daaleindestraat 100<br />3720 Hasselt</p>
              </div>
              <div>
                <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Telefoon</h3>
                <p className="text-gray-300">0484117727</p>
              </div>
              <div>
                <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-300">info@mmtprojects.be</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel voor gratis inspectie
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Mail className="mr-2 h-5 w-5" />
                  Vraag offerte aan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} MMT Projects. Alle rechten voorbehouden.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Kozijnen;
