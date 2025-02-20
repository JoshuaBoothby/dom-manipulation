"use strict";

const edgeRunner = {
  handle: "Railgun",
  age: "38",
  role: "Solo",
  rank: "4",
  skills: ["Combat", "Stealth", "Athletics"],
  cyberware: ["Sandevistan", "Cyberoptics"],
  weapons: ["Pistol", "Sniper Rifle"],
};

const edgeRunnerJSON = JSON.stringify(edgeRunner);

console.log(edgeRunnerJSON);

const edgeRunnerParsed = JSON.parse(edgeRunnerJSON);

console.log(edgeRunnerParsed);
