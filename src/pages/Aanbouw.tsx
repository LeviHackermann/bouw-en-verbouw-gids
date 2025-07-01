
import { Helmet } from 'react-helmet-async';
import { 
  Building2, Phone, Mail, MapPin, CheckCircle, Award, Users, Shield,
  Home, Hammer, ArrowRight, Star, PlusCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Aanbouw = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Aanbouw Hasselt - Professionele Uitbreidingen door MMT Projects</title>
        <meta name="description" content="Aanbouw Hasselt ✓ MMT Projects realiseert kwaliteitsvolle uitbreidingen in Limburg ✓ 10+ jaar ervaring ✓ Gratis offerte ✓ Bel 0484117727" />
        <meta name="keywords" content="aanbouw Hasselt, uitbreiding Hasselt, aanbouwer Limburg, MMT Projects" />
      </Helmet>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">MMT Projects</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                <Phone className="mr-2 h-4 w-4" />
                0484 11 77 27
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <PlusCircle className="h-4 w-4" />
              Professionele Aanbouw Specialist
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Aanbouw Hasselt - <span className="text-blue-600">Professionele Uitbreidingen</span> door MMT Projects
            </h1>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
              MMT Projects is uw betrouwbare partner voor hoogkwalitatieve aanbouw projecten in Hasselt en omgeving. Met jarenlange ervaring in de bouwsector realiseren wij uitbreidingen die perfect aansluiten bij uw bestaande woning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                <Phone className="mr-2 h-5 w-5" />
                Gratis Offerte
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Onze Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Onze Aanbouw Services in Limburg</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als gespecialiseerd bouwbedrijf in Hasselt bieden wij complete aanbouw oplossingen voor particulieren en bedrijven. Onze ervaren vakmensen zorgen voor een naadloze integratie van uw nieuwe ruimte met het bestaande gebouw.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Keukenuitbreidingen</h3>
                <p className="text-gray-700">Ruimere keuken voor meer comfort en functionaliteit</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Extra Slaapkamers</h3>
                <p className="text-gray-700">Meer slaapruimte voor een groeiend gezin</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Thuiskantoren</h3>
                <p className="text-gray-700">Professionele werkruimte in uw eigen huis</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Hammer className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Garages</h3>
                <p className="text-gray-700">Veilige en droge stalling voor uw voertuig</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Veranda's</h3>
                <p className="text-gray-700">Overdekte buitenruimte voor het hele jaar</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <PlusCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Complete Woonuitbreidingen</h3>
                <p className="text-gray-700">Grootschalige uitbreidingen voor meer leefruimte</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom Kiezen voor MMT Projects Aanbouw Hasselt?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">10+ Jaar Ervaring</h3>
              <p className="text-gray-700">Meer dan 10 jaar ervaring in aanbouw projecten in Limburg</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Lokale Kennis</h3>
              <p className="text-gray-700">Lokale kennis van bouwvoorschriften in Hasselt en omgeving</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Persoonlijke Begeleiding</h3>
              <p className="text-gray-700">Persoonlijke begeleiding van ontwerp tot oplevering</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Kwaliteitsmaterialen</h3>
              <p className="text-gray-700">Gebruik van duurzame en kwalitatieve bouwmaterialen</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transparante Prijzen</h3>
              <p className="text-gray-700">Transparante prijsstelling zonder verrassingen</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Duurzame Oplossingen</h3>
              <p className="text-gray-700">Energiezuinige isolatie en moderne verwarmingssystemen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Servicegebied Aanbouw</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MMT Projects verzorgt aanbouw projecten in heel Limburg. We zijn actief binnen 50km van Hasselt.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed text-center">
              <strong>Onze werkgebieden:</strong> Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Beringen, Houthalen-Helchteren, Lummen, Herk-de-Stad, Alken, Wellen, Borgloon, Hoeselt, Riemst, Lanaken, Maasmechelen, As, Opglabbeek, Meeuwen-Gruitrode, Hamont-Achel, Neerpelt, Overpelt, Lommel, Hechtel-Eksel, Ham, Tessenderlo en alle gemeenten binnen 50km van Hasselt.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Het Aanbouw Proces</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
              <h3 className="text-lg font-bold mb-2">Adviesgesprek</h3>
              <p className="text-gray-600">Vrijblijvend gesprek bij u thuis</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
              <h3 className="text-lg font-bold mb-2">Offerte</h3>
              <p className="text-gray-600">Gedetailleerde prijsopgave</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
              <h3 className="text-lg font-bold mb-2">Vergunningen</h3>
              <p className="text-gray-600">Wij regelen alle benodigde vergunningen</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
              <h3 className="text-lg font-bold mb-2">Uitvoering</h3>
              <p className="text-gray-600">Professionele realisatie van uw aanbouw</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-16 rounded-3xl shadow-xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Klaar voor uw aanbouw project in Hasselt?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Neem vandaag nog contact op voor een vrijblijvend adviesgesprek. Onze aanbouw specialisten staan klaar om uw uitbreidingsplannen te bespreken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Bel Direct: 0484 11 77 27
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="mr-2 h-5 w-5" />
                Email Ons
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-semibold">MMT Projects</span>
              </div>
              <p className="text-gray-600 mb-4">Uw betrouwbare partner voor aanbouw in Hasselt en omgeving</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Onze Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Keukenuitbreidingen</li>
                <li>Extra slaapkamers</li>
                <li>Thuiskantoren</li>
                <li>Garages & veranda's</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                  <span>Daaleindestraat 100, 3720 Hasselt</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                  <span>0484 11 77 27</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                  <span>info@mmtprojects.be</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} MMT Projects. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Aanbouw;
