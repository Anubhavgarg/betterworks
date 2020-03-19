import { getUserList, getVoteData, finalOutputObject } from "./commonHelperFunctions"
const sortingType = "designation";


const userLocationObject = getUserList(sortingType);
const voteDataObject = getVoteData();
const finalArray = finalOutputObject(userLocationObject, voteDataObject);
console.log(finalArray)