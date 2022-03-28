let url =
  "https://python3-dot-parul-arena-2.uc.r.appspot.com/test?cityname=London?cityname=";

const cityBtn = document.querySelector("aside button");
// console.log(cityBtn);
const td = document.querySelectorAll("aside tbody td");
// console.log(td[0]);
const tr = document.querySelectorAll(".content tbody td");
// console.log(tr);

cityBtn.addEventListener("click", () => {
  console.log("Clicked get weather button");
  return new Promise((res, rej) => {
    setTimeout(() => {
      td[0].classList.add("focused");
      getData("London");
      console.log(td[0]);
      res(1);
    }, 1000);
  })
    .then((num) => {
      // by default promise return krta h but res kese milega
      return new Promise((res, rej) => {
        // think it as custom constructor
        setTimeout(() => {
          td[num].classList.add("focused");
          getData("New York");
          console.log(td[num]);
          res(2);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          td[num].classList.add("focused");
          getData("Los Angeles");
          console.log(td[num]);
          res(3);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          td[num].classList.add("focused");
          getData("Las Vegas");
          console.log(td[num]);
        }, 1000);
      });
    });
});

function getData(city) {
    let cityUrl = url + city;
    fetch
}
