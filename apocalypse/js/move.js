$(document).ready(function(){
  var lFollowX = 0,
  lFollowY = 0,
  x = 0,
  y = 0,
  friction = 1 / 30,
  gyro = false;

  function move() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    //$("apocalypse-welcome-header").html("X : " + x + "<br />" + " Y : " + y);

    if(gyro == false){
      translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
    } else if(gyro == true){
      translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.25)';
    }

  //$("apocalypse-welcome-sub-header").html(gyro);

    $('apocalypse-background,apocalypse-pre').css({
      '-webit-transform': translate,
      '-moz-transform': translate,
      'transform': translate
    });

    window.requestAnimationFrame(move);
  }

  /*
  $(window).on('mousemove', function(e) {
    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;
  });*/

  setInterval(function(){
    var lMouseX = Math.floor((Math.random() * 100) + 1);
    var lMouseY = Math.floor((Math.random() * 100) + 1);
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;
  },250);

window.addEventListener('deviceorientation', handleOrientation);


function handleOrientation(event) {
  if(event.gamma != undefined || event.gamma != undefined) {
    //console.log("Yes");
    gyro = true;
    fiction = 1;
  }
  if (window.matchMedia("(orientation: portrait)").matches) {
    var lMouseX = (event.gamma- 0)*2; //x
    if(lMouseX > 40) { var lMouseX = 45;}
    var lMouseY = (event.alpha)*3; //y
    if(lMouseY > 40) { var lMouseY = 90;}
   } else if (window.matchMedia("(orientation: landscape)").matches) {
    var lMouseX = (event.alpha)*2 ; //x
    if(lMouseX > 40) { var lMouseX = 50;}
    var lMouseY = (event.gamma - 45)*2; //y
    if(lMouseY > 40) { var lMouseY = 50;}
  }
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;
  //$("apocalypse-welcome-header").html("X : " + x + " Y : " + y);
}
  move();
});
