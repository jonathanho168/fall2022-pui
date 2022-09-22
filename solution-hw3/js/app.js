
// list of glazing options with price adaptation
let glazing = [
    {
        glazing: 'Keep original',
        price: 0.0,
    },
    {
        glazing: 'Sugar milk',
        price: 0.0,
    },
    {
        glazing: 'Vanilla milk',
        price: 0.5,
    },
    {
        glazing: 'Double chocolate',
        price: 1.50,
    }
]

// list of pack size options with price adaptation
let packsize = [
    {
        size: 1,
        priceFactor: 1,
    },
    {
        size: 3,
        priceFactor: 3,
    },
    {
        size: 6,
        priceFactor: 5,
    },
    {
        size: 12,
        priceFactor: 10,
    }
]

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
    const basePrice = 2.49;
    let calculatedPrice_rounded = ((basePrice + glazeAdapt) * packAdapt).toFixed(2);    
    // console.log(basePrice);
    // console.log(glazeAdapt);
    // console.log(packAdapt);
    let calculatedPrice= ("$" + calculatedPrice_rounded);

    // modify webpage HTML
    price.innerText = calculatedPrice;
    
}