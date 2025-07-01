
import { Helmet } from 'react-helmet-async';
import { 
  Building2, Phone, Mail, MapPin, Shield, 
  Users, Award, CheckCircle2, Clock, 
  Euro, HelpCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Gevelrenovatie = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Gevelrenovatie Hasselt - Professionele Gevelwerken in Limburg | MMT Projects</title>
        <meta name="description" content="Gevelrenovatie Hasselt ✓ Professionele gevelwerken in Limburg door MMT Projects. Ervaren specialisten, scherpe prijzen. Gratis offerte ☎ 0484117727" />
        <meta name="keywords" content="gevelrenovatie hasselt, gevelwerken limburg, gevel renoveren, gevelisolatie, MMT Projects" />
      </Helmet>

      {/* Header with background */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white mb-6">
              <Building2 className="h-5 w-5 mr-2" />
              <span className="font-medium">Gevelrenovatie Specialist</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gevelrenovatie Hasselt - Professionele Gevelwerken in Limburg
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Bent u op zoek naar professionele gevelrenovatie in Hasselt en omgeving? MMT Projects is uw betrouwbare partner voor alle gevelwerken in Limburg. Met jarenlange ervaring in gevelrenovatie transformeren wij uw gevel tot een moderne en energiezuinige buitenwand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Bel voor gratis offerte
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                Email ons
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Waarom Kiezen voor Gevelrenovatie?</h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p>
              Gevelrenovatie is een investering die zich snel terugbetaalt. Een gerenoveerde gevel verhoogt niet alleen de waarde van uw woning, maar zorgt ook voor betere isolatie en lagere energiekosten. In Hasselt en heel Limburg zien we steeds meer eigenaren kiezen voor professionele gevelrenovatie om hun woning klaar te maken voor de toekomst.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Euro className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lagere Energiekosten</h3>
                <p className="text-gray-600">Betere isolatie zorgt voor direct lagere verwarmingskosten</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hogere Woningwaarde</h3>
                <p className="text-gray-600">Een gerenoveerde gevel verhoogt de marktwaarde aanzienlijk</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Betere Bescherming</h3>
                <p className="text-gray-600">Optimale bescherming tegen weersinvloeden</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Onze Gevelrenovatie Diensten in Hasselt</h2>
          <p className="text-lg text-gray-700 mb-8">
            Bij MMT Projects bieden we een compleet pakket gevelrenovatie diensten:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Volledige gevelrenovatie met isolatie",
              "Voegwerk en steenreparatie", 
              "Nieuwe gevelbekleding (baksteen, natuursteen, gevelsteen)",
              "Gevelreiniging en impregnering",
              "Raam- en deurvernieuwing als onderdeel van gevelrenovatie",
              "Energiezuinige geveloplossingen"
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Gevelrenovatie in Hasselt en Omgeving</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              MMT Projects voert gevelrenovatie uit in Hasselt en alle omliggende gemeenten binnen een straal van 50 kilometer. Wij zijn actief in Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Beringen, Lummen, Houthalen-Helchteren, Tessenderlo, Ham, Leopoldsburg, Bree, Borgloon, Riemst, Lanaken, Maasmechelen, Dilsen-Stokkem, As, Opglabbeek, Meeuwen-Gruitrode, Peer, Hechtel-Eksel, Lommel, Hamont-Achel, Neerpelt, Overpelt, Bocholt, Kinrooi, Maaseik, Heusden-Zolder, Zonhoven, Herk-de-Stad, Nieuwerkerken, Kortessem, Wellen, Alken, Hasselt, Kuringen en alle tussenliggende dorpen en wijken.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Waarom MMT Projects voor Uw Gevelrenovatie?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Als gevestigd constructiebedrijf in de Daaleindestraat 100 te Hasselt kennen wij de lokale bouwvoorschriften en klimatologische omstandigheden in Limburg door en door. Onze ervaring met gevelrenovatie in de regio Hasselt garandeert een resultaat dat perfect aansluit bij uw wensen en de lokale architectuur.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Lokale Expertise in Gevelrenovatie</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Jarenlange ervaring in Hasselt en heel Limburg",
              "Kennis van lokale bouwvoorschriften",
              "Samenwerking met lokale leveranciers", 
              "Snelle service door korte afstanden"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Award className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Het Gevelrenovatie Proces</h2>
          <p className="text-lg text-gray-700 mb-8">
            Onze gevelrenovatie in Hasselt verloopt volgens een bewezen stappenplan:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Gratis Offerte Gevelrenovatie</h3>
                  <p className="text-gray-700">Wij komen langs voor een gratis inspectie van uw gevel in Hasselt of omgeving en maken een gedetailleerde offerte op maat.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Planning en Voorbereiding</h3>
                  <p className="text-gray-700">Na akkoord plannen we uw gevelrenovatie in overleg met u. Alle benodigde vergunningen regelen wij voor u.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professionele Uitvoering</h3>
                  <p className="text-gray-700">Onze ervaren vaklieden voeren de gevelrenovatie uit volgens de hoogste kwaliteitsnormen.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Oplevering en Nazorg</h3>
                  <p className="text-gray-700">Na afronding van uw gevelrenovatie zorgen we voor een nette oplevering en blijven beschikbaar voor eventuele nazorg.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Gevelrenovatie Prijzen Hasselt</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              De kosten voor gevelrenovatie in Hasselt variëren afhankelijk van verschillende factoren zoals de grootte van de gevel, gewenste materialen en isolatiewaarden. Voor een vrijblijvende prijsopgave voor uw gevelrenovatie kunt u contact opnemen met MMT Projects. Wij maken graag een op maat gemaakte offerte voor uw project in Hasselt of omgeving.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Veelgestelde Vragen over Gevelrenovatie</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Hoelang duurt een gevelrenovatie in Hasselt?
              </h3>
              <p className="text-gray-700">
                De duur van gevelrenovatie hangt af van de omvang van het project. Een standaard gevelrenovatie van een rijtjeswoning duurt gemiddeld 2-3 weken.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Heb ik een vergunning nodig voor gevelrenovatie?
              </h3>
              <p className="text-gray-700">
                Voor gevelrenovatie in Hasselt is meestal een stedenbouwkundige vergunning vereist. Wij helpen u graag bij het aanvragen hiervan.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Wat kost gevelrenovatie in Limburg?
              </h3>
              <p className="text-gray-700">
                De kosten variëren sterk per project. Neem contact op voor een vrijblijvende offerte aangepast aan uw specifieke situatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact MMT Projects voor Gevelrenovatie</h2>
          <p className="text-xl mb-8 opacity-90">
            Bent u klaar om uw gevel te laten renoveren door de experts? Neem vandaag nog contact op met MMT Projects voor een vrijblijvende offerte voor gevelrenovatie in Hasselt en omgeving.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold">Adres:</div>
                <div className="opacity-90">Daaleindestraat 100, 3720 Hasselt</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold">Email:</div>
                <div className="opacity-90">info@mmtprojects.be</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold">Telefoon:</div>
                <div className="opacity-90">0484117727</div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Werkgebied Gevelrenovatie</h3>
            <p className="opacity-90">
              MMT Projects voert gevelrenovatie uit in Hasselt en alle gemeenten binnen een straal van 50 kilometer, waaronder alle steden en dorpen in Limburg. Onze centrale ligging in Hasselt maakt het mogelijk om snel ter plaatse te zijn voor uw gevelrenovatie project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Bel 0484117727
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="mr-2 h-5 w-5" />
              Email ons
            </Button>
          </div>
          
          <p className="mt-8 text-lg font-medium">
            Vraag vandaag nog uw gratis offerte aan voor professionele gevelrenovatie in Hasselt!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gevelrenovatie;
