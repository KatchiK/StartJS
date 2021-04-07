'use strict';


// объявление переменных
  let money = +prompt('Ваш месячный доход?','500000');//запрос у пользователя
  let income = 'строка с дополнительными доходом (например: фриланс)';
  let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','1000, 5000, 10000').split(',');
  
  let NumAddExpenses = addExpenses.map(function (item) {
    return parseFloat(item);//приведение к числу
  });

  //функция вычисления суммы массива 
  function arraySum(array){
    let a = 0;
    for(let i = 0; i < array.length; i++){
      a += array[i];
        }
       
        return(a);
    
    }
 let sumNumAddExpenses = arraySum(NumAddExpenses);
 

  let deposit = confirm('Есть ли у вас депозит в банке');
  let mission = 5000000000000000000;
  let period = 9;

  let expenses1 = prompt('Введите обязательную статью расходов?', 'Обучение');
  let amount1 = +prompt('Во сколько это обойдется?', '30000');
  let expenses2 = prompt('Введите еще одну обязательную статью расходов?', 'реклама');
  let amount2 = +prompt('Во сколько обойдется еще одна статья расходов', '20000');

  // let budgetMonth = (((money - (SumNumAddExpenses) -  amount1) - amount2));
 

  //Проверка выводом в консоль
  // console.log(typeof money);
  // console.log(budgetMonth);
  console.log(NumAddExpenses);
  console.log(typeof NumAddExpenses[2]);
  console.log(sumNumAddExpenses);
  


  // Вывод в модальное окно
  // alert(income);

  //Вывод в консоль
//   console.log(typeof money); // вывод типа данных
//   console.log(typeof income); // вывод типа данных
//   console.log(typeof deposit); // вывод типа данных
//   console.log(addExpenses.length); // вывод количества символов
//   console.log('Период равен ' + period + ' месяцев'); //Период равен (period) месяцев
//   console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');//Цель заработать
//   console.log(addExpenses.toLowerCase().split(', '));//перевод к нижнему регистру и вывод массива

// //объявление переменных
//   let budgetDay = (money/30);

//   //Вывод в консоль
//   console.log(budgetDay);//вывод дневного бюджета

  // console.log(confirm('эТекст'));// вывод вопроса да/нет в консоль
