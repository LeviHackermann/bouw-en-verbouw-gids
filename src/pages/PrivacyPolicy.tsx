
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacyverklaring & Algemene Voorwaarden | MMT Projects</title>
        <meta name="description" content="Lees onze privacyverklaring en algemene voorwaarden. MMT Projects respecteert uw privacy en houdt zich aan de GDPR wetgeving." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.mmtprojects.be/privacy-policy" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
                Privacyverklaring & <span className="text-blue-600">Algemene Voorwaarden</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                MMT Projects respecteert uw privacy en houdt zich aan de Algemene Verordening Gegevensbescherming (AVG/GDPR).
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Verantwoordelijke voor de gegevensverwerking</h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>MMT Projects</strong></p>
                    <p>Daaleindestraat 100<br />3720 Hasselt<br />België</p>
                    <p>E-mail: info@mmtprojects.be<br />Telefoon: 0484 11 77 27</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Welke gegevens verzamelen wij?</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Wij verzamelen de volgende persoonsgegevens:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Naam en contactgegevens (e-mail, telefoonnummer)</li>
                      <li>Adresgegevens en locatie van uw project</li>
                      <li>Informatie over uw bouwproject en specifieke wensen</li>
                      <li>Technische gegevens zoals IP-adres en browserinformatie (via cookies)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Waarom verwerken wij uw gegevens?</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Het behandelen van uw offerte-aanvraag</li>
                      <li>Contact opnemen voor projectbesprekingen</li>
                      <li>Het uitvoeren van werkzaamheden en contractuele verplichtingen</li>
                      <li>Klantenservice en nazorg</li>
                      <li>Marketingcommunicatie (alleen met uw toestemming)</li>
                      <li>Website-analyse en verbetering van onze dienstverlening</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Rechtsgrondslag voor verwerking</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Wij verwerken uw gegevens op basis van:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Toestemming:</strong> Voor marketingcommunicatie en cookies</li>
                      <li><strong>Contractuele noodzaak:</strong> Voor het uitvoeren van onze diensten</li>
                      <li><strong>Gerechtvaardigd belang:</strong> Voor klantenservice en bedrijfsvoering</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Bewaartermijn</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Wij bewaren uw gegevens niet langer dan noodzakelijk:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Offerte-aanvragen: 2 jaar na laatste contact</li>
                      <li>Klantgegevens: 7 jaar na voltooiing project (wettelijke verplichting)</li>
                      <li>Marketingtoestemming: tot u zich uitschrijft</li>
                      <li>Website-analytics: 26 maanden</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Uw rechten</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>U heeft de volgende rechten betreffende uw persoonsgegevens:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Recht op inzage van uw gegevens</li>
                      <li>Recht op rectificatie (correctie van onjuiste gegevens)</li>
                      <li>Recht op verwijdering ('recht om vergeten te worden')</li>
                      <li>Recht op beperking van de verwerking</li>
                      <li>Recht op gegevensoverdraagbaarheid</li>
                      <li>Recht van bezwaar tegen verwerking</li>
                      <li>Recht om toestemming in te trekken</li>
                    </ul>
                    <p className="mt-4">
                      Om deze rechten uit te oefenen, kunt u contact met ons opnemen via info@mmtprojects.be.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Cookies en tracking</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Onze website gebruikt cookies en tracking technologieën:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Noodzakelijke cookies:</strong> Voor het functioneren van de website</li>
                      <li><strong>Google Analytics:</strong> Voor website-analyse (geanonimiseerd)</li>
                      <li><strong>Google Tag Manager:</strong> Voor het beheren van tracking codes</li>
                    </ul>
                    <p className="mt-4">
                      U kunt cookies uitschakelen in uw browserinstellingen, maar dit kan de functionaliteit van de website beïnvloeden.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Gegevensbeveiliging</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen 
                      ongeautoriseerde toegang, verlies, wijziging of openbaarmaking. Dit omvat encryptie, toegangscontroles en 
                      regelmatige beveiligingsupdates.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Delen met derden</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Wij delen uw gegevens alleen met derden wanneer:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Dit noodzakelijk is voor de uitvoering van onze diensten</li>
                      <li>Wij hiertoe wettelijk verplicht zijn</li>
                      <li>U hiervoor expliciet toestemming heeft gegeven</li>
                    </ul>
                    <p className="mt-4">
                      Eventuele derde partijen zijn contractueel verplicht om uw gegevens op dezelfde manier te beschermen als wij.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Wijzigingen in deze verklaring</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Wij kunnen deze privacyverklaring van tijd tot tijd bijwerken. Wijzigingen worden op deze pagina gepubliceerd 
                      met de datum van de laatste update. Wij raden u aan deze verklaring regelmatig te controleren.
                    </p>
                    <p><strong>Laatste update:</strong> {new Date().toLocaleDateString('nl-BE')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact en klachten</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Voor vragen over deze privacyverklaring of over de verwerking van uw persoonsgegevens kunt u contact 
                      met ons opnemen:
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p><strong>E-mail:</strong> info@mmtprojects.be</p>
                      <p><strong>Telefoon:</strong> 0484 11 77 27</p>
                      <p><strong>Adres:</strong> Daaleindestraat 100, 3720 Hasselt</p>
                    </div>
                    <p className="mt-4">
                      Indien u niet tevreden bent met de behandeling van uw klacht, heeft u het recht om een klacht 
                      in te dienen bij de Gegevensbeschermingsautoriteit (GBA): 
                      <a href="https://www.gegevensbeschermingsautoriteit.be" className="text-blue-600 hover:text-blue-700 ml-1">
                        www.gegevensbeschermingsautoriteit.be
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
