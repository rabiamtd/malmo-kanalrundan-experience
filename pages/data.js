// example data for sites
var sites = [
    {
        id: 1,
        name: "Lilla Varvsgatan",
        narrativeShown: false,
        lat: 55.613782925561736,
        lng: 12.985121326984581,
        radius: 30,
    },
    {
        id: 2,
        name: "Varvsgatan2",
        narrativeShown: false,
        lat: 55.613782925561736,
        lng: 12.985121326984581,
        radius: 30,
    },
    {
        id: 3,
        name: "High Court",
        narrativeShown: false,
        lat: 55.6060555571401,
        lng: 12.991464828051392,
        radius: 30,
    },
    {
        id: 4,
        name: "Malmöhus slott",
        narrativeShown: false,
        lat: 55.6049024047382,
        lng: 12.987601068527777,
        radius: 30,
    },
    {
        id: 5,
        name: "Kommendant Huset",
        narrativeShown: false,
        lat: 55.60556634537834,
        lng: 12.985016695512146,
        radius: 30,
    },
    {
        id: 6,
        name: "Slottsträdgårdens Kafé",
        narrativeShown: false,
        lat: 55.60390817772872,
        lng: 12.989221457671894,
        radius: 30,
    },
    {
        id: 7,
        name: "Slottsmöllan",
        narrativeShown: false,
        lat: 55.60318043118816,
        lng: 12.98609459736361,
        radius: 30,
    },
    {
        id: 8,
        name: "Stadsbiblioteket",
        narrativeShown: false,
        lat: 55.60073551768778,
        lng: 12.993979093660101,
        radius: 30,
    },
    {
        id: 9,
        name: "Moderna Museet",
        narrativeShown: false,
        lat: 55.6049839790943,
        lng: 13.009312424340063,
        radius: 30,
    },
    {
        id: 10,
        name: "World Maritime University",
        narrativeShown: false,
        lat: 55.60794709788444,
        lng: 12.996497039692025,
        radius: 30,
    },
    {
        id: 11,
        name: "Niagara",
        narrativeShown: false,
        lat: 55.60894194054723,
        lng: 12.99424112698616,
        radius: 30,
    }
];

