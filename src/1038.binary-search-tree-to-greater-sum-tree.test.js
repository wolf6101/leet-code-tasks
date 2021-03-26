const bstToGst = require('./1038.binary-search-tree-to-greater-sum-tree');
const TreeNode = require('./data-structures/tree/tree-node');

describe('1046.last-stone-weight', () => {
    test('should build correct gst', () => {
        let root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(0);

        bstToGst(root);
        expect(root.val).toEqual(5);
        expect(root.right.val).toEqual(3);
        expect(root.left.val).toEqual(6);
        expect(root.left.left.val).toEqual(6);
    });

    test('should build correct gst 1', () => {
        let root = new TreeNode(2);
     
        bstToGst(root);
        expect(root.val).toEqual(2);
    });

    test('should build correct gst 2', () => {
        let root = new TreeNode(2);
        root.left = new TreeNode(1);
        bstToGst(root);
        expect(root.val).toEqual(2);
        expect(root.left.val).toEqual(3);
    });
});