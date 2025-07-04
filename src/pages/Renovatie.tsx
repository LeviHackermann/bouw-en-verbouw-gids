
import { Helmet } from 'react-helmet-async';
import { 
  Building2, CheckCircle, Phone, Mail, MapPin, 
  Shield, Users, Award, ArrowRight, Star, Clock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Renovatie = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren"
  ];

  const specializations = [
    "Complete woningrenovatie van A tot Z",
    "Badkamerrenovatie en keukenrenovatie",
    "Gevelrenovatie en dakwerken",
    "Energetische renovatie en isolatie",
    "Renovatie begeleiding en projectmanagement"
  ];

  const recentProjects = [
    "Complete renovatie woning Hasselt-Centrum",
    "Energetische renovatie villa Genk",
    "Badkamer en keuken renovatie Sint-Truiden",
    "Gevelrenovatie appartement Tongeren"
  ];

  const stats = [
    { number: "400+", label: "Renovatie projecten", icon: Building2 },
    { number: "15+", label: "Jaar ervaring", icon: Award },
    { number: "24/7", label: "Projectbegeleiding", icon: Clock },
    { number: "100%", label: "Tevreden klanten", icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>Renovatie Hasselt | MMT Projects - Professionele Renovatie Services Limburg</title>
        <meta name="description" content="Renovatie specialist in Hasselt en omgeving. MMT Projects verzorgt complete renovaties professioneel met 15+ jaar ervaring. Gratis offerte voor renovatie in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="renovatie hasselt, woningrenovatie limburg, badkamerrenovatie, keukenrenovatie" />
        <link rel="canonical" href="https://www.mmtprojects.be/renovatie-hasselt-limburg" />
        
        <meta property="og:title" content="Renovatie Hasselt | MMT Projects - Professionele Renovatie Services Limburg" />
        <meta property="og:description" content="Renovatie specialist in Hasselt en omgeving. MMT Projects verzorgt complete renovaties professioneel met 15+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/renovatie-hasselt-limburg" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                  <Building2 className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Renovatie Specialist</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                    Complete <span className="text-purple-600">Renovatie</span> in Hasselt
                  </h1>
                  
                  <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                    Woning aan renovatie toe? MMT Projects is uw specialist voor complete renovaties in Hasselt en Limburg. Van badkamer tot volledige woning - alles onder één dak.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Gratis renovatie advies
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 px-8 py-3 text-lg">
                    Renovatie calculator
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start mb-2">
                        <stat.icon className="h-5 w-5 text-purple-600 mr-2" />
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
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858" 
                    alt="Renovatie Hasselt" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-2xl font-bold mb-2">Complete Renovatie</h3>
                      <p className="text-white/90">Van ontwerp tot oplevering</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-purple-600 text-white p-4 rounded-2xl shadow-lg">
                  <Building2 className="h-8 w-8" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border">
                  <Award className="h-8 w-8 text-purple-600" />
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
                Onze Renovatie Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Van kleine aanpassingen tot complete renovaties - MMT Projects verzorgt alle renovatiewerken in Hasselt en omgeving met oog voor detail en kwaliteit.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                          <CheckCircle className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
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
                Renovatie in Heel Limburg
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects verzorgt professionele renovaties in Hasselt en omliggende gemeenten binnen een straal van 50 kilometer.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden</h3>
                  <div className="space-y-4">
                    {serviceAreas.slice(0, 3).map((area, index) => (
                      <div key={index} className="flex items-center p-4 bg-purple-50 rounded-xl">
                        <MapPin className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-900">Renovatie {area}</span>
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
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors duration-200">
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
                Recente Renovatie Projecten
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ontdek onze laatst uitgevoerde renovatie projecten in Hasselt en omgeving.
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
                        <p className="text-gray-600 text-sm">Professioneel uitgevoerd door MMT Projects</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Start Uw Renovatie Project
                </h2>
                <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                  Klaar voor een renovatie? Neem contact op voor een gratis adviesgesprek en offerte. Van badkamer tot complete woning - wij regelen alles.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  0484 11 77 27
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold">
                  <Mail className="mr-2 h-5 w-5" />
                  E-mail versturen
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">
                MMT Projects - Uw Renovatie Specialist
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Daaleindestraat 100, 3720 Hasselt</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">info@mmtprojects.be</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">0484 11 77 27</span>
                </div>
              </div>
              
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professionele renovatie specialist in Hasselt en heel Limburg. 
                Complete renovaties met persoonlijke begeleiding en kwaliteitsgarantie.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Renovatie;
