import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const trackPhoneClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'phone_click',
        event_category: 'contact',
        event_label: 'navigation_phone'
      });
    }
  };

  const trackEmailClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'email_click',
        event_category: 'contact',
        event_label: 'navigation_email'
      });
    }
  };

  const trackQuoteClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'quote_request',
        event_category: 'contact',
        event_label: 'navigation_quote'
      });
    }
  };

  const services = [
    { name: "Nieuwbouw", link: "/nieuwbouw-hasselt-limburg" },
    { name: "Verbouwing", link: "/verbouwing-hasselt-limburg" },
    { name: "Renovatie", link: "/renovatie-hasselt-limburg" },
    { name: "Aanbouw", link: "/aanbouw-hasselt-limburg" },
    { name: "Dakwerken", link: "/dakwerken-hasselt-limburg" },
    { name: "Metselwerk", link: "/metselwerk-hasselt-limburg" },
    { name: "Timmerwerk", link: "/timmerwerk-hasselt-limburg" },
    { name: "Sloopwerk", link: "/sloopwerk-hasselt-limburg" },
    { name: "Afbraakwerken", link: "/afbraakwerken-hasselt-limburg" },
    { name: "Badkamerrenovatie", link: "/badkamerrenovatie-hasselt-limburg" },
    { name: "Keukenrenovatie", link: "/keukenrenovatie-hasselt-limburg" },
    { name: "Vloerleggen", link: "/vloerleggen-hasselt-limburg" },
    { name: "Tegelwerk", link: "/tegelwerk-hasselt-limburg" },
    { name: "Stucwerk", link: "/stucwerk-hasselt-limburg" },
    { name: "Schilderwerk", link: "/schilderwerk-hasselt-limburg" },
    { name: "Laminaat Leggen", link: "/laminaat-leggen-hasselt-limburg" },
    { name: "Parket Leggen", link: "/parket-leggen-hasselt-limburg" },
    { name: "Gevelrenovatie", link: "/gevelrenovatie-hasselt-limburg" },
    { name: "Dakbedekking", link: "/dakbedekking-hasselt-limburg" },
    { name: "Tuinmuren", link: "/tuinmuren-hasselt-limburg" },
    { name: "Bestrating", link: "/bestrating-hasselt-limburg" },
    { name: "Schuttingen", link: "/schuttingen-hasselt-limburg" },
    { name: "Terrasbouw", link: "/terrasbouw-hasselt-limburg" },
    { name: "Carport", link: "/carport-hasselt-limburg" },
    { name: "Elektriciteit", link: "/elektriciteit-hasselt-limburg" },
    { name: "Loodgieterswerk", link: "/loodgieterswerk-hasselt-limburg" },
    { name: "Isolatie", link: "/isolatie-hasselt-limburg" },
    { name: "Kozijnen", link: "/kozijnen-hasselt-limburg" },
    { name: "Ramen Plaatsen", link: "/ramen-plaatsen-hasselt-limburg" },
    { name: "Deuren Plaatsen", link: "/deuren-plaatsen-hasselt-limburg" },
    { name: "Onderhoud en Herstelling", link: "/onderhoud-herstelling-hasselt-limburg" },
    { name: "Plaatsing Zonnepanelen", link: "/plaatsing-zonnepanelen-hasselt-limburg" },
    { name: "Batterijen Zonnepanelen", link: "/batterijen-zonnepanelen-hasselt-limburg" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">MMT Projects</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Diensten
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2 max-h-96 overflow-y-auto">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:0484117727" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={trackPhoneClick}
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@mmtprojects.be" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={trackEmailClick}
              >
                <Mail className="h-5 w-5" />
              </a>
              <Link to="/contact" onClick={trackQuoteClick}>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Offerte aanvragen
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button and contact icons */}
          <div className="md:hidden flex items-center space-x-3">
            <a 
              href="tel:0484117727" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={trackPhoneClick}
            >
              <Phone className="h-5 w-5" />
            </a>
            <a 
              href="mailto:info@mmtprojects.be" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={trackEmailClick}
            >
              <Mail className="h-5 w-5" />
            </a>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white max-h-96 overflow-y-auto">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-3 py-2 text-gray-900 font-medium">Diensten</div>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <div className="px-3 py-4">
                <Link to="/contact" onClick={() => { setIsMenuOpen(false); trackQuoteClick(); }}>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full">
                    Offerte aanvragen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
