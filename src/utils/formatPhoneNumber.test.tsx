import { expect, it } from "vitest";
import formatPhoneNumber from "./formatPhoneNumber";
import type { TestDataType } from "./testTypes";

const setValuesNameValidate: TestDataType<string, string> = [
  ["", ""],
  ["+", ""],
  ["sdjfkljsaldkjflsjkdf", ""],
  ["1", "+1"],
  ["12", "+1 2"],
  ["123", "+1 23"],
  ["1234", "+1 234"],
  ["12345", "+1 234 5"],
  ["123456", "+1 234 56"],
  ["1234567", "+1 234 567"],
  ["12345678", "+1 234 567 8"],
  ["123456789", "+1 234 567 89"],
  ["1234567890", "+1 234 567 890"],
  ["12345678901", "+1 234 567 890"],
  ["1234567890119273918723", "+1 234 567 890"],
  [
    "1sdfsdf2fsdfsd3sd4sdfsdsdff56!@!@!@++++789ssdfsdf0119273918723",
    "+1 234 567 890",
  ],
];

setValuesNameValidate.forEach((dataItem) => {
  const [input, expectedOutput] = dataItem;
  it(`nameValidate validates ${input} into ${expectedOutput}`, () => {
    expect(formatPhoneNumber(input)).toBe(expectedOutput);
  });
});
