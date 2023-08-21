// import animals, { useAnimals } from "./data";

// Destructuring Array
// console.log(animals);
// const [cat, dog] = animals;
// console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();
// Destructuring Objects
// const { name: catName, sound: catSound } = cat;
// console.log(catName);
// console.log(catSound);
// Works only if no data in original key-value pair
// const { name = "Fluffy", sound = "Purr" } = cat;

// const {
//   name,
//   sound,
//   feedingRequirement: { food, water }
// } = cat;
// console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour]
} = tesla;

const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour]
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
