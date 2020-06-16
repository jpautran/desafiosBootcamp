const user = {
    name: 'Diego',
    business: {
        name: 'Rocketseat',
        color: 'Purple',
        focus: 'Programming',
        address: {
            street: 'Rua Guilherme Gembala',
            number: 260
        }
    }
};

console.log(`A empresa ${user.business.name} está localizada em ${user.business.address.street}, ${user.business.address.number}`);
