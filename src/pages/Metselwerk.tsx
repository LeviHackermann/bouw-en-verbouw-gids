import { Helmet } from 'react-helmet-async';
import { Building2, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Users, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Metselwerk = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Metselwerk Hasselt - Professionele Metselwerken door MMT Projects</title>
        <meta name="description" content="Metselwerk Hasselt ✓ MMT Projects ✓ 50km service gebied ✓ Professionele metselwerken in Limburg ✓ Gratis offerte ✓ Lokale expertise sinds jaren" />
        <meta name="keywords" content="metselwerk Hasselt, metselwerken Limburg, MMT Projects, metselwerken renovatie, metselwerken nieuwbouw Hasselt" />
        <link rel="canonical" href="https://mmtprojects.be/metselwerk-hasselt-limburg" />
      </Helmet>

      <Navigation />

      {/* Header */}
      <header className="bg-blue-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Building2 className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">Metselwerk in Hasselt - Professionele Metselwerken door MMT Projects</h1>
              <p className="text-xl mt-2 text-blue-100">Kwaliteit en vakmanschap in elke steen</p>
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
          <h2 className="text-3xl font-bold mb-6">Professionele Metselwerken in Hasselt en Omgeving</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            MMT Projects biedt hoogwaardige metselwerken voor zowel nieuwbouw als renovatieprojecten in Hasselt en een straal van 50 kilometer eromheen. Onze ervaren metselaars leveren vakmanschap en kwaliteit in elk project.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Metselwerk Diensten in Hasselt</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Nieuwbouw Metselwerk</h3>
                <p className="text-gray-600">
                  Metselwerken voor nieuwbouwprojecten, van fundering tot gevel.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Renovatie Metselwerk</h3>
                <p className="text-gray-600">
                  Reparatie en renovatie van bestaand metselwerk, inclusief gevelreiniging.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Gevelbekleding</h3>
                <p className="text-gray-600">
                  Installatie van diverse gevelbekledingsmaterialen voor een moderne uitstraling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Waarom Kiezen voor MMT Projects voor Metselwerken?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-3">Ervaren Metselaars</h3>
                <p className="text-gray-600">
                  Ons team bestaat uit ervaren metselaars met oog voor detail en kwaliteit.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-3">Hoogwaardige Materialen</h3>
                <p className="text-gray-600">
                  Wij werken uitsluitend met hoogwaardige materialen voor duurzame resultaten.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-3">Snelle Uitvoering</h3>
                <p className="text-gray-600">
                  Wij zorgen voor een efficiënte en snelle uitvoering van uw metselwerken.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Werkgebied Metselwerken</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            MMT Projects verzorgt metselwerken in een straal van 50 kilometer rond Hasselt. Wij zijn actief in:
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
          <h2 className="text-3xl font-bold mb-8 text-center">Neem Contact Op voor Metselwerken</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Wilt u meer weten over onze metselwerken? Neem contact op met MMT Projects voor een vrijblijvende offerte en deskundig advies.
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

export default Metselwerk;
