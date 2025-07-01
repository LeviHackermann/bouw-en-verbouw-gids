
import { Helmet } from 'react-helmet-async';
import { Building2, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Users, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Tegelwerk = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Tegelwerk Hasselt - Professionele Tegelzetters in Limburg | MMT Projects</title>
        <meta name="description" content="Tegelwerk Hasselt ✓ Professionele tegelzetters in Limburg ✓ Badkamer- & vloertegels ✓ Natuursteen ✓ Gratis offerte ✓ Service in heel Limburg ✓ Bel 0484117727" />
        <meta name="keywords" content="tegelwerk Hasselt, tegelzetter Limburg, badkamertegels, vloertegels, natuursteen" />
      </Helmet>

      {/* Header */}
      <header className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Tegelwerk Hasselt - Professionele Tegelzetters in Limburg
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              MMT Projects is uw betrouwbare partner voor kwalitatief tegelwerk in Hasselt en omgeving. Met jarenlange ervaring in de tegelsector verzorgen wij professioneel tegelwerk voor particulieren en bedrijven in heel Limburg. Van badkamertegels tot vloertegels, wij leveren vakmanschap van de hoogste kwaliteit binnen een straal van 50 kilometer rond Hasselt.
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
          <h2 className="text-3xl font-bold text-center mb-12">Onze Tegelwerk Diensten</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Als specialist in tegelwerk bieden wij een compleet pakket aan tegeldiensten. Onze ervaren tegelzetters werken met de nieuwste technieken en hoogwaardige materialen voor duurzame resultaten. Wij verzorgen zowel binnen- als buitentegelwerk, inclusief wandtegels, vloertegels, mozaïektegels en natuursteen.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Badkamertegels en sanitair tegelwerk',
              'Keukentegels en spatwanden',
              'Vloertegels voor binnen en buiten',
              'Wandtegels en decoratieve tegels',
              'Natuursteen en keramische tegels',
              'Mozaïektegels en designtegels',
              'Tegelreparaties en herstellingen'
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
          <h2 className="text-3xl font-bold text-center mb-12">Waarom Kiezen voor MMT Projects Tegelwerk</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Ons team van gecertificeerde tegelzetters combineert traditioneel vakmanschap met moderne technieken. Wij werken uitsluitend met A-kwaliteit tegels en voegmaterialen voor een langdurig mooi resultaat. Elke tegelklus wordt uitgevoerd volgens de hoogste kwaliteitsnormen, met oog voor detail en perfecte afwerking.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Gecertificeerde tegelzetters</h3>
              <p className="text-gray-700">Ervaren vakmannen met jarenlange expertise in tegelwerk</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">A-kwaliteit materialen</h3>
              <p className="text-gray-700">Uitsluitend hoogwaardige tegels en voegmaterialen</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Lokale expertise</h3>
              <p className="text-gray-700">Kennis van Limburgse bouwstijlen en architectuur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tegelwerk in Hasselt en Omgeving - 50km Service Gebied</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            MMT Projects bedient actief de volledige regio Limburg. Onze tegelzetters zijn werkzaam in:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Grote steden:</h3>
              <p className="text-gray-700 leading-relaxed">
                Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Beringen, Houthalen-Helchteren, Leopoldsburg, Peer, Bree, Maaseik, Maasmechelen
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Kleinere gemeenten:</h3>
              <p className="text-gray-700 leading-relaxed">
                Lanaken, Riemst, Hoeselt, Wellen, Kortessem, Nieuwerkerken, Herk-de-Stad, Lummen, Ham, Tessenderlo, Halen en alle andere gemeenten binnen 50 kilometer van Hasselt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Lokale Expertise in Limburg</h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Als lokaal tegelbedrijf kennen wij de specifieke wensen en stijlvoorkeuren van onze klanten in Limburg. Onze tegelzetters hebben uitgebreide ervaring met projecten in de regio en begrijpen de lokale bouwstijlen en architectuur. Deze lokale kennis stelt ons in staat om tegelwerk te leveren dat perfect aansluit bij uw woning of bedrijfspand.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Snelle service</h3>
                <p className="text-gray-700">
                  Korte wachttijden en flexibele planning voor al uw tegelprojecten
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Garantie op werk</h3>
                <p className="text-gray-700">
                  Volledige garantie op vakmanschap en materialen voor uw gemoedsrust
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Lokale aanwezigheid</h3>
                <p className="text-gray-700">
                  Gevestigd in Hasselt met kennis van lokale bouwvoorschriften
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Gratis Offerte voor Tegelwerk</h2>
          <p className="text-xl mb-8">
            Wilt u een vrijblijvende offerte voor uw tegelproject in Hasselt of omgeving? Neem vandaag nog contact op met MMT Projects. Onze tegelspecialisten komen gratis ter plaatse voor een persoonlijk advies en een scherpe prijsopgave. Wij staan garant voor transparante prijzen zonder verborgen kosten.
          </p>
          
          <div className="bg-white/10 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Contact & Bereikbaarheid:</h3>
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
              Klaar voor professioneel tegelwerk? Bel nu!
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="mr-2 h-5 w-5" />
              Email voor informatie
            </Button>
          </div>
          
          <p className="mt-6 text-lg font-semibold">
            MMT Projects - Uw tegelspecialist in Limburg!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Tegelwerk;
