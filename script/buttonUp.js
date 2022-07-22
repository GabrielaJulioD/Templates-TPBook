document.getElementById('btn_contup').addEventListener('click', scrollup);
function scrollup(){

  var currentScroll = document.documentElement.scrollTop;

  if(currentScroll > 0 ){
    window.requestAnimationFrame(scrollup);
    window.scrollTo (0,currentScroll - (currentScroll / 4));
  }
}
// scroll detect
buttonUp = document.getElementById('btn_contup');
window.onscroll = function(){
  var scroll = document.documentElement.scrollTop;

  if(scroll > 100){
    buttonUp.style.transform = 'scale(1)'
  }else if(scroll < 100){
    buttonUp.style.transform = 'scale(0)'
  }
}