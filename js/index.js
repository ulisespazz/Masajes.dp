var interval = 500;

var slide;

$('section.back').click(function(){
  var slide = $('.nautilus div:last-child').remove();
  $('.nautilus').prepend(slide);
});

$('#redes').click(function(){
  addTargetingClass();
  
  setTimeout(function() {
      removeTargetingClass();
  }, 3000);
});

function addTargetingClass() {
  $('#id-3').addClass('target-highlight');
}

function removeTargetingClass() {
  $('#id-3').removeClass('target-highlight');
}