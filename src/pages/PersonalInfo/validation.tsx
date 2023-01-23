export const fieldRequiredMessage = "The field is required";

export const nameValidate = (value: string | undefined) => {
  const minLength = 3;
  const maxLength = 48;
  if (value === undefined) return fieldRequiredMessage;
  if (value.length < minLength) return `Min length is ${minLength} characters`;
  if (value.length > maxLength) return `Max length is ${maxLength} characters`;
};

export const emailValidate = (value: string | undefined) => {
  if (value === undefined) return fieldRequiredMessage;
  // Regex taken from https://stackoverflow.com/a/201447/19449790
  // I don't see any need in any more sophisticated validation
  if (!/^\S+@\S+\.\S+$/.test(value)) return `The email is invalid`;
};

export const phoneInvalidMessage = "The phone must consist of 10 numbers";
export const phoneValidate = (value: string | undefined) => {
  if (value === undefined) return fieldRequiredMessage;
  const phoneNumber = value.replace(/[^\d]/g, "");
  if (phoneNumber.length < 10) return phoneInvalidMessage;
};
