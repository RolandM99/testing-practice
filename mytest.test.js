const { stringLength, reverseString} = require('./mytest');
const capitalizeString = require('./capitalize');
const Calculator = require('./calculator');

test('This function must return the length of string given', () => {
    expect(stringLength('hello')).toEqual(5);
});

test('Throw an error if the string entered is less than 1 or more than 10 ', () => {
    expect(() => {
        stringLength('hellooooeeeeeoeee');
    }).toThrow('The conditions fixed are not met');
});

test('This function should return a reversed string', () => {
    expect(reverseString('Roland')).toBe('dnaloR');
});

test('Each first letter of string should be in UpperCase', () => {
    expect(capitalizeString('javascript')).toBe('Javascript');
});

describe('function to add two numbers', () => {
    test('It can add two numbers', () => {
        expect(Calculator.add(8, 10)).toBe(18);
    });

    test('those two numbers can be for floating point datatype', () => {
        expect(Calculator.add(2.3, 2.6)).toBeCloseTo(4.9);
    });
    
    
    
});





