$(function() {
  let canvas = document.getElementById('tutorial');

  function init() {
    let canvasHeight = $(document).height();
    let canvasWidth = $(document).width();

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  }

  function draw(){
    if (canvas.getContext){
      let ctx = canvas.getContext('2d');

      ctx.fillRect(25,25,100,100);
      ctx.strokeRect(100,100,100,100);
    }
  }

  init();
  draw();

});