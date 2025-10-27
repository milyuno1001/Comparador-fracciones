const n1 = 1, d1 = 2;
const n2 = 3, d2 = 4;

const frac1 = n1 / d1;
const frac2 = n2 / d2;

let mensaje = '';
if (d1 === 0 || d2 === 0) {
  mensaje = '🚫 No se puede dividir para 0.';
} else if (frac1 === frac2) {
  mensaje = '☁️ Las dos fracciones son iguales ☁️';
} else if (frac1 > frac2) {
  mensaje = '🌞 La primera fracción es mayor.';
} else {
  mensaje = '🌈 La segunda fracción es mayor.';
}

document.getElementById('root').innerText = mensaje;
