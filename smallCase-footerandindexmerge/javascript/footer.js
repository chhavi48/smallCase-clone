var form1 = document.getElementById("form01");

form1.addEventListener("submit", () => {
  event.preventDefault();

  $(".alert").removeClass("hide");
  $(".alert").addClass("show");
  setTimeout(function () {
    $(".alert").addClass("hide");
    $(".alert").removeClass("show");
  }, 6000);
});

$(".close-btn").click(function () {
  $(".alert").addClass("hide");
  $(".alert").removeClass("show");
});
