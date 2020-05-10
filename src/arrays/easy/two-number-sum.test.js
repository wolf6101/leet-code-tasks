const twoNumberSum = require('./two-number-sum');

const sharedTests = {
    '[2, 7, 11, 15], 9 -> [2, 7]': function (functionUnderTest) {
        const expected = [2, 7];
        const actual = functionUnderTest([2, 7, 11, 15], 9);

        expect(actual.sort()).toEqual(expected.sort());
    },
    '[2, 3, 10, 0, -3], 7 -> [10, -3]': function (functionUnderTest) {
        const expected = [10, -3];
        const actual = functionUnderTest([2, 3, 10, 0, -3], 7);

        expect(actual.sort()).toEqual(expected.sort());
    },
    '[], 0 -> []': function (functionUnderTest) {
        const expected = [];
        const actual = functionUnderTest([], 7);

        expect(actual.sort()).toEqual(expected.sort());
    },
    '[1, 2, 3, 5], 11 -> []': function (functionUnderTest) {
        const expected = [];
        const actual = functionUnderTest([1, 2, 3, 5], 11);

        expect(actual.sort()).toEqual(expected.sort());
    },
    '[-1,-3,-4,-5], -7 -> [-3,-4]': function (functionUnderTest) {
        const expected = [-3, -4];
        const actual = functionUnderTest([-1,-3,-4,-5], -7);

        expect(actual.sort()).toEqual(expected.sort());
    },
    
};

describe('twoNumberSum_bruteForce', () => {
    test('[2, 7, 11, 15], 9 -> [2, 7]', () => {
        sharedTests['[2, 7, 11, 15], 9 -> [2, 7]'](twoNumberSum.bruteForce);
    });

    test('[2, 3, 10, 0, -3], 7 -> [10, -3]', () => {
        sharedTests['[2, 3, 10, 0, -3], 7 -> [10, -3]'](twoNumberSum.bruteForce);
    });

    test('[], 0 -> []', () => {
        sharedTests['[], 0 -> []'](twoNumberSum.bruteForce);
    });

    test('[1, 2, 3, 5], 11 -> []', () => {
        sharedTests['[1, 2, 3, 5], 11 -> []'](twoNumberSum.bruteForce);
    });

    test('[-1,-3,-4,-5], -7 -> [-3,-4]', () => {
        sharedTests['[-1,-3,-4,-5], -7 -> [-3,-4]'](twoNumberSum.bruteForce);
    });
});

describe('twoNumberSum_sortingBased', () => {
    test('[2, 7, 11, 15], 9 ->  [2, 7]', () => {
        sharedTests['[2, 7, 11, 15], 9 -> [2, 7]'](twoNumberSum.sortingBased);
    });

    test('[2, 3, 10, 0, -3], 7 -> [10, -3]', () => {
        sharedTests['[2, 3, 10, 0, -3], 7 -> [10, -3]'](twoNumberSum.sortingBased);
    });

    test('[], 0 -> []', () => {
        sharedTests['[], 0 -> []'](twoNumberSum.sortingBased);
    });

    test('[1, 2, 3, 5], 11 -> []', () => {
        sharedTests['[1, 2, 3, 5], 11 -> []'](twoNumberSum.sortingBased);
    });

    test('[-1,-3,-4,-5], -7 -> [-3,-4]', () => {
        sharedTests['[-1,-3,-4,-5], -7 -> [-3,-4]'](twoNumberSum.sortingBased);
    });
});

describe('twoNumberSum_hashTableBased', () => {
    test('[2, 7, 11, 15], 9 ->  [2, 7]', () => {
        sharedTests['[2, 7, 11, 15], 9 -> [2, 7]'](twoNumberSum.hashTableBased);
    });

    test('[2, 3, 10, 0, -3], 7 -> [10, -3]', () => {
        sharedTests['[2, 3, 10, 0, -3], 7 -> [10, -3]'](twoNumberSum.hashTableBased);
    });

    test('[], 0 -> []', () => {
        sharedTests['[], 0 -> []'](twoNumberSum.hashTableBased);
    });

    test('[1, 2, 3, 5], 11 -> []', () => {
        sharedTests['[1, 2, 3, 5], 11 -> []'](twoNumberSum.hashTableBased);
    });

    test('[-1,-3,-4,-5], -7 -> [-3,-4]', () => {
        sharedTests['[-1,-3,-4,-5], -7 -> [-3,-4]'](twoNumberSum.hashTableBased);
    });
});
