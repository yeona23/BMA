$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $("header").addClass("scroll");
  } else {
    $("header").removeClass("scroll");
  }
});

$(".icon").click(function () {
  if ($("header .search_text input.active").hasClass("active") == true) {
    $("header .search_text input.active").removeClass("active");
  } else {
    $("header .search_text input").addClass("active");
  }
});

$(".langue_arr").click(function () {
  if ($("header .langue_ko.active").hasClass("active") == true) {
    $("header .langue_ko.active").removeClass("active");
    $(this).removeClass("active");
  } else {
    $("header .langue_ko").addClass("active");
    $(this).addClass("active");
  }
});
$(".sec02_next").click(function () {
  $(".sec02_slidebox").addClass("active");
});
$(".sec02_prev").click(function () {
  $(".sec02_slidebox").removeClass("active");
});

$("header nav a").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
