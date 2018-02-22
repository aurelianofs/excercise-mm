(function(){

  var bodyElement = document.querySelector('body');
  window.onload = function() { 
    bodyElement.classList.add('loaded');
  };

  var currentSlide = 1;

  var nextTrigger = document.querySelector('.navigation-arrow_right');
  nextTrigger.addEventListener('click', function(e){
    e.preventDefault();
    if(currentSlide < 10) currentSlide++;
    goToCurrentSlide();
  });

  var prevTrigger = document.querySelector('.navigation-arrow_left');
  prevTrigger.addEventListener('click', function(e){
    e.preventDefault();
    if(currentSlide > 1) currentSlide--;
    goToCurrentSlide();
  });

  var dotTriggers = document.querySelectorAll('.navigation-dot');
  for (var i = 0; i < dotTriggers.length; i++) {
    var dotTrigger = dotTriggers[i];
    dotTrigger.addEventListener('click', function(e){
      e.preventDefault();
      currentSlide = this.dataset.target;
      goToCurrentSlide();
    });
  }

  var navigationBottom = document.querySelector('.navigation-bottom');
  var onTransition = false;
  var goToCurrentSlide = function(){
    bodyElement.dataset.activeSlide = currentSlide;

    navigationBottom.classList.remove('active-step');
    clearTimeout(onTransition);
    onTransition = setTimeout(function(){
      navigationBottom.dataset.step = currentSlide - 1;
      navigationBottom.classList.add('active-step');
    }, 1250);
  }
})();
