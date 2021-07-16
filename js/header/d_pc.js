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
var permission = 1; // 애니메이션 끝날 때까지 기능 잠금
gnB.on('mouseenter', function(e){
  e.preventDefault();
  if(permission){
    permission = 0;
    gnBsc.slideDown(function(){
      permission = 1;
    });
  }
});
gnB.on('mouseleave', function(e){
  e.preventDefault();
  if(permission){
    permission = 0;
    gnBsc.delay(500).slideUp(function(){
      permission = 1;
    });
  }
});
gnB.find('a').on('focus', function(e){
  e.preventDefault();
  
  gnBsc.stop().slideDown();
});
gnB.find('a').on('blur', function(e){
  e.preventDefault();
  
  gnBsc.stop().slideUp();
});
})(jQuery);