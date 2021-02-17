const getLowestCommonAncestor = require('./30-lowest-common-ancestor');
const TreeNode = require('./../../data-structures/tree/tree-node');

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

const testData = [
    [7, 9, 8],
    [7, 12, 10],
    [7, 11, 10],
    [12, 11, 12],
];

describe('getLowestCommonAncestor', () => {
    test.each(testData)('(%s, %s) -> %s', (a, b, expected) => {
        const root = constructTree();
        const node1 = new TreeNode(a);
        const node2 = new TreeNode(b);

        expect(getLowestCommonAncestor(root, node1, node2).value).toEqual(
            expected
        );
    });
});
