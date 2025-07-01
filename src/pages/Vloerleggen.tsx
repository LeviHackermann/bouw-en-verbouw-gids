
import { Helmet } from 'react-helmet-async';
import { Building2, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Users, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Vloerleggen = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Vloerleggen Hasselt - Professionele Vloerwerken in Limburg | MMT Projects</title>
        <meta name="description" content="Vloerleggen Hasselt ✓ Professionele vloerlegger voor laminaat, parket & PVC ✓ Service in heel Limburg ✓ Gratis offerte ✓ 10+ jaar ervaring ✓ Bel 0484117727" />
        <meta name="keywords" content="vloerleggen Hasselt, vloerlegger Limburg, laminaat leggen, parket installatie, PVC vloeren" />
      </Helmet>

      {/* Header */}
      <header className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Vloerleggen Hasselt - Professionele Vloerwerken in Limburg
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Zoekt u een betrouwbare vloerlegger in Hasselt en omgeving? MMT Projects is uw specialist voor alle soorten vloerwerken in Hasselt, Genk, Sint-Truiden, Tongeren en heel Limburg. Met jarenlange ervaring in de regio leveren wij kwalitatieve vloerlegwerken voor particuliere en professionele klanten.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 mr-4">
                <Phone className="mr-2 h-5 w-5" />
                Bel Direct: 0484117727
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="mr-2 h-5 w-5" />
                Gratis Offerte
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Vloerlegdiensten in Hasselt en Omgeving</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Als erkende vloerlegger in Hasselt bieden wij een volledig pakket aan vloerwerken:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Laminaat vloeren leggen',
              'Parket installatie en renovatie',
              'PVC en vinyl vloeren',
              'Tegelvloeren en natuursteen',
              'Industriële vloeren voor bedrijven',
              'Vloerverwarming installatie',
              'Vloerisolatie en ondervloeren'
            ].map((service, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Waarom Kiezen voor MMT Projects als Vloerlegger?</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Onze lokale expertise in Hasselt en heel Limburg maakt het verschil. Wij kennen de specifieke uitdagingen van vloerleggen in onze regio en werken uitsluitend met hoogwaardige materialen die geschikt zijn voor het Limburgse klimaat.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Meer dan 10 jaar ervaring</h3>
              <p className="text-gray-700">Ervaring in Hasselt en omgeving met gecertificeerde vloerleggers</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Garantie op werkzaamheden</h3>
              <p className="text-gray-700">Volledige garantie op al onze vloerlegwerken en materialen</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Lokale kennis</h3>
              <p className="text-gray-700">Kennis van bouwvoorschriften en klimaat in Limburg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Servicegebied Vloerleggen - 50km rond Hasselt</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            MMT Projects voert vloerlegwerken uit in een straal van 50 kilometer rond Hasselt. Onze vloerleggers zijn actief in:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Grote steden:</h3>
              <p className="text-gray-700 leading-relaxed">
                Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Beringen, Heusden-Zolder, Lommel, Maaseik
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Kleinere gemeenten:</h3>
              <p className="text-gray-700 leading-relaxed">
                Alken, As, Bocholt, Borgloon, Bree, Dilsen-Stokkem, Gingelom, Halen, Ham, Hamont-Achel, Hechtel-Eksel, Herck-de-Stad, Herk-de-Stad, Hoeselt, Houthalen-Helchteren, Kinrooi, Kortessem, Lanaken, Leopoldsburg, Lummen, Maasmechelen, Nieuwerkerken, Opglabbeek, Oudsbergen, Peer, Pelt, Riemst, Tessenderlo, Voeren, Wellen, Zonhoven, Zutendaal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Types */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Soorten Vloeren die wij Leggen in Limburg</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Laminaatvloeren Hasselt</h3>
                <p className="text-gray-700">
                  Laminaat is een populaire keuze voor woningen in Hasselt. Onze vloerleggers installeren alle merken laminaat met perfecte afwerking en lange garantie.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Parketvloeren Limburg</h3>
                <p className="text-gray-700">
                  Van klassiek eiken tot moderne bamboe - wij leggen alle soorten parketvloeren. Onze expertise in parket renovatie helpt u ook bij het opknappen van bestaande houten vloeren.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">PVC en Vinyl Vloeren</h3>
                <p className="text-gray-700">
                  Waterbestendige vloeren zijn ideaal voor badkamers en keukens. Wij installeren de nieuwste PVC en luxury vinyl tiles (LVT) in heel de regio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Proces van Vloerleggen - Van Offerte tot Oplevering</h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              'Gratis inspectie en offerte',
              'Materiaal selectie',
              'Planning en voorbereiding',
              'Professionele installatie',
              'Oplevering en garantie'
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde Vragen Vloerleggen Hasselt</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Wat kost vloerleggen in Hasselt?</h3>
              <p className="text-gray-700">De kosten voor vloerleggen variëren per type vloer en oppervlakte. Wij geven altijd een transparante offerte zonder verborgen kosten.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Hoe lang duurt het leggen van een vloer?</h3>
              <p className="text-gray-700">Afhankelijk van de oppervlakte en het type vloer duurt vloerleggen tussen 1 en 3 dagen voor een gemiddelde woning.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Bieden jullie garantie op vloerwerken?</h3>
              <p className="text-gray-700">Ja, wij geven garantie op zowel materiaal als vakmanschap. De garantietermijn verschilt per type vloer.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Kunnen jullie ook weekends werken?</h3>
              <p className="text-gray-700">In overleg kunnen wij ook in het weekend vloerlegwerken uitvoeren, ideaal voor particuliere klanten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Offerte Aanvragen - Vloerlegger Hasselt</h2>
          <p className="text-xl mb-8">
            Wilt u weten wat het kost om uw vloer te laten leggen? Vraag vandaag nog een vrijblijvende offerte aan. Onze vloerleggers komen graag langs voor een gesprek over uw wensen en mogelijkheden.
          </p>
          
          <div className="bg-white/10 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Contact MMT Projects:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-lg">
              <div className="flex items-center justify-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>Daaleindestraat 100, 3720 Hasselt</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>info@mmtprojects.be</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>0484117727</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Bel nu voor gratis offerte
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="mr-2 h-5 w-5" />
              Email voor informatie
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vloerleggen;
