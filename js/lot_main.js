// lot_main.js

// 인디케이터 li 요소 생성
var iDc = document.getElementsByClassName('indicator_box')[0];
var iUl = iDc.getElementsByTagName('ul')[0];

var evLiFn = function(){
  var evLi = document.createElement('li');
  var insertCode = '<a href="#"><span class="blind"></span></a>';
  evLi.innerHTML = insertCode;
  iUl.appendChild(evLi);
}

// 이벤트이미지 li 요소 생성
var evI = document.getElementsByClassName('evimage_box')[0];
var eUl = evI.getElementsByTagName('ul')[0];

var evimLiFn = function(setData){
  var evimLi = document.createElement('li');
  var insertCode = '<a><span></span></a>';
  evimLi.innerHTML = insertCode;
  eUl.appendChild(evimLi);

  var evA = eUl.getElementsByTagName('a')[0];

  evA.setAttribute('href', setData.link);
  evimLi.setAttribute('class', setData.name);
  evimLi.style.backgroundImage = 'url(' + setData.backi + ')';


}
// 이벤트 이미지 데이터
var cardDataAll = [
  {
    link : 'http://naver.com',
    backi : '../img/event1.jpg',
    name : 'evimg_01',
  },
  {
    link : 'http://naver.com',
    backi : '../img/event2.png',
    name : 'evimg_02',
  },
  {
    link : 'http://naver.com',
    backi : '../img/event1.jpg',
    name : 'evimg_03',
  },
  {
    link : 'http://naver.com',
    backi : '../img/event2.png',
    name : 'evimg_04',
  },
  {
    link : 'http://naver.com',
    backi : '../img/event1.jpg',
    name : 'evimg_05',
  }
];

function MakeCard(data){
  this.link = data.link;
  this.backi = data.backi;
  this.name = data.name;
};
// ------------------------------------------
var i=0;
for(; i<5; i++){
  evLiFn();
};

var i = 0;
var setCard;
var cardLen = cardDataAll.length;
for(; i < cardLen; i++){
  setCard = new MakeCard(cardDataAll[i]);
  evimLiFn(setCard);
};