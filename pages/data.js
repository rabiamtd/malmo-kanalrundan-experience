// example data for sites
var sites = [
    {
        id: 1,
        name: "High Court",
        narrativeShown: false,
        lat: 55.6060555571401,
        lng: 12.991464828051392,
        radius: 70,
    },
    {
        id: 2,
        name: "Malmöhus slott",
        narrativeShown: false,
        lat: 55.6049024047382,
        lng: 12.987601068527777,
        radius: 170,
    },
    {
        id: 3,
        name: "Kommendanthuset",
        narrativeShown: false,
        lat: 55.60556634537834,
        lng: 12.985016695512146,
        radius: 120,
    },
    {
        id: 4,
        name: "Slottsträdgårdens Kafé",
        narrativeShown: false,
        lat: 55.60390817772872,
        lng: 12.989221457671894,
        radius: 95,
    },
    {
        id: 5,
        name: "Slottsmöllan",
        narrativeShown: false,
        lat: 55.60318043118816,
        lng: 12.98609459736361,
        radius: 100,
    },
    {
        id: 6,
        name: "Stadsbiblioteket",
        narrativeShown: false,
        lat: 55.60073551768778,
        lng: 12.993979093660101,
        radius: 160,
    },
    {
        id: 7,
        name: "Moderna Museet",
        narrativeShown: false,
        lat: 55.6049839790943,
        lng: 13.009312424340063,
        radius: 140,
    },
    {
        id: 8,
        name: "World Maritime University",
        narrativeShown: false,
        lat: 55.60794709788444,
        lng: 12.996497039692025,
        radius: 70,
    },
];

