
  // let linksGenerator = function () {
  //     return function () {
  //       const object = {
  //         ПК: "PC",
  //         Ноутбуки: "Notebooks",
  //         Мониторы : "Monitors",
  //         ПКCode: 1001,
  //         НоутбукиCode: 4004,
  //         МониторыCode : 345,
  //         createPCLink: (ПК) => {
  //             return "http://myshop.ru/"+object.ПК+"/"+object.ПКCode;
  //         },
  //         createNotebooksLink: (ПК) => {
  //             return "http://myshop.ru/"+object.Ноутбуки+"/"+object.НоутбукиCode;
  //         },
  //         createMonitorLink: (ПК) => {
  //             return "http://myshop.ru/"+object.ПКCode+"/"+object.МониторыCode;
  //         },
  //       };
  //       return object;
  //     };
  // }
  // let links = linksGenerator();
  // console.log(links().createPCLink());


  // let getOrderCreator = function () {
  //   return `Заказ покупателя ${this.fio} составил ${this.price * this.quantity}`;
  // }
  // let orders = [
  //   {
  //     fio: "Ivan",
  //     tovar: "phone",
  //     price: 10000,
  //     quantity: 2
  //   },
  //   {
  //     fio: "Peter",
  //     tovar: "usb",
  //     price: 2300,
  //     quantity: 5
  //   },
  //   {
  //     fio: "Mary",
  //     tovar: "connector",
  //     price: 100,
  //     quantity: 100
  //   },
  // ]

  // let listOfOrders = {};
  // for (let i = 0; i < orders.length; i++) {
  //   getOrder = getOrderCreator.bind(orders[i]);
  //   let order = getOrder();
  //   listOfOrders[`Заказ ${i + 1}`] = order;
  // }
  // console.log(listOfOrders);
  // let orderNum = prompt("Какому заказу желаете применить скидку?");
  // let price = (listOfOrders[`Заказ ${orderNum}`].match(/\d+/))[0]
  // console.log(price);
  // let discount = prompt("Размер скидки в процентах?");
  // let priceWithDiscount = price - price / 100 * discount;
  // console.log(listOfOrders[`Заказ ${orderNum}`] = (listOfOrders[`Заказ ${orderNum}`]).replace(price, priceWithDiscount));
  // console.log(listOfOrders);


  function Menu(...navList){
        this.navList=navList;
        this.wrapperA=function(){
            return this.navList.map(elem=>`<a href='${elem}'>${elem}</a>`);
        }
    }
    let mainMenu=new Menu("home.html","services.html","price.html","about.html");
    // for (elem of mainMenu.navList)
        console.log(mainMenu.navList);
        console.log(mainMenu.wrapperA());
