let money = prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money, 
    timeData: time, 
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings : false
};

let expenseItem1 = prompt("Введите обязательную статью расходов в этом месяце");
    expense1 = prompt("Во сколько обойдется?");
    expenseItem2 = prompt("Введите обязательную статью расходов в этом месяце");
    expense2 = prompt("Во сколько обойдется?");

appData.expenses.expenseItem1 = expense1;
appData.expenses.expenseItem2 = expense2;
    
alert("В день можешь тратить по " + appData.budget / 30 + " рублей");