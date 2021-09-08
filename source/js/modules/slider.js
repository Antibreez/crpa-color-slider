(function() {
  const $colorTypeRadio = $('input[name="color-type"]');

  const $text = $('.slider-control__text');

  const $redBox = $('.slider--red .slider__box');
  const $redDrag = $('.slider--red .slider__drag');
  const $redLine = $('.slider--red .slider__line');

  const $greenBox = $('.slider--green .slider__box');
  const $greenDrag = $('.slider--green .slider__drag');
  const $greenLine = $('.slider--green .slider__line');

  const $blueBox = $('.slider--blue .slider__box');
  const $blueDrag = $('.slider--blue .slider__drag');
  const $blueLine = $('.slider--blue .slider__line');

  let redValue = 0;
  let greenValue = 0;
  let blueValue = 0;
  let currentColorControl = $('input[name="color-type"]:checked').val();

  function getColor() {
    return `rgb(${redValue}, ${greenValue}, ${blueValue})`
  }

  function getSliderOptions(box, drag, line, colorType) {
    return {
      axis: "x",
      containment: box,
      drag: function() {
        line.css('width', drag.position().left + drag.width() / 2 + 'px')

        const x1 = drag.position().left;

        const colorValue = Math.round(x1 * 255 / (box.width() - drag.outerWidth()));

        colorType === 'red'
          ? redValue = colorValue
          : colorType === 'green'
          ? greenValue = colorValue
          : colorType === 'blue'
          ? blueValue = colorValue
          : null;

        $text.css(currentColorControl, getColor());
      },
      stop: function(e, ui) {
      }
    }
  }

  $colorTypeRadio.on('change', function(e) {
    currentColorControl = $(e.target).val();
    $text.css(currentColorControl, getColor());
  })

  $redDrag.draggable(getSliderOptions($redBox, $redDrag, $redLine, 'red'));
  $greenDrag.draggable(getSliderOptions($greenBox, $greenDrag, $greenLine, 'green'));
  $blueDrag.draggable(getSliderOptions($blueBox, $blueDrag, $blueLine, 'blue'));
})();
