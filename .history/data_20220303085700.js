let url = "https://python3-dot-parul-arena-2.appspot.com/test?cityname=";

const tbody = document.querySelector("tbody");
const table = document.querySelector("table");
const countries = document.querySelectorAll("li");
countries[0].addEventListener("click", () => {
  const newurl = url + "London";
  getData(newurl, "London");
});
countries[1].addEventListener("click", () => {
  const newurl = url + "New York";
  getData(newurl, "New York");
});
countries[2].addEventListener("click", () => {
  const newurl = url + "Las Vegas";
  getData(newurl, "Las Vegas");
});
countries[3].addEventListener("click", () => {
  const newurl = url + "Los Angeles";
  getData(newurl, "Los Angeles");
});

const getData = (newurl, country) => {
  fetch(newurl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      tbody.innerHTML += `<tr>
          <td>${country}</td>
          <td>${data.description}</td>
          <td>${data.temp_in_celsius}</td>
          <td>${data.pressure_in_hPa}</td>
          <td>${data.humidity_in_percent}</td>
          <td onClick="delHandler(this)">Delete</td>
        </tr>`;
    });
};

// delete functionality
const delHandler = (ref) => {
  let idx = ref.parentNode.rowIndex;
  table.deleteRow(idx);
};

// filter functionality
const filerfun = () => {
  const search = document.querySelector("input");
  let val = search.value;
  val = val.toLowerCase();

  const tr = document.querySelectorAll("tbody tr");
  console.log(tr);
  for (let i of tr) {
    console.log(i);
    let td = document.querySelector(i + " td");
    td = td[0];
    if (td.textContent.toLowerCase().indexOf(val) != -1) {
      console.log("found");
    }
  }
};
