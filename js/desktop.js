    var Yosemite = Yosemite || {};

    Yosemite.Core = {

        Public: {
            Variable: null,
        },

        __CONSTRUCT: function() {

            Yosemite.Core.SetClock();
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
        },

        Application: {

            Open: function(App){
                $.ajax({
                    url: "applications/" + App + "/Application.php",
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

            Shortcuts: function(){
                $(document).keyup(function(e){

                    if(e.ctrlKey && e.keyCode==32){
                        Yosemite.Core.Application.Open("spotlight");
                    }

                });
            },

            Close: function(App, animation){
                switch(animation){
                    case"Shrink":
                        $("." + App).animate({ "width" : "50px", "height" : "50px", "opacity" : "0.4" }, function(){
                            $(this).fadeOut(function(){
                                $(this).remove();
                            });
                        });
                    break;

                    case"Fade":
                        $("." + App).fadeOut(function(){
                            $(this).remove();
                        });
                    break;

                    case"Normal":
                         $("." + App).remove();
                    break;
                }
            }

        },

        Spotlight: {

            Public: {
                Typing: {
                    Timer: null, 
                    Done: 5000,
                },

                Search: null,
                Application: null,

            },

            __CONSTRUCT: function(){

                $(document).on('keyup', '#spotlight-search-input', function(){

                    Yosemite.Core.Spotlight.Public.Search = $(this).val();

                    clearTimeout(Yosemite.Core.Spotlight.Public.Typing.Timer);

                    Yosemite.Core.Spotlight.Public.Typing.Timer = setTimeout(Yosemite.Core.Spotlight.Search(), Yosemite.Core.Spotlight.Public.Typing.Done);

                });

                $(document).on("mouseover", ".Spotlight-search-results li", function(){

                    Yosemite.Core.Spotlight.Public.Application = $(this).text();

                    Yosemite.Core.Spotlight.Review();

                });

                $(document).on("click", ".Spotlight-search-results li", function(){

                    Yosemite.Core.Application.Open($(this).html());

                    Yosemite.Core.Application.Close("spotlight", 'Normal');

                });


            },

            Search: function(){

                $(".Spotlight-search-results").load("spotlight-search.php?Search=" + Yosemite.Core.Spotlight.Public.Search);

            },

            Review: function(){
                
                $(".spotlight").animate({ "height" : "450px" });

                $(".Spotlight-search-review").load("applications/" + encodeURI(Yosemite.Core.Spotlight.Public.Application) + "/Review.php");

            },
        },

        Safari: function(){
            
        }
    }

Yosemite.Core.__CONSTRUCT();
Yosemite.Core.Spotlight.__CONSTRUCT();

// Application Data
Yosemite.Core.Application.Shortcuts();