// store whether the narrative has been shown for each site
const siteNarrativesAndQuestions = [
    {
        id: 1,
        narrative: {
            narrativeHeadline: "headline",
            siteNarrative: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere libero pretium, suscipit enim non, convallis libero. Morbi ac massa luctus, iaculis sapien sit amet, pharetra lectus. Maecenas semper magna ac velit sodales, eget commodo velit mollis. Proin sed felis ac tortor blandit finibus quis vitae odio. Donec quis semper nulla. Maecenas sem ante, tempus pharetra hendrerit eu, iaculis sit amet dolor. In pulvinar at ligula sed facilisis. Nam nec augue eu felis facilisis interdum vitae sit amet dolor. Sed in enim consectetur, laoreet quam id, ultrices dolor."
        },
        tipsrundaQuestion: {
            img: "images/varvsgatan.png",
            question: "Vilket århundrade omgavs Malmö av en vattenfylld strandmur?",
            options: ["1200-talet", "1300-talet", "1400-talet"]
        }
    },
    {
        id: 2,
        narrative: {
            narrativeHeadline: "headline",
            siteNarrative: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere libero pretium, suscipit enim non, convallis libero. Morbi ac massa luctus, iaculis sapien sit amet, pharetra lectus. Maecenas semper magna ac velit sodales, eget commodo velit mollis. Proin sed felis ac tortor blandit finibus quis vitae odio. Donec quis semper nulla. Maecenas sem ante, tempus pharetra hendrerit eu, iaculis sit amet dolor. In pulvinar at ligula sed facilisis. Nam nec augue eu felis facilisis interdum vitae sit amet dolor. Sed in enim consectetur, laoreet quam id, ultrices dolor."
        },
        tipsrundaQuestion: {
            img: "images/varvsgatan.png",
            question: "Vilket århundrade omgavs Malmö av en vattenfylld strandmur?",
            options: ["1200-talet", "1300-talet", "1400-talet"]
        }
    },
    {
        id: 3,
        narrative: {
            narrativeHeadline: "headline",
            siteNarrative: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere libero pretium, suscipit enim non, convallis libero. Morbi ac massa luctus, iaculis sapien sit amet, pharetra lectus. Maecenas semper magna ac velit sodales, eget commodo velit mollis. Proin sed felis ac tortor blandit finibus quis vitae odio. Donec quis semper nulla. Maecenas sem ante, tempus pharetra hendrerit eu, iaculis sit amet dolor. In pulvinar at ligula sed facilisis. Nam nec augue eu felis facilisis interdum vitae sit amet dolor. Sed in enim consectetur, laoreet quam id, ultrices dolor."
        },
        tipsrundaQuestion: {
            img: "images/highcourt.png",
            question: "Vilket århundrade omgavs Malmö av en vattenfylld strandmur?",
            options: ["1200-talet", "1300-talet", "1400-talet"]
        }
    },
    {
        id: 4,
        narrative: {
            narrativeHeadline: "headline",
            siteNarrative: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere libero pretium, suscipit enim non, convallis libero. Morbi ac massa luctus, iaculis sapien sit amet, pharetra lectus. Maecenas semper magna ac velit sodales, eget commodo velit mollis. Proin sed felis ac tortor blandit finibus quis vitae odio. Donec quis semper nulla. Maecenas sem ante, tempus pharetra hendrerit eu, iaculis sit amet dolor. In pulvinar at ligula sed facilisis. Nam nec augue eu felis facilisis interdum vitae sit amet dolor. Sed in enim consectetur, laoreet quam id, ultrices dolor."
        },
        tipsrundaQuestion: {
            img: "",
            question: "Vilket århundrade omgavs Malmö av en vattenfylld strandmur?",
            options: ["1200-talet", "1300-talet", "1400-talet"]
        }
    },
    {
        id: 5,
        narrative: {
            narrativeHeadline: "headline",
            siteNarrative: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere libero pretium, suscipit enim non, convallis libero. Morbi ac massa luctus, iaculis sapien sit amet, pharetra lectus. Maecenas semper magna ac velit sodales, eget commodo velit mollis. Proin sed felis ac tortor blandit finibus quis vitae odio. Donec quis semper nulla. Maecenas sem ante, tempus pharetra hendrerit eu, iaculis sit amet dolor. In pulvinar at ligula sed facilisis. Nam nec augue eu felis facilisis interdum vitae sit amet dolor. Sed in enim consectetur, laoreet quam id, ultrices dolor."
        },
        tipsrundaQuestion: {
            img: "",
            question: "Vilket århundrade omgavs Malmö av en vattenfylld strandmur?",
            options: ["1200-talet", "1300-talet", "1400-talet"]
        }
    },
    {
        id: 6,
        narrative: {
            narrativeHeadline: "headline",
            siteNarrative: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere libero pretium, suscipit enim non, convallis libero. Morbi ac massa luctus, iaculis sapien sit amet, pharetra lectus. Maecenas semper magna ac velit sodales, eget commodo velit mollis. Proin sed felis ac tortor blandit finibus quis vitae odio. Donec quis semper nulla. Maecenas sem ante, tempus pharetra hendrerit eu, iaculis sit amet dolor. In pulvinar at ligula sed facilisis. Nam nec augue eu felis facilisis interdum vitae sit amet dolor. Sed in enim consectetur, laoreet quam id, ultrices dolor."
        },
        tipsrundaQuestion: {
            img: "",
            question: "Vilket århundrade omgavs Malmö av en vattenfylld strandmur?",
            options: ["1200-talet", "1300-talet", "1400-talet"]
        }
    },
    {
        id: 7,
        narrative: {
            narrativeHeadline: "headline",
            siteNarrative: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere libero pretium, suscipit enim non, convallis libero. Morbi ac massa luctus, iaculis sapien sit amet, pharetra lectus. Maecenas semper magna ac velit sodales, eget commodo velit mollis. Proin sed felis ac tortor blandit finibus quis vitae odio. Donec quis semper nulla. Maecenas sem ante, tempus pharetra hendrerit eu, iaculis sit amet dolor. In pulvinar at ligula sed facilisis. Nam nec augue eu felis facilisis interdum vitae sit amet dolor. Sed in enim consectetur, laoreet quam id, ultrices dolor."
        },
        tipsrundaQuestion: {
            img: "",
            question: "Vilket århundrade omgavs Malmö av en vattenfylld strandmur?",
            options: ["1200-talet", "1300-talet", "1400-talet"]
        }
    },
    {
        id: 8,
        narrative: {
            narrativeHeadline: "headline",
            siteNarrative: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere libero pretium, suscipit enim non, convallis libero. Morbi ac massa luctus, iaculis sapien sit amet, pharetra lectus. Maecenas semper magna ac velit sodales, eget commodo velit mollis. Proin sed felis ac tortor blandit finibus quis vitae odio. Donec quis semper nulla. Maecenas sem ante, tempus pharetra hendrerit eu, iaculis sit amet dolor. In pulvinar at ligula sed facilisis. Nam nec augue eu felis facilisis interdum vitae sit amet dolor. Sed in enim consectetur, laoreet quam id, ultrices dolor."
        },
        tipsrundaQuestion: {
            img: "",
            question: "Vilket århundrade omgavs Malmö av en vattenfylld strandmur?",
            options: ["1200-talet", "1300-talet", "1400-talet"]
        }
    },
    {
        id: 9,
        narrative: {
            narrativeHeadline: "headline",
            siteNarrative: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere libero pretium, suscipit enim non, convallis libero. Morbi ac massa luctus, iaculis sapien sit amet, pharetra lectus. Maecenas semper magna ac velit sodales, eget commodo velit mollis. Proin sed felis ac tortor blandit finibus quis vitae odio. Donec quis semper nulla. Maecenas sem ante, tempus pharetra hendrerit eu, iaculis sit amet dolor. In pulvinar at ligula sed facilisis. Nam nec augue eu felis facilisis interdum vitae sit amet dolor. Sed in enim consectetur, laoreet quam id, ultrices dolor."
        },
        tipsrundaQuestion: {
            img: "",
            question: "Vilket århundrade omgavs Malmö av en vattenfylld strandmur?",
            options: ["1200-talet", "1300-talet", "1400-talet"]
        }
    },
    {
        id: 10,
        narrative: {
            narrativeHeadline: "headline",
            siteNarrative: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere libero pretium, suscipit enim non, convallis libero. Morbi ac massa luctus, iaculis sapien sit amet, pharetra lectus. Maecenas semper magna ac velit sodales, eget commodo velit mollis. Proin sed felis ac tortor blandit finibus quis vitae odio. Donec quis semper nulla. Maecenas sem ante, tempus pharetra hendrerit eu, iaculis sit amet dolor. In pulvinar at ligula sed facilisis. Nam nec augue eu felis facilisis interdum vitae sit amet dolor. Sed in enim consectetur, laoreet quam id, ultrices dolor."
        },
        tipsrundaQuestion: {
            img: "",
            question: "Vilket århundrade omgavs Malmö av en vattenfylld strandmur?",
            options: ["1200-talet", "1300-talet", "1400-talet"]
        }
    },
    {
        id: 11,
        narrative: {
            narrativeHeadline: "headline",
            siteNarrative: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere libero pretium, suscipit enim non, convallis libero. Morbi ac massa luctus, iaculis sapien sit amet, pharetra lectus. Maecenas semper magna ac velit sodales, eget commodo velit mollis. Proin sed felis ac tortor blandit finibus quis vitae odio. Donec quis semper nulla. Maecenas sem ante, tempus pharetra hendrerit eu, iaculis sit amet dolor. In pulvinar at ligula sed facilisis. Nam nec augue eu felis facilisis interdum vitae sit amet dolor. Sed in enim consectetur, laoreet quam id, ultrices dolor."
        },
        tipsrundaQuestion: {
            img: "",
            question: "Vilket århundrade omgavs Malmö av en vattenfylld strandmur?",
            options: ["1200-talet", "1300-talet", "1400-talet"]
        }
    },
];