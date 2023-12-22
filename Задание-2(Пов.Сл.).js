//Задача 1
  //   let a = prompt("Cторона a");
  //   let b = prompt("Cторона b");
  //   let c = prompt("Cторона c");
  //   while(a === "" || b === "" || c === "") {
  //   alert("недопустимы пустые поля")
  //   a = prompt ("Cторона a");
  //   b = prompt ("Cторона b");
  //   c = prompt ("Cторона c");
  // } while(isNaN (a) || isNaN (b) || isNaN (c)) {
  //   alert("допустимы только числовые значения")
  //   a = prompt ("Cторона a");
  //   b = prompt ("Cторона b");
  //   c = prompt ("Cторона c");
  // } while(+a == 0 || +b == 0 || +c ==0) {
  //   alert("значение не должно быть равно нулю")
  //   a = prompt ("Cторона a");
  //   b = prompt ("Cторона b");
  //   c = prompt ("Cторона c");
  // } if(((c > Math.abs(a - b)) || (c > Math.abs(b - a))) && (c < +a + +b)) {
  //     alert ("a, b и c могут быть сторонами треугольника!1");
  // }else if(((a > Math.abs(c - b)) || (a > Math.abs(b - c))) && (a < +c + +b)) {
  //     alert ("a, b и c могут быть сторонами треугольника!2");
  // }else if(((b > Math.abs(a - c)) || (b > Math.abs(c - a))) && (b < +a + +c)) {
  //     alert ("a, b и c могут быть сторонами треугольника!3");
  // }else {
  //     alert ("Треугольника с такими длинами сторон существовать не может!")
  // }


//Задача 3


  // let a;
  // let b;
  // let c;
  // let d;
  // switch (confirm("Решить простым способом?")) {
  //   case true:
  //     a = prompt("Число 1");
  //     b = prompt("Число 2");
  //     c = prompt("Число 3");
  //     d = prompt("Число 4");
  //     while (a === "" || b === "" || c === "" || d === "") {
  //       alert("недопустимы пустые поля")
  //       a = prompt("Число 1");
  //       b = prompt("Число 2");
  //       c = prompt("Число 3");
  //       d = prompt("Число 4");
  //     }
  //     while (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
  //       alert("допустимы только числовые значения")
  //       a = prompt("Число 1");
  //       b = prompt("Число 2");
  //       c = prompt("Число 3");
  //       d = prompt("Число 4");
  //     }
  //     alert(Math.max((+a + +b), (+a + +c), (+a + +d), (+b + +c), (+b + +d), (+c + +d)));
  //     break;
  //   case false:
  //     a = prompt("Число 1");
  //     b = prompt("Число 2");
  //     c = prompt("Число 3");
  //     d = prompt("Число 4");
  //     while (a === "" || b === "" || c === "" || d === "") {
  //       alert("недопустимы пустые поля")
  //       a = prompt("Число 1");
  //       b = prompt("Число 2");
  //       c = prompt("Число 3");
  //       d = prompt("Число 4");
  //     } while (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
  //       alert("допустимы только числовые значения")
  //       a = prompt("Число 1");
  //       b = prompt("Число 2");
  //       c = prompt("Число 3");
  //       d = prompt("Число 4");
  //     }
  //     let sum1 = +a + +b;
  //     let sum2 = +a + +c;
  //     let sum3 = +a + +d;
  //     let sum4 = +b + +c;
  //     let sum5 = +b + +d;
  //     let sum6 = +c + +d;
  //     if ((sum1 >= sum2) && (sum1 >= sum3) && (sum1 >= sum4) && (sum1 >= sum5) && (sum1 >= sum6)) {
  //       alert(sum1);
  //     } else if ((sum2 >= sum1) && (sum2 >= sum3) && (sum2 >= sum4) && (sum2 >= sum5) && (sum2 >= sum6)) {
  //       alert(sum2);
  //     } else if ((sum3 >= sum1) && (sum3 >= sum2) && (sum3 >= sum4) && (sum3 >= sum5) && (sum3 >= sum6)) {
  //       alert(sum3);
  //     } else if ((sum4 >= sum1) && (sum4 >= sum2) && (sum4 >= sum3) && (sum4 >= sum5) && (sum4 >= sum6)) {
  //       alert(sum4);
  //     } else if ((sum5 >= sum1) && (sum5 >= sum2) && (sum5 >= sum3) && (sum5 >= sum4) && (sum5 >= sum6)) {
  //       alert(sum5);
  //     } else if ((sum6 >= sum1) && (sum6 >= sum2) && (sum6 >= sum3) && (sum6 >= sum4) && (sum6 >= sum5)) {
  //       alert(sum6);
  //     }
  //     break;
  // }


  //Задача 4

  // let S;
  // let a;
  // let h;
  // switch (prompt("Площадь какой фигуры вы желаете найти?")) {
  //   case "Круга":
  //   case "круга":
  //     let r = +prompt("Введите радиус");
  //     while (r == "" || isNaN(r) || (r <= 0)) {
  //       alert("недопустое значение");
  //       r = prompt("Введите радиус");
  //     }
  //     let p = 3.14;
  //     S = p * r * r;
  //     alert(S.toFixed(2));
  //     break;
  //   case "Квадрата":
  //   case "квадрата":
  //     a = +prompt("Введите высоту квадрата");
  //     let b = +prompt("Введите ширину квадрата");
  //     while ((a, b) == "" || isNaN(a, b) || (a, b <= 0)) {
  //       alert("недопустое значение");
  //       a = +prompt("Введите высоту квадрата");
  //       b = +prompt("Введите ширину квадрата");
  //     }
  //     S = a * b;
  //     alert(S.toFixed(2));
  //     break;
  //   case "Параллелограмаа":
  //   case "параллелограмма":
  //     a = +prompt("Введите сторону");
  //     h = +prompt("Введите высоту к стороне");
  //     while ((a, h) == "" || isNaN(a, h) || (a, h <= 0)) {
  //       alert("недопустое значение");
  //       a = +prompt("Введите сторону");
  //       h = +prompt("Введите высоту к стороне");
  //     }
  //     S = a * h;
  //     alert(S.toFixed(2));
  //     break;
  //   case "Ромба":
  //   case "ромба":
  //     a = +prompt("Введите сторону");
  //     h = +prompt("Введите высоту к стороне");
  //     while ((a, h) == "" || isNaN(a, h) || (a, h <= 0)) {
  //       alert("недопустое значение");
  //       a = +prompt("Введите сторону");
  //       h = +prompt("Введите высоту к стороне");
  //     }
  //     S = a * h;
  //     alert(S.toFixed(2));
  //     break;
  //   default:
  //     alert("Неверный ввод");
  //     break;
  // }