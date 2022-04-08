/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function excuse() {
  var part1 = ["homie", "sister", "grandma"];
  var verb = ["sabotaged", "stole", "destroyed"];
  var noun = ["homework", "pizza", "phone"];

  let who = part1[Math.round(Math.random() * (part1.length - 1))];
  let did = verb[Math.round(Math.random() * (verb.length - 1))];
  let what = noun[Math.round(Math.random() * (noun.length - 1))];

  document.getElementById("insert").innerHTML =
    "My " + who + " " + did + " my " + what + ".";
};
