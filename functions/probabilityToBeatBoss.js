import * as fs from "fs";
import Papa from "papaparse";
import {
  companion,
  companions,
  fruit,
  fruits,
  result,
  results,
  suit,
  suits,
} from "../utils/constants";

let fileData;
let globalCounts;

/**
 * Problem 2
 * Calculates the probability to Beat the Boss given the suit, companion and fruit
 * @param {string} propSuit
 * @param {string} propCompanion
 * @param {string} propFruit
 * @returns {string} the %
 */
const probabilityToBeatBoss = async (propSuit, propCompanion, propFruit) => {
  if (!suits[propSuit] || !companions[propCompanion] || !fruits[propFruit]) {
    return 0;
  }

  //counts structure: {(true/false) : {(suit/comp/fruit): (lion/hearts/...) : 0}}
  const counts = await getCounts();

  const companionSuccessCount =
    counts[results.success][companion][propCompanion];
  const totalCompanions =
    counts[results.fail][companion][propCompanion] + companionSuccessCount;

  const suitSuccessCount = counts[results.success][suit][propSuit];
  const totalSuits = counts[results.fail][suit][propSuit] + suitSuccessCount;
  const fruitSuccessCount = counts[results.success][fruit][propFruit];
  const totalFruits =
    counts[results.fail][fruit][propFruit] + fruitSuccessCount;

  //Respective Percentages of each given (companion, suit, fruit) to succeed
  const companionSucceedsPerc = (companionSuccessCount * 100) / totalCompanions;
  const suitSucceedsPerc = (suitSuccessCount * 100) / totalSuits;
  const fruitSucceedsPerc = (fruitSuccessCount * 100) / totalFruits;

  return (
    roundToOneDecimal(
      (companionSucceedsPerc + suitSucceedsPerc + fruitSucceedsPerc) / 3
    ).toFixed(1) + "%"
  );
};

/**
 *
 * @param {string} path local path to the file
 */
const convertCSV = async (path) => {
  if (fileData) {
    return resolve(fileData);
  }
  const file = fs.createReadStream(path);
  return new Promise((resolve) => {
    Papa.parse(file, {
      header: true,
      complete: (res, file) => {
        fileData = res.data;
        resolve(res.data);
      },
    });
  });
};

/**
 * @param {number} number
 * @returns {number} rounded to one decimal
 */
const roundToOneDecimal = (number) => {
  let rounded = Math.round(number * 10) / 10;
  return rounded;
};

/**
 *
 */
const getCounts = async () => {
  //assuming this doesn't change
  const data = await convertCSV(`__dirname/../assets/prediction.csv`);

  if (!globalCounts) {
    globalCounts = {
      [results.fail]: {
        [suit]: {},
        [fruit]: {},
        [companion]: {},
      },
      [results.success]: {
        [suit]: {},
        [fruit]: {},
        [companion]: {},
      },
    };

    //initialize counts
    const suitsKeys = Object.keys(suits);
    const fruitsKeys = Object.keys(fruits);
    const companionsKeys = Object.keys(companions);

    for (let key in suitsKeys) {
      globalCounts[results.fail][suit][suitsKeys[key]] = 0;
      globalCounts[results.success][suit][suitsKeys[key]] = 0;
    }

    for (let key in fruitsKeys) {
      globalCounts[results.fail][fruit][fruitsKeys[key]] = 0;
      globalCounts[results.success][fruit][fruitsKeys[key]] = 0;
    }

    for (let key in companionsKeys) {
      globalCounts[results.fail][companion][companionsKeys[key]] = 0;
      globalCounts[results.success][companion][companionsKeys[key]] = 0;
    }

    //Count how many times each data occurred with res success and res fail
    for (let i in data) {
      const current = data[i]; //{result, suit, companion, fruit}
      globalCounts[current[result]][companion][current[companion]]++;
      globalCounts[current[result]][suit][current[suit]]++;
      globalCounts[current[result]][fruit][current[fruit]]++;
    }
  }

  return globalCounts;
};

export default probabilityToBeatBoss;
