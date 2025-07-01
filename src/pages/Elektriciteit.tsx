import { Helmet } from 'react-helmet-async';
import { Zap, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Elektriciteit = () => {
  return (
    <>
      <Helmet>
        <title>Elektriciteit Hasselt | MMT Projects - Professionele Elektrische Installaties Limburg</title>
        <meta name="description" content="Elektriciteit Hasselt ✓ MMT Projects - Professionele elektrische installaties in Limburg ✓ Gekwalificeerde elektriciens ✓ 50km serviceregio ✓ Gratis offerte ☎ 0484117727" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-600 text-white py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Zap className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-4xl font-bold">Elektriciteit Hasselt - Professionele Elektrische Installaties in Limburg</h1>
                <p className="text-xl mt-2 text-blue-100">Betrouwbare elektriciteitsdiensten door gekwalificeerde specialisten</p>
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
            <h2 className="text-3xl font-bold mb-6">Betrouwbare Elektriciteitswerken in Hasselt en Omstreken</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MMT Projects is uw specialist voor alle elektrische installaties in Hasselt en een straal van 50 kilometer eromheen. Met jarenlange ervaring in de elektriciteit bieden wij kwalitatieve diensten aan particulieren en bedrijven in heel Limburg.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Onze Elektriciteitsservices in Hasselt</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Elektrische Installaties</h3>
                  <p className="text-gray-600">
                    Complete elektrische installaties voor nieuwbouw en renovaties in Hasselt en omgeving.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Elektriciteitskeuring</h3>
                  <p className="text-gray-600">
                    Grondige keuringen en onderhoud van elektrische installaties door gecertificeerde elektriciens.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Industriële Elektriciteit</h3>
                  <p className="text-gray-600">
                    Industriële elektriciteitsoplossingen voor bedrijven in Hasselt en hele regio Limburg.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Domotica</h3>
                  <p className="text-gray-600">
                    Moderne domotica-installaties voor slimme woningen en kantoren in Hasselt.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Waarom Kiezen voor MMT Projects Elektriciteit?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-50 border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Lokale Expertise in Limburg</h3>
                  <p className="text-gray-600">
                    Als gevestigde elektriciteitsspecialist in Hasselt kennen wij de lokale regelgeving en hebben jarenlange ervaring in de regio.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Gekwalificeerde Elektriciens</h3>
                  <p className="text-gray-600">
                    Ons team bestaat uit volledig gekwalificeerde elektriciens die voldoen aan alle Belgische normen en certificeringen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Snelle Service</h3>
                  <p className="text-gray-600">
                    Dankzij onze ligging in Hasselt kunnen wij snel ter plaatse zijn voor spoedgevallen in heel Limburg.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Ons Werkgebied - Elektriciteit in Heel Limburg</h2>
            <p className="text-lg text-gray-700 mb-6">
              MMT Projects verzorgt elektriciteitswerken in een straal van 50 kilometer rond Hasselt:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Grote steden:</h3>
                <p className="text-gray-600 mb-4">
                  Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Lommel, Peer, Beringen, Herk-de-Stad
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Kleinere gemeenten:</h3>
                <p className="text-gray-600">
                  Zonhoven, Houthalen-Helchteren, As, Opglabbeek, Nieuwerkerken, Gingelom, Heers, Riemst, Lanaken, Maasmechelen, Dilsen-Stokkem, Maaseik, Kinrooi, Bree, Meeuwen-Gruitrode, Hamont-Achel, Neerpelt, Overpelt, Tessenderlo, Ham, Leopoldsburg
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Elektriciteitsprojecten in de Regio Hasselt</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Met tientallen jaren ervaring in elektriciteit hebben wij talloze projecten gerealiseerd voor klanten in Hasselt en omstreken. Van eenvoudige huishoudelijke installaties tot complexe industriële elektriciteitsprojecten - MMT Projects levert maatwerk voor elke situatie.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Onze elektriciens zijn vertrouwd met de specifieke eisen van woningen en bedrijven in Limburg. Wij zorgen ervoor dat uw elektrische installatie voldoet aan alle veiligheidsnormen en optimaal functioneert.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Veelgestelde Vragen over Elektriciteit</h2>
            <div className="space-y-6">
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Werkt MMT Projects in heel Limburg?</h3>
                  <p className="text-gray-600">
                    Ja, wij dekken een gebied van 50 kilometer rond Hasselt af, wat praktisch heel Limburg omvat inclusief Genk, Sint-Truiden, Tongeren en vele andere gemeenten.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Zijn jullie elektriciens gecertificeerd?</h3>
                  <p className="text-gray-600">
                    Alle elektriciens van MMT Projects beschikken over de vereiste certificeringen en jarenlange praktijkervaring in elektriciteitsinstallaties.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Doen jullie ook spoedinterventies?</h3>
                  <p className="text-gray-600">
                    Voor elektriciteitsnodsituaties in Hasselt en omstreken bieden wij snelle hulp. Neem contact op via 0484117727 voor dringende elektriciteitsproblemen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Neem Contact Op voor Elektriciteit in Hasselt</h2>
            <p className="text-xl mb-8 text-blue-100">
              Heeft u een elektriciteitsproject in Hasselt of omgeving? Neem vrijblijvend contact op met MMT Projects voor een persoonlijk advies en offerte op maat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact MMT Projects voor uw elektriciteitsdiensten</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Adres</h3>
                <p className="text-gray-600">Daaleindestraat 100<br />3720 Hasselt</p>
              </div>
              <div>
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Telefoon</h3>
                <p className="text-gray-600">0484117727</p>
              </div>
              <div>
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@mmtprojects.be</p>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Wij staan klaar om uw elektriciteitsproject in Hasselt, Genk, Sint-Truiden, Tongeren of elders in Limburg tot een succesvol einde te brengen.
              </p>
              <p className="text-gray-600">
                Bel vandaag nog voor een afspraak met onze elektriciteitsspecialisten.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Elektriciteit;
