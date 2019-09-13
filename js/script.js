var btn = document.querySelector('.burger');
var nav = document.querySelector('.nav');

btn.onclick = function(){
	nav.classList.toggle('nav_open');
	btn.classList.toggle('anime');
}
