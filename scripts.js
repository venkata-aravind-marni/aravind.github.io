$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 40) {
      $(".navbar").removeClass("d-none");
      // $(".navbar").css("box-shadow" , "5px 0px 10px #888888");
    } 
    else {
      $(".navbar").addClass("d-none");
      // $(".navbar").css("box-shadow" , "0px 0px 0px #ffffff");
    }
  });
});

// NAV ACTIVE

var btns = $(".navbar .navbar-nav .nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(window)
  .scroll(function () {
    var distance = $(window).scrollTop();
    $(".page-section").each(function (i) {
      if ($(this).position().top <= distance + 250) {
        $(".navbar-nav a.active").removeClass("active");
        $(".navbar-nav a").eq(i).addClass("active");
      }
    });
  })
  .scroll();

let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
