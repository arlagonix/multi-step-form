import { expect, it } from "vitest";
import {
  nameValidate,
  emailValidate,
  phoneValidate,
  fieldRequiredMessage,
  phoneInvalidMessage,
} from "./validation";
import { TestDataType } from "../../utils/testTypes";

// nameValidate

const setValuesNameValidate: TestDataType<string | undefined, string | undefined> = [
  [undefined, fieldRequiredMessage],
  ["a", "Min length is 3 characters"],
  ["ab", "Min length is 3 characters"],
  ["abc", undefined],
  ["abcdfsdfsdfsdf", undefined],
  ["Vz2GyE6HeNlQXmtb98kixhtZl8gHdRKjTGWLPPJXnqlszfB4", undefined],
  ["Vz2GyE6HeNlQXmtb98kixhtZl8gHdRKjTGWLPPJXnqlszfB41", "Max length is 48 characters"],
];

setValuesNameValidate.forEach((dataItem) => {
  const [input, expectedOutput] = dataItem;
  it(`nameValidate validates ${input} into ${expectedOutput}`, () => {
    expect(nameValidate(input)).toBe(expectedOutput);
  });
});

// emailValidate

const emailInvalidMessage = "The email is invalid";
const setValuesEmailValidate: TestDataType<string | undefined, string | undefined> = [
  [undefined, fieldRequiredMessage],
  ["aaaaaaaaaa", emailInvalidMessage],
  ["test@test.com", undefined],
  ["a@a.a", undefined],
  ["aaaaaaaaaa@.ru", emailInvalidMessage],
  ["aaaaaaaaaa@test.", emailInvalidMessage],
  ["aaaaaaaaaa@test", emailInvalidMessage],
  ["@test.rcom", emailInvalidMessage],
  ["@.rcom", emailInvalidMessage],
];

setValuesEmailValidate.forEach((dataItem) => {
  const [input, expectedOutput] = dataItem;
  it(`emailValidate validates ${input} into ${expectedOutput}`, () => {
    expect(emailValidate(input)).toBe(expectedOutput);
  });
});

// phoneValidate

const setValuesPhoneValidate: TestDataType<string | undefined, string | undefined> = [
  [undefined, fieldRequiredMessage],
  ["1", phoneInvalidMessage],
  ["123456789", phoneInvalidMessage],
  ["1234567890", undefined],
];

setValuesPhoneValidate.forEach((dataItem) => {
  const [input, expectedOutput] = dataItem;
  it(`emailValidate validates ${input} into ${expectedOutput}`, () => {
    expect(phoneValidate(input)).toBe(expectedOutput);
  });
});
