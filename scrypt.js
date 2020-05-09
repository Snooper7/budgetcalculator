let money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money, 
    timeData: time, 
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings : false
};
// Тренировка "Циклы".
//
// Цикл "For"

for (i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('Done');
        appData.expenses[a] = b;
    } else {
        console.log('Что-то пошло не так!!!');
    }
}
//
// Цикл "While"
//
// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = +prompt("Во сколько обойдется?");
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('Done');
//         appData.expenses[a] = b;
//     } else {
//         console.log('Что-то пошло не так!!!');
//     }
//     i++;
// }
//
// Цикл "Do"
//
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = +prompt("Во сколько обойдется?");
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('Done');
//         appData.expenses[a] = b;
//     } else {
//         console.log('Что-то пошло не так!!!');
//     }
//     i++;
// }
// while(i < 2);
//
console.log(appData);
    
let moneyPerDay = appData.budget / 30;

alert("В день можешь тратить по " + moneyPerDay + " рублей");

if (moneyPerDay < 100) {
    console.log('Низкий уровень дохода!!!');
} else if (moneyPerDay >= 100 && moneyPerDay < 2000) {
    console.log('Средний уровень дохода');
} else if (moneyPerDay >= 2000) {
    console.log('Высокий уровень дохода! Так держать!!!');
}