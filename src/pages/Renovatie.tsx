import { Helmet } from 'react-helmet-async';
import { 
  Building2, Phone, Mail, MapPin, CheckCircle, Award, Users, Shield,
  ArrowRight, Star, Wrench, Home, Hammer, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Renovatie = () => {
  return (
    <>
      <Helmet>
        <title>Renovatie Hasselt - Professionele Renovatiewerken in Limburg</title>
        <meta name="description" content="Renovatie in Hasselt en omgeving? MMT Projects voert vakkundige renovatiewerken uit in heel Limburg. 15+ jaar ervaring. Gratis offerte!" />
        <meta name="keywords" content="renovatie Hasselt, renovatiewerken Limburg, badkamerrenovatie, keukenrenovatie, MMT Projects" />
        <link rel="canonical" href="/renovatie-hasselt-limburg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-600 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Renovatie Hasselt - Professionele Renovatiewerken in Limburg
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Zoekt u een betrouwbare partner voor uw renovatieproject in Hasselt? MMT Projects 
                  staat al meer dan 15 jaar garant voor kwaliteitsvolle renovatiewerken in Hasselt 
                  en heel de provincie Limburg.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Phone className="mr-2 h-5 w-5" />
                    Gratis offerte
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Onze projecten
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858" 
                    alt="Renovatie project Hasselt" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Intro */}
        <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4" />
                15+ jaar ervaring in renovatie
              </div>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                Van kleine verbouwingen tot complete huisrenovaties - wij maken van uw droomhuis werkelijkheid.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Onze Renovatieservices in Hasselt</h2>
              <p className="text-xl text-gray-600">
                Als ervaren aannemer in Hasselt bieden wij een volledig pakket aan renovatiediensten. 
                Onze specialisten begeleiden u van A tot Z bij uw renovatieproject.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Badkamerrenovatie</h3>
                  <p className="text-gray-700 text-sm">
                    Badkamerrenovatie en sanitaire installaties
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Keukenrenovatie</h3>
                  <p className="text-gray-700 text-sm">
                    Keukenrenovatie en maatwerk keukens
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Dakwerken</h3>
                  <p className="text-gray-700 text-sm">
                    Dakwerken en dakisolatie
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Hammer className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Vloerwerken</h3>
                  <p className="text-gray-700 text-sm">
                    Vloerwerken en tegelwerken
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Alle Renovatiewerken</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                    <span>Schilderwerken binnen en buiten</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                    <span>Elektriciteitswerken en verlichting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                    <span>Centrale verwarming en cv-installaties</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                    <span>Ramen en deuren plaatsen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Waarom Kiezen voor MMT Projects in Hasselt?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Met onze jarenlange ervaring in renovatiewerken hebben wij ons bewezen als dé renovatiespecialist 
                in Hasselt en omstreken. Onze vakmannen kennen de lokale bouwvoorschriften en werken uitsluitend 
                met kwaliteitsmaterialen van betrouwbare leveranciers uit de regio.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">15+ Jaar Ervaring</h3>
                  <p className="text-gray-700">
                    Bewezen expertise in renovatiewerken doorheen heel Limburg.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Lokale Expertise</h3>
                  <p className="text-gray-700">
                    Diepgaande kennis van bouwvoorschriften in Hasselt en omgeving.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Kwaliteitsgarantie</h3>
                  <p className="text-gray-700">
                    Uitgebreide garantie op alle renovatiewerken en vakmanschap.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ons Werkgebied - Renovatie in Heel Limburg</h2>
              <p className="text-xl text-gray-600">
                Vanuit ons hoofdkantoor in Hasselt voeren wij renovatieprojecten uit in een straal van 50 kilometer.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Hoofdsteden</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Renovatie Genk</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Renovatie Sint-Truiden</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Renovatie Tongeren</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Renovatie Bilzen</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Renovatie Diepenbeek</li>
                </ul>
              </Card>

              <Card className="bg-white p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Regio Noord</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Beringen, Heusden-Zolder</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Houthalen-Helchteren</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Lommel</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Maaseik</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Peer</li>
                </ul>
              </Card>

              <Card className="bg-white p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Regio Zuid</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Tessenderlo</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Herk-de-Stad</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Borgloon, Hoeselt</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Riemst, Lanaken</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Maasmechelen</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Expertise */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Lokale Expertise en Vergunningen</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dankzij onze jarenlange aanwezigheid in Hasselt kennen wij de lokale bouwreglementering 
                van Hasselt en omliggende gemeenten door en door. Wij begeleiden u bij het aanvragen van 
                bouwvergunningen en zorgen ervoor dat uw renovatieproject volledig conform de geldende normen wordt uitgevoerd.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Veelgestelde Vragen over Renovatie in Hasselt</h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Hoelang duurt een renovatieproject in Hasselt gemiddeld?</h3>
                  <p className="text-gray-700">
                    De duur van renovatiewerken hangt af van de omvang van het project. Een badkamerrenovatie 
                    in Hasselt duurt gemiddeld 1-2 weken, terwijl een volledige huisrenovatie 2-6 maanden kan duren.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Welke vergunningen zijn nodig voor renovatie in Hasselt?</h3>
                  <p className="text-gray-700">
                    Voor bepaalde renovatiewerken in Hasselt is een stedenbouwkundige vergunning vereist. 
                    Wij adviseren u graag over de nodige vergunningen voor uw specifieke project.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Biedt MMT Projects garantie op renovatiewerken?</h3>
                  <p className="text-gray-700">
                    Ja, wij bieden uitgebreide garantie op al onze renovatiewerken in Hasselt en omgeving. 
                    De garantietermijn varieert afhankelijk van het type werk.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Gratis Offerte voor Uw Renovatieproject</h2>
            <p className="text-xl mb-8 text-blue-100">
              Heeft u plannen voor een renovatie in Hasselt of omgeving? Vraag dan vrijblijvend een offerte aan. 
              Onze experts bezoeken u graag thuis om uw project te bespreken en een gedetailleerde prijsopgave op te maken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Gratis offerte aanvragen
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="mr-2 h-5 w-5" />
                E-mail ons
              </Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact MMT Projects</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4 text-blue-600" />
                    <span>Daaleindestraat 100, 3720 Hasselt</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4 text-blue-600" />
                    <span>0484117727</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4 text-blue-600" />
                    <span>info@mmtprojects.be</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-600">
                  Bel vandaag nog voor een gratis renovatie-advies in Hasselt en omstreken. 
                  Ons team staat klaar om uw renovatiedromen waar te maken!
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold mb-4">Waarom MMT Projects?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Lokale aanwezigheid in Hasselt</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>15+ jaar ervaring in renovatiewerken</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Transparante prijzen zonder verborgen kosten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Persoonlijke begeleiding per project</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Renovatie;
