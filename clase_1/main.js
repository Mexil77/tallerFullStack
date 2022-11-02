import { Coche, Comida as Co } from "./Dest.mjs";
// console.log("Hola mundo");
//Text, Number, Boolean, function, Object
//let, var
//const

//Funciones:
// Explicitas
// Animas

{
	var x = 5;
}
{
	console.log(x);
}

const S = function suma(n1, n2) {
	return n1 + n2;
};

const R = (n1, n2) => {
	return n1 - n2;
};

let resultado = S(5, 3);

console.log(`El resultado de la suma es: ${resultado}`);
console.log(R(10, 2));

let Persona = {
	name: "Emmanuel",
	age: 28,
	amigos: [
		{
			name: "paula",
		},
		"Dan",
		"Miguel",
	],
	mascota: {
		name: "micha",
		age: 3,
		toys: ["hueso", "pelota"],
	},
	run: function run(km) {
		console.log(this.name + " corrio " + km + " kilometros");
		console.log(`${this.name} corrio ${km} kilometros`);
	},
	// walk: (km) => {
	// 	console.log(`${this.name} camino ${km} kilometros`);
	// },
};

let clave = "age";

console.log(Persona.name);
console.log(Persona[clave]);
console.log(Persona.amigos[0].name);
console.log(Persona.mascota.name);

Persona.run(5);
// Persona.walk(3);

let arr1 = [1, 2, 3, 4, 5];

function multImp(num, idx, arr) {
	console.log(`${arr}`);
	console.log(`El indice: ${idx}, tinee el valor: ${num * 2}`);
	return num * 2;
}

let arr2 = arr1.map(multImp);

console.log(arr2);

let arr3 = arr2.map((num) => {
	return num * num;
});

console.log(arr3);

let arr4 = arr1.filter((num) => {
	return num % 2 === 0;
});

console.log(arr4);

//Destructuring
//Objects
let { name, age } = Persona;

console.log(name);
console.log(age);

let Escuela = {
	name: "42",
	directoin: "sldkfjs;kdf",
	antiguedad: 20,
};

let Salon = {
	alumnos: 20,
	profe: "javier",
	...Escuela,
};

console.log(Salon);

//Array
const [valor1, valor2, ...valor3] = arr1;

console.log(valor1);
console.log(valor2);
console.log(valor3);

console.log(Coche);
console.log(Co);

const calentarHorno = () => {
	setTimeout(() => {
		console.log("Calentar piza");
	}, 5000);
};

async function DiaNormal() {
	await calentarHorno();
	console.log("Limpiar");
	console.log("Ver tele");
}

DiaNormal();
