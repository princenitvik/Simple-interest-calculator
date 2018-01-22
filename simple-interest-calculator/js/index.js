const button = document.querySelector('button');

function simpleInterest() {
	let p = parseInt(document.querySelector('#principal').value);
	let r = parseInt(document.querySelector('#rate').value);
	let t = parseInt(document.querySelector('#time').value);
	let interest = document.querySelector('#interest');
	let payment = document.querySelector('#payment');

	interest.innerHTML = '$' + (p*t*r/100).toFixed(2);
	
	let i = interest;
	payment.innerHTML = '$' + (((p*t*r/100) + p) / (t * 12)).toFixed(2);
}

button.addEventListener('click',simpleInterest);