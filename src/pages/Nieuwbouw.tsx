
import { 
  Building2, Home, CheckCircle, MapPin, Phone, Mail, 
  Award, Shield, Users, ArrowRight, Star, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Nieuwbouw = () => {
  const serviceAreas = [
    "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Bilzen",
    "Diepenbeek", "Lummen", "Halen", "Alken", "Wellen", "Hoeselt",
    "Riemst", "Maasmechelen", "Lanaken", "Dilsen-Stokkem", "Maaseik",
    "Kinrooi", "Bree", "Peer", "Hechtel-Eksel", "Leopoldsburg",
    "Beringen", "Ham", "Tessenderlo", "Zonhoven", "Houthalen-Helchteren",
    "As", "Opglabbeek", "Oudsbergen", "Hamont-Achel"
  ];

  const specializations = [
    "Complete nieuwbouwwoningen in Hasselt en omgeving",
    "Energiezuinige nieuwbouw volgens de laatste normen",
    "Moderne nieuwbouwarchitectuur aangepast aan uw wensen",
    "Nieuwbouw van villa's, appartementen en gezinswoningen",
    "Duurzame nieuwbouw met focus op milieuvriendelijke materialen"
  ];

  const phases = [
    {
      phase: "Fase 1: Nieuwbouw Planning",
      description: "Tijdens de eerste fase bespreken wij uw nieuwbouwwensen en maken een gedetailleerd plan. Onze ervaring met nieuwbouw in Hasselt helpt ons om realistische planningen en budgetten op te stellen."
    },
    {
      phase: "Fase 2: Vergunningen en Nieuwbouw Voorbereiding", 
      description: "Wij regelen alle benodigde vergunningen voor uw nieuwbouwproject. Dankzij onze lokale kennis van Hasselt en Limburg verloopt dit proces soepel."
    },
    {
      phase: "Fase 3: Nieuwbouw Uitvoering",
      description: "Onze ervaren teams starten met de daadwerkelijke nieuwbouw. Wij zorgen voor kwaliteit, timing en transparante communicatie tijdens het hele nieuwbouwproces."
    },
    {
      phase: "Fase 4: Oplevering Nieuwbouw",
      description: "Uw nieuwbouwwoning wordt sleutelklaar opgeleverd, compleet volgens afspraak en met alle garanties."
    }
  ];

  const recentProjects = [
    "Energieneutrale nieuwbouwwoning Hasselt-Kermt",
    "Moderne nieuwbouw villa Genk-Centrum", 
    "Nieuwbouw appartementencomplex Sint-Truiden",
    "Duurzame nieuwbouw gezinswoning Bilzen"
  ];

  return (
    <>
      <Helmet>
        <title>Nieuwbouw Hasselt | MMT Projects - Professionele Nieuwbouw Limburg</title>
        <meta name="description" content="Nieuwbouw specialist in Hasselt en omgeving. MMT Projects realiseert uw droomhuis met 15+ jaar ervaring. Gratis offerte voor nieuwbouw in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta name="keywords" content="nieuwbouw hasselt, nieuwbouw limburg, nieuwbouw genk, nieuwbouw sint-truiden, nieuwbouw tongeren, nieuwbouw bilzen" />
        <link rel="canonical" href="https://www.mmtprojects.be/nieuwbouw-hasselt-limburg" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Nieuwbouw Hasselt | MMT Projects - Professionele Nieuwbouw Limburg" />
        <meta property="og:description" content="Nieuwbouw specialist in Hasselt en omgeving. MMT Projects realiseert uw droomhuis met 15+ jaar ervaring. Gratis offerte voor nieuwbouw in Hasselt, Genk, Sint-Truiden en heel Limburg." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/nieuwbouw-hasselt-limburg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nieuwbouw Hasselt | MMT Projects - Professionele Nieuwbouw Limburg" />
        <meta name="twitter:description" content="Nieuwbouw specialist in Hasselt en omgeving. MMT Projects realiseert uw droomhuis met 15+ jaar ervaring." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833" 
              alt="Nieuwbouw Hasselt" 
              className="object-cover w-full h-full opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Home className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Nieuwbouw Specialist Hasselt</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  <span className="text-blue-600">Nieuwbouw Hasselt</span> - Professionele Nieuwbouwprojecten in Limburg
                </h1>
                
                <p className="mt-6 text-xl text-gray-700 max-w-lg">
                  Bent u op zoek naar een betrouwbare partner voor nieuwbouw in Hasselt? MMT Projects is dé specialist in nieuwbouwprojecten in Hasselt en heel Limburg. Met meer dan 15 jaar ervaring in de bouwsector realiseren wij uw droomwoning van A tot Z.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    Gratis offerte aanvragen
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300">
                    Onze referenties
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
                    alt="Nieuwbouw project Hasselt" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">15+ Jaar</h2>
                    <p className="text-white/90">Ervaring in nieuwbouw</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose MMT Projects */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom Kiezen voor MMT Projects Nieuwbouw?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Als ervaren nieuwbouwspecialist in Hasselt begrijpen wij dat nieuwbouw meer is dan alleen bouwen. Het gaat om het realiseren van uw toekomstvisie. Onze lokale expertise in Hasselt en omgeving zorgt ervoor dat wij precies weten wat er komt kijken bij nieuwbouwprojecten in Limburg.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations.map((specialization, index) => (
                <Card key={index} className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{specialization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Nieuwbouw Service Gebied - 50km Rondom Hasselt</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects verzorgt nieuwbouwprojecten in Hasselt en een uitgebreide regio van 50 kilometer rondom onze thuisbasis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoofdsteden en grote gemeenten:</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Nieuwbouw Hasselt</span>
                    <span className="text-gray-600 ml-2">(centrum en alle deelgemeenten)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Nieuwbouw Genk</span>
                    <span className="text-gray-600 ml-2">- moderne nieuwbouwwijken</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Nieuwbouw Sint-Truiden</span>
                    <span className="text-gray-600 ml-2">- traditionele en eigentijdse nieuwbouw</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Nieuwbouw Tongeren</span>
                    <span className="text-gray-600 ml-2">- nieuwbouw in historische setting</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Nieuwbouw Bilzen</span>
                    <span className="text-gray-600 ml-2">- landelijke nieuwbouwprojecten</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Omliggende gemeenten voor nieuwbouw:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {serviceAreas.slice(5).map((area, index) => (
                    <div key={index} className="text-sm text-gray-600 py-1">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Nieuwbouw Process - Van Idee tot Sleutelklare Woning</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bij MMT Projects hanteren wij een gestructureerde aanpak voor elk nieuwbouwproject in Hasselt en omgeving:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {phases.map((phase, index) => (
                <Card key={index} className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{phase.phase}</h3>
                        <p className="text-gray-700 leading-relaxed">{phase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Nieuwbouw Specialisaties in Hasselt</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Energiezuinige Nieuwbouw</h3>
                  <p className="text-gray-700">
                    Alle nieuwbouwprojecten van MMT Projects voldoen aan de modernste energienormen. Onze nieuwbouw in Hasselt is toekomstbestendig en milieuvriendelijk.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Moderne Nieuwbouw Architectuur</h3>
                  <p className="text-gray-700">
                    Van eigentijdse kubuswoningen tot klassieke nieuwbouw villa's - wij realiseren elke architecturale stijl in Hasselt en omgeving.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Nieuwbouw op Maat</h3>
                  <p className="text-gray-700">
                    Elk nieuwbouwproject is uniek. Wij luisteren naar uw wensen en realiseren nieuwbouw die perfect bij uw levensstijl past.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why MMT Projects */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waarom MMT Projects voor Nieuwbouw in Limburg?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Lokale Expertise</h3>
                <p className="text-gray-700">Als Hasseltse nieuwbouwspecialist kennen wij de lokale bouwvoorschriften, grondsoorten en architecturale tradities in Limburg.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Ervaren Team</h3>
                <p className="text-gray-700">Ons team heeft tientallen nieuwbouwprojecten gerealiseerd in Hasselt, Genk, Sint-Truiden en heel de regio.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Kwaliteitsgarantie</h3>
                <p className="text-gray-700">Wij staan garant voor vakmanschap en gebruiken enkel hoogwaardige materialen voor uw nieuwbouw.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Transparante Communicatie</h3>
                <p className="text-gray-700">Tijdens uw nieuwbouwproject blijft u volledig op de hoogte van de voortgang.</p>
              </div>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Nieuwbouw Referenties in Hasselt en Omgeving</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MMT Projects heeft een indrukwekkend portfolio van nieuwbouwprojecten in Hasselt en heel Limburg. Van moderne gezinswoningen in Hasselt-centrum tot landelijke villa's in de groene omgeving van Tongeren en Sint-Truiden.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {recentProjects.map((project, index) => (
                <Card key={index} className="bg-white border-none rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-3" />
                      <span className="text-gray-900 font-medium">{project}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-16 rounded-3xl shadow-xl">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start Uw Nieuwbouwproject in Hasselt</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Klaar om uw nieuwbouwdroom waar te maken? MMT Projects staat klaar om uw nieuwbouwproject in Hasselt of omgeving te realiseren. Vraag vandaag nog een vrijblijvende offerte aan voor uw nieuwbouwproject!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Phone className="mr-2 h-5 w-5" />
                    0484 11 77 27
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Mail className="mr-2 h-5 w-5" />
                    info@mmtprojects.be
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact MMT Projects - Nieuwbouw Specialist Hasselt</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Daaleindestraat 100, 3720 Hasselt</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">info@mmtprojects.be</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">0484117727</span>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              MMT Projects - Uw betrouwbare partner voor nieuwbouw in Hasselt, Genk, Sint-Truiden en heel Limburg. Meer dan 15 jaar ervaring in nieuwbouwprojecten.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Service gebied nieuwbouw: 50km rondom Hasselt, inclusief alle gemeenten in Limburg.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Nieuwbouw;
