import { Helmet } from 'react-helmet-async';
import { Building2, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terrasbouw = () => {
  return (
    <>
      <Helmet>
        <title>Terrasbouw Hasselt - Professionele Terrasaanleg in Limburg | MMT Projects</title>
        <meta name="description" content="Terrasbouw Hasselt ✓ MMT Projects - Professionele terrasaanleg in Limburg ✓ Hout, beton, natuursteen ✓ 50km serviceregio ✓ Gratis offerte ☎ 0484117727" />
        <meta name="keywords" content="terrasbouw hasselt, terras aanleg limburg, houten terras, betonnen terras, natuursteen terras, terras hasselt" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terrasbouw Hasselt - Professionele Terrasaanleg in Limburg
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              MMT Projects is uw betrouwbare partner voor professionele terrasbouw in Hasselt en omgeving. 
              Met jarenlange ervaring in de bouwsector realiseren wij kwalitatieve terrassen die perfect 
              aansluiten bij uw wensen en budget.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Phone className="mr-2 h-5 w-5" />
                Bel 0484117727
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="mr-2 h-5 w-5" />
                Gratis Offerte
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Onze Terrasbouw Diensten in Hasselt
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
              Als gespecialiseerd bouwbedrijf bieden wij een volledig pakket terrasbouw diensten aan. 
              Van het eerste ontwerp tot de finale afwerking zorgen onze ervaren vakmensen voor een 
              terras waar u jaren plezier van zult hebben.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Houten Terrassen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hardhout</li>
                    <li>• Thermowood</li>
                    <li>• Composiet</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Betonnen Terrassen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Gepolijst</li>
                    <li>• Gestempeld</li>
                    <li>• Geborsteld</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Natuursteen Terrassen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Blauwe steen</li>
                    <li>• Graniet</li>
                    <li>• Leisteen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Keramische Tegels</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Groot formaat</li>
                    <li>• Antislip afwerking</li>
                    <li>• Moderne uitstraling</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Service Area */}
          <section className="mb-16 bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Serviceregio Limburg
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              MMT Projects verzorgt terrasbouw projecten in Hasselt en een straal van 50 kilometer. 
              Onze lokale expertise strekt zich uit over heel Limburg.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-gray-600">
              <div>
                <h3 className="font-semibold mb-2">Hoofdsteden</h3>
                <p>Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Beringen</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Noord-Limburg</h3>
                <p>Houthalen-Helchteren, Lommel, Peer, Bree, Maaseik</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Zuid-Limburg</h3>
                <p>Dilsen-Stokkem, Lanaken, Maasmechelen, Riemst, Voeren</p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Waarom Kiezen voor MMT Projects Terrasbouw
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
              Met MMT Projects kiest u voor vakmanschap en betrouwbaarheid. Onze terrasbouw specialisten 
              kennen de lokale omstandigheden in Hasselt en Limburg perfect.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Duurzaam en Weerbestendig</h3>
                  <p className="text-gray-600">Terrassen die bestand zijn tegen alle weersomstandigheden</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Onderhoudsvriendelijk</h3>
                  <p className="text-gray-600">Minimaal onderhoud voor maximaal plezier</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Aangepast aan Limburgse Klimaat</h3>
                  <p className="text-gray-600">Speciaal geselecteerde materialen voor onze regio</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Correcte Drainage</h3>
                  <p className="text-gray-600">Professionele waterafvoer voor langdurige kwaliteit</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Stabiele Fundering</h3>
                  <p className="text-gray-600">Solide basis voor een duurzaam terras</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Professionele Aanleg</h3>
                  <p className="text-gray-600">Vakkundige installatie door ervaren specialisten</p>
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Het Terrasbouw Proces
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
              Ons terrasbouw proces begint met een gratis offerte aan huis in Hasselt of omgeving. 
              Wij bespreken uw wensen, bekijken de locatie en adviseren over de beste oplossing.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Gratis Offerte</h3>
                <p className="text-gray-600">Vrijblijvende offerte aan huis</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Ontwerp & Planning</h3>
                <p className="text-gray-600">Maatwerk oplossing voor uw situatie</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Professionele Uitvoering</h3>
                <p className="text-gray-600">Vakkundige aanleg door ons team</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Oplevering</h3>
                <p className="text-gray-600">Tevreden klant en prachtig terras</p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Gratis Offerte Terrasbouw Hasselt
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Bent u op zoek naar een betrouwbare aannemer voor uw terrasbouw project in Hasselt of omgeving? 
              Neem dan contact op met MMT Projects. Wij komen graag langs voor een vrijblijvende offerte en 
              deskundig advies over uw nieuwe terras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Phone className="mr-2 h-5 w-5" />
                Bel 0484117727
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="mr-2 h-5 w-5" />
                Mail info@mmtprojects.be
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Contact MMT Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Adres</h3>
                <p className="text-gray-600">
                  Daaleindestraat 100<br />
                  3720 Hasselt
                </p>
              </div>
              <div>
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Telefoon</h3>
                <p className="text-gray-600">0484117727</p>
              </div>
              <div>
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">info@mmtprojects.be</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Terrasbouw;
