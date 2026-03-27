// $("h1").css("color", "green");
// $("h1").css("font-size", "5rem");

$("h1").addClass("big-title margin-50");
//$("h1").removeClass("big-title");

$("h1");
$("button"); // document.querySelectorAll("button")

$("button").text("PROVA");
$("button").html("<em>PROVA</em>");

$("a").attr("href", "https://www.yahoo.it");

$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "red");
});

$("input").keypress(function (event) {
  console.log(event.key);
});

$("input").keypress(function (event) {
  console.log(event.key);
});

$("input").keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "blue");
});

$("h1").before("<button>PROVA</button>");
$("h1").after("<button>PROVA</button>");
$("h1").prepend("<button>PROVA</button>");
$("h1").append("<button>PROVA</button>");

//$("h1").remove();

/*
$("button").on("click", function () {
  $("h1").fadeOut();
});

$("button").on("click", function () {
  $("h1").fadeIn();
});

$("button").on("click", function () {
  $("h1").fadeToggle();
});

$("button").on("click", function () {
  $("h1").slideUp();
});

$("button").on("click", function () {
  $("h1").slideDown();
});

$("button").on("click", function () {
  $("h1").slideToggle();
});


$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 });
});
*/

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
