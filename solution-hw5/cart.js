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

      this.element = null;
    }
}

let cart = new Set();

function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const newRoll = new Roll (rollType, rollGlazing, packSize, basePrice);
    cart.add(newRoll);
    return newRoll;
}

const newRollOne = addNewRoll (
    "Original Cinnamon Roll",
    "Glazing: Sugar Milk",
    "Pack Size: 1",
    2.49,
);

const newRollTwo = addNewRoll (
    "Walnut Cinnamon Roll",
    "Glazing: Vanilla Milk",
    "Pack Size: 12",
    3.49,
)

const newRollThree = addNewRoll (
    "Raisin Cinnamon Roll",
    "Glazing: Sugar Milk",
    "Pack Size: 3",
    2.99,
)

const newRollFour = addNewRoll (
    "Apple Cinnamon Roll",
    "Glazing: Original",
    "Pack Size: 3",
    3.49,
)


for (const newRoll of cart) {
    console.log(newRoll);
    createElement(newRoll);
}

function createElement(newRoll) {
    const template = document.querySelector('#newRoll-template');
    const clone = template.content.cloneNode(true);
    newRoll.element = clone.querySelector('.newRoll');

    const btnDelete = newRoll.element.querySelector('.delete');
    btnDelete.addEventListener('click', () => {
        deleteRoll(newRoll);
    });

    const newRollListElement = document.querySelector('#newRoll-list');
    newRollListElement.append(newRoll.element);

    updateElement(newRoll);

}

function updateElement (newRoll) {
    //const rollImageElement = newRoll.element.querySelector('.productimagecart');
    const rollTypeElement = newRoll.element.querySelector('.roll-type');
    const rollGlazingElement = newRoll.element.querySelector('.glazing-type');
    const rollPackSizeElement = newRoll.element.querySelector('.pack-type');
    const rollBasePriceElement = newRoll.element.querySelector('.price-type');

    //rollImageElement.src = newRoll.rollImageURL;
    rollTypeElement.innerText = newRoll.type;
    rollGlazingElement.innerText = newRoll.glazing;
    rollPackSizeElement.innerText = newRoll.size;
    rollBasePriceElement.innerText = newRoll.basePrice;
}

function deleteRoll(newRoll){
    newRoll.element.remove();
    cart.delete(newRoll);
}


// function createElement(roll) {
//     const template = document.querySelector();
//     const clone = template.content.cloneNode(true);
//     roll.element = clone.querySelector();

//     const btnDelete = roll.element.querySelector();
//     console.log(btnDelete);
//     btnDelete.addEventListener('click', () => {
//         deleteRoll(roll);
//     }):

//     const rollListElement = document.querySelector();
//     rollListElement.prepend(roll.element);
//     updateElement(roll);
// }

// function updateElement(roll) {
//     const rollImageElement = roll.element.querySelector();
//     const rollTitleElement = roll.element.querySelector();
//     const rollBodyElement = roll.element.querySelector();

//     rollImageElement.src = roll...;
//     rollTitleElement.innerText = roll..;
//     rollBodyElement = roll.noteBody..;
// }

// function deleteRoll(roll) {
//     roll.element.remove();
//     rollSet.delete(roll);
// }

// const rollOne = addNewRoll(
//     "../assets/products/original-cinnamon-roll.jpg",
//     title;
//     glazing;
//     pack;
// );

// const rollTwo = addNewRoll(
//     "../assets/products/walnut-cinnamon-roll.jpg",
//     title;
//     body;
// );
// const rollThree = addNewRoll(
//     "../assets/products/raisin-cinnamon-roll.jpg",
//     title;
//     body;
// );
// const rollFour = addNewRoll(
//     "../assets/products/apple-cinnamon-roll.jpg"
//     title;
//     body;
// );

// for(const roll of rollSet) {
//     console.log(roll);
//     createElement(roll);
// }






















// //creating an array called cart//
// let cart = new Set();

// const rolls = {
//     "Original": {
//         "basePrice": 2.49,
//         "imageFile": "original-cinnamon-roll.jpg"        
//     },
//     "Apple": {
//         "basePrice": 3.49,
//         "imageFile": "apple-cinnamon-roll.jpg"
//     },
//     "Raisin": {
//         "basePrice": 2.99,
//         "imageFile": "raisin-cinnamon-roll.jpg"
//     },
//     "Walnut": {
//         "basePrice": 3.49,
//         "imageFile": "walnut-cinnamon-roll.jpg"
//     },
//     "Double-Chocolate": {
//         "basePrice": 3.99,
//         "imageFile": "double-chocolate-cinnamon-roll.jpg"
//     },
//     "Strawberry": {
//         "basePrice": 3.99,
//         "imageFile": "strawberry-cinnamon-roll.jpg"
//     }    
// };

// const glazingPrice = {
//     "Original" : {
//         "glazingPrice": 0.00
//     },
//     "Sugar milk" : {
//         "glazingPrice": 0.00
//     },
//     "Vanilla milk" : {
//         "glazingPrice": 0.50
//     },
//     "Double chocolate" : {
//         "glazingPrice": 1.50
//     },
// }

// const packSizePrice = {
//     "1" : {
//         "value": 1
//     },
//     "3" : {
//         "value": 3
//     },
//     "6" : {
//         "value": 5
//     },
//     "12" : {
//         "value": 10
//     },
// }

// class Roll {
//     //defining my constructor that will include the selected item's type, glazing, size, and base price//
//     constructor(rollType, rollGlazing, packSize, basePrice) {
//       this.type = rollType;
//       this.glazing = rollGlazing;
//       this.size = packSize;
//       this.basePrice = basePrice;
//     }
// }

