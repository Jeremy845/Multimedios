var btnAbrirPopup = document.getElementById('btn-abrir-popup'),

	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    //----------------------

    var btnAbrirPopup1 = document.getElementById('btn-abrir-popup-1'),

	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    //------------------------
    var btnAbrirPopup2 = document.getElementById('btn-abrir-popup-2'),

	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    //------------------------------------
    var btnAbrirPopup3 = document.getElementById('btn-abrir-popup-3'),

	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});
//-----------------------------------------
btnAbrirPopup1.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});
//------------------------------------
btnAbrirPopup2.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});
//---------------------------------
btnAbrirPopup3.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});
//--------------

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});
$(document).ready(function(){ //Hacia arriba
	irArriba();
  });
  
  function irArriba(){
	$('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
	$(window).scroll(function(){
	  if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
	});
	$('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
  }