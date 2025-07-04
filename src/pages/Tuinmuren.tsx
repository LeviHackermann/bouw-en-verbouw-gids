
import { Helmet } from 'react-helmet-async';
import { 
  Home, CheckCircle, Phone, Mail, MapPin, 
  Shield, Users, Award, ArrowRight, Star, Clock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Tuinmuren = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren"
  ];

  const specializations = [
    "Betonnen tuinmuren en keermuren",
    "Natuursteen muren en afscheidingen",
    "Bakstenen tuinmuren en omheiningen",
    "Decoratieve muren en muurtjes",
    "Onderhoud en renovatie tuinmuren"
  ];

  const recentProjects = [
    "Natuursteen tuinmuur villa Hasselt-Noord",
    "Betonnen keermuur tuin Genk", 
    "Bakstenen afscheiding Sint-Truiden",
    "Decoratieve muur renovatie Tongeren"
  ];

  const stats = [
    { number: "300+", label: "Tuinmuren gebouwd", icon: Home },
    { number: "15+", label: "Jaar ervaring", icon: Award },
    { number: "100%", label: "Tevreden klanten", icon: Users },
    { number: "10j", label: "Garantie", icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>Tuinmuren Bouwen Hasselt | MMT Projects - Professionele Tuinmuren Limburg</title>
        <meta name="description" content="Tuinmuren specialist in Hasselt en omgeving. MMT Projects bouwt betonnen, natuursteen en bakstenen tuinmuren vakkundig met 15+ jaar ervaring. Gratis offerte voor tuinmuren in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="tuinmuren hasselt, tuinmuur bouwen limburg, betonnen muur, natuursteen muur" />
        <link rel="canonical" href="https://www.mmtprojects.be/tuinmuren-hasselt-limburg" />
        
        <meta property="og:title" content="Tuinmuren Bouwen Hasselt | MMT Projects - Professionele Tuinmuren Limburg" />
        <meta property="og:description" content="Tuinmuren specialist in Hasselt en omgeving. MMT Projects bouwt betonnen, natuursteen en bakstenen tuinmuren vakkundig met 15+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/tuinmuren-hasselt-limburg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tuinmuren Bouwen Hasselt | MMT Projects - Professionele Tuinmuren Limburg" />
        <meta name="twitter:description" content="Tuinmuren specialist in Hasselt en omgeving. MMT Projects bouwt betonnen, natuursteen en bakstenen tuinmuren vakkundig met 15+ jaar ervaring." />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-stone-50"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                  <Home className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Tuinmuren Specialist</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                    Professionele <span className="text-stone-600">Tuinmuren</span> in Hasselt
                  </h1>
                  
                  <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                    Op zoek naar duurzame tuinmuren voor uw buitenruimte? MMT Projects is uw specialist voor het bouwen van tuinmuren in Hasselt en Limburg. Van beton tot natuursteen - wij realiseren elke muur.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-stone-600 hover:bg-stone-700 text-white px-8 py-3 text-lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Gratis offerte
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 px-8 py-3 text-lg">
                    Onze materialen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start mb-2">
                        <stat.icon className="h-5 w-5 text-stone-600 mr-2" />
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
                    src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13" 
                    alt="Tuinmuren Hasselt" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-2xl font-bold mb-2">Duurzame Tuinmuren</h3>
                      <p className="text-white/90">Voor generaties gebouwd</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-stone-600 text-white p-4 rounded-2xl shadow-lg">
                  <Home className="h-8 w-8" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border">
                  <Award className="h-8 w-8 text-stone-600" />
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
                Onze Tuinmuren Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Van ontwerp tot bouw - MMT Projects verzorgt uw complete tuinmuur project in Hasselt en omgeving met oog voor kwaliteit en duurzaamheid.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center group-hover:bg-stone-600 transition-colors duration-300">
                          <CheckCircle className="h-6 w-6 text-stone-600 group-hover:text-white transition-colors duration-300" />
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
                Tuinmuren Bouwen in Heel Limburg
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects bouwt professionele tuinmuren in Hasselt en omliggende gemeenten binnen een straal van 50 kilometer.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden</h3>
                  <div className="space-y-4">
                    {serviceAreas.slice(0, 3).map((area, index) => (
                      <div key={index} className="flex items-center p-4 bg-stone-50 rounded-xl">
                        <MapPin className="h-5 w-5 text-stone-600 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-900">Tuinmuren {area}</span>
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
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-lg hover:bg-stone-50 transition-colors duration-200">
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
                Recente Tuinmuren Projecten
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ontdek onze laatst gebouwde tuinmuren in Hasselt en omgeving.
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

export default Tuinmuren;
