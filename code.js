$(document).ready(function () {
  var pizzaPlaces = ["Modern", "Da legnas", "Sally's", "Bar", "PePe's"];
  var rating = 0;

  for (var i = 0; i < pizzaPlaces.length; i++) {
    /*this loop will be to set the ratings at each pizza place
  *wraps around all of the vars and appending the names & images
  also not sure if this is correct or works properly yet.

  */

    var name = $("<h5></h5>");
    name.text(pizzaPlaces[i]);
    var emptyPizza = $("<img src='emptyslice.jpg'/>");
    $("<img src='emptyslice.jpg'/>").addClass("#plainPizza");
    emptyPizza.css({ height: "4em", width: "4em" });
    $("#names").append(name, emptyPizza, rate);
    var rate = $("<img src='colorepizza.jpg'/>");
    $("<img src='colorepizza.jpg'/>").addClass("#filledPizza");
    rate.hide();
  }

  function changeImage() {
    $("#plainPizza").click(function () {
      $("#filledPizza").show();
      rating++;
    });
  }

  //can't get the function to work yet for when the empty slice is clicked it'll change
  //to the colored slice and local storage will count the # of ratings.

  changeImage();
  console.log(rating);
});

//document.ready funtion for jquery

// look into a function for users to rate the pizza places on our webkitRequestAnimationFrame

// function
//  to the right of the pizzaria, there will be pizza slices and an empty pie or a few,
//  people can vote by dragging slices and dropping them to create a full pie.

//store on local storage, favorite or thumbs up for users to vote on pizza places.
//make it a pizza for thumbs up

//two buttons, one thumbs up and one thumbs down.

//give the pizza the id of dropzone and set it to droppable
//give the pepperonis an id and set it to draggable

//function for button ratings? is the ratings tab listed in
