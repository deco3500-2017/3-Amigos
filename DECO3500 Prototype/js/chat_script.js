$(document).ready(function() {
  
  // Generating a date in YYYY/MM/DD format
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  newdate = year + "/" + month + "/" + day;
  
  // Script that handles the comment simulation
  $("#clickme").click(function chatBot() {
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><img src="img/alison_avatar.jpg"></div><div class="col-lg-8"><p class="sentText"> ' + $('#comment').val() + '</p><br><p style="color:gray;text-align:left;">Posted by: Alison Collins on ' + newdate + '</p></div></div></div><hr>');
    
    // Random number generator for responses
    var responseNum = Math.floor(Math.random() * 3);
    // The value of the input field
    var responseContent = $('#comment').val();
    
    // Greetings keywords
    if (responseContent.indexOf("Hello") != -1 ||
      responseContent.indexOf("hello") != -1 ||
      responseContent.indexOf("Hey") != -1 ||
      responseContent.indexOf("hey") != -1 ||
      responseContent.indexOf("Hi") != -1 ||
      responseContent.indexOf("hi") != -1) {
      setTimeout(robotResponse6, 1000);
      setTimeout(robotResponse5, 3000);
    } //Positive keywords
    else if (responseContent.indexOf("Like") != -1 ||
      responseContent.indexOf("like") != -1 ||
      responseContent.indexOf("Great") != -1 ||
      responseContent.indexOf("great") != -1 ||
      responseContent.indexOf("Good") != -1 ||
      responseContent.indexOf("good") != -1 ||
      responseContent.indexOf("Fantastic") != -1 ||
      responseContent.indexOf("fantastic") != -1 ||
      responseContent.indexOf("Awesome") != -1 ||
      responseContent.indexOf("awesome") != -1 ||
      responseContent.indexOf("Excellent") != -1 ||
      responseContent.indexOf("excellent") != -1) {
      setTimeout(robotResponse3, 1000);
      setTimeout(robotResponse2, 3000);
    } // Negative keywords
    else if (responseContent.indexOf("Bad") != -1 ||
      responseContent.indexOf("bad") != -1 ||
      responseContent.indexOf("Sucks") != -1 ||
      responseContent.indexOf("sucks") != -1 ||
      responseContent.indexOf("Boring") != -1 ||
      responseContent.indexOf("boring") != -1 ||
      responseContent.indexOf("Horrible") != -1 ||
      responseContent.indexOf("horrible") != -1 ||
      responseContent.indexOf("Wrong") != -1 ||
      responseContent.indexOf("wrong") != -1) {
      setTimeout(robotResponse1, 1000);
      setTimeout(robotResponse7, 3000);
    } // Thoughts keywords
    else if (responseContent.indexOf("Content") != -1 ||
      responseContent.indexOf("content") != -1 ||
      responseContent.indexOf("Spelling") != -1 ||
      responseContent.indexOf("spelling") != -1 ||
      responseContent.indexOf("Error") != -1 ||
      responseContent.indexOf("error") != -1 ||
      responseContent.indexOf("Invalid") != -1 ||
      responseContent.indexOf("invalid") != -1 ||
      responseContent.indexOf("Irrelevant") != -1 ||
      responseContent.indexOf("irrelevant") != -1 ||
      responseContent.indexOf("Outdated") != -1 ||
      responseContent.indexOf("outdated") != -1 ||
      responseContent.indexOf("Unreliable") != -1 ||
      responseContent.indexOf("unreliable") != -1) {
      setTimeout(robotResponse9, 3000);
    } // Undetected keywords
    else {
      if (responseNum == 1) {
        setTimeout(robotResponse20, 3000);
      } else {
        setTimeout(robotResponse21, 3000);
      }

    }
    return false;
  });
  
  // Automated response - agreeing with negative comment
  function robotResponse1() {
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><img src="img/gabby_avatar.jpg"></div><div class="col-lg-8"><p class="sentText"> Indeed, some parts were horrible.' + '</p><br><p style="color:gray;text-align:left;">Posted by: Gabby Mendoza on ' + newdate + '</p></div></div></div><hr>');
  }
  
  // Automated response - agreeing with positive comment
  function robotResponse2() {
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><img src="img/abby_avatar.jpg"></div><div class="col-lg-8"><p class="sentText"> I really like this resource.' + '</p><br><p style="color:gray;text-align:left;">Posted by: Abby Hume on ' + newdate + '</p></div></div></div><hr>');
  }
  
  // Automated response - agreeing with positive comment
  function robotResponse3() {
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><img src="img/gabby_avatar.jpg"></div><div class="col-lg-8"><p class="sentText"> Yeah I definitely agree.' + '</p><br><p style="color:gray;text-align:left;">Posted by: Gabby Mendoza on ' + newdate + '</p></div></div></div><hr>');
  }
  
  // Automated response - generic response
  function robotResponse4() {
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><img src="img/gabby_avatar.jpg"></div><div class="col-lg-8"><p class="sentText"> Thanks for sharing this article.' + '</p><br><p style="color:gray;text-align:left;">Posted by: Gabby Mendoza on ' + newdate + '</p></div></div></div><hr>');
  }
  
  // Automated response - prompting for opinion
  function robotResponse5() {
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><img src="img/gabby_avatar.jpg"></div><div class="col-lg-8"><p class="sentText"> What did you think of the article?' + '</p><br><p style="color:gray;text-align:left;">Posted by: Gabby Mendoza on ' + newdate + '</p></div></div></div><hr>');
  }
  
  // Automated response - responding to greetings
  function robotResponse6() {
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><img src="img/gabby_avatar.jpg"></div><div class="col-lg-8"><p class="sentText"> Hi Alison.' + '</p><br><p style="color:gray;text-align:left;">Posted by: Gabby Mendoza on ' + newdate + '</p></div></div></div><hr>');
  }
  
  // Automated response - prompting to provide explanation
  function robotResponse7() {
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><img src="img/abby_avatar.jpg"></div><div class="col-lg-8"><p class="sentText"> I actually liked this one, any reasons why you thought it was bad?' + '</p><br><p style="color:gray;text-align:left;">Posted by: Abby Hume on ' + newdate + '</p></div></div></div><hr>');
  }
  
  // Automated response - agreeing with provided explanation
  function robotResponse9() {
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><img src="img/abby_avatar.jpg"></div><div class="col-lg-8"><p class="sentText"> I guess those are some pretty valid points.' + '</p><br><p style="color:gray;text-align:left;">Posted by: Abby Hume on ' + newdate + '</p></div></div></div><hr>');
  }
  // Automated response - agreeing with provided explanation
  function robotResponse10() {
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><img src="img/abby_avatar.jpg"></div><div class="col-lg-8"><p class="sentText"> Hmm, I am not sure I agree with those statements.' + '</p><br><p style="color:gray;text-align:left;">Posted by: Abby Hume on ' + newdate + '</p></div></div></div><hr>');
  }
  
  // Automated response - undetected keyword
  function robotResponse20() {
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><img src="img/abby_avatar.jpg"></div><div class="col-lg-8"><p class="sentText"> What do you mean?' + '</p><br><p style="color:gray;text-align:left;">Posted by: Abby Hume on ' + newdate + '</p></div></div></div><hr>');
  }
  
  // Automated response - undetected keyword
  function robotResponse21() {
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><img src="img/abby_avatar.jpg"></div><div class="col-lg-8"><p class="sentText"> Sorry, I do not understand what you mean.' + '</p><br><p style="color:gray;text-align:left;">Posted by: Abby Hume on ' + newdate + '</p></div></div></div><hr>');
  }

});