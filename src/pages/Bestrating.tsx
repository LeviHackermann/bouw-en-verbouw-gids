
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2, CheckCircle, Phone, Mail, MapPin, ArrowRight, Wrench, Home, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Bestrating = () => {
  return (
    <>
      <Helmet>
        <title>Bestrating Hasselt | MMT Projects - Kwaliteitsbestrating Limburg</title>
        <meta name="description" content="Zoekt u professionele bestrating in Hasselt? MMT Projects levert kwaliteitsbestrating in heel Limburg. ✓ 50km werkgebied ✓ Ervaren vaklieden ✓ Gratis offerte" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Building2 className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Bestratingspecialist Limburg</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-6">
                  Bestrating Hasselt - Professionele Bestratingsdiensten in Limburg
                </h1>
                
                <p className="text-xl text-gray-700 mb-8">
                  MMT Projects is dé specialist voor professionele bestrating in Hasselt en omgeving. Met jarenlange ervaring leveren wij hoogwaardige bestratingsdiensten in heel Limburg.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    Bel 0484117727 voor direct advies
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300">
                    Vraag nu uw gratis offerte aan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64" 
                  alt="Bestrating Hasselt" 
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Onze Bestratingsdiensten in Hasselt</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Als ervaren aannemer in bestrating bieden wij een volledig pakket aan diensten
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Opritten bestrating</h3>
                  <p className="text-gray-600">Natuursteen, beton en klinkers voor duurzame opritten</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Terrasbestrating</h3>
                  <p className="text-gray-600">Voor tuin en terras met hoogwaardige materialen</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Parkeerplaatsen</h3>
                  <p className="text-gray-600">Industriële bestrating voor parkeerplaatsen</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <ArrowRight className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tuinpaden</h3>
                  <p className="text-gray-600">Wandelwegen en tuinpaden op maat</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Reparatie & onderhoud</h3>
                  <p className="text-gray-600">Van bestaande bestrating en renovatie</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Drainerende bestrating</h3>
                  <p className="text-gray-600">Voor optimale waterafvoer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Werkgebied: Hasselt en 50km Omgeving</h2>
              <p className="text-xl text-gray-600">
                MMT Projects bedient een ruim werkgebied rondom Hasselt in heel Limburg
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Grote steden</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Genk</li>
                  <li>Sint-Truiden</li>
                  <li>Tongeren</li>
                  <li>Bilzen</li>
                  <li>Diepenbeek</li>
                  <li>Maasmechelen</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Hasselt regio</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Zonhoven</li>
                  <li>Kuringen</li>
                  <li>Kermt</li>
                  <li>Spalbeek</li>
                  <li>Stokrooie</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Noordoost Limburg</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Peer</li>
                  <li>Bree</li>
                  <li>Kinrooi</li>
                  <li>Dilsen-Stokkem</li>
                  <li>Lanaken</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Centraal Limburg</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Halen</li>
                  <li>Herk-de-Stad</li>
                  <li>Nieuwerkerken</li>
                  <li>Maaseik</li>
                  <li>Lommel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom Kiezen voor MMT Projects Bestrating?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Lokale Expertise in Limburg</h3>
                <p className="text-gray-600">
                  Als gevestigd bedrijf in Hasselt kennen wij de lokale omstandigheden, bodemgesteldheid en klimaat van Limburg perfect.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Kwaliteitsmaterialen</h3>
                <p className="text-gray-600">
                  Wij werken uitsluitend met hoogwaardige bestratingsmaterialen van erkende leveranciers.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Vakkundige Uitvoering</h3>
                <p className="text-gray-600">
                  Ons ervaren team van bestratingspecialisten zorgt voor een professionele uitvoering van A tot Z.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bestratingspecialisten in Hasselt - Onze Werkwijze</h2>
              <p className="text-xl text-gray-600">
                Elk bestratingproject begint met een grondige analyse van uw wensen en de lokale omstandigheden
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Voorbereiding en Grondwerk</h3>
                  <p className="text-gray-600">
                    Het succes van elke bestrating begint met een goede fundering. Wij zorgen voor professioneel grondwerk.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Materiaallevering en Uitvoering</h3>
                  <p className="text-gray-600">
                    Onze ervaren vaklieden leggen uw bestrating volgens de hoogste kwaliteitsnormen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Afwerking en Nazorg</h3>
                  <p className="text-gray-600">
                    Na oplevering verzorgen wij de complete afwerking en geven advies over het onderhoud.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Gratis Offerte Bestrating Hasselt</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Vraag vandaag nog een gratis, vrijblijvende offerte aan voor uw bestratingproject in Hasselt. 
              Onze specialisten bezoeken u graag ter plaatse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Bel 0484117727
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="mr-2 h-5 w-5" />
                Mail naar info@mmtprojects.be
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact MMT Projects</h3>
                <p className="text-gray-400 mb-6">
                  Bestratingspecialist in Hasselt en omgeving - Ervaren in heel Limburg binnen 50km werkgebied
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact informatie</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-blue-400" />
                    <span>0484117727</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-blue-400" />
                    <span>info@mmtprojects.be</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                    <span>Daaleindestraat 100, 3720 Hasselt</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Werkgebied</h4>
                <p className="text-gray-400">
                  Hasselt en omgeving binnen een straal van 50 kilometer in heel Limburg
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bestrating;
