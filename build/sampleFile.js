"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const commonHelperFunctions_1 = require("./commonHelperFunctions");
const segmentType = "designation";
require('console.table');
if (["designation", "location", "department"].indexOf(segmentType) === -1) {
    throw Error("Please put correct segment");
}
const userLocationObject = commonHelperFunctions_1.getUserList(segmentType, data_1.userData);
const voteDataObject = commonHelperFunctions_1.getVoteData(data_1.voteData);
const finalArray = commonHelperFunctions_1.finalOutputObject(userLocationObject, voteDataObject);
console.table(finalArray);
