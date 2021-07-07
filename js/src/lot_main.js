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
    "backi" : "../img/event2.jpg",
    "name" : "evimg_02",
  },
  {
    "link" : "http://naver.com",
    "backi" : "../img/event3.jpg",
    "name" : "evimg_03",
  },
  {
    "link" : "http://naver.com",
    "backi" : "../img/event4.jpg",
    "name" : "evimg_04",
  },
  {
    "link" : "http://naver.com",
    "backi" : "../img/event5.jpg",
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
  },
  {
    "link" : "http://naver.com",
    "bestmenuI" : "../img/2.png",
    "name" : "버거",
    "price" : "00원",
    "kcal" : "00kcal"
  },
  {
    "link" : "http://naver.com",
    "bestmenuI" : "../img/3.png",
    "name" : "버거",
    "price" : "00원",
    "kcal" : "00kcal"
  },
  {
    "link" : "http://naver.com",
    "bestmenuI" : "../img/4.png",
    "name" : "버거",
    "price" : "00원",
    "kcal" : "00kcal"
  },
  {
    "link" : "http://naver.com",
    "bestmenuI" : "../img/5.png",
    "name" : "버거",
    "price" : "00원",
    "kcal" : "00kcal"
  },
  {
    "link" : "http://naver.com",
    "bestmenuI" : "../img/6.png",
    "name" : "버거",
    "price" : "00원",
    "kcal" : "00kcal"
  },
];
// 변수
var iDc = $('.indicator_box'); // 인디케이터
var iUl = iDc.children('ul');

var evI = $('.evimage_box'); // 이벤트 이미지 박스
var eUl = evI.children('ul');

var bmUl = $('.bm_box'); // 추천 메뉴

// 인디케이터 li 요소 생성
var evLiFn = function(setData){
  var evLi = '<li><a href="#"></a></li>';
  iUl.append(evLi);
};

// 이벤트 li 요소 생성
var evimLiFn = function(setData){
  var evimLi = '<li><a><span></span></a></li>';
  eUl.append(evimLi);
  
  var evA = eUl.children('a');
  
  evA.attr('href', setData.link);
  eUl.children('li').eq(-1).attr('id', setData.name);
  eUl.children('li').eq(-1).css({backgroundImage : 'url(' + setData.backi + ')'});
}
// 추천 메뉴 li 요소 생성
var bmLiFn = function(setData){
  var bmLi = '<li><dl><dt><a><span class="blind">메뉴 이름<span></a><div></div></dt><dd><p></p><p></p></dd></dl></li>';
  bmUl.append(bmLi);
};
// 추천 메뉴 생성자
function BmCard(data){
  this.link = data.link;
  this.bestmenuI = data.bestmenuI;
  this.name = data.name;
  this.price = data.price;
  this.kcal = data.kcal;
}
// 이벤트 생성자
function EvimgCard(data){
  this.link = data.link;
  this.backi = data.backi;
  this.name = data.name;
}
// -------------------------------------------------------------------

// 이벤트 생성
var i = 0;
var evsetCard;
var evimgLen = evimgDataAll.length;
for(; i < evimgLen; i++){
  evsetCard = new EvimgCard(evimgDataAll[i]);
  evimLiFn(evsetCard);
};

// 인디케이터 생성
var i = 0;
for(; i<evimgLen; i++){
  evsetCard = new EvimgCard(evimgDataAll[i]);
  evLiFn(evsetCard);
};
// 추천 메뉴 생성
var i = 0;
var bmsetCard;
var bmLen = bestmenuAll.length;
for(; i < bmLen; i++){
  bmsetCard = new BmCard(bestmenuAll[i]);
  evLiFn(bmsetCard)
}

// 이벤트를 움직이기 변수
var viewBox = $('#viewBox');
var eveLi = eUl.children('li'); // 이벤트 li 생성 후 재선언
var eveLiLen = eveLi.length; // eveLi의 길이 저장

var indiLi = iUl.children('li'); // 인디케이터 li 생성 후
indiLi.eq(0).addClass('act');
var indiA = indiLi.children('a'); // li a

var evbtn = $('.evbutton_box'); // 버튼 박스
var evNextbtn = evbtn.children('.next_btn'); // 다음 버튼
var evPrevbtn = evbtn.children('.prev_btn'); // 이전 버튼
// 인디케이터 반응 함수
var indiFn = function(n){
  var indi = indiLi.eq(n);
  indi.addClass('act'); // 누른것만 추가
  indi.siblings().removeClass('act'); // 나머진 제거
}
// 애니메이션을 위한 박스 크기 설정
eUl.css({width:(100*eveLiLen) + '%'}); // 100% * li의 갯수
eveLi.css({width:(100/eveLiLen) + '%'}); // ul의 크기 / li의 갯수

// 자연스러운 애니메이션을 위한 설정
var liClone = eveLi.eq(-1).clone(); // 맨뒤 요소를 복사
eUl.prepend(liClone); // 복사한 것을 ul앞쪽에 추가
var neweveLi = eUl.children('li'); // 복사 후 새로 선언
var neweveLiLen = neweveLi.length; // li 길이

eUl.css({width:(100*neweveLiLen) + '%', left:-100 + '%' }); // ul길이 설정
neweveLi.css({width:(100/neweveLiLen) + '%'}); // li길이 설정

// 버튼 이벤트 지정
var permission = true; // 버튼 활성화 변수
var n=0; // 버튼 클릭 수

// 이벤트 다음버튼 이벤트
evNextbtn.on('click', function(e){
  e.preventDefault();
  if(permission){ 
    permission = false; // 버튼 연속으로 못누르게 제한
    n++; // 클릭 수 증가
    if(n > eveLiLen-1){  // li요소의 길이를 넘어가면
      n=0;
      eUl.css({marginLeft:100 + '%'}); // 첫번째 페이지로 빠르게 전환
    }
    indiFn(n); // 인디케이터 함수 호출
    eUl.animate({marginLeft:-(100*n) + '%'}, function(){
      permission = true; // 애니메이션이 끝나면 버튼 활성화
    });
  }
});
// 이벤트 이전버튼 이벤트
evPrevbtn.on('click', function(e){ 
  e.preventDefault();
  if(permission){
    permission = false;
    n--;
    indiFn(n);
    eUl.animate({marginLeft:-(100*n) + '%'}, function(){
      if(n < 0){
        n = eveLiLen-1;
        eUl.css({marginLeft:-(100*n) + '%'});
      }
      permission = true;
    });
  }
});
// 변수
var autoMoveFn;
// 자동 애니메이션 함수
var goslideFn = function(){
  autoMoveFn = setInterval(function(){
    // n의 수치가 일정범위 내에서 처리되는것을 파악
    evNextbtn.trigger('click');
  }, 2000);
};
var stopslideFn = function(){
  clearInterval(autoMoveFn);
}
// 마우스 올렸을 때 자동 애니메이션 멈춤
viewBox.on('mouseenter', function(){
  stopslideFn();
});
// 마우스 벗어나면 다시 자동 애니메이션
viewBox.on('mouseleave', function(){
  goslideFn();
})
// 자동 애니메이션 실행
goslideFn();

// 인디케이터 클릭 이벤트
indiA.on('click', function(e){
  e.preventDefault();
  var t = $(this).parent().index();
  eUl.stop().animate({marginLeft : (-100*t) + '%'});
  indiFn(t);
  n = t;
});

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
