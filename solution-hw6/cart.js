//setting my set to be called cart
let cart = new Set();
//turning my cart set into an array and turning it into a string of text and then saving it to the local storage
function saveToLocalStorage () {
    const cartArray = Array.from(cart);
    console.log(cartArray);
    const cartArrayString = JSON.stringify(cartArray);
    console.log(cartArrayString);
    window.localStorage.setItem('storedCart', cartArrayString);
}
//setting up my rolls database in JSON format to include the price and image for each type of roll
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"        
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};
//setting up my glazing object to store the glazing options and price adaptations
const glazingPrice = {
    "Original" : {
        "glazingPrice": 0.00
    },
    "Sugar Milk" : {
        "glazingPrice": 0.00
    },
    "Vanilla Milk" : {
        "glazingPrice": 0.50
    },
    "Double Chocolate" : {
        "glazingPrice": 1.50
    },
}
//setting up my pack size object to store the glazing options and price adaptations
const packSizePrice = {
    "1" : {
        "value": 1
    },
    "3" : {
        "value": 3
    },
    "6" : {
        "value": 5
    },
    "12" : {
        "value": 10
    },
}
//using this class to represent each of my rolls
class Roll {
    //defining my constructor that will include the selected item's type, glazing, size, and base price, and image
    constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
      this.element = null;
    }
}
//create array for total price
let finalCart = [];
//creating a new roll object and adding it to my cart set
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const newRoll = new Roll (rollType, rollGlazing, packSize, basePrice);
    cart.add(newRoll);
    return newRoll;
}
//looping through the cart set and creating a DOM element for each roll object
for (const newRoll of cart) {
    createElement(newRoll);
}
//adding the calculated order prices to my finalCart price array
let totalCartPrice = 0;
//retreiving the rolls from the local storage
function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCart');
    const cartArray = JSON.parse(cartArrayString);
    console.log(cartArray);
    //looping through my array of rolls to populate the cart page
    for (const cartData of cartArray) {
        const newRoll = addNewRoll(cartData.type, cartData.glazing, cartData.size, cartData.basePrice);
        createElement(newRoll);
    }
}
//calling the function automatically
if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocalStorage();
}
//adding the item prices to the total price at the bottom of the cart page
for (const calculatePrice of finalCart) {
    totalCartPrice = totalCartPrice + parseFloat(calculatePrice);
}
document.querySelector('.totalPrice').innerText = "$" + parseFloat(totalCartPrice).toFixed(2);
//taking my roll as an argument and updating the proper DOM element
function createElement(newRoll) {
    //creating a clone of the roll template
    const template = document.querySelector('#newRoll-template');
    const clone = template.content.cloneNode(true);
    //connecting this clone to my roll element
    newRoll.element = clone.querySelector('.newRoll');
    const btnDelete = newRoll.element.querySelector('.delete');
    btnDelete.addEventListener('click', () => {
        deleteRoll(newRoll);
    });
    //adding the roll clone to the DOM
    const newRollListElement = document.querySelector('#newRoll-list');
    newRollListElement.append(newRoll.element);
    //populating the roll clone with the roll content
    updateElement(newRoll);
}
function updateElement (newRoll) {
    //getting the HTML element that needs updating
    const rollTypeElement = newRoll.element.querySelector('.roll-type');
    const rollGlazingElement = newRoll.element.querySelector('.glazing-type');
    const rollPackSizeElement = newRoll.element.querySelector('.pack-type');
    const rollBasePriceElement = newRoll.element.querySelector('.price-type');
    const rollImageElement = newRoll.element.querySelector('.productimagecart');
    //copying the roll content to the corresponding HTML elements
    rollTypeElement.innerText = newRoll.type + " Cinnamon Roll";
    rollGlazingElement.innerText = "Glazing: " + newRoll.glazing;
    rollPackSizeElement.innerText = "Pack Size: " + newRoll.size;
    //adding the roll baseprice to the roll glazing price and multiplying that by the pack size
    let calculatePrice = parseFloat((newRoll.basePrice + glazingPrice[newRoll.glazing]["glazingPrice"]) * packSizePrice[newRoll.size]["value"]).toFixed(2);
    //pushing the calculated order price to the finalCart array
    finalCart.push(calculatePrice);
    //setting the inner text of the displayed roll price
    rollBasePriceElement.innerText = "$" + calculatePrice;
    //setting the image source for my pictures
    rollImageElement.src = "../assets/products/" + rolls[newRoll.type].imageFile;
}
//function to conduct my deleting actions
function deleteRoll(newRoll){
    //removing the roll DOM object 
    newRoll.element.remove();
    //deleting the order prices from the total price counter at the bottom of the page
    let cartDelete = parseFloat((newRoll.basePrice + glazingPrice[newRoll.glazing]["glazingPrice"]) * packSizePrice[newRoll.size]["value"]).toFixed(2);
    totalCartPrice = Math.max(totalCartPrice - cartDelete, 0);
    document.querySelector('.totalPrice').innerText = "$" + parseFloat(totalCartPrice).toFixed(2);
    //deleting the roll from my cart array
    cart.delete(newRoll);
    //updating my local storage when I delete a roll from the cart
    saveToLocalStorage();
}
