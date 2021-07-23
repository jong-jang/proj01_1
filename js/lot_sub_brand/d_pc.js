// d_pc.js

(function($){

var viewUl = $('.view_list');
var btnN = $('.next_btn');
var btnP = $('.prev_btn');

var n=0;
btnN.on('click', function(e){
  e.preventDefault();
  n++;
  if(n>3){
    n=3;
  }
  viewUl.animate({marginLeft:-n*100 + '%'})
});
btnP.on('click', function(e){
  e.preventDefault();
  n--;
  if(n<0){
    n=0;
  }
  viewUl.animate({marginLeft:-n*100 + '%'})
});
})(jQuery);
