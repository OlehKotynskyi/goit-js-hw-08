import throttle from 'lodash.throttle';

const LOCAL_INFO = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_INFO)) || {};
const { email, message } = form.elements;
reload();

function onInput(e) {
   dataForm = { email: email.value, message: message.value };
   localStorage.setItem(LOCAL_INFO, JSON.stringify(dataForm));
}

function reload() {
   if (dataForm) {
      email.value = dataForm.email || '';
      message.value = dataForm.message || '';
   }
}

function onSubmit(e) {
   e.preventDefault();
   console.log({ email: email.value, message: message.value });

   if (email.value === '' || message.value === '') {
      return alert('Please fill in all the fields!');
   }

   localStorage.removeItem(LOCAL_INFO);
   e.currentTarget.reset();
   dataForm = {};
}

