let url = "https://python3-dot-parul-arena-2.appspot.com/test?cityname=";

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
      // console.log(data);
      table.innerHTML += (
        <tr>
          <td>country</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    });
};
