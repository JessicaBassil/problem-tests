/**
 * Problem 1
 * Validate an email given specific constraints
 * @param {string} email email to be checked
 */
const validateEmail = (email) => {
  if (typeof email !== "string") return false;
  let hasError = false;
  let atIdx = -1; // becomes >=0 if any @ has been found
  let dotFound = false; //check if . have been found after an @ character

  const len = email.length;
  if (len > 256 || len < 3) return false; // email can not be > 256 chars and should at least contain @ and .

  for (let i = 0; i < len; i++) {
    const currentChar = email[i];
    if (currentChar === "@") {
      if (atIdx >= 0 || i === 0 || i === len) {
        hasError = true;
        break;
      } else {
        atIdx = i;
      }
    }

    if (currentChar === "." && atIdx >= 0) {
      if (i === atIdx - 1 || i === atIdx + 1) {
        // the '.' char should not be immediately preceded or followed by @
        hasError = true;
        break;
      }

      if (i > atIdx) dotFound = true;
    }
  }

  if (!dotFound) {
    hasError = true;
  }

  return !hasError;
};

export default validateEmail;
