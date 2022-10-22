//populate the dropdowns with the above
let glazeDropdown = document.querySelector('#glazing');
let packDropdown = document.querySelector('#packsize');

for (var i = 0; i < glazing.length; i++) {
    var option = glazing[i];
    var optionElement = document.createElement("option");
    optionElement.textContent = option.glazing;
    optionElement.value = option.price;
    glazeDropdown.appendChild(optionElement);    
}

for (var i = 0; i < packsize.length; i++) {
    var option = packsize[i];
    var optionElement = document.createElement("option");
    optionElement.textContent = option.size;
    optionElement.value = option.priceFactor;
    packDropdown.appendChild(optionElement);    
}



// Update price based on customer selection
let glazingChange = document.querySelector('#glazing');
glazingChange.addEventListener("change", onSelectChange);

let packChange = document.querySelector('#packsize');
packChange.addEventListener("change", onSelectChange);

function onSelectChange() {

    // console.log("onSelectChange");


    let glazeAdapt = Number(glazingChange.value);
    let packAdapt = Number(packChange.value);

    // get the price element so that we have something to modify
    let price = document.querySelector('#calc-price');

    // calculate final price of the product to be added to cart
    const basePrice = selectedRoll.basePrice;
    let calculatedPrice_rounded = ((basePrice + glazeAdapt) * packAdapt).toFixed(2);    
    // console.log(basePrice);
    // console.log(glazeAdapt);
    // console.log(packAdapt);
    let calculatedPrice= ("$" + calculatedPrice_rounded);

    // modify webpage HTML
    price.innerText = calculatedPrice;
    
}