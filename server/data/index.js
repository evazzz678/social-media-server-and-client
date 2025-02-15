import mongoose from "mongoose";
const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Digambaran",
    lastName: "jjvvvvvvh",
    email: "Digambaran@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "digambaran.jpeg",
    friends: [],
    location: "Sivapuram",
    occupation: "Black magician",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Canada, CA",
    occupation: "Data Scientist Hacker",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Mangalassery",
    lastName: "Neelakandan",
    email: "Mangalassery@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "neelan.jpeg",
    friends: [],
    location: "Mangalasserry",
    occupation: "Gangester",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Narasimha",
    lastName: "Mannadiyar",
    email: "mannadiar@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "mannadiar.jpeg",
    friends: [],
    location: "Delhi",
    occupation: " Village Feudal Lord",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Annakatil",
    lastName: "Chakochi",
    email: "Chakochin@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "chakochi.jpeg",
    friends: [],
    location: "Anakadu",
    occupation: "liquor baron",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Rocky",
    lastName: "Bhai",
    email: "Rocky@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "rocky.jpeg",
    friends: [],
    location: "Kolar Gold Fields",
    occupation: "Don",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Nagavalli",
    lastName: "",
    email: "Nagavalli@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "nagavalli.jpeg",
    friends: [],
    location: "Madurai",
    occupation: "Dancer",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
  {
    _id: userIds[8],
    firstName: "Monkey",
    lastName: "D Lufy",
    email: "lufy@gmail.com",
    password: "2b$10$eUVPkWFN3AJ3z9wzWmzYfOIwpND9MlazyfNCuqJteZ0G/kjJtq1yq",
    picturePath: "lufy.jpeg",
    friends: [],
    location: "Foosha Village",
    occupation: "Straw-Hat pirate's Captain",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[9],
    firstName: "Roronoa",
    lastName: "Zoro",
    email: "zoro@gmail.com",
    password: "2b$10$eUVPkWFN3AJ3z9wzWmzYfOIwpND9MlazyfNCuqJteZ0G/kjJtq1yq",
    picturePath: "zoro.jpeg",
    friends: [],
    location: "Shimotsuki Village",
    occupation: "Strw-hat pirate's Swordsman",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[10],
    firstName: "nami",
    lastName: "Swan",
    email: "Namy@gmail.com",
    password: "2b$10$eUVPkWFN3AJ3z9wzWmzYfOIwpND9MlazyfNCuqJteZ0G/kjJtq1yq",
    picturePath: "nami.jpeg",
    friends: [],
    location: "Conomi Islands",
    occupation: "Strw-hat pirate's Navigator",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[11],
    firstName: "God",
    lastName: "Usopp",
    email: "usopp@gmail.com",
    password: "2b$10$eUVPkWFN3AJ3z9wzWmzYfOIwpND9MlazyfNCuqJteZ0G/kjJtq1yq",
    picturePath: "usopp.jpeg",
    friends: [],
    location: "Syrup Village",
    occupation: "Strw-hat pirate's Sniper",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[12],
    firstName: "Black-Leg",
    lastName: "Sanji",
    email: "sanji@gmail.com",
    password: "2b$10$eUVPkWFN3AJ3z9wzWmzYfOIwpND9MlazyfNCuqJteZ0G/kjJtq1yq",
    picturePath: "sanji.jpeg",
    friends: [],
    location: "Germa Kingdom",
    occupation: "Strw-hat pirate's Cook",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[13],
    firstName: "Nico",
    lastName: "Robin",
    email: "Robin@gmail.com",
    password: "2b$10$eUVPkWFN3AJ3z9wzWmzYfOIwpND9MlazyfNCuqJteZ0G/kjJtq1yq",
    picturePath: "robin.jpeg",
    friends: [],
    location: "Ohara",
    occupation: "Strw-hat pirate's Archaeologist",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[14],
    firstName: "Tony Tony",
    lastName: "Chopper",
    email: "tony@gmail.com",
    password: "2b$10$eUVPkWFN3AJ3z9wzWmzYfOIwpND9MlazyfNCuqJteZ0G/kjJtq1yq",
    picturePath: "chopper.jpeg",
    friends: [],
    location: "Winter island",
    occupation: "Strw-hat pirate's Doctor",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[15],
    firstName: "Cutty Flam",
    lastName: "Franky",
    email: "Franky@gmail.com",
    password: "2b$10$eUVPkWFN3AJ3z9wzWmzYfOIwpND9MlazyfNCuqJteZ0G/kjJtq1yq",
    picturePath: "franky.jpeg",
    friends: [],
    location: "Water7 island",
    occupation: "Strw-hat pirate's Shipwreck",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[16],
    firstName: "Soul King",
    lastName: "Brook",
    email: "Brook@gmail.com",
    password: "2b$10$eUVPkWFN3AJ3z9wzWmzYfOIwpND9MlazyfNCuqJteZ0G/kjJtq1yq",
    picturePath: "brook.jpeg",
    friends: [],
    location: "Florian Triangle",
    occupation: "Strw-hat pirate's Musician",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[17],
    firstName: "First son of the sea",
    lastName: "Jinbe",
    email: "jinbe@gmail.com",
    password: "2b$10$eUVPkWFN3AJ3z9wzWmzYfOIwpND9MlazyfNCuqJteZ0G/kjJtq1yq",
    picturePath: "jinbe.jpeg",
    friends: [],
    location: "Fish Man Island",
    occupation: "Strw-hat pirate's Helmsman",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
];

export const posts = [
 
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[16],
    firstName: "Soul King",
    lastName: "Brook",
    location: "Thriller park",
    description:
      "What keeps me alive in this world is neither bodily organs, nor muscles - it's my soul!😎",
    picturePath: "post10.jpeg",
    userPicturePath: "usopp.jpeg",
    likes: new Map([
      
    ]),

    comments: [
      "Can I play video games now?",
      "No let's actually study",
      "Never mind, I'm going to play video games",
      "Stop it.",
      "Michael, stop it.",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[17],
    firstName: "First son of the Sea",
    lastName: "Jinbe",
    location: "Fishman island",
    description:
      "I'm a man who wants to be part of the futute Pirate King's crew",
    picturePath: "post16.jpeg",
    userPicturePath: "jinbe.jpeg",
    likes: new Map([
      
    ]),

    comments: [
      "Can I play video games now?",
      "No let's actually study",
      "Never mind, I'm going to play video games",
      "Stop it.",
      "Michael, stop it.",
    ],
  }

];