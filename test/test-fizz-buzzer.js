const expect = require('chai').expect;

// import adder
const fizzbuzzer = require('../fizzbuzzer');

describe('fizzbuzzer', () => {
  it('should throw error if input is not a number', () => {
    const badInputs = ['dog', 'cat', 'horse'];
    badInputs.forEach(input => {
      expect(() => {
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

  it('should be "buzz" if divisible by 5', () => {
    const inputs = [5, 10, 20];
    inputs.forEach(input => {
      const answer = fizzbuzzer(input);
      expect(answer).to.equal('buzz');
    });
  });

  it('should be "fizz" if divisible by 3', () => {
    const inputs = [3, 6, 9];
    inputs.forEach(input => {
      const answer = fizzbuzzer(input);
      expect(answer).to.equal('fizz');
    });
  });
  it('should return itself(num) if not divisible by 15, 5 or 3', () => {
    const inputs = [2, 4, 7];
    inputs.forEach(input => {
      const answer = fizzbuzzer(input);
      expect(answer).to.equal(input);
    });
  });
});
