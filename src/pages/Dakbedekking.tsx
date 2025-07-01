import { Helmet } from 'react-helmet-async';
import { Building2, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Users, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Dakbedekking = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dakbedekking Hasselt - Professionele Dakwerken door MMT Projects</title>
        <meta name="description" content="✓ Professionele dakbedekking in Hasselt en omgeving door MMT Projects. Ervaren dakdekkers, kwaliteitsgarantie. Gratis offerte! ☎ 0484117727" />
        <meta name="keywords" content="dakbedekking Hasselt, dakwerken Limburg, dakdekkers Hasselt, dakrenovatie, dakpannen, leien, MMT Projects" />
      </Helmet>

      <Navigation />

      {/* Header */}
      <header className="bg-blue-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Dakbedekking Hasselt - Professionele Dakwerken door MMT Projects
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Bij MMT Projects bent u aan het juiste adres voor alle soorten dakbedekking in Hasselt, Limburg en de wijde omgeving. Met jarenlange ervaring in de bouwsector leveren wij kwalitatieve dakwerken voor particulieren en bedrijven in een straal van 50 kilometer rond Hasselt.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 mr-4">
                <Phone className="mr-2 h-5 w-5" />
                Bel Direct: 0484117727
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Dakbedekkingsdiensten in Hasselt</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Complete Dakbedekking</h3>
                <p className="text-gray-600">
                  Wij verzorgen de volledige dakbedekking van uw woning of bedrijfspand met hoogwaardige materialen. Of u nu kiest voor dakpannen, leien, of moderne dakbedekkingsmaterialen, onze ervaren dakdekkers zorgen voor een perfect afgewerkt dak dat jarenlang meegaat.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Dakrenovatie en Herstel</h3>
                <p className="text-gray-600">
                  Is uw dak toe aan vernieuwing? Onze specialisten in Hasselt adviseren u graag over de beste oplossing voor uw dakrenovatie. Van kleine herstellingen tot complete dakreconstructies, wij pakken elk project professioneel aan.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Verschillende Dakbedekkingsmaterialen</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Klassieke dakpannen</li>
                  <li>Natuurleien en kunstleien</li>
                  <li>Bitumineuze dakbedekking</li>
                  <li>EPDM rubber dakbedekking</li>
                  <li>Zinken dakbedekking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Waarom Kiezen voor MMT Projects?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Lokale Expertise in Hasselt</h3>
              <p className="text-gray-700">
                Als gevestigd bedrijf in Hasselt kennen wij de lokale bouwvoorschriften en klimatologische omstandigheden perfect. Deze kennis zorgt ervoor dat uw dakbedekking optimaal aansluit bij de lokale omstandigheden in Limburg.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Jarenlange Ervaring</h3>
              <p className="text-gray-700">
                Met jaren ervaring in dakbedekking hebben wij al talloze projecten succesvol afgerond in Hasselt en omliggende gemeenten. Onze referenties spreken voor zich.
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Kwaliteitsgarantie</h3>
              <p className="text-gray-700">
                Wij werken uitsluitend met A-merken en bieden uitgebreide garantie op al onze dakbedekkingswerken. Uw investering is bij ons in veilige handen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ons Werkgebied: Hasselt en 50km Omgeving</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            MMT Projects voert dakbedekkingswerken uit in Hasselt en de volledige regio Limburg. Onze ervaren ploeg is actief in:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Grote steden in de omgeving:</h3>
              <p className="text-gray-700 leading-relaxed">
                Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Beringen, Houthalen-Helchteren, Lommel, Maaseik, Peer, Bree, Borgloon, Riemst, Lanaken
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Kleinere gemeenten:</h3>
              <p className="text-gray-700 leading-relaxed">
                Ham, Tessenderlo, Halen, Lummen, Zonhoven, Heusden-Zolder, As, Opglabbeek, Dilsen-Stokkem, Maasmechelen, Kinrooi, Hamont-Achel, Neerpelt, Overpelt, Hechtel-Eksel, Leopoldsburg, Herk-de-Stad, Nieuwerkerken, Gingelom, Wellen, Alken, Kortessem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Het Dakbedekkingsproces</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4 font-bold">1</div>
                <h3 className="text-xl font-semibold mb-4">Gratis Offerte</h3>
                <p className="text-gray-700">
                  Neem contact op voor een vrijblijvende offerte. Onze specialisten komen ter plaatse in Hasselt of omgeving voor een grondige inspectie van uw dak.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4 font-bold">2</div>
                <h3 className="text-xl font-semibold mb-4">Deskundig Advies</h3>
                <p className="text-gray-700">
                  Op basis van de inspectie adviseren wij u over de beste dakbedekkingsoplossing voor uw specifieke situatie en budget.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4 font-bold">3</div>
                <h3 className="text-xl font-semibold mb-4">Professionele Uitvoering</h3>
                <p className="text-gray-700">
                  Onze ervaren dakdekkers voeren de werken uit volgens de hoogste kwaliteitsnormen en binnen de afgesproken termijn.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4 font-bold">4</div>
                <h3 className="text-xl font-semibold mb-4">Oplevering en Garantie</h3>
                <p className="text-gray-700">
                  Na oplevering krijgt u uitgebreide garantie op materiaal en uitvoering van uw nieuwe dakbedekking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-center mb-6">Duurzame Dakbedekking in Limburg</h2>
              <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
                Bij MMT Projects hechten wij groot belang aan duurzaamheid. Wij adviseren u graag over energiezuinige dakmaterialen die bijdragen aan de isolatie van uw woning. Denk aan dakbedekking gecombineerd met hoogwaardige dakisolatie voor optimaal wooncomfort in Hasselt en omgeving.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Neem Contact Op voor Uw Dakbedekking</h2>
          <p className="text-xl mb-8">
            Bent u op zoek naar betrouwbare dakbedekking in Hasselt of omgeving? MMT Projects staat voor u klaar. Onze ervaren specialisten adviseren u graag over de mogelijkheden voor uw project.
          </p>
          
          <div className="bg-white/10 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Contactgegevens MMT Projects:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-lg">
              <div className="flex items-center justify-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>Daaleindestraat 100, 3720 Hasselt</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>info@mmtprojects.be</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>0484117727</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Bel Nu voor Gratis Offerte
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="mr-2 h-5 w-5" />
              Email voor informatie
            </Button>
          </div>
          
          <p className="mt-6 text-lg font-semibold">
            MMT Projects - Uw betrouwbare partner voor dakbedekking in Hasselt, Limburg en omgeving. Kwaliteit en service sinds jaar en dag!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dakbedekking;
