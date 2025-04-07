export const VALIDATION_MESSAGES = {
  PLEASE_ENTER_YOUR_EMAIL: "Please enter your email",
  PLEASE_MAKE_SURE_TO_ENTER_A_VALID_EMAIL:
    "Please make sure to enter a valid email ",
  PLEASE_ENTER_YOUR_PASSWORD: "Please enter your password",
  PLEASE_MAKE_SURE_THAT_THE_PASSWORD_HAS_AT_LEAST_EIGHT_CHARS:
    "Please make sure that the password has at least 8 chars",
  PLEASE_MAKE_SURE_THAT_THE_PASSWORD_HAS_AT_LEAST_ONE_CAPITIAL_CASE_LETTER:
    "Please make sure that the passowrd has at least one capital case letter",
  PLEASE_MAKE_SURE_THAT_THE_PASSWORD_HAS_AT_LEAST_ONE_SMALL_CASE_LETTER:
    "Please make sure that the passowrd has at least one small case letter",
  PLEASE_MAKE_SURE_THAT_THE_PASSWORD_HAS_AT_LEAST_ONE_DIGIT:
    "Please make sure that the passowrd has at least one digit",
  PLEASE_MAKE_SURE_THAT_THE_PASSWORD_HAS_AT_LEAST_ONE_SPECIAL_CHAR:
    "Please make sure that the passowrd has at least one special char",
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
