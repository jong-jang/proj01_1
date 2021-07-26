// d_pc.js

(function($){

var viewUl = $('.view_list');
var btnN = $('.next_btn');
var btnP = $('.prev_btn');
var indi = $('.indi_box');
var indiUl = $('.indi_wrap');
var indiLi = indiUl.children('li');

var permission = 1;
var n=0;
btnN.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission = 0;
    n++;
    if(n>3){
      n=3;
    }
    indiLi.eq(n).addClass('act');
    indiLi.eq(n).siblings().removeClass('act');
    viewUl.animate({marginLeft:-n*100 + '%'}, function(){
      permission = 1;
    });
  }
});
btnP.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission = 0;
    n--;
  if(n<0){
    n=0;
  }
  indiLi.eq(n).addClass('act');
  indiLi.eq(n).siblings().removeClass('act');
  viewUl.animate({marginLeft:-n*100 + '%'}, function(){
    permission = 1;
  });
  }
});
})(jQuery);
