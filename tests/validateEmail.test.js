import validateEmail from "../functions/validateEmail";

test("john.doe@gmail.com returns true", () => {
  expect(validateEmail("john.doe@gmail.com")).toBe(true);
});
test("john@doe@gmail.com returns false", () => {
  expect(validateEmail("john@doe@gmail.com")).toBe(false);
});
test("john@gmail.c returns false", () => {
  expect(validateEmail("john@gmail.c")).toBe(false);
});
test("john@.com returns false", () => {
  expect(validateEmail("john@.com")).toBe(false);
});
test("not a string returns false", () => {
  expect(validateEmail(5555)).toBe(false);
});
test("empty string returns false", () => {
  expect(validateEmail("")).toBe(false);
});
