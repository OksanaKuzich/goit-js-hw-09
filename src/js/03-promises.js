import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const delayEl = Number(event.currentTarget.delay.value);
  const stepEl = Number(event.currentTarget.step.value);
  const amountEl = Number(event.currentTarget.amount.value);

  if (delayEl < 0 || stepEl < 0) {
    Notify.failure(`Please enter time`);
    form.reset();
    return;
  }

  for (let i = 0; i < amountEl; i++) {
    const delay = delayEl + stepEl * i;
    position = i + 1;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
  }
  form.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }
  });
}
