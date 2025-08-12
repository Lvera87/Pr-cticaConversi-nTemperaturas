

function solicitarTemperatura() {
	let valor;
	while (true) {
		valor = prompt("Introduce la temperatura en grados Celsius:");
		if (valor !== null) valor = valor.trim();
		let numero = Number(valor);
		if (valor !== null && valor !== '' && !isNaN(numero)) {
			return numero;
		} else {
			alert("Por favor, introduce un valor numérico válido para la temperatura.");
		}
	}
}

function convertirTemperaturas(celsius) {
	const kelvin = celsius + 273.15;
	const fahrenheit = (celsius * 9/5) + 32;
	return { kelvin, fahrenheit };
}

function mostrarResultados(celsius, kelvin, fahrenheit) {

	console.log(`Grados Kelvin: ${kelvin}`);
	console.log(`Grados Fahrenheit: ${fahrenheit}`);

	if (typeof document !== 'undefined') {
		let div = document.getElementById('resultados');
		if (!div) {
			div = document.createElement('div');
			div.id = 'resultados';
			document.body.appendChild(div);
		}
		div.innerHTML = `<p>Grados Kelvin: ${kelvin}</p><p>Grados Fahrenheit: ${fahrenheit}</p>`;
	}
}


function main() {
	const celsius = solicitarTemperatura();
	const { kelvin, fahrenheit } = convertirTemperaturas(celsius);
	mostrarResultados(celsius, kelvin, fahrenheit);
}


main();
