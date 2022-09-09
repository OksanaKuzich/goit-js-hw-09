import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const refs = {
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minEl: document.querySelector('[data-minutes]'),
  secEl: document.querySelector('[data-seconds]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();

    if (selectedDates[0] < date) {
      Notify.failure('Please choose a date in the future');
      //   window.alert('Please choose a date in the future');
      startBtn.setAttribute('disabled', true);
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};
const newDate = flatpickr('input#datetime-picker', options);

startBtn.setAttribute('disabled', true);
startBtn.addEventListener('click', getDeltaTime);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function getDeltaTime() {
  startBtn.setAttribute('disabled', true);

  const timerId = setInterval(() => {
    const dateNow = new Date();

    const delta = newDate.selectedDates[0] - dateNow;
    // console.log(dateNow);

    // console.log(newDate.selectedDates[0]);
    // console.log(delta);
    const convertDelta = convertMs(delta);
    console.log(convertDelta);

    // console.log(convertDelta.days);

    refs.daysEl.textContent = convertDelta.days;
    refs.hoursEl.textContent = convertDelta.hours;
    refs.minEl.textContent = convertDelta.minutes;
    refs.secEl.textContent = convertDelta.seconds;

    if (delta < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
}
