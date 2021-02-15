const CallCounter = require('./25-call-counter');

describe('greaterElements', () => {
    test('should return valid count', () => {
        const counter = new CallCounter();

        expect(counter.ping(1)).toEqual(1);
        expect(counter.ping(100)).toEqual(2);
        expect(counter.ping(300)).toEqual(3);
        expect(counter.ping(1000)).toEqual(3);
        expect(counter.ping(4001)).toEqual(1);
        expect(counter.ping(7002)).toEqual(1);
        expect(counter.ping(7005)).toEqual(2);
        expect(counter.ping(10005)).toEqual(2);
        expect(counter.ping(10006)).toEqual(2);
        expect(counter.ping(10007)).toEqual(3);
        expect(counter.ping(10008)).toEqual(3);
    });
});
