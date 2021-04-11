let data;
const scrollY = document.querySelector(".sections");

scrollY.addEventListener("scroll", () => {
  findScroll();
  if (scrollY.scrollTop >= 820 && scrollY.scrollTop <= 1100) {
    setup();
  } else if (scrollY.scrollTop >= 1350 && scrollY.scrollTop <= 2000) {
    setup();
  } else if (scrollY.scrollTop >= 2100 && scrollY.scrollTop <= 2800) {
    setup();
  } else if (scrollY.scrollTop <= 90) {
    setup();
  }
});

function findScroll() {
  const indicator = document.querySelector(".scroll-indicator");
  if (scrollY.scrollTop < 100) {
    indicator.style.display = "flex";
  } else {
    indicator.style.display = "none";
  }
}

function preload() {
  data = loadTable("./data.csv", "csv", "header");
}

function setup() {
  let filmDiv = document.querySelector("#film2013");
  let film = data.findRows("2013", "Year");
  if (scrollY.scrollTop >= 820 && scrollY.scrollTop <= 1100) {
    filmDiv = document.querySelector("#film2016");
    film = data.findRows("2016", "Year");
  } else if (scrollY.scrollTop >= 1350 && scrollY.scrollTop <= 2000) {
    filmDiv = document.querySelector("#film2018");
    film = data.findRows("2018", "Year");
  } else if (scrollY.scrollTop >= 2100 && scrollY.scrollTop <= 2800) {
    filmDiv = document.querySelector("#film2019");
    film = data.findRows("2019", "Year");
  } else if (scrollY.scrollTop <= 90) {
    filmDiv = document.querySelector("#film2013");
    film = data.findRows("2013", "Year");
  }
  const canvas = createCanvas(filmDiv.offsetWidth, filmDiv.offsetHeight);
  canvas.parent(filmDiv);

  for (let x = 0; x < width; x += width / 14) {
    for (let y = 0; y < height; y += height / 4) {
      let randomFilm = parseInt(random(film.length));
      const red = color("#E50914");
      const white = color("#fff");
      if (film[randomFilm].getString("isNetflixOriginal") == "TRUE") {
        red.setAlpha(parseInt(film[randomFilm].getString("IMDb")) * 25.5);
        fill(red);
      } else {
        white.setAlpha(parseInt(film[randomFilm].getString("IMDb")) * 25.5);
        fill(white);
      }
      rect(x, y, width / 16, height / 5);
    }
  }
  // let IMDbScoreNetflix = 0,
  //   NumberNetflixOriginal = 0,
  //   IMDbScoreNormal = 0,
  //   NumberOtherFilms = 0;

  // for (let i = 0; i < film.length; i++) {
  //   if (
  //     !isNaN(film[i].getString("IMDb")) &&
  //     film[i].getString("isNetflixOriginal") == "TRUE"
  //   ) {
  //     NumberNetflixOriginal += 1;
  //     IMDbScoreNetflix += parseFloat(film[i].getString("IMDb"));
  //   } else if (
  //     !isNaN(film[i].getString("IMDb")) &&
  //     film[i].getString("isNetflixOriginal") == "FALSE"
  //   ) {
  //     NumberOtherFilms += 1;
  //     IMDbScoreNormal += parseFloat(film[i].getString("IMDb"));
  //   }
  // }

  // const test = document.querySelectorAll(".score")
  // const NetflixScore = document.createElement("p").appendChild(document.createTextNode(IMDbScoreNetflix / NumberNetflixOriginal))
  // for(let j = 0; j < test.length; j++) {
  //   test[j].appendChild(NetflixScore)
  // }
}
//77
//831
//1585
//2323
//
