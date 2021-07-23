// header/a_phone.js

(function($){
// jQuery
var hdB = $('#headBox'); // header
var gnB = $('.globalnavi_box'); // 글로벌 네비 박스
var gnBmc = $('.main_content'); // 글로벌 네비 박스 메인컨텐츠
var gnBsc = $('.sub_content'); // 글로벌 네비 박스 서브컨텐츠
var gnBb = gnB.find('.gnb_btn'); // 모바일 gnb 버튼
var unB = $('.usernavi_box'); // 유저 네비 박스
var unBb = unB.find('.unb_btn'); // 모바일 unb 버튼
var unBuc = $('.user_content'); // 모바일 unb 유저컨텐츠
// 헤더 글로벌 네비 기능 tablet, mobile;
gnBb.on('click', function(e){
  e.preventDefault();

  gnBmc.slideToggle();
  unBuc.hide();
});
unBb.on('click', function(e){
  e.preventDefault();

  unBuc.slideToggle();
  gnBmc.hide();
})
})(jQuery);