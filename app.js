function go(){
	let idade = document.getElementById('digite').value;
	let result = (((idade - 2) * 4) + 10.6);
	document.getElementById('total').value = result;
}