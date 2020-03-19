"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonHelperFunctions_1 = require("../commonHelperFunctions");
const assert = require('assert');
const data = [
    {
        "designation": "Manager",
        "User": "U1",
    },
    {
        "designation": "a",
        "User": "2U1",
    }, {
        "designation": "b",
        "User": "U2",
    }, {
        "designation": "c",
        "User": "U1s",
    },
];
const voteData = [{
        "Vote": 5,
        "userId": "U2"
    }, {
        "Vote": 2,
        "userId": "U1"
    }, {
        "Vote": 3,
        "userId": "U3"
    }, {
        "Vote": 1,
        "userId": "U5"
    },];
const response1 = { Manager: ['U1'], a: ['2U1'], b: ['U2'], c: ['U1s'] };
const response2 = { U2: [1], U1: [-1], U3: [0], U5: [-1] };
const response3 = [['Segment', 'Sentiment Score', 'Participation Percentage'],
    ['Manager', -1, '100.00'],
    ['a', 0, '0.00'],
    ['b', 1, '100.00'],
    ['c', 0, '0.00']];
describe('test cases for the functions', () => {
    it('getUserList test cases creating Object', () => {
        const response = commonHelperFunctions_1.getUserList("designation", data);
        assert.deepEqual(response, response1);
        return;
    });
    it('getVoteData test cases creating Object', () => {
        const response = commonHelperFunctions_1.getVoteData(voteData);
        assert.deepEqual(response, response2);
        return;
    });
    it('finalOutputObject test cases creating Object', () => {
        const response = commonHelperFunctions_1.finalOutputObject(response1, response2);
        assert.deepEqual(response, response3);
        return;
    });
});
