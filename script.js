$(document).ready(function(){
  // Al cargar la página, ocultamos las cortinas
  $('.cortina-izquierda').css('width', '0%');
  $('.cortina-derecha').css('width', '0%');
  $("#taytay").hide();

  $('.dia-de-san-valentin').click(function(){
    // Animación de desvanecimiento de los elementos del sobre
    $('.sobre').css({'animation':'caida 3s linear 1', '-webkit-animation':'caida 3s linear 1'});
    $('.sobre').fadeOut(800, function() {
      // Ocultar elementos dentro de .dia-de-san-valentin
      $('.dia-de-san-valentin .corazon, .dia-de-san-valentin .texto, .dia-de-san-valentin .frente').hide();
      

      // Hacer visible la carta con una animación ondulante
      $('#carta').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
      $('#carta').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
        var escala = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
        $(this).css('transform', 'scale(' + escala + ')');
      $("#taytay").show();
      var audioElement = $("#cielo")[0];
    audioElement.currentTime = 50; // Inicia la reproducción a los 50 segundos
    audioElement.play(); 
      }}); // Animación de ondulación
    });
  });
});

document.addEventListener('mousemove', function(e){
  let contenedor = document.getElementById('contenedor');
  let corazon = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;         
  corazon.style.left = x+'px';
  corazon.style.top = y+'px';
  
  let tamaño = Math.random() * 80;
  corazon.style.width = 20 + tamaño+'px';
  corazon.style.height = 20 + tamaño+'px';

  let valorTransformacion = Math.random() * 360;
  corazon.style.transform = 'rotate('+valorTransformacion+'deg)';
  
  contenedor.appendChild(corazon);

  setTimeout(function(){
    corazon.remove();
  },1000)
})