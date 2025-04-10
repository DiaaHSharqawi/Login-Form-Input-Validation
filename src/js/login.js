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

let isValidEmail = false;
let isValidPassword = false;

const emailField = document.getElementById("email-field");
emailField.addEventListener("input", validateEmail);

const emailFieldValidationElements = {
  successMessageElement: document.querySelector(
    `#email-input > .messages ${SUCCESS_MESSAGE_CLASS}`
  ),
  errorMessageElement: document.querySelector(
    `#email-input > .messages ${ERROR_MESSAGE_CLASS}`
  ),
};

const passwordField = document.getElementById("password-field");
const passwordFieldValidationElements = {
  successMessageElement: document.querySelector(
    `#password-input > .messages ${SUCCESS_MESSAGE_CLASS}`
  ),
  errorMessageElement: document.querySelector(
    `#password-input > .messages ${ERROR_MESSAGE_CLASS}`
  ),
};
passwordField.addEventListener("input", validatePassword);

const eye = document.querySelector(".eye i");
eye.addEventListener("click", triggerPasswordEye);

const formField = document.getElementById("login-form");
formField.addEventListener("submit", handleLoginFormSubmit);

const loginResultElement = document.getElementById("login-result");

function handleLoginFormSubmit(e) {
  loginResultElement.innerHTML = ``;
  e.preventDefault();
  validateEmail();
  validatePassword();
  if (isValidEmail && isValidPassword) {
    // Send email and password to the backend
    loginResultElement.innerHTML = `Data sent successfully`;
    loginResultElement.style.color = "green";
  } else {
    loginResultElement.innerHTML = `Please make sure to enter a valid inputs`;
    loginResultElement.style.color = "red";
  }
}

function displayInputFieldValidationMessages(
  inputFieldValidationElements,
  successMessages,
  errorMessages
) {
  if (successMessages.length === 0) {
    inputFieldValidationElements.successMessageElement.innerHTML = ``;
  } else {
    inputFieldValidationElements.successMessageElement.innerHTML =
      successMessages
        .map((successMessage) => {
          return `
      <span>
      ${successMessage}
      </span>
      `;
        })
        .join("");
  }
  if (errorMessages.length === 0) {
    inputFieldValidationElements.errorMessageElement.innerHTML = ``;
  } else {
    inputFieldValidationElements.errorMessageElement.innerHTML = errorMessages
      .map((errorMessage) => {
        return `
      <span>
       ❌ ${errorMessage}
      </span>
      <br/>
      `;
      })
      .join("");
  }
}

function validateEmail() {
  loginResultElement.innerHTML = ``;
  const emailFieldValue = emailField.value;
  const { successMessages, errorMessages } =
    getEmailValidationMessages(emailFieldValue);
  isValidEmail = errorMessages.length === 0;
  if (isValidEmail) {
    setValidState(emailField, VALID_STATE);
  } else {
    setValidState(emailField, INVALID_STATE);
  }
  displayInputFieldValidationMessages(
    emailFieldValidationElements,
    successMessages,
    errorMessages
  );
}

function getEmailValidationMessages(email) {
  const successMessages = [];
  const errorMessages = [];
  if (isBlank(email)) {
    errorMessages.push(VALIDATION_MESSAGES.EMAIL_REQUIRED);
  }
  if (!isEmail(email)) {
    console.log(`Not valid email`);
    errorMessages.push(VALIDATION_MESSAGES.EMAIL_INVALID);
  }
  if (errorMessages.length === 0) {
    successMessages.push(`Looks good ✅`);
  }
  return { successMessages, errorMessages };
}

function validatePassword() {
  loginResultElement.innerHTML = ``;
  const passwordFieldValue = passwordField.value;
  const { errorMessages, successMessages } =
    getPasswordValidationMessages(passwordFieldValue);
  isValidPassword = errorMessages.length === 0;
  if (isValidPassword) {
    setValidState(passwordField, VALID_STATE);
  } else {
    setValidState(passwordField, INVALID_STATE);
  }
  displayInputFieldValidationMessages(
    passwordFieldValidationElements,
    successMessages,
    errorMessages
  );
}

function getPasswordValidationMessages(password) {
  const successMessages = [];
  const errorMessages = [];

  if (isBlank(password)) {
    errorMessages.push(VALIDATION_MESSAGES.PASSWORD_REQUIRED);
  }
  if (!isAtLeastEightChars(password)) {
    errorMessages.push(VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH);
  }
  if (!isAtLeastOneCapitalCaseLetter(password)) {
    errorMessages.push(VALIDATION_MESSAGES.PASSWORD_AT_LEAST_CAPITAL);
  }
  if (!isAtLeastOneSmallCaseLetter(password)) {
    errorMessages.push(VALIDATION_MESSAGES.PASSWORD_AT_LEAST_LOWER);
  }
  if (!isAtLeastOneDigit(password)) {
    errorMessages.push(VALIDATION_MESSAGES.PASSWORD_AT_LEAST_DIGIT);
  }
  if (!isAtLeastOneSpecialChar(password)) {
    errorMessages.push(VALIDATION_MESSAGES.PASSWORD_AT_LEAST_SPECIAL);
  }
  if (errorMessages.length === 0) {
    successMessages.push(`Looks good ✅`);
  }
  return {
    successMessages,
    errorMessages,
  };
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

function setValidState(inputField, state) {
  inputField.className = state;
}
