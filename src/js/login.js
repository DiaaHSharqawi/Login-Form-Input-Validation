import {
  isBlank,
  isEmail,
  VALIDATION_MESSAGES,
} from "./utils/validationUtils.js";

const EMAIL_VALID_MESSAGE = "email-success-message";
const EMAIL_INVALID_MESSAGE = "email-error-message";
const EMAIL_VALID_STATE = "valid-state";
const EMAIL_INVALID_STATE = "not-valid-state";
const emailSuccessMessage = document.getElementById(EMAIL_VALID_MESSAGE);
const emailErrorMessage = document.getElementById(EMAIL_INVALID_MESSAGE);
const emailField = document.getElementById("email");
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
    triggerValidState(EMAIL_VALID_STATE);
  }
  if (emailField.validationMessage) {
    emailSuccessMessage.innerHTML = ``;
    emailErrorMessage.innerHTML = `<span>
    ${emailField.validationMessage} ❌
    <span>
  `;
    triggerValidState(EMAIL_INVALID_STATE);
  }
}

function triggerValidState(state) {
  emailField.className = state;
}
