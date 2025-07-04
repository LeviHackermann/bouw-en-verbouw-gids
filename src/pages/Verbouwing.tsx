
import { Helmet } from 'react-helmet-async';
import { 
  Building2, Home, CheckCircle, MapPin, Phone, Mail, 
  Award, Shield, Users, ArrowRight, Star, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Verbouwing = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren"
  ];

  const specializations = [
    "Complete verbouwingen van A tot Z begeleiding",
    "Badkamerrenovaties met moderne afwerking",
    "Keukenverbouwingen op maat gemaakt",
    "Zolderverbouwingen voor extra leefruimte",
    "Aanbouwprojecten en uitbreidingen"
  ];

  const recentProjects = [
    "Complete verbouwing rijwoning Hasselt-Centrum",
    "Badkamerrenovatie appartement Genk",
    "Keukenverbouwing villa Sint-Truiden",
    "Zolderverbouwing woning Tongeren"
  ];

  return (
    <>
      <Helmet>
        <title>Verbouwingen Hasselt | MMT Projects - Professionele Renovaties Limburg</title>
        <meta name="description" content="Verbouwingen specialist in Hasselt en omgeving. MMT Projects levert complete verbouwingen, renovaties en verbouwingsprojecten met 15+ jaar ervaring. Gratis offerte voor verbouwingen in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="verbouwingen hasselt, renovaties limburg, badkamerrenovatie hasselt, keukenverbouwing" />
        <link rel="canonical" href="https://www.mmtprojects.be/verbouwingen-hasselt-limburg" />
        
        <meta property="og:title" content="Verbouwingen Hasselt | MMT Projects - Professionele Renovaties Limburg" />
        <meta property="og:description" content="Verbouwingen specialist in Hasselt en omgeving. MMT Projects levert complete verbouwingen, renovaties en verbouwingsprojecten met 15+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/verbouwingen-hasselt-limburg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Verbouwingen Hasselt | MMT Projects - Professionele Renovaties Limburg" />
        <meta name="twitter:description" content="Verbouwingen specialist in Hasselt en omgeving. MMT Projects levert complete verbouwingen, renovaties en verbouwingsprojecten met 15+ jaar ervaring." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858" 
              alt="Verbouwingen Hasselt" 
              className="object-cover w-full h-full opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Building2 className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Verbouwingen Specialist Hasselt</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  <span className="text-blue-600">Verbouwingen</span> Hasselt - Droomproject Realiseren in Limburg
                </h1>
                
                <p className="mt-6 text-xl text-gray-700 max-w-lg">
                  Bent u toe aan een verbouwing in Hasselt? MMT Projects is dé specialist in complete verbouwingen, renovaties en verbouwingsprojecten in Hasselt en heel Limburg. Van ontwerp tot realisatie.
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
                    src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d" 
                    alt="Verbouwing project Hasselt" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">15+ Jaar</h2>
                    <p className="text-white/90">Ervaring in verbouwingen</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom Kiezen voor MMT Projects Verbouwingen?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Als ervaren verbouwingsspecialist in Hasselt begrijpen wij dat elke verbouwing uniek is. Onze lokale expertise en persoonlijke begeleiding zorgen voor een stressvrije verbouwing met een prachtig eindresultaat.
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Verbouwingen Service Gebied - 50km Rondom Hasselt</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects verzorgt verbouwingen in Hasselt en een uitgebreide regio van 50 kilometer rondom onze thuisbasis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden en grote gemeenten:</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Verbouwingen Hasselt</span>
                    <span className="text-gray-600 ml-2">(centrum en alle deelgemeenten)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Verbouwingen Genk</span>
                    <span className="text-gray-600 ml-2">- moderne verbouwingstechnieken</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Verbouwingen Sint-Truiden</span>
                    <span className="text-gray-600 ml-2">- traditioneel en eigentijds</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Omliggende gemeenten voor verbouwingen:</h3>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Verbouwing Specialisaties in Hasselt</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Home className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Complete Verbouwingen</h3>
                  <p className="text-gray-700">
                    Van A tot Z begeleiding bij uw complete verbouwingsproject voor een totaalrenovatie van uw woning.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Badkamer & Keuken</h3>
                  <p className="text-gray-700">
                    Gespecialiseerd in badkamer- en keukenrenovaties met moderne materialen en eigentijdse designs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Uitbreidingen</h3>
                  <p className="text-gray-700">
                    Aanbouwprojecten en uitbreidingen om uw leefruimte te vergroten volgens uw wensen en behoeften.
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Verbouwing Referenties in Hasselt en Omgeving</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects heeft een indrukwekkend portfolio van verbouwingsprojecten in Hasselt en heel Limburg.
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
      </div>
      
      <Footer />
    </>
  );
};

export default Verbouwing;
