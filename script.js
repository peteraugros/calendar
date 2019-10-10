
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

    //code for setting local storage for each button
    $("#9").click(function () {
        var nine = $(".input1").val();
        localStorage.setItem("line1", nine);
    })

    $("#10").click(function () {
        var ten = $(".input2").val();
        localStorage.setItem("line2", ten);
    })

    $("#11").click(function () {
        var eleven = $(".input3").val();
        localStorage.setItem("line3", eleven);
    })
    $("#12").click(function () {
        var twelve = $(".input4").val();
        localStorage.setItem("line4", twelve);
    })
    $("#13").click(function () {
        var thirteen = $(".input5").val();
        localStorage.setItem("line5", thirteen);
    })

    $("#14").click(function () {
        var fourteen = $(".input6").val();
        localStorage.setItem("line6", fourteen);
    })

    $("#15").click(function () {
        var fifteen = $(".input7").val();
        localStorage.setItem("line7", fifteen);
    })

    $("#16").click(function () {
        var sixteen = $(".input8").val();
        localStorage.setItem("line8", sixteen);
    })

    $("#17").click(function () {
        var seventeen = $(".input9").val();
        localStorage.setItem("line9", seventeen);
    })

getLocalStorage();

function getLocalStorage(){
    //code for getting local storage for each input
   
        var line1 = localStorage.getItem("line1");
        $(".input1").val(line1);

        var line2 = localStorage.getItem("line2");
        $(".input2").val(line2);

        var line3 = localStorage.getItem("line3");
        $(".input3").val(line3);

        var line4 = localStorage.getItem("line4");
        $(".input4").val(line4);

        var line5 = localStorage.getItem("line5");
        $(".input5").val(line5);

        var line6 = localStorage.getItem("line6");
        $(".input6").val(line6);

        var line7 = localStorage.getItem("line7");
        $(".input7").val(line7);

        var line8 = localStorage.getItem("line8");
        $(".input8").val(line8);

        var line9 = localStorage.getItem("line9");
        $(".input9").val(line9);

    
}

    $("#clearAll").click(function(){

       
            localStorage.clear();
            $(".input1").val(null);
            $(".input2").val(null);
            $(".input3").val(null);
            $(".input4").val(null);
            $(".input5").val(null);
            $(".input6").val(null);
            $(".input7").val(null);
            $(".input8").val(null);
            $(".input9").val(null);
           
    
//end clearAll function
    })

























    //end document ready function
});

