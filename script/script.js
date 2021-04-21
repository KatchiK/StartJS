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
  mission: 50000,
  period: 3,
  asking: function () {
    // объявление переменных
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
    appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке');
  },
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
    //Функция возвращает сумму всех обязательных расходов за месяц
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      appData.expenses[i] = prompt('Введите обязательную статью расходов', 'Обучение');
      let sums = 0;
      sums = prompt('Во сколько это обойдется?', '10000');
      while (!isNumber(sums)) {
        sums = prompt('Во сколько это обойдется?', '10000');
      }
      sum += +sums;
    }
    console.log(appData.expenses);
    return sum;
  },
  expensesAmount: appData.getExpensesMonth(),

  getAccumulatedMonth: function (a, b) {
    return (a - b);
  },
  //Вычисляет за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат
  getTargetMonth: function () {
  return (appData.mission / appData.getAccumulatedMonth(money, appData.expensesAmount));
},
  
};




// let expenses1 = prompt('Введите обязательную статью расходов', 'Обучение');
// let amount1 = +prompt('Во сколько это обойдется?', '30000');
// let expenses2 = prompt('Введите еще одну обязательную статью расходов', 'реклама');
// let amount2 = +prompt('Во сколько обойдется еще одна статья расходов', '20000');
// let expenses = [];

//Функция возвращает сумму всех обязательных расходов за месяц
/*
let getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов', 'Обучение');

    let sums = 0;

    sums = prompt('Во сколько это обойдется?', '10000');
    while (!isNumber(sums)) {
      sums = prompt('Во сколько это обойдется?', '10000');

    }
    sum += +sums;
  }

  console.log(appData.expenses);
  return sum;
};
*/
let expensesAmount = appData.getExpensesMonth();

// //Функция возвращает сумму всех обязательных расходов за месяц
// function getExpensesMonth(a, b) {
//   return (a + b);
// }
/*
//Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth(a, b) {
  return (a - b);
}
*/

// Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = appData.getAccumulatedMonth(money, appData.expensesAmount);

/*
//Вычисляет за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат
function getTargetMonth() {
  return (appData.mission / appData.getAccumulatedMonth(money, expensesAmount));
}
*/
//назначение бюджета за день
let budgetDay = (accumulatedMonth / 30);

/*//Вывод в консоль
let showTypeOf = function (data) {
  console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(appData.income);
showTypeOf(appData.deposit);*/

// console.log(addExpenses.length); // вывод количества слов
console.log('Расходы за месяц, вызов expensesAmount: ' + appData.expensesAmount + 'руб.');
// console.log(addExpenses.split(','));//'Вывод возможных расходов в виде массива (addExpenses): ' + 


//Вывод срока достижения цели
if (appData.getTargetMonth() < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log('Cрок достижения цели в месяцах (результат вызова функции appData.getTargetMonth): ' + Math.ceil(appData.getTargetMonth()) + ' месяцев');//вывод срока
}


//Вывод в консоль
console.log('Бюджет на день = ' + budgetDay + 'руб.');//вывод дневного бюджета

// вызов функции getStatusIncome
let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay >= 600) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay >= 0) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
    return ('Что то пошло не так'); //Если меньше 0
  }
};

console.log('вызов функции getStatusIncome: ' + getStatusIncome());
