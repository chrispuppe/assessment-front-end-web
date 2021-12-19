function handleFavColor() {
	window.alert('My favorite color is black.')
}
function handleFavPlace() {
	window.alert('My favorite place is anywhere with my family.')
}
function handleFaveRitual() {
	window.alert('My favorite ritual is exercising while doing boring tasks.')
}

let favColorBtn = document.getElementById('color')
let favPlaceBtn = document.getElementById('place')
let favRitualBtn = document.getElementById('ritual')

favColorBtn.addEventListener('click', handleFavColor);
favPlaceBtn.addEventListener('click', handleFavPlace);
favRitualBtn.addEventListener('click', handleFaveRitual);
