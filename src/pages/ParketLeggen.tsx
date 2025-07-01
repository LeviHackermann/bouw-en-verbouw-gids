
import { Helmet } from 'react-helmet-async';
import { Building2, Phone, Mail, MapPin, CheckCircle, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ParketLeggen = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Parket Leggen Hasselt - Professioneel Parket Installeren | MMT Projects</title>
        <meta name="description" content="✓ Professioneel parket leggen in Hasselt en omgeving door MMT Projects. Ervaren vakmannen, gratis offerte. Massief parket, laminaat, engineered parket ☎ 0484117727" />
        <meta name="keywords" content="parket leggen, Hasselt, Limburg, parket installatie, massief parket, laminaat, MMT Projects" />
      </Helmet>

      {/* Header */}
      <header className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="h-12 w-12 mr-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Parket Leggen Hasselt - Professioneel Parket Installeren
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            MMT Projects - Uw Specialist voor Parket Leggen in Hasselt en Omgeving
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              MMT Projects is uw betrouwbare partner voor parket leggen in Hasselt en omstreken. Met jarenlange ervaring 
              in de bouwsector zorgen wij voor een perfecte afwerking van uw parketvloer. Of u nu woont in Hasselt, Genk, 
              Sint-Truiden, Tongeren, Bilzen of Diepenbeek - wij staan klaar om uw droomvloer te realiseren.
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Waarom Kiezen voor MMT Projects?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Als gespecialiseerd bouwbedrijf in Limburg begrijpen wij de lokale behoeften en specificaties. 
              Onze vakmannen hebben uitgebreide ervaring met parket leggen in verschillende woningtypes, van historische 
              panden in het centrum van Hasselt tot moderne nieuwbouwprojecten in de regio.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Lokale Expertise</h3>
                  <p className="text-gray-600">Jarenlange ervaring in Hasselt en omgeving</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Vakmanschap Gegarandeerd</h3>
                  <p className="text-gray-600">Hoogwaardige materialen en perfecte afwerking</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Snelle Service</h3>
                  <p className="text-gray-600">Efficiënte uitvoering zonder kwaliteitsverlies</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Onze Parket Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Parket Installatie Hasselt</h3>
                <div className="space-y-3">
                  {[
                    "Massief parket leggen",
                    "Laminaat installatie", 
                    "Engineered parket plaatsen",
                    "PVC en vinyl vloeren",
                    "Ondervloer preparatie en isolatie"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Parket Renovatie en Onderhoud</h3>
                <div className="space-y-3">
                  {[
                    "Parket schuren en lakken",
                    "Beschadigde planken vervangen",
                    "Parket reparatie",
                    "Kleurbehandeling en afwerking"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Service Area */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Ons Werkgebied: Hasselt en 50km Omgeving
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              MMT Projects is actief in Hasselt en alle gemeenten binnen een straal van 50 kilometer. Wij leggen parket in:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Provincie Limburg:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hasselt (centrum en alle deelgemeenten), Genk en omliggende wijken, Sint-Truiden en landelijke gebieden, 
                  Tongeren (historische binnenstad tot buitenwijken), Bilzen en Hoeselt, Diepenbeek en universiteitswijk, 
                  Beringen en Heusden-Zolder, Leopoldsburg en Hechtel-Eksel
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Aangrenzende Regio's:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Leuven en Vlaams-Brabant, Maaseik en Maasvallei, Voeren en Oostkantons
                </p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Het Parket Leggen Proces bij MMT Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gratis Offerte en Inspectie</h3>
                    <p className="text-gray-700">Onze specialisten komen naar uw woning voor een gratis inspectie en advies over de beste parketsoort.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Voorbereiding en Planning</h3>
                    <p className="text-gray-700">Perfecte voorbereiding van de ondergrond met egalisatie en isolatie indien nodig.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professionele Installatie</h3>
                    <p className="text-gray-700">Vakkundige installatie met hoogwaardige materialen en moderne technieken.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Afwerking en Nazorg</h3>
                    <p className="text-gray-700">Perfecte afwerking met uitleg over onderhoud en nazorgservice.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Parquet Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Parketsoorten die Wij Leggen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Massief Parket</h3>
                  <p className="text-gray-700">Authentiek hout dat geschuurd en gelakt kan worden. Perfect voor klassieke interieurs in Hasselt en omgeving.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Engineered Parket</h3>
                  <p className="text-gray-700">Stabiele constructie met echte houttoplaag. Ideaal voor vloerverwarming in moderne woningen.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Laminaat</h3>
                  <p className="text-gray-700">Kosteneffectieve oplossing met uitstekende slijtvastheid. Geschikt voor alle ruimtes.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Luxury Vinyl Tiles (LVT)</h3>
                  <p className="text-gray-700">Waterbestendige vloer met houtuitstraling. Perfect voor badkamers en keukens.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Voordelen van MMT Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Gratis offerte en advies",
                "Ervaren vakmannen uit de regio", 
                "Hoogwaardige materialen",
                "Scherpe prijzen",
                "Volledige garantie op materiaal en uitvoering",
                "Snelle service in heel Limburg"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-50 p-8 rounded-2xl mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Gratis Offerte Parket Leggen Hasselt
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Wilt u een nieuwe parketvloer in uw woning in Hasselt of omgeving? Neem contact op voor een 
                vrijblijvende offerte. Onze specialisten adviseren u graag over de beste oplossing voor uw situatie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel voor gratis offerte
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 h-5 w-5" />
                  Email ons
                </Button>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              Contact en Bereikbaarheid
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              MMT Projects - Uw Specialist voor Parket Leggen in Hasselt
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Adres:</p>
                    <p className="text-gray-700">Daaleindestraat 100, 3720 Hasselt</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-gray-700">info@mmtprojects.be</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Telefoon:</p>
                    <p className="text-gray-700">0484117727</p>
                  </div>
                </div>
                <div className="border-t pt-4 mt-4">
                  <p className="text-sm text-gray-600">
                    <strong>Werkdagen:</strong> Maandag tot vrijdag, 8:00 - 18:00<br />
                    <strong>Service:</strong> Spoedgevallen en weekends op afspraak
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Additional SEO Content */}
          <section className="bg-gray-50 p-8 rounded-2xl">
            <p className="text-gray-700 leading-relaxed">
              MMT Projects: Uw betrouwbare partner voor parket leggen in Hasselt, Genk, Sint-Truiden, Tongeren en heel Limburg. 
              Professioneel, betrouwbaar en altijd een perfecte afwerking. Wij zijn bereikbaar voor projecten binnen een straal 
              van 50 kilometer rond Hasselt. Of u nu in het centrum woont, in de buitenwijken van Genk, of in een landelijke 
              omgeving rondom Sint-Truiden - MMT Projects staat voor u klaar.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ParketLeggen;
