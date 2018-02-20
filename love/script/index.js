var dayDuration = 86400000, hourDuration = 3600000, minuteDuration = 60000
var loveTime = new Date('2018-01-11 00:00:00').getTime()
var timeContentDom = document.getElementById('time-content')


function getDuration() {
  var currentTime = new Date().getTime()
  var duration = currentTime - loveTime
  
  var daysReminder = duration % dayDuration
  var days = (duration - daysReminder) / dayDuration
  var hourReminder = daysReminder % hourDuration
  var hours = (daysReminder - hourReminder) / hourDuration
  var seconds = hourReminder % minuteDuration
  var minutes = (hourReminder - seconds) / minuteDuration
  seconds = Math.floor(seconds / 1000)

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}

function renderDuration(days, hours, minutes, seconds) {
  timeContentDom.innerHTML = '<span>' + days + '</span> <span class="time-count">days </span>' + 
      '<span>' + hours + '</span><span class="time-count">hours </span>' + 
      '<span>' + minutes + '</span><span class="time-count">minutes </span>' +
      '<span>' + seconds + '</span><span class="time-count">seconds </span>'
}

function updateDuration() {
  var durationObject = getDuration()
  renderDuration(durationObject.days, durationObject.hours, durationObject.minutes, durationObject.seconds)
}

updateDuration()
setInterval(updateDuration, 1000)