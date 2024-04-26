import LinkedList from "../problems/LinkedList";

test("linkedlist", () => {
  const newList = new LinkedList(10);
  const test = [5, 12, 7, 3, 9, 10];
  for (let i in test) {
    newList.addNode(test[i]);
  }

  const newHead = newList.removeNodes(7);
  let output = [5, 7, 3];
  let i = 0;
  let curr = newHead;
  let hasErrors = false;
  while (curr.hasNext()) {
    if (curr.val !== output[i]) {
      hasErrors = true;
      break;
    }
    curr = curr.next;
    i++;
  }

  expect(hasErrors).toBe(false);
});
