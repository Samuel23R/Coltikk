
let cart = [];
function addToCart() {
    cart.push({ name: "AirPods 2da Generación", price: 100000 });
    updateCart();
}
function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        total += item.price;
    });
    cartTotal.innerText = total;
}
function toggleCart() {
    const cart = document.getElementById("cart");
    cart.style.display = (cart.style.display === "block") ? "none" : "block";
}
function checkout() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const url = `https://wa.me/573195546863?text=Hola, estoy interesado en comprar los AirPods 2da Generación de Coltikk. Total a pagar: $${total} COP. ¿Puedo pagar por Nequi o Daviplata?`;
    window.open(url, '_blank');
}
