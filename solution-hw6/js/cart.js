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