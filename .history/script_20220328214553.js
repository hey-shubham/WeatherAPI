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
          return new Promise((res, rej) => {
            
        })
      setTimeout(() => {
        td[num].focus();
        console.log(td[num]);
      }, 1000);
      return 2;
    })
    .then((num) => {
      setTimeout(() => {
        td[num].focus();
        console.log(td[num]);
      }, 1000);
      return 3;
    })
    .then((num) => {
      setTimeout(() => {
        td[num].focus();
        console.log(td[num]);
      }, 1000);
    });
});
