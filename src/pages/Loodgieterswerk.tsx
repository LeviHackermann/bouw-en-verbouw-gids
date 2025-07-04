import { Helmet } from 'react-helmet-async';
import { 
  Wrench, Droplets, CheckCircle, Phone, Mail, MapPin, 
  Shield, Users, Award, ArrowRight, Star, Clock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Loodgieterswerk = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren"
  ];

  const specializations = [
    "Sanitair installaties en onderhoud complete badkamers",
    "Leidingwerk nieuwbouw en renovatie projecten", 
    "Reparaties en ontstopping van leidingen",
    "Verwarmingsinstallaties en CV-ketels",
    "Waterlekkage opsporing en herstel"
  ];

  const recentProjects = [
    "Badkamer renovatie moderne woning Hasselt",
    "CV-installatie nieuwbouw Genk",
    "Lekkage reparatie historisch pand Sint-Truiden",
    "Sanitair upgrade appartement Tongeren"
  ];

  const stats = [
    { number: "500+", label: "Tevreden klanten", icon: Users },
    { number: "15+", label: "Jaar ervaring", icon: Award },
    { number: "24/7", label: "Spoeddienst", icon: Clock },
    { number: "100%", label: "Garantie", icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>Loodgieterswerk Hasselt | MMT Projects - Professionele Loodgieter Limburg</title>
        <meta name="description" content="Loodgieterswerk specialist in Hasselt en omgeving. MMT Projects levert vakkundig loodgieterswerk met 15+ jaar ervaring. Gratis offerte voor loodgieterswerk in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="loodgieterswerk hasselt, loodgieter limburg, sanitair installatie, CV installatie, lekkage reparatie" />
        <link rel="canonical" href="https://www.mmtprojects.be/loodgieterswerk-hasselt-limburg" />
        
        <meta property="og:title" content="Loodgieterswerk Hasselt | MMT Projects - Professionele Loodgieter Limburg" />
        <meta property="og:description" content="Loodgieterswerk specialist in Hasselt en omgeving. MMT Projects levert vakkundig loodgieterswerk met 15+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/loodgieterswerk-hasselt-limburg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Loodgieterswerk Hasselt | MMT Projects - Professionele Loodgieter Limburg" />
        <meta name="twitter:description" content="Loodgieterswerk specialist in Hasselt en omgeving. MMT Projects levert vakkundig loodgieterswerk met 15+ jaar ervaring." />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                  <Droplets className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Loodgieterswerk Specialist</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                    Professioneel <span className="text-blue-600">Loodgieterswerk</span> in Hasselt
                  </h1>
                  
                  <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                    Zoekt u een betrouwbare loodgieter in Hasselt? MMT Projects is uw specialist voor alle loodgieterswerk in Limburg. Van sanitair tot CV-installaties, wij zorgen voor vakkundig werk met garantie.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Bel voor spoeddienst
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 px-8 py-3 text-lg">
                    Gratis offerte
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start mb-2">
                        <stat.icon className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-2xl font-bold text-gray-900">{stat.number}</span>
                      </div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1621905251189-08b45d3a5e7f" 
                    alt="Loodgieterswerk Hasselt" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-2xl font-bold mb-2">24/7 Spoeddienst</h3>
                      <p className="text-white/90">Altijd bereikbaar voor noodgevallen</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
                  <Shield className="h-8 w-8" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Onze Loodgieterswerk Specialisaties
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Van spoedklussen tot complete installaties - MMT Projects staat voor u klaar met professioneel loodgieterswerk in heel Limburg.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                          <CheckCircle className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">{service}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Loodgieterswerk in Heel Limburg
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects verzorgt professioneel loodgieterswerk in Hasselt en omliggende gemeenten binnen een straal van 50 kilometer.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden</h3>
                  <div className="space-y-4">
                    {serviceAreas.slice(0, 3).map((area, index) => (
                      <div key={index} className="flex items-center p-4 bg-blue-50 rounded-xl">
                        <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-900">Loodgieterswerk {area}</span>
                          <p className="text-sm text-gray-600">Complete service beschikbaar</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Alle Gemeenten</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceAreas.slice(3).map((area, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                      <span className="text-sm font-medium text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Recente Loodgieterswerk Projecten
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ontdek onze laatst gerealiseerde loodgieterswerk projecten in Hasselt en omgeving.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {recentProjects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                          <Star className="h-6 w-6 text-yellow-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{project}</h3>
                        <p className="text-gray-600 text-sm">Vakkundig uitgevoerd door MMT Projects</p>
                      </div>
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

export default Loodgieterswerk;
