$(document).ready(function () {
  $(".gallery").on("click", "img", function () {
    let source = $(this).attr("src");
    $(".image-viewer img").attr("src", source);
    $(".image-viewer").css("display", "block");
  });

  $(".image-viewer").click(function () {
    $(".image-viewer").css("display", "none");
  });
});
