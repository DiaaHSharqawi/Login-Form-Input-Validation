import {
  isAtLeastEightChars,
  isAtLeastOneCapitalCaseLetter,
  isAtLeastOneDigit,
  isAtLeastOneSmallCaseLetter,
  isAtLeastOneSpecialChar,
  isBlank,
  isEmail,
  VALIDATION_MESSAGES,
} from "./utils/validationUtils.js";

const SUCCESS_MESSAGE_CLASS = ".success-message";
const ERROR_MESSAGE_CLASS = ".error-message";
const VALID_STATE = "valid-state";
const INVALID_STATE = "not-valid-state";

const emailField = document.getElementById("email-field");
emailField.addEventListener("input", handleEmailChange);
const emailSuccessMessage = document.querySelector(
  `#email-input > .messages ${SUCCESS_MESSAGE_CLASS}`
);
const emailErrorMessage = document.querySelector(
  `#email-input > .messages ${ERROR_MESSAGE_CLASS}`
);

const passwordField = document.getElementById("password-field");
passwordField.addEventListener("input", handelPasswordChange);
const passwordSuccessMessage = document.querySelector(
  `#password-input > .messages ${SUCCESS_MESSAGE_CLASS}`
);
const passwordErrorMessage = document.querySelector(
  `#password-input > .messages ${ERROR_MESSAGE_CLASS}`
);

const eye = document.querySelector(".eye i");
eye.addEventListener("click", triggerPasswordEye);

const formField = document.getElementById("login-form");
formField.addEventListener("submit", handleLoginFormSubmit);
function handleLoginFormSubmit() {}

function handleEmailChange() {
  const errorMessages = [];
  const emailFieldValue = emailField.value;
  if (isBlank(emailFieldValue)) {
    errorMessages.push(VALIDATION_MESSAGES.PLEASE_ENTER_YOUR_EMAIL);
  }
  if (!isEmail(emailFieldValue)) {
    console.log(`Not valid email`);
    errorMessages.push(
      VALIDATION_MESSAGES.PLEASE_MAKE_SURE_TO_ENTER_A_VALID_EMAIL
    );
  }
  if (errorMessages.length === 0) {
    emailSuccessMessage.innerHTML = `Looks good ✅`;
    emailErrorMessage.innerHTML = ``;
    setValidState(emailField, VALID_STATE);
  } else {
    emailSuccessMessage.innerHTML = ``;
    emailErrorMessage.innerHTML = errorMessages
      .map((errorMessage) => {
        return `<span>
        ${errorMessage} ❌
        <span>
        <br>
      `;
      })
      .join("");
    setValidState(emailField, INVALID_STATE);
  }
}

function setValidState(inputField, state) {
  console.log(inputField);
  inputField.className = state;
}

function handelPasswordChange() {
  console.log(`handel password`);
  const errorMessages = [];
  const passwordFieldValue = passwordField.value;
  if (isBlank(passwordFieldValue)) {
    errorMessages.push(VALIDATION_MESSAGES.PLEASE_ENTER_YOUR_PASSWORD);
  }
  if (!isAtLeastEightChars(passwordFieldValue)) {
    errorMessages.push(
      VALIDATION_MESSAGES.PLEASE_MAKE_SURE_THAT_THE_PASSWORD_HAS_AT_LEAST_EIGHT_CHARS
    );
  }
  if (!isAtLeastOneCapitalCaseLetter(passwordFieldValue)) {
    errorMessages.push(
      VALIDATION_MESSAGES.PLEASE_MAKE_SURE_THAT_THE_PASSWORD_HAS_AT_LEAST_ONE_CAPITIAL_CASE_LETTER
    );
  }
  if (!isAtLeastOneSmallCaseLetter(passwordFieldValue)) {
    errorMessages.push(
      VALIDATION_MESSAGES.PLEASE_MAKE_SURE_THAT_THE_PASSWORD_HAS_AT_LEAST_ONE_SMALL_CASE_LETTER
    );
  }
  if (!isAtLeastOneDigit(passwordFieldValue)) {
    errorMessages.push(
      VALIDATION_MESSAGES.PLEASE_MAKE_SURE_THAT_THE_PASSWORD_HAS_AT_LEAST_ONE_DIGIT
    );
  }
  if (!isAtLeastOneSpecialChar(passwordFieldValue)) {
    errorMessages.push(
      VALIDATION_MESSAGES.PLEASE_MAKE_SURE_THAT_THE_PASSWORD_HAS_AT_LEAST_ONE_SPECIAL_CHAR
    );
  }
  if (errorMessages.length === 0) {
    passwordSuccessMessage.innerHTML = `Looks good ✅`;
    passwordErrorMessage.innerHTML = ``;
    setValidState(passwordField, VALID_STATE);
  } else {
    passwordSuccessMessage.innerHTML = ``;
    passwordErrorMessage.innerHTML = errorMessages
      .map((errorMessage) => {
        return `<span>
        ${errorMessage} ❌
        <span>
        <br>
      `;
      })
      .join("");
    setValidState(passwordField, INVALID_STATE);
  }
}

function triggerPasswordEye() {
  const eyeClassName = eye.className.split(" ");
  const eyeType = eyeClassName[1];
  if (eyeType === "fa-eye-slash") {
    eye.className = `fa-solid fa-eye`;
    passwordField.type = "text";
  } else {
    eye.className = `fa-solid fa-eye-slash`;
    passwordField.type = "password";
  }
}
