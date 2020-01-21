'use strict';
let money, time;

function start() {
    while(isNaN(money) || money == "" || money == null) { // команда isNAN возвращает true когда в нее
                          //попадают не цифры
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    time =  prompt("Введите дату в формате YYYY-MM-DD", "");
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    Income: [],
    savings: true,
    chooseExpenses: function() {
        for( let i = 0; i < 2; i++) {
            let ques = prompt("Введите обязательную статью расходов в этом месяце?", ''),
                answr = prompt("Во сколько обойдется?", '');
            if( (typeof(ques))=== 'string' && (typeof(ques)) != null && (typeof(answr)) != null 
            && ques !='' && answr != '' && ques.length < 50)  {
                    console.log((i+1)+" question added ");
                    appData.expenses[ques] = answr;
            }  else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed(2); //если пустые скобки 
        // то округляет до ближайшего целого
        // округляет до 2 знака после запятой
        // также toFixed меняет переменную делая ее строковой
        alert("Ежедневный бюджет  -  " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt(" Какова сумма накоплений? "),
                percent = +prompt(" Под какой процент?");
            appData.monthIncore = save/100/12*percent;
            alert(" Доход в месяц с вашего депозита: " + appData.monthIncore);    
        }
    },
    chooseOptExpenses: function() {
        for( let i = 0; i < 3; i++) {
            let ques = prompt("Статья необязательных расходов?", ''),
                answr = +prompt("Во сколько обойдется?");
            if( (typeof(ques))=== 'string' && (typeof(ques)) != null && (typeof(answr)) != null 
            && ques !='' && answr != '' && ques.length < 50)  {
                    console.log((i+1)+" question added ");
                    appData.optionalExpenses[i+1] = ques +":  "+ answr;
            }  else {
                i--;
            }
        }
    },
    chooseIncome: function() {
        let items;
        while ( !isNaN(items) || items == "" || items == null) {
            items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)","");
            // пустые кавычки в конце оставляем для совместимости с internet explorer
        }
        appData.Income = items.split(", "); //заносим в элементы массива строку, в которой
        // запятая и пробел - разделитель
        let items2;
        while ( !isNaN(items2) || items2 == "" || items2 == null) {
             items2 = prompt(" Может что-то ещё?");
        }     
        appData.Income.push(items2);
        
        appData.Income.sort();

        let str=" ";
        appData.Income.forEach( function(itm, i, mass) {
            str += (++i + " - " + itm + " ; ");
            
        });
        alert("Способы дополнительного заработка: "  + str );
        
    }
};
console.log(" Наша программа включает в себя: " );
for( let key in appData){
    console.log(key + " : " + appData[key]);
}

