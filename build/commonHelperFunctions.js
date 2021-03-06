"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const getUserList = (sortingType, userData) => {
    const userLocationObject = {};
    for (const singleUser of userData) {
        if (userLocationObject[singleUser[sortingType]]) {
            userLocationObject[singleUser[sortingType]].push(singleUser.User);
        }
        else {
            userLocationObject[singleUser[sortingType]] = [singleUser.User];
        }
    }
    return userLocationObject;
};
exports.getUserList = getUserList;
const getVoteData = (voteData) => {
    const voteDataObject = {};
    for (const singleVote of voteData) {
        if (voteDataObject[singleVote.userId]) {
            voteDataObject[singleVote.userId][0] = voteDataObject[singleVote.userId][0] + constants_1.sentimentalValue[singleVote.Vote];
        }
        else {
            voteDataObject[singleVote.userId] = [constants_1.sentimentalValue[singleVote.Vote]];
        }
    }
    return voteDataObject;
};
exports.getVoteData = getVoteData;
const finalOutputObject = (userLocationObject, voteDataObject) => {
    const finalArray = [["Segment", "Sentiment Score", "Participation Percentage"]];
    for (const singleUserDimension in userLocationObject) {
        let voteDone = 0;
        let sentimentalValue = 0;
        let totalPeople = userLocationObject[singleUserDimension].length;
        for (const singleDimensionalUser of userLocationObject[singleUserDimension]) {
            if (voteDataObject[singleDimensionalUser] && voteDataObject[singleDimensionalUser].length) {
                voteDone += 1;
                sentimentalValue += voteDataObject[singleDimensionalUser][0];
            }
        }
        finalArray.push([singleUserDimension, sentimentalValue, Number((voteDone / totalPeople) * 100).toFixed(2)]);
    }
    return finalArray;
};
exports.finalOutputObject = finalOutputObject;
