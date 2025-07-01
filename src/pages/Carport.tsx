
import { Helmet } from 'react-helmet-async';
import { Building2, Car, Shield, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Carport = () => {
  return (
    <>
      <Helmet>
        <title>Carport Hasselt | MMT Projects - Professionele Carportbouw Limburg</title>
        <meta name="description" content="Carport Hasselt ✓ MMT Projects - Professionele carportbouw in Limburg ✓ Enkele & dubbele carports ✓ 50km serviceregio ✓ Gratis offerte ☎ 0484117727" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Car className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-4xl font-bold">Carport Hasselt - Professionele Carportbouw door MMT Projects</h1>
                <p className="text-xl mt-2 text-blue-100">Uw specialist voor hoogwaardige carports in Limburg</p>
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
            <p className="text-lg text-gray-700 leading-relaxed">
              Bij MMT Projects bent u aan het juiste adres voor de bouw van hoogwaardige carports in Hasselt en omgeving. Als ervaren constructiebedrijf uit Limburg leveren wij al jaren kwalitatieve carports die perfect aansluiten bij uw wensen en budget. Of u nu op zoek bent naar een enkele carport, dubbele carport of carport met bergruimte - wij realiseren uw project van A tot Z.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Waarom kiezen voor een carport van MMT Projects?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Bescherming</h3>
                  <p className="text-gray-600">
                    Ideale bescherming voor uw auto tegen weersinvloeden zoals hagel, UV-straling en bladval.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Vakmanschap</h3>
                  <p className="text-gray-600">
                    Vakkundige installatie door ervaren monteurs die de lokale bouwvoorschriften perfect kennen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Kwaliteit</h3>
                  <p className="text-gray-600">
                    Uitsluitend duurzame materialen in verschillende uitvoeringen, van eenvoudig tot luxe.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Onze carport diensten in Hasselt en omgeving:</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Enkele carports voor één voertuig</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Dubbele carports voor meerdere auto's</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Carports met bergruimte of werkplaats</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Carports met zonnepanelen</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Maatwerk carports naar uw specificaties</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Carport renovatie en uitbreiding</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Servicegebied: Hasselt en 50km rondom</h2>
            <p className="text-lg text-gray-700 mb-6">
              MMT Projects verzorgt carportbouw in heel Limburg. Naast Hasselt bedienen wij ook:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-gray-600">
              <div>Genk, Sint-Truiden, Tongeren</div>
              <div>Bilzen, Diepenbeek, Beringen</div>
              <div>Heusden-Zolder, Houthalen-Helchteren</div>
              <div>Lommel, Bree, Maaseik</div>
              <div>Dilsen-Stokkem, Riemst, Lanaken</div>
              <div>Maasmechelen, Kinrooi, Hechtel-Eksel</div>
              <div>Peer, Hamont-Achel, Neerpelt</div>
              <div>Overpelt, Tessenderlo, Ham</div>
              <div>Leopoldsburg en alle andere gemeenten binnen 50km</div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Het carportbouw proces</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Gratis offerte op maat</h3>
                <p className="text-sm text-gray-600">Wij komen langs voor een vrijblijvende inspectie en advies</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Ontwerp en vergunningen</h3>
                <p className="text-sm text-gray-600">Waar nodig regelen wij de benodigde bouwvergunning</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Vakkundige montage</h3>
                <p className="text-sm text-gray-600">Onze ervaren monteurs plaatsen uw carport snel en netjes</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-semibold mb-2">Oplevering</h3>
                <p className="text-sm text-gray-600">Wij leveren pas op wanneer u 100% tevreden bent</p>
              </div>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Materialen en uitvoeringen</h2>
            <p className="text-lg text-gray-700 mb-6">Wij bieden carports in verschillende materialen aan:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Houten carports</h3>
                  <p className="text-gray-600">Lariks, douglas, thermohout</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Stalen carports</h3>
                  <p className="text-gray-600">Met duurzame coating</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Aluminium carports</h3>
                  <p className="text-gray-600">Onderhoudsvrij</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Dakbedekking</h3>
                  <p className="text-gray-600">Polycarbonaat of eternit</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose MMT */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Waarom MMT Projects voor uw carport in Hasselt?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Meer dan 15 jaar ervaring in de bouw</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Lokaal gevestigd in Hasselt, korte lijnen</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Vakkundige monteurs met oog voor detail</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Gebruikmaking van hoogwaardige materialen</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Scherpe prijzen zonder concessies aan kwaliteit</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Volledige garantie op materiaal en montage</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Flexibele planning aangepast aan uw agenda</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Veelgestelde vragen over carports</h2>
            <div className="space-y-6">
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Heb ik een vergunning nodig voor mijn carport in Hasselt?</h3>
                  <p className="text-gray-600">
                    Voor de meeste carports is geen bouwvergunning vereist, maar dit hangt af van de afmetingen en locatie. Wij adviseren u graag over de geldende regelgeving in uw gemeente.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Hoe lang duurt de bouw van een carport?</h3>
                  <p className="text-gray-600">
                    Een standaard enkele carport kunnen wij meestal binnen één dag plaatsen. Voor grotere of complexere carports plannen wij doorgaans 2-3 werkdagen in.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Welk onderhoud heeft mijn carport nodig?</h3>
                  <p className="text-gray-600">
                    Dit verschilt per materiaal. Houten carports adviseren wij om de 3-5 jaar te behandelen, aluminium carports zijn nagenoeg onderhoudsvrij.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Samen bouwen aan uw carport</h2>
            <p className="text-xl mb-8 text-blue-100">
              Bent u geïnteresseerd in een carport in Hasselt of omgeving? Neem dan vrijblijvend contact met ons op voor een persoonlijk advies en een offerte op maat.
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact MMT Projects voor uw carport</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
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
            <div className="text-center mt-12">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                MMT Projects - Uw betrouwbare partner voor carportbouw in Hasselt en heel Limburg.
              </p>
              <p className="text-gray-600">
                Van ontwerp tot realisatie, wij zorgen voor een carport waar u jaren plezier van heeft. Vraag nu uw gratis offerte aan en ontdek wat wij voor u kunnen betekenen.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Carport;
