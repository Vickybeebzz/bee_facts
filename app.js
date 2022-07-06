let facts = [
  "Bees are cool.",
  "Bees have 5 eyes.",
  "Bees are insects, so they have 6 legs.",
  "An average beehive can hold around 50000 bees.",
  "Bees have two pairs of wings.",
  "Bees' best friends are Beeclops and Beepu.",
];

function getRandomFact() {
  return facts[Math.floor(Math.random() * facts.length)];
}

function writeFact() {
  document.getElementById("factbox").innerHTML = getRandomFact();
}

writeFact();

document.getElementById("button").addEventListener("click", writeFact);

console.log("I am a bee");