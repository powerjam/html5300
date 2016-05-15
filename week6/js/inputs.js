
/*INPUTS*/

$(document).ready(function(){
    $("#button").click(function(){
      var text = $('#the-text').val();
//      var text = $('#the-textarea').val();
      $('#feedback').text(text);
    });
});



//Your JavaScript should read and display the initial value for each input, and then handle the change event for the inputs by displaying the new value. For most inputs, you can use jQuery's val() method. An exception is checkboxes, for which you can use jQuery's prop() method.


/*input fields - value method
$(document).ready(function(){
    $("button").click(function(){
        alert($("input:text").val());
    });
});*/


/*checkboxes - prop method
$("button").click(function(){
    var $x = $("div");
    $x.prop("color", "FF0000");
    $x.append("The color property: " + $x.prop("color"));
    $x.removeProp("color");
});*/


////////////////////////////////////////////////////////////////////////////////////

/*DRAG AND DROP*/

//Set a handler for the mousedown event on those draggable elements. It should have a variable that holds the event target (the element that was clicked on). It should also get the difference between the position of that element (its left and top CSS settings) and the mouse (the event's pageX and pageY in jQuery).

//That event handler should then set event handlers for two other events: A mousemove handler should update the element's position so that the difference between that and the mouse's new position stays constantjquery . A mouseup handler should remove those two event handlers so dragging finishes. (With jQuery, use the off method.) These handlers should be set on the entire document, rather than the target element.


//drag-and-drop - mouse methods
/*$("div").mousedown(function(){
    $(this).after("Mouse button pressed down.");
});

$(document).mousemove(function(event){
    $("span").text(event.pageX + ", " + event.pageY);
});

$("div").mouseup(function(){
    $(this).after("Mouse button released.");
});

drag-and-drop - offset method
$("button").click(function(){
    var x = $("p").offset();
    alert("Top: " + x.top + " Left: " + //x.left);
});*/