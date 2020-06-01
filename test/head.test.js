const chai = require('chai'); 
const assert = chai.assert;
const assertEqual = require('../assertEqual');
const head = require('../head');

describe("#head", () => {
  it('returns 1 for [1, 2, 3]', () => {
    const inputArr = [1, 2, 3];
    const expectedArr = 1
    assert.strictEqual(head(inputArr), expectedArr);
  })

  it("returns '5' for ['5']", () => {
    const inputArr = ['5'];
    const expectedArr = '5';
    assert.strictEqual(head(inputArr), expectedArr);
  })

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const inputArr = ["Hello", "Lighthouse", "Labs"];
    const expectedArr = 'Hello';
    assert.strictEqual(head(inputArr), expectedArr);
  })
});

