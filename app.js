
 function updateProductNumber(product, price, isIncreasing) {
     console.count('update fn clicked')
    const productInput = document.getElementById(product + '-number');
    let productNumbr = productInput.value;
    if (isIncreasing == true) {
        productNumbr = parseInt(productNumbr) + 1; 
    }
     else if(productNumbr > 0) {
        productNumbr = parseInt(productNumbr) - 1;
    }
    productInput.value = productNumbr;
    //  upadate case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumbr * price;
    // calsulate total
    calculateTotal()

 }



function getInputValue(product) {
    const productInput  = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value); 
    return productNumber;
}


 function calculateTotal() {
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case')*59;
   const subTotal = phoneTotal + caseTotal;
   const tax = subTotal / 10;
   const totalPrice = subTotal + tax;
//   update on the html
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = tax;

 }


// phone case increase dcrease event

document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, false); 
})


//  handale case increase dcrease event
document.getElementById('case-plus').addEventListener('click', function() {
    updateProductNumber('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function() { 
    updateProductNumber('case', 59, false)
})