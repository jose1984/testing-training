const assert = require('chai').assert;
const operations = require('../app/operations');

describe('Numbers', () => {

  it('should add two numbers', () => {
    assert.equal(5, operations.add(2, 3));
  });

});
