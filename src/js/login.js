import {
  isBlank,
  isEmail,
  VALIDATION_MESSAGES,
} from "./utils/validationUtils.js";

const SUCCESS_MESSAGE_CLASS = ".success-message";
const ERROR_MESSAGE_CLASS = ".error-message";
const VALID_STATE = "valid-state";
const INVALID_STATE = "not-valid-state";

const emailSuccessMessage = document.querySelector(
  `#email-input > .messages ${SUCCESS_MESSAGE_CLASS}`
);
const emailErrorMessage = document.querySelector(
  `#email-input > .messages ${ERROR_MESSAGE_CLASS}`
);
const emailField = document.getElementById("email-field");
emailField.addEventListener("input", handleEmailChange);

const passwordField = document.getElementById("password");

function handleEmailChange() {
  const emailFieldValue = emailField.value;
  if (isBlank(emailFieldValue)) {
    emailField.setCustomValidity(VALIDATION_MESSAGES.PLEASE_ENTER_YOUR_EMAIL);
  }
  if (!isEmail(emailFieldValue)) {
    console.log(`Not valid email`);
    emailField.setCustomValidity(
      VALIDATION_MESSAGES.PLEASE_MAKE_SURE_TO_ENTER_A_VALID_EMAIL
    );
  } else {
    console.log(`Looks good `);
    emailField.setCustomValidity(``);
    emailSuccessMessage.innerHTML = `Looks good ✅`;
    emailErrorMessage.innerHTML = ``;
    setValidState(emailField, VALID_STATE);
  }
  if (emailField.validationMessage) {
    emailSuccessMessage.innerHTML = ``;
    emailErrorMessage.innerHTML = `<span>
    ${emailField.validationMessage} ❌
    <span>
  `;
    setValidState(emailField, INVALID_STATE);
  }
}

function setValidState(inputField, state) {
  console.log(`inputFiel d: ${inputField}`);
  inputField.className = state;
}
