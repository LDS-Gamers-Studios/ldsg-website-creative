$(function() {
    
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene, {
    selector : '.layer',
    hoverOnly: true,
    limitY: 0
  });
  
});