
import { Helmet } from 'react-helmet-async';
import { 
  Building2, Hammer, CheckCircle, Phone, Mail, MapPin, 
  Shield, Users, Award, ArrowRight, Star, Clock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Afbraakwerken = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren"
  ];

  const specializations = [
    "Veilige sloop van gebouwen en constructies",
    "Asbestverwijdering volgens geldende normen",
    "Selectieve afbraak voor renovatieprojecten",
    "Puinruiming en materiaalscheiding",
    "Milieuverantwoorde afvoer van afbraakmateriaal"
  ];

  const recentProjects = [
    "Afbraak woonhuis Hasselt-Centrum voor nieuwbouw",
    "Industriële sloop fabriekshallen Genk",
    "Asbestverwijdering kantoorgebouw Sint-Truiden",
    "Selectieve afbraak renovatie villa Tongeren"
  ];

  return (
    <>
      <Helmet>
        <title>Afbraakwerken Hasselt | MMT Projects - Professionele Sloop Limburg</title>
        <meta name="description" content="Afbraakwerken specialist in Hasselt en omgeving. MMT Projects levert veilige sloop- en asbestverwijdering met 15+ jaar ervaring. Gratis offerte voor afbraakwerken in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="afbraakwerken hasselt, sloop limburg, asbestverwijdering hasselt, MMT Projects" />
        <link rel="canonical" href="https://www.mmtprojects.be/afbraakwerken-hasselt-limburg" />
        
        <meta property="og:title" content="Afbraakwerken Hasselt | MMT Projects - Professionele Sloop Limburg" />
        <meta property="og:description" content="Afbraakwerken specialist in Hasselt en omgeving. MMT Projects levert veilige sloop- en asbestverwijdering met 15+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/afbraakwerken-hasselt-limburg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Afbraakwerken Hasselt | MMT Projects - Professionele Sloop Limburg" />
        <meta name="twitter:description" content="Afbraakwerken specialist in Hasselt en omgeving. MMT Projects levert veilige sloop- en asbestverwijdering met 15+ jaar ervaring." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12" 
              alt="Afbraakwerken Hasselt" 
              className="object-cover w-full h-full opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Hammer className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Afbraakwerken Specialist Hasselt</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  <span className="text-blue-600">Afbraakwerken</span> Hasselt - Veilige Sloop in Limburg
                </h1>
                
                <p className="mt-6 text-xl text-gray-700 max-w-lg">
                  Bent u op zoek naar professionele afbraakwerken in Hasselt? MMT Projects is dé specialist in veilige sloop en asbestverwijdering in Hasselt en heel Limburg. Ervaring en veiligheid voorop.
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
                    alt="Afbraakwerken project Hasselt" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">15+ Jaar</h2>
                    <p className="text-white/90">Ervaring in afbraakwerken</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom Kiezen voor MMT Projects Afbraakwerken?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Als ervaren afbraakspecialist in Hasselt begrijpen wij dat veilige sloop meer is dan alleen afbreken. Het gaat om precisie, veiligheid en milieubewuste afhandeling van alle materialen.
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Afbraakwerken Service Gebied - 50km Rondom Hasselt</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects verzorgt afbraakwerken in Hasselt en een uitgebreide regio van 50 kilometer rondom onze thuisbasis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden en grote gemeenten:</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Afbraakwerken Hasselt</span>
                    <span className="text-gray-600 ml-2">(centrum en alle deelgemeenten)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Afbraakwerken Genk</span>
                    <span className="text-gray-600 ml-2">- industriële sloop</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Afbraakwerken Sint-Truiden</span>
                    <span className="text-gray-600 ml-2">- veilige asbestverwijdering</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Omliggende gemeenten voor afbraakwerken:</h3>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Afbraakwerken Specialisaties in Hasselt</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Hammer className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Gebouwensloop</h3>
                  <p className="text-gray-700">
                    Volledige of selectieve sloop van woningen, kantoren en industriële gebouwen met moderne apparatuur.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Asbestverwijdering</h3>
                  <p className="text-gray-700">
                    Veilige en gecertificeerde asbestverwijdering volgens alle geldende veiligheidsnormen en procedures.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Building2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Selectieve Afbraak</h3>
                  <p className="text-gray-700">
                    Precisie-afbraak voor renovaties waarbij delen van het gebouw behouden blijven.
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Afbraakwerken Referenties in Hasselt en Omgeving</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects heeft een indrukwekkend portfolio van afbraakprojecten in Hasselt en heel Limburg.
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start Uw Afbraakproject in Hasselt</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Klaar voor professionele afbraakwerken? MMT Projects staat klaar om uw sloopproject in Hasselt of omgeving veilig te realiseren.
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
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact MMT Projects - Afbraakwerken Specialist Hasselt</h3>
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
              MMT Projects - Uw betrouwbare partner voor afbraakwerken in Hasselt, Genk, Sint-Truiden en heel Limburg.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Afbraakwerken;
