// console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	window.alert('Your form has been submitted successfully.')
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function handleDuckMouseOver() {
	window.alert("You're so smart.")
}

let duck = document.getElementById('rubber-duck')

duck.addEventListener('mouseover', handleDuckMouseOver)