import { 
  Building2, Hammer, Home, Wrench, Shield, Users, Award, Phone, 
  Mail, MapPin, Menu, X, ChevronRight, ArrowRight, ChevronDown
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">MMT Projects</span>
            </div>
            
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Diensten</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                      <NavigationMenuLink href="/nieuwbouw-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Nieuwbouw</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Complete nieuwbouwprojecten in Hasselt en omgeving
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/verbouwing-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Verbouwing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professionele verbouwingen voor uw woning
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/renovatie-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Renovatie</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Renovatiewerken voor een frisse uitstraling
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/aanbouw-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Aanbouw</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Uitbreiding van uw woning met een aanbouw
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/dakwerken-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Dakwerken</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professionele dakwerken en dakreparaties
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/dakbedekking-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Dakbedekking</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Dakbedekking met kwaliteitsmaterialen
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/metselwerk-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Metselwerk</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Vakkundig metselwerk voor alle toepassingen
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/timmerwerk-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Timmerwerk</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professioneel timmerwerk op maat
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/sloopwerk-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Sloopwerk</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Veilige en efficiënte sloopwerkzaamheden
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/badkamerrenovatie-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Badkamerrenovatie</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Complete badkamerrenovaties
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/keukenrenovatie-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Keukenrenovatie</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professionele keukenrenovaties
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/vloerleggen-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Vloerleggen</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Vakkundig leggen van alle vloertypes
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/laminaat-leggen-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Laminaat Leggen</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professioneel laminaat leggen
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/parket-leggen-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Parket Leggen</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Vakkundig parket installeren
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/tegelwerk-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Tegelwerk</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professioneel tegelwerk voor binnen en buiten
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/stucwerk-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Stucwerk</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Vakkundig stucwerk voor gladde afwerking
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/schilderwerk-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Schilderwerk</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professioneel schilderwerk binnen en buiten
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/gevelrenovatie-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Gevelrenovatie</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professionele gevelwerken in Limburg
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/tuinmuren-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Tuinmuren</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Vakkundige aanleg van tuinmuren
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/bestrating-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Bestrating</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professionele bestratingsdiensten
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/schuttingen-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Schuttingen</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professionele schutting plaatsing
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/terrasbouw-hasselt-limburg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Terrasbouw</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professionele terrasaanleg in Limburg
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Contact Button */}
            <div className="hidden md:flex">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                size="sm"
              >
                <Phone className="mr-2 h-4 w-4" />
                Neem contact op
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  <a href="#" className="text-lg" onClick={() => setMobileMenuOpen(false)}>Home</a>
                  
                  {/* Mobile Diensten Menu */}
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-medium">Diensten</span>
                    <div className="flex flex-col gap-2 ml-4">
                      <a href="/nieuwbouw-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Nieuwbouw
                      </a>
                      <a href="/verbouwing-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Verbouwing
                      </a>
                      <a href="/renovatie-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Renovatie
                      </a>
                      <a href="/aanbouw-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Aanbouw
                      </a>
                      <a href="/metselwerk-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Metselwerk
                      </a>
                      <a href="/timmerwerk-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Timmerwerk
                      </a>
                      <a href="/sloopwerk-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Sloopwerk
                      </a>
                      <a href="/badkamerrenovatie-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Badkamerrenovatie
                      </a>
                      <a href="/keukenrenovatie-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Keukenrenovatie
                      </a>
                      <a href="/vloerleggen-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Vloerleggen
                      </a>
                      <a href="/laminaat-leggen-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Laminaat leggen
                      </a>
                      <a href="/parket-leggen-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Parket leggen
                      </a>
                      <a href="/tegelwerk-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Tegelwerk
                      </a>
                      <a href="/stucwerk-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Stucwerk
                      </a>
                      <a href="/schilderwerk-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Schilderwerk
                      </a>
                      <a href="/gevelrenovatie-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Gevelrenovatie
                      </a>
                      <a href="/tuinmuren-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Tuinmuren
                      </a>
                      <a href="/bestrating-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Bestrating
                      </a>
                      <a href="/schuttingen-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Schuttingen
                      </a>
                      <a href="/terrasbouw-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Terrasbouw
                      </a>
                      <a href="#" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Totaalprojecten
                      </a>
                      <a href="#" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Herstelling en onderhoud
                      </a>
                      <a href="/dakwerken-hasselt-limburg" className="text-base text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        Dakwerken
                      </a>
                    </div>
                  </div>
                  
                  <a href="#about" className="text-lg" onClick={() => setMobileMenuOpen(false)}>Over ons</a>
                  <a href="#benefits" className="text-lg" onClick={() => setMobileMenuOpen(false)}>Voordelen</a>
                  <a href="#contact" className="text-lg" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                  
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white mt-4"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Neem contact op
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section - With Construction Image */}
      <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
            alt="Modern construction" 
            className="object-cover w-full h-full opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Building2 className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Professionele bouwpartner</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Uw partner in <span className="text-blue-600">bouwen & verbouwen</span>
              </h1>
              
              <p className="mt-6 text-xl text-gray-700 max-w-lg">
                Van droomhuis tot renovatie - wij realiseren uw bouwplannen met vakmanschap en betrouwbaarheid
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Neem contact op
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  Onze diensten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
                  alt="Modern building project" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">Vakmanschap</h2>
                  <p className="text-white/90">Met passie voor bouwen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Waar staan wij voor</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">De waarden die ons drijven</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ervaring & expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Met tientallen projecten op onze naam weten wij precies wat er nodig is om uw bouwplannen te realiseren.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Klantgericht</h3>
              <p className="text-gray-700 leading-relaxed">
                Wij luisteren naar uw wensen en denken met u mee. Samen maken we van uw project een succes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Betrouwbaarheid</h3>
              <p className="text-gray-700 leading-relaxed">
                Afspraak is afspraak. U kunt rekenen op transparante communicatie en een vlekkeloos proces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Image Backgrounds */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Wat doen wij?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Onze specialisaties op een rij</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833" 
                  alt="Nieuwbouw" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <Home className="h-8 w-8 mb-1" />
                </div>
              </div>
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Nieuwbouw</h3>
                <p className="text-gray-700">
                  Van ontwerp tot realisatie bouwen wij uw droomhuis op maat.
                </p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Meer informatie
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2" 
                  alt="Renovatie & verbouwing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <Hammer className="h-8 w-8 mb-1" />
                </div>
              </div>
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Renovatie & verbouwing</h3>
                <p className="text-gray-700">
                  Wilt u uw woning moderniseren, uitbreiden of verbeteren? Wij zorgen voor een resultaat dat aan al uw wensen voldoet.
                </p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Meer informatie
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e" 
                  alt="Totaalprojecten" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <Building2 className="h-8 w-8 mb-1" />
                </div>
              </div>
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Totaalprojecten</h3>
                <p className="text-gray-700">
                  Van eerste schets tot de laatste afwerking nemen wij u al het werk uit uw handen.
                </p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Meer informatie
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace" 
                  alt="Herstelling en onderhoud" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <Wrench className="h-8 w-8 mb-1" />
                </div>
              </div>
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Herstelling en onderhoud</h3>
                <p className="text-gray-700">
                  Van kleine reparaties tot het onderhoud van uw woning, wij bieden duurzame oplossingen.
                </p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Meer informatie
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
                  alt="Dakwerken" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <Shield className="h-8 w-8 mb-1" />
                </div>
              </div>
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Dakwerken</h3>
                <p className="text-gray-700">
                  Plaatsen van een nieuw dak of gewoon vernieuwen wij doen het allemaal.
                </p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Meer informatie
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section with Background Image */}
      <section id="benefits" className="py-20 px-4 bg-white relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
            alt="Construction background" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Ontdek de voordelen van ons bedrijf</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Waarom kiezen voor ons?</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3 shadow-lg">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Persoonlijke begeleiding & communicatie</h3>
              <p className="text-gray-700 leading-relaxed">
                Onze vakkundige projectleiders houden u tijdens het hele bouwproces op de hoogte. Met korte lijnen en duidelijke communicatie weet u precies waar u aan toe bent.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3 shadow-lg">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Alles onder een dak</h3>
              <p className="text-gray-700 leading-relaxed">
                Van ontwerp tot oplevering verzorgen wij het complete traject. U heeft een aanspreekpunt voor alle bouwwerkzaamheden, wat zorgt voor een zorgeloze ervaring.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Kwaliteit tegen scherpe prijzen</h3>
              <p className="text-gray-700 leading-relaxed">
                Door onze jarenlange samenwerking met betrouwbare partners en leveranciers kunnen wij altijd de beste kwaliteit materialen en expertise garanderen tegen scherpe prijzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Samen bouwen aan uw toekomst</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl">
                Heeft u plannen om te bouwen of verbouwen? Neem dan vandaag nog contact met ons op. 
                Ons team staat klaar om uw ideeën werkelijkheid te maken.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel ons direct
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-5 w-5" />
                  Verstuur een e-mail
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">MMT Projects</h3>
              <p className="text-gray-400">
                Uw betrouwbare partner voor alle bouwprojecten in Hasselt en omgeving.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Diensten</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/nieuwbouw-hasselt-limburg" className="hover:text-white">Nieuwbouw</Link></li>
                <li><Link to="/verbouwing-hasselt-limburg" className="hover:text-white">Verbouwing</Link></li>
                <li><Link to="/renovatie-hasselt-limburg" className="hover:text-white">Renovatie</Link></li>
                <li><Link to="/aanbouw-hasselt-limburg" className="hover:text-white">Aanbouw</Link></li>
                <li><Link to="/dakwerken-hasselt-limburg" className="hover:text-white">Dakwerken</Link></li>
                <li><Link to="/dakbedekking-hasselt-limburg" className="hover:text-white">Dakbedekking</Link></li>
                <li><Link to="/metselwerk-hasselt-limburg" className="hover:text-white">Metselwerk</Link></li>
                <li><Link to="/timmerwerk-hasselt-limburg" className="hover:text-white">Timmerwerk</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Meer Diensten</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/sloopwerk-hasselt-limburg" className="hover:text-white">Sloopwerk</Link></li>
                <li><Link to="/badkamerrenovatie-hasselt-limburg" className="hover:text-white">Badkamerrenovatie</Link></li>
                <li><Link to="/keukenrenovatie-hasselt-limburg" className="hover:text-white">Keukenrenovatie</Link></li>
                <li><Link to="/vloerleggen-hasselt-limburg" className="hover:text-white">Vloerleggen</Link></li>
                <li><Link to="/laminaat-leggen-hasselt-limburg" className="hover:text-white">Laminaat Leggen</Link></li>
                <li><Link to="/parket-leggen-hasselt-limburg" className="hover:text-white">Parket Leggen</Link></li>
                <li><Link to="/tegelwerk-hasselt-limburg" className="hover:text-white">Tegelwerk</Link></li>
                <li><Link to="/stucwerk-hasselt-limburg" className="hover:text-white">Stucwerk</Link></li>
                <li><Link to="/schilderwerk-hasselt-limburg" className="hover:text-white">Schilderwerk</Link></li>
                <li><Link to="/gevelrenovatie-hasselt-limburg" className="hover:text-white">Gevelrenovatie</Link></li>
                <li><Link to="/tuinmuren-hasselt-limburg" className="hover:text-white">Tuinmuren</Link></li>
                <li><Link to="/bestrating-hasselt-limburg" className="hover:text-white">Bestrating</Link></li>
                <li><Link to="/schuttingen-hasselt-limburg" className="hover:text-white">Schuttingen</Link></li>
                <li><Link to="/terrasbouw-hasselt-limburg" className="hover:text-white">Terrasbouw</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                  <span>+32 484 11 77 27</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                  <span>info@mmtprojects.be</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                  <span>3500 Hasselt, België</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} MMT Projects. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
