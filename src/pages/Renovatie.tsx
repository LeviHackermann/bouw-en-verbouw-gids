
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
        <title>Renovatie Hasselt | MMT Projects - Professionele Renovaties Limburg</title>
        <meta name="description" content="Renovatie specialist in Hasselt en omgeving. MMT Projects renoveert uw woning of bedrijf met 15+ jaar ervaring. Gratis offerte voor renovatie in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="renovatie Hasselt, renovatie Limburg, woningrenovatie, energiezuinige renovatie, MMT Projects" />
        <link rel="canonical" href="/renovatie-hasselt-limburg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-600 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Renovatie Hasselt - Uw Betrouwbare Partner
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Met meer dan 15 jaar ervaring transformeren wij uw woning tot een moderne, 
                  functionele en energiezuinige ruimte in Hasselt en heel Limburg.
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

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Waarom Kiezen voor MMT Projects Renovatie?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Als lokale renovatiespecialist in Hasselt begrijpen wij dat renovatie meer is dan alleen opknappen. 
                Het gaat om het creëren van een ruimte die perfect aansluit bij uw huidige levensstijl.
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
                    Honderden renovatieprojecten gerealiseerd in Hasselt, Genk, Sint-Truiden en heel Limburg.
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
                    Diepgaande kennis van Hasselt en omgeving voor efficiënte renovatieprojecten.
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
                    Vakmanschap en hoogwaardige materialen met volledige garantie op ons werk.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Renovatie Specialisaties</h2>
              <p className="text-xl text-gray-600">Onze expertise in verschillende renovatieprojecten</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64" 
                    alt="Energiezuinige renovatie" 
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <Home className="h-6 w-6" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Energiezuinige Renovaties</h3>
                  <p className="text-gray-700 text-sm">
                    Verlaag uw energiekosten met onze duurzame renovatieoplossingen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" 
                    alt="Structurele renovatie" 
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <Building2 className="h-6 w-6" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Structurele Renovaties</h3>
                  <p className="text-gray-700 text-sm">
                    Complexe aanpassingen aan draagmuren en dakstructuren.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1493663284031-b7e3aaa4cab7" 
                    alt="Karakterrenovatie" 
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <Star className="h-6 w-6" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Karakterrenovaties</h3>
                  <p className="text-gray-700 text-sm">
                    Behoud van authentieke elementen met moderne comfort.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858" 
                    alt="Totaalrenovatie" 
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <Hammer className="h-6 w-6" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Totaalrenovaties</h3>
                  <p className="text-gray-700 text-sm">
                    Complete woningtransformatie van kelder tot zolder.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Service Gebied - 50km Rondom Hasselt</h2>
              <p className="text-xl text-gray-600">Wij verzorgen renovatieprojecten in heel Limburg</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Hoofdsteden</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Renovatie Hasselt</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Renovatie Genk</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Renovatie Sint-Truiden</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Renovatie Tongeren</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Renovatie Bilzen</li>
                </ul>
              </Card>

              <Card className="bg-white p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Regio Noord</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Lommel, Neerpelt</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Overpelt, Bocholt</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Hamont-Achel</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Peer, Bree</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Maaseik, Kinrooi</li>
                </ul>
              </Card>

              <Card className="bg-white p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Regio Zuid</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Maasmechelen</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Lanaken, Riemst</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Dilsen-Stokkem</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Borgloon, Voeren</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Hoeselt, Wellen</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Renovatie Process</h2>
              <p className="text-xl text-gray-600">Van analyse tot droomhuis in 4 stappen</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-4">Analyse & Planning</h3>
                <p className="text-gray-700">Wij analyseren uw woning en bespreken uw renovatiewensen.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-4">Vergunningen</h3>
                <p className="text-gray-700">Wij regelen alle benodigde vergunningen voor uw renovatie.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-4">Uitvoering</h3>
                <p className="text-gray-700">Start van de renovatie met kwaliteit en transparante communicatie.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">4</div>
                <h3 className="text-xl font-bold mb-4">Oplevering</h3>
                <p className="text-gray-700">Uw gerenoveerde woning wordt opgeleverd met alle garanties.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start Uw Renovatieproject in Hasselt</h2>
            <p className="text-xl mb-8 text-blue-100">
              Klaar om uw renovatiedroom waar te maken? MMT Projects staat klaar om uw 
              renovatieproject in Hasselt of omgeving te realiseren.
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
                <h3 className="text-2xl font-bold mb-6">Contact MMT Projects - Renovatie Specialist Hasselt</h3>
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
                  <strong>Service gebied:</strong> 50km rondom Hasselt, inclusief alle gemeenten in Limburg.
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
                    <span>15+ jaar ervaring in renovaties</span>
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
