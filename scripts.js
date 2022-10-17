// JavaScript for TP5


// function to load a file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();
}

//new recipe object 
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {

  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;

  this.displayRecipe = function() {

    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");

  }

}

HalsWineMustard = new Recipe(
  "Hal's Wine Mustard", "Ally Steigmann", "https://images.unsplash.com/photo-1578129377420-4795675e892e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
  "ingredients.html",
  "equipment.html",
  "directions.html");

LemonBars = new Recipe(
  "Lemon Bars", "Coby", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYC2ZagQ1zNJJT8azRQQGNa5IGaBk5ZR-ag&usqp=CAU",
  "lemon-ingredients.html",
  "lemon-equipment.html",
  "lemon-directions.html");

GoodOldfashionedPancakes = new Recipe(
  "Good Old fashioned Pancakes",
  "Maddy",
  "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "pancakes-ingredients.html",
  "pancakes-equipment.html",
  "pancakes-directions.html", );


window.onload = function() {

  document.querySelector("#firstRecipe").onclick = function() {
    HalsWineMustard.displayRecipe();
  }

  document.querySelector("#secondRecipe").onclick = function() {
    LemonBars.displayRecipe();
  }

  document.querySelector("#thirdRecipe").onclick = function() {
    GoodOldfashionedPancakes.displayRecipe();
  }











} //end window.onload