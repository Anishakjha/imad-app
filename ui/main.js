console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'This is the modified version of my web app' ;

var img = document.getElementById('girl');
img.onclick = function() {
    img.style.marginLeft = '100px';
};