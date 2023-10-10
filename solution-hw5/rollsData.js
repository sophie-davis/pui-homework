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


const queryString = window.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const chosenRoll = params.get('roll');
console.log(chosenRoll);

const headerElement = document.querySelector('#detailTitle');
headerElement.innerText = chosenRoll + " Cinnamon Roll";

const rollImage = document.querySelector('#productimagedetail');
rollImage.src = '../assets/products/' + rolls[chosenRoll].imageFile;

const individualPrice = document.querySelector('#detailPrice');
individualPrice.innerText = "$" + rolls[chosenRoll].basePrice;


const cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}


let newCart = new cart



