export const required = value =>
  value || typeof value === "number" ? undefined : "Required";

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const maxLength200 = maxLength(200);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength6 = minLength(6);
export const minLength2 = minLength(2);
export const minLength20 = minLength(20);
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

export const composeValidations = (...validations) => value =>
  validations.reduce(
    (error, validator) => error || validator(value),
    undefined
  );
