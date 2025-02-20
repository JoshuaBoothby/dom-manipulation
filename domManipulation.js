"use strict";

const textChange = document.getElementById("domP");

textChange.innerHTML = "Big text change!";

const h2Style = document.querySelector("#domHead");

h2Style.style.fontStyle = "italic";

const domBtn = document.getElementById("domBtn");

domBtn.addEventListener("click", function (event) {
  alert("Button clicked!");
});

const domA = document.querySelector("a");
domA.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Link clicked!");
});
