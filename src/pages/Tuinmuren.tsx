import { Helmet } from 'react-helmet-async';
import { Building2, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Users, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Tuinmuren = () => {
  return (
    <>
      <Helmet>
        <title>Tuinmuren Hasselt - Professionele Aanleg & Bouw | MMT Projects</title>
        <meta name="description" content="Tuinmuren Hasselt ✓ Vakkundige aanleg door MMT Projects ✓ Specialist in Limburg ✓ Gratis offerte ✓ 50km service gebied ✓ Tel: 0484117727" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-6">
                <Building2 className="h-5 w-5 mr-2" />
                <span className="font-medium">Specialist in Tuinmuren</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Tuinmuren Hasselt - Vakkundige Aanleg Door MMT Projects
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
                Bent u op zoek naar tuinmuren in Hasselt en omgeving? MMT Projects is uw specialist voor het bouwen van duurzame en esthetische tuinmuren in Hasselt, Limburg en binnen een straal van 50 kilometer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel Direct: 0484117727
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Mail className="mr-2 h-5 w-5" />
                  Gratis Offerte
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Waarom Kiezen Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Waarom Kiezen Voor Onze Tuinmuren in Hasselt?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Onze tuinmuren zijn meer dan alleen functioneel - ze vormen het karakter van uw buitenruimte. Of u nu een tuinmuur Hasselt nodig heeft voor privacy, als sierlijke afscheiding of voor terrasverschillen, wij realiseren het voor u.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Natuurstenen tuinmuren</h3>
                  <p className="text-gray-600">Tijdloos en duurzaam, perfect voor authentieke tuinen</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Betonnen tuinmuren</h3>
                  <p className="text-gray-600">Modern en veelzijdig, ideaal voor eigentijdse ontwerpen</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Keerwanden</h3>
                  <p className="text-gray-600">Functionele oplossingen voor terrasverschillen</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Decoratieve tuinmuren</h3>
                  <p className="text-gray-600">Sierlijke afscheidingen voor uw tuin</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Met geïntegreerde verlichting</h3>
                  <p className="text-gray-600">Sfeervolle tuinmuren met LED-verlichting</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Gebied Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Tuinmuren Service Gebied: Hasselt en Omgeving
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                MMT Projects bedient met trots Hasselt en omliggende gemeenten voor tuinmuren projecten. 
                Ons serviceteam is actief in een straal van 50 kilometer rond Hasselt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Primaire service steden:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Genk', 'Sint-Truiden', 'Tongeren', 'Bilzen', 'Diepenbeek', 'Lummen', 
                    'Herk-de-Stad', 'Beringen', 'Heusden-Zolder', 'Leopoldsburg', 
                    'Houthalen-Helchteren', 'Maaseik'
                  ].map((city) => (
                    <div key={city} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Uitgebreide dekking Limburg:</h3>
                <p className="text-gray-700 mb-6">
                  Of u nu in het centrum van Hasselt woont of in een van de pittoreske dorpjes in Limburg, 
                  onze ervaren vaklieden komen graag naar u toe voor een vrijblijvende offerte.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Radius</h4>
                      <p className="text-gray-600">50 kilometer rond Hasselt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proces Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Proces: Van Ontwerp Tot Realisatie
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Gratis Advies & Opmeting</h3>
                <p className="text-gray-600">
                  Onze experts bezoeken uw locatie in Hasselt of omgeving voor een professionele opmeting
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Maatwerk Ontwerp</h3>
                <p className="text-gray-600">
                  Samen ontwerpen we de perfecte tuinmuur die past bij uw tuin en budget
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Vakkundige Uitvoering</h3>
                <p className="text-gray-600">
                  Onze gecertificeerde vaklieden zorgen voor een kwalitatieve en tijdige realisatie
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4">Nazorg & Garantie</h3>
                <p className="text-gray-600">
                  Na oplevering bieden we uitgebreide garantie en nazorg
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Waarom MMT Projects Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Waarom MMT Projects Voor Uw Tuinmuren?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Lokale Expertise Hasselt</h3>
                  <p className="text-gray-700">
                    Als gevestigd bedrijf in Hasselt kennen wij de lokale omstandigheden, bodemgesteldheid 
                    en bouwvoorschriften in Limburg perfect. Deze kennis vertalen we naar tuinmuren die optimaal presteren.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Ervaring & Kwaliteit</h3>
                  <p className="text-gray-700">
                    Met jaren ervaring in de bouwsector hebben wij honderden tuinmuren gerealiseerd in Hasselt 
                    en omgeving. Onze portfolio spreekt voor zich.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Persoonlijke Service</h3>
                  <p className="text-gray-700">
                    Van het eerste contact tot en met de oplevering staat persoonlijke service centraal. 
                    U heeft één vast aanspreekpunt voor uw tuinmuur project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Materialen Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Materialen & Stijlen
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Wij werken met hoogwaardige materialen die bestand zijn tegen het Limburgse klimaat
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Natuursteen</h3>
                <p className="text-gray-600">Tijdloos en duurzaam, perfect voor authentieke tuinen</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Beton</h3>
                <p className="text-gray-600">Modern en veelzijdig, ideaal voor eigentijdse ontwerpen</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Klinkers</h3>
                <p className="text-gray-600">Klassiek en onderhoudsarm</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Gecombineerd</h3>
                <p className="text-gray-600">Voor unieke, op maat gemaakte oplossingen</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar voor uw tuinmuur in Hasselt?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Neem vandaag nog contact op voor een vrijblijvende offerte. 
              Onze experts adviseren u graag over de mogelijkheden voor uw specifieke situatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Bel Direct: 0484117727
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Mail className="mr-2 h-5 w-5" />
                info@mmtprojects.be
              </Button>
            </div>

            <div className="bg-blue-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Contact MMT Projects</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Daaleindestraat 100, 3720 Hasselt</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>0484117727</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@mmtprojects.be</span>
                </div>
              </div>
              <p className="mt-4 text-blue-100">
                Snel contact via telefoon of mail - binnen 24 uur reactie gegarandeerd!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tuinmuren;
