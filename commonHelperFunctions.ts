import { sentimentalValue } from "./constants"

const getUserList = (sortingType: any, userData: any) => {
    const userLocationObject: any = {}
    for (const singleUser of userData) {
        if (userLocationObject[singleUser[sortingType]]) {
            userLocationObject[singleUser[sortingType]].push(singleUser.User);
        } else {
            userLocationObject[singleUser[sortingType]] = [singleUser.User];
        }
    }
    return userLocationObject;
}

const getVoteData = (voteData: any) => {
    const voteDataObject: any = {};
    for (const singleVote of voteData) {
        if (voteDataObject[singleVote.userId]) {
            voteDataObject[singleVote.userId][0] = voteDataObject[singleVote.userId][0] + sentimentalValue[singleVote.Vote]
        } else {
            voteDataObject[singleVote.userId] = [sentimentalValue[singleVote.Vote]]
        }
    }
    return voteDataObject;
}
const finalOutputObject = (userLocationObject: any, voteDataObject: any) => {
    const finalArray = [["Segment", "Sentiment Score", "Participation Percentage"]];
    for (const singleUserDimension in userLocationObject) {
        let voteDone = 0;
        let sentimentalValue: any = 0;
        let totalPeople = userLocationObject[singleUserDimension].length;
        for (const singleDimensionalUser of userLocationObject[singleUserDimension]) {
            if (voteDataObject[singleDimensionalUser] && voteDataObject[singleDimensionalUser].length) {
                voteDone += 1
                sentimentalValue += voteDataObject[singleDimensionalUser][0]
            }
        }
        finalArray.push([singleUserDimension,sentimentalValue,Number((voteDone / totalPeople) * 100).toFixed(2)])
    }
    return finalArray;
}
export { getUserList, getVoteData, finalOutputObject }