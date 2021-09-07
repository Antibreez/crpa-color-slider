"use strict";

(function () {
  var $colorBtn = $('.btn-control__color');
  var $bgColorBtn = $('.btn-control__bg-color');
  var $text = $('.slider-control__text');
  var $redBox = $('.slider--red .slider__box');
  var $redDrag = $('.slider--red .slider__drag');
  var $redLine = $('.slider--red .slider__line');
  var $greenBox = $('.slider--green .slider__box');
  var $greenDrag = $('.slider--green .slider__drag');
  var $greenLine = $('.slider--green .slider__line');
  var $blueBox = $('.slider--blue .slider__box');
  var $blueDrag = $('.slider--blue .slider__drag');
  var $blueLine = $('.slider--blue .slider__line');
  var redValue = 0;
  var greenValue = 0;
  var blueValue = 0;

  function getColor() {
    return "rgb(".concat(redValue, ", ").concat(greenValue, ", ").concat(blueValue, ")");
  }

  function getSliderOptions(box, _drag, line, colorType) {
    return {
      axis: "x",
      containment: box,
      drag: function drag() {
        line.css('width', _drag.position().left + _drag.width() / 2 + 'px');
      },
      stop: function stop(e, ui) {
        var x1 = _drag.position().left;

        var colorValue = Math.round(x1 * 255 / (box.width() - _drag.outerWidth()));
        colorType === 'red' ? redValue = colorValue : colorType === 'green' ? greenValue = colorValue : colorType === 'blue' ? blueValue = colorValue : null;
      }
    };
  }

  $colorBtn.on('click', function () {
    $text.css('color', getColor());
  });
  $bgColorBtn.on('click', function () {
    $text.css('background-color', getColor());
  });
  $redDrag.draggable(getSliderOptions($redBox, $redDrag, $redLine, 'red'));
  $greenDrag.draggable(getSliderOptions($greenBox, $greenDrag, $greenLine, 'green'));
  $blueDrag.draggable(getSliderOptions($blueBox, $blueDrag, $blueLine, 'blue'));
})();