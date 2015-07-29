    var Yosemite = Yosemite || {};

    Yosemite.Core = {

        Public: {
            Variable: null,
        },

        __CONSTRUCT: function() {

            Yosemite.Core.SetClock();

            Yosemite.Core.OpenApp();

        },

        LoadApp:function(App){
            $.ajax({
                url: "applications/" + App + ".php",
                success: function(Application){
                    if ($('.'+App).length){

                        if( $('.'+App).attr("multiple")){

                            $("#container").prepend(Application).animate({}, function(){
                                $("#container:first-child").hide(function(){
                                    $(this).fadeIn();
                                });
                            });

                        } else {

                            return false;

                        }

                    } else {
                        $("#container").prepend(Application).animate({}, function(){
                            $("#container:first-child").hide(function(){
                                $(this).fadeIn();
                            });
                        });
                    }
                }
            });
        },

        OpenApp: function(){
            $(document).keyup(function(e){

                if(e.ctrlKey && e.keyCode==32){
                    Yosemite.Core.LoadApp("spotlight");
                }

            });


        },

        CheckTime: function(i){
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        },

        SetClock: function(){
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            var weekday = new Array(7);
            m = Yosemite.Core.CheckTime(m);
            s = Yosemite.Core.CheckTime(s);
            weekday[0]=  "Sun ";
            weekday[1] = "Mon ";
            weekday[2] = "Tue ";
            weekday[3] = "Wed ";
            weekday[4] = "Thu ";
            weekday[5] = "Fri ";
            weekday[6] = "Sat ";
            var n = weekday[today.getDay()];

            $('.time').html(n + h + ":" + m + " PM");

            t = setTimeout(function () {
                Yosemite.Core.SetClock()
                console.log("Lol");
            }, 500);
        }
    }

Yosemite.Core.__CONSTRUCT();