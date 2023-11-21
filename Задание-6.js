let getArr = () =>
    Array.from(
      Array(Math.round(Math.random() * 10) + 1),
      (n) => Math.round(Math.random() * 100) + 1
    );

 // Задача-1

  let arr = getArr();
  console.log(arr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      newArr.push(arr.at(i));
    }
  }
  console.log(newArr);

  let newestArr = Array.from(newArr, (n) => n * n);
  console.log(newestArr);

  let sum = 0;
  for (let i = 0; i < newestArr.length; i++) {
    sum += newestArr[i];
  }
  console.log(sum);

   // Задача-2

  // let arr = getArr();
  // console.log(arr);
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < 10 && arr[i] > 0) {
  //         sum += arr[i];
  //     }
  // }
  // console.log(sum);

 // Задача-3

  // let arr = getArr();
  // console.log(arr);

  // function evenOdd(arr) {
  //   if (arr.find((n) => n % 2 != 0)) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  // console.log(evenOdd(arr));

 // Задача-4

  // let arr = getArr();
  // console.log(arr);
  // function searcher(arr) {
  //   let newArr = arr.filter(n =>n%5 == 0);
  //   return console.log(newArr);
  // }

  // searcher(arr);

 // Задача-5

  // let arr = getArr();
  // console.log(arr);
  // function getAverage() {
  //   let newArr = arr.reduce((accumulator, currentValue)=> accumulator + currentValue, 0) / arr.length;
  //   return newArr.toFixed(1);
  // }
  // console.log(getAverage(arr));

 // Задача-6

  // let arr = getArr();
  // console.log(arr);
  // function ragsToRiches (arr) {
  //   let elem = arr.shift();
  //   arr.push(elem);
  //   return arr;
  // }
  // console.log(ragsToRiches(arr));

 // Задача-7

  // let arr = getArr();
  // while (arr.length % 2 != 0) {
  //   arr = getArr();
  // }
  // console.log(arr);

  // function evenOverOdd(arr) {
  //   let evenSum = arr.reduce(function (accumulator, currentValue, currentIndex) {
  //     if (currentIndex % 2 == 0) {
  //       return accumulator + currentValue;
  //     } else {return accumulator}
  //   },0);
  //   let oddSum = arr.reduce(function (accumulator, currentValue, currentIndex) {
  //     if (currentIndex % 2 != 0) {
  //       return accumulator + currentValue;
  //     } else {return accumulator}
  //   },0);
  //   return  console.log(evenSum/oddSum);
  // }
  // evenOverOdd(arr);

 // Задача-8

  //  let number = prompt("");
  //  let arr = number.toString().split('');
  //  console.log(arr);
  //  let newArr = arr.map((x) => +x + 1);
  //  console.log(newArr);

 // Задача-9

  // let arr = ["str","str","str","http://222"];
  // console.log (arr);
  // let newArr = arr.filter((str) => str.startsWith("http://"));
  // console.log (newArr);

 // Задача-10

  // let data = [
  //   {
  //     1: 11,
  //     2: 12,
  //     3: 13,
  //   },
  //   {
  //     1: 21,
  //     2: 22,
  //     3: 23,
  //   },
  //   {
  //     1: 24,
  //     2: 25,
  //     3: 26,
  //   },
  // ];
  // let keys = [];
  // let values = [];
  // for (let i = 0; i < data.length; i++) {
  // keys[i] = Object.keys(data[i]);
  // values[i] = Object.values(data[i]);
  // }
  // console.log(typeof(keys));
  // console.log(typeof(keys[0]));
  // console.log(typeof(values));
  // console.log(typeof(values[0]));
  // let keysF = keys[0].concat(keys[1],keys[2]);
  // let valueF = values[0].concat(values[1],values[2]);
  // console.log(keysF);
  // console.log(valueF);

  