// const rollSet = new Set();


// Roll.prototype.render = function () {
//     const shoppingContainer = document.querySelector(".shoppingContainer");
//     const cartCard = document.createElement('div');
//     cartCard.classList.add('cartCard');
//     shoppingContainer.appendChild(cartCard);
//     const orderDetailsContainer = document.createElement('div');
//     const imageCartCard = document.createElement('div');
//     imageCartCard.classList.add('imageCartCard');
//     cartCard.appendChild(imageCartCard);
//     const productimagecart = document.createElement('img');
//     productimagecart.classList.add('productimagecart');
//     productimagecart.src = '../assets/products/' + rolls[`${this.type}`].imageFile;
//     imageCartCard.appendChild(productimagecart);
//     const remove = document.createElement('p');
//     remove.classList.add('remove');
//     imageCartCard.appendChild(remove);
//     remove.innerHTML = "Remove";
//     orderDetailsContainer.classList.add('orderDetailsContainer');
//     cartCard.appendChild(orderDetailsContainer);
//     const orderDetails = document.createElement('div');
//     orderDetails.classList.add('orderDetails');
//     orderDetailsContainer.appendChild(orderDetails);
//     const rollTypeCart = document.createElement('p');
//     rollTypeCart.classList.add('rollTypeCart');
//     rollTypeCart.innerHTML = `${this.type} Cinnamon Roll`;
//     orderDetails.appendChild(rollTypeCart);
//     const glazingTypeCart = document.createElement('p');
//     glazingTypeCart.classList.add('glazingTypeCart');
//     glazingTypeCart.innerHTML = `Glazing: ${this.glazing}`;
//     orderDetails.appendChild(glazingTypeCart);
//     const packSizeCart = document.createElement('p');
//     packSizeCart.classList.add('packSizeCart');
//     packSizeCart.innerHTML = `Pack Size: ${this.size}`;
//     orderDetails.appendChild(packSizeCart);
//     const total = document.createElement('p');
//     total.classList.add('total');
//     total.innerHTML = "$" + parseFloat(((rolls[`${this.type}`].basePrice)+(glazingPrice[`${this.glazing}`].glazingPrice))*(packSizePrice[`${this.size}`].value)).toFixed(2);
//     total.value = parseFloat(((rolls[`${this.type}`].basePrice)+(glazingPrice[`${this.glazing}`].glazingPrice))*(packSizePrice[`${this.size}`].value)).toFixed(2);
//     orderDetailsContainer.appendChild(total);
//     const shopping = document.querySelector(".shopping");
//     shoppingContainer.appendChild(shopping);
//     const totalCheckoutPrice = document.querySelector(".totalCheckoutPrice");
//     shoppingContainer.appendChild(totalCheckoutPrice);
//     const totalWord = document.querySelector(".totalWord");
//     totalCheckoutPrice.appendChild(totalWord);
//     const totalPrice = document.querySelector(".totalPrice");
//         let totals = 0;
//         let prices = document.querySelectorAll('.total');
//         for(let i=0; i < prices.length; i++) {
//             totals += parseFloat(prices[i].value);
//         }
//     totalPrice.innerHTML = "$" + totals;
//     totalCheckoutPrice.appendChild(totalPrice);
//     const checkoutButton = document.querySelector(".checkoutButton");
//     shoppingContainer.appendChild(checkoutButton);

//     remove.addEventListener('click', function() {
//         //total =  total - (parseFloat(((rolls[`${this.type}`].basePrice)+(glazingPrice[`${this.glazing}`].glazingPrice))*(packSizePrice[`${this.size}`].value)).toFixed(2));
//         // for (let i=0; i<cart.length;i++) {
//         //     cart.splice([i], 1); 
//         // }
//         // const index = cart.indexOf(cartCard);
//         // console.log(index);
//         // if (index > -1) {
            
//         //     cart.splice(index, 1);
            
//         // }
//         cart.delete();
//         //console.log(cartCard);
//         //i am trying to figure out how to remove my selection from the array but this isn't working//
//         //cart.splice(`${this.Roll}`, 1);
//         //cart.delete(this.Roll)
//         //this is removing the selected option from the page//
//         cartCard.remove();
//     });
// }


// //creating newRollOne and setting its type, glazing, size, and basePrice to equal the values of the item that was clicked on//
// let newRollOne = new Roll("Original", "Sugar milk", 1, 2.49);
// //console.log(newRollOne);
// //creating newRollTwo and setting its type, glazing, size, and basePrice to equal the values of the item that was clicked on//
// let newRollTwo = new Roll("Walnut", "Vanilla milk", 12, 3.49);
// //console.log(newRollTwo);
// //creating newRollThree and setting its type, glazing, size, and basePrice to equal the values of the item that was clicked on//
// let newRollThree = new Roll("Raisin", "Sugar milk", 3, 2.99);
// //console.log(newRollThree);
// //creating newRollFour and setting its type, glazing, size, and basePrice to equal the values of the item that was clicked on//
// let newRollFour = new Roll("Apple", "Original", 3, 3.49);
// //console.log(newRollFour);
// cart.add(newRollOne); 
// cart.add(newRollTwo);
// cart.add(newRollThree);
// cart.add(newRollFour);
// console.log(cart);

// function addRolls(instance){
//     instance.render();
// }

// addRolls(newRollOne);
// addRolls(newRollTwo);
// addRolls(newRollThree);
// addRolls(newRollFour);







// new rolls
// create cartCardadd card to set
//             roll, element, button, removecard, removelement, update set
// addcard to set



