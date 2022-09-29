class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// new array called cart
const cart = [];

// get roll type from URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');



// extract roll information (name, price, image path)
let selectedRoll = rolls[rollType];

function render() {
    // update relevant DOM elements
    let heading = document.querySelector('#heading');
    let detailRollPic = document.querySelector('#detail-roll-pic');
    let basePrice = document.querySelector('#calc-price');

    // update heading to be <Type> Cinnamon Roll
    heading.innerText = rollType + ' Cinnamon Roll';

    // update the image for the Details page
    detailRollPic.src = '../static/' + selectedRoll.imageFile;

    //update base price for the Details page
    basePrice.innerText = selectedRoll.basePrice;

}

// Add roll with customizations to cart
let rollButton = document.querySelector('#add-to-cart');
rollButton.addEventListener("click", addToCart);

function addToCart() {
    let rollChoice = new Roll(rollType, glazingChange, packChange, selectedRoll.basePrice);
    cart.push(rollChoice);
    console.log(cart);
}

render();