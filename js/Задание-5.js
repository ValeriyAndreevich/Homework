//Задача-1

  // let messages={
  //     'error':"Вы допустили ошибку",
  //     'success':"Все прошло успешно",
  //     'check':function(user){
  //         if (user==a*b) console.log(this.success);
  //         else console.log(messages.error);
  //     }
  // }
  // let a = Math.round(Math.random() * 10) + 1;
  // let b = Math.round(Math.random() * 10) + 1;
  // let user=prompt("Вычислите " + a + " * " + b);
  // messages.check(user);

 // Задача-2

  // let myFormsData={
  //       'productName':'Стол обеденный ТРИЯ Промо Тип 2 Белый/Ателье темный',
  //       'allTypes':["белый", "черный", "красный"],
  //       'warranty':'12 мес.',
  //       ...
  //   }

 // Задача-3

  // for (let grad = 0; grad <= 360; grad += 15) {
  //   let rad = (grad * Math.PI) / 180;
  //   console.log(`${grad} равно ${rad.toFixed(2)} радиан`);
  // }

 // Задача-4

  // let str = prompt("");
  // let char = str.split("");
  // let newStr = "";
  // for (i= 1; i < char.length; i+=2) {
  //     newStr += char[i];
  // }
  // console.log(newStr);

 // Задача-5

  // let str = prompt("");
  // let numbers = str.split("");
  // let sum = 1;
  // for (let i = 0; i < numbers.length; i++) {
  //   sum *= numbers[i];
  // }
  // console.log(sum);

   // Задача-6

  // function sentenceType(str) {
  //   if (str.includes("!")) {
  //     alert("Восклицательное");
  //   } else if (str.includes("?")) {
  //     alert("Вопросительное");
  //   } else {
  //     alert("Повествовательное");
  //   }
  // }
  // let str = prompt("");
  // sentenceType(str);

 // Задача-7

  // function numberCounter(a) {
  //   let str = a.toString();
  //   console.log (str.length)
  // }
  // let a = Math.round(Math.random() * 10000) + 1;
  // numberCounter(a);

 // Задача-8

  // function numberReverse(a) {
  //   let str = a.toString();
  //   let strReverse = "";
  //   for (let i = str.length-1; i >= 0; i--) {
  //     strReverse += str.at(i);
  //   }
  //   return strReverse;
  // }
  // let a = Math.round(Math.random() * 10000) + 1;
  // console.log(numberReverse(a));

   // Задача-9

  function charRemover(str, pos) {
    let strFin = str.substr(0, pos - 1) + str.substr(pos, str.length);
    return strFin;
  }
  let str = prompt("");
  let pos = prompt("Введите позицию для удаления");
  console.log(charRemover(str, pos));