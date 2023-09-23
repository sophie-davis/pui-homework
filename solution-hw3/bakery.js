//Returning the glazingOptions dropdown element and calling it glazingOptions//
const glazingOptions = document.getElementById("glazingOptions");
//Returning the packSelect dropdown element and calling it packSelect//
const packSelect = document.getElementById("packSelect");
//Setting the base cinnamon roll price to 2.49//
const basePrice = 2.49;
//setting up my glazing object to store the glazing options and price adaptations//
const glazing = [
    {
        key: "Keep original",
        value: 0.00,
    },
    {
        key: "Sugar milk",
        value: 0.00,
    },
    {
        key: "Vanilla milk",
        value: 0.50,
    },
    {
        key: "Double chocolate",
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
//this is the function I call on change from the dropdowns of my HTML product detail page//
function computeTotalPrice(element) {
    //setting glazingPrice to the value found when the user makes their glazing option selection//
    const glazingPrice = parseFloat(glazingOptions.value);
    //setting packPrice to the value found when the user makes their pack size option selection//
    const packPrice = parseInt(packSelect.value);
    //setting grandTotal equal to the packPrice times the sum of the basePrice and the glazingPrice, also adding a dollar sign to the front and chopping it off after 2 decimals//
    const grandTotal = "$" + parseFloat((basePrice + glazingPrice) * packPrice).toFixed(2);
    //setting the innerHTML of the displayed total cost on the product detail page to equal the grandTotal//
    document.getElementById("detailPrice").innerHTML = grandTotal;
}

