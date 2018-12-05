const assert = require('chai').assert;
const operations = require('../app/operations');

describe('Numbers', () => {

  it('should add two numbers', () => {
    assert.equal(5, operations.add(2, 3));
  });

  it('should multiply two numbers', () => {
    assert.equal(6, operations.multiply(2, 3));
  });

});
