// lot_sub_menu/d_pc.js

(function($){
// jQuery
$.ajax({
  url:'../../data/bestmenuData.json',
  context:document.body
}).done(function(data){
  var myData = data;

var mnUl = $('.menu_box');

// 메뉴 li 요소 생성
var mnLiFn = function(setData){
  var mnLi = '<li><dl><dt><a><span class="blind">메뉴 이름<span></a><div></div></dt><dd><p></p><p></p><p></p></dd></dl></li>';
  mnUl.append(mnLi);

  mnUl.children('li').eq(-1).find('dt').find('a').css({backgroundImage : 'url(' + setData.bestmenuI +')'});
  mnUl.children('li').eq(-1).find('a').attr('href', setData.link);
  mnUl.children('li').eq(-1).find('p').eq(0).text(setData.name);
  mnUl.children('li').eq(-1).find('p').eq(1).text(setData.price);
  mnUl.children('li').eq(-1).find('p').eq(2).text(setData.kcal);
};

// 메뉴 생성자
function MnCard(data){
  this.link = data.link;
  this.bestmenuI = data.bestmenuI;
  this.name = data.name;
  this.price = data.price;
  this.kcal = data.kcal;
}
// 메뉴 생성
var i = 0;
var mnsetCard;
var myDataLen = myData.length;

for(; i < myDataLen; i++){
  mnsetCard = new MnCard(myData[i]);
  mnLiFn(mnsetCard)
}
});
})(jQuery);