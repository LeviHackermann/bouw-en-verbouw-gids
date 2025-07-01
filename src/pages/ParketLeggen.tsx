import { Helmet } from 'react-helmet-async';
import { Building2, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Users, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ParketLeggen = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Parket Leggen Hasselt - Professionele Parketvloeren door MMT Projects</title>
        <meta name="description" content="Parket Leggen Hasselt ✓ MMT Projects ✓ 50km service gebied ✓ Professionele parketvloeren in Limburg ✓ Gratis offerte ✓ Lokale expertise sinds jaren" />
        <meta name="keywords" content="parket leggen Hasselt, parketvloer Limburg, MMT Projects, parket plaatsen, houten vloer Hasselt" />
        <link rel="canonical" href="https://mmtprojects.be/parket-leggen-hasselt-limburg" />
      </Helmet>

      <Navigation />

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">MMT Projects</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                size="sm"
              >
                <Phone className="mr-2 h-4 w-4" />
                0484 11 77 27
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Parket specialist</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-6">
                Parket Leggen Hasselt - <span className="text-blue-600">Professionele Parketvloeren</span>
              </h1>

              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Bent u op zoek naar een vakman voor het leggen van parket in Hasselt? MMT Projects is uw betrouwbare partner voor het plaatsen van parketvloeren in Hasselt en omstreken.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Gratis offerte
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  <Mail className="mr-2 h-5 w-5" />
                  info@mmtprojects.be
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-155199343 একজনের-4424444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444div>
import { Building2, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Users, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ParketLeggen = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Parket Leggen Hasselt - Professionele Parketvloeren door MMT Projects</title>
        <meta name="description" content="Parket Leggen Hasselt ✓ MMT Projects ✓ 50km service gebied ✓ Professionele parketvloeren in Limburg ✓ Gratis offerte ✓ Lokale expertise sinds jaren" />
        <meta name="keywords" content="parket leggen Hasselt, parketvloer Limburg, MMT Projects, parket plaatsen, houten vloer Hasselt" />
        <link rel="canonical" href="https://mmtprojects.be/parket-leggen-hasselt-limburg" />
      </Helmet>

      <Navigation />

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">MMT Projects</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                size="sm"
              >
                <Phone className="mr-2 h-4 w-4" />
                0484 11 77 27
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Parket specialist</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-6">
                Parket Leggen Hasselt - <span className="text-blue-600">Professionele Parketvloeren</span>
              </h1>

              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Bent u op zoek naar een vakman voor het leggen van parket in Hasselt? MMT Projects is uw betrouwbare partner voor het plaatsen van parketvloeren in Hasselt en omstreken.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Gratis offerte
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  <Mail className="mr-2 h-5 w-5" />
                  info@mmtprojects.be
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551993431-aebc2c868818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Parket Leggen Hasselt"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Onze Parket Legdiensten</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professioneel parket gelegd door ervaren vakmensen</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Parketvloer installatie</h3>
                <p className="text-gray-700">
                  Vakkundige installatie van alle soorten parketvloeren.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Parketrenovatie</h3>
                <p className="text-gray-700">
                  Herstel en renovatie van bestaande parketvloeren.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Onderhoud parket</h3>
                <p className="text-gray-700">
                  Professioneel onderhoud voor een lange levensduur van uw parket.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Service Gebied - Hasselt en 50km Omgeving</h2>
            <p className="text-xl text-gray-600">Wij plaatsen parketvloeren in heel Limburg</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden en grote gemeenten</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <span>Hasselt</span>
                <span>Genk</span>
                <span>Sint-Truiden</span>
                <span>Tongeren</span>
                <span>Bilzen</span>
                <span>Diepenbeek</span>
                <span>Beringen</span>
                <span>Houthalen-Helchteren</span>
                <span>Lummen</span>
                <span>Ham</span>
                <span>Tessenderlo</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Kleinere gemeenten</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
                <span>Alken</span>
                <span>As</span>
                <span>Bocholt</span>
                <span>Borgloon</span>
                <span>Bree</span>
                <span>Dilsen-Stokkem</span>
                <span>Gingelom</span>
                <span>Hamont-Achel</span>
                <span>Heers</span>
                <span>Herk-de-Stad</span>
                <span>Hoeselt</span>
                <span>Kinrooi</span>
                <span>Kortessem</span>
                <span>Lanaken</span>
                <span>Leopoldsburg</span>
                <span>Lommel</span>
                <span>Maaseik</span>
                <span>Maasmechelen</span>
                <span>Nieuwerkerken</span>
                <span>Opglabbeek</span>
                <span>Oudsbergen</span>
                <span>Peer</span>
                <span>Riemst</span>
                <span>Voeren</span>
                <span>Wellen</span>
                <span>Zonhoven</span>
                <span>Zutendaal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom MMT Projects voor Uw Parketvloer?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Lokale expertise in Hasselt</h3>
              <p className="text-gray-700">
                Als lokaal bedrijf kennen wij de specifieke uitdagingen en mogelijkheden in Limburg.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Jarenlange ervaring</h3>
              <p className="text-gray-700">
                Wij hebben jarenlange ervaring in het leggen van parketvloeren door heel Limburg.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Complete service</h3>
              <p className="text-gray-700">
                Van plaatsing tot onderhoud, wij verzorgen het complete traject.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Parket laten leggen in Hasselt?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Neem vandaag nog contact op voor een vrijblijvende offerte.
            Onze experts staan klaar om uw droomvloer werkelijkheid te maken.
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
      </section>

      <Footer />
    </div>
  );
};

export default ParketLeggen;
