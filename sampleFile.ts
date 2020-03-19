import { voteData, userData } from "./data"
import { getUserList, getVoteData, finalOutputObject } from "./commonHelperFunctions"
const segmentType = "designation";
require('console.table')

if(["designation","location","department"].indexOf(segmentType) ===-1) {
    throw Error("Please put correct segment")
}
const userLocationObject = getUserList(segmentType, userData);
const voteDataObject = getVoteData(voteData);
const finalArray = finalOutputObject(userLocationObject, voteDataObject);
console.table(finalArray)