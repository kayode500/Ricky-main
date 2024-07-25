// variable to hold references to html element
let nam = document.querySelector(".name");
let statu = document.querySelector("#status");
let specie = document.querySelector("#species");
let origi = document.getElementById("origin");
let btn1 = document.querySelector("#btn1");
let genda = document.getElementById("gender");
let img = document.querySelector("#image");
let rick = document.querySelector(".ricky");
let apiKey = "64WAwnomuAx2B2NoAFxPOB4yctBMj1XzyXGkjKDO";

//fetch data from api and update html element

btn1.addEventListener("click", function () {
  fetch("https://rickandmortyapi.com/api/character/")
    .then((res) => res.json())
    .then((data) => {
      let randomNumner = parseInt(Math.random() * 12 + 1);

      let name = data["results"][`${randomNumner}`]["name"];
      let status = data["results"][`${randomNumner}`]["status"];
      let species = data["results"][`${randomNumner}`]["species"];
      let origin = data["results"][`${randomNumner}`]["origin"]["name"];
      let gender = data["results"][`${randomNumner}`]["gender"];
      let image = data["results"][`${randomNumner}`]["image"];

      // update the content of the html element
      nam.innerHTML = `<span>${name}</span>`;
      statu.innerHTML = `<span>${status}</span>`;
      specie.innerHTML = `<span>${species}</span>`;
      origi.innerHTML = `<img src=${origin} alt="" class="" />`;
      genda.innerHTML = `<span>${gender}</span>`;
      img.innerHTML = `<img src = ${image} alt="">`;
    });

    
});
 rick.style.color = "green";
 nam.style.color = "white";
 statu.style.color = "white";
 specie.style.color ="white";
 origi.style.color = "white";
 genda.style.color = "white";



