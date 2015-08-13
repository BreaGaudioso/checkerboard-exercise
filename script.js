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
	
function getRandomColor() {
    var letters = '016789AEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 9)];
    }
    return color;
}



	for (i=0; i< 63; i++){
			checkers(getRandomColor());
}

