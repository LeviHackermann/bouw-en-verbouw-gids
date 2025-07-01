
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, CheckCircle, Shield, Clock, Wrench, Home, AlertTriangle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const OnderhoudHerstelling = () => {
  const services = [
    {
      title: "Preventief Onderhoud",
      description: "Regelmatige inspecties en onderhoud om kostbare reparaties te voorkomen",
      icon: Shield
    },
    {
      title: "Herstelwerkzaamheden", 
      description: "Van kleine reparaties tot grote herstelprojecten met duurzame oplossingen",
      icon: Wrench
    },
    {
      title: "Noodreparaties",
      description: "24/7 beschikbaar voor urgente reparaties en acute problemen",
      icon: AlertTriangle
    },
    {
      title: "Dakonderhoud",
      description: "Complete dakonderhoud en herstel services voor optimale bescherming",
      icon: Home
    },
    {
      title: "Gevelonderhoud",
      description: "Professioneel gevelonderhoud en restauratie voor behoud van waarde",
      icon: Home
    },
    {
      title: "Interieur Onderhoud", 
      description: "Sanitair, vloeren, schilderwerk en kleine verbouwingen binnen",
      icon: Home
    }
  ];

  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen", "Diepenbeek", 
    "Beringen", "Heusden-Zolder", "Lommel", "Maaseik", "Alken", "As", 
    "Bocholt", "Borgloon", "Bree", "Dilsen-Stokkem", "Gingelom", "Halen",
    "Ham", "Hamont-Achel", "Hechtel-Eksel", "Herk-de-Stad", "Hoeselt",
    "Houthalen-Helchteren", "Kinrooi", "Kortessem", "Lanaken", "Leopoldsburg",
    "Lummen", "Maasmechelen", "Nieuwerkerken", "Opglabbeek", "Oudsbergen",
    "Peer", "Riemst", "Tessenderlo", "Voeren", "Wellen", "Zonhoven", "Zutendaal"
  ];

  const benefits = [
    "Lokale expertise in Limburg",
    "Ervaren vakspecialisten", 
    "Kwaliteitsgarantie op alle werkzaamheden",
    "24/7 beschikbaar voor noodreparaties",
    "Duurzame materialen en technieken",
    "Transparante communicatie en offerteprocedure"
  ];

  return (
    <>
      <Helmet>
        <title>Onderhoud en Herstelling Hasselt - Professioneel Gebouwonderhoud | MMT Projects</title>
        <meta name="description" content="Onderhoud en herstelling Hasselt ✓ MMT Projects - Professioneel gebouwonderhoud in Limburg ✓ Preventief onderhoud ✓ Noodreparaties ✓ Gratis offerte ✓ 0484117727" />
        <link rel="canonical" href="https://www.mmtprojects.be/onderhoud-herstelling-hasselt-limburg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Onderhoud en Herstelling"
              className="object-cover w-full h-full opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Wrench className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Professioneel Onderhoud</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
                  Onderhoud en Herstelling - <span className="text-blue-600">MMT Projects Hasselt</span>
                </h1>

                <p className="text-xl text-gray-700 mb-8 max-w-lg">
                  Professioneel onderhoud en herstelling van gebouwen in Hasselt en omgeving. Van preventief onderhoud tot noodreparaties - wij zorgen ervoor dat uw eigendom in optimale staat blijft.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    Bel voor noodreparatie
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300">
                    <Mail className="mr-2 h-5 w-5" />
                    Gratis offerte aanvragen
                  </Button>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Onderhoud werkzaamheden"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                    <Clock className="h-8 w-8 mb-2" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">Noodreparaties</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Onze Onderhoud en Herstelling Diensten</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Van preventief onderhoud tot urgente reparaties - MMT Projects heeft de expertise om elk probleem professioneel aan te pakken.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <service.icon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                        <p className="text-gray-700">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Waarom Kiezen voor MMT Projects?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Als gevestigd bedrijf in Hasselt kennen wij de lokale bouwvoorschriften en specifieke uitdagingen van gebouwen in Limburg.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    0484 11 77 27
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professioneel onderhoud"
                  className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Ons Werkgebied: Hasselt en 50km Omgeving</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects verzorgt onderhoud en herstelling in heel Limburg en omliggende gebieden.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Veelvoorkomende Onderhoud en Herstelling Projecten</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Dakonderhoud en Dakherstellingen</h3>
                  <p className="text-gray-700">Dakbedekking controle, gootreiniging, dakisolatie verbetering, pannenvervaging, en reparatie van lekken.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Gevelonderhoud en Gevelrestauratie</h3>
                  <p className="text-gray-700">Voegwerk, schilderwerk, gevelreiniging, en reparatie van scheuren of vochtproblemen.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Interieur Onderhoud</h3>
                  <p className="text-gray-700">Sanitair reparaties, vloeronderhoud, schilderwerk binnen, en kleine verbouwingen.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Preventief Gebouwbeheer</h3>
                  <p className="text-gray-700">Periodieke inspecties, onderhoudsplanningen, en advies over energiebesparende maatregelen.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Duurzaam Onderhoud</h3>
                  <p className="text-gray-700">Isolatieverbeteringen, energiezuinige materialen en preventieve maatregelen tegen vocht.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Noodreparaties 24/7</h3>
                  <p className="text-gray-700">Snelle respons bij waterschade, stormschade of andere urgente situaties.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-16 rounded-3xl shadow-xl">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Neem Contact Op voor Onderhoud en Herstelling</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Heeft u vragen over onderhoud en herstelling van uw gebouw? Neem contact op voor een vrijblijvend advies en offerte.
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
                <div className="mt-6 text-white/80">
                  <p className="mb-2">
                    <MapPin className="h-4 w-4 inline mr-2" />
                    Daaleindestraat 100, 3720 Hasselt
                  </p>
                  <p>Werkgebied: Hasselt en 50km omgeving</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} MMT Projects. Alle rechten voorbehouden.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default OnderhoudHerstelling;
