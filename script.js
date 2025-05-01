
let cart = [];

function addToCart() {
  cart.push('AirPods 2da Generación');
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = cart.map(item => `<p>${item}</p>`).join('');
}

function confirmOrder() {
  const message = encodeURIComponent('Hola, quiero pedir: ' + cart.join(', '));
  window.open(`https://wa.me/573195546863?text=${message}`, '_blank');
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}
