function checkers (color){
	var checker = document.createElement('div');
	checker.style.backgroundColor= color;
	checker.style.width = '11.1%';
	checker.style.float ='left';
	checker.style.paddingBottom= '11.1%';
	var bodyTime = document.querySelectorAll('body')[0];
	bodyTime.appendChild(checker);
}

var num = 150;

for (i = 0; i < 63; i++) {
	if (i % 2 === 0) {
		var gradient = "rgb(100,100," + num + ")";
		checkers(gradient)
		num += 2;
	} else {
		var gradients = "rgb(100," + num + ", 100)";
		checkers(gradients)
		num += 2;
	}
}

