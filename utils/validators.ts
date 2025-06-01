export function validatePassword(value: string) {
  return !value.match(/.{8,}/)
    ? "Password must be 8 characters long"
    : !value.match(/[0-9]/)
    ? "Password must contain 1 number"
    : !value.match(/[a-z]/)
    ? "Password must contain 1 lowercase character"
    : !value.match(/[A-Z]/)
    ? "Password must contain 1 uppercase character"
    : !value.match(/[!@#$^&*]/)
    ? "Password must contain a special character from selected characters (!, @, #, $, ^, &, *)"
    : null;
}

export function validateEmail(value: string) {
  return !value.match(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  )
    ? "Invalid email address."
    : null;
}

export function validatePhoneNumber(value: string) {
  const digitsOnly = value.replace(/\D/g, "");

  if (!value.trim()) {
    return "Phone number is required.";
  }

  if (!/^[6-9]\d{9}$/.test(digitsOnly)) {
    return "Invalid Indian phone number. It should start with 6, 7, 8, or 9 and be 10 digits long.";
  }

  return null;
}
