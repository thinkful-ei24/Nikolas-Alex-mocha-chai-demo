const expect = require('chai').expect;

// import adder
const fizzbuzzer = require('../fizzbuzzer');

describe('fizzbuzzer', () => {
  it('should throw error if input is not a number', () => {
    const badInputs = ['dog', 'cat', 'horse'];
    badInputs.forEach(input => {
      expect(()=> {
        fizzbuzzer(input);
      }).to.throw(Error);
    });
  });

  it('should be "fizz-buzz" if divisible by 15', () => {
    const inputs = [15, 30, 45];
    inputs.forEach(input => {
      const answer = fizzbuzzer(input);
      expect(answer).to.equal('fizz-buzz');
    });
  });
});