import assets from "./assets";

const ShopData = [
  {
    id: "NFT-01",
    name: "Gli Antenati",
    address: "Corso Cavour, 65",
    stars: 4.5,
    foodTypes: ['pizza', 'hamburger'],
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    images: [assets.nft01, assets.nft03, assets.nft04],
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        stars: 4.5,
        images: [assets.person02],
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        stars: 4.5,
        images: [assets.person03],
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        stars: 5,
        images: [assets.person04],
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Celiaki",
    address: "Via Garibaldi, 18",
    stars: 3,
    foodTypes: ['pasta', 'pizza'],
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    images: [assets.nft02],
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        stars: 2,
        images: [assets.person04],
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-03",
    name: "Dolci Tentazioni",
    address: "Via XXIV Maggio, 40",
    stars: 1,
    foodTypes: ['dolci'],
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    images: [assets.nft03, assets.nft04],
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        stars: 1,
        images: [assets.person02],
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        stars: 1.5,
        images: [assets.person03],
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "NFT-04",
    name: "Le altre farine del mulino",
    address: "Via Primo Settembre, 12",
    stars: 2.5,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.",
    images: [assets.nft04, assets.nft05],
    foodTypes: ['pizza'],
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        stars: 2.5,
        images: [assets.person02],
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        stars: 4,
        images: [assets.person03],
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        stars: 2,
        images: [assets.person04],
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        stars: 5,
        images: [assets.person02],
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-05",
    name: "Passione Eterna",
    address: "Piazza Duomo, 10",
    stars: 0,
    foodTypes: ['pizza', 'pasta', 'hamburger', 'dolci'],
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    images: [assets.nft05, assets.nft01],
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        stars: 0,
        images: [assets.person02, assets.person01],
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-06",
    name: "Toronero",
    address: "Stazione Centrale",
    stars: 0.5,
    foodTypes: ['dolci'],
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    images: [assets.nft06, assets.nft01],
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        stars: 0.5,
        images: [assets.person02],
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        stars: 1,
        images: [assets.person03],
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        stars: 1.5,
        images: [assets.person04],
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        stars: 2,
        images: [assets.person02],
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        stars: 2.5,
        images: [assets.person02],
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-07",
    name: "Il forno senza glutine",
    address: "Viale San Martino, 33",
    stars: 3,
    foodTypes: ['pizza', 'hamburher'],
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Ullamcorper platea penatibus ornare egestas nulla ligula hendrerit nisl suscipit sociosqu maximus, tincidunt aptent habitant purus pharetra ultrices dapibus laoreet nisi lacinia. Porta malesuada netus vel sapien conubia porttitor aliquam ut pretium ante litora molestie senectus magna egestas sociosqu, eget aliquet fames pharetra felis posuere varius fringilla quisque in arcu montes eu ullamcorper.",
    images: [assets.nft07, assets.nft02],
    bids: [],
  },
];

export { ShopData };
