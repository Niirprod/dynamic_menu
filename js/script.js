var btn = document.querySelector('.burger');
var nav = document.querySelector('.nav');
var nav2 = document.querySelector('.nav2');

btn.onclick = function(){
	btn.classList.toggle('anime');
	nav.classList.toggle('nav_open');
	nav2.classList.toggle('nav2_open');
		}

