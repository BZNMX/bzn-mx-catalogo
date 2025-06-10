// Filtro de productos
function filterProducts(category) {
    const items = document.querySelectorAll('.producto');

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Carrusel automático de imágenes
document.addEventListener("DOMContentLoaded", () => {
    const productos = document.querySelectorAll(".producto-imagenes");

    productos.forEach(producto => {
        let images = producto.querySelectorAll("img");
        let current = 0;

        setInterval(() => {
            images.forEach(img => img.style.opacity = "0");
            images[current].style.opacity = "1";
            current = (current + 1) % images.length;
        }, 3000); // Cambia de imagen cada 3 segundos
    });
}

// Modal de contacto
function toggleContactModal() {
    const modal = document.getElementById("contact-modal");
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}


// Carrusel automático de imágenes
document.addEventListener("DOMContentLoaded", () => {
    const productos = document.querySelectorAll(".producto-imagenes");

    productos.forEach(producto => {
        let images = producto.querySelectorAll("img");
        let current = 0;

        setInterval(() => {
            images.forEach(img => img.style.opacity = "0");
            images[current].style.opacity = "1";
            current = (current + 1) % images.length;
        }, 3000); // Cambia cada 3 segundos
    });
});


// Efecto 3D al hacer scroll
window.addEventListener('scroll', () => {
    const logoContainer = document.querySelector('.logo-container');
    if (window.scrollY > 0) {
        logoContainer.classList.add('scroll-effect');
    } else {
        logoContainer.classList.remove('scroll-effect');
    }
});


function toggleQuienesSomos() {
    const contenido = document.getElementById("contenido-quienes");
    contenido.style.display = contenido.style.display === "block" ? "none" : "block";
}


function abrirModalQuienes() {
    document.getElementById("modal-quienes").style.display = "flex";
}

function cerrarModalQuienes() {
    document.getElementById("modal-quienes").style.display = "none";
}



let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - ${producto.precio}`;
        lista.appendChild(li);
    });
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}