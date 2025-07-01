
import { Helmet } from 'react-helmet-async';
import { Building2, Phone, Mail, MapPin, CheckCircle, Users, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Keukenrenovatie = () => {
  return (
    <>
      <Helmet>
        <title>Keukenrenovatie Hasselt - Professionele Keukens op Maat door MMT Projects</title>
        <meta 
          name="description" 
          content="Keukenrenovatie Hasselt ✓ MMT Projects - Specialist in complete keukenrenovaties in Hasselt en Limburg ✓ Gratis offerte ✓ Lokaal team ✓ 0484117727" 
        />
        <meta property="og:title" content="Keukenrenovatie Hasselt - Professionele Keukens op Maat door MMT Projects" />
        <meta 
          property="og:description" 
          content="Keukenrenovatie Hasselt ✓ MMT Projects - Specialist in complete keukenrenovaties in Hasselt en Limburg ✓ Gratis offerte ✓ Lokaal team ✓ 0484117727" 
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Keukenrenovatie Hasselt - Professionele Keukens op Maat door MMT Projects
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Bent u op zoek naar een betrouwbare partner voor uw keukenrenovatie in Hasselt en omgeving? MMT Projects is uw specialist in complete keukenrenovaties door heel Limburg.
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

        {/* Main Content */}
        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Waarom Kiezen Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Waarom Kiezen voor MMT Projects voor Uw Keukenrenovatie?</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-6">
                    Als gevestigd bouwbedrijf in Hasselt begrijpen wij de specifieke behoeften van huiseigenaren in Limburg. Onze ervaren vakmannen leveren kwaliteitswerk tegen eerlijke prijzen, van complete keukenrenovaties tot kleinere aanpassingen.
                  </p>
                  <p className="text-lg text-gray-700">
                    Wij begeleiden u door het hele proces, van ontwerp tot oplevering.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136" 
                    alt="Moderne keukenrenovatie" 
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Diensten Section */}
            <section className="mb-16 bg-gray-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Onze Keukenrenovatie Diensten in Hasselt en Omgeving</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Complete keukenrenovaties met moderne apparatuur",
                    "Keukenkast renovatie en vervanging", 
                    "Tegelwerk en vloeren voor keukens",
                    "Sanitair en loodgieterswerk",
                    "Elektriciteitswerken voor keukenapparatuur",
                    "Schilderwerk en afwerking",
                    "Maatwerk keukenoplossingen"
                  ].map((service, index) => (
                    <Card key={index} className="bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Servicegebied Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Servicegebied: 50km Rond Hasselt</h2>
              <div className="bg-blue-50 p-8 rounded-lg">
                <p className="text-lg text-gray-700 mb-4">
                  MMT Projects verzorgt keukenrenovaties in Hasselt en alle omliggende gemeenten binnen een straal van 50 kilometer.
                </p>
                <p className="text-gray-700">
                  Wij zijn actief in: <strong>Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Beringen, Houthalen-Helchteren, Lommel, Bree, Borgloon, Hoeselt, Riemst, Lanaken, Maasmechelen, Dilsen-Stokkem, Heusden-Zolder, Ham, Tessenderlo, Halen</strong> en vele andere gemeenten in Limburg.
                </p>
              </div>
            </section>

            {/* Het Proces Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Het Keukenrenovatie Proces</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a" 
                    alt="Keukenrenovatie proces" 
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-6">
                    Elke keukenrenovatie begint met een gratis adviesgesprek aan huis. Onze experts bekijken uw huidige keuken, bespreken uw wensen en budget, en maken een gedetailleerd renovatieplan.
                  </p>
                  <p className="text-lg text-gray-700">
                    Van traditionele landelijke keukens tot ultramoderne designs - wij realiseren elke keukenrenovatie met oog voor detail en kwaliteit.
                  </p>
                </div>
              </div>
            </section>

            {/* Voordelen Section */}
            <section className="mb-16 bg-gray-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Waarom Huiseigenaren in Hasselt voor Ons Kiezen</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Meer dan 10 jaar ervaring</h3>
                    <p className="text-gray-600">in keukenrenovaties</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Lokaal team</h3>
                    <p className="text-gray-600">van vakbekwame ambachtslieden</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Garantie</h3>
                    <p className="text-gray-600">op al onze werkzaamheden</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Lokale Expertise Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Lokale Expertise in Limburg</h2>
              <p className="text-lg text-gray-700 mb-6">
                Als Hasselts bouwbedrijf kennen wij de lokale bouwvoorschriften en hebben jarenlange ervaring met woningen in de regio. Onze keukenrenovaties zijn afgestemd op de typische architectuur van Limburgse woningen, of het nu gaat om klassieke rijwoningen in Hasselt centrum of moderne nieuwbouw in de randgemeenten.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Transparante prijzen zonder verrassingen",
                  "Volledige begeleiding van A tot Z", 
                  "Garantie op al onze werkzaamheden",
                  "Snelle service binnen heel Limburg"
                ].map((benefit, index) => (
                  <Card key={index} className="bg-white border-blue-200">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Voorbeelden Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Voorbeelden van Onze Keukenrenovaties</h2>
              <p className="text-lg text-gray-700">
                Van compacte appartementskeukens in Hasselt centrum tot ruime familienkeukens in Genk en Sint-Truiden - MMT Projects heeft ervaring met alle soorten keukenrenovaties. Wij werken met kwaliteitsmerken en duurzame materialen voor een resultaat waar u jaren plezier van heeft.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Offerte Aanvragen voor Uw Keukenrenovatie</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Wilt u weten wat uw keukenrenovatie gaat kosten? Neem vandaag nog contact op voor een vrijblijvende offerte. Onze experts komen graag langs in Hasselt en omgeving voor een persoonlijk adviesgesprek.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel 0484117727
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-5 w-5" />
                  info@mmtprojects.be
                </Button>
              </div>
            </section>
          </div>
        </main>

        {/* Contact Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact MMT Projects - Uw Keukenrenovatie Specialist</h2>
              <p className="text-xl text-gray-600">Voor al uw vragen over keukenrenovatie in Hasselt en omgeving</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Adres</h3>
                <p className="text-gray-600">Daaleindestraat 100<br />3720 Hasselt</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Telefoon</h3>
                <p className="text-gray-600">0484117727</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@mmtprojects.be</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700">
                Bel ons vandaag nog voor een gratis adviesgesprek en ontdek hoe MMT Projects uw droomkeuken werkelijkheid kan maken. Wij staan klaar om uw keukenrenovatie in Hasselt en heel Limburg tot een succes te maken!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Keukenrenovatie;
