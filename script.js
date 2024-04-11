
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            const img_full = document.createElement('img');
            img_full.src = this.src;
            lightbox.appendChild(img_full);
            document.body.appendChild(lightbox);
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(item => {
        item.addEventListener("click", function() {
            const imgSrc = this.getAttribute("src");

            const lightboxContainer = document.createElement("div");
            lightboxContainer.id = "lightbox-container";

            const lightboxContent = document.createElement("div");
            lightboxContent.id = "lightbox-content";

            const img = document.createElement("img");
            img.src = imgSrc;

            lightboxContent.appendChild(img);
            lightboxContainer.appendChild(lightboxContent);

            document.body.appendChild(lightboxContainer);

            lightboxContainer.addEventListener("click", function() {
                lightboxContainer.remove();
            });
        });
    });
});



$(document).ready(function() {
    var slideIndex = 0;
    var slides = $('.slider img');
    var totalSlides = slides.length;

    // Función para mostrar el slide actual
    function showSlide() {
        slides.removeClass('active');
        slides.eq(slideIndex).addClass('active');
        $('.slider').css('transform', 'translateX(' + (-slideIndex * 100) + '%)');
        updateDots();
    }

    // Crear controles de puntos
    function createDots() {
        var dotsContainer = $('.slider-controls');
        for (var i = 0; i < totalSlides; i++) {
            $('<div class="dot"></div>').appendTo(dotsContainer);
        }
        updateDots();
    }

    // Actualizar estado de los controles de puntos
    function updateDots() {
        $('.dot').removeClass('active');
        $('.dot').eq(slideIndex).addClass('active');
    }

    // Navegación al hacer clic en un punto
    $('.slider-controls').on('click', '.dot', function() {
        slideIndex = $(this).index();
        showSlide();
    });

    // Navegación al hacer clic en botón Anterior
    $('.prev-btn').click(function() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide();
    });

    // Navegación al hacer clic en botón Siguiente
    $('.next-btn').click(function() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide();
    });

    // Automáticamente cambiar al siguiente slide cada 5 segundos
    var autoSlide = setInterval(function() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide();
    }, 5000);

    // Pausar el slider automático al pasar el mouse sobre el contenedor
    $('.slider-container').hover(
        function() {
            clearInterval(autoSlide);
        },
        function() {
            autoSlide = setInterval(function() {
                slideIndex = (slideIndex + 1) % totalSlides;
                showSlide();
            }, 5000);
        }
    );

    // Inicializar controles de puntos y mostrar primer slide
    createDots();
    showSlide();
});


$(document).ready(function() {
    // Mostrar/ocultar submenús al hacer clic
    $('.menu-item').click(function() {
        $(this).find('.submenu').slideToggle();
    });
});



document.getElementById('toggle').addEventListener('change', function() {
    var navigation = document.querySelector('.navigation');
    if (this.checked) {
      navigation.style.display = 'block';
    } else {
      navigation.style.display = 'none';
    }
  });
  
