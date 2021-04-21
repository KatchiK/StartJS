'use strict';

// Переменная для проверки числового значения
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  start = function () {
    do {
      money = prompt('Ваш месячный доход?', '500000');
    } while (!isNumber(money));
  };

money = +money;
start();


let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 6000000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
       let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
    appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке');

    //Функция возвращает сумму всех обязательных расходов за месяц
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      let amount = prompt('Введите обязательную статью расходов', 'Обучение');

      appData.expenses[amount] = prompt('Во сколько это обойдется?', '10000');
      while (!isNumber(appData.expenses[amount])) {
        appData.expenses[amount] = prompt('Во сколько это обойдется?', '10000');
      }
      // console.log(appData.expenses, typeof(appData.expenses));
      appData.expensesMonth += +appData.expenses[amount];
  
    }
  
  },

  
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    
    appData.budgetDay = appData.budgetMonth/30;
    
  },
  //Вычисляет за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат
  getTargetMonth: function () {
  return (appData.mission / appData.budgetMonth);
},

// вызов функции getStatusIncome
getStatusIncome: function () {
  if (appData.budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (appData.budgetDay >= 600) {
    return ('У вас средний уровень дохода');
  } else if (appData.budgetDay >= 0) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
    return ('Что то пошло не так'); //Если меньше 0
  }
},
  
};



appData.asking();
appData.getBudget();
// // проверка
// console.log(appData.expensesMonth, typeof(appData.expensesMonth));
// console.log(appData.budget, typeof(appData.budget));
// console.log(appData.budget, typeof(appData.budget));
// console.log(appData.budgetMonth, typeof(appData.budgetMonth));
// console.log(appData.getTargetMonth(), typeof(appData.getTargetMonth()));


console.log(appData.expensesMonth);

if (appData.getTargetMonth() < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log('Cрок достижения цели в месяцах (результат вызова функции appData.getTargetMonth): ' + Math.ceil(appData.getTargetMonth()) + ' месяцев');//вывод срока
}

console.log(appData.getStatusIncome());

var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};


console.log('Наша программа включает в себя данные:');
for (let key in appData) {

  console.log( "Ключ: " + key + " значение: " + appData[key] );
}
