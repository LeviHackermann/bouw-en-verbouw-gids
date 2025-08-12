
export interface ServiceArea {
  slug: string;
  naam: string;
  gemeente: string;
  intro: string;
  provincie: string;
  landmarks: {
    naam: string;
    beschrijving: string;
  }[];
  ogImage?: string;
  coords?: {
    lat: number;
    lng: number;
  };
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "hasselt",
    naam: "Hasselt",
    gemeente: "Hasselt",
    intro: "MMT Projects is uw vertrouwde aannemer in Hasselt, de hoofdstad van Limburg. Wij verzorgen alle bouw- en renovatiewerken in het centrum en de omliggende wijken met oog voor de historische waarde van deze prachtige stad.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Japanse Tuin",
        beschrijving: "Een prachtige authentieke Japanse tuin waar rust en sereniteit centraal staan, gelegen in het centrum van Hasselt."
      },
      {
        naam: "Begijnhof Hasselt",
        beschrijving: "Historisch begijnhof uit de 13e eeuw, nu UNESCO Werelderfgoed en een van de mooiste plekken van de stad."
      },
      {
        naam: "Demerstraat",
        beschrijving: "De levendige winkelstraat van Hasselt waar traditi en moderniteit samenkomen."
      }
    ]
  },
  {
    slug: "genk",
    naam: "Genk",
    gemeente: "Genk",
    intro: "MMT Projects werkt graag in Genk, een stad die bekend staat om zijn groene karakter en moderne ontwikkelingen. Van nieuwbouw tot renovatie, wij kennen de lokale bouwvoorschriften en werken efficiënt in alle wijken van Genk.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Nationaal Park Hoge Kempen",
        beschrijving: "Het enige nationale park van België, gelegen vlakbij Genk met prachtige natuurgebieden."
      },
      {
        naam: "C-mine",
        beschrijving: "Voormalige mijnsite getransformeerd tot creatief en cultureel centrum van Genk."
      },
      {
        naam: "Bokrijk",
        beschrijving: "Openluchtmuseum en recreatiedomein dat de Vlaamse geschiedenis tot leven brengt."
      }
    ]
  },
  {
    slug: "diepenbeek",
    naam: "Diepenbeek",
    gemeente: "Diepenbeek",
    intro: "MMT Projects is actief in Diepenbeek, een gemeente die perfect de rust van het platteland combineert met de nabijheid van de stad. Wij verzorgen vakkundige bouw- en renovatieprojecten in deze groene gemeente.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Universiteit Hasselt Campus",
        beschrijving: "Moderne universiteitscampus die Diepenbeek een dynamisch karakter geeft."
      },
      {
        naam: "Kasteel van Diepenbeek",
        beschrijving: "Historisch kasteel dat symbool staat voor de rijke geschiedenis van de gemeente."
      }
    ]
  },
  {
    slug: "zonhoven",
    naam: "Zonhoven",
    gemeente: "Zonhoven",
    intro: "In Zonhoven realiseert MMT Projects diverse bouwprojecten in deze aangename woongemeente. Van kleine renovaties tot complete nieuwbouw, wij kennen de lokale specificaties en werken met respect voor de omgeving.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Domein Kelchterhoef",
        beschrijving: "Recreatiedomein met prachtige natuur en wandelmogelijkheden in het groen."
      },
      {
        naam: "Kerk Sint-Antoniusabt",
        beschrijving: "Karakteristieke kerk die het historische hart van Zonhoven vormt."
      }
    ]
  },
  {
    slug: "heusden-zolder",
    naam: "Heusden-Zolder",
    gemeente: "Heusden-Zolder",
    intro: "MMT Projects voert bouwprojecten uit in Heusden-Zolder, bekend om het circuit van Zolder en de aangename woonmilieus. Wij zorgen voor kwalitatieve uitvoering in alle deelgemeenten.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Circuit Zolder",
        beschrijving: "Beroemd racecircuit dat internationaal bekend is en veel bezoekers naar de regio trekt."
      },
      {
        naam: "Kasteel van Zolder",
        beschrijving: "Historisch kasteel met een rijke geschiedenis in het centrum van Zolder."
      }
    ]
  },
  {
    slug: "houthalen-helchteren",
    naam: "Houthalen-Helchteren",
    gemeente: "Houthalen-Helchteren",
    intro: "MMT Projects is uw partner voor bouw- en renovatiewerken in Houthalen-Helchteren. Deze fusiegemeente biedt diverse woonmogelijkheden waar wij met vakmanschap aan het werk gaan.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Domein Kelchterhoef",
        beschrijving: "Groot recreatiedomein met zwemmogelijkheden en natuurwandeling."
      },
      {
        naam: "Abdij van Averbode",
        beschrijving: "Historische abdij vlakbij de gemeente, bekend om zijn spirituele en culturele waarde."
      }
    ]
  },
  {
    slug: "beringen",
    naam: "Beringen",
    gemeente: "Beringen",
    intro: "In Beringen voert MMT Projects diverse bouwprojecten uit. Deze voormalige mijnstad heeft zich ontwikkeld tot een moderne gemeente waar wij met plezier werken aan uw droomproject.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Be-MINE",
        beschrijving: "Voormalige mijnsite getransformeerd tot avontuurlijk recreatiepark met unieke attracties."
      },
      {
        naam: "Mijncité",
        beschrijving: "Historische mijnwerkerswoningen die herinneren aan het industriële verleden."
      }
    ]
  },
  {
    slug: "bilzen",
    naam: "Bilzen",
    gemeente: "Bilzen",
    intro: "MMT Projects werkt in Bilzen, een gemeente rijk aan geschiedenis en natuur. Van renovaties in het historische centrum tot nieuwbouw in moderne wijken, wij kennen de lokale eigenheeden.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Kasteel Alden Biesen",
        beschrijving: "Indrukwekkend kasteel en cultureel centrum dat de geschiedenis van de regio vertelt."
      },
      {
        naam: "Oude Maas",
        beschrijving: "Schilderachtig natuurgebied perfect voor wandelingen en natuurbeleving."
      }
    ]
  },
  {
    slug: "lummen",
    naam: "Lummen",
    gemeente: "Lummen",
    intro: "MMT Projects realiseert bouwprojecten in Lummen, een gemeente die bekendstaat om zijn groene karakter en rustige woonmilieus. Wij werken met respect voor deze natuurlijke omgeving.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Schulensmeer",
        beschrijving: "Prachtig recreatiegebied met zwemmogelijkheden en watersport in het groen."
      },
      {
        naam: "Historisch centrum Lummen",
        beschrijving: "Gezellig dorpscentrum met karakteristieke gebouwen en lokale charme."
      }
    ]
  },
  {
    slug: "leopoldsburg",
    naam: "Leopoldsburg",
    gemeente: "Leopoldsburg",
    intro: "In Leopoldsburg voert MMT Projects diverse bouwwerken uit. Deze gemeente met zijn militaire geschiedenis biedt unieke uitdagingen waar onze ervaren vakmensen graag mee aan de slag gaan.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Militair Domein",
        beschrijving: "Groot militair oefenterrein dat bepalend is voor het karakter van Leopoldsburg."
      },
      {
        naam: "Hechtelse Heide",
        beschrijving: "Uitgestrekt natuurgebied met heide en bossen, perfect voor natuurliefhebbers."
      }
    ]
  },
  {
    slug: "peer",
    naam: "Peer",
    gemeente: "Peer",
    intro: "MMT Projects is actief in Peer, bekend als de fruitstreek van Limburg. Wij voeren kwalitatieve bouwwerken uit met respect voor het landelijke karakter van deze mooie gemeente.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Fruitstreek",
        beschrijving: "Prachtige boomgaarden die in de lente een waar spektakel van bloesem bieden."
      },
      {
        naam: "Domein Helvétia",
        beschrijving: "Recreatiedomein met camping en natuurgebieden voor ontspanning."
      }
    ]
  },
  {
    slug: "pelt",
    naam: "Pelt",
    gemeente: "Pelt",
    intro: "MMT Projects werkt in Pelt, een fusiegemeente van Neerpelt en Overpelt. Deze gemeente aan de Nederlandse grens biedt diverse bouwmogelijkheden waar wij met vakmanschap aan de slag gaan.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "De Kluis",
        beschrijving: "Natuurgebied met bossen en vennen, ideaal voor wandelingen en natuurbeleving."
      },
      {
        naam: "Glasmuseum",
        beschrijving: "Uniek museum dat de geschiedenis van de glasindustrie in de regio toont."
      }
    ]
  },
  {
    slug: "ham",
    naam: "Ham",
    gemeente: "Ham",
    intro: "In Ham realiseert MMT Projects diverse bouwprojecten. Deze kleinschalige gemeente biedt een persoonlijke aanpak waar wij als lokale aannemer perfect bij aansluiten.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Kasteel van Ham",
        beschrijving: "Historisch kasteel dat het rijke verleden van de gemeente symboliseert."
      },
      {
        naam: "Kempens Landschap",
        beschrijving: "Mooie natuurgebieden die typisch zijn voor de Limburgse Kempen."
      }
    ]
  },
  {
    slug: "tessenderlo",
    naam: "Tessenderlo",
    gemeente: "Tessenderlo",
    intro: "MMT Projects voert bouwwerken uit in Tessenderlo, een gemeente waar industrie en natuur harmonieus samengaan. Wij werken efficiënt in alle deelgemeenten van deze diverse gemeente.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Tessenderlo Chemie",
        beschrijving: "Belangrijke industriële site die de economische dynamiek van de gemeente bepaalt."
      },
      {
        naam: "Natuurreservaat De Wijers",
        beschrijving: "Uniek natuurgebied met meer dan 1000 vijvers en poelen."
      }
    ]
  },
  {
    slug: "alken",
    naam: "Alken",
    gemeente: "Alken",
    intro: "MMT Projects is uw aannemer in Alken, een gemeente gelegen langs de Maas. De unieke ligging en het historische karakter vragen om zorgvuldige en vakkundige aanpak van bouwprojecten.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Kasteel van Alken",
        beschrijving: "Indrukwekkend kasteel op een rots langs de Maas, symbool van de gemeente."
      },
      {
        naam: "Maasdal",
        beschrijving: "Prachtig natuurlandschap langs de rivier de Maas met wandel- en fietspaden."
      }
    ]
  },
  {
    slug: "kortessem",
    naam: "Kortessem",
    gemeente: "Kortessem",
    intro: "In Kortessem voert MMT Projects bouwprojecten uit in deze landelijke gemeente tussen Hasselt en Sint-Truiden. Het rustige karakter vraagt om een respectvolle benadering van elk project.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Kerk Sint-Pieter",
        beschrijving: "Karakteristieke dorpskerk die centraal staat in het gemeenschapsleven."
      },
      {
        naam: "Haspengouwse landschap",
        beschrijving: "Glooiende velden en landelijke rust typisch voor deze streek."
      }
    ]
  },
  {
    slug: "nieuwerkerken",
    naam: "Nieuwerkerken",
    gemeente: "Nieuwerkerken",
    intro: "MMT Projects werkt in Nieuwerkerken, een gemeente in het hart van Haspengouw. De landelijke uitstraling en traditie vragen om vakkundige uitvoering met oog voor detail.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Onze-Lieve-Vrouwekerk",
        beschrijving: "Imposante neogotische kerk die het dorpsbeeld bepaalt."
      },
      {
        naam: "Fruitboomgaarden",
        beschrijving: "Uitgestrekte boomgaarden die in de lente een prachtig bloesemspektakel bieden."
      }
    ]
  },
  {
    slug: "herk-de-stad",
    naam: "Herk-de-Stad",
    gemeente: "Herk-de-Stad",
    intro: "MMT Projects realiseert bouwprojecten in Herk-de-Stad, een gemeente met een rijke geschiedenis. Van renovaties in het historische centrum tot moderne nieuwbouw, wij werken met respect voor het erfgoed.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Abdij van Herkenrode",
        beschrijving: "Voormalige cisterciënzerabdij met een fascinerend verhaal over macht en spiritualiteit."
      },
      {
        naam: "Herkenrode Park",
        beschrijving: "Groen recreatiegebied waar geschiedenis en natuur samenkomen."
      }
    ]
  },
  {
    slug: "wellen",
    naam: "Wellen",
    gemeente: "Wellen",
    intro: "In Wellen voert MMT Projects diverse bouwwerken uit. Deze gemeente tussen Hasselt en Sint-Truiden biedt een rustige woonomgeving waar wij met zorg aan elk project werken.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Kasteel ter Dolen",
        beschrijving: "Historisch kasteel omgeven door een prachtig park en waterpartijen."
      },
      {
        naam: "Haspengouwse velden",
        beschrijving: "Karakteristieke open landschappen met glooiende akkers en boomgaarden."
      }
    ]
  },
  {
    slug: "borgloon",
    naam: "Borgloon",
    gemeente: "Borgloon",
    intro: "MMT Projects werkt in Borgloon, de fruitstad van Vlaanderen. Deze gemeente in Haspengouw vraagt om een zorgvuldige aanpak die past bij het unieke karakter van de streek.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Fruitstreek Haspengouw",
        beschrijving: "Uitgestrekte boomgaarden die de gemeente internationale bekendheid geven."
      },
      {
        naam: "Kerk van Borgloon",
        beschrijving: "Historische kerk die centraal staat in het leven van deze fruitstreek."
      }
    ]
  },
  {
    slug: "tongeren",
    naam: "Tongeren",
    gemeente: "Tongeren",
    intro: "MMT Projects is actief in Tongeren, de oudste stad van België. De rijke Romeinse geschiedenis vraagt om een bijzondere aanpak bij renovaties en nieuwbouw in deze unieke stad.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Basiliek van Onze-Lieve-Vrouw",
        beschrijving: "Gotische basiliek met de beroemde Onze-Lieve-Vrouw van Tongeren, beschermheilige van Limburg."
      },
      {
        naam: "Gallo-Romeins Museum",
        beschrijving: "Modern museum dat de rijke Romeinse geschiedenis van de oudste stad van België toont."
      },
      {
        naam: "Grote Markt",
        beschrijving: "Historische marktplaats omringd door prachtige historische gebouwen."
      }
    ]
  },
  {
    slug: "riemst",
    naam: "Riemst",
    gemeente: "Riemst",
    intro: "MMT Projects voert bouwprojecten uit in Riemst, een gemeente aan de Nederlandse en Duitse grens. De internationale ligging en het landelijke karakter maken elk project uniek.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Jekerdal",
        beschrijving: "Prachtig natuurgebied langs de Jeker met wandelpaden en natuurbeleving."
      },
      {
        naam: "Vroenhof",
        beschrijving: "Historisch domein met kasteel en park, gelegen in een groene omgeving."
      }
    ]
  },
  {
    slug: "lanaken",
    naam: "Lanaken",
    gemeente: "Lanaken",
    intro: "In Lanaken realiseert MMT Projects diverse bouwwerken. Deze grensgemeente met Nederland biedt unieke kansen waar wij met onze ervaring graag gebruik van maken.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Pietersheim",
        beschrijving: "Groot recreatiedomein met zwemmogelijkheden en natuurgebieden voor het hele gezin."
      },
      {
        naam: "Uikhoven",
        beschrijving: "Pittoresk dorpje aan de Maas met historische charme en prachtige natuur."
      }
    ]
  },
  {
    slug: "maasmechelen",
    naam: "Maasmechelen",
    gemeente: "Maasmechelen",
    intro: "MMT Projects werkt in Maasmechelen, bekend om het Nationaal Park Hoge Kempen en Maasmechelen Village. Deze diverse gemeente biedt uitdagende projecten in verschillende omgevingen.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Maasmechelen Village",
        beschrijving: "Luxe outlet shopping center dat bezoekers van over de hele wereld trekt."
      },
      {
        naam: "Nationaal Park Hoge Kempen",
        beschrijving: "België's enige nationale park met unieke heidevegetatie en natuurbeleving."
      }
    ]
  },
  {
    slug: "dilsen-stokkem",
    naam: "Dilsen-Stokkem",
    gemeente: "Dilsen-Stokkem",
    intro: "MMT Projects voert bouwwerken uit in Dilsen-Stokkem, een gemeente aan de Nederlandse grens. De ligging aan de Maas en het groene karakter vragen om zorgvuldige planning.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Maasplassen",
        beschrijving: "Voormalige grindgroeven getransformeerd tot recreatiegebied met zwem- en watersportmogelijkheden."
      },
      {
        naam: "Dilserbos",
        beschrijving: "Uitgestrekt bosgebied perfect voor wandelingen en natuurbeleving."
      }
    ]
  },
  {
    slug: "as",
    naam: "As",
    gemeente: "As",
    intro: "In As realiseert MMT Projects bouwprojecten in deze kleinschalige gemeente. Het dorpse karakter en de nabijheid van natuurgebieden maken elk project bijzonder.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "De Wijers",
        beschrijving: "Uniek natuurgebied met meer dan 1000 vijvers en poelen, paradijs voor vogels en natuurliefhebbers."
      },
      {
        naam: "Molenvijver",
        beschrijving: "Pittoreske vijver in het centrum van As, perfecte plek voor ontspanning."
      }
    ]
  },
  {
    slug: "zutendaal",
    naam: "Zutendaal",
    gemeente: "Zutendaal",
    intro: "MMT Projects werkt in Zutendaal, een gemeente tussen Genk en de Nederlandse grens. Het groene karakter en de rustige woonomgeving vragen om een respectvolle aanpak.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Connecterra",
        beschrijving: "Duurzaam bedrijvenpark dat toekomstgericht ondernemen centraal stelt."
      },
      {
        naam: "Kempense natuur",
        beschrijving: "Typische Kempense landschappen met bossen en heidegebieden."
      }
    ]
  },
  {
    slug: "oudsbergen",
    naam: "Oudsbergen",
    gemeente: "Oudsbergen",
    intro: "MMT Projects voert bouwprojecten uit in Oudsbergen, een fusiegemeente in Noord-Limburg. De verschillende deelgemeenten bieden elk hun eigen charme en uitdagingen.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Bosland",
        beschrijving: "Grootste aaneengesloten bosgebied van Vlaanderen met eindeloze wandel- en fietsmogelijkheden."
      },
      {
        naam: "Domein Hengelhoef",
        beschrijving: "Recreatiedomein met golf en natuurbeleving in een groene omgeving."
      }
    ]
  },
  {
    slug: "bocholt",
    naam: "Bocholt",
    gemeente: "Bocholt",
    intro: "In Bocholt realiseert MMT Projects diverse bouwwerken. Deze gemeente aan de Nederlandse grens biedt een unieke mix van natuur en moderne voorzieningen.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "De Kluis",
        beschrijving: "Natuurreservaat met bossen, vennen en heidegebieden, ideaal voor natuurwandelingen."
      },
      {
        naam: "Recreatiecentrum De Spie",
        beschrijving: "Sportief recreatiecentrum met zwembad en diverse faciliteiten."
      }
    ]
  },
  {
    slug: "bree",
    naam: "Bree",
    gemeente: "Bree",
    intro: "MMT Projects werkt in Bree, een gemeente met een rijke geschiedenis en moderne voorzieningen. Van het historische centrum tot nieuwe wijken, wij werken overal met dezelfde zorg.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Stadhuis van Bree",
        beschrijving: "Historisch stadhuis dat het administratieve hart van de gemeente vormt."
      },
      {
        naam: "De Luysen",
        beschrijving: "Natuurgebied met wandelpaden en groene ruimtes voor ontspanning."
      }
    ]
  },
  {
    slug: "kinrooi",
    naam: "Kinrooi",
    gemeente: "Kinrooi",
    intro: "MMT Projects voert bouwprojecten uit in Kinrooi, een gemeente aan de Maas. De ligging aan het water en het groene karakter maken elk project uniek en uitdagend.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Maasplassen Kinrooi",
        beschrijving: "Recreatiegebied met watersport en strandvermaak aan de oevers van de Maas."
      },
      {
        naam: "Nationaal Park Hoge Kempen",
        beschrijving: "Deel van het nationale park met unieke natuurbeleving en heidevegetatie."
      }
    ]
  },
  {
    slug: "lommel",
    naam: "Lommel",
    gemeente: "Lommel",
    intro: "In Lommel realiseert MMT Projects bouwwerken in deze zandstreek van Limburg. Het unieke landschap met bossen en heide vraagt om een aangepaste bouwbenadering.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Sahara van Lommel",
        beschrijving: "Unieke zandverstuiving die doet denken aan een woestijnlandschap midden in Vlaanderen."
      },
      {
        naam: "Bosland",
        beschrijving: "Uitgestrekte bossen die deel uitmaken van het grootste bosgebied van Vlaanderen."
      }
    ]
  },
  {
    slug: "hechtel-eksel",
    naam: "Hechtel-Eksel",
    gemeente: "Hechtel-Eksel",
    intro: "MMT Projects werkt in Hechtel-Eksel, een gemeente in de Limburgse Kempen. Het natuurrijke karakter en de militaire geschiedenis maken deze gemeente bijzonder.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Domein Pijnven",
        beschrijving: "Natuurgebied met vennen en heide, perfect voor natuurwandelingen en rust."
      },
      {
        naam: "Kamp van Beverlo",
        beschrijving: "Militair domein dat bepalend is voor het karakter van de gemeente."
      }
    ]
  },
  {
    slug: "hamont-achel",
    naam: "Hamont-Achel",
    gemeente: "Hamont-Achel",
    intro: "MMT Projects voert bouwprojecten uit in Hamont-Achel, een grensgemende met Nederland. De trappistische traditie en natuurgebieden geven deze gemeente een uniek karakter.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Trappist Achel",
        beschrijving: "Authentieke Trappist brouwerij met eeuwenoude traditie en klostergeschiedenis."
      },
      {
        naam: "Bosgebieden Achel",
        beschrijving: "Uitgestrekte bossen die deel uitmaken van grensoverschrijdende natuurgebieden."
      }
    ]
  },
  {
    slug: "halen",
    naam: "Halen",
    gemeente: "Halen",
    intro: "In Halen realiseert MMT Projects diverse bouwwerken. Deze gemeente tussen Hasselt en Diest biedt een centrale ligging met uitstekende bereikbaarheid.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Schulensmeer",
        beschrijving: "Recreatiemeer met zwemmogelijkheden en wateractiviteiten voor het hele gezin."
      },
      {
        naam: "Demer vallei",
        beschrijving: "Natuurgebied langs de rivier de Demer met wandel- en fietspaden."
      }
    ]
  },
  {
    slug: "gingelom",
    naam: "Gingelom",
    gemeente: "Gingelom",
    intro: "MMT Projects werkt in Gingelom, een gemeente in het hart van Haspengouw. Het landelijke karakter en de fruitteelt bepalen het unieke karakter van deze streek.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Fruitboomgaarden",
        beschrijving: "Karakteristieke boomgaarden die in de lente een prachtig bloesemspektakel bieden."
      },
      {
        naam: "Haspengouwse glooiingen",
        beschrijving: "Zachte heuvels en open landschappen typisch voor deze vruchtbare streek."
      }
    ]
  },
  {
    slug: "heers",
    naam: "Heers",
    gemeente: "Heers",
    intro: "MMT Projects voert bouwprojecten uit in Heers, een gemeente in Haspengouw bekend om zijn landelijke rust. Wij werken met respect voor dit authentieke karakter.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Kerk van Heers",
        beschrijving: "Karakteristieke dorpskerk die centraal staat in het gemeenschapsleven."
      },
      {
        naam: "Landbouwlandschap",
        beschrijving: "Uitgestrekte velden en boomgaarden die het levensrythme van de gemeente bepalen."
      }
    ]
  },
  {
    slug: "sint-truiden",
    naam: "Sint-Truiden",
    gemeente: "Sint-Truiden",
    intro: "MMT Projects is actief in Sint-Truiden, de fruitstad van België. Deze stad in Haspengouw combineert een rijke geschiedenis met moderne voorzieningen waar wij met vakmanschap aan de slag gaan.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Grote Markt Sint-Truiden",
        beschrijving: "Een van de grootste marktpleinen van België, omringd door historische gebouwen."
      },
      {
        naam: "Fruitmuur",
        beschrijving: "Kunstwerk dat symbool staat voor Sint-Truiden als fruitstad van België."
      },
      {
        naam: "Abdij van Sint-Truiden",
        beschrijving: "Historische abdijsite die de religieuze geschiedenis van de stad vertelt."
      }
    ]
  },
  {
    slug: "hoeselt",
    naam: "Hoeselt",
    gemeente: "Hoeselt",
    intro: "In Hoeselt voert MMT Projects bouwwerken uit in deze gemeente tussen Hasselt en Tongeren. Het centrale karakter en de goede bereikbaarheid maken werken hier zeer aangenaam.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Kasteel van Hoeselt",
        beschrijving: "Historisch kasteel omgeven door een prachtig domein en park."
      },
      {
        naam: "Centrale ligging",
        beschrijving: "Strategische ligging tussen belangrijke Limburgse steden."
      }
    ]
  },
  {
    slug: "maaseik",
    naam: "Maaseik",
    gemeente: "Maaseik",
    intro: "MMT Projects werkt in Maaseik, een historische stad aan de Maas. Het rijke erfgoed en de grensligging met Nederland maken elk bouwproject uniek en uitdagend.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Historisch centrum Maaseik",
        beschrijving: "Prachtig bewaard gebleven historisch stadscentrum met authentieke architectuur."
      },
      {
        naam: "Maas",
        beschrijving: "De rivier die het karakter van de stad bepaalt en internationale verbindingen mogelijk maakt."
      }
    ]
  },
  {
    slug: "voeren",
    naam: "Voeren",
    gemeente: "Voeren",
    intro: "MMT Projects voert bouwprojecten uit in Voeren, de enige Nederlandstalige gemeente in provincie Luik. Deze unieke ligging vraagt om bijzondere aandacht en lokale kennis.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Voerstreek",
        beschrijving: "Uniek heuvellandschap met een bijzondere flora en fauna."
      },
      {
        naam: "Grensligging",
        beschrijving: "Bijzondere ligging op de grens van drie landen: België, Nederland en Duitsland."
      }
    ]
  },
  {
    slug: "kuringen",
    naam: "Kuringen",
    gemeente: "Hasselt",
    intro: "MMT Projects werkt in Kuringen, een deelgemeente van Hasselt. Deze wijk combineert de rust van een dorp met de voorzieningen van de hoofdstad van Limburg.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Kerk van Kuringen",
        beschrijving: "Karakteristieke dorpskerk die het centrum van deze Hasseltse deelgemeente vormt."
      },
      {
        naam: "Dorpskarakter",
        beschrijving: "Authentiek dorpsgevoel binnen de stad Hasselt met eigen identiteit."
      }
    ]
  },
  {
    slug: "kermt",
    naam: "Kermt",
    gemeente: "Hasselt",
    intro: "In Kermt realiseert MMT Projects bouwprojecten in deze groene deelgemeente van Hasselt. Het landelijke karakter binnen de stadsgrenzen maakt elk project bijzonder.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Landelijk karakter",
        beschrijving: "Groene, landelijke uitstraling binnen de stadsgrenzen van Hasselt."
      },
      {
        naam: "Bermtorensite",
        beschrijving: "Unieke site met historische waarde in het hart van Kermt."
      }
    ]
  },
  {
    slug: "stokrooie",
    naam: "Stokrooie",
    gemeente: "Hasselt",
    intro: "MMT Projects voert bouwwerken uit in Stokrooie, een deelgemeente van Hasselt aan de snelweg. De strategische ligging biedt unieke mogelijkheden voor diverse projecten.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Strategische ligging",
        beschrijving: "Uitstekende bereikbaarheid dankzij de ligging aan belangrijke verkeersaders."
      },
      {
        naam: "Dorpscentrum",
        beschrijving: "Gezellig dorpscentrum met eigen identiteit binnen Hasselt."
      }
    ]
  },
  {
    slug: "stevoort",
    naam: "Stevoort",
    gemeente: "Hasselt",
    intro: "In Stevoort werkt MMT Projects aan diverse bouwprojecten in deze historische deelgemeente van Hasselt. Het rijke verleden vraagt om een zorgvuldige aanpak.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Historische kern",
        beschrijving: "Oude dorpskern met karakteristieke gebouwen en historische waarde."
      },
      {
        naam: "Kasteel van Stevoort",
        beschrijving: "Historisch kasteel dat symbool staat voor het rijke verleden van de deelgemeente."
      }
    ]
  },
  {
    slug: "spalbeek",
    naam: "Spalbeek",
    gemeente: "Hasselt",
    intro: "MMT Projects realiseert projecten in Spalbeek, een deelgemeente van Hasselt met een sterk landelijk karakter. Wij werken met respect voor deze groene omgeving.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Landelijke rust",
        beschrijving: "Groene, rustige omgeving die een oase van rust vormt binnen Hasselt."
      },
      {
        naam: "Landbouwgronden",
        beschrijving: "Uitgestrekte velden die het agrarische karakter van de deelgemeente bepalen."
      }
    ]
  },
  {
    slug: "runkst",
    naam: "Runkst",
    gemeente: "Hasselt",
    intro: "MMT Projects werkt in Runkst, een kleine deelgemeente van Hasselt. Het intieme karakter en de nabijheid van natuurgebieden maken elk project persoonlijk.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Kleine gemeenschap",
        beschrijving: "Hechte dorpsgemeenschap met een sterke onderlinge verbondenheid."
      },
      {
        naam: "Natuurlijke omgeving",
        beschrijving: "Groene omgeving met nabijheid van bossen en natuurgebieden."
      }
    ]
  },
  {
    slug: "kiewit",
    naam: "Kiewit",
    gemeente: "Hasselt",
    intro: "In Kiewit voert MMT Projects bouwprojecten uit in deze deelgemeente van Hasselt. De mix van woonwijken en groene zones biedt diverse bouwmogelijkheden.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Woonwijken",
        beschrijving: "Moderne woonwijken die comfort en leefbaarheid combineren."
      },
      {
        naam: "Groengebieden",
        beschrijving: "Ruime groenzones die zorgen voor een aangename woonomgeving."
      }
    ]
  },
  {
    slug: "sint-lambrechts-herk",
    naam: "Sint-Lambrechts-Herk",
    gemeente: "Hasselt",
    intro: "MMT Projects realiseert projecten in Sint-Lambrechts-Herk, een deelgemeente van Hasselt. Het historische karakter en de centrale ligging maken werken hier bijzonder.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Historische kerk",
        beschrijving: "Karakteristieke kerk die naamgever is van deze Hasseltse deelgemeente."
      },
      {
        naam: "Centrale ligging",
        beschrijving: "Strategische ligging binnen de stad Hasselt met goede verbindingen."
      }
    ]
  },
  {
    slug: "godsheide",
    naam: "Godsheide",
    gemeente: "Hasselt",
    intro: "MMT Projects werkt in Godsheide, een moderne wijk van Hasselt. De eigentijdse architectuur en stedelijke voorzieningen vragen om een moderne bouwbenadering.",
    provincie: "Limburg",
    landmarks: [
      {
        naam: "Moderne wijk",
        beschrijving: "Eigentijdse woonwijk met moderne voorzieningen en architectuur."
      },
      {
        naam: "Stedelijke voorzieningen",
        beschrijving: "Uitstekende voorzieningen en verbindingen binnen de stad Hasselt."
      }
    ]
  }
];

export const getServiceAreaBySlug = (slug: string): ServiceArea | undefined => {
  return serviceAreas.find(area => area.slug === slug);
};

export const getPopularServiceAreas = (): ServiceArea[] => {
  const popularSlugs = ['hasselt', 'genk', 'diepenbeek', 'zonhoven', 'heusden-zolder', 'houthalen-helchteren', 'beringen', 'bilzen', 'tongeren', 'sint-truiden', 'lommel', 'maasmechelen'];
  return serviceAreas.filter(area => popularSlugs.includes(area.slug));
};
