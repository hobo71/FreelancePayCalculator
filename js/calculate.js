function calculate() {
	var price = document.getElementById('price').value;
	var hours = document.getElementById('hours').value;

	var total = price * hours;
	console.log(total);

	document.getElementById('total').innerHTML = '£ ' + total;
}
