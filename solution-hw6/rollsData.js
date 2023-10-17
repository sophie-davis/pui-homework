//checking if my cart can be found in local storage and if not initializing an array
const cart = JSON.parse(localStorage.getItem('storedCart'))  || [];
//setting up my rolls database in JSON format to include the price and image for each type of roll//
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
//getting the query string from the URL//
const queryString = window.location.search;
//using the query string to create a URLSearchParams object//
const params = new URLSearchParams(queryString);
//accessing the chosen paramter//
const chosenRoll = params.get('roll');
//setting the detailTitle id from the title on the product detail page equal to headerElement//
const headerElement = document.querySelector('#detailTitle');
//setting the title on the prodct detail page equal to the name of the roll selected plus cinnamon roll/
headerElement.innerText = chosenRoll + " Cinnamon Roll";
//setting rollImage to equal the image on the product detail page//
const rollImage = document.querySelector('#productimagedetail');
//setting the file path for the image on the product detail page//
rollImage.src = '../assets/products/' + rolls[chosenRoll].imageFile;
//setting individualPrice to equal the price that appears on the product detail page//
const individualPrice = document.querySelector('#detailPrice');
//setting the price on the product detail page to equal the specific roll's base price//
individualPrice.innerText = "$" + rolls[chosenRoll].basePrice;
//this is the function I call on change from the dropdowns of my HTML product detail page//
function computeTotalPrice(element) {
  //setting glazingPrice to the value found when the user makes their glazing option selection//
  const glazingPrice = parseFloat(glazingOptions.value);
  //setting packPrice to the value found when the user makes their pack size option selection//
  const packPrice = parseInt(packSelect.value);
  //setting grandTotal equal to the packPrice times the sum of the basePrice and the glazingPrice, also adding a dollar sign to the front and chopping it off after 2 decimals//
  const grandTotal = "$" + parseFloat((rolls[chosenRoll].basePrice + glazingPrice) * packPrice).toFixed(2);
  //const grandTotal = "$" + parseFloat((rolls[chosenRoll] + glazingPrice) * packPrice).toFixed(2);
    //setting the innerHTML of the displayed total cost on the product detail page to equal the grandTotal//
  document.getElementById("detailPrice").innerHTML = grandTotal;
}
//declaring the addToCart function that will create the array that I see when I press the add to cart button on the product detail page//
function addToCart() {
  //setting chosenGlazing equal to the selected dropdown item in my glazing dropdown//
  //I used this website to help me: https://stackoverflow.com/questions/63803667/get-value-of-selected-option-in-javascript//
  const chosenGlazing = glazingOptions.options[glazingOptions.selectedIndex].textContent;
  //setting chosenPack equal to the selected dropdown item in my pack dropdown//
  //I used this website to help me: https://stackoverflow.com/questions/63803667/get-value-of-selected-option-in-javascript//
  const chosenPack = packSelect.options[packSelect.selectedIndex].textContent;
  //setting my chosenPrice to be equal to the selected base price//
  const chosenPrice = rolls[chosenRoll].basePrice;
  //declaring a Roll class as a template for my new object//
  class Roll {
    //defining my constructor that will include the selected item's type, glazing, size, and base price//
    constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
    }
  }
  //creating newRoll and setting its type, glazing, size, and basePrice to equal the values of the item that was clicked on//
  let newRoll = new Roll(chosenRoll, chosenGlazing, chosenPack, chosenPrice);
  //pushing the newRoll to my cart array//
  cart.push(newRoll);
  //saving my newRoll to local storage
  saveToLocalStorage();
  return cart;
}
//turning my cart set into an array and turning it into a string of text and then saving it to the local storage
function saveToLocalStorage () {
    console.log(cart);
    const cartArrayString = JSON.stringify(cart);
    console.log(cartArrayString);
    window.localStorage.setItem('storedCart', cartArrayString);
}