import { Helmet } from 'react-helmet-async';
import { Building2, Phone, Mail, MapPin, CheckCircle, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LaminaatLeggen = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Professioneel Laminaat Leggen in Hasselt en Omgeving - MMT Projects</title>
        <meta name="description" content="✓ Laminaat leggen door experts in Hasselt, Genk, Sint-Truiden en heel Limburg. 15+ jaar ervaring. Gratis offerte! ☎ 0484117727" />
        <meta name="keywords" content="laminaat leggen, Hasselt, Limburg, vloeren, laminaatvloer, MMT Projects" />
      </Helmet>

      <Navigation />

      {/* Header */}
      <header className="bg-blue-600 text-white py-16 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="h-12 w-12 mr-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professioneel Laminaat Leggen in Hasselt en Omgeving
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            MMT Projects - Uw specialist in laminaatvloeren voor heel Limburg
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Bij MMT Projects bent u aan het juiste adres voor het vakkundig leggen van laminaat in Hasselt en omstreken. 
              Als gespecialiseerd constructiebedrijf met jarenlange ervaring in de regio Limburg, zorgen wij voor een 
              perfecte afwerking van uw laminaatvloer tegen een scherpe prijs.
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Waarom Kiezen Voor MMT Projects Voor Uw Laminaat?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Ons ervaren team legt al meer dan 15 jaar laminaatvloeren in Hasselt, Genk, Sint-Truiden, Tongeren en 
              heel de provincie Limburg. We kennen de lokale woningen en hun specifieke uitdagingen, van historische 
              panden in het centrum van Hasselt tot moderne nieuwbouwprojecten in Diepenbeek.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">15+ Jaar Ervaring</h3>
                  <p className="text-gray-600">Jarenlange expertise in de regio Limburg</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Kwaliteit Gegarandeerd</h3>
                  <p className="text-gray-600">A-merken laminaat met volledige garantie</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Snel & Efficiënt</h3>
                  <p className="text-gray-600">Meeste projecten afgerond binnen 1-2 dagen</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Onze Laminaat Leg Service Omvat:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Professionele voorbereiding van de ondergrond",
                "Nauwkeurige opmeting en berekening van materialen",
                "Vakkundige plaatsing van laminaatplanken",
                "Perfecte afwerking van plinten en overgangen",
                "Volledige opruiming na afronding van de werkzaamheden"
              ].map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Service Area */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Werkgebied: Heel Limburg en Omgeving
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              MMT Projects legt laminaat in een straal van 50 kilometer rondom ons kantoor in Hasselt. 
              Dit betekent dat we ook actief zijn in:
            </p>
            <p className="text-gray-700 leading-relaxed">
              Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Lummen, Beringen, Houthalen-Helchteren, 
              Maasmechelen, Lanaken, Riemst, Hoeselt, Alken, Wellen, Borgloon, Heers, Nieuwerkerken, 
              Herk-de-Stad, Halen en alle tussenliggende gemeenten.
            </p>
          </section>

          {/* Local Expertise */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Lokale Expertise Die Het Verschil Maakt
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Als Hasselts bedrijf begrijpen we de klimatologische omstandigheden van onze streek. We weten 
              welke laminaattypes het beste presteren in de vochtige winters en warme zomers van Limburg. 
              Onze lokale kennis zorgt ervoor dat uw laminaatvloer jarenlang mooi blijft.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-50 p-8 rounded-2xl mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Gratis Offerte en Advies
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Wilt u weten wat het leggen van laminaat in uw woning kost? Neem vandaag nog contact met ons op 
                voor een vrijblijvende offerte. Onze specialisten komen gratuut bij u thuis in Hasselt of omgeving 
                om de situatie te bekijken en u te adviseren over de beste oplossing.
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
              Neem Vandaag Nog Contact Op
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Bent u toe aan een nieuwe laminaatvloer in Hasselt of omgeving? MMT Projects staat klaar om u te helpen. 
              Van klein onderhoud tot grote renovatieprojecten - wij regelen het allemaal.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Contactgegevens:</h3>
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
              </div>
            </div>
          </section>

          {/* Additional SEO Content */}
          <section className="bg-gray-50 p-8 rounded-2xl">
            <p className="text-gray-700 leading-relaxed">
              MMT Projects is uw betrouwbare partner voor laminaat leggen in heel de provincie Limburg. 
              Of u nu woont in het historische centrum van Hasselt, de groene wijken van Genk, of de landelijke 
              omgeving van Sint-Truiden - onze ervaren vakmensen komen naar u toe. We bedienen alle postcodes 
              in onze regio en staan bekend om onze punctualiteit, vakmanschap en eerlijke prijzen.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LaminaatLeggen;
