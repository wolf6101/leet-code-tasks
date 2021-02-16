const QuickFind = require('./quick-find');

describe('quick find', () => {
    test('check connect 10', () => {
        const qf = new QuickFind(10);
        expect(qf.arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

        qf.connect(4, 3);
        expect(qf.arr).toEqual([0, 1, 2, 3, 3, 5, 6, 7, 8, 9]);

        qf.connect(3, 8);
        expect(qf.arr).toEqual([0, 1, 2, 8, 8, 5, 6, 7, 8, 9]);

        qf.connect(6, 5);
        expect(qf.arr).toEqual([0, 1, 2, 8, 8, 5, 5, 7, 8, 9]);

        qf.connect(9, 4);
        expect(qf.arr).toEqual([0, 1, 2, 8, 8, 5, 5, 7, 8, 8]);

        qf.connect(2, 1);
        expect(qf.arr).toEqual([0, 1, 1, 8, 8, 5, 5, 7, 8, 8]);

        qf.connect(8, 9);
        expect(qf.arr).toEqual([0, 1, 1, 8, 8, 5, 5, 7, 8, 8]);
    });

    test('check isConnected 10', () => {
        const qf = new QuickFind(10);
        qf.connect(4, 3);
        qf.connect(3, 8);
        qf.connect(6, 5);
        qf.connect(9, 4);
        qf.connect(2, 1);
        qf.connect(8, 9);

        expect(qf.isConnected(8, 9)).toBeTruthy();
        expect(qf.isConnected(5, 4)).toBeFalsy();
        expect(qf.isConnected(4, 9)).toBeTruthy();
        expect(qf.isConnected(1, 2)).toBeTruthy();
        expect(qf.isConnected(5, 6)).toBeTruthy();
    });

    test('check getNumberOfComponents', () => {
        const qf = new QuickFind(6);

        expect(qf.getNumberOfComponents()).toEqual(6);

        qf.connect(0, 5);
        expect(qf.getNumberOfComponents()).toEqual(5);

        qf.connect(1, 2);
        expect(qf.getNumberOfComponents()).toEqual(4);

        qf.connect(3, 4);
        expect(qf.getNumberOfComponents()).toEqual(3);

        qf.connect(2, 3);
        expect(qf.getNumberOfComponents()).toEqual(2);

        qf.connect(5, 1);
        expect(qf.getNumberOfComponents()).toEqual(1);
    });
});
