const cityBtn = document.querySelector("aside button");
console.log(cityBtn);
const td = document.querySelectorAll("tbody td");
// console.log(td[0]);

cityBtn.addEventListener("click", () => {
  console.log("clicked");
  return new Promise((res, rej) => {
    setTimeout(() => {
      td[0].focus();
      console.log(td[0]);
      res(1);
    }, 1000);
  })
    .then((num) => {
      // by default promise return krta h but
      return new Promise((res, rej) => {
        // mrko res flag chahiye tha, think it as custom constructor
        setTimeout(() => {
          td[num].focus();
          console.log(td[num]);
          res(2);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          td[num].focus();
          console.log(td[num]);
          res(3);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          td[num].focus();
          console.log(td[num]);
        }, 1000);
      });
    });
});
