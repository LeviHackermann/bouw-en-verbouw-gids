
import { Helmet } from 'react-helmet-async';
import { Building2, Phone, Mail, MapPin, Hammer, Shield, Wrench, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sloopwerk = () => {
  return (
    <>
      <Helmet>
        <title>Sloopwerk Hasselt - Professionele Sloopwerkzaamheden in Limburg | MMT Projects</title>
        <meta name="description" content="Professioneel sloopwerk in Hasselt en Limburg. MMT Projects: ervaren, verzekerd, milieuvriendelijk. Gratis offerte! ☎ 0484117727" />
        <meta name="keywords" content="sloopwerk hasselt, sloop limburg, gebouwsloop, binnensloop, asbestsanering, puinruiming" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Hammer className="h-5 w-5 mr-2" />
              <span className="font-medium">Professioneel Sloopwerk</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Sloopwerk Hasselt - Professionele Sloopwerkzaamheden in Limburg
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              MMT Projects is uw betrouwbare partner voor professioneel sloopwerk in Hasselt en omgeving. 
              Met jarenlange ervaring in de Limburgse bouwsector verzorgen wij alle soorten sloopwerkzaamheden 
              voor particulieren, bedrijven en overheidsinstellingen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Bel 0484117727
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                <Mail className="mr-2 h-5 w-5" />
                Vraag offerte aan
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Onze Sloopwerkzaamheden in Hasselt en Limburg</h2>
              <p className="text-xl text-gray-600">Van kleine binnenverbouwingen tot grootschalige industriële sloop</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Volledige Gebouwsloop</h3>
                <p className="text-gray-600">
                  Complete sloop van woningen, kantoren en industriële gebouwen met moderne apparatuur.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Binnensloop en Renovatie</h3>
                <p className="text-gray-600">
                  Gedeeltelijke sloop en binnensloop voor verbouwingen en renovatieprojecten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Asbestsanering</h3>
                <p className="text-gray-600">
                  Veilige en gecertificeerde asbestsanering volgens alle Vlaamse richtlijnen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fundering- en Kelderuitbraak</h3>
                <p className="text-gray-600">
                  Professionele uitbraak van funderingen en kelders met gespecialiseerde machines.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Puinruiming</h3>
                <p className="text-gray-600">
                  Complete puinruiming en milieuvriendelijke afvalverwerking na sloopwerkzaamheden.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Bijgebouwen Sloop</h3>
                <p className="text-gray-600">
                  Sloop van schuttingen, terrassen, tuinhuizen en andere bijgebouwen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom Kiezen voor MMT Projects voor Sloopwerk?</h2>
              <p className="text-xl text-gray-600">Ervaring, veiligheid en betrouwbaarheid in heel Limburg</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Volledig Verzekerd</h3>
                <p className="text-gray-700">
                  Gecertificeerd voor alle sloopwerkzaamheden met uitgebreide verzekeringsdekking.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Modern Machinepark</h3>
                <p className="text-gray-700">
                  Eigen machinepark met moderne sloopapparatuur voor efficiënte uitvoering.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Lokale Expertise</h3>
                <p className="text-gray-700">
                  Jarenlange ervaring in Hasselt en Limburg met kennis van lokale voorschriften.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Het Sloopproces: Van Planning tot Oplevering</h2>
              <p className="text-xl text-gray-600">Gestructureerde aanpak voor elk sloopproject</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vrijblijvende Offerte</h3>
                    <p className="text-gray-600">Onze experts komen ter plaatse voor een grondige inspectie en maken een gedetailleerde prijsopgave op maat.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vergunningen en Voorbereiding</h3>
                    <p className="text-gray-600">Wij regelen alle benodigde vergunningen en zorgen voor een veilige werkzone conform de lokale voorschriften in Limburg.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Professionele Uitvoering</h3>
                    <p className="text-gray-600">Ons ervaren team voert de sloopwerkzaamheden uit met respect voor uw eigendommen en die van de buren.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Opruiming en Afvalverwerking</h3>
                    <p className="text-gray-600">Alle sloopafval wordt milieuvriendelijk verwerkt en gerecycled volgens de Vlaamse milieuwetgeving.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicegebied: Sloopwerk in Heel Limburg</h2>
              <p className="text-xl text-gray-600">Actief binnen 50km van Hasselt voor alle sloopwerkzaamheden</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Belangrijkste Steden</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Houthalen-Helchteren, 
                    Lommel, Pelt, Heusden-Zolder, Beringen, Ham, Tessenderlo, Alken, Wellen, Hoeselt, 
                    Riemst, Lanaken, Maasmechelen, Dilsen-Stokkem
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Uitgebreid Werkgebied</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kinrooi, Bree, Peer, Hechtel-Eksel, Leopoldsburg, Halen, Geetbets, Gingelom, 
                    Nieuwerkerken, Borgloon, Heers, Kortessem, Voeren, en alle tussenliggende gemeenten
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-20 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Veiligheid en Milieu bij Sloopwerk</h2>
            <p className="text-xl text-gray-700 mb-8">
              Veiligheid staat bij MMT Projects voorop bij elk sloopproject in Hasselt en Limburg. 
              Wij werken volgens de nieuwste veiligheidsnormen en beschikken over alle vereiste certificeringen 
              voor sloopwerkzaamheden. Daarnaast hechten wij groot belang aan milieuvriendelijk werken, 
              waarbij al het sloopafval wordt gescheiden en gerecycled waar mogelijk.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Vraag Vandaag Nog Uw Offerte Aan</h2>
            <p className="text-xl mb-8 text-gray-300">
              Heeft u sloopwerk nodig in Hasselt of omgeving? Neem contact op met MMT Projects 
              voor een vrijblijvende offerte. Onze lokale expertise in Limburg en persoonlijke 
              aanpak maken het verschil voor uw project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Bel Direct
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Mail className="mr-2 h-5 w-5" />
                Verstuur E-mail
              </Button>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Informatie</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-blue-400 mt-1" />
                  <div>
                    <p className="font-medium">Telefoon</p>
                    <p className="text-gray-300">0484117727</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-blue-400 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">info@mmtprojects.be</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-blue-400 mt-1" />
                  <div>
                    <p className="font-medium">Adres</p>
                    <p className="text-gray-300">Daaleindestraat 100<br />3720 Hasselt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sloopwerk;
