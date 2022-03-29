let url = "https://python3-dot-parul-arena-2.appspot.com/test?cityname=";

const cityBtn = document.querySelector("aside button");
// console.log(cityBtn);
const td = document.querySelectorAll("aside tbody td");
// console.log(td[0]);
const tbody = document.querySelector(".content tbody");
// console.log(tr);
let flag = false;
cityBtn.addEventListener("click", () => {
  if (flag) return;
  flag = true;
  console.log("Clicked get weather button");
  return new Promise((res, rej) => {
    setTimeout(() => {
      td[0].classList.add("focused");
      let newUrl = url + "London";
      getData(newUrl, "London");
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
          let newUrl = url + "New York";
          getData(newUrl, "New York");
          console.log(td[num]);
          res(2);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          td[num].classList.add("focused");
          let newUrl = url + "Los Angeles";
          getData(newUrl, "Los Angeles");
          console.log(td[num]);
          res(3);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          td[num].classList.add("focused");
          let newUrl = url + "Las Vegas";
          getData(newUrl, "Las Vegas");
          console.log(td[num]);
        }, 1000);
      });
    });
});

function getData(newUrl, city) {
  fetch(newUrl)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      tbody.innerHTML += `<tr>
                      <td>${city}</td>
                      <td>${data.description}</td>
                      <td>${data.temp_in_celsius}</td>
                      <td>${data.pressure_in_hPa}</td>
                      <td>hello</td>
                      <td class="delete-btn" onclick="deleteHandler()">Del</td>
                  </tr>`;
    });
}

function getTime(date) {}

const table = document.querySelector(".content table");
function deleteHandler() {
    console.log(event.target);
    table.deleteRow(event.target.parentElement.rowIndex);
}

const input = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
searchBtn.addEventListener("click", () => {
    filterTableHandler();
})
function filterTableHandler() {
    let tr = tbody.querySelectorAll("tr");
    console.log(tr);
    tr = [...tr];
    const rowArr = tr.filter(row => {
        row.children[0].innerText().includes(input.value);
    })
    tbody.innerHTML = "";
    rowArr.forEach(row => {
        tbody.innerHTML += row;
    });
}
