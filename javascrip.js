
$.magicCanvas.draw({
    type:"random-move",
    rgb : function (circlePos) {
      var px = circlePos.x; // point position
      var py = circlePos.y;
      // do some computation....
      return {r:parseInt(px % 255),g:parseInt(py % 255),b:203};
    },
    zIndex: -9999, // stack order
  })
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
