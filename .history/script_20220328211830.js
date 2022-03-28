const cityBtn = document.querySelector("aside button");
const td = document.querySelectorAll("tbody td");
// console.log(td[0]);
cityBtn.addEventListener("click", () => {
    
    console.log()
    return new Promise((res, rej) => {
        setTimeout(() => {
            td[0].focus();
        },1000)
    })
}).then(() => {
    td[1].focus();
}).then(() => {
    td[2].focus();
}).then(() => {
    td[3].focus();
})