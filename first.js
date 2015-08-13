/* Each tile should be a div
Each tile's width is 11.1%
Set each tile's float property to left
Each tile's paddingBottom is 11.1% */

function checkers (color){

	var checker = document.createElement('div');
	checker.style.backgroundColor= color;
	checker.style.width = '11.1%';
	checker.style.float ='left';
	checker.style.paddingBottom= '11.1%';
	var bodyTime = document.querySelectorAll('body')[0];
	bodyTime.appendChild(checker);
}
	

	for (i=0; i< 63; i++){
		if (i % 2 === 0){
			checkers('red');
		} else { 
			checkers('black');
}
}



