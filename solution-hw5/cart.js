//creating an array called cart//
const cart = [];

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

const glazingPrice = {
    "Original" : {
        "glazingPrice": 0.00
    },
    "Sugar milk" : {
        "glazingPrice": 0.00
    },
    "Vanilla milk" : {
        "glazingPrice": 0.50
    },
    "Double chocolate" : {
        "glazingPrice": 1.50
    },
}

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

class Roll {
    //defining my constructor that will include the selected item's type, glazing, size, and base price//
    constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing = rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
    }
}

Roll.prototype.render = function () {
    const shoppingContainer = document.querySelector(".shoppingContainer");
    const cartCard = document.createElement('div');
    cartCard.classList.add('cartCard');
    shoppingContainer.appendChild(cartCard);
    const orderDetailsContainer = document.createElement('div');
    const imageCartCard = document.createElement('div');
    imageCartCard.classList.add('imageCartCard');
    cartCard.appendChild(imageCartCard);
    const productimagecart = document.createElement('img');
    productimagecart.classList.add('productimagecart');
    productimagecart.src = '../assets/products/' + rolls[`${this.type}`].imageFile;
    imageCartCard.appendChild(productimagecart);
    const remove = document.createElement('p');
    remove.classList.add('remove');
    imageCartCard.appendChild(remove);
    remove.innerHTML = "Remove";
    orderDetailsContainer.classList.add('orderDetailsContainer');
    cartCard.appendChild(orderDetailsContainer);
    const orderDetails = document.createElement('div');
    orderDetails.classList.add('orderDetails');
    orderDetailsContainer.appendChild(orderDetails);
    const rollTypeCart = document.createElement('p');
    rollTypeCart.classList.add('rollTypeCart');
    rollTypeCart.innerHTML = `${this.type} Cinnamon Roll`;
    orderDetails.appendChild(rollTypeCart);
    const glazingTypeCart = document.createElement('p');
    glazingTypeCart.classList.add('glazingTypeCart');
    glazingTypeCart.innerHTML = `Glazing: ${this.glazing}`;
    orderDetails.appendChild(glazingTypeCart);
    const packSizeCart = document.createElement('p');
    packSizeCart.classList.add('packSizeCart');
    packSizeCart.innerHTML = `Pack Size: ${this.size}`;
    orderDetails.appendChild(packSizeCart);
    const total = document.createElement('p');
    total.classList.add('total');
    total.innerHTML = "$" + parseFloat(((rolls[`${this.type}`].basePrice)+(glazingPrice[`${this.glazing}`].glazingPrice))*(packSizePrice[`${this.size}`].value)).toFixed(2);
    total.value = parseFloat(((rolls[`${this.type}`].basePrice)+(glazingPrice[`${this.glazing}`].glazingPrice))*(packSizePrice[`${this.size}`].value)).toFixed(2);
    orderDetailsContainer.appendChild(total);
    const shopping = document.querySelector(".shopping");
    shoppingContainer.appendChild(shopping);
    const totalCheckoutPrice = document.querySelector(".totalCheckoutPrice");
    shoppingContainer.appendChild(totalCheckoutPrice);
    const totalWord = document.querySelector(".totalWord");
    totalCheckoutPrice.appendChild(totalWord);
    const totalPrice = document.querySelector(".totalPrice");
        let totals = 0;
        let prices = document.querySelectorAll('.total');
        for(let i=0; i < prices.length; i++) {
            totals += parseFloat(prices[i].value);
        }
    totalPrice.innerHTML = "$" + totals;
    totalCheckoutPrice.appendChild(totalPrice);
    const checkoutButton = document.querySelector(".checkoutButton");
    shoppingContainer.appendChild(checkoutButton);

    remove.addEventListener('click', function() {
        //for (let i=0; i<cart.length;i++) {
           //cart.splice([i], 1);
        //}
        //i am trying to figure out how to remove my selection from the array but this isn't working//
        cart.splice(`${this.Roll}`, 1);
        //this is removing the selected option from the page//
        cartCard.remove();
    });
}




//creating newRollOne and setting its type, glazing, size, and basePrice to equal the values of the item that was clicked on//
let newRollOne = new Roll("Original", "Sugar milk", 1, 2.49);
//console.log(newRollOne);
//creating newRollTwo and setting its type, glazing, size, and basePrice to equal the values of the item that was clicked on//
let newRollTwo = new Roll("Walnut", "Vanilla milk", 12, 3.49);
//console.log(newRollTwo);
//creating newRollThree and setting its type, glazing, size, and basePrice to equal the values of the item that was clicked on//
let newRollThree = new Roll("Raisin", "Sugar milk", 3, 2.99);
//console.log(newRollThree);
//creating newRollFour and setting its type, glazing, size, and basePrice to equal the values of the item that was clicked on//
let newRollFour = new Roll("Apple", "Original", 3, 3.49);
//console.log(newRollFour);
cart.push(newRollOne, newRollTwo, newRollThree, newRollFour);
console.log(cart);

function addRolls(instance){
    instance.render();
}

addRolls(newRollOne);
addRolls(newRollTwo);
addRolls(newRollThree);
addRolls(newRollFour);




