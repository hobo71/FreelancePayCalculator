function calculate() {
	var price = document.getElementById('price').value;
	var hours = document.getElementById('hours').value;

	var total = price * hours;

	document.getElementById('total').innerHTML = '£ ' + total;
}
