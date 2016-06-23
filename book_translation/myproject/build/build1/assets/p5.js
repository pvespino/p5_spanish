// Shows a P5 is a sandboxed iframe.
// --------------------------------------------

function P5toFig(el) {

  var loaded = false;

  // Grab the size of the sketch
  var code = el.innerHTML;
  var pattern = /createCanvas\((\d+),\s*(\d+)\)/
  var hasCanvas = code.match(pattern)
  if(!hasCanvas) console.warn('Example appears to not have a createCanvas function.');
  var sketchWidth = parseInt(hasCanvas[1]);
  var sketchHeight = parseInt(hasCanvas[2]);

  // Create iframe as placeholder and insert next to script
  var iframe = document.createElement('iframe');
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('sandbox', 'allow-scripts');
  iframe.style.width = sketchWidth;
  iframe.style.height = sketchHeight;
  iframe.setAttribute('srcdoc', '<html><head><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.23/p5.js"></script><style>html,body{ margin:0; padding:0}</style></head><body><script type="text/javascript">' + code + '</script></body></html>');

  el.parentNode.insertBefore(iframe, el.nextSibling);
}

// Init
// --------------------------------------------

(function() {

  window.onload = function() {
    console.log('yiah')
    // Convert P5 to figures with iframes
    var imgs = document.getElementsByClassName('p5 whatever');
    console.log(imgs)
    for(var i = 0; i < imgs.length; i++) { P5toFig(imgs[i]); }

  }

})();
