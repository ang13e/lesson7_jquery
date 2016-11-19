/*
Program Name: Recipe Display Application
Author: Alexis Gayda
Date:  11/18/16
Filename: myRecipe.js
*/

//displays the next element after the current target
 /*global $*/
function display(event) {
    
    $(event.currentTarget).next().fadeToggle("slow");
    
}//end of display

//attach event listener to h3 elements to invoke display function when hovered
$("h3").hover(display);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "white");
});