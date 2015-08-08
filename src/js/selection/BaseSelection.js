(function () {
  var ns = $.namespace('pskl.selection');

  ns.BaseSelection = function () {
    this.reset();
  };

  ns.BaseSelection.prototype.reset = function () {
    this.pixels = [];
    this.hasPastedContent = false;
  };

  ns.BaseSelection.prototype.move = function (colDiff, rowDiff) {
    var movedPixels = [];

    for (var i = 0, l = this.pixels.length; i < l; i++) {
      var movedPixel = this.pixels[i];
      movedPixel.col += colDiff;
      movedPixel.row += rowDiff;
      movedPixels.push(movedPixel);
    }

    this.pixels = movedPixels;
  };

  ns.BaseSelection.prototype.fillSelectionFromFrame = function (targetFrame) {
    // on copy trim the selection if out of bounds
    // this.pixels = this.pixels.filter(function (pixel) {
    //   return targetFrame.containsPixel(pixel.col, pixel.row);
    // });

    this.pixels.forEach(function (pixel) {
      pixel.color = targetFrame.getPixel(pixel.col, pixel.row);
    });

    this.hasPastedContent = true;
  };
})();
