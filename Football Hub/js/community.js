
var index = 0;   
    window.onload = function(){
        slideShow();
    }  
    function slideShow() {
    var i;
    var x = document.getElementsByClassName("slide1");  
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";   
    }
    index++;
    if (index > x.length) {
        index = 1;  
    }   
    x[index-1].style.display = "block";  
    setTimeout(slideShow, 2500);   
}

var form = document.getElementById("post-form");

// 새 게시물이 제출될 때마다 이 함수가 호출됩니다.
form.addEventListener("submit", function(event) {
  // 이벤트를 중지하여 기본 양식 제출 동작이 발생하지 않습니다.
  event.preventDefault();

  // 새 게시물 데이터를 가져옵니다.
  var title = document.getElementById("title").value;
  var author = document.getElementById("user").value;
  var content = document.getElementById("content").value;

  // 새 게시물을 만듭니다.
  var post = {
    title: title,
    author: author,
    content: content
  };

  // 게시물을 게시물 목록에 추가합니다.
  var postList = document.getElementById("post-list");
  var li = document.createElement("li");
    li.innerText = post.title + " by " + post.author;
    postList.appendChild(li);
});