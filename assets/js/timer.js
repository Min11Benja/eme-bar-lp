/*https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/*/

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

var currentTime = new Date();//fecha actual en formato normal
console.log('currentTime:'+currentTime);

var endDate = new Date(2018,05,22);
console.log('endDate:'+endDate);

var diffDays = Math.round(Math.abs((currentTime.getTime() - endDate.getTime())/(oneDay)));
console.log('diffDays:'+diffDays);

var endDateMiliSec= diffDays * 86400000;//19 días en milisegundos
console.log('endDateMiliSec:'+endDateMiliSec);

var currentTime2 = Date.parse(new Date());//hora actual en milisegundos

var deadline = new Date(currentTime2 + endDateMiliSec);//tiempo restante
console.log('deadline:'+deadline);

initializeClock('clockdiv', deadline);

