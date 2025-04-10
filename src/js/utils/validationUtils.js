export const VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: "Please enter your email",
  EMAIL_INVALID: "Please make sure to enter a valid email",
  PASSWORD_REQUIRED: "Please enter your password",
  PASSWORD_MIN_LENGTH: "Password must be at least 8 characters",
  PASSWORD_AT_LEAST_CAPITAL: "Password must have at least one uppercase letter",
  PASSWORD_AT_LEAST_LOWER: "Password must have at least one lowercase letter",
  PASSWORD_AT_LEAST_DIGIT: "Password must have at least one digit",
  PASSWORD_AT_LEAST_SPECIAL:
    "Password must have at least one special character",
};

export const isBlank = (inputFieldValue) => {
  return inputFieldValue.trim() === "";
};

export const isEmail = (inputFieldValue) => {
  /*
  aTLeastOneCharNotEmailNotSpace@aTLeastOneCharNotEmailNotSpace.aTLeastOneCharNotEmailNotSpace

    - ^[]: mean match any string start at the beggieng of the string
        ^@: mean not email
        ^\s: mean not space
    ^[^@\s]: mean match any string no start with @ and not start with whitespaces

    - @: for atEmail
    - \. for dot

  */
  const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  console.log(`pattern result: ${pattern.test(inputFieldValue)}`);
  return pattern.test(inputFieldValue);
};

export const isAtLeastEightChars = (inputFieldValue) => {
  const MAX_CHAR_AMOUNT = 8;
  return inputFieldValue.length >= MAX_CHAR_AMOUNT;
};

export const isAtLeastOneCapitalCaseLetter = (inputFieldValue) => {
  // Find any of char btw the brackets
  const pattern = /[A-Z]/;
  return pattern.test(inputFieldValue);
};

export const isAtLeastOneSmallCaseLetter = (inputFieldValue) => {
  // Find any of char btw the brackets
  const pattern = /[a-z]/;
  return pattern.test(inputFieldValue);
};

export const isAtLeastOneDigit = (inputFieldValue) => {
  // Find a digit (one at least)
  const pattern = /\d/;
  return pattern.test(inputFieldValue);
};

export const isAtLeastOneSpecialChar = (inputFieldValue) => {
  // Find a non char
  const pattern = /\W/;
  return pattern.test(inputFieldValue);
};
