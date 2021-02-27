function trafficlight() {
	
	var colorA = document.getElementsByClassName('colorA');
	colorA[0].style.background = 'red';
	colorA[1].style.background = 'gray';
	colorA[2].style.background = 'gray';
	
	function changeToYellowA() {
		colorA[1].style.background = 'yellow';
	}
	function changeToGreenA() {
		colorA[0].style.background = 'gray';
		colorA[1].style.background = 'gray';
		colorA[2].style.background = 'green';
	}

	var ay = setTimeout(changeToYellowA,3000);
	var ag = setTimeout(changeToGreenA,6000);	
	
	var colorB = document.getElementsByClassName('colorB');
	colorB[0].style.background = 'green';
	colorB[1].style.background = 'gray';
	colorB[2].style.background = 'gray';
	
	function changeToYellowB(){
		colorB[0].style.background = 'green';
		colorB[1].style.background = 'yellow';
	}
	function changeToGreenB() {
		colorB[0].style.background = 'gray';
		colorB[1].style.background = 'gray';
		colorB[2].style.background = 'red';
	}

	var by = setTimeout(changeToYellowB,3000);
	var	bg = setTimeout(changeToGreenB,6000);

	var start = setInterval(trafficlight,8000);
	}

trafficlight();