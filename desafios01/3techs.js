const users = [
    { name: "Carlos", techs: ["HTML", "CSS"] },
    { name: "Jasmine", techs: ["JavaScript", "CSS"] },
    { name: "Tuane", techs: ["HTML", "Node.js"] }
];

for(let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} trabalha com ${users[i].techs.join(', ')}`);
}


function checkIfUserCss(user) {
    for (let tech of user.techs) {
        if (tech == 'CSS') return true
    }

    return false
}

for (let i = 0; i < users.length; i++) {
    const userWorkCss = checkIfUserCss(users[i])

    if(userWorkCss) {
        console.log(`O usuário ${users[i].name} trabalha com CSS`)
    }
}