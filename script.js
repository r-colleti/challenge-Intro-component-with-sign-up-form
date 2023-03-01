var input = document.querySelectorAll('.inp');
var inputarr = [...input];

function validateInp() {
	event.preventDefault();

	inputarr.map(function(element) {
		var lbl = element.nextElementSibling;
		var elFather = element.parentNode;

		if (element.checkValidity() == false) {
			elFather.classList.add('error');
			lbl.classList.add('atvLabel');
			element.classList.add('inputErrorB');
		} else {
			elFather.classList.remove('error');
			lbl.classList.remove('atvLabel');
			element.classList.remove('inputErrorB');
		}
	});
}