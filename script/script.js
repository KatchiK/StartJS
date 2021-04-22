'use strict';

// Переменная для проверки числового значения
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// Переменная для проверки текстового значения
let isText = function (t) {
  return isNaN(t);
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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 6000000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    if (confirm('Есть ли у Вас дополнительный заработок')) {

      let itemIncome = prompt('Какой у Вас дополнительный заработок?', 'Таксую');
      while (!isText(itemIncome)) {
        itemIncome = prompt('Какой у Вас дополнительный заработок?', 'Таксую');
      }

      let cashIncome = prompt('Сколько в месяц Вы зарабатываете на этом', '7550');
      while (!isNumber(cashIncome)) {
        cashIncome = prompt('Сколько в месяц Вы зарабатываете на этом', '7550');
      }

      appData.income[itemIncome] = cashIncome;
    }
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит, КАРМАННЫЕ расходы');
    while (!isText(addExpenses)) {
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит, КАРМАННЫЕ расходы');
    }
    appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ').map(word => word[0].toUpperCase() + word.substring(1));

    appData.deposit = confirm('Есть ли у вас депозит в банке');

    //Функция возвращает сумму всех обязательных расходов за месяц
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      let amount = prompt('Введите обязательную статью расходов', 'Обучение');
      while (!isText(amount)) {
        amount = prompt('Введите обязательную статью расходов', 'Обучение');
      }

      appData.expenses[amount] = prompt('Во сколько это обойдется?', '10000');
      while (!isNumber(appData.expenses[amount])) {
        appData.expenses[amount] = prompt('Во сколько это обойдется?', '10000');
      }
      appData.expensesMonth += +appData.expenses[amount];

    }

  },


  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;

    appData.budgetDay = appData.budgetMonth / 30;

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

  getInfoDeposit: function () {
    if (appData.deposit) {
      appData.percentDeposit = prompt('Какой годовой процент?', '6');
      while (!isNumber(appData.percentDeposit)) {
        appData.percentDeposit = prompt('Какой годовой процент?', '6');
      }

      appData.moneyDeposit = prompt('Какая сумма заложена?', 65000);
      while (!isNumber(appData.moneyDeposit)) {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 65000);
      }
    }
  },
  CalcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  },

};



appData.asking();
appData.getBudget();
appData.getInfoDeposit();
// // проверка
// console.log(appData.expensesMonth, typeof(appData.expensesMonth));
// console.log(appData.budget, typeof(appData.budget));
// console.log(appData.budget, typeof(appData.budget));
// console.log(appData.budgetMonth, typeof(appData.budgetMonth));
// console.log(appData.getTargetMonth(), typeof(appData.getTargetMonth()));
// console.log(appData.addExpenses);


console.log('Возможные расходы (addExpenses):', appData.addExpenses.join(', '));

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

  console.log("Ключ: " + key + " значение: " + appData[key]);
}

