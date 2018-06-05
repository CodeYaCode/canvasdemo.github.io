// canvas.js

$(document).ready(function() {
    var canvas = $('#spin')[0];
    var winWidth = $('.canvas-container').width();
    var winHeight = $('.canvas-container').width();

    canvas.setAttribute('width', winWidth);
    canvas.setAttribute('height', winHeight);

    ctx = canvas.getContext('2d');
    ctx.strokeStyle = "#fff";
    // X-axis
    line(winWidth/2, winHeight/2, winWidth, winHeight/2, ctx);
    // Y-axis
    line(winWidth/2, winHeight/2, winWidth/2, 0, ctx);
    // Z-axis
    line(winWidth/2, winHeight/2, 0, winHeight, ctx);
});

function line(sx, sy, ex, ey, ctx) {
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.stroke();
}

var Vector = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this._get2D = function() {
        var scale = fallLength/(fallLength+this.z);
        var x = centerX + this.x*scale;
        var y = centerY + this.y*scale;
        return {x:x , y:y};
    }
}