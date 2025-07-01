import { Helmet } from 'react-helmet-async';
import { Building2, Phone, Mail, MapPin, Hammer, Home, Wrench, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Timmerwerk = () => {
  return (
    <>
      <Helmet>
        <title>Timmerwerk Hasselt - Professionele Timmerdiensten in Limburg | MMT Projects</title>
        <meta name="description" content="Timmerwerk Hasselt ✓ MMT Projects biedt professionele timmerdiensten in Limburg ✓ Dakconstructies, interieur, verbouwingen ✓ Ervaren vakmensen ✓ Bel 0484117727" />
        <meta name="keywords" content="timmerwerk hasselt, timmerman limburg, dakconstructie, interieur timmerwerk, verbouwing, renovatie timmerwerk" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Hammer className="h-5 w-5 mr-2" />
              <span className="font-medium">Professioneel Timmerwerk</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Timmerwerk Hasselt - Professionele Timmerdiensten in Limburg
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              MMT Projects is uw betrouwbare partner voor professioneel timmerwerk in Hasselt en omgeving. 
              Met jarenlange ervaring in de bouwsector leveren wij hoogwaardige timmerdiensten aan particulieren 
              en bedrijven in heel Limburg.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Onze Timmerdiensten in Hasselt</h2>
              <p className="text-xl text-gray-600">Als ervaren timmerbedrijf in Hasselt bieden wij een breed scala aan timmerwerk diensten</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Dakwerken en Dakconstructies</h3>
                <p className="text-gray-600">
                  Complete dakconstructies, van traditionele kap- en spantconstructies tot moderne dakramen en dakkapellen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Interieur Timmerwerk</h3>
                <p className="text-gray-600">
                  Van maatwerk keukens tot inbouwkasten en schuifdeuren - wij verzorgen al het interieur timmerwerk.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Verbouwingen en Renovaties</h3>
                <p className="text-gray-600">
                  Complete timmerwerk bij verbouwingsprojecten, van nieuwe wanden tot het aanpassen van constructies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Buitentimmerwerk</h3>
                <p className="text-gray-600">
                  Tuinhuizen, overkappingen, terrassen en andere buitenconstructies met weersbestendige materialen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom Kiezen voor MMT Projects Timmerwerk?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Lokale Expertise in Limburg</h3>
                <p className="text-gray-700">
                  Als Hasselt-gebaseerd timmerbedrijf kennen wij de lokale bouwvoorschriften en hebben jarenlange ervaring met projecten in de regio.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Vakmanschap en Kwaliteit</h3>
                <p className="text-gray-700">
                  Elk timmerwerk project wordt uitgevoerd door ervaren vakmensen die trots zijn op hun werk met A-merk materialen.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Persoonlijke Benadering</h3>
                <p className="text-gray-700">
                  Persoonlijke service staat centraal. Wij denken mee, adviseren eerlijk en zorgen voor perfecte uitvoering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Werkgebied: Hasselt en 50km Omgeving</h2>
              <p className="text-xl text-gray-600">Ons timmerbedrijf is actief in heel Limburg en omliggende regio's</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Primaire Werkgebied</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hasselt, Genk, Sint-Truiden, Tongeren, Bilzen, Diepenbeek, Lummen, Halen, Alken, 
                  Wellen, Borgloon, Kortessem, Nieuwerkerken, Heusden-Zolder
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Uitgebreid Werkgebied</h3>
                <p className="text-gray-700 leading-relaxed">
                  Beringen, Ham, Tessenderlo, Leopoldsburg, Peer, Maaseik, Dilsen-Stokkem, 
                  Maasmechelen, Lanaken, Riemst, Hoeselt, Voeren, Gingelom, Herk-de-Stad, Houthalen-Helchteren
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-20 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Duurzaam Timmerwerk in Limburg</h2>
            <p className="text-xl text-gray-700 mb-8">
              Duurzaamheid staat hoog op onze agenda. Wij adviseren over energiezuinige oplossingen, 
              werken met gecertificeerd hout en zorgen ervoor dat alle timmerwerk voldoet aan de nieuwste 
              isolatie- en energienormen. Dit is niet alleen goed voor het milieu, maar bespaart u ook 
              flink op uw energierekening.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Offerte Aanvragen voor Timmerwerk</h2>
            <p className="text-xl mb-8 text-gray-300">
              Bent u op zoek naar een betrouwbaar timmerbedrijf in Hasselt of omgeving? 
              Neem dan vrijblijvend contact met ons op voor een persoonlijk advies en een scherpe offerte.
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

      <Footer />
    </>
  );
};

export default Timmerwerk;
