
import { Helmet } from 'react-helmet-async';
import { Building2, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Users, Award, Wrench } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Loodgieterswerk = () => {
  const services = [
    {
      title: "Installatie en Nieuwbouw",
      items: [
        "Complete sanitaire installaties",
        "Waterleiding aanleg en vernieuwing",
        "Riolering en afvoersystemen",
        "Radiatoren en verwarmingsleidingen",
        "Boilerinstallaties"
      ]
    },
    {
      title: "Reparatie en Onderhoud",
      items: [
        "Lekkage reparaties",
        "Verstopte afvoeren",
        "Kraan- en toiletproblemen",
        "Spoedinterventies loodgieterswerk",
        "Preventief onderhoud sanitaire installaties"
      ]
    },
    {
      title: "Renovatie en Verbouwing",
      items: [
        "Badkamer renovaties",
        "Keuken loodgieterswerk",
        "Sanitair vernieuwing",
        "Leidingwerk bij verbouwingen"
      ]
    }
  ];

  const hoofdsteden = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen", 
    "Diepenbeek", "Beringen", "Lommel", "Peer", "Bree"
  ];

  const gemeenten = [
    "Zonhoven", "Houthalen-Helchteren", "Lummen", "Ham", "Tessenderlo", 
    "Alken", "Wellen", "Riemst", "Lanaken", "Maasmechelen", 
    "Dilsen-Stokkem", "As", "Opglabbeek", "Meeuwen-Gruitrode", 
    "Hechtel-Eksel", "Leopoldsburg"
  ];

  const specialiteiten = [
    "Waterbesparende installaties",
    "Energiezuinige boilersystemen",
    "Regenwater recuperatie systemen",
    "Moderne leidingmaterialen (PEX, multilayer)"
  ];

  const waaromKiezen = [
    {
      icon: MapPin,
      title: "Lokaal bedrijf in Hasselt",
      description: "Gevestigd in het hart van Limburg"
    },
    {
      icon: Shield,
      title: "Jarenlange ervaring in Limburg",
      description: "Uitgebreide kennis van lokale omstandigheden"
    },
    {
      icon: Clock,
      title: "Snelle service binnen 50km",
      description: "Snel ter plaatse voor spoedinterventies"
    },
    {
      icon: Users,
      title: "Transparante prijzen",
      description: "Eerlijke en duidelijke kostprijzen"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Loodgieterswerk Hasselt | Professionele Loodgieter Limburg | MMT Projects</title>
        <meta name="description" content="✓ Professioneel loodgieterswerk in Hasselt en omgeving. Ervaren loodgieters voor installatie, reparatie en onderhoud. 50km service radius. Bel 0484117727 voor offerte." />
        <link rel="canonical" href="https://www.mmtprojects.be/loodgieterswerk-hasselt-limburg" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-600 text-white py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Wrench className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professioneel Loodgieterswerk in Hasselt en Limburg
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Bent u op zoek naar betrouwbaar loodgieterswerk in Hasselt? MMT Projects is uw lokale specialist voor alle loodgieterswerkzaamheden in Hasselt en omstreken. Met jarenlange ervaring in de Limburgse bouwsector leveren wij kwalitatief hoogstaand loodgieterswerk voor particulieren en bedrijven.
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
                Onze Loodgietersdiensten in Hasselt
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
                Waarom Kiezen voor MMT Projects Loodgieterswerk?
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
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Lokale Expertise in Limburg</h3>
              <p className="text-gray-700 mb-6">
                Als gevestigd bouwbedrijf in Hasselt kennen wij de lokale omstandigheden en bouwnormen. Ons team van ervaren loodgieters heeft uitgebreide kennis van de Limburgse bouwsector en levert maatwerk voor elke situatie.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Kwaliteit en Betrouwbaarheid</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Gecertificeerde loodgieters</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Hoogwaardige materialen</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Garantie op werkzaamheden</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Transparante prijsstelling</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Moderne Specialiteiten</h4>
                  <ul className="space-y-2">
                    {specialiteiten.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
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
                Servicegebied Loodgieterswerk
              </h2>
              <p className="text-xl text-gray-600">
                MMT Projects verzorgt loodgieterswerk in Hasselt en binnen een straal van 50km
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden Limburg</h3>
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
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Omliggende Gemeenten</h3>
                <div className="grid grid-cols-2 gap-4">
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

        {/* Emergency CTA */}
        <section className="py-16 px-4 bg-red-600 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 inline-flex items-center px-4 py-2 rounded-full mb-6">
                <Wrench className="h-5 w-5 mr-2" />
                <span className="font-medium">Spoedinterventie nodig?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                🔧 Spoedinterventie nodig?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Bel direct 0484117727 voor snelle hulp bij loodgietersproblemen in Hasselt en omgeving. Wij zijn 7 dagen per week bereikbaar voor noodgevallen.
              </p>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
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
                Contact Opnemen voor Loodgieterswerk in Hasselt
              </h2>
              <p className="text-xl text-gray-300">
                Heeft u vragen over ons loodgieterswerk of wilt u een vrijblijvende offerte?
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
              <p className="text-xl mb-8">
                Onze ervaren loodgieters staan klaar om uw loodgietersprobleem snel en professioneel op te lossen. Van spoedinterventies tot complete renovaties - MMT Projects is uw betrouwbare partner voor loodgieterswerk in Hasselt en heel Limburg.
              </p>
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

export default Loodgieterswerk;
