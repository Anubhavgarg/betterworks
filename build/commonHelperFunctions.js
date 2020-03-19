"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const constants_1 = require("./constants");
const getUserList = (sortingType) => {
    const userLocationObject = {};
    for (const singleUser of data_1.userData) {
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
const getVoteData = () => {
    const voteDataObject = {};
    for (const singleVote of data_1.voteData) {
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
    const finalArray = [];
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
        finalArray.push({
            SentimentalScore: sentimentalValue,
            Segment: singleUserDimension,
            "Participation Percentage": Number((voteDone / totalPeople) * 100)
        });
    }
    return finalArray;
};
exports.finalOutputObject = finalOutputObject;
