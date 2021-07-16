// b_tablet.js

(function($){
// jQuery
var myData = [];
var dataLink = [
    '../data/bestmenuData.json', // 추천 메뉴 데이터
    '../data/evimgData.json',    // 이벤트 이미지 데이터
    '../data/reviewData.json'    // 리뷰 데이터
];
for(var i=0; i<dataLink.length; i+=1){
  $.ajax({
    url: dataLink[i],
    context: document.body
  }).done(function(data){
    // console.log(data);
    myData.push(data);
  }); // ajax
}

setTimeout(function(){

// 변수
var hdB = $('#headBox'); // header
var gnB = $('.globalnavi_box'); // 글로벌 네비 박스
var gnBmc = $('.main_content'); // 글로벌 네비 박스 메인컨텐츠
var gnBsc = $('.sub_content'); // 글로벌 네비 박스 서브컨텐츠
var gnBb = gnB.find('.gnb_btn'); // 모바일 gnb 버튼
var unB = $('.usernavi_box'); // 유저 네비 박스
var unBb = unB.find('.unb_btn'); // 모바일 unb 버튼

var iDc = $('.indicator_box'); // 인디케이터
var iUl = iDc.children('ul');

var evI = $('.evimage_box'); // 이벤트 이미지 박스
var eUl = evI.children('ul');

var bmUl = $('.bm_box'); // 추천 메뉴

var rvUl = $('.rr_box'); // 리뷰

// 인디케이터 li 요소 생성
var evLiFn = function(){
  var evLi = '<li><a href="#"></a></li>';
  iUl.append(evLi);
};

// 이벤트 li 요소 생성
var evimLiFn = function(setData){
  var evimLi = '<li><a><span>자세히 보기</span></a></li>';
  eUl.append(evimLi);
  
  var evA = eUl.find('a');
  
  evA.attr('href', setData.link);
  eUl.children('li').eq(-1).attr('id', setData.name);
  eUl.children('li').eq(-1).css({backgroundImage : 'url(' + setData.backi + ')'});
}
// 추천 메뉴 li 요소 생성
var bmLiFn = function(setData){
  var bmLi = '<li><dl><dt><a><span class="blind">메뉴 이름<span></a><div></div></dt><dd><p></p><p></p><p></p></dd></dl></li>';
  bmUl.append(bmLi);

  bmUl.children('li').eq(-1).find('dt').find('a').css({backgroundImage : 'url(' + setData.bestmenuI +')'});
  bmUl.children('li').eq(-1).find('a').attr('href', setData.link);
  bmUl.children('li').eq(-1).find('p').eq(0).text(setData.name);
  bmUl.children('li').eq(-1).find('p').eq(1).text(setData.price);
  bmUl.children('li').eq(-1).find('p').eq(2).text(setData.kcal);
};
// 리뷰 li 요소 생성
var rvLiFn = function(setData){
  var rvLi = '<li><dl><dt></dt><dd><p></p><p></p><p></p><p><i></i><i></i><i></i><i></i><i></i></p></dd><dl></li>';
  rvUl.append(rvLi);

  rvUl.children('li').eq(-1).find('dt').css({backgroundImage : 'url(' + setData.menuI + ')'});
  rvUl.children('li').eq(-1).find('p').eq(0).text(setData.menuname);
  rvUl.children('li').eq(-1).find('p').eq(1).text('(' + ' ' + setData.userid + ' - ' + setData.username + ' ' + ')');
  rvUl.children('li').eq(-1).find('p').eq(2).text(setData.review);
  rvUl.children('li').eq(-1).find('p').eq(-1).find('i').css({backgroundImage : 'url(' + setData.star + ')'});
}

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
// 리뷰 생성자
function RvCard(data){
  this.menuI = data.menuI;
  this.menuname = data.menuname;
  this.userid = data.userid;
  this.username = data.username;
  this.review = data.review;
  this.star   = data.star;
}
// -------------------------------------------------------------------

// 이벤트 생성
var i = 0;
var evsetCard;
var evimgLen = myData[1].length;
for(; i < evimgLen; i++){
  evsetCard = new EvimgCard(myData[1][i]);
  evimLiFn(evsetCard);
};

// 인디케이터 생성
var i = 0;
for(; i<evimgLen; i++){
  evLiFn();
};

// 추천 메뉴 생성
var i = 0;
var bmsetCard;
var bmLen = myData[0].length;
for(; i < bmLen; i++){
  bmsetCard = new BmCard(myData[0][i]);
  bmLiFn(bmsetCard)
}

// 리뷰 생성
var i = 0;
var rvsetCard;
var rvLen = myData[2].length;
for(; i < rvLen; i++){
  rvsetCard = new RvCard(myData[2][i]);
  rvLiFn(rvsetCard);
}

// 이벤트 변수
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

// 추천 메뉴 애니메이션 mobile tablet
var bmBtn = $('.bmbutton_box'); // 추천 메뉴 버튼영역
var bmBtnN = bmBtn.children('.next_btn'); // 추천메뉴 다음버튼
var bmBtnP = bmBtn.children('.prev_btn'); // 추천메뉴 이전버튼
var bmUl = $('.bm_box'); // 추천 메뉴 ul 영역
var bmLi = bmUl.children('li'); // 추천 메뉴 ul 영역 li
var bmLiLen = bmLi.length; // li 길이

bmUl.css({width:(bmLiLen * 100) + '%'});
bmLi.css({width:(100 / bmLiLen)+ '%' });

// 추천 메뉴 애니메이션 add
var bmLiclone = bmLi.eq(-1).clone();
bmUl.prepend(bmLiclone);
var newbmLi = bmUl.children('li');
var newbmLiLen = newbmLi.length;

bmUl.css({width:(100*newbmLiLen) + '%' , left : -100 + '%' });
newbmLi.css({width:(100 / newbmLiLen)+ '%'});

var k=0; // 추천 메뉴 버튼 클릭스
bmBtnN.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission = false;
    k++;
    if(k > bmLi.length-1){
      k=0;
      bmUl.css({marginLeft:100 + '%'});
    }

    bmUl.animate({marginLeft:(-100*k) + '%'}, function(){
      permission = true;
    });
  }
});
bmBtnP.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission = false;
    k--;
    bmUl.animate({marginLeft:(-100*k) + '%'}, function(){
      if(k < 0){
        k=bmLi.length-1;
        bmUl.css({marginLeft:-100*k + '%'});
      }
      permission = true;
    });
  }
});
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
});

// 인디케이터 클릭 이벤트
indiA.on('click focus', function(e){
  e.preventDefault();
  var t = $(this).parent().index();
  eUl.stop().animate({marginLeft : (-100*t) + '%'});
  indiFn(t);
  n = t;
});

}, 300);
})(jQuery);