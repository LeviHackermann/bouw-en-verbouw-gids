
import { 
  Building2, Phone, Mail, MapPin, CheckCircle, Users, Award, 
  Droplets, Zap, Thermometer, Wind, Wrench, Paintbrush
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Badkamerrenovatie = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Badkamerrenovatie Hasselt - Professionele Badkamers door MMT Projects</title>
        <meta name="description" content="Badkamerrenovatie Hasselt ✓ MMT Projects ✓ 50km service gebied ✓ Professionele badkamertransformaties in Limburg ✓ Gratis offerte ✓ Lokale expertise sinds jaren" />
        <meta name="keywords" content="badkamerrenovatie Hasselt, badkamer renoveren Limburg, MMT Projects, badkamertransformatie, sanitair installatie Hasselt" />
        <link rel="canonical" href="https://mmtprojects.be/badkamerrenovatie-hasselt-limburg" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Droplets className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Badkamerrenovatie specialist</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-6">
                Badkamerrenovatie Hasselt - <span className="text-blue-600">Complete Badkamertransformatie</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Bent u op zoek naar een badkamerrenovatie in Hasselt? MMT Projects is uw betrouwbare partner voor complete badkamertransformaties in Hasselt en omstreken.
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
                  src="https://images.unsplash.com/photo-1584622781564-1d987ba4dce5" 
                  alt="Moderne badkamer renovatie" 
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Onze Badkamerrenovatie Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Complete badkamertransformaties van ontwerp tot oplevering</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Paintbrush className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Complete badkamerontwerpen op maat</h3>
                <p className="text-gray-700">
                  Van moderne minimalistische designs tot klassieke stijlen - wij ontwerpen uw drombadkamer.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Loodgieterswerk en sanitair</h3>
                <p className="text-gray-700">
                  Professionele installatie van alle sanitaire voorzieningen en loodgieterswerk.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Tegelwerk en vloerverwarming</h3>
                <p className="text-gray-700">
                  Vakkundig tegelwerk en installatie van moderne vloerverwarmingssystemen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Elektrische installaties</h3>
                <p className="text-gray-700">
                  Moderne verlichting en elektrische installaties voor een veilige badkamer.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Ventilatie en vochtbeheersing</h3>
                <p className="text-gray-700">
                  Professionele ventilatie-oplossingen voor een gezonde badkameromgeving.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Douche- en badinstallaties</h3>
                <p className="text-gray-700">
                  Installatie van moderne douches, baden en alle bijbehorende voorzieningen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Het Badkamerrenovatie Proces</h2>
            <p className="text-xl text-gray-600">Van eerste ontwerp tot eindoplevering</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Gratis Offerte op Locatie</h3>
              <p className="text-gray-700">
                Onze experts bezoeken uw woning voor een uitgebreide analyse en offerte.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Ontwerp en Planning</h3>
              <p className="text-gray-700">
                Op basis van uw wensen maken wij een gedetailleerd ontwerp en planning.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Uitvoering Renovatie</h3>
              <p className="text-gray-700">
                Ons vakkundige team start met de renovatie volgens planning.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Oplevering en Nazorg</h3>
              <p className="text-gray-700">
                Grondige eindcontrole en instructies voor uw nieuwe badkamer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Service Gebied - Hasselt en 50km Omgeving</h2>
            <p className="text-xl text-gray-600">Wij verzorgen badkamerrenovaties in heel Limburg</p>
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom MMT Projects voor Uw Badkamerrenovatie?</h2>
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
                Wij hebben jarenlange ervaring in badkamerrenovaties door heel Limburg.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Complete service</h3>
              <p className="text-gray-700">
                Van ontwerp tot oplevering verzorgen wij het complete renovatietraject.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Klaar voor uw badkamerrenovatie?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Neem vandaag nog contact op voor een vrijblijvende offerte. 
            Onze experts staan klaar om uw drombadkamer werkelijkheid te maken.
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

export default Badkamerrenovatie;
