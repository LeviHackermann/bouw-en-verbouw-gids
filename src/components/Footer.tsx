
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
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
  ];

  const moreServices = [
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
  ];

  const specialServices = [
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">MMT Projects</h3>
            <p className="text-gray-300 mb-4">
              Uw betrouwbare partner voor bouw en renovatie in Hasselt en omgeving.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Daaleindestraat 100, 3720 Hasselt</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:0484117727" className="hover:text-blue-400">0484 11 77 27</a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@mmtprojects.be" className="hover:text-blue-400">info@mmtprojects.be</a>
              </div>
            </div>
          </div>

          {/* Services Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Onze Diensten</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.link} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Meer Diensten</h3>
            <ul className="space-y-2">
              {moreServices.map((service, index) => (
                <li key={index}>
                  <Link to={service.link} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Specialiteiten</h3>
            <ul className="space-y-2">
              {specialServices.map((service, index) => (
                <li key={index}>
                  <Link to={service.link} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MMT Projects. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
