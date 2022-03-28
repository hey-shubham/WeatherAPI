let url = "https://python3-dot-parul-arena-2.appspot.com/test?cityname=";
const countries = document.querySelectorAll("li");
countries[0].addEventListener("click", () => {
  url += "London";
  getData();
});
countries[1].addEventListener("click", () => {
  url += "London";
  getData();
});
countries[2].addEventListener("click", () => {
  url += "London";
  getData();
});
countries[3].addEventListener("click", () => {
  url += "LosAngeles";
  getData();
});

const getData = () => {
  fetch(url)
    .then((res) => res.json)
    .then((data) => {
      console.log(data);
    });
};
