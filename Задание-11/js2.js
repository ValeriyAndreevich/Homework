
let toTheEnd = (new Date((new Date).getFullYear()+1, 0, 1)) - new Date;
let daysToTheEnd = Math.ceil(toTheEnd/1000/60/60/24) ;
let hoursToTheEnd = Math.ceil(toTheEnd/1000/60/60);
let timer = document.createElement("p");
timer.classList.add("sale-text");
timer.textContent = `«До конца распродажи осталось ${daysToTheEnd} дней ${hoursToTheEnd} часов»`
let header = document.querySelector("sale");
document.body.insertBefore(timer, header);