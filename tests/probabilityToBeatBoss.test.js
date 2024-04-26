import probabilityToBeatBoss from "../problems/probabilityToBeatBoss";
import { companions, fruits, suits } from "../utils/constants";

test("Proba to beat the boss with Hearts, Lion, Mango is 62.4%", async () => {
  expect(
    await probabilityToBeatBoss(suits.Hearts, companions.Lion, fruits.Mango)
  ).toBe("62.4%");
});
