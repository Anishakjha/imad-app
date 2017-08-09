console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'This is the modified version of my web app' ;

var img = document.getElementById('girl');


var marginRight = 0 ; 
function moveLeft() {
marginRight = marginRight + 10;
img.style.marginRight = marginRight + 'px';
    
}

img.onclick = function() {
    var interval = setInterval(moveLeft, 100);
    
};