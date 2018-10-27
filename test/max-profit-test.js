assert = require('chai').assert;
maxProfit = require('../max-profit.js');

describe("Max Profit", function() {
  it("" ,function() {
    var num = 16;
    assert.isTrue(maxProfit([45, 24, 35, 31, 40, 38, 11]) === num);
  });
});