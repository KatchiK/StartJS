'use strict';


// объявление переменных
let money = +prompt('Ваш месячный доход?', '500000');//запрос у пользователя
let income = 'строка с дополнительными доходом (например: фриланс)';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');


let deposit = confirm('Есть ли у вас депозит в банке');
let mission = 500000000;
let period = 9;

let expenses1 = prompt('Введите обязательную статью расходов', 'Обучение');
let amount1 = +prompt('Во сколько это обойдется?', '30000');
let expenses2 = prompt('Введите еще одну обязательную статью расходов', 'реклама');
let amount2 = +prompt('Во сколько обойдется еще одна статья расходов', '20000');


//Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth(a, b) {
  return(a + b);
}

//Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth(a, b) {
  return(a - b);
}

// Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount1));

//Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат
function getTargetMonth() {
  return(mission / getAccumulatedMonth(money, getExpensesMonth(amount1, amount1)));
}

//назначение бюджета за день
let budgetDay = (accumulatedMonth / 30);

//Вывод в консоль
let showTypeOf = function (data) {
  console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// console.log(addExpenses.length); // вывод количества слов
console.log('Расходы за месяц, вызов getExpensesMonth: ' + getExpensesMonth(amount1, amount1) + 'руб.');
console.log(addExpenses.split(','));//'Вывод возможных расходов в виде массива (addExpenses): ' + 
// console.log('Период равен ' + period + ' месяцев'); //Период равен (period)месяцев
// console.log('Цель заработать ' + mission + ' рублей');//Цель заработать
console.log('Cрок достижения цели в месяцах (результат вызова функции getTargetMonth): ' + Math.ceil(getTargetMonth()) + ' месяцев');//вывод срока


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

