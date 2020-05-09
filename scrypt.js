let money, time;

// Ввод начальных данных

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    
    while (isNaN(money) || money == "" || money ==null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

// Создание основного объекта для хранения данных

let appData = {
    budget: money, 
    timeData: time, 
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings : true
};

// Ввод данных по обязательным тратам в месяц

function chooseExpenses() {
    for (i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = +prompt("Во сколько обойдется?");
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('Done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}
chooseExpenses();

console.log(appData);

// Вычисление дневного бюджета

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("В день можешь тратить по " + appData.moneyPerDay + " рублей");
}
detectDayBudget();

// Вычисление уровня дохода

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Низкий уровень дохода!!!');
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень дохода');
    } else if (appData.moneyPerDay >= 2000) {
        console.log('Высокий уровень дохода! Так держать!!!');
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какой размер ваших сбережений?", ""),
            procent = +prompt("Под какой процент?", "");
        appData.monthIncome = save/100/12*procent;
        alert("Доход с вашего депозита: " + appData.monthIncome.toFixed() + "рублей в месяц!");
    }
}
checkSavings();

// Записываем необязательные расходы

function chooseOptExpenses () {
    for (i = 1; i <= 3; i++) {
        let a = prompt("Статья необязательных расходов?");
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
            console.log('Done');
            appData.optionalExpenses[i] = a;
        } else {
            i--;
        }
    }
}
chooseOptExpenses();