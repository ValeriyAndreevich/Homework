let productArr = [
    {
      name: "Смарт-часы Apple Watch SE 2022 40mm",
      price: "25 499",
      color: "black",
      img: "awatch-black",
    },
    {
      name: "Смарт-часы Apple Watch SE 40mm",
      price: "23 499",
      color: "blue",
      img: "awatch-blue",
    },
    {
      name: "Смарт-часы Apple Watch SE 2023 40mm",
      price: "27 499",
      color: "white",
      img: "awatch-white",
    },
  ];

  let getCards = function (array) {
    for (element of array) {
      let divCard = document.createElement("div");
      divCard.classList.add("card");
      let img = document.createElement("img");
      img.src = `./img/${element.img}.png`;
      let divCardBody = document.createElement("div");
      divCardBody.classList.add("card-body");
      let h5 = document.createElement("h5");
      h5.textContent = element.name;
      h5.classList.add("card-title");
      let desc = document.createElement("p");
      desc.textContent = `Цена = ${element.price}, цвет = ${element.color}.`;
      desc.classList.add("card-text");
      let anc = document.createElement("a");
      anc.classList.add("btn");
      anc.classList.add("btn-primary");
      divCardBody.appendChild(h5);
      divCardBody.appendChild(desc);
      divCardBody.appendChild(anc);
      divCard.style = "width: 18rem";
      divCard.appendChild(img);
      divCard.appendChild(divCardBody);
      let pinObj = document.querySelector("card");
      document.body.insertBefore(divCard, pinObj);
    }
  };
  getCards(productArr);