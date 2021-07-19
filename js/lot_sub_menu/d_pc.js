// lot_sub_menu/d_pc.js

(function($){
// jQuery
var menuData = [
  {
    "link" : "http://naver.com",
    "bestmenuI" : "../../img/1.png",
    "name" : "핫크리스피 버거",
    "price" : "4,900원",
    "kcal" : "503kcal"
  },
  {
    "link" : "http://naver.com",
    "bestmenuI" : "../../img/2.png",
    "name" : "불고기 버거",
    "price" : "3,900원",
    "kcal" : "442kcal"
  },
  {
    "link" : "http://naver.com",
    "bestmenuI" : "../../img/3.png",
    "name" : "폴더버거 비프",
    "price" : "5,800원",
    "kcal" : "509kcal"
  },
  {
    "link" : "http://naver.com",
    "bestmenuI" : "../../img/4.png",
    "name" : "모짜렐라 인 더 버거",
    "price" : "6,200원",
    "kcal" : "715kcal"
  },
  {
    "link" : "http://naver.com",
    "bestmenuI" : "../../img/3.png",
    "name" : "폴더버거 비프",
    "price" : "5,800원",
    "kcal" : "509kcal"
  },
  {
    "link" : "http://naver.com",
    "bestmenuI" : "../../img/6.png",
    "name" : "치즈 No.5",
    "price" : "4,900원",
    "kcal" : "509kcal"
  }
]

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
var mnLen = menuData.length;

for(; i < mnLen; i++){
  mnsetCard = new MnCard(menuData[i]);
  mnLiFn(mnsetCard)
}

})(jQuery);