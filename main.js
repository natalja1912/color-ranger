
/*variable that will switch range options from ranging text color
 to ranging background color*/
let RANGE_OPTION = 'color';

/* functoion to add class "active" to menu buttons to change their color 
and choose between background and font colors */
$('.fieldset__button').click(function () {
  $('.fieldset__button').removeClass('fieldset__button_active');
  $(this).toggleClass('fieldset__button_active');
  if ($(this).text() === 'color') {
    RANGE_OPTION = 'color';
  }
  else {
    RANGE_OPTION = 'background-color';
  }
})

//color ranger function
$(function () {
  function hexFromRGB(r, g, b) {
    var hex = [
      r.toString(16),
      g.toString(16),
      b.toString(16)
    ];
    $.each(hex, function (nr, val) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });
    return hex.join("").toUpperCase();
  }
  function refreshSwatch() {
    var red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    if (RANGE_OPTION === 'color') {
      $("#swatch").css("color", "#" + hex);
    }
    else {
      $("#swatch").css("background-color", "#" + hex);
    }
  }

  $("#red, #green, #blue").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $("#red").slider("value", 255);
  $("#green").slider("value", 140);
  $("#blue").slider("value", 60);
});
