// d_pc.js

(function($){
// jQuery
$.ajax({
  url:'../../data/evimgData.json',
  context:document.body
}).done(function(data){
  var myData = data;

  // 변수
var evUl = $('.ev_list'); // html에서 호출

var evLiFn = function(setData){ // 이벤트 리스트 생성
  var evLi = '<li><dl><a href="#"></a><dt></dt><dd></dd></dl></li>';
  evUl.append(evLi);

  evUl.children('li').eq(-1).find('dt').css({backgroundImage : 'url(' + setData.backi + ')'}); // 이미지
  evUl.children('li').eq(-1).find('dd').text(setData.info); // 설명
};

var i = 0;
var myDataLen = myData.length; // 데이터의 길이 추출

for(; i<myData.length; i++){
  evLiFn(myData[i]);
}

});
// 당첨자조회 / 진행중인이벤트 클릭 이벤트
var evC = $('.ev_content');
var evLi = evC.children('li');
var evA = evLi.children('a');
var eL = $('.ev_list');
var aW = $('.announce_winner');

evLi.eq(0).children('a').on('click', function(e){
  e.preventDefault();

  var _this = $(this).parent().index();

  evLi.eq(_this).addClass('act');
  evLi.eq(_this).siblings().removeClass('act');
  eL.show();
  aW.hide();
});
evLi.eq(1).children('a').on('click', function(e){
  e.preventDefault();

  var _this = $(this).parent().index();

  evLi.eq(_this).addClass('act');
  evLi.eq(_this).siblings().removeClass('act');
  aW.show();
  eL.hide();
});
})(jQuery);