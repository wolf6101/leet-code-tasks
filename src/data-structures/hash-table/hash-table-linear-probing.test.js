const HashTable = require('./hash-table-linear-probing');

describe('hash-table-linear-probing', () => {
    test('should correctly add elements to the hashtable', () => {
        const hashtable = new HashTable();

        hashtable.put('first', 1);
        expect(hashtable.get('first')).toEqual(1);

        hashtable.put('second', 2);
        expect(hashtable.get('second')).toEqual(2);

        hashtable.put('third', 3);
        expect(hashtable.get('third')).toEqual(3);

        hashtable.put('fourth', 4);
        expect(hashtable.get('fourth')).toEqual(4);

        hashtable.put('fifth', 5);
        expect(hashtable.get('fifth')).toEqual(5);

        hashtable.put('sixth', 6);
        expect(hashtable.get('sixth')).toEqual(6);

        hashtable.put('seventh', 7);
        expect(hashtable.get('seventh')).toEqual(7);
        expect(hashtable.N).toEqual(7);

    });
});
