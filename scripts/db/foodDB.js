const fruits = {
  apple: {
    name: "Jabłko",
    image: "🍎",
    varieties: {
      Jonagold: {
        name: "Jonagold",
        sweetness: 7,
        acidity: 5,
        harvestSeason: "wrzesień-październik",
        size: "średnie",
      },
      Szampion: {
        name: "Szampion",
        sweetness: 8,
        acidity: 4,
        harvestSeason: "wrzesień",
        size: "średnie",
      },
      Ligol: {
        name: "Ligol",
        sweetness: 6,
        acidity: 6,
        harvestSeason: "październik",
        size: "duże",
      },
    },
  },
  pear: {
    name: "Gruszka",
    image: "🍐",
    varieties: {
      Konferencja: {
        name: "Konferencja",
        sweetness: 8,
        acidity: 3,
        harvestSeason: "wrzesień",
        size: "duże",
      },
      Lukasówka: {
        name: "Lukasówka",
        sweetness: 7,
        acidity: 4,
        harvestSeason: "październik",
        size: "duże",
      },
      Faworytka: {
        name: "Faworytka",
        sweetness: 6,
        acidity: 5,
        harvestSeason: "sierpień",
        size: "średnie",
      },
    },
  },
  cherry: {
    name: "Wiśnia",
    image: "🍒",
    varieties: {
      Łutówka: {
        name: "Łutówka",
        sweetness: 4,
        acidity: 7,
        harvestSeason: "lipiec-sierpień",
        size: "małe",
      },
      Nefris: {
        name: "Nefris",
        sweetness: 5,
        acidity: 6,
        harvestSeason: "lipiec",
        size: "małe",
      },
      Sabina: {
        name: "Sabina",
        sweetness: 5,
        acidity: 6,
        harvestSeason: "lipiec",
        size: "małe",
      },
    },
  },
  plum: {
    name: "Śliwka",
    image: "🍑",
    varieties: {
      "Węgierka Zwykła": {
        name: "Węgierka Zwykła",
        sweetness: 7,
        acidity: 5,
        harvestSeason: "wrzesień",
        size: "średnie",
      },
      "Renkloda Ulena": {
        name: "Renkloda Ulena",
        sweetness: 8,
        acidity: 3,
        harvestSeason: "sierpień-wrzesień",
        size: "duże",
      },
      Stanley: {
        name: "Stanley",
        sweetness: 7,
        acidity: 4,
        harvestSeason: "wrzesień",
        size: "średnie",
      },
    },
  },
  strawberry: {
    name: "Truskawka",
    image: "🍓",
    varieties: {
      Honeoye: {
        name: "Honeoye",
        sweetness: 7,
        acidity: 5,
        harvestSeason: "czerwiec",
        size: "małe",
      },
      Elsanta: {
        name: "Elsanta",
        sweetness: 6,
        acidity: 6,
        harvestSeason: "czerwiec-lipiec",
        size: "średnie",
      },
      Polka: {
        name: "Polka",
        sweetness: 8,
        acidity: 4,
        harvestSeason: "lipiec",
        size: "średnie",
      },
    },
  },
};

const vegetables = {
  carrot: {
    name: "Marchew",
    image: "🥕",
    varieties: {
      Koral: {
        name: "Koral",
        sweetness: 7,
        texture: "gładka",
        harvestSeason: "lipiec-wrzesień",
        size: "średnie",
      },
      Amsterdam: {
        name: "Amsterdam",
        sweetness: 6,
        texture: "gładka",
        harvestSeason: "maj-czerwiec",
        size: "małe",
      },
      Berlikumer: {
        name: "Berlikumer",
        sweetness: 8,
        texture: "gładka",
        harvestSeason: "sierpień-październik",
        size: "duże",
      },
    },
  },
  potato: {
    name: "Ziemniak",
    image: "🥔",
    varieties: {
      Irga: {
        name: "Irga",
        sweetness: 3,
        texture: "mączysta",
        harvestSeason: "lipiec-sierpień",
        size: "średnie",
      },
      Denar: {
        name: "Denar",
        sweetness: 4,
        texture: "delikatna",
        harvestSeason: "czerwiec",
        size: "średnie",
      },
      Lord: {
        name: "Lord",
        sweetness: 3,
        texture: "lekko mączysta",
        harvestSeason: "sierpień",
        size: "duże",
      },
    },
  },
  cabbage: {
    name: "Kapusta",
    image: "🥬",
    varieties: {
      "Biała Kamienna": {
        name: "Biała Kamienna",
        sweetness: 4,
        texture: "chrupiąca",
        harvestSeason: "lipiec-sierpień",
        size: "duże",
      },
      Amager: {
        name: "Amager",
        sweetness: 3,
        texture: "twarda",
        harvestSeason: "sierpień-październik",
        size: "duże",
      },
      "Glory of Enkhuizen": {
        name: "Glory of Enkhuizen",
        sweetness: 5,
        texture: "delikatna",
        harvestSeason: "czerwiec-lipiec",
        size: "średnie",
      },
    },
  },
  onion: {
    name: "Cebula",
    image: "🧅",
    varieties: {
      Wolska: {
        name: "Wolska",
        sweetness: 2,
        texture: "ostra",
        harvestSeason: "sierpień",
        size: "średnie",
      },
      Kutnowska: {
        name: "Kutnowska",
        sweetness: 3,
        texture: "delikatna",
        harvestSeason: "lipiec",
        size: "średnie",
      },
      Sochaczewska: {
        name: "Sochaczewska",
        sweetness: 4,
        texture: "średnia",
        harvestSeason: "wrzesień",
        size: "duże",
      },
    },
  },
  cucumber: {
    name: "Ogórek",
    image: "🥒",
    varieties: {
      Śremski: {
        name: "Śremski",
        sweetness: 2,
        texture: "chrupiąca",
        harvestSeason: "czerwiec-lipiec",
        size: "średnie",
      },
      Aladyn: {
        name: "Aladyn",
        sweetness: 3,
        texture: "soczysta",
        harvestSeason: "lipiec-sierpień",
        size: "średnie",
      },
      Polan: {
        name: "Polan",
        sweetness: 3,
        texture: "delikatna",
        harvestSeason: "lipiec-wrzesień",
        size: "duże",
      },
    },
  },
};

