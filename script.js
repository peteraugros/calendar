$(document).ready(function () {

    //variables to hold new date and time
    var dt = new Date();
    var dayDate = dt.toDateString();

    //posting it to DOM
    $("#date").append(dayDate);

    //getting hour
    var dt = new Date();
    var time = dt.getHours();

    //setting background colors for rows and text fields
    var allRows = $(".th");

    //looping through for the green
    for (var i = 9; i < 18; i++) {
       
        if(time < i){
           $("." + i).css("background-color", "green");
        } 
    }

    //looping through for the red
    for (var i = 9; i < 18; i++) {
        if(time === i){
            $("." + time).css("background-color", "red");
        }
    }

    //event delegation for buttons and locks
    var btn = $("#tbody");
    btn.on("click", function (e) {
        console.log(e);

        var target = e.target;

        if (target.matches("img") || (target.matches("button"))) {

            if (target.matches("img")) {
                if ($(target).hasClass("notLocked")) {

                    $(target).attr("src", "closedLock.png");
                    $(target).removeClass("notLocked");
                    $(target).addClass("locked");
                } else {
                    $(target).attr("src", "locked.png");
                    $(target).removeClass("locked");
                    $(target).addClass("notLocked");
                }
                //changing text field to toggle from edit to read only
                var textInput = $(target).parents()[1].children("input");
                $(textInput).css("background-color", "red");
                $(textInput).attr("readonly", "readonly");
                // txtCustomerID.Attributes.Remove("readonly")
            }

            if (target.matches("button")) {
                if ($(target).find("img").hasClass("notLocked")) {

                    $(target).find("img").attr("src", "closedLock.png");
                    $(target).find("img").removeClass("notLocked");
                    $(target).find("img").addClass("locked");
                } else {
                    $(target).find("img").attr("src", "locked.png");
                    $(target).find("img").removeClass("locked");
                    $(target).find("img").addClass("notLocked");
                }
            }
        }
        //end event delegation function
    });

 


























    //end document ready function
});

