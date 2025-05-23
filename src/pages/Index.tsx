
import { Building2, Hammer, Home, Wrench, Shield, Users, Award, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Building2 className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Uw partner in<br />
            <span className="text-amber-200">bouwen & verbouwen</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Van droomhuis tot renovatie - wij realiseren uw bouwplannen met vakmanschap en betrouwbaarheid
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3">
            <Phone className="mr-2 h-5 w-5" />
            Neem contact op
          </Button>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Waar staan wij voor</h2>
          <p className="text-xl text-center text-gray-600 mb-12">De waarden die ons drijven</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Ervaring & expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Met tientallen projecten op onze naam weten wij precies wat er nodig is om uw bouwplannen te realiseren.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Klantgericht</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wij luisteren naar uw wensen en denken met u mee. Samen maken we van uw project een succes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Betrouwbaarheid</h3>
                <p className="text-gray-600 leading-relaxed">
                  Afspraak is afspraak. U kunt rekenen op transparante communicatie en een vlekkeloos proces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Wat doen wij?</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Onze specialisaties op een rij</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300">
              <CardContent className="p-6">
                <Home className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">Nieuwbouw</h3>
                <p className="text-gray-600">
                  Van ontwerp tot realisatie bouwen wij uw droomhuis op maat.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300">
              <CardContent className="p-6">
                <Hammer className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">Renovatie & verbouwing</h3>
                <p className="text-gray-600">
                  Wilt u uw woning moderniseren, uitbreiden of verbeteren? Wij zorgen voor een resultaat dat aan al uw wensen voldoet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300">
              <CardContent className="p-6">
                <Building2 className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">Totaalprojecten</h3>
                <p className="text-gray-600">
                  Van eerste schets tot de laatste afwerking nemen wij u al het werk uit uw handen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300">
              <CardContent className="p-6">
                <Wrench className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">Herstelling en onderhoud</h3>
                <p className="text-gray-600">
                  Van kleine reparaties tot het onderhoud van uw woning, wij bieden duurzame oplossingen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300">
              <CardContent className="p-6">
                <Shield className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">Dakwerken</h3>
                <p className="text-gray-600">
                  Plaatsen van een nieuw dak of gewoon vernieuwen wij doen het allemaal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Ontdek de voordelen van ons bedrijf</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Waarom kiezen voor ons?</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Persoonlijke begeleiding & communicatie</h3>
              <p className="text-gray-600 leading-relaxed">
                Onze vakkundige projectleiders houden u tijdens het hele bouwproces op de hoogte. Met korte lijnen en duidelijke communicatie weet u precies waar u aan toe bent.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Alles onder een dak</h3>
              <p className="text-gray-600 leading-relaxed">
                Van ontwerp tot oplevering verzorgen wij het complete traject. U heeft een aanspreekpunt voor alle bouwwerkzaamheden, wat zorgt voor een zorgeloze ervaring.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Kwaliteit tegen scherpe prijzen</h3>
              <p className="text-gray-600 leading-relaxed">
                Door onze jarenlange samenwerking met betrouwbare partners en leveranciers kunnen wij altijd de beste kwaliteit materialen en expertise garanderen tegen scherpe prijzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Samen bouwen aan uw toekomst</h2>
          <p className="text-xl mb-8 opacity-90">
            Heeft u plannen om te bouwen of verbouwen? Neem dan vandaag nog contact met ons op. 
            Ons team staat klaar om uw ideeën werkelijkheid te maken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Bel ons direct
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              <Mail className="mr-2 h-5 w-5" />
              Verstuur een e-mail
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Building2 className="h-8 w-8" />
          </div>
          <p className="text-gray-400 mb-4">Uw betrouwbare partner in bouwen & verbouwen</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              +31 (0)6 12345678
            </span>
            <span className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              info@uwbouwbedrijf.nl
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
