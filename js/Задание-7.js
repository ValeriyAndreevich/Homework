// Задача-1

  // const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  // let url = "https://cheatography.com/davechild/cheat-sheets/regular-expressions/";
  // console.log(urlPattern.test(url));

 // Задача-2

  // let variable = prompt();
  // const varChecker = /^[a-zA-Z0-9]{6,}$/;
  // console.log(varChecker.test(variable));

 // Задача-3

  // let variable = prompt();
  // const varChecker = /^\w*\d*$/;
  // console.log(varChecker.test(variable));

 // Задача-4

  //   let variable = prompt();
  //   const varChecker = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*/;
  //   while (varChecker.test(variable)) {
  //     variable = prompt();
  //   }
  //   console.log(variable);

 // Задача-5

 let variable = prompt();
 const num = /\d/g;
 const char = /[A-Za-z]/g;
//   let foundNum = variable.match(num);
//   let foundChar = variable.match(char);
 let foundNum = variable.match(num);
 let foundChar = variable.match(char);
 console.log(foundNum.length);
 console.log(foundChar.length);