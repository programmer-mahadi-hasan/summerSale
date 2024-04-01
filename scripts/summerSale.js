
function setElementInnerText(elementId) {
    const selectedProduct = document.getElementById("productSelected");
    const p = document.createElement('p');
    const count = selectedProduct.childElementCount;
    p.innerHTML = `${count + 1}. ${elementId}`
    selectedProduct.appendChild(p);
}
let totalPrice = 0;
const purchaseBtn = document.getElementById("purchaseBtn");
const applyBtn = document.getElementById("applyBtn");

function prod1(){
    const productName = document.getElementById("prod1").innerText;
    setElementInnerText(productName);
    const productPriceText = document.getElementById("prod1Price").innerText;
    const productPrice = parseFloat(productPriceText);
    const totalPriceElement = document.getElementById("totalPrice");
    totalPrice += productPrice;
    totalPriceElement.innerText = `${totalPrice.toFixed(2)}`;
    if (totalPrice > 0 ) {
        purchaseBtn.removeAttribute("disabled");
    }
    if (totalPrice >= 200) {
        applyBtn.removeAttribute("disabled");
    }
}

function prod2(){
    const productName = document.getElementById("prod2").innerText;
    setElementInnerText(productName);
    const productPriceText = document.getElementById("prod2Price").innerText;
    const productPrice = parseFloat(productPriceText);
    const totalPriceElement = document.getElementById("totalPrice");
    totalPrice += productPrice;
    totalPriceElement.innerText = `${totalPrice.toFixed(2)}`;
    if (totalPrice > 0 ) {
        purchaseBtn.removeAttribute("disabled");
    }
    if (totalPrice >= 200) {
        applyBtn.removeAttribute("disabled");
    }
}
function prod3(){
    const productName = document.getElementById("prod3").innerText;
    setElementInnerText(productName);
    const productPriceText = document.getElementById("prod3Price").innerText;
    const productPrice = parseFloat(productPriceText);
    const totalPriceElement = document.getElementById("totalPrice");
    totalPrice += productPrice;
    totalPriceElement.innerText = `${totalPrice.toFixed(2)}`;
    if (totalPrice > 0 ) {
        purchaseBtn.removeAttribute("disabled");
    }
    if (totalPrice >= 200) {
        applyBtn.removeAttribute("disabled");
    }
}
function prod4(){
    const productName = document.getElementById("prod4").innerText;
    setElementInnerText(productName);
    const productPriceText = document.getElementById("prod4Price").innerText;
    const productPrice = parseFloat(productPriceText);
    const totalPriceElement = document.getElementById("totalPrice");
    totalPrice += productPrice;
    totalPriceElement.innerText = `${totalPrice.toFixed(2)}`;
    if (totalPrice > 0 ) {
        purchaseBtn.removeAttribute("disabled");
    }
    if (totalPrice >= 200) {
        applyBtn.removeAttribute("disabled");
    }
}
function prod5(){
    const productName = document.getElementById("prod5").innerText;
    setElementInnerText(productName);
    const productPriceText = document.getElementById("prod5Price").innerText;
    const productPrice = parseFloat(productPriceText);
    const totalPriceElement = document.getElementById("totalPrice");
    totalPrice += productPrice;
    totalPriceElement.innerText = `${totalPrice.toFixed(2)}`;
    if (totalPrice > 0 ) {
        purchaseBtn.removeAttribute("disabled");
    }
    if (totalPrice >= 200) {
        applyBtn.removeAttribute("disabled");
    }
}
function prod6(){
    const productName = document.getElementById("prod6").innerText;
    setElementInnerText(productName);
    const productPriceText = document.getElementById("prod6Price").innerText;
    const productPrice = parseFloat(productPriceText);
    const totalPriceElement = document.getElementById("totalPrice");
    totalPrice += productPrice;
    totalPriceElement.innerText = `${totalPrice.toFixed(2)}`;
    if (totalPrice > 0 ) {
        purchaseBtn.removeAttribute("disabled");
    }
    if (totalPrice >= 200) {
        applyBtn.removeAttribute("disabled");
    }
}
function prod7(){
    const productName = document.getElementById("prod7").innerText;
    setElementInnerText(productName);
    const productPriceText = document.getElementById("prod7Price").innerText;
    const productPrice = parseFloat(productPriceText);
    const totalPriceElement = document.getElementById("totalPrice");
    totalPrice += productPrice;
    totalPriceElement.innerText = `${totalPrice.toFixed(2)}`;
    if (totalPrice > 0 ) {
        purchaseBtn.removeAttribute("disabled");
    }
    if (totalPrice >= 200) {
        applyBtn.removeAttribute("disabled");
    }
}
function prod8(){
    const productName = document.getElementById("prod8").innerText;
    setElementInnerText(productName);
    const productPriceText = document.getElementById("prod8Price").innerText;
    const productPrice = parseFloat(productPriceText);
    const totalPriceElement = document.getElementById("totalPrice");
    totalPrice += productPrice;
    totalPriceElement.innerText = `${totalPrice.toFixed(2)}`;
    if (totalPrice > 0 ) {
        purchaseBtn.removeAttribute("disabled");
    }
    if (totalPrice >= 200) {
        applyBtn.removeAttribute("disabled");
    }
}
function prod9(){
    const productName = document.getElementById("prod9").innerText;
    setElementInnerText(productName);
    const productPriceText = document.getElementById("prod9Price").innerText;
    const productPrice = parseFloat(productPriceText);
    const totalPriceElement = document.getElementById("totalPrice");
    totalPrice += productPrice;
    totalPriceElement.innerText = `${totalPrice.toFixed(2)}`;
    if (totalPrice > 0 ) {
        purchaseBtn.removeAttribute("disabled");
    }
    if (totalPrice >= 200) {
        applyBtn.removeAttribute("disabled");
    }
}

document.getElementById("applyBtn").addEventListener('click', function (){
    const couponInput = document.getElementById("couponField");
    const couponValue = couponInput.value;
    couponInput.value = '';
    const discount = document.getElementById("discount");
    let discountPrice = parseFloat(discount.innerText);
    const total = document.getElementById("total");
    let totalPay = parseFloat(total.innerText);
    if (couponValue === 'SELL200') {
        discountPrice = totalPrice * 0.2;
        discount.innerText = discountPrice.toFixed(2);
        totalPay  = totalPrice - discountPrice;
        total.innerText = totalPay.toFixed(2);
    }
})