(function () {
  'use strict';

  $('.chart').easyPieChart({
      lineWidth:2,
      size:150,
      lineCap:'butt',
      scaleColor:false,
      trackColor:false,
      barColor: function(percent) {
        var ctx = this.renderer.getCtx();
        var canvas = this.renderer.getCanvas();
        var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
            gradient.addColorStop(0, "#00FF7E");
            gradient.addColorStop(1, "#04BFF7");
        return gradient;
      }
  });

})();
