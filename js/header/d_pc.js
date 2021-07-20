// header/d_pc.js

(function($){
// jQuery
var hdB = $('#headBox'); // header
var gnB = $('.globalnavi_box'); // 글로벌 네비 박스
var gnBmc = $('.main_content'); // 글로벌 네비 박스 메인컨텐츠
var gnBsc = $('.sub_content'); // 글로벌 네비 박스 서브컨텐츠
var gnBb = gnB.find('.gnb_btn'); // 모바일 gnb 버튼
var unB = $('.usernavi_box'); // 유저 네비 박스
var unBb = unB.find('.unb_btn'); // 모바일 unb 버튼
// 헤더 글로벌 네비 기능 laptop , pc

gnB.on('mouseenter', function(e){
  e.preventDefault();
  hdB.stop().animate({height:300 + 'px', opacity : '0.9'});
});
gnB.on('mouseleave', function(e){
  e.preventDefault();
  hdB.stop().animate({height:100 + 'px', opacity : '1'});
});
gnB.find('a').on('focus', function(e){
  e.preventDefault();
  
  hdB.stop().animate({height:300 + 'px', opacity : '0.9'});
});
gnB.find('a').on('blur', function(e){
  e.preventDefault();
  
  hdB.stop().animate({height:100 + 'px', opacity : '1'});
});
})(jQuery);