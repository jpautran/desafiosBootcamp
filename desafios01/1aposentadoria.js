const name = 'Ana';
const sex = 'F';
const age = 60;
const contribution = 25;

//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher
//precisa ter no mínimo 85 anos na soma;
//SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
//SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

const mathContribution = age + contribution;

const manCanRetire = sex === 'M' && contribution >= 35 && mathContribution >= 95;
const womanCanRetire = sex === 'F' && contribution >= 30 && mathContribution >- 85;

if (manCanRetire || womanCanRetire) {
    console.log(`${name}, você pode se aposentar!`);
} else {
    console.log(`${name}, você ainda não pode se aposentar!`);
}