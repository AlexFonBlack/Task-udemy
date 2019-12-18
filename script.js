'use strict';

//первое задание

<<<<<<< HEAD
let money = prompt ('Ваш бюджет за месяц?'),
    time = prompt ('Введите дату в формате YYYY-MM-DD'),
    appDate = {
=======
let money = +prompt ('Ваш бюджет за месяц?'),
    time = prompt ('Введите дату в формате YYYY-MM-DD');
let appDate = {
>>>>>>> 665a1435af4c9ef3825f3a2e61b5f4b06e877578
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

<<<<<<< HEAD
let costs = prompt ('Введите обязательную статью расходов в этом месяце'),
    howMany = prompt ('Во сколько обойдётся');

appDate.expenses[costs] = howMany;

const totalNumberDay = 30;
let budgetOfDay = (money - howMany) / totalNumberDay ;
alert ('Ваш бюджет на день в ' + appDate.timeData + '  составляет: ' + budgetOfDay);
console.log(appDate);
console.log (budgetOfDay);
=======
console.log(appDate);

//второе задание

for (let i = 0; i < 2; i++){
    let a = prompt ('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt ('Во сколько обойдётся?', '');
    if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length <50) {
        console.log('Done');
        appDate.expenses[a] = b;
    } else {
        console.log('не верное заполнение');
        i--;   
    }
    
}
// WHILE (условия) {блок кода}

/* let i = 0;
while (i < 2) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");
    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        console.log ("done");
        appData.expenses[a] = b;
    } else {
        console.log ("bad result");
        i--;
    }
     i++;
} */



// DO{} while();

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

appDate.moneyPerDay = appDate.budget / 30;

alert ("Ежедневный бюджет: " + appDate.moneyPerDay);

if(appDate.moneyPerDay < 100){
    console.log("минимальный уровень достатка")
} else if (appDate.moneyPerDay> 100 && appDate.moneyPerDay<2000){
    console.log("средний уровень достатка");
} else if (appDate.moneyPerDay>2000){
    console.log("высокий уровень достатка")
} else {
    console.log("произошла ошибка")
}
>>>>>>> 665a1435af4c9ef3825f3a2e61b5f4b06e877578
