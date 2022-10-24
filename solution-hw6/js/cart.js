// functionality of removing roll from cart
function removeRoll(roll) {
    //remove from DOM
    roll.element.remove();

    // remove from cart

    let index = cart.indexOf(roll);
    cart.splice(index, 1);

    cartTotal();
    updateLocalStorage();

    console.log(cart);

}

function totalPrice(roll) {
    // adapted from onSelectChange() in updatePrice.js

    let packAdapt = 0;
    for (const pack of packsize) {
        if (pack.size == roll.size) {
            packAdapt = pack.priceFactor;
        }
    }

    let glazeAdapt = 0;
    for (const glaze of glazing) {
        if (roll.glazing == glaze.glazing) {
            glazeAdapt = glaze.price;
        }
    }

    const calculatedPrice_rounded = ((roll.basePrice + glazeAdapt) * packAdapt).toFixed(2);
    return calculatedPrice_rounded;
}

function createElement(roll) {
    let template = document.querySelector("#buntemplate");
    
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector(".bunitem1");

    const btnRemove = roll.element.querySelector('.remove');
    btnRemove.addEventListener("click", () => {removeRoll(roll);});
}

// update HTML content for each element, e.g. pictures
function updateElement(roll) {
    // access elements in cart.html that we are going to update
    const rollImage = roll.element.querySelector(".cart-bunpic");
    const productName = roll.element.querySelector(".cart-productname");
    const glazing = roll.element.querySelector(".cart-glazing");
    const packsize = roll.element.querySelector(".cart-pack");
    const price = roll.element.querySelector(".cart-price");

    let rollTotalPrice = totalPrice(roll);

    // replace HTML content, inner text
    rollImage.src = '../static/' + rolls[roll.type].imageFile;
    productName.innerText = roll.type + " Cinnamon Roll";
    glazing.innerText = "Glazing: " + roll.glazing;
    packsize.innerText = "Pack size: " + roll.size;
    price.innerText = "$ " + (rollTotalPrice);
    
}



let cart = [];
function retrieveFromLocalStorage() {
    if (localStorage.getItem('cart') != null) {
        const cartString = localStorage.getItem('cart');
        cart = JSON.parse(cartString);
    }
}

function updateLocalStorage() {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}

retrieveFromLocalStorage();


let cartSection = document.querySelector(".cartitems");
for (const roll of cart) {
    createElement(roll);
    updateElement(roll);
    cartSection.append(roll.element);
}

function cartTotal() {
    let sumPrice = 0;
    let cartTotal = document.querySelector(".sum-price");
    for (const roll of cart) {
        sumPrice = sumPrice + parseFloat(totalPrice(roll));
    }

    cartTotal.innerText = "$ " + sumPrice.toFixed(2);
}

cartTotal();