
import { Helmet } from 'react-helmet-async';
import { 
  Hammer, Home, Wrench, Building2, Phone, Mail, MapPin, 
  CheckCircle, Users, Award, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Verbouwing = () => {
  return (
    <>
      <Helmet>
        <title>Verbouwing Hasselt | MMT Projects - Professionele Verbouwingen Limburg</title>
        <meta name="description" content="Verbouwing specialist in Hasselt en omgeving. MMT Projects realiseert uw verbouwingsdroom met jarenlange ervaring. Gratis offerte voor verbouwingen in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="verbouwing Hasselt, verbouwen Limburg, keukenverbouwing, badkamerverbouwing, woningverbouwing, MMT Projects" />
        <link rel="canonical" href="/verbouwing-hasselt-limburg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2" 
              alt="Verbouwing Hasselt" 
              className="object-cover w-full h-full opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Hammer className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Verbouwing specialist</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Verbouwing <span className="text-blue-600">Hasselt</span>
              </h1>
              
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Professionele Verbouwingen door MMT Projects. Van keuken tot badkamer, van kleine renovaties tot complete woningtransformaties in Hasselt en heel Limburg.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Gratis offerte aanvragen
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  <Mail className="mr-2 h-5 w-5" />
                  info@mmtprojects.be
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Onze Verbouwingsdiensten</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Complete verbouwingsprojecten van A tot Z in Hasselt en omgeving
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="h-48 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136" 
                    alt="Complete woningverbouwing" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <Home className="h-8 w-8 mb-1" />
                  </div>
                </div>
                <div className="h-2 bg-blue-600"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Complete Woningverbouwingen</h3>
                  <p className="text-gray-700">
                    Van ontwerp tot afwerking - complete verbouwing van uw woning in Hasselt.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="h-48 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136" 
                    alt="Keukenverbouwing" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <Building2 className="h-8 w-8 mb-1" />
                  </div>
                </div>
                <div className="h-2 bg-blue-600"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Keukenverbouwingen</h3>
                  <p className="text-gray-700">
                    Moderne keukens volgens de nieuwste trends met optimale benutting van de ruimte.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="h-48 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14" 
                    alt="Badkamerverbouwing" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <Wrench className="h-8 w-8 mb-1" />
                  </div>
                </div>
                <div className="h-2 bg-blue-600"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Badkamerverbouwingen</h3>
                  <p className="text-gray-700">
                    Van kleine vernieuwingen tot luxueuze wellness-badkamers in Hasselt.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="h-48 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e" 
                    alt="Renovatieprojecten" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <Hammer className="h-8 w-8 mb-1" />
                  </div>
                </div>
                <div className="h-2 bg-blue-600"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Renovatieprojecten</h3>
                  <p className="text-gray-700">
                    Kleinere renovaties en aanpassingen voor particulieren en bedrijven.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Verbouwingen in Hasselt en Omgeving</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Actief in heel Limburg - 50km rondom Hasselt
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden en grote gemeenten</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Verbouwing Hasselt</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Verbouwing Genk</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Verbouwing Sint-Truiden</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Verbouwing Tongeren</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Verbouwing Bilzen</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Verbouwing Beringen</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Omliggende gemeenten</h3>
                <p className="text-gray-700 leading-relaxed">
                  Diepenbeek, Lummen, Halen, Alken, Wellen, Hoeselt, Riemst, Maasmechelen, Lanaken, 
                  Dilsen-Stokkem, Maaseik, Kinrooi, Bree, Peer, Hechtel-Eksel, Leopoldsburg, Ham, 
                  Tessenderlo, Zonhoven, Houthalen-Helchteren, As, Opglabbeek, Oudsbergen, Hamont-Achel, 
                  Neerpelt, Overpelt, Bocholt, Heusden-Zolder, Herk-de-Stad, Nieuwerkerken, Borgloon, 
                  Voeren en vele andere gemeenten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom Kiezen voor MMT Projects?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Lokale expertise en jarenlange ervaring in Limburg
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Lokale Aanwezigheid</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gevestigd in Hasselt, dus altijd dichtbij voor service en nazorg. Wij kennen de lokale bouwvoorschriften en procedures.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ervaren Vakmensen</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ons team beschikt over jarenlange ervaring in diverse verbouwingstechnieken en werkt met moderne materialen.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Kwaliteitsgarantie</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wij staan achter ons werk met uitgebreide garantievoorwaarden en transparante prijzen zonder verborgen kosten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Van Plan tot Realisatie</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Uw verbouwingsproject in goede handen
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Vrijblijvend Gesprek</h3>
                <p className="text-gray-700">
                  Bespreking van uw wensen en budget voor uw verbouwingsproject.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Gedetailleerde Offerte</h3>
                <p className="text-gray-700">
                  Transparante prijzen met duidelijke planning en specificaties.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Professionele Uitvoering</h3>
                <p className="text-gray-700">
                  Vakkundige realisatie met vaste projectleider en regelmatige updates.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Oplevering & Garantie</h3>
                <p className="text-gray-700">
                  Zorgvuldige oplevering met uitgebreide garantie op ons werk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Klaar voor Uw Verbouwing?</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Neem vandaag nog contact op voor een vrijblijvende bespreking van uw verbouwingsplannen in Hasselt of omgeving.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Phone className="mr-2 h-5 w-5" />
                    0484 11 77 27
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Mail className="mr-2 h-5 w-5" />
                    info@mmtprojects.be
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact MMT Projects</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Adres</p>
                    <p className="text-gray-700">Daaleindestraat 100, 3720 Hasselt</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Telefoon</p>
                    <p className="text-gray-700">0484 11 77 27</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-700">info@mmtprojects.be</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Verbouwing;
