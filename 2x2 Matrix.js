var arr = new Array(2);
for (var i = 0; i < arr.length; i++) {
	arr[i] = new Array(2);
}
var h = 1;
for (var i = 0; i < 2; i++) {
	for (var j = 0; j < 2; j++) {
		arr[i][j] = h++;
	}
}
for (var i = 0; i < 2; i++) {
	for (var j = 0; j < 2; j++) {
		console.log(arr[i][j] + " ");
	}
	console.log("<br>");
}