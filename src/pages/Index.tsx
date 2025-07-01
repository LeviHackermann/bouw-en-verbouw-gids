
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Home,
  Wrench,
  Building2,
  Hammer,
  Square,
  Palette,
  Paintbrush,
  Menu,
  ChevronDown,
  Car,
  Zap,
} from "lucide-react";

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-blue-600">MMT Projects</span>
              </Link>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center">
                      Diensten
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 grid grid-cols-2 gap-1 p-2">
                    <DropdownMenuItem asChild>
                      <Link to="/nieuwbouw-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Home className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Nieuwbouw</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/verbouwing-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Wrench className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Verbouwing</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/renovatie-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Building2 className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Renovatie</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/aanbouw-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Home className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Aanbouw</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/dakwerken-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Home className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Dakwerken</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/metselwerk-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Building2 className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Metselwerk</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/timmerwerk-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Hammer className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Timmerwerk</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/sloopwerk-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Wrench className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Sloopwerk</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/badkamerrenovatie-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Home className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Badkamerrenovatie</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/keukenrenovatie-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Home className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Keukenrenovatie</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/vloerleggen-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Building2 className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Vloerleggen</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/tegelwerk-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Square className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Tegelwerk</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/stucwerk-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Palette className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Stucwerk</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/schilderwerk-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Paintbrush className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Schilderwerk</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/laminaat-leggen-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Building2 className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Laminaat Leggen</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/parket-leggen-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Building2 className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Parket Leggen</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/gevelrenovatie-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Building2 className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Gevelrenovatie</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/dakbedekking-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Home className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Dakbedekking</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/tuinmuren-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Building2 className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Tuinmuren</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/bestrating-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Square className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Bestrating</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/schuttingen-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Building2 className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Schuttingen</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/terrasbouw-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Building2 className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Terrasbouw</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/carport-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Car className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Carport</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link to="/elektriciteit-hasselt-limburg" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                        <Zap className="mr-3 h-5 w-5 text-blue-600" />
                        <span>Elektriciteit</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>MMT Projects</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 mt-6">
                    <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Home
                    </Link>
                    
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-gray-600 hover:text-blue-600 transition-colors">
                        Diensten
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 pt-2 space-y-2">
                        <Link to="/nieuwbouw-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Nieuwbouw
                        </Link>
                        <Link to="/verbouwing-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Verbouwing
                        </Link>
                        <Link to="/renovatie-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Renovatie
                        </Link>
                        <Link to="/aanbouw-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Aanbouw
                        </Link>
                        <Link to="/dakwerken-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Dakwerken
                        </Link>
                        <Link to="/metselwerk-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Metselwerk
                        </Link>
                        <Link to="/timmerwerk-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Timmerwerk
                        </Link>
                        <Link to="/sloopwerk-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Sloopwerk
                        </Link>
                        <Link to="/badkamerrenovatie-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Badkamerrenovatie
                        </Link>
                        <Link to="/keukenrenovatie-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Keukenrenovatie
                        </Link>
                        <Link to="/vloerleggen-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Vloerleggen
                        </Link>
                        <Link to="/tegelwerk-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Tegelwerk
                        </Link>
                        <Link to="/stucwerk-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Stucwerk
                        </Link>
                        <Link to="/schilderwerk-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Schilderwerk
                        </Link>
                        <Link to="/laminaat-leggen-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Laminaat Leggen
                        </Link>
                        <Link to="/parket-leggen-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Parket Leggen
                        </Link>
                        <Link to="/gevelrenovatie-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Gevelrenovatie
                        </Link>
                        <Link to="/dakbedekking-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Dakbedekking
                        </Link>
                        <Link to="/tuinmuren-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Tuinmuren
                        </Link>
                        <Link to="/bestrating-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Bestrating
                        </Link>
                        <Link to="/schuttingen-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Schuttingen
                        </Link>
                        <Link to="/terrasbouw-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Terrasbouw
                        </Link>
                        <Link to="/carport-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Carport
                        </Link>
                        <Link to="/elektriciteit-hasselt-limburg" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                          Elektriciteit
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Over Ons
                    </a>
                    <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Contact
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Onze Diensten</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Link to="/nieuwbouw-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Nieuwbouw
          </Link>
          <Link to="/verbouwing-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Verbouwing
          </Link>
          <Link to="/renovatie-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Renovatie
          </Link>
          <Link to="/aanbouw-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Aanbouw
          </Link>
          <Link to="/dakwerken-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Dakwerken
          </Link>
          <Link to="/metselwerk-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Metselwerk
          </Link>
          <Link to="/timmerwerk-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Timmerwerk
          </Link>
          <Link to="/sloopwerk-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Sloopwerk
          </Link>
          <Link to="/badkamerrenovatie-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Badkamerrenovatie
          </Link>
          <Link to="/keukenrenovatie-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Keukenrenovatie
          </Link>
          <Link to="/vloerleggen-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Vloerleggen
          </Link>
          <Link to="/tegelwerk-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Tegelwerk
          </Link>
          <Link to="/stucwerk-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Stucwerk
          </Link>
          <Link to="/schilderwerk-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Schilderwerk
          </Link>
          <Link to="/laminaat-leggen-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Laminaat Leggen
          </Link>
          <Link to="/parket-leggen-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Parket Leggen
          </Link>
          <Link to="/gevelrenovatie-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Gevelrenovatie
          </Link>
          <Link to="/dakbedekking-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Dakbedekking
          </Link>
          <Link to="/tuinmuren-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Tuinmuren
          </Link>
          <Link to="/bestrating-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Bestrating
          </Link>
          <Link to="/schuttingen-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Schuttingen
          </Link>
          <Link to="/terrasbouw-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Terrasbouw
          </Link>
          <Link to="/carport-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Carport
          </Link>
          <Link to="/elektriciteit-hasselt-limburg" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
            Elektriciteit
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Over MMT Projects</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          MMT Projects is een toonaangevend bouwbedrijf gevestigd in Hasselt, gespecialiseerd in diverse bouw- en renovatiediensten. Met meer dan 15 jaar ervaring leveren wij vakmanschap en kwaliteit aan onze klanten in Limburg en omgeving.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Wat onze klanten zeggen</h2>
        <div className="space-y-6">
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
            "MMT Projects heeft onze nieuwbouw perfect afgewerkt. Professioneel en betrouwbaar team!"
          </blockquote>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
            "Snelle service en uitstekende kwaliteit bij onze keukenrenovatie. Zeker een aanrader."
          </blockquote>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
            "De carport die zij voor ons bouwden is van topkwaliteit en precies volgens afspraak."
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <p className="text-lg text-gray-700 mb-6">
          Heeft u vragen of wilt u een offerte aanvragen? Neem gerust contact met ons op.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold mb-2">Adres</h3>
            <p className="text-gray-600">Daaleindestraat 100<br />3720 Hasselt</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Telefoon</h3>
            <p className="text-gray-600">0484117727</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@mmtprojects.be</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MMT Projects. Alle rechten voorbehouden.
        </div>
      </footer>
    </>
  );
};

export default Index;
