
import { Phone, Mail, MapPin, CheckCircle, Zap, Shield, Clock, Users, Star, Battery } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const BatterijenZonnepanelen = () => {
  const services = [
    {
      title: "Lithium-ion Batterijen",
      items: [
        "Lange levensduur en hoge efficiëntie",
        "Verschillende capaciteiten beschikbaar",
        "Ideaal voor woningen en bedrijven",
        "Uitstekende prijs-kwaliteitverhouding",
        "Volledige garantie op batterijsystemen"
      ]
    },
    {
      title: "Professionele Installatie",
      items: [
        "Gecertificeerde monteurs",
        "Veilige aansluiting op bestaande systemen",
        "Installatie volgens alle normen",
        "Uitgebreide testen na installatie",
        "Begeleiding en uitleg over gebruik"
      ]
    },
    {
      title: "Complete Systemen",
      items: [
        "Inclusief omvormers en monitoring",
        "Compatibel met alle zonnepanelen",
        "Smart home integratie mogelijk",
        "Optimale energie-opslag",
        "Onderhoud en service beschikbaar"
      ]
    }
  ];

  const steden = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen", 
    "Diepenbeek", "Beringen", "Lommel", "Mol", "Turnhout"
  ];

  const gemeenten = [
    "Herentals", "Tessenderlo", "Houthalen-Helchteren", "Maasmechelen", 
    "Lanaken", "Riemst", "Hoeselt", "Wellen", "Borgloon", "Nieuwerkerken", 
    "Herk-de-Stad", "Lummen", "Ham", "Leopoldsburg", "Alken", "As", 
    "Bocholt", "Bree", "Dilsen-Stokkem", "Gingelom", "Halen", 
    "Hamont-Achel", "Hechtel-Eksel", "Kinrooi", "Kortessem", 
    "Opglabbeek", "Oudsbergen", "Peer", "Voeren", "Zonhoven", "Zutendaal"
  ];

  const voordelen = [
    "Maximale benutting van uw zonne-energie",
    "Energie-onafhankelijkheid, ook 's nachts",
    "Aanzienlijke besparing op energiekosten",
    "Verhoogde waarde van uw eigendom",
    "Bijdrage aan duurzame energie"
  ];

  const waaromKiezen = [
    {
      icon: MapPin,
      title: "Lokale Expertise",
      description: "Jarenlange ervaring in de bouwsector in Limburg"
    },
    {
      icon: Shield,
      title: "Kwaliteitsgarantie",
      description: "Volledige garantie op batterij installaties"
    },
    {
      icon: Clock,
      title: "Snelle Service",
      description: "Service binnen 50km van Hasselt"
    },
    {
      icon: Users,
      title: "Persoonlijke Begeleiding",
      description: "Van advies tot installatie en nazorg"
    }
  ];

  const procesStappen = [
    {
      titel: "Gratis Advies",
      beschrijving: "Neem contact op voor een vrijblijvende offerte voor batterijen voor zonnepanelen. Wij bezoeken uw locatie in Hasselt of omgeving voor een accurate inschatting."
    },
    {
      titel: "Systeem Analyse",
      beschrijving: "Ons team analyseert uw huidige zonnepanelen installatie om de optimale batterijoplossing te bepalen."
    },
    {
      titel: "Offerte op Maat",
      beschrijving: "Wij maken een gedetailleerde offerte met de best passende batterijen voor uw situatie en energiebehoefte."
    },
    {
      titel: "Professionele Installatie",
      beschrijving: "Onze gecertificeerde monteurs installeren uw batterijsysteem volgens de hoogste veiligheidsnormen."
    },
    {
      titel: "Testen en Oplevering",
      beschrijving: "Na installatie testen wij uitvoerig en leggen wij uit hoe u optimaal gebruik maakt van uw batterijsysteem."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Batterijen voor Zonnepanelen Hasselt - Professionele Installatie | MMT Projects</title>
        <meta name="description" content="Batterijen voor zonnepanelen in Hasselt ✓ Professionele installatie door MMT Projects ✓ Servicegebied: Hasselt, Genk, Sint-Truiden, Tongeren ✓ 50km radius ✓ Gratis offerte" />
        <link rel="canonical" href="https://www.mmtprojects.be/batterijen-zonnepanelen-hasselt-limburg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-green-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Battery className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Batterijen voor Zonnepanelen in Hasselt - Professionele Installatie door MMT Projects
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Bent u op zoek naar hoogwaardige batterijen voor zonnepanelen in Hasselt en omgeving? MMT Projects is uw betrouwbare partner voor de professionele installatie van zonnepaneelbatterijen in Limburg. Met jarenlange ervaring in de bouwsector verzorgen wij complete oplossingen voor energieopslag in Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek en alle gemeenten binnen een straal van 50 kilometer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel 0484117727
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Mail className="mr-2 h-5 w-5" />
                  Gratis offerte
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Why Choose Batteries Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Waarom Kiezen voor Batterijen voor Zonnepanelen?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Batterijen voor zonnepanelen bieden u de mogelijkheid om overtollige zonne-energie op te slaan voor later gebruik. Dit betekent dat u ook 's avonds en 's nachts kunt profiteren van uw eigen opgewekte groene stroom. In Hasselt en omliggende gemeenten zoals Genk en Sint-Truiden zien we steeds meer particulieren en bedrijven overstappen naar deze duurzame energieoplossing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {waaromKiezen.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Onze Batterij Installatie Services in Limburg
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects levert en installeert verschillende types batterijen voor zonnepanelen. Wij bedienen actief Hasselt, Tongeren, Bilzen, Diepenbeek, Genk, Sint-Truiden en alle andere gemeenten binnen 50 km van ons kantoor in Hasselt.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-600 flex items-center">
                      <Battery className="mr-2 h-6 w-6" />
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

        {/* Process Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Het Installatieproces bij MMT Projects
              </h2>
            </div>

            <div className="space-y-8">
              {procesStappen.map((stap, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Stap {index + 1}: {stap.titel}</h3>
                    <p className="text-gray-700">{stap.beschrijving}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Voordelen van Zonnepaneelbatterijen in Hasselt
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Door te kiezen voor batterijen voor zonnepanelen in Hasselt maximaliseert u uw energie-onafhankelijkheid. U bespaart op uw energierekening en draagt bij aan een duurzamere toekomst. Onze ervaren monteurs uit Limburg zorgen voor een vakkundige installatie die voldoet aan alle veiligheidsnormen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Voordelen van Batterijsystemen</h3>
                <ul className="space-y-4">
                  {voordelen.map((voordeel, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Waarom MMT Projects?</h3>
                <p className="text-gray-700 mb-4">
                  Als gevestigde bouwonderneming in Hasselt beschikken wij over:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Jarenlange ervaring in de bouwsector in Limburg</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Gecertificeerde monteurs voor batterij installaties</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Persoonlijke begeleiding van A tot Z</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Lokale kennis en snelle service in Hasselt</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Uitstekende referenties uit heel Limburg</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Servicegebied: 50km Rondom Hasselt
              </h2>
              <p className="text-xl text-gray-600">
                MMT Projects bedient een groot gebied rondom Hasselt voor de installatie van batterijen voor zonnepanelen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden en Grote Steden</h3>
                <div className="grid grid-cols-2 gap-4">
                  {steden.map((stad, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-gray-700">{stad}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Hasselt - Onze Thuisbasis</h4>
                  <p className="text-gray-700">
                    Als lokaal bedrijf gevestigd aan de Daaleindestraat 100 in Hasselt, kennen wij de specifieke uitdagingen en mogelijkheden van batterijinstallaties in onze thuisstad.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Kleinere Gemeenten</h3>
                <div className="grid grid-cols-2 gap-4 max-h-80 overflow-y-auto">
                  {gemeenten.map((gemeente, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="h-5 w-5 text-green-600 mr-2" />
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
                <Battery className="h-5 w-5 mr-2" />
                <span className="font-medium">Gratis Batterij Offerte</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                🔋 Klaar om te starten met batterijen voor uw zonnepanelen?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Contacteer MMT Projects nu voor een persoonlijke offerte en ontdek hoe u maximaal kunt besparen op uw energiekosten in Hasselt en omgeving!
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
                Contact MMT Projects - Uw Partner voor Zonnepaneelbatterijen in Hasselt
              </h2>
              <p className="text-xl text-gray-300">
                Voor professionele installatie van batterijen voor zonnepanelen in Hasselt en heel Limburg
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <MapPin className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Adres</h3>
                <p className="text-gray-300">Daaleindestraat 100<br />3720 Hasselt</p>
              </div>
              <div>
                <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Telefoon</h3>
                <p className="text-gray-300">0484117727</p>
              </div>
              <div>
                <Mail className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-300">info@mmtprojects.be</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-green-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Lokale Expertise in Batterijsystemen</h3>
                <p className="text-lg text-white/90">
                  Bel ons vandaag nog voor professioneel advies over batterijen voor zonnepanelen in Hasselt, Genk, Sint-Truiden, Tongeren of één van de andere gemeenten in ons serviceregio van 50 kilometer rondom Hasselt.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-500 hover:bg-green-600">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel voor gratis advies
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

export default BatterijenZonnepanelen;
