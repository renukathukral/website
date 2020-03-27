$(document).ready(function() {
  $(".gallery img").click(function() {
    let source = $(this).attr("src");
    $(".image-viewer img").attr("src", source);
    $(".image-viewer").css("display", "block");
  });

  $(".image-viewer .close").click(function() {
    $(".image-viewer").css("display", "none");
  });
});
