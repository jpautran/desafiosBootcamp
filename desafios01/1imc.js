const name = 'Ivan';
const weight = 70
const height = 1.74

const imc = weight / (height * height);
const imcFixed = imc.toFixed(2)


if(imc >= 30) {
    console.log(`${name}, você está acima do peso`);
} else {
    console.log(`${name}, você está acima do peso`);
}