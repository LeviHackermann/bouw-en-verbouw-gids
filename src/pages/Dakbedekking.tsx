
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Dakbedekking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Dakbedekking Hasselt - Professionele Dakwerken door MMT Projects</title>
        <meta name="description" content="✓ Professionele dakbedekking in Hasselt en omgeving door MMT Projects. Ervaren dakdekkers, kwaliteitsgarantie. Gratis offerte! ☎ 0484117727" />
        <meta name="keywords" content="dakbedekking Hasselt, dakwerken Limburg, dakdekkers Hasselt, dakrenovatie, dakpannen, leien, MMT Projects" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dakbedekking Hasselt - Professionele Dakwerken door MMT Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uw Specialist voor Dakbedekking in Hasselt en Omgeving
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Bij MMT Projects bent u aan het juiste adres voor alle soorten dakbedekking in Hasselt, Limburg en de wijde omgeving. Met jarenlange ervaring in de bouwsector leveren wij kwalitatieve dakwerken voor particulieren en bedrijven in een straal van 50 kilometer rond Hasselt.
          </p>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Onze Dakbedekkingsdiensten in Hasselt
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Complete Dakbedekking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Wij verzorgen de volledige dakbedekking van uw woning of bedrijfspand met hoogwaardige materialen. Of u nu kiest voor dakpannen, leien, of moderne dakbedekkingsmaterialen, onze ervaren dakdekkers zorgen voor een perfect afgewerkt dak dat jarenlang meegaat.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dakrenovatie en Herstel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Is uw dak toe aan vernieuwing? Onze specialisten in Hasselt adviseren u graag over de beste oplossing voor uw dakrenovatie. Van kleine herstellingen tot complete dakreconstructies, wij pakken elk project professioneel aan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Verschillende Dakbedekkingsmaterialen</CardTitle>
              </CardHeader>
              <CardContent>
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

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Waarom Kiezen voor MMT Projects?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lokale Expertise in Hasselt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Als gevestigd bedrijf in Hasselt kennen wij de lokale bouwvoorschriften en klimatologische omstandigheden perfect. Deze kennis zorgt ervoor dat uw dakbedekking optimaal aansluit bij de lokale omstandigheden in Limburg.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Jarenlange Ervaring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Met jaren ervaring in dakbedekking hebben wij al talloze projecten succesvol afgerond in Hasselt en omliggende gemeenten. Onze referenties spreken voor zich.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kwaliteitsgarantie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Wij werken uitsluitend met A-merken en bieden uitgebreide garantie op al onze dakbedekkingswerken. Uw investering is bij ons in veilige handen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Area */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Ons Werkgebied: Hasselt en 50km Omgeving
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            MMT Projects voert dakbedekkingswerken uit in Hasselt en de volledige regio Limburg. Onze ervaren ploeg is actief in:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Grote steden in de omgeving:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Beringen, Houthalen-Helchteren, Lommel, Maaseik, Peer, Bree, Borgloon, Riemst, Lanaken
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kleinere gemeenten:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ham, Tessenderlo, Halen, Lummen, Zonhoven, Heusden-Zolder, As, Opglabbeek, Dilsen-Stokkem, Maasmechelen, Kinrooi, Hamont-Achel, Neerpelt, Overpelt, Hechtel-Eksel, Leopoldsburg, Herk-de-Stad, Nieuwerkerken, Gingelom, Wellen, Alken, Kortessem
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Het Dakbedekkingsproces
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Gratis Offerte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Neem contact op voor een vrijblijvende offerte. Onze specialisten komen ter plaatse in Hasselt of omgeving voor een grondige inspectie van uw dak.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Deskundig Advies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Op basis van de inspectie adviseren wij u over de beste dakbedekkingsoplossing voor uw specifieke situatie en budget.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Professionele Uitvoering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Onze ervaren dakdekkers voeren de werken uit volgens de hoogste kwaliteitsnormen en binnen de afgesproken termijn.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Oplevering en Garantie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Na oplevering krijgt u uitgebreide garantie op materiaal en uitvoering van uw nieuwe dakbedekking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sustainability */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Duurzame Dakbedekking in Limburg</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Bij MMT Projects hechten wij groot belang aan duurzaamheid. Wij adviseren u graag over energiezuinige dakmaterialen die bijdragen aan de isolatie van uw woning. Denk aan dakbedekking gecombineerd met hoogwaardige dakisolatie voor optimaal wooncomfort in Hasselt en omgeving.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Neem Contact Op voor Uw Dakbedekking
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Bent u op zoek naar betrouwbare dakbedekking in Hasselt of omgeving? MMT Projects staat voor u klaar. Onze ervaren specialisten adviseren u graag over de mogelijkheden voor uw project.
          </p>
          
          <div className="bg-blue-600 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Contactgegevens MMT Projects:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-2" />
                <p className="font-semibold">Adres:</p>
                <p>Daaleindestraat 100, 3720 Hasselt</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-2" />
                <p className="font-semibold">E-mail:</p>
                <p>info@mmtprojects.be</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-2" />
                <p className="font-semibold">Telefoon:</p>
                <p>0484117727</p>
              </div>
            </div>
            <div className="mt-6">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.location.href = 'tel:0484117727'}
              >
                Bel Nu voor Gratis Offerte
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-gray-600">
            MMT Projects - Uw betrouwbare partner voor dakbedekking in Hasselt, Limburg en omgeving. Kwaliteit en service sinds jaar en dag!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dakbedekking;
