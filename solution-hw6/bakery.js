//Returning the glazingOptions dropdown element and calling it glazingOptions//
const glazingOptions = document.getElementById("glazingOptions");
//Returning the packSelect dropdown element and calling it packSelect//
const packSelect = document.querySelector("select#packSelect")
//setting up my glazing object to store the glazing options and price adaptations//
const glazing = [
  {
    key: "Original",
    value: 0.00,
  },
  {
    key: "Sugar Milk",
    value: 0.00,
  },
  {
    key: "Vanilla Milk",
    value: 0.50,
  },
  {
    key: "Double Chocolate",
    value: 1.50,
  }
];
//setting up my packSize object to store the pack size options and price adaptations//
const packSize = [
  {
    key: "1",
    value: 1,
  },
  {
    key: "3",
    value: 3,
  },
  {
    key: "6",
    value: 5,
  },
  {
    key: "12",
    value: 10,
  }
];
//dynamicially populating the options of my glazingOptions dropdown field via a loop//
for (let i=0; i < glazing.length; i++) {
  //creating a dropdown option and setting it equal to element//
  const element = document.createElement("option");
  //setting the element's value equal to the value of the pair in the glazing object//
  element.value = glazing[i].value;
  //setting the element's text equal to the key of the pair in the glazing object// 
  element.textContent = glazing[i].key;
  //adding the new element to the glazingOptions dropdown menu//
  glazingOptions.appendChild(element);
  //let glazeChoice = glazing.textContent;
  //console.log(glazeChoice);
}
//dynamically populating the options of my packSelect dropdown field via a loop//
for (let i=0; i < packSize.length; i++) {
  //creating a dropdown option and setting it equal to element//
  const element = document.createElement("option");
  //setting the element's value equal to the value of the pair in the packSize object//
  element.value = packSize[i].value;
  //setting the element's text equal to the key of the pair in the packSize object// 
  element.textContent = packSize[i].key;
  //adding the new element to the packSelect dropdown menu//
  packSelect.appendChild(element);
}