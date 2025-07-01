
import { Building2, Shield, Phone, Mail, MapPin, Users, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const Dakwerken = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dakwerken in Hasselt - Professionele Dakwerken door MMT Projects</title>
        <meta name="description" content="Dakwerken Hasselt ✓ MMT Projects voert vakkundige dakwerkzaamheden uit in Limburg ✓ Dakpannen, isolatie, herstellingen ✓ Gratis offerte ✓ Bel 0484117727" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Shield className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Professionele dakwerken</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Dakwerken in <span className="text-blue-600">Hasselt</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              MMT Projects is uw betrouwbare partner voor alle dakwerken in Hasselt en omgeving. Met jarenlange ervaring in de dakbouw bieden wij hoogwaardige dakwerkzaamheden voor particulieren en bedrijven in Limburg.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                <Phone className="mr-2 h-5 w-5" />
                Gratis inspectie
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Meer informatie
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Onze Dakwerken Diensten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als gespecialiseerd dakwerkbedrijf voeren wij alle soorten dakwerkzaamheden uit. Of u nu een nieuw dak nodig heeft, dakherstellingen wilt laten uitvoeren of onderhoud aan uw bestaande dak, MMT Projects staat voor u klaar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Dakbedekking</h3>
                <p className="text-gray-700 mb-6">
                  Plaatsen van dakpannen, leien, bitumen, EPDM rubber en andere dakbedekkingen met hoogwaardige materialen.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dakpannen
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Leien
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    EPDM rubber
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Dakisolatie</h3>
                <p className="text-gray-700 mb-6">
                  Professionele dakisolatie volgens de nieuwste normen voor optimale energiebesparing.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Glaswol isolatie
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Steenwol isolatie
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Energiezuinig
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Onderhoud & Herstellingen</h3>
                <p className="text-gray-700 mb-6">
                  Snelle service voor dakherstellingen en regelmatig onderhoud om kostbare reparaties te voorkomen.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lekkage reparatie
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dakgoten onderhoud
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Preventief onderhoud
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom Kiezen voor MMT Projects Dakwerken?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              MMT Projects onderscheidt zich door persoonlijke service en vakmanschap.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Jarenlange Ervaring</h3>
              <p className="text-gray-700 leading-relaxed">
                Onze dakwerkers hebben jarenlange ervaring in het vak en volgen regelmatig bijscholingen om op de hoogte te blijven van de nieuwste technieken.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Veiligheid & Garantie</h3>
              <p className="text-gray-700 leading-relaxed">
                Wij werken altijd volgens de geldende veiligheidsnormen en bieden garantie op al onze dakwerkzaamheden.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Transparante Prijzen</h3>
              <p className="text-gray-700 leading-relaxed">
                Wij bieden transparante prijzen zonder verrassingen. Na een gratis inspectie ontvangt u een gedetailleerde offerte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Dakwerken Hasselt en Omgeving</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vanuit ons bedrijf aan de Daaleindestraat 100 in Hasselt bedienen wij de gehele regio Limburg.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Onze Servicegebied</h3>
                <p className="text-gray-700 mb-6">
                  Onze dakwerkers zijn actief in Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Lummen, Herk-de-Stad, Zonhoven, Heusden-Zolder, Beringen, Ham, Tessenderlo, Leopoldsburg en alle andere gemeenten binnen een straal van 50 kilometer.
                </p>
                <p className="text-gray-700">
                  Door onze lokale aanwezigheid kennen wij de specifieke uitdagingen van dakwerken in de Limburgse regio. Het klimaat, de lokale bouwvoorschriften en de architecturale stijlen zijn ons volledig bekend.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h4 className="text-lg font-semibold mb-4">Belangrijkste steden:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Hasselt</div>
                  <div>• Genk</div>
                  <div>• Sint-Truiden</div>
                  <div>• Tongeren</div>
                  <div>• Bilzen</div>
                  <div>• Diepenbeek</div>
                  <div>• Lummen</div>
                  <div>• Herk-de-Stad</div>
                </div>
                <p className="text-xs text-gray-500 mt-4">En alle gemeenten binnen 50km van Hasselt</p>
              </div>
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
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Neem Contact Op voor Uw Dakwerken</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Heeft u vragen over dakwerken of wilt u een vrijblijvende offerte? MMT Projects staat klaar om u te helpen. Onze dakwerkers komen graag langs voor een gratis inspectie en advies op maat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Contactgegevens MMT Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Adres</h4>
              <p className="text-gray-600">Daaleindestraat 100<br />3720 Hasselt</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Telefoon</h4>
              <p className="text-gray-600">0484117727</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">info@mmtprojects.be</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700">
              Bel vandaag nog voor een afspraak en ontdek waarom MMT Projects de voorkeurskeuze is voor dakwerken in Hasselt, Genk, Sint-Truiden, Tongeren en heel Limburg.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dakwerken;
