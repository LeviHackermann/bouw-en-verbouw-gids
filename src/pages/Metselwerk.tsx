
import { Helmet } from 'react-helmet-async';
import { 
  Building2, Phone, Mail, MapPin, Award, Users, Shield, 
  CheckCircle, ArrowRight, Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Metselwerk = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Metselwerk Hasselt - Professioneel Metselwerk | MMT Projects</title>
        <meta name="description" content="Metselwerk Hasselt ✓ MMT Projects - Ervaren metselaars in Limburg ✓ Nieuwbouw & renovatie ✓ Gratis offerte ✓ Bel 0484117727" />
        <meta name="keywords" content="metselwerk hasselt, metselaar limburg, metselwerk renovatie, gevelmuren, nieuwbouw metselwerk" />
      </Helmet>

      {/* Header with background */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1590845947670-c009801ffa74" 
            alt="Metselwerk background" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Building2 className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Vakkundig metselwerk</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-6">
                Metselwerk in <span className="text-blue-600">Hasselt en omgeving</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Professioneel metselwerk door ervaren vaklieden. Van nieuwbouw tot renovatie - 
                MMT Projects staat voor kwaliteit en vakmanschap.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel 0484117727
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  Gratis offerte
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1590845776030-793bb31c8e89" 
                alt="Professioneel metselwerk" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Professioneel Metselwerk door Ervaren Vaklieden in Hasselt
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bij MMT Projects bent u aan het juiste adres voor metselwerk van de hoogste kwaliteit in Hasselt en omgeving. 
              Met jarenlange ervaring in de bouwsector leveren wij vakkundig metselwerk voor particulieren en bedrijven in heel Limburg. 
              Ons team van ervaren metselaars staat garant voor duurzaam en esthetisch metselwerk dat voldoet aan de hoogste normen.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Onze Metselwerk Diensten in Hasselt
            </h2>
            <p className="text-xl text-gray-600">MMT Projects biedt een uitgebreid pakket metselwerk diensten aan</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Nieuwbouw Metselwerk</h3>
                <p className="text-gray-700">
                  Complete metselwerk voor nieuwbouwprojecten. Van fundering tot gevelmuren - een solide basis voor uw woning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Renovatie en Herstelwerk</h3>
                <p className="text-gray-700">
                  Vakkundig renovatie- en herstelwerk aan bestaande metselwerken in Hasselt en omgeving.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Gevelmuren en Scheidingsmuren</h3>
                <p className="text-gray-700">
                  Professionele uitvoering van gevelmuren en scheidingsmuren met diverse materialen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Decoratief Metselwerk</h3>
                <p className="text-gray-700">
                  Decoratieve elementen zoals boogconstructies, sierelementen en ambachtelijke restauraties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Waarom Kiezen voor MMT Projects Metselwerk?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Lokale Expertise in Limburg</h3>
              <p className="text-gray-700 leading-relaxed">
                Als gevestigd bedrijf in Hasselt kennen wij de lokale bouwvoorschriften en climatologische omstandigheden perfect.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Kwaliteit en Vakmanschap</h3>
              <p className="text-gray-700 leading-relaxed">
                Onze metselaars beschikken over jarenlange ervaring en blijven zich ontwikkelen met de nieuwste technieken.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Complete Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Van ontwerp tot oplevering verzorgen wij het complete traject. Wij denken mee over materiaalkeuzе en planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Metselwerk Service Gebied: Hasselt en 50km Omtrek
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              MMT Projects bedient niet alleen Hasselt, maar het complete service gebied binnen een straal van 50 kilometer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Grote steden in ons werkgebied:</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <span>• Genk</span>
                <span>• Sint-Truiden</span>
                <span>• Tongeren</span>
                <span>• Bilzen</span>
                <span>• Diepenbeek</span>
                <span>• Houthalen-Helchteren</span>
                <span>• Beringen</span>
                <span>• Heusden-Zolder</span>
                <span>• Lommel</span>
                <span>• Peer</span>
                <span>• Bree</span>
                <span>• Maaseik</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Kleinere gemeenten:</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <span>• Maasmechelen</span>
                <span>• Lanaken</span>
                <span>• Riemst</span>
                <span>• Hoeselt</span>
                <span>• Kortessem</span>
                <span>• Alken</span>
                <span>• Wellen</span>
                <span>• Herk-de-Stad</span>
                <span>• Nieuwerkerken</span>
                <span>• Halen</span>
                <span>• Geetbets</span>
                <span>• Gingelom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Metselwerk Materialen en Technieken
            </h2>
            <p className="text-xl text-gray-600">
              Bij MMT Projects werken wij uitsluitend met hoogwaardige materialen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-50 border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Traditionele Baksteen</h3>
                <p className="text-gray-700">
                  Klassieke keramische bakstenen in diverse formaten en kleuren, perfect voor renovaties en nieuwbouw.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Kalkzandsteen</h3>
                <p className="text-gray-700">
                  Voor dragende muren vanwege de uitstekende isolatie-eigenschappen en sterkte.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Natuursteen</h3>
                <p className="text-gray-700">
                  Voor exclusieve projecten - een specialiteit die veel vakmanschap vereist.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Moderne Bouwstenen</h3>
                <p className="text-gray-700">
                  Cellenbeton en andere innovatieve bouwmaterialen voor moderne projecten.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Het Metselwerk Proces bij MMT Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Vrijblijvende Offerte</h3>
              <p className="text-gray-700">
                Afspraak op locatie voor een vrijblijvende offerte in Hasselt of omgeving.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Ontwerp en Planning</h3>
              <p className="text-gray-700">
                Gedetailleerd plan inclusief materiaalkeuzе en tijdsplanning voor uw metselwerk.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Professionele Uitvoering</h3>
              <p className="text-gray-700">
                Ervaren team start volgens planning. Nette werkplek en minimale overlast.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Oplevering en Nazorg</h3>
              <p className="text-gray-700">
                Controle van het uitgevoerde werk en nette oplevering. Wij bieden garantie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Klaar om te starten met uw metselwerk project?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl">
                Neem vandaag nog contact op met MMT Projects voor professioneel metselwerk in Hasselt en omgeving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel 0484117727
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-5 w-5" />
                  Verstuur een e-mail
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Contact voor Metselwerk in Hasselt
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              MMT Projects - Uw specialist voor metselwerk in Limburg. 
              Of het nu gaat om een kleine reparatie of een groot nieuwbouwproject, wij staan voor u klaar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Adres</h3>
              <p className="text-gray-700">Daaleindestraat 100<br />3720 Hasselt</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Telefoon</h3>
              <p className="text-gray-700">0484117727</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-700">info@mmtprojects.be</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Metselwerk;
