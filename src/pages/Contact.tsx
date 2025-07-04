
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact & Offerte Aanvragen | MMT Projects - Bouw Specialist Hasselt</title>
        <meta name="description" content="Neem contact op met MMT Projects voor uw bouwproject in Hasselt en Limburg. Vraag direct een gratis offerte aan via ons contactformulier." />
        <meta name="keywords" content="contact mmt projects, offerte aanvragen, bouw hasselt, contact bouwbedrijf limburg" />
        <link rel="canonical" href="https://www.mmtprojects.be/contact" />
        
        <meta property="og:title" content="Contact & Offerte Aanvragen | MMT Projects - Bouw Specialist Hasselt" />
        <meta property="og:description" content="Neem contact op met MMT Projects voor uw bouwproject in Hasselt en Limburg. Vraag direct een gratis offerte aan." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mmtprojects.be/contact" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Contact & <span className="text-blue-600">Offerte</span>
                </h1>
                
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Klaar om uw bouwproject te starten? Neem contact op voor een vrijblijvende offerte. 
                  Wij staan klaar om uw plannen werkelijkheid te maken.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                          Vraag Uw Offerte Aan
                        </h2>
                        <p className="text-gray-600">
                          Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte voor uw project.
                        </p>
                      </div>

                      <form action="https://formspree.io/f/xldbaqaj" method="POST" className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                              Naam *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Uw volledige naam"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                              E-mail *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="uw.email@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                              Telefoon
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="0484 11 77 27"
                            />
                          </div>
                          <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                              Locatie Project
                            </label>
                            <input
                              type="text"
                              id="location"
                              name="location"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Hasselt, Genk, ..."
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                            Type Project
                          </label>
                          <select
                            id="service"
                            name="service"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Selecteer uw project type</option>
                            <option value="nieuwbouw">Nieuwbouw</option>
                            <option value="renovatie">Renovatie</option>
                            <option value="verbouwing">Verbouwing</option>
                            <option value="aanbouw">Aanbouw</option>
                            <option value="dakwerken">Dakwerken</option>
                            <option value="badkamerrenovatie">Badkamerrenovatie</option>
                            <option value="keukenrenovatie">Keukenrenovatie</option>
                            <option value="andere">Andere</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Beschrijving Project *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Beschrijf uw project zo gedetailleerd mogelijk..."
                          ></textarea>
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Send className="mr-2 h-5 w-5" />
                          Offerte Aanvragen
                        </Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Direct Contact
                  </h3>
                  <div className="space-y-6">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Phone className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Bel Direct</h4>
                            <a href="tel:0484117727" className="text-blue-600 hover:text-blue-700 font-medium">
                              0484 11 77 27
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Mail className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">E-mail</h4>
                            <a href="mailto:info@mmtprojects.be" className="text-blue-600 hover:text-blue-700 font-medium">
                              info@mmtprojects.be
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Adres</h4>
                            <p className="text-gray-600">
                              Daaleindestraat 100<br />
                              3720 Hasselt
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Waarom Kiezen Voor MMT Projects?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-600">15+ jaar ervaring in de bouwsector</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-600">Persoonlijke begeleiding van A tot Z</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-600">Gratis en vrijblijvende offertes</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-600">Kwaliteitsgarantie op al onze werken</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-600">Actief in heel Limburg</p>
                    </div>
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

export default Contact;
