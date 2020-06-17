const users = [
    {
      name: 'Tiago',
      income: [115.3, 48.7, 98.3, 14.5],
      expense: [85.3, 13.5, 19.9]
    },
    {
      name: 'Maria',
      income: [24.6, 214.3, 45.3],
      expense: [185.3, 12.1, 120.0]
    },
    {
      name: 'Bruno',
      income: [9.8, 120.3, 340.2, 45.3],
      expense: [450.2, 29.9]
    }
  ]

function checkBalance(income, expense) {
    const sumIncome = sumNumbers(income);
    const sumExpense = sumNumbers(expense);
    
    return sumIncome - sumExpense;
}

function sumNumbers(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum = sum + number;
    }

    return sum;
}

for (let user of users) {
    const balance = checkBalance(user.income, user.expense);

    if (balance > 0) {
        console.log(`${user.name} possui saldo POSITIVO de ${balance.toFixed(2)}`);
    } else {
        console.log(`${user.name} possui saldo NEGATIVO de ${balance.toFixed(2)}`);
    }
}