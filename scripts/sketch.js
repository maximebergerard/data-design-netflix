// //en dessous du canvas avoir des div noires + infos au hover
// // let filmNO, filmRatings, filmNOTab, filmRatingsTab, finalTab;
let data

function preload() {
  data = loadTable("./data.csv", "csv", "header");
}

function setup() {
  // data = loadTable("./data.csv", "csv", "header");
  console.log(data);
  createCanvas(800, 200);
  // background(0);

//   finalTab = new p5.Table()
//   finalTab.addColumn('Title')
  // filmNOTab = filmNO.getColumn('Title')
  const test = data.findRows('2013', 'Year')
  // print(test.length)
  // let countNO = 0
  // let countNot = 0
  // for(let i = 0; i < test.length; i++) {
  //   if(test[i].getString('isNetflixOriginal') == 'TRUE') {
  //     countNO ++
  //   } else {
  //     countNot ++
  //   }
  // }
  // print(data.getColumn('isNetflixOriginal'))

  for (var x = 0; x < width; x += width / 10) {
    for (var y = 0; y < height; y += height / 2) {
        // fill(grid)
      const red = color('#E50914')
      const white = color('#fff')
      white.setAlpha(parseInt(test[x].getString('IMDb')) * 25.5)
      red.setAlpha(parseInt(test[x].getString('IMDb')) * 25.5)
      fill(red)
      rect(x, y, width / 16, height / 4)
    }
    print(parseInt(test[x].getString('IMDb')) * 25.5 + ' : Int')
    print(parseFloat(test[x].getString('IMDb')) * 25.5 + ': Float')

  }
}
