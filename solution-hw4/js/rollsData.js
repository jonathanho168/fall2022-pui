class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// dictionary of rolls
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpeg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpeg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpeg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpeg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpeg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpeg"
    }    
};

// new array called cart
const cart = [];

// get roll type from URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');



// extract roll information (name, price, image path)

// update relevant DOM elements
let selectedRoll = rolls[rollType];
let heading = document.querySelector('#heading');
let detailRollPic = document.querySelector('#detail-roll-pic');

// update heading to be <Type> Cinnamon Roll
heading.innerText = rollType + ' Cinnamon Roll';

// update the image for the Details page
detailRollPic.src = '../static/' + selectedRoll.imageFile;


// Add roll with customizations to cart
let rollButton = document.querySelector('#add-to-card');
rollButton.addEventListener("click", addToCart);

function addToCart() {
    
}