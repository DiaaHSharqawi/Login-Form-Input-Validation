export const VALIDATION_MESSAGES = {
  PLEASE_ENTER_YOUR_EMAIL: "Please enter your email",
  PLEASE_MAKE_SURE_TO_ENTER_A_VALID_EMAIL:
    "Please make sure to enter a valid email ",
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
