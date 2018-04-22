console.log('script');

$(document).ready(function() {
    // $("#input-field").keyup(encodedOutput);
    var shiftId;
    var shiftNum;
    var container = $("#container");
    // Shuffle the contents of container
    // shuffleAnim();

    

    function loadAnim() {
      $(".loadscreen").shuffleLetters();
    }

    setTimeout(function () {
      $(".section__header button").css("opacity", "1");
    }, 800);

    // setInterval(shuffleAnim, 4500);
    //Shuffle animation for intro to repeat


    $(".logo").on('click', function() {
        $(".page, .nav__links li").removeClass("active slide__right slide__left slide__up slide__down");
    });

    //Removes all states of the current item.
    var removeStates = $(".page").removeClass("active slide__right slide__left slide__up slide__down");

    $('nav li').on('click', function(){
          removeStates = $(".page").removeClass("active slide__right slide__left slide__up slide__down");
          $("nav li").removeClass("active");
          $(this).addClass("active");
          if($(this).hasClass("nav__pick")) {
            removeStates;
            $(".two").addClass("active");
            $(".two").addClass("slide__right");
        } else if ($(this).hasClass("nav__secret")) {
          removeStates;
            $(".three").addClass("active");
            $(".three").addClass("slide__left");
            //Copy to clipboard is hidden until the submit button is pressed.
            $(".copyboard").addClass("not_visible");
        } else if ($(this).hasClass("nav__decode")) {
          removeStates;
            $(".four").addClass("active");
            $(".four").addClass("slide__up");
            //Prevents spamming of the decode nav btn for the animation to run smoothly
            if ($(".loadscreen").css("display") == "none") {
              $(".loadscreen").fadeIn(1);
            }
            loadAnim(); //Plays loading animation
            $(".loadscreen").delay(1000).fadeOut(800);
            $(".decode__text__container").addClass("not_visible");
            $("#decode-field, #decrypt-field").val("");
          } else {
            removeStates;
            $(".one").addClass("active");
            $(".one").addClass("slide__down");
          }
    });

    $(".next-btn").on('click', function() {
          removeStates;
          $(".nav__write").addClass("active");
            $(".one").addClass("active");
            $(".one").addClass("slide__down");
    })

    $(".key-btn").on('click', function(){
        $("ul li").removeClass("active");
        removeStates;
        $(".nav__pick").addClass("active");
            $(".two").addClass("active");
            $(".two").addClass("slide__right");
    })

    $('#decode-cohort15 img').on('click',function () {
      //grabs the key from the img from filepath.
      shiftId = $(this).attr("src").match(/\d+/);
      shiftNum = Number(shiftId);
      var keyPicked = $(this).attr("src");
      $("#key__img").attr("src", keyPicked);
      $("#decode-cohort15").addClass("not_visible");
      $(".decode__text__container").removeClass("not_visible").addClass("visible");
    })

    $(".share").on('click', function(){
      var twitText = $("#output-field").val();
      $(".share").attr('href', `https://twitter.com/intent/tweet?text=${twitText} @DecryptYOU`);
    })

    // $('#decode-field').keyup(unscramble)
  });


  //disables tab from jumping around the page.
  $(document).keydown(function(objEvent) {
      if (objEvent.keyCode == 9) {  //when tab is pressed, it does not do anything
          objEvent.preventDefault(); // stops tab from working;
      }
  })
