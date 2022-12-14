const cedulaInput = document.getElementById("cedula");
const nombresInput = document.getElementById("nombres");
const apellidosInput = document.getElementById("apellidos");

const form = document.getElementById("contact-form");

const spanError = document.getElementsByClassName("result")[0];

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const cedula = cedulaInput.value;
	const nombres = nombresInput.value;
	const apellidos = apellidosInput.value;

	const validCedula = isValid(cedula);

	if (!validCedula) {
		spanError.textContent = "Cédula inválida...";
		return;
	}

	spanError.textContent = "";
	window.alert(
		`Hola ${nombres} ${apellidos} se le estará contactando pronto...`
	);
	window.location.href = "../index.html";
});

function isValid(str) {
	var regex = new RegExp("^[0-9]{3}-?[0-9]{7}-?[0-9]{1}$");

	if (!regex.test(str)) {
		return false;
	}

	str = str.replace(/-/g, "");
	return CheckDigit(str);
}

function CheckDigit(str) {
	var sum = 0;
	for (var i = 0; i < 10; ++i) {
		var n = ((i + 1) % 2 != 0 ? 1 : 2) * parseInt(str.charAt(i));
		sum += n <= 9 ? n : (n % 10) + 1;
	}
	var dig = (10 - (sum % 10)) % 10;

	return dig == parseInt(str.charAt(10));
}
