const TreeNode = require('../../data-structures/tree/tree-node');
const findValue = require('./28-find-value');

//      10
//    /    \
//   8      12
//  / \    /  \
// 7   9  11  13
 
function constructTree() {
    const head = new TreeNode(10);

    const node21 = new TreeNode(8);
    const node22 = new TreeNode(12);

    const node31 = new TreeNode(7);
    const node32 = new TreeNode(9);
    const node33 = new TreeNode(11);
    const node34 = new TreeNode(13);

    head.left = node21;
    head.right = node22;

    node21.left = node31;
    node21.right = node32;
    node22.left = node33;
    node22.right = node34;

    return head;
}
describe('findValue', () => {
    test('should return found elements', () => {
        const head = constructTree();

        expect(findValue(head, 7).value).toEqual(7);
        expect(findValue(head, 9).value).toEqual(9);
        expect(findValue(head, 11).value).toEqual(11);
        expect(findValue(head, 13).value).toEqual(13);
        expect(findValue(head, 8).value).toEqual(8);
        expect(findValue(head, 12).value).toEqual(12);
        expect(findValue(head, 10).value).toEqual(10);
    });

    test('should return null', () => {
        const head = constructTree();

        expect(findValue(head, 20)).toBeNull();
        expect(findValue(head, 40)).toBeNull();
        expect(findValue(head, 30)).toBeNull();
    });
});