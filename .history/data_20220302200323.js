let url = "https://python3-dot-parul-arena-2.appspot.com/test?cityname=";

const table = document.querySelector("table");
const countries = document.querySelectorAll("li");
countries[0].addEventListener("click", () => {
  const newurl = url + "London";
  getData(newurl, "L");
});
countries[1].addEventListener("click", () => {
  const newurl = url + "New York";
  getData(newurl);
});
countries[2].addEventListener("click", () => {
  const newurl = url + "Las Vegas";
  getData(newurl);
});
countries[3].addEventListener("click", () => {
  const newurl = url + "Los Angeles";
  getData(newurl);
});

const getData = (newurl) => {
  fetch(newurl)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      table.innerHTML += (
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      );
    });
};
