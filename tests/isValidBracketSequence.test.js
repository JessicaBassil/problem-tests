import isValidBracketSequence from "../problems/isValidBracketSequence";

test("is valid bracket sequence ()[]{}", () => {
  expect(isValidBracketSequence("()[]{}")).toBe(true);
});

test("is valid bracket sequence ([{}])", () => {
  expect(isValidBracketSequence("([{}])")).toBe(true);
});
test("is valid bracket sequence (", () => {
  expect(isValidBracketSequence("(")).toBe(false);
});
test("is valid bracket sequence [(])", () => {
  expect(isValidBracketSequence("[(])")).toBe(false);
});
test("is valid bracket sequence {[}]", () => {
  expect(isValidBracketSequence("{[}]")).toBe(false);
});
