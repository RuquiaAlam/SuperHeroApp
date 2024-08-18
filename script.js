//https://www.superheroapi.com/api.php/409f58cb326c7a3d2354e3f1bcb6f2d3/search/batman
//https://www.superheroapi.com/api.php/409f58cb326c7a3d2354e3f1bcb6f2d3/245

console.log("hello");
const BASE_URL =
  "https://www.superheroapi.com/api.php/409f58cb326c7a3d2354e3f1bcb6f2d3";
const getHeroBtn = document.getElementById("getHeroBtn");
const imageHeroDiv = document.getElementById("imageDiv");
const searchInput = document.getElementById("searchInput");
const searchInputBtn = document.getElementById("searchInputBtn");

const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.name);
      showHero(json);
    });
};
const randomSuperHero = () => {
  const noOfHeroes = 731;
  const randomHero = Math.floor(Math.random() * noOfHeroes);
  console.log(randomHero);
  return randomHero;
};
const searchHeroName = (character) => {
  fetch(
    `https://www.superheroapi.com/api.php/409f58cb326c7a3d2354e3f1bcb6f2d3/search/${character}`
  )
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      showHero(hero);
    });
};
const showHero = (character) => {
  const name = `<h2>${character.name}</h2>`;
  const image = `<img src='${character.image.url}' height=200 width=200/>`;
  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${stat.toUpperCase()}:${character.powerstats[stat]}</p>`;
    })
    .join("");
  imageHeroDiv.innerHTML = `${name}${image}${stats}`;
};
getHeroBtn.onclick = () => getSuperHero(randomSuperHero());
console.log(searchInput.value);
searchInputBtn.onclick = () => searchHeroName(searchInput.value);
