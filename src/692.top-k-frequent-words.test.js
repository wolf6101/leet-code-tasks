const topKFrequent = require('./692.top-k-frequent-words');

// [8,7,4,1,2,1]
// 8 7
// [4,1,2,1,1]
// 4 1
// [3,2,1,1]
// 3 2
// [1,1,1]
// 1 1
// 1
describe('692.top-k-frequent-words', () => {
    test('should return correct words', () => {
        let arr = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
        let topK = topKFrequent(arr, 4);

        expect(topK).toEqual(["the","is","sunny","day"]);
    });

    test('should return correct words', () => {
        let arr = ["i", "love", "leetcode", "i", "love", "coding"];
        let topK = topKFrequent(arr, 2);

        expect(topK).toEqual(["i","love"]);
    });
});
