// Set the date we're counting down to
var countDownDate = new Date("Jan 11, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("content__subtitle").innerHTML = days + "<b>d</b>: " + hours + "<b>h</b>: "
  + minutes + "<b>m</b>: " + seconds + "<b>s</b> ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("content__subtitle").innerHTML = "WE ARE LIVE.";
  }
}, 1000);
