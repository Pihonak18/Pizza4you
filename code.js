$(document).ready(function () {
  console.log(JSON.parse(localStorage.getItem("saveRatings")));
  console.log(localStorage.getItem("userinput"));

  var pizzaPlaces = ["Modern", "Sally's", "PePe's", "Da legnas", "Bar"];

  for (var i = 0; i < pizzaPlaces.length; i++) {
    /*this loop will be to set the ratings at each pizza place
  *wraps around all of the vars and appending the names & images
  also not sure if this is correct or works properly yet.

  */

    var name = $("<h5></h5>");
    name.text(pizzaPlaces[i]);
    // var emptyPizza = $("<img src='emptyslice.jpg'/>");
    /*we are telling var emptyPizza that is has this photo
    and then we are just changing the attr/photo in its place when clicked.
    so this eliminated using the hide jquery option we are able to store both 
    images in one variable
    *
    */
    var btnName = "btn" + i;
    var classname = "input" + i;
    $("#names").append(name);
    var form = $(
      "<form><input class='" +
        classname +
        "'  type='text'><button type='button' class='btn btn-success " +
        btnName +
        "'> " +
        "Submit" +
        " </button></div>"
    );

    $(".btn0")
      .unbind()
      .click(function () {
        var comment = $(".input0").val();
        console.log(comment);

        localStorage.setItem("userinput", JSON.stringify(comment));
      });
    $(".btn1")
      .unbind()
      .click(function () {
        var comment = $(".input1").val();
        console.log(comment);

        localStorage.setItem("userinput", JSON.stringify(comment));
      });
    $(".btn2")
      .unbind()
      .click(function () {
        var comment = $(".input2").val();
        console.log(comment);

        localStorage.setItem("userinput", JSON.stringify(comment));
      });
    $(".btn3")
      .unbind()
      .click(function () {
        var comment = $(".input3").val();
        console.log(comment);

        localStorage.setItem("userinput", JSON.stringify(comment));
      });
    $(".btn4")
      .unbind()
      .click(function () {
        var comment = $(".input4").val();
        console.log(comment);

        localStorage.setItem("userinput", JSON.stringify(comment));
      });

    for (var j = 0; j < 10; j++) {
      var random = j + 1;
      var emptyPizza = $("<img id='" + random + "' src='emptyslice.jpg'/>");
      emptyPizza.attr("srcb", "colorepizza.jpg");
      emptyPizza.addClass("plainPizza");
      emptyPizza.css({ height: "4em", width: "4em" });
      var rate = $(".filledPizza");
      $("#names").append(emptyPizza, form);
    }
  }

  function changeImage() {
    $(".plainPizza").click(function () {
      console.log(this);
      var thisClass = $(this).attr("id");
      console.log(thisClass);
      // console.log(rating);
      var src = $(this).attr("src");
      var srcb = $(this).attr("srcb");
      localStorage.setItem("saveRatings", JSON.stringify(thisClass));

      /*
here is the function that says when this src is clicked, 
then change it to the srcb which is the second pizza slice photo
 */
      $(this).attr("src", srcb);
      $(this).attr("srcb", src);
    });
  }

  /*now what i would like to do is maybe add multiple pizza photos and list #'s 1-5? and then when
  someone selects a # like how much they'd like to rate that place it will change that many pizzas

  still need to get local storage to count the # of "ratings"
  */

  changeImage();
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
