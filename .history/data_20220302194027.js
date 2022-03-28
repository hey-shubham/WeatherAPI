const countries = document.querySelectorAll("li");


let url = "https://python3-dot-parul-arena-2.appspot.com/test?cityname=";

fetch(url)
  .then((res) => res.json)
  .then((data) => {
      console.log(data);
      
  });
