import { Helmet } from 'react-helmet-async';
import { Building2, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Users, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Schuttingen = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Schuttingen Hasselt - Professionele Schutting Plaatsing | MMT Projects</title>
        <meta 
          name="description" 
          content="Professionele schuttingen in Hasselt & Limburg ✓ Hout, beton, composite & metaal ✓ 50km werkgebied ✓ Gratis offerte ✓ MMT Projects - Uw lokale schuttingspecialist" 
        />
        <meta name="keywords" content="schuttingen Hasselt, schutting plaatsing Limburg, houten schuttingen, betonnen schuttingen, composite schuttingen, metalen schuttingen" />
      </Helmet>

      {/* Header */}
      <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b" 
            alt="Schuttingen Hasselt" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-900 mb-6">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Schuttingspecialist Limburg</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Schuttingen Hasselt - Kwalitatieve Schutting Installatie in Limburg
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Bij MMT Projects bent u aan het juiste adres voor de plaatsing van hoogwaardige schuttingen in Hasselt en omgeving. Als ervaren aannemer in de regio Limburg leveren wij al jaren kwalitatieve schuttingoplossingen voor particulieren en bedrijven binnen een straal van 50 kilometer rondom Hasselt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Phone className="mr-2 h-5 w-5" />
                Bel 0484117727
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Gratis Offerte Aanvragen
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Onze Schutting Services in Hasselt
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij zijn gespecialiseerd in de volledige aanleg van schuttingen, van advies tot eindmontage. Onze ervaren vaklieden zorgen voor een professionele installatie van verschillende soorten schuttingen:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Houten Schuttingen Hasselt</h3>
                <p className="text-gray-700">
                  Duurzame houten schuttingen in verschillende houtsoorten zoals grenen, lariks en hardhout. Ideaal voor privacy en een natuurlijke uitstraling in uw tuin in Hasselt of omliggende gemeenten.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Betonnen Schuttingen Limburg</h3>
                <p className="text-gray-700">
                  Onderhoudsarme betonschuttingen die jarenlang meegaan. Perfect voor eigenaren in Genk, Sint-Truiden en Tongeren die op zoek zijn naar een duurzame schuttingoplossing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Composite Schuttingen</h3>
                <p className="text-gray-700">
                  Moderne composite schuttingen die de uitstraling van hout combineren met de duurzaamheid van kunststof. Populair in Bilzen, Diepenbeek en andere gemeenten in de regio.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Metalen Schuttingen</h3>
                <p className="text-gray-700">
                  Stijlvolle metalen schuttingen voor een moderne look. Geschikt voor zowel particuliere als commerciële projecten in heel Limburg.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Waarom Kiezen voor MMT Projects Schuttingen?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Lokale Expertise in Hasselt</h3>
              <p className="text-gray-700">
                Als lokale aannemer kennen wij de specifieke eisen en wensen van klanten in Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek en omgeving. Onze jarenlange ervaring in Limburg garandeert een service die perfect aansluit bij lokale behoeften.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Kwaliteit en Vakmanschap</h3>
              <p className="text-gray-700">
                Elke schutting wordt geplaatst door ervaren vaklieden die oog hebben voor detail. Wij gebruiken uitsluitend hoogwaardige materialen die bestand zijn tegen de Belgische weersomstandigheden.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Volledige Service</h3>
              <p className="text-gray-700">
                Van het eerste adviesgesprek tot de eindafwerking - MMT Projects verzorgt het gehele traject. Wij denken graag mee over de beste schuttingoplossing voor uw specifieke situatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Werkgebied: 50km Rondom Hasselt
            </h2>
            <p className="text-xl text-gray-600">
              MMT Projects verzorgt schuttingprojecten in heel Limburg en omliggende regio's.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Ons werkgebied omvat onder andere:</h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Hasselt (hoofdzetel)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Genk en deelgemeenten
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Sint-Truiden en omgeving
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Tongeren en regio
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Bilzen en Hoeselt
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Diepenbeek en Kuringen
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Beringen en Ham
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Lommel en Bree
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Maaseik en Dilsen-Stokkem
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    En alle gemeenten binnen 50km
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6" 
                alt="Werkgebied Limburg" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Het Schuttingplaatsingsproces
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Gratis Offerte en Advies</h3>
              <p className="text-gray-700">
                Wij komen gratuut langs voor een vrijblijvende offerte. Onze expert bekijkt de situatie ter plaatse en adviseert u over de beste schuttingoplossing.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Maatwerk Oplossingen</h3>
              <p className="text-gray-700">
                Elke schutting wordt op maat gemaakt en aangepast aan uw wensen en de specifieke omstandigheden van uw terrein.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Professionele Plaatsing</h3>
              <p className="text-gray-700">
                Onze ervaren monteurs zorgen voor een vakkundige installatie. Wij werken snel en netjes, met respect voor uw tuin en omgeving.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Onderhoud en Garantie</h3>
              <p className="text-gray-700">
                MMT Projects staat voor duurzame kwaliteit. Daarom bieden wij garantie op onze schuttingen en adviseren over het juiste onderhoud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Opnemen voor Schuttingen in Hasselt
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Bent u op zoek naar een betrouwbare partner voor de plaatsing van schuttingen in Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek of andere gemeenten in Limburg?
          </p>
          
          <div className="bg-white/10 p-8 rounded-2xl mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <p className="font-semibold">Telefoon</p>
                <p className="text-blue-100">0484117727</p>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <p className="font-semibold">Email</p>
                <p className="text-blue-100">info@mmtprojects.be</p>
              </div>
              <div>
                <MapPin className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <p className="font-semibold">Adres</p>
                <p className="text-blue-100">Daaleindestraat 100, 3720 Hasselt</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Phone className="mr-2 h-5 w-5" />
              Bel nu voor advies
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Mail className="mr-2 h-5 w-5" />
              Vraag gratis offerte aan
            </Button>
          </div>
          
          <p className="mt-8 text-blue-200">
            Wij staan klaar om uw schuttingproject in Hasselt en omgeving tot een succes te maken. Met onze lokale kennis, ervaring en focus op kwaliteit bent u verzekerd van een schutting waar u jaren plezier van zult hebben.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Schuttingen;
