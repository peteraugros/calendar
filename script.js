
$(document).ready(function () {
    

   
    
    //variables to hold new date and time
    var dt = new Date();
    var dayDate = dt.toDateString();

    //posting it to DOM
    $("#date").append(dayDate);

    //getting hour
    var dt = new Date();
    var time = dt.getHours();

    //looping through for the green background
    for (var i = 9; i < 18; i++) {

        if (time < i) {
            $("." + i).css("background-color", "green");
        }
    }

    //looping through for the red background
    for (var i = 9; i < 18; i++) {
        if (time === i) {
            $("." + time).css("background-color", "red");
        }
    }

    //event delegation for buttons and locks
    var btn = $("#tbody");
    btn.click(function (e) {
        e.preventDefault();

        var target = e.target;

        if (target.matches("img") || (target.matches("button"))) {

            //getting value of the target
            var value = $(target).val();

            //toggling text field to readonly and read
            if ($("." + value).hasClass("unlocked")) {
                $("." + value).attr("readonly", true);
                $("." + value).removeClass("unlocked");
                $("." + value).addClass("locked");
            } else {
                $("." + value).attr("readonly", false);
                $("." + value).removeClass("locked");
                $("." + value).addClass("unlocked");

            }

            //toggling lock images
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
  
        //adding content to local storage
        var set;

        for (var i = 1; i < 10; i++) {
            set = $(".ls" + i).val();
            localStorage.setItem("ls" + i, set);
        }

     

     

        //end event delegation function
    });





























    //end document ready function
});

