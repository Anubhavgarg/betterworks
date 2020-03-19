"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonHelperFunctions_1 = require("./commonHelperFunctions");
const sortingType = "designation";
const userLocationObject = commonHelperFunctions_1.getUserList(sortingType);
const voteDataObject = commonHelperFunctions_1.getVoteData();
const finalArray = commonHelperFunctions_1.finalOutputObject(userLocationObject, voteDataObject);
console.log(finalArray);
