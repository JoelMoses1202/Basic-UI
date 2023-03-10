// WHEN CLASS CLICK IS CLICKED
var selectedButton = $(".active");
$(".click").click(function () {
  var selectedContainer = $(".container-active");
  $(this).addClass("active"); //ACTIVE CLASS IS ADDED TO CLASS WHICH IS CLICKED
  selectedButton.removeClass("active");  // FOR PREVIOUS CLASS ACTIVE CLASS IS REMOVED
  selectedButton = $(this);//SELECTED BUTTON IS SET TO THE SELECTED ONE
  var words = this.className.split(" ");
  var clsname = "." + words[1] + "-container";
  $(clsname).addClass("container-active"); //SELECTED CONTAINER IS ADDED AS CONTAINER ACTIVE
  selectedContainer.removeClass("container-active");// PREVIOUS SELECTED CLASS IS REMOVED

  if (clsname === ".locations-container") {    //CHECK IF CLASS NAME IS LOCATION CONTAINER TO ADD SCROLL IN OVERFLOW
    $(".container").css("overflow", "scroll");
  } else {
    $(".container").css("overflow", "hidden");
  }
});

$(function () {
  $("#accordion").accordion();    // MENTIONS ACCORDION FUNCTION FOR CLASS
});

for (var i = 0; i < script.length; i += 1) { // FOR LOOP TO LOOP THROUGH ALL THE ELEMENTS OF THE SCRIPT
  var country = $(
    "<tr><td>" +
      script[i].country +
      "</td><td>" +
      script[i].state +
      "</td><td>" +
      script[i].city +
      "</td><td>" +
      script[i].contact +
      "</td></tr>"
  );

  $("#location-table tr:last").after(country); //ADD THE ROW VALUES TO TABLE
}
