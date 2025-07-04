
import { 
  Building2, Home, CheckCircle, MapPin, Phone, Mail, 
  Award, Shield, Users, ArrowRight, Star, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Bestrating = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren",
    "As", "Opglabbeek", "Oudsbergen", "Hamont-Achel"
  ];

  const specializations = [
    "Professionele terrasbestrating in Hasselt en omgeving",
    "Duurzame opritbestrating met hoogwaardige materialen",
    "Moderne tuinpadbestrating aangepast aan uw tuinontwerp",
    "Bestrating van parkeerplaatsen en toegangswegen",
    "Onderhoud en renovatie van bestaande bestrating"
  ];

  const recentProjects = [
    "Terrasbestrating villa Hasselt-Kermt",
    "Opritbestrating moderne woning Genk-Centrum", 
    "Tuinpadbestrating landelijke tuin Sint-Truiden",
    "Parkeerplaats bestrating kantoorgebouw Bilzen"
  ];

  return (
    <>
      <Helmet>
        <title>Bestrating Hasselt | MMT Projects - Professionele Bestrating Limburg</title>
        <meta name="description" content="Bestrating specialist in Hasselt en omgeving. MMT Projects realiseert terrassen, opritten en tuinpaden met 15+ jaar ervaring. Gratis offerte voor bestrating in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="bestrating hasselt, bestrating limburg, terras bestrating, oprit bestrating, tuinpad bestrating" />
        <link rel="canonical" href="https://www.mmtprojects.be/bestrating-hasselt-limburg" />
        
        <meta property="og:title" content="Bestrating Hasselt | MMT Projects - Professionele Bestrating Limburg" />
        <meta property="og:description" content="Bestrating specialist in Hasselt en omgeving. MMT Projects realiseert terrassen, opritten en tuinpaden met 15+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/bestrating-hasselt-limburg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bestrating Hasselt | MMT Projects - Professionele Bestrating Limburg" />
        <meta name="twitter:description" content="Bestrating specialist in Hasselt en omgeving. MMT Projects realiseert terrassen, opritten en tuinpaden met 15+ jaar ervaring." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1558618047-3c8c5d1f5f3c" 
              alt="Bestrating Hasselt" 
              className="object-cover w-full h-full opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Building2 className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Bestrating Specialist Hasselt</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  <span className="text-blue-600">Bestrating Hasselt</span> - Professionele Bestratingsdiensten in Limburg
                </h1>
                
                <p className="mt-6 text-xl text-gray-700 max-w-lg">
                  Bent u op zoek naar professionele bestrating in Hasselt? MMT Projects is dé specialist in bestratingsdiensten in Hasselt en heel Limburg. Van terrassen tot opritten, wij realiseren elke bestrating met vakmanschap.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    Gratis offerte aanvragen
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300">
                    Onze referenties
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4" 
                    alt="Bestrating project Hasselt" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">15+ Jaar</h2>
                    <p className="text-white/90">Ervaring in bestrating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose MMT Projects */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom Kiezen voor MMT Projects Bestrating?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Als ervaren bestratingspecialist in Hasselt begrijpen wij dat bestrating meer is dan alleen stenen leggen. Het gaat om duurzaamheid, esthetiek en functionaliteit. Onze lokale expertise in Hasselt zorgt voor perfecte resultaten.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations.map((specialization, index) => (
                <Card key={index} className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{specialization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bestrating Service Gebied - 50km Rondom Hasselt</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects verzorgt bestratingsdiensten in Hasselt en een uitgebreide regio van 50 kilometer rondom onze thuisbasis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden en grote gemeenten:</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Bestrating Hasselt</span>
                    <span className="text-gray-600 ml-2">(centrum en alle deelgemeenten)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Bestrating Genk</span>
                    <span className="text-gray-600 ml-2">- moderne bestratingsstijlen</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Bestrating Sint-Truiden</span>
                    <span className="text-gray-600 ml-2">- traditionele en moderne bestrating</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Omliggende gemeenten voor bestrating:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {serviceAreas.slice(5).map((area, index) => (
                    <div key={index} className="text-sm text-gray-600 py-1">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bestrating Specialisaties in Hasselt</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Duurzame Bestrating</h3>
                  <p className="text-gray-700">
                    Alle bestratingprojecten van MMT Projects zijn duurzaam en gebruiken hoogwaardige materialen voor een langdurig resultaat.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Moderne Bestratingsstijlen</h3>
                  <p className="text-gray-700">
                    Van klassieke kasseien tot moderne tegels - wij realiseren elke bestratingsstijl in Hasselt en omgeving.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Bestrating op Maat</h3>
                  <p className="text-gray-700">
                    Elk bestratingproject is uniek. Wij luisteren naar uw wensen en realiseren bestrating die perfect bij uw eigendom past.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bestrating Referenties in Hasselt en Omgeving</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects heeft een indrukwekkend portfolio van bestratingprojecten in Hasselt en heel Limburg.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {recentProjects.map((project, index) => (
                <Card key={index} className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-3" />
                      <span className="text-gray-900 font-medium">{project}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-16 rounded-3xl shadow-xl">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start Uw Bestratingproject in Hasselt</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Klaar om uw bestratingdroom waar te maken? MMT Projects staat klaar om uw bestratingproject in Hasselt of omgeving te realiseren.
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

        {/* Contact Info */}
        <section className="py-12 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact MMT Projects - Bestrating Specialist Hasselt</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Daaleindestraat 100, 3720 Hasselt</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">info@mmtprojects.be</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">0484117727</span>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              MMT Projects - Uw betrouwbare partner voor bestrating in Hasselt, Genk, Sint-Truiden en heel Limburg.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Bestrating;
