const cityBtn = document.querySelector("aside button");
const td = document.querySelectorAll("tbody td");
console.log(td);
cityBtn.addEventListener("click", () => {
    
    return new Promise((res, rej) => {
        setTimeout(() => {
            td[0].focus();
        },1000)
    })
})