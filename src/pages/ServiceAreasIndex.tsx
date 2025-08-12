
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Search, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { serviceAreas, getPopularServiceAreas } from "@/data/serviceAreas";

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

const ServiceAreasIndex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const popularAreas = getPopularServiceAreas();

  const filteredAreas = serviceAreas.filter(area => 
    area.naam.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.gemeente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const trackPhoneClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'phone_click',
        event_category: 'contact',
        event_label: 'servicegebieden_phone'
      });
    }
  };

  const trackEmailClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'email_click',
        event_category: 'contact',
        event_label: 'servicegebieden_email'
      });
    }
  };

  const trackQuoteClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'quote_request',
        event_category: 'contact',
        event_label: 'servicegebieden_quote'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Servicegebieden | MMT Projects - Bouw & Renovatie in Heel Limburg</title>
        <meta name="description" content="MMT Projects is actief in meer dan 50 gemeenten rond Hasselt, Limburg. Ontdek of wij ook in uw gemeente werkzaam zijn voor bouw-, renovatie- en onderhoudswerken." />
        <meta name="keywords" content="servicegebieden limburg, aannemer hasselt, bouw renovatie limburg, MMT Projects gemeenten" />
        <link rel="canonical" href="https://www.mmtprojects.be/servicegebieden" />
        
        <meta property="og:title" content="Servicegebieden | MMT Projects - Bouw & Renovatie in Heel Limburg" />
        <meta property="og:description" content="MMT Projects is actief in meer dan 50 gemeenten rond Hasselt, Limburg. Ontdek of wij ook in uw gemeente werkzaam zijn." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/servicegebieden" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.mmtprojects.be"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Servicegebieden",
                "item": "https://www.mmtprojects.be/servicegebieden"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "MMT Projects",
            "description": "Professionele bouw- en renovatiewerken in Limburg",
            "url": "https://www.mmtprojects.be",
            "telephone": "0484117727",
            "email": "info@mmtprojects.be",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Limburg",
              "addressCountry": "BE"
            },
            "areaServed": serviceAreas.map(area => ({
              "@type": "City",
              "name": area.naam,
              "addressRegion": "Limburg",
              "addressCountry": "BE"
            }))
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
              Onze <span className="text-blue-600">Servicegebieden</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              MMT Projects is actief in meer dan 50 gemeenten in en rond Hasselt, Limburg. 
              Wij brengen vakmanschap en kwaliteit naar uw deur, waar u ook woont.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Zoek uw gemeente..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Areas */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Populaire Servicegebieden
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/servicegebieden/${area.slug}`}
                  className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 hover:border-blue-300"
                >
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{area.naam}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{area.intro}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Areas */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Alle Servicegebieden ({filteredAreas.length})
            </h2>
            
            {filteredAreas.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">Geen gemeenten gevonden voor "{searchTerm}"</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredAreas.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/servicegebieden/${area.slug}`}
                    className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 hover:border-blue-300"
                  >
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{area.naam}</span>
                    </div>
                    {area.gemeente !== area.naam && (
                      <p className="text-sm text-gray-500 ml-6">{area.gemeente}</p>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Staat uw gemeente er niet tussen?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Neem contact met ons op! Wij werken graag met u samen, ook buiten onze standaard servicegebieden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0484117727" onClick={trackPhoneClick}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  0484 11 77 27
                </Button>
              </a>
              <a href="mailto:info@mmtprojects.be" onClick={trackEmailClick}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-5 w-5" />
                  info@mmtprojects.be
                </Button>
              </a>
            </div>
            <div className="mt-6">
              <Link to="/contact" onClick={trackQuoteClick}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Vrijblijvende offerte aanvragen
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ServiceAreasIndex;
