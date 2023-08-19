import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

// Handle form 
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

const LOCAL_STORAGE = 'feedback-form-state';
saveData();

function onFormSubmit(e) {
    e.preventDefault();
    if (refs.email.value === '' || refs.textarea.value.trim() === '') {
        alert('Please fill all field')
    }
    else {
        const formDATA = {
            email: refs.email.value,
            message: refs.textarea.value,
        }
        console.log(formDATA);
        refs.form.reset();
        localStorage.removeItem(LOCAL_STORAGE);
    }
}


function onTextareaInput(e) {
    const formDATA = {
    email: refs.email.value,
    message: refs.textarea.value,
    }
    
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(formDATA));
}

function saveData() {
    const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE));

    if (savedData) {
        refs.email.value = savedData.email; 
        refs.textarea.value = savedData.message;
    }
} 