const MovingAverage = require('./26-moving-average');

describe('movingAverage', () => {
    test('should return correct moving average on next', () => {
        const average = new MovingAverage(3);

        expect(average.next(1)).toEqual(1);
        expect(average.next(2)).toEqual(1.5);
        expect(average.next(3)).toEqual(2);
        expect(average.next(4)).toEqual(3);
        expect(average.next(5)).toEqual(4);
    });
});
