// Задача-1

  // let Gender;
  // function gender(Gender) {
  //   if (Gender === "М") {
  //     alert("Ваш пол - мужской");
  //   } else if (Gender === "Ж") {
  //     alert("Ваш пол - мужской");
  //   } else {
  //     alert("Ваш пол не определён");
  //   }
  //   return;
  // }
  // Gender = prompt("Ваш пол? (М/Ж)");
  // gender(Gender);

 // Задача-2

  // let number = Math.round(Math.random() * 100) + 1;
  // function isDec(number) {
  //   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   return arr.includes(number);
  // }
  // console.log (isDec(number));

 // Задача-3

  // let day;
  // function dayOfTheWeek(day) {
  //   let arr = [
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //     "Sunday",
  //   ];
  //   return console.log(arr[+day - 1]);
  // }
  // day = prompt();
  // dayOfTheWeek(day);

 // Задача-4

  // let a = Math.round(Math.random() * 100) + 1;
  // let b = Math.round(Math.random() * 100) + 1;
  // let c = Math.round(Math.random() * 100) + 1;
  // function minMax(a, b, c) {
  //   let arr = [a, b, c];
  //   console.log (Math.min(...arr), Math.max(...arr));
  //   return;
  // }

  // minMax (a,b,c)

 // Задача-5

  // let name = prompt("Введите имя");
  // let age = prompt("Введите возраст");
  // let welcome = (name, age) => {
  //   if (age < 18) {
  //     alert(name + " вы еще очень молоды!");
  //   }
  //   else if (age >= 18 && age <= 50) {
  //     alert(name + " добро пожаловать в личный кабинет!");
  //   }
  //   else if (age > 50) {
  //     alert(name + " моё почтение!");
  //   } else {
  //     alert("Укажите корректные данные!");
  //   }
  // };
  // console.log(welcome(name, age));

   // Задача-6

  // let a;
  // let i;
  // let dataType = (a, i) => {
  //   i = Math.round(Math.random() * 100) + 1;
  //   if (i <= 50) {
  //     a = prompt("Слово на букву А");
  //     if (isNaN(a)) {
  //     } else {
  //       alert("Неверный ввод");
  //     }
  //   } else {
  //     a = Math.random();
  //   }
  //   return console.log(typeof a);
  // };

  // dataType(a, i);

 // Задача-7

 let a;
 let b;
 let c;
 let example = (a, b, c) => {
   a = Math.round(Math.random() * 100) + 1;
   b = Math.round(Math.random() * 100) + 1;
   c = prompt(a + " + " + b + " = ? ");
   if (c == a + b) {
     alert("Пример решен верно!");
   } else {
     alert("Пример решен неверно!");
   }
 };

 example(a, b, c);