// store whether the narrative has been shown for each site
const siteNarrativesAndQuestions = [
    {
        id: 1,
        narrative: {
            narrativeHeadline: "Det börjar i medeltiden...",
            siteNarrative: "Den ursprungligt anlagda kyrkbyn Malmö omgavs redan under 1300-talet av ett vattenfyllt dike. Detta tros dock mest ha haft en juridisk funktion och bjöd inget egentligt skydd för bebyggelsen innanför diket. I början av 1400-talet och ungefär hundra år framöver byggdes en strandmur som försvar ut mot kusten, bland annat efter tillslag av sjörövare och pirater. Borgmästare Hans Mikkelsen var den som på 1510-talet kompletterade stadens försvar med att låta gräva de första vallgravarna in mot land. In mot fastlandet låg dessutom Rörsjöarna, vilket gjorde att Malmö, eller Elbogen som staden kallades i Tyskland på den tiden var ordentligt skyddad mot omvärlden, kringgärdad av vatten både mot Öresund och in mot fastlandet.",
        },
        tipsrundaQuestion: {
            question: "Vad används Hovrätten till idag?",
            options: ["Kontorslokaler och konferensanläggning", "Bostäder", "Skola"]
        }
    },
    {
        id: 2,
        narrative: {
            narrativeHeadline: "1600-talet: Malmö blir svenskt",
            siteNarrative: "Detta gjorde den till landskapets bäst befästa stad, men under 1600-talets strider mellan Sverige och Danmark blev det tydligt att stadens försvar behövde förstärkas. Den danske kungen lät ta fram ritningar på en storstilad utbyggnad med bastioner, raveliner och palissader. Endast ett fåtal bastioner hann uppföras innan Malmö slutgiltigt blev svenskt i och med freden i Roskilde 1658.",
        },
        tipsrundaQuestion: {
            question: "Vilket århundrade gav den danske kungen Christian III Malmöhus slott dess nuvarande utseende?",
            options: ["1500-talet", "1600-talet", "1700-talet"]
        }
    },
    {
        id: 3,
        narrative: {
            narrativeHeadline: "Erik Dahlbergs planer",
            siteNarrative: "Denna nya statstillhörighet var naturligtvis viktig att befästa i staden, och den dåvarande kungen gav Erik Dahlberg i uppdrag att utarbeta en plan för Malmös fasta försvar. Hans ritningar påminde i stort sett om de tidigare danska planerna, och inte heller denna gång hann man bygga färdigt innan det var dags för krig igen 1675. Dock hade man hunnit uppföra fyra bastioner innan danskarna började sin belägring av staden i ett försök att återta den. Det försöket misslyckades dock och 1684 lade Erik Dahlberg fram ritningar på ett än mer avancerat befästningsverk, som kom att byggas under de närmsta 13 åren.",
        },
        tipsrundaQuestion: {
            question: "Vem gav ordern om att bygga Kommendanthuset år 1786?",
            options: ["Kung Gustav III", "Drottning Kristina", "Kung Karl XIV Johan"]
        }
    },
    {
        id: 4,
        narrative: {
            narrativeHeadline: "Upplysningstiden: från fästning till promenader",
            siteNarrative: "Freden i Nystad 1721 innebar att Sverige förlorade sin stormaktsposition och man fick därigenom ett annat försvarsmässigt läge att utgå ifrån. Fästningen i Malmö framstod med nyare krigsföringsteknik inte längre som lika viktig och 1804 beslutade Gustaf IV Adolf att den skulle rivas. Vallmassorna störtades ner i vattnet och frigjorde stora ytor för staden att expandera på. Utanför detta anlades den nuvarande kanalen, delvis formad av rester av den tidigare yttre vallgraven. Massorna som grävdes ur för den nya kanalen användes för att fylla igen Rörsjöområdet, och längs med kanalen planterades träd.",
        },
        tipsrundaQuestion: {
            question: "Vad kan du förvänta dig att hitta vid Slottsträdgårdens Kafé idag?",
            options: ["Ett inrett växthus för fika", "Ett litet historiskt museum med vapenutställningar", "En antikvitets- och bokhandel"]
        }
    },
    {
        id: 5,
        narrative: {
            narrativeHeadline: "Upprustning och nya broar",
            siteNarrative: "Under den senare hälften av 1800-talet byggdes hamnen ut och kanalens koppling ut i Östersjön försvagades. När stadsingenjör Georg Gustafsson fick i uppdrag att utarbeta en plan för Rörsjöområdet fick han även uppgiften att förbättra vattencirkulationen i kanalen, vars stillastående vatten var förorenat, luktade illa och spred sjukdomar. Kanalen breddades och fler broar tillkom. Innan hade broarna varit färre och rörliga, för att kunna släppa igenom båtar. Kanalkanten var inte stenklädd och inga räcken fanns. Under den här tiden var promenaden en uppskattad och mycket social form av rekreation och den så kallade Uppsalapromenaden längs med kanalen var omåttligt populär.",
        },
        tipsrundaQuestion: {
            question: "Vilken händelse ledde till att den nuvarande Slottsmöllan byggdes?",
            options: ["Den tidigare möllan brann ner", "Den tidigare möllan kollapsade av ålder", "Den tidigare möllan flyttades till en annan plats"]
        }
    },
    {
        id: 6,
        narrative: {
            narrativeHeadline: "Industrialiseringen: hamnen byggs ut",
            siteNarrative: "Från 1800-talets börjar och drygt hundra år framöver fylldes Malmös hamn ut med stora mängder landmassa. Detta gjorde att Malmö centrum inte längre låg vid vattenfronten, utan vände sig mer inåt land, då hamnen dessutom till stor del var oåtkomlig för de som inte jobbade inom industrin. Kanalen fick nu en större särprägel som parklikt innerstadsvatten, trots att små båtar fortfarande kunde lägga till i det södra och inre kanalrummet",
        },
        tipsrundaQuestion: {
            question: "Vilken arkitekt var ansvarig för utformningen av den nya delen av Stadsbiblioteket, även känd som 'Ljusets Kalender?'",
            options: ["Henning Larsen", "John Smedberg", "Erik av Pommern"]
        }
    },
    {
        id: 7,
        narrative: {
            narrativeHeadline: "Det postindustriella återtåget till vattnet",
            siteNarrative: "I samband med Malmös omvandling från industristad till kunskapsstad runt millennieskiftet öppnades hamnen upp och många stora etableringar av offentliga platser har genomförts, vilket lett till att malmöborna kunnat återknyta kontakten till havet. Satsning på utbildning, ny teknologi och högprofilerad arkitektur har använts för att demonstrera stadens profil som nytänkande och framåtsträvande. Under den här perioden har inte mycket fokus legat på kanalen, som ju redan har sin plats i den etablerade stadsstrukturen, men det har inte hindrat malmöbor och besökare att uppskatta de kvaliteter detta urbana vattenrum besitter.",
        },
        tipsrundaQuestion: {
            question: "Vad användes den byggnad där Moderna Museet nu finns till tidigare?",
            options: ["Kraftverk", "Konserthus", "Biograf"]
        }
    },
    {
        id: 8,
        narrative: {
            narrativeHeadline: "Slutsats…",
            siteNarrative: "I stort sett hela kanalrummet klassas som fast fornlämning vilket fastställer att det är en kulturhistoriskt mycket viktig miljö som ska behandlas omsorgsfullt. Två tidslager bedöms vara särskilt viktiga för kanalrummets karaktär. 1600-talet då kanalen var en del av stadens fortifikation vilket idag är tydligast på bastionerna. 1800-talet då kanalen blev en plats för rekreation och promenader, något som fortfarande är tydligt vid Södra promenaden.",
        },
        tipsrundaQuestion: {
            question: "Vad är det mest omdiskuterade inslaget vid det gamla hamnkontoret, som sedan våren 2015 hyser World Maritime University?",
            options: ["Det nya tornet", "Den ursprungliga strukturen", "Byggnadens historiska betydelse"]
        }
    },
];