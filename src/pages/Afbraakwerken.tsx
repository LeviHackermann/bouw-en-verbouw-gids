
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, CheckCircle, Shield, Clock, Wrench, Home, AlertTriangle, Star, Building2, Hammer, Truck, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Afbraakwerken = () => {
  const services = [
    {
      title: "Volledige Gebouwsloop",
      description: "Complete sloop van woningen, kantoren en industriële panden met moderne apparatuur",
      icon: Building2
    },
    {
      title: "Selectieve Sloop",
      description: "Renovatiewerken en binnensloop voor verbouwingsprojecten",
      icon: Hammer
    },
    {
      title: "Asbestsanering",
      description: "Milieuveilige asbestsanering volgens stricteste veiligheidsnormen",
      icon: Shield
    },
    {
      title: "Fundering- en Kelderafbraak",
      description: "Professionele afbraak van funderingen en kelders met gespecialiseerde apparatuur",
      icon: Wrench
    },
    {
      title: "Puinruiming",
      description: "Complete puinruiming en milieuvriendelijke afvalverwerking na sloop",
      icon: Truck
    },
    {
      title: "Terreinopruiming",
      description: "Volledige terreinopruiming en voorbereiding voor nieuwe bouwprojecten",
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
    "Meer dan 15 jaar ervaring in afbraakwerken in Limburg",
    "Gecertificeerde sloopspecialisten met alle vergunningen",
    "Moderne sloopapparatuur en technieken",
    "Milieuvriendelijke werkwijze met maximale recycling",
    "Volledige verzekering en veiligheidscertificaten",
    "Transparante prijsstelling zonder verborgen kosten"
  ];

  const faqs = [
    {
      question: "Hoelang duurt een afbraakproject in Hasselt?",
      answer: "De duur van afbraakwerken hangt af van de grootte en complexiteit van het project. Een gemiddelde woning kan binnen 3-5 werkdagen worden gesloopt, terwijl grotere industriële projecten enkele weken kunnen duren."
    },
    {
      question: "Welke vergunningen zijn nodig voor afbraak in Limburg?",
      answer: "Voor de meeste afbraakwerken is een sloopvergunning van de gemeente vereist. MMT Projects regelt alle benodigde papierwerk en vergunningen voor u."
    },
    {
      question: "Wat gebeurt er met het sloopafval?",
      answer: "Wij sorteren en recyclen maximaal alle sloopafval volgens de geldende milieunormen in Vlaanderen. Herbruikbare materialen worden gescheiden en proper afgevoerd naar erkende verwerkingsbedrijven."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Afbraakwerken Hasselt | Sloopwerken Limburg | MMT Projects</title>
        <meta name="description" content="Professionele afbraakwerken in Hasselt en omgeving. ✓ Ervaren sloopspecialisten ✓ Veilig & milieuvriendelijk ✓ 50km rond Hasselt ✓ Gratis offerte" />
        <link rel="canonical" href="https://www.mmtprojects.be/afbraakwerken-hasselt-limburg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  <span className="text-sm font-medium">Professionele Sloopwerken</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
                  Afbraakwerken Hasselt - <span className="text-blue-600">Professionele Sloopwerken in Limburg</span>
                </h1>

                <p className="text-xl text-gray-700 mb-8 max-w-lg">
                  MMT Projects is uw betrouwbare partner voor professionele afbraakwerken in Hasselt en heel Limburg. Met jarenlange ervaring voeren wij veilige en efficiënte afbraakwerken uit.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    Gratis offerte aanvragen
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300">
                    <Mail className="mr-2 h-5 w-5" />
                    Neem contact op
                  </Button>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Professionele afbraakwerken"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                    <Shield className="h-8 w-8 mb-2" />
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">Jaar ervaring</div>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Onze Afbraakdiensten in Hasselt en Omgeving</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wij bieden een compleet pakket aan afbraakwerken aan voor particulieren, bedrijven en overheidsinstellingen.
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Waarom Kiezen voor MMT Projects Afbraakwerken?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Als erkend sloopbedrijf in Hasselt onderscheiden wij ons door professionele aanpak en veilige uitvoering van alle afbraakprojecten.
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
                  alt="Moderne sloopapparatuur"
                  className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Het Afbraakproces: Van Planning tot Oplevering</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Elk afbraakproject begint met een grondige voorbereiding en veiligheidsanalyse.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Analyse & Planning</h3>
                <p className="text-gray-700">Grondige inspectie en vergunningenproces</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Asbestinventarisatie</h3>
                <p className="text-gray-700">Veilige sanering volgens alle normen</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Hammer className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Veilige Afbraak</h3>
                <p className="text-gray-700">Moderne technieken en apparatuur</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Recycle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Recycling</h3>
                <p className="text-gray-700">95% van materialen gerecycled</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Afbraakwerken in Heel Limburg</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects voert afbraakwerken uit in Hasselt en alle omliggende gemeenten binnen een straal van 50 kilometer.
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

        {/* Environmental Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Milieuvriendelijke Afbraak en Recycling</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Als verantwoordelijk sloopbedrijf in Limburg hechten wij groot belang aan duurzaam slopen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Recycle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">95% Recycling</h3>
                  <p className="text-gray-700">Minimaal 95% van alle sloopafval wordt door ons gesorteerd en gerecycled.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Milieuveilig</h3>
                  <p className="text-gray-700">Alle materialen worden verwerkt conform de Vlaamse milieureglementen.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Erkende Partners</h3>
                  <p className="text-gray-700">Samenwerking met erkende afvalverwerkingspartners in de regio.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Veelgestelde Vragen over Afbraakwerken</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white border-none rounded-2xl shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Gratis Offerte voor Uw Afbraakproject</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Bent u op zoek naar een betrouwbare partner voor afbraakwerken in Hasselt of omgeving? MMT Projects biedt u graag een vrijblijvende offerte aan.
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

export default Afbraakwerken;
