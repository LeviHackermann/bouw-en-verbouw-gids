
import { Phone, Mail, MapPin, CheckCircle, Home, Shield, Clock, Users, Star, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const Isolatie = () => {
  const services = [
    {
      title: "Spouwmuurisolatie Hasselt",
      items: [
        "Injectie van hoogwaardige isolatiematerialen",
        "Direct besparen op verwarmingskosten",
        "Geschikt voor meeste woningen in Limburg",
        "Professionele uitvoering door specialisten",
        "Minimale overlast tijdens werkzaamheden"
      ]
    },
    {
      title: "Dakisolatie Limburg",
      items: [
        "Hellend dak isolatie",
        "Plat dak isolatie",
        "Zoldervloer isolatie",
        "Tot 30% warmteverlies voorkomen",
        "Expertise voor elke isolatieklus"
      ]
    },
    {
      title: "Vloerisolatie en Kelderplafond",
      items: [
        "Professionele vloerisolatie",
        "Kelderplafond isolatie",
        "Meer comfort en warmte",
        "Lagere energiekosten",
        "Aangepaste isolatieoplossingen"
      ]
    }
  ];

  const hoofdsteden = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen", 
    "Diepenbeek", "Beringen", "Lommel", "Pelt", "Peer"
  ];

  const gemeenten = [
    "Houthalen-Helchteren", "Zonhoven", "Lummen", "Ham", "Tessenderlo", 
    "Alken", "Wellen", "Riemst", "Lanaken", "Maasmechelen", 
    "Dilsen-Stokkem", "As", "Opglabbeek", "Hechtel-Eksel", 
    "Leopoldsburg", "Beringen"
  ];

  const voordelen = [
    "Lokale expertise: Jarenlange ervaring met isolatiewerken in Hasselt, Genk en heel Limburg",
    "Kwaliteitsgarantie: Wij werken alleen met gecertificeerde isolatiematerialen",
    "Snelle service: Isolatiewerken binnen 50km van Hasselt binnen korte termijn",
    "Gratis advies: Persoonlijk isolatieadvies voor uw woning",
    "Scherpe prijzen: Eerlijke tarieven voor al onze isolatiediensten"
  ];

  const waaromKiezen = [
    {
      icon: MapPin,
      title: "Lokaal bedrijf in Hasselt",
      description: "Gevestigd in het hart van Limburg"
    },
    {
      icon: Shield,
      title: "Gecertificeerde materialen",
      description: "Alleen hoogwaardige isolatiematerialen"
    },
    {
      icon: Clock,
      title: "Snelle service binnen 50km",
      description: "Korte levertijden in heel Limburg"
    },
    {
      icon: Users,
      title: "Gratis advies op maat",
      description: "Persoonlijk isolatieadvies voor elke situatie"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Isolatie Hasselt - Professionele Isolatiewerken in Limburg | MMT Projects</title>
        <meta name="description" content="Isolatie Hasselt ✓ MMT Projects - Professionele isolatiewerken in Hasselt, Genk, Sint-Truiden en omgeving. Spouwmuurisolatie, dakisolatie & vloerisolatie. Gratis offerte!" />
        <link rel="canonical" href="https://www.mmtprojects.be/isolatie-hasselt-limburg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Thermometer className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Isolatie Hasselt - Professionele Isolatiewerken in Limburg
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Bij MMT Projects bent u aan het juiste adres voor professionele isolatiewerken in Hasselt en omgeving. Als ervaren isolatiebedrijf in Limburg zorgen wij voor optimale thermische isolatie van uw woning of bedrijfspand. Onze isolatiespecialisten bedienen Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek en alle gemeenten binnen een straal van 50 kilometer.
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
                Onze Isolatiediensten in Hasselt en Omgeving
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600 flex items-center">
                      <Thermometer className="mr-2 h-6 w-6" />
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
                Waarom Kiezen voor MMT Projects Isolatie?
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
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Isolatie Premies en Subsidies</h4>
                  <p className="text-gray-700 mb-4">
                    Als isolatiebedrijf in Hasselt helpen wij u graag bij het aanvragen van isolatiepremies en subsidies. In Limburg zijn er verschillende steunmaatregelen beschikbaar voor isolatiewerken.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Hulp bij aanvragen premies</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Kennis van alle procedures</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Ondersteuning bij subsidies</span>
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
                Ons Werkgebied voor Isolatiewerken
              </h2>
              <p className="text-xl text-gray-600">
                MMT Projects voert isolatiewerken uit in heel Limburg binnen een straal van 50km
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

        {/* CTA Section */}
        <section className="py-16 px-4 bg-green-600 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 inline-flex items-center px-4 py-2 rounded-full mb-6">
                <Thermometer className="h-5 w-5 mr-2" />
                <span className="font-medium">Gratis Isolatie-offerte</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                🏠 Gratis Isolatie-offerte Hasselt
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Wilt u weten wat isolatiewerken kosten voor uw woning in Hasselt of omgeving? Vraag vandaag nog een gratis offerte aan bij MMT Projects. Onze isolatiespecialisten komen graag langs voor een vrijblijvende inspectie en advies op maat.
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
                Contact MMT Projects - Isolatie Hasselt
              </h2>
              <p className="text-xl text-gray-300">
                Voor isolatiewerken in Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek en heel Limburg
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

export default Isolatie;
