// логические операторы
//1)
alert( null || 2 || undefined ); 
// 2


//2)
alert( alert(1) || 2 || alert(3) );
// 1,2


//3)
alert( 1 && null && 2 );
//null


//4)
alert( alert(1) && alert(2) );
// 1, undefined


//5)
alert( null || 2 && 3 || 4 );
//3







// Условное ветвление: if, '?'

// if (строка с нулём)
if ("0") {
    alert( 'Привет' );
  }
    // всегда выводится 'Привет'



    // Название JavaScript
    let value = prompt('Какое "официальное" название JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Верно!');
    } else {
      alert('Не знаете? ECMAScript!');
    }


    // Покажите знак числа
    let a = prompt('a=', 0);

    if (a > 0) {
      alert( 1 );
    } else if (a < 0) {
      alert( -1 );
    } else {
      alert( 0 );
    }





// Циклы

// Последнее значение цикла
    let i = 3;

    while (i) {
    alert( i-- );
        }// Последним значением будет 0, т.к. идет обратный отчет


//Замените for на while
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  } 

let i = 0;
    while (i < 3) {
         alert( `number ${i}!` );
        i++;
}