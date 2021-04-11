let data;
const scrollY = document.querySelector(".sections");
scrollY.addEventListener("scroll", () => {
  findScroll();
  if (scrollY.scrollTop >= 969 && scrollY.scrollTop <= 972) {
    setup()
  } else if (scrollY.scrollTop >= 1852 && scrollY.scrollTop <= 1856) {
    setup();
  } else if (scrollY.scrollTop >= 2707 && scrollY.scrollTop <= 2715) {
    setup();
  } else if (scrollY.scrollTop <= 90) {
    setup();
  }
});

function findScroll() {
  console.log(scrollY.scrollTop);
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
  films();
}

function films() {
  let filmDiv = document.querySelector("#film2013");
  let film = data.findRows("2013", "Year");
  if (scrollY.scrollTop >= 969 && scrollY.scrollTop <= 972) {
    filmDiv = document.querySelector("#film2016");
    film = data.findRows("2016", "Year");
  } else if (scrollY.scrollTop >= 1852 && scrollY.scrollTop <= 1856) {
    filmDiv = document.querySelector("#film2018");
    film = data.findRows("2018", "Year");
  } else if (scrollY.scrollTop >= 2707 && scrollY.scrollTop <= 2715) {
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
}
