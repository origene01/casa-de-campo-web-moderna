const btnDepartamentos = document.getElementById('btn-departamentos'),
	btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
	grid = document.getElementById('grid'),
	contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
	contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
	esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
	if (!esDispositivoMovil()) {
		grid.classList.add('activo');
	}
});

grid.addEventListener('mouseleave', () => {
	if (!esDispositivoMovil()) {
		grid.classList.remove('activo');
	}
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		if (!esDispositivoMovil()) {
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if (categoria.dataset.categoria == e.target.dataset.categoria) {
					categoria.classList.add('activo');
				}
			});
		};
	});
});

// EventListeners para dispositivo movil.
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
	e.preventDefault();
	if (contenedorEnlacesNav.classList.contains('activo')) {
		contenedorEnlacesNav.classList.remove('activo');
		document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo');
		document.querySelector('body').style.overflow = 'hidden';
	}
});

// Click en boton de todos los departamentos (Para version movil).
btnDepartamentos.addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.add('activo');
	btnCerrarMenu.classList.add('activo');
});

// Boton de regresar en el menu de categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.remove('activo');
	btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		if (esDispositivoMovil()) {
			contenedorSubCategorias.classList.add('activo');
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if (categoria.dataset.categoria == e.target.dataset.categoria) {
					categoria.classList.add('activo');
				}
			});
		}
	});
});

// Boton de regresar en el menu de categorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		contenedorSubCategorias.classList.remove('activo');
	});
});

btnCerrarMenu.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelectorAll('#menu .activo').forEach((elemento) => {
		elemento.classList.remove('activo');
	});
	document.querySelector('body').style.overflow = 'visible';
});

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
	slides.forEach((slide) => {
		slide.classList.remove('active');

		btns.forEach((btn) => {
			btn.classList.remove('active');
		});
	});

	slides[manual].classList.add('active');
	btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		manualNav(i);
		currentSlide = i;
	});
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
	let active = document.getElementsByClassName('active');
	let i = 1;

	var repeater = () => {
		setTimeout(function () {
			[...active].forEach((activeSlide) => {
				activeSlide.classList.remove('active');
			});

			slides[i].classList.add('active');
			btns[i].classList.add('active');
			i++;

			if (slides.length == i) {
				i = 0;
			}
			if (i >= slides.length) {
				return;
			}
			repeater();
		}, 10000);
	}
	repeater();
}
repeat();

// Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {

	var currentScroll = document.documentElement.scrollTop;

	if (currentScroll > 0) {
		window.requestAnimationFrame(scrollUp);
		window.scrollTo(0, currentScroll - (currentScroll / 10));
	}
}


///

buttonUp = document.getElementById("button-up");

window.onscroll = function () {

	var scroll = document.documentElement.scrollTop;

	if (scroll > 500) {
		buttonUp.style.transform = "scale(1)";
	} else if (scroll < 500) {
		buttonUp.style.transform = "scale(0)";
	}

}

 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  

AOS.init();