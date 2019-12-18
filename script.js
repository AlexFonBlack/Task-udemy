
//первое задание

let money = prompt ('Ваш бюджет за месяц?'),
    time = prompt ('Введите дату в формате YYYY-MM-DD'),
    appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let costs = prompt ('Введите обязательную статью расходов в этом месяце'),
    howMany = prompt ('Во сколько обойдётся');

appDate.expenses[costs] = howMany;

const totalNumberDay = 30;
let budgetOfDay = (money - howMany) / totalNumberDay ;
alert ('Ваш бюджет на день в ' + appDate.timeData + '  составляет: ' + budgetOfDay);
console.log(appDate);
console.log (budgetOfDay);