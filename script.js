
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

let carritoCount = 0;

function agregarAlCarrito() {
    carritoCount++;
    document.getElementById('carrito-count').innerText = carritoCount;
}

function irAWhatsApp() {
    const numero = '3195546863';
    const mensaje = 'Hola, estoy interesado en comprar los AirPods 2Gen.';
    window.open(https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}, '_blank');
}
