var miMapa = new Map();
var mapa = new Map();

var claveObj = {},
    claveFunc = function () {},
    claveCadena = "una cadena";

// asignando valores
miMapa.set(claveCadena, "valor asociado con 'una cadena'");
miMapa.set(claveObj, "valor asociado con claveObj");
miMapa.set(claveFunc, "valor asociado with claveFunc");

var arr = [2, 7, 11, 15]
var target = 9

console.log(Sum(arr,target))
function Sum(arr,target) {
	let map = new Map();
	
	for (var i = arr.length - 1; i >= 0; i--) {
		map.set(arr[i],i);	
	}

	let j = 0;
	while (j < arr.length) {
		let complement =  target - arr[j] ;
		let search = map.get(complement)
		if (search > -1 && search != j) {
			return [j,search];
			j = arr.length
		
	j++;
	}
}