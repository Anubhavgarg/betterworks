import { getUserList, getVoteData, finalOutputObject } from "./commonHelperFunctions"
const sortingType = "designation";
require('console.table')

const userLocationObject = getUserList(sortingType);
const voteDataObject = getVoteData();
const finalArray = finalOutputObject(userLocationObject, voteDataObject);
console.table(finalArray)