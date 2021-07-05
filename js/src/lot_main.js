// lot_main.js

(function($){
// jQuery
// 이벤트 이미지 데이터
var evimgDataAll = [
  {
    "link" : "http://naver.com",
    "backi" : "../img/event1.jpg",
    "name" : "evimg_01",
  },
  {
    "link" : "http://naver.com",
    "backi" : "../img/event2.png",
    "name" : "evimg_02",
  },
  {
    "link" : "http://naver.com",
    "backi" : "../img/event1.jpg",
    "name" : "evimg_03",
  },
  {
    "link" : "http://naver.com",
    "backi" : "../img/event2.png",
    "name" : "evimg_04",
  },
  {
    "link" : "http://naver.com",
    "backi" : "../img/event1.jpg",
    "name" : "evimg_05",
  }
];
// 추천 메뉴 데이터
var bestmenuAll = [
  {
    "link" : "http://naver.com",
    "bestmenuI" : "../img/1.png",
    "name" : "버거",
    "price" : "00원",
    "kcal" : "00kcal"
  }
];
// 변수
var iDc = $('.indicator_box');
var iUl = iDc.children('ul');

var evI = $('.evimage_box');
var eUl = evI.children('ul');

var bmUl = $('.bm_box');
// 인디케이터 li 요소 생성
var evLiFn = function(){
  var evLi = '<li><a href="#"></a></li>';
  iUl.append(evLi);
};

// 이벤트 li 요소 생성
var evimLiFn = function(setData){
  var evimLi = '<li><a><span></span></a></li>';
  eUl.append(evimLi);
  
  var evA = eUl.children('a');
  
  evA.attr('href', setData.link);
  eUl.children('li').eq(-1).attr('class', setData.name);
  eUl.children('li').eq(-1).css({backgroundImage : 'url(' + setData.backi + ')'});
}

// 추천메뉴 li 요소 생성
var bmLiFn = function(){

};

function EvimgCard(data){
  this.link = data.link;
  this.backi = data.backi;
  this.name = data.name;
}
// -------------------------------------------------------------------

// 이벤트 목록생성
var i = 0;
var setCard;
var evimgLen = evimgDataAll.length;
for(; i < evimgLen; i++){
  setCard = new EvimgCard(evimgDataAll[i]);
  evimLiFn(setCard);
};

// indicator 생성
var i = 0;
for(; i<evimgLen; i++){
  evLiFn();
};

})(jQuery);

// js=============================================================================
// 이벤트 데이터
// var evimgDataAll = [
//   {
//     "link" : "http://naver.com",
//     "backi" : "../img/event1.jpg",
//     "name" : "evimg_01",
//   },
//   {
//     "link" : "http://naver.com",
//     "backi" : "../img/event2.png",
//     "name" : "evimg_02",
//   },
//   {
//     "link" : "http://naver.com",
//     "backi" : "../img/event1.jpg",
//     "name" : "evimg_03",
//   },
//   {
//     "link" : "http://naver.com",
//     "backi" : "../img/event2.png",
//     "name" : "evimg_04",
//   },
//   {
//     "link" : "http://naver.com",
//     "backi" : "../img/event1.jpg",
//     "name" : "evimg_05",
//   }
// ];
// // 추천 메뉴 데이터
// var bestmenuAll = [
//   {
//     "link" : "http://naver.com",
//     "bestmenuI" : "../img/1.png",
//     "name" : "버거",
//     "price" : "00원",
//     "kcal" : "00kcal"
//   }
// ];
// // 인디케이터 li 요소 생성
// var iDc = document.getElementsByClassName('indicator_box')[0];
// var iUl = iDc.getElementsByTagName('ul')[0];

// var evLiFn = function(){
//   var evLi = document.createElement('li');
//   var insertCode = '<a href="#"><span class="blind"></span></a>';
//   evLi.innerHTML = insertCode;
//   iUl.appendChild(evLi);
// };

// // 이벤트 li 요소 생성
// var evI = document.getElementsByClassName('evimage_box')[0];
// var eUl = evI.getElementsByTagName('ul')[0];

// var evimLiFn = function(setData){
//   var evimLi = document.createElement('li');
//   var insertCode = '<a><span></span></a>';
//   evimLi.innerHTML = insertCode;
//   eUl.appendChild(evimLi);

//   var evA = eUl.getElementsByTagName('a')[0];

//   evA.setAttribute('href', setData.link);
//   evimLi.setAttribute('class', setData.name);
//   evimLi.style.backgroundImage = 'url(' + setData.backi + ')';
// };

// // 추천메뉴 li 요소 생성
// var bmUl = document.getElementsByClassName('bm_box')[0];

// var bmLiFn = function(){

// };

// // 이벤트 이미지함수
// function EvimgCard(data){
//   this.link = data.link;
//   this.backi = data.backi;
//   this.name = data.name;
// };
// // ------------------------------------------

// var i = 0;
// var setCard;
// var evimgLen = evimgDataAll.length;
// for(; i < evimgLen; i++){
//   setCard = new EvimgCard(evimgDataAll[i]);
//   evimLiFn(setCard); // 이벤트 생성 함수
// };

// i=0;
// for(; i<evimgLen; i++){
//   evLiFn(); // 인디케이터 생성함수
// };