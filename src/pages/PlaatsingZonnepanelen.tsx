
import { Phone, Mail, MapPin, CheckCircle, Zap, Shield, Clock, Users, Star, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const PlaatsingZonnepanelen = () => {
  const services = [
    {
      title: "Vooronderzoek en Advies",
      items: [
        "Uitgebreide dakanalyse voor optimale plaatsing",
        "Controle draagkracht en oriëntatie",
        "Schaduwanalyse en zonnewinst berekening",
        "Persoonlijk advies op maat",
        "Gratis offerte en locatiebezoek"
      ]
    },
    {
      title: "Professionele Installatie",
      items: [
        "Gecertificeerde monteurs",
        "Hoogwaardige bevestigingsmaterialen",
        "Installatie volgens alle normen",
        "Weerbestendige montage",
        "Volledige garantie op werkzaamheden"
      ]
    },
    {
      title: "Complete Begeleiding",
      items: [
        "Van advies tot oplevering",
        "Technische analyse van uw dak",
        "Planning en coördinatie",
        "Controle en eindoplevering",
        "Nazorg en ondersteuning"
      ]
    }
  ];

  const steden = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen", 
    "Diepenbeek", "Beringen", "Heusden-Zolder", "Lommel", "Maaseik"
  ];

  const gemeenten = [
    "Alken", "As", "Bocholt", "Borgloon", "Bree", "Dilsen-Stokkem", 
    "Gingelom", "Halen", "Ham", "Hamont-Achel", "Hechtel-Eksel", 
    "Herk-de-Stad", "Hoeselt", "Houthalen-Helchteren", "Kinrooi", 
    "Kortessem", "Lanaken", "Leopoldsburg", "Lummen", "Maasmechelen", 
    "Nieuwerkerken", "Opglabbeek", "Oudsbergen", "Peer", "Riemst", 
    "Tessenderlo", "Voeren", "Wellen", "Zonhoven", "Zutendaal"
  ];

  const voordelen = [
    "Aanzienlijke besparing op uw energierekening",
    "Verhoogde waarde van uw eigendom",
    "Bijdrage aan duurzame energie",
    "Mogelijke premies en fiscale voordelen"
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
      description: "Volledige garantie op plaatsing zonnepanelen"
    },
    {
      icon: Clock,
      title: "Snelle Service",
      description: "Service binnen 50km van Hasselt"
    },
    {
      icon: Users,
      title: "Transparante Prijzen",
      description: "Geen verrassingen, duidelijke offerte"
    }
  ];

  const procesStappen = [
    {
      titel: "Gratis Offerte",
      beschrijving: "Neem contact op voor een vrijblijvende offerte voor plaatsing zonnepanelen. Wij bezoeken uw locatie in Hasselt of omgeving voor een accurate inschatting."
    },
    {
      titel: "Technische Analyse",
      beschrijving: "Ons team voert een grondige analyse uit van uw dak om de optimale plaatsing zonnepanelen te bepalen."
    },
    {
      titel: "Installatie Planning",
      beschrijving: "Wij plannen de plaatsing zonnepanelen op een moment dat u uitkomt, met minimale overlast."
    },
    {
      titel: "Professionele Montage",
      beschrijving: "Onze ervaren monteurs voeren de plaatsing zonnepanelen uit volgens de hoogste kwaliteitsnormen."
    },
    {
      titel: "Controle en Oplevering",
      beschrijving: "Na plaatsing zonnepanelen controleren wij alles uitvoerig en leveren uw installatie gebruiksklaar op."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Plaatsing Zonnepanelen Hasselt - Professionele Installatie | MMT Projects</title>
        <meta name="description" content="Professionele plaatsing zonnepanelen in Hasselt en Limburg. ✓ Ervaren monteurs ✓ Kwaliteitsgarantie ✓ 50km service ✓ Gratis offerte ✓ 0484117727" />
        <link rel="canonical" href="https://www.mmtprojects.be/plaatsing-zonnepanelen-hasselt-limburg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-yellow-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Sun className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Plaatsing Zonnepanelen Hasselt - Professionele Installatie door MMT Projects
              </h1>
              <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
                Bent u op zoek naar professionele plaatsing zonnepanelen in Hasselt en omgeving? MMT Projects is uw betrouwbare partner voor de installatie van zonnepanelen in Limburg. Met jarenlange ervaring in de bouwsector zorgen wij voor een vakkundige en duurzame plaatsing van uw zonnepanelen, zodat u optimaal kunt profiteren van zonne-energie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel 0484117727
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600">
                  <Mail className="mr-2 h-5 w-5" />
                  Gratis offerte
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Waarom Kiezen voor MMT Projects voor Uw Zonnepanelen Plaatsing?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Als gespecialiseerd constructiebedrijf in Hasselt begrijpen wij het belang van kwaliteitsvolle plaatsing zonnepanelen. Ons ervaren team zorgt voor professionele plaatsing met hoogwaardige materialen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {waaromKiezen.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
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
                Onze Plaatsing Zonnepanelen Service in Hasselt en Omgeving
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects biedt complete plaatsing zonnepanelen diensten aan particulieren en bedrijven in Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek en alle gemeenten binnen een straal van 50km.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-yellow-600 flex items-center">
                      <Sun className="mr-2 h-6 w-6" />
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
                Het Proces van Plaatsing Zonnepanelen bij MMT Projects
              </h2>
            </div>

            <div className="space-y-8">
              {procesStappen.map((stap, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
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
        <section className="py-16 px-4 bg-yellow-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Voordelen van Plaatsing Zonnepanelen in Limburg
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                De provincie Limburg biedt uitstekende omstandigheden voor plaatsing zonnepanelen. Met gemiddeld veel zonuren per jaar kunt u na plaatsing zonnepanelen rekenen op:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Voordelen van Zonnepanelen</h3>
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
                  Als lokaal constructiebedrijf in Hasselt combineren wij bouwexpertise met specialistische kennis van plaatsing zonnepanelen. Onze voordelen:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Jarenlange ervaring in de bouwsector in Limburg</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Lokale kennis van regelgeving en premies</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Snelle service binnen 50km van Hasselt</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Transparante prijzen zonder verrassingen</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Volledige garantie op plaatsing zonnepanelen</span>
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
                Plaatsing Zonnepanelen in Heel Limburg
              </h2>
              <p className="text-xl text-gray-600">
                MMT Projects is actief voor plaatsing zonnepanelen in alle steden en gemeenten binnen 50km van Hasselt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden en Grote Steden</h3>
                <div className="grid grid-cols-2 gap-4">
                  {steden.map((stad, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="h-5 w-5 text-yellow-600 mr-2" />
                      <span className="text-gray-700">{stad}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Hasselt - Onze Thuisbasis</h4>
                  <p className="text-gray-700">
                    Als lokaal bedrijf gevestigd aan de Daaleindestraat 100 in Hasselt, kennen wij de specifieke uitdagingen en mogelijkheden van plaatsing zonnepanelen in onze thuisstad.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Kleinere Gemeenten</h3>
                <div className="grid grid-cols-2 gap-4 max-h-80 overflow-y-auto">
                  {gemeenten.map((gemeente, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="h-5 w-5 text-yellow-600 mr-2" />
                      <span className="text-gray-700">{gemeente}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-yellow-500 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 inline-flex items-center px-4 py-2 rounded-full mb-6">
                <Sun className="h-5 w-5 mr-2" />
                <span className="font-medium">Gratis Zonnepanelen Offerte</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ☀️ Klaar voor Professionele Plaatsing Zonnepanelen in Hasselt?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Neem vandaag nog contact op met MMT Projects voor uw plaatsing zonnepanelen in Hasselt en omgeving. Onze experts staan klaar om u te helpen met vakkundig advies en een vrijblijvende offerte.
              </p>
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-8 py-4">
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
                Contact MMT Projects - Zonnepanelen Specialist Hasselt
              </h2>
              <p className="text-xl text-gray-300">
                Voor professionele plaatsing zonnepanelen in Hasselt en heel Limburg
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Adres</h3>
                <p className="text-gray-300">Daaleindestraat 100<br />3720 Hasselt</p>
              </div>
              <div>
                <Phone className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Telefoon</h3>
                <p className="text-gray-300">0484117727</p>
              </div>
              <div>
                <Mail className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-300">info@mmtprojects.be</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-yellow-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Lokale Expertise in Plaatsing Zonnepanelen</h3>
                <p className="text-lg text-white/90">
                  Met MMT Projects kiest u voor lokale expertise in plaatsing zonnepanelen. Wij kennen de Limburgse markt, werken samen met lokale leveranciers en zorgen voor service die past bij de Limburgse mentaliteit: eerlijk, betrouwbaar en kwaliteitsvol.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
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

export default PlaatsingZonnepanelen;
