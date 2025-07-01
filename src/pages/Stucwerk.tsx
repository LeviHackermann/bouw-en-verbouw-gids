import { Helmet } from 'react-helmet-async';
import { Building2, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Users, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Stucwerk = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Stucwerk Hasselt - MMT Projects</title>
        <meta name="description" content="Professioneel stucwerk in Hasselt en omgeving. MMT Projects is uw partner voor kwalitatief stucwerk. Vraag nu een gratis offerte aan!" />
        <meta name="keywords" content="stucwerk, Hasselt, MMT Projects, offerte" />
      </Helmet>

      <Navigation />

      {/* Header */}
      <header className="bg-blue-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Building2 className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">Stucwerk in Hasselt - MMT Projects</h1>
              <p className="text-xl mt-2 text-blue-100">Kwaliteit en vakmanschap in stucwerk</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Bel 0484117727
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="mr-2 h-5 w-5" />
              Gratis offerte
            </Button>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Professioneel Stucwerk door MMT Projects in Hasselt</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            MMT Projects biedt hoogwaardig stucwerk voor zowel nieuwbouw als renovatieprojecten in Hasselt en omgeving. Onze ervaren stukadoors zorgen voor een perfecte afwerking van uw wanden en plafonds.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Stucwerk Diensten in Hasselt</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Traditioneel Stucwerk</h3>
                <p className="text-gray-600">
                  Klassiek stucwerk voor een tijdloze uitstraling.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Modern Stucwerk</h3>
                <p className="text-gray-600">
                  Strakke en moderne afwerking voor een eigentijdse look.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Reparatie Stucwerk</h3>
                <p className="text-gray-600">
                  Herstel van beschadigd stucwerk door ervaren vakmensen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Waarom Kiezen voor MMT Projects voor Stucwerk?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-3">Ervaren Stukadoors</h3>
                <p className="text-gray-600">
                  Ons team bestaat uit ervaren en gecertificeerde stukadoors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-3">Kwaliteit en Garantie</h3>
                <p className="text-gray-600">
                  Wij leveren hoogwaardig stucwerk met garantie op de uitgevoerde werkzaamheden.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-3">Snelle Service</h3>
                <p className="text-gray-600">
                  Wij zorgen voor een snelle en efficiënte uitvoering van uw stucwerk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Werkgebied Stucwerk</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            MMT Projects verzorgt stucwerk in een straal van 50 kilometer rond Hasselt. Wij zijn actief in:
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">Grote steden:</h3>
              <p>Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Beringen, Houthalen-Helchteren, Lommel, Maaseik</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Kleinere gemeenten:</h3>
              <p>Lanaken, Riemst, Hoeselt, Wellen, Kortessem, Nieuwerkerken, Herk-de-Stad, Halen, Ham, Tessenderlo, Borgloon, Heers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Neem Contact Op voor Stucwerk</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Wilt u meer weten over onze stucwerk diensten? Neem contact op met MMT Projects voor een vrijblijvende offerte en deskundig advies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Bel 0484117727
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="mr-2 h-5 w-5" />
              Email ons
            </Button>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Contactgegevens</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold">Adres:</p>
                  <p className="text-gray-700">Daaleindestraat 100, 3720 Hasselt</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold">Email:</p>
                  <p className="text-gray-700">info@mmtprojects.be</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold">Telefoon:</p>
                  <p className="text-gray-700">0484117727</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stucwerk;
