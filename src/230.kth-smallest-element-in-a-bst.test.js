const kthSmallest = require('./230.kth-smallest-element-in-a-bst');
const TreeNode = require('./data-structures/tree/tree-node');

describe('230.kth-smallest-element-in-a-bst', () => {
    test('should correctly find in normal tree', () => {
        let root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(6);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(4);
        root.left.left.left = new TreeNode(1);

        expect(kthSmallest(root, 1)).toEqual(1);
        expect(kthSmallest(root, 3)).toEqual(3);
        expect(kthSmallest(root, 4)).toEqual(4);
        expect(kthSmallest(root, 5)).toEqual(5);
        expect(kthSmallest(root, 6)).toEqual(6);
    });

    test('should correctly find in flat tree', () => {
        let root = new TreeNode(5);
        root.right = new TreeNode(6);
        root.right.right = new TreeNode(7);
        root.right.right.right = new TreeNode(8);

        expect(kthSmallest(root, 1)).toEqual(5);
        expect(kthSmallest(root, 2)).toEqual(6);
        expect(kthSmallest(root, 4)).toEqual(8);
    });
});