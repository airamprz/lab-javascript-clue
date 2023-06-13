// ITERATION 1

// Suspects Array
const suspectsArray = [
  {
    firstName: "Name1",
    lastName: "Lastname1",
    occupation: "Occupation1",
    age: 30,
    description: "Description1",
    image: "image1.jpg",
    color: "color1"
  }
];


// Rooms Array
const roomsArray = [
  { name: "Room 1" },
  { name: "Room 2" },
  { name: "Room 3" },
  { name: "Room 4" },
  { name: "Room 5" },
  { name: "Room 6" },
  { name: "Room 7" },
  { name: "Room 8" },
  { name: "Room 9" },
  { name: "Room 10" },
  { name: "Room 11" },
  { name: "Room 12" },
  { name: "Room 13" },
  { name: "Room 14" },
  { name: "Room 15" }
];



// Weapons Array
const weaponsArray = [
  { name: "Weapon 1", weight: 10 },
  { name: "Weapon 2", weight: 8 },
  { name: "Weapon 3", weight: 12 },
  { name: "Weapon 4", weight: 6 },
  { name: "Weapon 5", weight: 9 },
  { name: "Weapon 6", weight: 11 },
  { name: "Weapon 7", weight: 7 },
  { name: "Weapon 8", weight: 10 },
  { name: "Weapon 9", weight: 8 }
];

// ITERATION 2

function selectRandom(array) {
  if (array.length === 0) {
      return undefined;
  } else if (array.length === 1) {
      return array[0];
  } else {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
  }
}

function pickMystery() {
  const suspect = selectRandom(suspectsArray);
  const weapon = selectRandom(weaponsArray);
  const room = selectRandom(roomsArray);

  return {
      suspect: suspect,
      weapon: weapon,
      room: room
  };
}

// ITERATION 3

function revealMystery() {}
