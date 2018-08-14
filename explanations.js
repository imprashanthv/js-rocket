//Explanations
var favColor = 'blue';
var myFavColor = ['blue', 'red', 'green'];
var numOfFavColors = '3';
var hasGotFavColors = true;
var prashanthObject = {
	firstName: 'Prashanth',
	lastName: 'Vissapragada',
	favColors: ['blue', 'red', 'green'],
	yearsAlive: 22,
	isMale: true
};

var whatIsMyFavColor = function(){
	return 'blue';
}

var area = function(width,height){
	return width*height;
}

whatIsMyFavColor();
area(4,3);

if(prashanthObject.isMale && whatIsMyFavColor()=='blue'){
	alert('true');
}
else{
	alert('false');
}