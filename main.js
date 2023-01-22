
    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 470) {
                var width = $(".lielabilde img").width();
                $(".lielabilde img").css("visibility", "hidden");
                $("body").append('<img src="mazabilde2.jpg" alt="Image" class="new-image lock-image">');
                $(".new-image").css({
                    "position": "fixed",
                    "top": "50px",
                    "left": "50%",
                    "transform": "translate(-50%, -50%)",
                    "width": width,
                    "height":"100px",
                    "filter": "grayscale(130%) brightness(90%)"
                });
                $(".veikals").css("background-color", "transparent");
                $(".veikals").addClass("white-text");
            } else if (scroll < 380) {
                $(".lielabilde img").css("visibility", "visible");
                $(".new-image.lock-image").remove();
                $(".veikals").css("background-color", "white");
                $(".veikals").css("position", "fixed");
                $(".veikals").removeClass("white-text");
            }
        });
    });
    
    window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
          var elements = document.getElementsByClassName("sign");
          for (var i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = "12px";
            elements[i].style.width="18vw";
            elements[i].style.height="12vw";

          }
        }
    });
      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
          var elements = document.getElementsByClassName("shop");
          for (var i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = "12px";
            elements[i].style.width="18vw";
            elements[i].style.height="12vw";

          }
        }
      });

    window.addEventListener("resize", function(){
      if(window.innerWidth < 769){
        var elements = document.getElementsByClassName("about");
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.fontSize = "12px";
          elements[i].style.width="18vw";
          elements[i].style.height="12vw";
        }
      }
    });

    window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
          var elements = document.getElementsByClassName("veikals");
          for (var i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = "3vw";
            elements[i].style.width="36vw";
            elements[i].style.height="12vw";
            elements[i].style.left="410px";
  
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
          var elements = document.getElementsByClassName("search-container");
          for (var i = 0; i < elements.length; i++) {
            elements[i].style["margin-left"]="550px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("my-input");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.width="160px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("scrollable-images");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.width="400px";
            elements[i].style.left="230px";
            elements[i].style.top="770px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("hodijs1");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.left="30px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("hodijs2");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.left="30px";
            elements[i].style.top="60px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("hodijs3");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.left="30px";
            elements[i].style.top="90px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("hodijs4");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.left="30px";
            elements[i].style.top="120px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("hodijs5");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.left="30px";
            elements[i].style.top="150px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("hodijs6");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.left="30px";
            elements[i].style.top="180px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("hodijs7");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.left="30px";
            elements[i].style.top="210px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("hodijs8");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.left="30px";
            elements[i].style.top="240px";
          }
        }
      });
    
      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("hodijs9");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.left="30px";
            elements[i].style.top="270px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("lielabilde");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.width="710px";
            elements[i].style.heigth="500px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("parsevi");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.width="160px";
            elements[i].style.height="180px";
            elements[i].style.top="1820px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("apraksts");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.top="1820px";
            elements[i].style["margin-left"]="267px";
            elements[i].style.height="180px";
            elements[i].style.width="350px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("apaksejabilde");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.top="2030px";
          }
        }
      });

      window.addEventListener("resize", function(){
        if(window.innerWidth < 769){
            var elements = document.getElementsByClassName("madeby");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.top="2040px";
            
          }
        }
      });