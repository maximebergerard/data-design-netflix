let data;
const scrollY = document.querySelector(".sections");
const totalSquares = 55;
let windowHeight = window.innerHeight

window.addEventListener('resize', () => {
  windowHeight = window.innerHeight;
})

// Scroll for each section
scrollY.addEventListener("scroll", () => {
  findScroll();
  if (scrollY.scrollTop >= 1201 && scrollY.scrollTop <= 2150) {
    setup();
  } else if (scrollY.scrollTop >= 2151 && scrollY.scrollTop <= 3400) {
    setup();
  } else if (scrollY.scrollTop >= 3401) {
    setup();
  } else if (scrollY.scrollTop <= 1200) {
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

// Create a table of netflix Originals only movies
function addNetflixOriginals(_number, _films) {
  let movies = [];
  let i = 0;
  // Adding netflix movies to array
  for (let i = 0; i < _films.length; i++) {
    let state = _films[i].getString("isNetflixOriginal");
    if (state == "TRUE" && movies.length <= _number) {
      movies.push(_films[i]);
    }
  }
  return movies;
}

// Create a table of NOT netflix Originals only movies
function addOthersMovies(_number, _films) {
  let movies = [];
  let i = 0;
  // Adding netflix movies to array
  for (let i = 0; i < _films.length; i++) {
    let state = _films[i].getString("isNetflixOriginal");
    if (state == "FALSE" && movies.length <= _number) {
      movies.push(_films[i]);
    }
  }
  return movies;
}

// Shuffle arrays
function shuffleMovies(_array) {
  for (let i = _array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [_array[i], _array[j]] = [_array[j], _array[i]];
  }
  return _array;
}

//
// ------------------------------------------
//

function setup() {
  // SCROLL BEHAVIOR
  let filmDiv = document.querySelector("#film2013");
  let film = data.findRows("2013", "Year");
  let proportion = 0;
  if (scrollY.scrollTop >= 1201 && scrollY.scrollTop <= 2150) {
    filmDiv = document.querySelector("#film2016");
    film = data.findRows("2016", "Year");
    proportion = 1;
  } else if (scrollY.scrollTop >= 2151 && scrollY.scrollTop <= 3400) {
    filmDiv = document.querySelector("#film2018");
    film = data.findRows("2018", "Year");
    proportion = 6;
  } else if (scrollY.scrollTop >= 3401) {
    filmDiv = document.querySelector("#film2019");
    film = data.findRows("2019", "Year");
    proportion = 13;
  } else if (scrollY.scrollTop <= 1200) {
    filmDiv = document.querySelector("#film2013");
    film = data.findRows("2013", "Year");
    proportion = -1;
  }
  const canvas = createCanvas(filmDiv.offsetWidth, filmDiv.offsetHeight);
  canvas.parent(filmDiv);

  // Creating movies
  let netflixOriginals = addNetflixOriginals(proportion, film);
  let otherMovies = addOthersMovies(
    totalSquares - netflixOriginals.length,
    film
  );
  let allMovies = shuffleMovies([].concat(netflixOriginals, otherMovies));

  // Draw movies
  for (let x = 0, i = 0; x < width; x += width / 14) {
    for (let y = 0; y < height; y += height / 4, i++) {
      if (!allMovies.length == 0) {
        let randomFilm = parseInt(random(allMovies.length));
        const red = color("#E50914");
        const white = color("#fff");

        if (allMovies[randomFilm].getString("isNetflixOriginal") == "TRUE") {
          red.setAlpha(parseInt(allMovies[randomFilm].getString("IMDb")) * 25.5);
          fill(red);
          allMovies.splice(randomFilm, 1);
        } else {
          white.setAlpha(
            parseInt(allMovies[randomFilm].getString("IMDb")) * 25.5
          );
          fill(white);
          allMovies.splice(randomFilm, 1);
        }
        rect(x, y, width / 16, height / 5);
      }
    }
  }

  // calculate score
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
}
