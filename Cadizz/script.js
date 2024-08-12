document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { 
        header.classList.add('scrolled'); // Añadir clase si se hace scroll
    } else {
        header.classList.remove('scrolled'); // Remover clase si vuelve a la posición superior
    }
});
// scripts.js

window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const scrollY = window.scrollY;

    // Cambiar el tamaño del logo y su opacidad al hacer scroll
    if (scrollY > 50) {
        logo.style.transform = 'scale(0.8)';
        logo.style.opacity = '0.7';
    } else {
        logo.style.transform = 'scale(1)';
        logo.style.opacity = '1';
    }
});



//OPCIONES DE LAS REMERAS
document.getElementById('add-to-cart').addEventListener('click', function() {
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const feedback = document.getElementById('feedback');

    // Validaciones
    if (!size) {
        feedback.textContent = 'Por favor, selecciona un tamaño.';
        feedback.classList.add('error');
        feedback.style.display = 'block';
        return;
    }

    if (quantity < 1) {
        feedback.textContent = 'La cantidad debe ser al menos 1.';
        feedback.classList.add('error');
        feedback.style.display = 'block';
        return;
    }

    // Simulación de agregar al carrito
    feedback.textContent = `¡Producto agregado al carrito! Tamaño: ${size}, Cantidad: ${quantity}`;
    feedback.classList.remove('error');
    feedback.style.display = 'block';

    // Limpiar feedback después de 3 segundos
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 3000);
});


//LUPA PARA HACER ZOOM EN LAS PRENDAS
document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('main-image');
    const zoomLens = document.getElementById('zoom-lens');
    const lensSize = zoomLens.offsetWidth / 3; // Tamaño del lente de zoom


    // Función para mostrar la imagen principal al hacer clic en miniaturas
    function showMainImage(src) {
        mainImage.src = src;
    }

    // Función para manejar el zoom
    function zoom(e) {
        const rect = mainImage.getBoundingClientRect();
        const x = e.pageX - rect.left;
        const y = e.pageY - rect.top;
        const lensSize = zoomLens.offsetWidth / 2;

        // Limitar el área de zoom
        if (x > rect.width - lensSize) x = rect.width - lensSize;
        if (x < lensSize) x = lensSize;
        if (y > rect.height - lensSize) y = rect.height - lensSize;
        if (y < lensSize) y = lensSize;

        zoomLens.style.left = `${x - lensSize}px`;
        zoomLens.style.top = `${y - lensSize}px`;

        const lens = zoomLens;
        lens.style.backgroundImage = `url(${mainImage.src})`;
        lens.style.backgroundSize = `${rect.width * 2}px ${rect.height * 2}px`;
        lens.style.backgroundPosition = `-${x * 2 - lensSize}px -${y * 2 - lensSize}px`;
    }

    // Mostrar la lupa y manejar el zoom
    mainImage.addEventListener('mouseover', function() {
        zoomLens.style.display = 'block';
    });

    mainImage.addEventListener('mousemove', zoom);

    mainImage.addEventListener('mouseleave', function() {
        zoomLens.style.display = 'none';
    });

    // Exponer la función de cambio de imagen
    window.showMainImage = showMainImage;
});
/*MENU DE LA PAGINA PRINCIPAL */
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('open');
        menuIcon.classList.toggle('open');
        // Cambia la posición del menú cuando se abre
        if (menu.classList.contains('open')) {
            menu.style.right = '0';
        } else {
            menu.style.right = '-200px'; // Debe coincidir con el ancho del menú
        }
    });
});


/*-------------------------------- */
function filterProducts(category) {
    var products = document.getElementsByClassName('product');
    for (var i = 0; i < products.length; i++) {
        if (category === 'all') {
            products[i].classList.add('show');
        } else if (products[i].classList.contains(category)) {
            products[i].classList.add('show');
        } else {
            products[i].classList.remove('show');
        }
    }
}

// Mostrar todos los productos al cargar la página
filterProducts('all');

