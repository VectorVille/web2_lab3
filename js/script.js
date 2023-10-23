let email = document.getElementById("email");
let passwordButton = document.getElementById("show_password");
let password = document.getElementById("password");
let error = document.getElementById("error_message");
let submit = document.getElementById("button");
let modal = document.getElementById("modal");
let modal_content = document.getElementById("modal_content");
let form = document.getElementById("form");

document.getElementById("open_modal").addEventListener("click", function () {
  modal.style.visibility = "visible";
});

passwordButton.addEventListener("click", function (e) {
  e.preventDefault();
});

passwordButton.addEventListener("pointerdown", function () {
  password.type = "text";
});
passwordButton.addEventListener("pointerup", function () {
  password.type = "password";
});

function validateEmail() {
  let validityState = email.validity;
  let re = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");

  if (validityState.valueMissing) {
    email.setCustomValidity("Поле обязательно к заполнению");
  } else if (re.test(email.value) == false) {
    email.setCustomValidity("Значение поля должно представлять из себя email");
  } else {
    email.setCustomValidity("");
  }

  email.reportValidity();
}

function validatePassword() {
  let validityState = password.validity;

  if (validityState.valueMissing) {
    password.setCustomValidity("Поле обязательно к заполнению");
  } else if (validityState.tooShort) {
    password.setCustomValidity("Минимальная длинна пароля 6 символов");
  } else {
    password.setCustomValidity("");
  }

  password.reportValidity();
}

email.addEventListener("blur", function () {
  let re = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");

  if (email.value.length == 0) error.value = "Поле обязательно к заполнению";
  else if (re.test(email.value) == false)
    error.value = "Значение поля должно представлять из себя email";
  else error.value = "";

  validateEmail();
});

password.addEventListener("blur", function () {
  if (password.value.length == 0) error.value = "Поле обязательно к заполнению";
  else if (password.value.length < 6)
    error.value = "Минимальная длинна пароля 6 символов";
  else error.value = "";

  validatePassword();
});

modal.addEventListener("click", function (e) {
  let x = modal_content.offsetLeft;
  let y = modal_content.offsetTop;
  let width = modal_content.offsetWidth;
  let height = modal_content.offsetHeight;

  if (e.x < x || e.x > x + width || e.y < y || e.y > y + height)
    modal.style.visibility = "hidden";
});

form.addEventListener("submit", function (e) {
  modal.style.visibility = "hidden";
  e.preventDefault();

  let formData = new FormData(form);

  for (const key of formData.keys()) {
    console.log(`${key}: ${formData.get(key)}`);
  }
});
