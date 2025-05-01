
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

let carritoCount = 0;

function agregarAlCarrito(event) {
    event.stopPropagation();
    carritoCount++;
    document.getElementById('carrito-count').innerText = carritoCount;
    document.getElementById('carrito-detalles').innerHTML = `
        <p>AirPods 2Gen - Cantidad: ${carritoCount}</p>
        <p><strong>Total:</strong> ${99.999 * carritoCount} COP</p>
    `;
}

function irAWhatsApp() {
    const numero = '3195546863';
    const mensaje = Hola, estoy interesado en comprar ${carritoCount} AirPods 2Gen.;
    window.open(https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}, '_blank');
}

function verDetalles() {
    const modal = document.getElementById('modal');
    modal.style.display = "block";
}

function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Cerrar modal cuando se haga clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
