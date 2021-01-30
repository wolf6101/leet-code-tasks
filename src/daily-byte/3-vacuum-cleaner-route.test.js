const returnsToTheStart = require('./3-vacuum-cleaner-route');

const testData = [
    ['RL', true],
    ['URURD', false],
    ['RUULLDRD', true],
    ['URURDDLDLU', true],
    ['URURDDLDL', false],// odd path
    ['URRULDDDLU', true],// overlaps its path
    ['', true],
    ['BCN', false]// odd path
]
describe('returnsToTheStart', () => {
    test.each(testData)('(%s) -> %s', (str, expected) => {
        expect(returnsToTheStart(str)).toEqual(expected);
    });
})
