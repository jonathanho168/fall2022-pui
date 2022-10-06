class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element = null;

        this.createElement();
        this.updateElement();
    }

// clone template and enable "Remove" button
createElement() {
    let template = document.querySelector("#buntemplate");
    
    const clone = template.content.cloneNode(true);
    this.element = clone.querySelector(".bunitem1");

    const btnRemove = this.element.querySelector('.remove');
	btnRemove.onclick = this.removeRoll.bind(this);
}

// update HTML content for each element, e.g. pictures
updateElement() {
    // access elements in cart.html that we are going to update
    const rollImage = this.element.querySelector(".cart-bunpic");
    const productName = this.element.querySelector(".cart-productname");
    const glazing = this.element.querySelector(".cart-glazing");
    const packsize = this.element.querySelector(".cart-pack");
    const price = this.element.querySelector(".cart-price");

    let totalPrice = this.totalPrice();

    // replace HTML content, inner text
    rollImage.src = '../static/' + rolls[this.type].imageFile;
    productName.innerText = this.type + " Cinnamon Roll";
    glazing.innerText = "Glazing: " + this.glazing;
    packsize.innerText = "Pack size: " + this.size;
    price.innerText = "$ " + (totalPrice);
    
}

// functionality of removing roll from cart
removeRoll() {
    this.element.remove();
    cart.delete(this);

    cartTotal();
}

totalPrice() {
    // adapted from onSelectChange() in updatePrice.js

    let packAdapt = 0;
    for (const pack of packsize) {
        if (pack.size == this.size) {
            packAdapt = pack.priceFactor;
        }
    }


    let glazeAdapt = 0;
    for (const glaze of glazing) {
        if (this.glazing == glaze.glazing) {
            glazeAdapt = glaze.price;
        }
    }

    const calculatedPrice_rounded = ((this.basePrice + glazeAdapt) * packAdapt).toFixed(2);

    return calculatedPrice_rounded;
}


}

const cart = new Set();

// add 4 new Roll objects to my cart
let original = "Original";
let originalRoll = new Roll(original, "Sugar Milk", 1, rolls[original].basePrice);
cart.add(originalRoll);

let walnut = "Walnut";
let walnutRoll = new Roll(walnut, "Vanilla Milk", 12, rolls[walnut].basePrice);
cart.add(walnutRoll);

let raisin = "Raisin";
let raisinRoll = new Roll(raisin, "Sugar Milk", 3, rolls[raisin].basePrice);
cart.add(raisinRoll);

let apple = "Apple";
let appleRoll = new Roll(apple, "Keep original", 3, rolls[apple].basePrice);
cart.add(appleRoll);

let cartSection = document.querySelector(".cartitems");
for (const roll of cart) {
    cartSection.append(roll.element);
}

function cartTotal() {
    let sumPrice = 0;
    let cartTotal = document.querySelector(".sum-price");
    for (const roll of cart) {
        sumPrice = sumPrice + parseFloat(roll.totalPrice());
    }

    cartTotal.innerText = "$ " + sumPrice.toFixed(2);
}

cartTotal();