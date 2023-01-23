// Bases on: https://tomduffytech.com/how-to-format-phone-number-in-react/
export default function formatPhoneNumber(phoneString: undefined | string) {
  if (!phoneString) return phoneString;
  const phoneNumber = phoneString.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength === 0) return phoneNumber;
  if (phoneNumberLength === 1) return `+${phoneNumber}`;
  if (phoneNumberLength <= 4) return `+${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1)}`;
  if (phoneNumberLength <= 7)
    return `+${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4)}`;

  return `+${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(
    4,
    7
  )} ${phoneNumber.slice(7, 10)}`;
}