const cereals = {
  wheat: {
    name: "Pszenica",
    image: "🌾",
    varieties: {
      Brawura: {
        name: "Brawura",
        proteinContent: 11,
        hardness: "średnia",
        harvestSeason: "lipiec",
        size: "wysokie",
      },
      Gratka: {
        name: "Gratka",
        proteinContent: 10,
        hardness: "wysoka",
        harvestSeason: "czerwiec-lipiec",
        size: "średnie",
      },
      "KWS Koga": {
        name: "KWS Koga",
        proteinContent: 12,
        hardness: "wysoka",
        harvestSeason: "lipiec-sierpień",
        size: "wysokie",
      },
    },
  },
  rye: {
    name: "Żyto",
    image: "🌾",
    varieties: {
      "KWS Marmot": {
        name: "KWS Marmot",
        proteinContent: 8,
        resistance: "wysoka",
        harvestSeason: "lipiec-sierpień",
        size: "średnie",
      },
      Lenta: {
        name: "Lenta",
        proteinContent: 9,
        resistance: "średnia",
        harvestSeason: "czerwiec",
        size: "wysokie",
      },
      Danka: {
        name: "Danka",
        proteinContent: 7,
        resistance: "wysoka",
        harvestSeason: "sierpień",
        size: "wysokie",
      },
    },
  },
  barley: {
    name: "Jęczmień",
    image: "🌾",
    varieties: {
      Optic: {
        name: "Optic",
        proteinContent: 9,
        resistance: "średnia",
        harvestSeason: "czerwiec-lipiec",
        size: "średnie",
      },
      Seba: {
        name: "Seba",
        proteinContent: 10,
        resistance: "wysoka",
        harvestSeason: "lipiec",
        size: "wysokie",
      },
      Agri: {
        name: "Agri",
        proteinContent: 8,
        resistance: "wysoka",
        harvestSeason: "lipiec-sierpień",
        size: "średnie",
      },
    },
  },
  oats: {
    name: "Owies",
    image: "🌾",
    varieties: {
      Havena: {
        name: "Havena",
        proteinContent: 11,
        resistance: "średnia",
        harvestSeason: "lipiec",
        size: "wysokie",
      },
      Roland: {
        name: "Roland",
        proteinContent: 10,
        resistance: "wysoka",
        harvestSeason: "sierpień",
        size: "średnie",
      },
      Hybrida: {
        name: "Hybrida",
        proteinContent: 12,
        resistance: "średnia",
        harvestSeason: "lipiec",
        size: "wysokie",
      },
    },
  },
};

const legumes = {
  pea: {
    name: "Groch",
    image: "🌱",
    varieties: {
      Albin: {
        name: "Albin",
        proteinContent: 23,
        texture: "gładka",
        harvestSeason: "lipiec",
        size: "średnie",
      },
      Ambra: {
        name: "Ambra",
        proteinContent: 24,
        texture: "gładka",
        harvestSeason: "czerwiec-lipiec",
        size: "średnie",
      },
      Progres: {
        name: "Progres",
        proteinContent: 22,
        texture: "gładka",
        harvestSeason: "czerwiec",
        size: "średnie",
      },
    },
  },
  lentil: {
    name: "Soczewica",
    image: "🌱",
    varieties: {
      Bodi: {
        name: "Bodi",
        proteinContent: 25,
        texture: "średnia",
        harvestSeason: "wrzesień",
        size: "średnie",
      },
      Czerwony: {
        name: "Czerwony",
        proteinContent: 26,
        texture: "gładka",
        harvestSeason: "wrzesień",
        size: "małe",
      },
      Faworytka: {
        name: "Faworytka",
        proteinContent: 24,
        texture: "średnia",
        harvestSeason: "sierpień",
        size: "średnie",
      },
    },
  },
  chickpea: {
    name: "Ciecierzyca",
    image: "🌱",
    varieties: {
      Kabuli: {
        name: "Kabuli",
        proteinContent: 22,
        texture: "gładka",
        harvestSeason: "wrzesień",
        size: "średnie",
      },
      Desi: {
        name: "Desi",
        proteinContent: 24,
        texture: "grubsza",
        harvestSeason: "wrzesień",
        size: "małe",
      },
      Bengal: {
        name: "Bengal",
        proteinContent: 23,
        texture: "średnia",
        harvestSeason: "wrzesień",
        size: "średnie",
      },
    },
  },
  bean: {
    name: "Fasola",
    image: "🌱",
    varieties: {
      Pięciomorgowa: {
        name: "Pięciomorgowa",
        proteinContent: 20,
        texture: "grubsza",
        harvestSeason: "wrzesień",
        size: "średnie",
      },
      Czerwona: {
        name: "Czerwona",
        proteinContent: 22,
        texture: "gładka",
        harvestSeason: "sierpień",
        size: "średnie",
      },
      Jaś: {
        name: "Jaś",
        proteinContent: 23,
        texture: "delikatna",
        harvestSeason: "wrzesień",
        size: "średnie",
      },
    },
  },
};

export const food = [fruits, vegetables, cereals, legumes];
