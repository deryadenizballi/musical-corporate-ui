
const mobilButton=document.querySelector('.mobil__menu');
const mobilMenu =document.querySelector('.header__menu>ul');

mobilButton.addEventListener('click',()=>{
mobilMenu.classList.toggle("is-active");
})


console.log(mobilMenu);



//====================== COUNTER ======================//
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2024";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = (Math.floor(totalSeconds / 60) % 24) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;
}

countdown();
setInterval(countdown, 1000);

