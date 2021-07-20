// d_pc.js

(function($){
// jQuery
$.ajax({
  url:'../../data/evimgData.json',
  context:document.body
}).done(function(data){
  var myData = data;

  // 변수
var evUl = $('.ev_list');

var evLiFn = function(){
  var evLi = '<li><dl><a href="#"></a><dt></dt><dd></dd></dl></li>';
  evUl.append(evLi);
};

var i = 0;
var myDataLen = myData.length;

for(; i<myData.length; i++){
  evLiFn();
}

});

})(jQuery);