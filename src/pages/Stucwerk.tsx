
import { Building2, Phone, Mail, MapPin, Check, Users, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const Stucwerk = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Stucwerk Hasselt - Professionele Stucadoors in Limburg | MMT Projects</title>
        <meta name="description" content="Stucwerk Hasselt ✓ Professionele stucadoors voor binnen- en buitenstuc ✓ Service in heel Limburg ✓ Gratis offerte ✓ Ervaren vakmanschap ✓ Bel 0484117727" />
      </Helmet>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Stucwerk Hasselt - Professionele Stucadoors in Limburg
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              MMT Projects is uw betrouwbare partner voor stucwerk in Hasselt en de hele provincie Limburg. 
              Met jarenlange ervaring in de bouwsector verzorgen wij kwalitatief stucwerk voor particulieren en bedrijven 
              in een straal van 50 kilometer rond Hasselt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Bel 0484117727
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="mr-2 h-5 w-5" />
                Gratis Offerte
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Onze Stucwerk Diensten in Hasselt</h2>
            <p className="text-xl text-gray-600">Als gespecialiseerde stucadoors bieden wij een breed scala aan diensten</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Binnen Stucwerk</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Traditioneel kalkstuc voor authentieke afwerking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Moderne sierpleisters voor eigentijdse uitstraling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Gladde afwerking van muren en plafonds</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Herstel van bestaand stucwerk</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Decoratieve stuctechnieken</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Buiten Stucwerk</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Gevelstuc en gevelrenovatie</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Isolatiestuc met thermische eigenschappen</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Minerale stuc voor duurzame gevelafwerking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Herstel van historische gevels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Kleurstuc in verschillende tinten</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Waarom Kiezen voor MMT Projects Stucwerk?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lokale Expertise in Limburg</h3>
              <p className="text-gray-600">
                Met onze vestiging in Hasselt kennen wij de bouwkundige uitdagingen van de regio. 
                Of het nu gaat om renovatie van historische panden in het centrum van Hasselt of moderne nieuwbouw in de buitenwijken.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Vakmanschap van Hoge Kwaliteit</h3>
              <p className="text-gray-600">
                Onze ervaren stucadoors werken uitsluitend met hoogwaardige materialen en bewezen technieken. 
                Elk project wordt uitgevoerd met oog voor detail en met respect voor uw wensen en budget.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Snelle Service in Heel Limburg</h3>
              <p className="text-gray-600">
                Dankzij onze centrale ligging in Hasselt kunnen wij snel ter plaatse zijn voor projecten in 
                Genk, Sint-Truiden, Tongeren, Bilzen en alle andere gemeenten binnen 50 kilometer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Het Stucwerk Proces bij MMT Projects</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Vrijblijvende Offerte</h3>
              <p className="text-gray-600">
                Wij komen naar uw locatie voor een grondige inspectie en maken een gedetailleerde offerte zonder verplichtingen.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Voorbereiding en Planning</h3>
              <p className="text-gray-600">
                Onze stucadoors bereiden het project minutieus voor, inclusief bescherming van uw eigendommen en planning van het werk.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Professionele Uitvoering</h3>
              <p className="text-gray-600">
                Met moderne technieken en traditioneel vakmanschap voeren wij het stucwerk uit volgens de hoogste kwaliteitsnormen.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Nazorg en Garantie</h3>
              <p className="text-gray-600">
                Na oplevering bieden wij volledige nazorg en garantie op ons stucwerk, zodat u jarenlang kunt genieten van het resultaat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Service Gebied: 50 Kilometer Rond Hasselt</h2>
            <p className="text-xl text-gray-600">MMT Projects verzorgt stucwerk in heel Limburg en delen van aangrenzende provincies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Belangrijkste Steden</h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Hasselt</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Genk</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Sint-Truiden</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Tongeren</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Bilzen</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Diepenbeek</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Beringen</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Houthalen-Helchteren</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Lummen</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Herk-de-Stad</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Borgloon</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Heusden-Zolder</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Stucwerk Onderhoud en Renovatie</h3>
              <p className="text-gray-600 mb-6">
                Heeft u bestaand stucwerk dat onderhoud of renovatie nodig heeft? Onze specialisten kunnen:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Scheuren in stucwerk professioneel herstellen</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Verkleuring en verwering aanpakken</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Isolatiewaarde verbeteren met moderne stuctechnieken</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Historisch stucwerk restaureren volgens originele specificaties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Neem Contact Op voor Stucwerk in Hasselt</h2>
          <p className="text-xl mb-8">
            Bent u op zoek naar professioneel stucwerk in Hasselt of omgeving? MMT Projects staat klaar om uw project te bespreken.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 mr-3" />
              <div>
                <div className="font-semibold">Telefoon</div>
                <div>0484117727</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 mr-3" />
              <div>
                <div className="font-semibold">Email</div>
                <div>info@mmtprojects.be</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 mr-3" />
              <div>
                <div className="font-semibold">Adres</div>
                <div>Daaleindestraat 100, 3720 Hasselt</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Bel Direct
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="mr-2 h-5 w-5" />
              Gratis Offerte Aanvragen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stucwerk;
