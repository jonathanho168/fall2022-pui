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