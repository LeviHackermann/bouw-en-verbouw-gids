
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Building2, Hammer, Wrench } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServiceAreaBySlug, serviceAreas } from "@/data/serviceAreas";

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

const ServiceAreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const serviceArea = slug ? getServiceAreaBySlug(slug) : undefined;

  if (!serviceArea) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-white pt-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Servicegebied niet gevonden</h1>
            <Link to="/servicegebieden" className="text-blue-600 hover:text-blue-800">
              Terug naar servicegebieden
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Get nearby areas (simple implementation - could be enhanced with coordinates)
  const nearbyAreas = serviceAreas
    .filter(area => area.slug !== serviceArea.slug)
    .slice(0, 6);

  const services = [
    { name: "Nieuwbouw", link: "/nieuwbouw-hasselt-limburg", icon: Building2 },
    { name: "Renovatie", link: "/renovatie-hasselt-limburg", icon: Hammer },
    { name: "Dakwerken", link: "/dakwerken-hasselt-limburg", icon: Wrench },
    { name: "Badkamerrenovatie", link: "/badkamerrenovatie-hasselt-limburg", icon: Hammer },
    { name: "Keukenrenovatie", link: "/keukenrenovatie-hasselt-limburg", icon: Hammer },
    { name: "Timmerwerk", link: "/timmerwerk-hasselt-limburg", icon: Wrench }
  ];

  const trackPhoneClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'phone_click',
        event_category: 'contact',
        event_label: `servicegebied_${serviceArea.slug}_phone`
      });
    }
  };

  const trackEmailClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'email_click',
        event_category: 'contact',
        event_label: `servicegebied_${serviceArea.slug}_email`
      });
    }
  };

  const trackQuoteClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'quote_request',
        event_category: 'contact',
        event_label: `servicegebied_${serviceArea.slug}_quote`
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Aannemer in {serviceArea.naam} ({serviceArea.provincie}) | Bouw & Renovatie | MMT Projects</title>
        <meta name="description" content={`MMT Projects werkt in ${serviceArea.naam} en omgeving. Expert in nieuwbouw, renovatie en dakwerken. Bekende plekken: ${serviceArea.landmarks.slice(0, 2).map(l => l.naam).join(', ')}. Vraag een vrijblijvende offerte.`} />
        <meta name="keywords" content={`aannemer ${serviceArea.naam.toLowerCase()}, bouw ${serviceArea.naam.toLowerCase()}, renovatie ${serviceArea.naam.toLowerCase()}, MMT Projects ${serviceArea.naam.toLowerCase()}`} />
        <link rel="canonical" href={`https://www.mmtprojects.be/servicegebieden/${serviceArea.slug}`} />
        
        <meta property="og:title" content={`Aannemer in ${serviceArea.naam} (${serviceArea.provincie}) | Bouw & Renovatie | MMT Projects`} />
        <meta property="og:description" content={`MMT Projects werkt in ${serviceArea.naam} en omgeving. Expert in nieuwbouw, renovatie en dakwerken.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.mmtprojects.be/servicegebieden/${serviceArea.slug}`} />

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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": serviceArea.naam,
                "item": `https://www.mmtprojects.be/servicegebieden/${serviceArea.slug}`
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "MMT Projects",
            "description": `Professionele bouw- en renovatiewerken in ${serviceArea.naam}, ${serviceArea.provincie}`,
            "url": `https://www.mmtprojects.be/servicegebieden/${serviceArea.slug}`,
            "telephone": "0484117727",
            "email": "info@mmtprojects.be",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": serviceArea.provincie,
              "addressCountry": "BE"
            },
            "areaServed": {
              "@type": "City",
              "name": serviceArea.naam,
              "addressRegion": serviceArea.provincie,
              "addressCountry": "BE"
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white pt-16">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="flex text-sm">
              <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link to="/servicegebieden" className="text-blue-600 hover:text-blue-800">Servicegebieden</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-900">{serviceArea.naam}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-medium">{serviceArea.gemeente}, {serviceArea.provincie}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                  Bouw- en renovatiewerken in <span className="text-blue-600">{serviceArea.naam}</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {serviceArea.intro}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:0484117727" onClick={trackPhoneClick}>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Phone className="mr-2 h-5 w-5" />
                      Direct contact: 0484 11 77 27
                    </Button>
                  </a>
                  <Link to="/contact" onClick={trackQuoteClick}>
                    <Button size="lg" variant="outline">
                      Gratis offerte aanvragen
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:order-first">
                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Onze diensten in {serviceArea.naam}</h2>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                      >
                        <service.icon className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="font-medium text-gray-900 group-hover:text-blue-600">
                          {service.name}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 ml-auto group-hover:text-blue-600" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Landmarks Section */}
        {serviceArea.landmarks.length > 0 && (
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Bekende plekken in {serviceArea.naam}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceArea.landmarks.map((landmark, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{landmark.naam}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{landmark.beschrijving}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Waarom kiezen voor MMT Projects in {serviceArea.naam}?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Lokale kennis van {serviceArea.naam} en omgeving</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Meer dan 15 jaar ervaring in de bouwsector</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Vakkundige uitvoering en kwaliteitsgarantie</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Persoonlijke begeleiding van A tot Z</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">Transparante prijzen en geen verrassingen</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Direct contact opnemen?</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:0484117727" 
                    className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    onClick={trackPhoneClick}
                  >
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Bel direct</div>
                      <div className="text-blue-600">0484 11 77 27</div>
                    </div>
                  </a>
                  <a 
                    href="mailto:info@mmtprojects.be" 
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={trackEmailClick}
                  >
                    <Mail className="h-5 w-5 text-gray-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Stuur een e-mail</div>
                      <div className="text-gray-600">info@mmtprojects.be</div>
                    </div>
                  </a>
                  <Link to="/contact" onClick={trackQuoteClick}>
                    <Button className="w-full">
                      Vrijblijvende offerte aanvragen
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Andere servicegebieden in de buurt
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {nearbyAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/servicegebieden/${area.slug}`}
                  className="block bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 hover:border-blue-300"
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
            <div className="text-center mt-8">
              <Link to="/servicegebieden">
                <Button variant="outline">
                  Bekijk alle servicegebieden
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

export default ServiceAreaPage;
