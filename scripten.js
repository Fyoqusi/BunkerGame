// Дані для генерації
const catastrophes = [
  "Global Warming: The sun-scorched landscape deforms, rivers dry up, and fresh water supplies are depleted. Hurricanes devastate cities, while extreme heat and downpours lead to catastrophic floods. People desperately seek refuge in a world where there is no safe haven. Extreme temperatures and weather cataclysms result in loss of life and soil fertility. Diminished access to water and food leads to conflicts and resource wars. Rising sea levels flood coastal areas, causing mass migration.",
  "Epidemic: Chaos and panic grip large cities. Medical facilities are overwhelmed, and authorities struggle to contain a deadly virus. After emerging from the bunker, you must avoid contact with the infected, maintain your immunity, find the source of the epidemic, and develop a vaccine against the virus.",
  "Zombie Apocalypse: A zombie virus has escaped the lab and begun infecting people, turning them into walking dead. Mass chaos has engulfed the entire planet, erasing all the achievements of civilization. After leaving the bunker, you'll have to constantly fend off zombie attacks and find a way to protect yourself from the virus.",
  "Robot Uprising: Technological progress has reached its peak. By creating robots, humanity has unleashed a deadly threat. Robot armies now roam the cities. They surpass humans both physically and intellectually. The last remaining humans have started building shelters and devising a plan to reclaim the planet.",
  "Portals from the Beyond: Mysterious portals have begun to appear across the planet. Horrifying fantastical creatures emerge from them and annihilate humanity. After emerging from the bunker, you must constantly fend off monsters and, eventually, find a way to close these gateways.",
  "Dinosaurs Resurrected: Scientists have managed to bring dinosaurs back to life, but the situation has spiraled out of control. The prehistoric monsters have escaped and rapidly multiplied. Their herds devour all the food they find: plants, animals, and humans. City infrastructure is in ruins. After surviving the peak of the threat in the bunker, you'll emerge to a deserted world. There's hope that with the food shortage, the dinosaur population will decrease. You'll need to secure food supplies and avoid becoming prey for the new rulers of the world.",
  "Giant Meteor: A giant meteor is approaching Earth. The collision will cause global destruction, climate changes, and the extinction of humans, flora, and fauna. After emerging from the bunker, you'll need to find a place suitable for living and secure food in the relentless conditions of eternal winter.",
  "Gravitational Anomaly: A gravitational anomaly causes the expansion of water, flooding the entire land surface. After emerging from the bunker, when the water partially recedes, you'll need to build a floating station, live, and forage for food on the water until you find land areas suitable for habitation.",
  "Deadly Evolutionary Cycle: An abnormal evolutionary cycle is underway on the planet. All flora becomes deadly to humans. Invisible radiation from plants and trees drives people insane, forcing them to commit suicide. The bunker allows you to survive the most dangerous phase. When you return to the surface, you'll need to find and destroy the epicenter of this anomaly and retain your sanity.",
  "Nuclear Conflict: A massive nuclear conflict erupts. Radioactive dust envelops the entire planet, blocking out sunlight, and triggering a prolonged nuclear winter. Almost the entire planet will be affected by radiation, leaving few survivors. After emerging from the bunker, you'll need to establish a permanent shelter, secure food, and begin rebuilding life on Earth.",
  "Alien Invasion: What was initially mistaken for an approaching comet turns out to be an alien invasion. They paralyze all humans to bring them to justice and decide whether to preserve or destroy our civilization. Hide in the bunker to avoid the paralyzing radiation. After emerging, you'll need to make contact with the aliens and convince them of the value of our culture to the universe.",
  "Supervolcano Eruptions: Supervolcanoes activate, triggering extremely powerful eruptions. The landscape and climate change drastically. Most of the population perished instantly due to temperature fluctuations, earthquakes, and floods. Endure the most active phase in a heavily fortified bunker. You face global droughts, destroyed cities, and constant seismic activity. You can only survive by developing a highly sensitive earthquake prediction system and robotic infrastructure.",
  "Chemical Warfare: The extensive use of chemical weapons seriously disrupts the ecological balance. The microbiological composition of soil and water is altered, plants are poisoned, and nearly all animals and humans die. After emerging from the bunker, securing food will be challenging. You'll need scientists and engineers to set up shelters and farms.",
];
const foods = [
  "There is enough food and water for the entire duration of the stay in the bunker.",
  "There is enough food and water for half of the stay in the bunker.",
  "There are no food and water supplies in the bunker.",
];

const drugs = [
  "The bunker has a stockpile of medical supplies.",
  "The bunker has medication for serious illnesses.",
  "The bunker has a small first-aid kit.",
  "The bunker has no medical supplies.",
];

const conditions = [
  "The bunker has a greenhouse.",
  "The bunker has no furniture.",
  "The bunker is controlled by AI.",
  "The bunker has no water supply.",
  "The bunker has no electricity.",
  "The bunker has a library.",
  "The entire bunker is one room",
  "The bunker has a wine cellar.",
  "The bunker has a gym.",
  "The bunker has construction materials.",
  "The bunker has a weapons cache.",
  "Mice have infested the bunker.",
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateCondition() {
  const catastrophe = getRandomElement(catastrophes);
  const bunkertime = Math.floor(Math.random() * 24);
  const bunkersquare = Math.floor(Math.random() * 150);
  const food = getRandomElement(foods);
  const drug = getRandomElement(drugs);

  // Create a new array excluding condition1
  let condition1, condition2, condition3;

  // Loop until all conditions are different
  do {
    condition1 = getRandomElement(conditions);
    condition2 = getRandomElement(conditions);
    condition3 = getRandomElement(conditions);
  } while (
    condition1 === condition2 ||
    condition1 === condition3 ||
    condition2 === condition3
  );

  const resultElement = `
    <h2>Catastrophe:</h2>
    <p>${catastrophe}</p>
    <h2>Bunker:</h2>
    <p>Your goal is to live in the bunker for ${bunkertime} months. Square of the bunker is ${bunkersquare} square meters. ${food} ${drug} ${condition1} ${condition2} ${condition3}</p>
    `;
  document.getElementById("result").innerHTML = resultElement;
}
