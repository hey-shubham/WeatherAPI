const cityBtn = document.querySelector("aside button");
const td = document.querySelectorAll("tbody td");
// console.log(td[0]);
cityBtn
  .addEventListener("click", () => {
    console.log("clicked");
    return new Promise((res, rej) => {
      setTimeout(() => {
        td[0].focus();
        red(1);
      }, 1000);
    });
  })
  .then((num) => {
    setTimeout(() => {
      td[num].focus();
      return 2;
    }, 1000);
  })
  .then((num) => {
    setTimeout(() => {
      td[num].focus();
      return 3;
    }, 1000);
  })
  .then((num) => {
    setTimeout(() => {
      td[num].focus();
    }, 1000);
  });
