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

let budgetMonth = (money - amount1 - amount2);//вычисление бюджета за месяц


//Вывод в консоль
let showTypeOf = function (data) {
  console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.length); // вывод количества слов
console.log(addExpenses);
console.log(addExpenses.split(','));
console.log('Период равен ' + period + ' месяцев'); //Период равен (period) месяцев
console.log('Цель заработать ' + mission + ' рублей');//Цель заработать
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев');//вывод срока



//объявление переменных
let budgetDay = (budgetMonth / 30);

//Вывод в консоль
console.log('Бюджет на день = ' + budgetDay + 'руб.');//вывод дневного бюджета

// конструкция условий
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

console.log(getStatusIncome());

