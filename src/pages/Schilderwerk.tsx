
import { Building2, Phone, Mail, MapPin, Paintbrush, Brush, Home, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const Schilderwerk = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Professioneel Schilderwerk in Hasselt en Limburg - MMT Projects</title>
        <meta name="description" content="Professioneel schilderwerk in Hasselt en Limburg. MMT Projects levert kwaliteitsvolle schilderdiensten binnen 50km van Hasselt. Offerte op maat ✓ Ervaren schilders ✓" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mmtprojects.be/schilderwerk-hasselt-limburg" />
      </Helmet>

      {/* Header */}
      <header className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Paintbrush className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professioneel Schilderwerk in Hasselt en Limburg
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Bij MMT Projects bent u aan het juiste adres voor hoogkwaardig schilderwerk in Hasselt en heel Limburg. Met jarenlange ervaring in de bouwsector leveren wij professionele schilderdiensten voor particulieren en bedrijven in een straal van 50 kilometer rond Hasselt.
            </p>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Onze Schilderdiensten in Hasselt en Omgeving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Als gespecialiseerd bouwbedrijf uit Hasselt bieden wij een breed scala aan schilderwerk diensten:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Binnen Schilderwerk</h3>
                <p className="text-gray-600">Voor woningen en kantoren</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Buiten Schilderwerk</h3>
                <p className="text-gray-600">Gevelonderhoud en bescherming</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Industrieel Schilderwerk</h3>
                <p className="text-gray-600">Voor bedrijfspanden</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brush className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Renovatie & Herschildering</h3>
                <p className="text-gray-600">Van bestaande oppervlakten</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Paintbrush className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Decoratief Schilderwerk</h3>
                <p className="text-gray-600">En wandafwerking</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Houtwerk Behandeling</h3>
                <p className="text-gray-600">En bescherming</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Waarom Kiezen voor MMT Projects Schilderwerk?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Met onze vestiging aan de Daaleindestraat in Hasselt kennen wij de lokale bouwmarkt als geen ander. Onze ervaren schilders werken met hoogwaardige materialen en moderne technieken om duurzame resultaten te garanderen. Wij staan bekend om onze betrouwbaarheid, vakmanschap en persoonlijke service in heel Limburg.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Kwaliteit en Duurzaamheid</h3>
                    <p className="text-gray-600">Wij werken uitsluitend met A-merk verven en materialen die bestand zijn tegen de Belgische weersomstandigheden.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lokale Expertise</h3>
                    <p className="text-gray-600">Jarenlange ervaring in schilderwerk doorheen Limburg met kennis van lokale klimaat en architecturale stijlen.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Snel en Betrouwbaar</h3>
                    <p className="text-gray-600">Wij plannen uw schilderwerk zorgvuldig in en houden ons aan afgesproken deadlines.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <img 
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3" 
                alt="Professioneel schilderwerk" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Schilderwerk Service Gebied
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vanuit ons hoofdkantoor in Hasselt bedienen wij de volgende gemeenten en steden voor professioneel schilderwerk:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Binnen 25km van Hasselt</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <span>Genk</span>
                  <span>Sint-Truiden</span>
                  <span>Diepenbeek</span>
                  <span>Zonhoven</span>
                  <span>Beringen</span>
                  <span>Herk-de-Stad</span>
                  <span>Lummen</span>
                  <span>Kuringen</span>
                  <span>Kermt</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Binnen 50km van Hasselt</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <span>Tongeren</span>
                  <span>Bilzen</span>
                  <span>Maasmechelen</span>
                  <span>Lanaken</span>
                  <span>Riemst</span>
                  <span>Hoeselt</span>
                  <span>Wellen</span>
                  <span>Borgloon</span>
                  <span>Heers</span>
                  <span>Gingelom</span>
                  <span>Nieuwerkerken</span>
                  <span>Alken</span>
                  <span>Halen</span>
                  <span>Tessenderlo</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Offerte Aanvragen voor Schilderwerk
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Heeft u schilderwerk nodig in Hasselt of elders in Limburg? Neem vandaag nog contact op voor een vrijblijvende offerte. Onze schilderspecialisten komen graag ter plaatse om uw project te bespreken en een gedetailleerde prijsopgave te maken.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Bel Direct: 0484117727
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="mr-2 h-5 w-5" />
              info@mmtprojects.be
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact MMT Projects - Uw Schilder in Limburg
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adres</h3>
              <p className="text-gray-400">Daaleindestraat 100<br />3720 Hasselt</p>
            </div>
            
            <div>
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telefoon</h3>
              <p className="text-gray-400">0484117727</p>
            </div>
            
            <div>
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">info@mmtprojects.be</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300">
              Bel ons vandaag nog voor professioneel schilderwerk in Hasselt, Genk, Sint-Truiden, Tongeren en heel Limburg.<br />
              <strong>MMT Projects - uw betrouwbare partner voor al uw schilderprojecten!</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schilderwerk;
