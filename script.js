// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Mostrar detalles del producto al hacer clic
    const botonesDetalles = document.querySelectorAll('.btn-detalles');
    const detalleContainer = document.getElementById('detalle-container');
    const detalleTexto = document.getElementById('detalle-texto');

    botonesDetalles.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const info = e.target.getAttribute('data-info');
            detalleTexto.textContent = info;
            detalleContainer.classList.remove('d-none');
        });
    });

    // 2. Validación en tiempo real del Formulario de Contacto
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (contactForm.checkValidity()) {
                formFeedback.innerHTML = `
                    <div class="alert alert-success">
                        ¡Gracias por contactar a KEVA-SOLAR! Nos comunicaremos contigo pronto.
                    </div>`;
                contactForm.reset();
                contactForm.classList.remove('was-validated');
            } else {
                contactForm.classList.add('was-validated');
                formFeedback.innerHTML = `
                    <div class="alert alert-danger">
                        Por favor, completa todos los campos requeridos correctamente.
                    </div>`;
            }
        }, false);
    }
});