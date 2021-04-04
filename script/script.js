


// объявление переменных
  let money = 990000;
  let income = 'строка с дополнительными доходом (например: фриланс)';
  let addExpenses = 'Интернет, Такси, Коммуналка';
  let deposit = true;
  let mission = 5000000000000000000;
  let period = 9;


  // Вывод в модальное окно
  // alert(income);

  //Вывод в консоль
  console.log(typeof money); // вывод типа данных
  console.log(typeof income); // вывод типа данных
  console.log(typeof deposit); // вывод типа данных
  console.log(addExpenses.length); // вывод количества символов
  console.log('Период равен ' + period + ' месяцев'); //Период равен (period) месяцев
  console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');//Цель заработать
  console.log(addExpenses.toLowerCase().split(', '));//к нижнему регистру и вывод массива

//объявление переменных
  let budgetDay = (money/30);

  //Вывод в консоль
  console.log(budgetDay);//вывод дневного бюджета
