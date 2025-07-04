
import { Helmet } from 'react-helmet-async';
import { 
  Building2, Home, CheckCircle, MapPin, Phone, Mail, 
  Award, Shield, Users, ArrowRight, Star, Clock, Hammer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Timmerwerk = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren"
  ];

  const specializations = [
    "Dakconstructies en kapwerken vakkundig uitgevoerd",
    "Interieur timmerwerk op maat gemaakt",
    "Verbouwingen en renovaties met houtwerk",
    "Buitentimmerwerk weerbestendig afgewerkt",
    "Maatwerk meubels en inbouwkasten"
  ];

  const recentProjects = [
    "Dakconstructie nieuwbouw woning Hasselt-Centrum",
    "Interieur timmerwerk renovatie Genk",
    "Houten overkapping tuin Sint-Truiden",
    "Maatwerk keuken timmerwerk Tongeren"
  ];

  return (
    <>
      <Helmet>
        <title>Timmerwerk Hasselt | MMT Projects - Professioneel Timmerwerk Limburg</title>
        <meta name="description" content="Timmerwerk specialist in Hasselt en omgeving. MMT Projects levert dakconstructies, interieur en maatwerk timmerwerk met 15+ jaar ervaring. Gratis offerte voor timmerwerk in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="timmerwerk hasselt, timmerman limburg, dakconstructie hasselt, interieur timmerwerk" />
        <link rel="canonical" href="https://www.mmtprojects.be/timmerwerk-hasselt-limburg" />
        
        <meta property="og:title" content="Timmerwerk Hasselt | MMT Projects - Professioneel Timmerwerk Limburg" />
        <meta property="og:description" content="Timmerwerk specialist in Hasselt en omgeving. MMT Projects levert dakconstructies, interieur en maatwerk timmerwerk met 15+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/timmerwerk-hasselt-limburg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Timmerwerk Hasselt | MMT Projects - Professioneel Timmerwerk Limburg" />
        <meta name="twitter:description" content="Timmerwerk specialist in Hasselt en omgeving. MMT Projects levert dakconstructies, interieur en maatwerk timmerwerk met 15+ jaar ervaring." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d" 
              alt="Timmerwerk Hasselt" 
              className="object-cover w-full h-full opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Hammer className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Timmerwerk Specialist Hasselt</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  <span className="text-blue-600">Timmerwerk</span> Hasselt - Professioneel Timmerwerk in Limburg
                </h1>
                
                <p className="mt-6 text-xl text-gray-700 max-w-lg">
                  Bent u op zoek naar vakkundig timmerwerk in Hasselt? MMT Projects is dé specialist in dakconstructies, interieur timmerwerk en maatwerk in Hasselt en heel Limburg. Vakmanschap in hout.
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
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" 
                    alt="Timmerwerk project Hasselt" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">15+ Jaar</h2>
                    <p className="text-white/90">Ervaring in timmerwerk</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom Kiezen voor MMT Projects Timmerwerk?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Als ervaren timmerwerkspecialist in Hasselt begrijpen wij dat timmerwerk de basis vormt van duurzame constructies. Onze vakmensen combineren traditioneel vakmanschap met moderne technieken.
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Timmerwerk Service Gebied - 50km Rondom Hasselt</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects verzorgt timmerwerk in Hasselt en een uitgebreide regio van 50 kilometer rondom onze thuisbasis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden en grote gemeenten:</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Timmerwerk Hasselt</span>
                    <span className="text-gray-600 ml-2">(centrum en alle deelgemeenten)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Timmerwerk Genk</span>
                    <span className="text-gray-600 ml-2">- moderne timmertechnieken</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Timmerwerk Sint-Truiden</span>
                    <span className="text-gray-600 ml-2">- traditioneel vakmanschap</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Omliggende gemeenten voor timmerwerk:</h3>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Timmerwerk Specialisaties in Hasselt</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Dakconstructies</h3>
                  <p className="text-gray-700">
                    Professionele dakconstructies en kapwerken volgens de nieuwste bouwvoorschriften en isolatienormen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Interieur Timmerwerk</h3>
                  <p className="text-gray-700">
                    Maatwerk interieur timmerwerk van inbouwkasten tot complete keukenrenovaties en schuifdeuren.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Buitentimmerwerk</h3>
                  <p className="text-gray-700">
                    Duurzaam buitentimmerwerk zoals overkappingen, tuinhuizen en terrassen met weerbestendige materialen.
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Timmerwerk Referenties in Hasselt en Omgeving</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects heeft een indrukwekkend portfolio van timmerwerkprojecten in Hasselt en heel Limburg.
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start Uw Timmerwerkproject in Hasselt</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Klaar voor vakkundig timmerwerk? MMT Projects staat klaar om uw timmerwerkproject in Hasselt of omgeving te realiseren.
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
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact MMT Projects - Timmerwerk Specialist Hasselt</h3>
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
              MMT Projects - Uw betrouwbare partner voor timmerwerk in Hasselt, Genk, Sint-Truiden en heel Limburg.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Timmerwerk;
