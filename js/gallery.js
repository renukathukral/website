function generateImageElem(data) {
  return `<div class="image-wrapper">
  <img src="../img/Selected/${data.ImagePath}" />
</div>`;
}

function fillGallery(arr) {
  $(".gallery").html("");
  arr.forEach((doc) => {
    $(".gallery").append(generateImageElem(doc));
  });
}

$(document).ready(function () {
  jQuery.get("gallery.csv", (csv) => {
    var data = $.csv.toObjects(csv);
    fillGallery(data);
  });
});
