const tech = [
    {
        name: 'C++',
        speciality: 'Desktop'
    },
    {
        name: 'Python',
        speciality: 'Data Science'
    },
    {
        name: 'JavaScript',
        speciality: 'Web/Mobile'
    }
];

const dev = {
    name: 'João',
    age: 25,
    techs: [
        {
        name: 'C++',
        speciality: 'Desktop'
        },
        {
        name: 'JavaScript',
        speciality: 'Web/Mobile'
        }
    ]
}

console.log(`O usuário ${dev.name} tem ${dev.age} e usa a tecnologia ${dev.techs[0].name} com especialidade em ${dev.techs[0].speciality}`)
