import probabilityToBeatBoss from "../functions/probabilityToBeatBoss";
import { companions, fruits, suits } from "../utils/constants";

test("just a small test", async () => {
  expect(
    await probabilityToBeatBoss(suits.Hearts, companions.Lion, fruits.Mango)
  ).toBe("62.4%");
});
