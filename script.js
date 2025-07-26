function myFunction() {
  const time = new Date();

  let hour = time.getHours();

  let mins = time.getMinutes();

  let secs = time.getSeconds();

  const hourHand = document.querySelector(".hours-hand");

  const minsHand = document.querySelector(".mins-hand");

  const secsHand = document.querySelector(".secs-hand");

  let weekday = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  const dateBox = document.querySelector(".date");

  const currentDay = weekday[time.getDay()-1];

  const hourDegrees = (hour % 12) * 30 + (mins / 60) * 30;
  
  const minuteDegrees = mins * 6 + (secs / 60) * 6;

  const secondDegrees = secs * 6;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  minsHand.style.transform = `rotate(${minuteDegrees}deg)`;

  secsHand.style.transform = `rotate(${secondDegrees}deg)`;

  dateBox.innerHTML = currentDay > 7 ? currentDay[0] : currentDay;
}

setInterval(myFunction, 1000);
