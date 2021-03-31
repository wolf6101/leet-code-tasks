const isBSTValid = require('./98.validate-binary-search-tree');
const TreeNode = require('./data-structures/tree/tree-node');

describe('98.validate-binary-search-tree', () => {
    test('should return true', () => {
        let root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);

        expect(isBSTValid(root)).toEqual(true);
    });
    
    test('should return true 1', () => {
        let root = new TreeNode(5);

        expect(isBSTValid(root)).toEqual(true);
    });

    test('should return true 2', () => {
        let root = new TreeNode(1);
        root.left = new TreeNode(0);
        root.right = new TreeNode(1);
        // right is equal to parent - invalid

        expect(isBSTValid(root)).toEqual(false);
    });

    test('should return false', () => {
        let root = new TreeNode(5);
        root.left = new TreeNode(1);
        root.right = new TreeNode(4);
        root.right.left = new TreeNode(3);
        root.right.right = new TreeNode(6);

        expect(isBSTValid(root)).toEqual(false);
    });

    test('should return false 1', () => {
        let root = new TreeNode(5);
        root.left = new TreeNode(1);
        root.right = new TreeNode(6);
        root.right.left = new TreeNode(3);
        root.right.right = new TreeNode(4);

        expect(isBSTValid(root)).toEqual(false);
    });

    test('should return false 2', () => {
        let root = new TreeNode(1);
        root.left = new TreeNode(1);
        // left is equal to parent - invalid

        expect(isBSTValid(root)).toEqual(false);
    });

    test('should return false 3', () => {
        expect(isBSTValid(null)).toEqual(false);
    });

    test('should return false 3', () => {
        let root = new TreeNode(5);
        root.left = new TreeNode(4);
        root.right = new TreeNode(6);
        root.right.left = new TreeNode(3); // 3 is less than parent 5, but should be bigger
        root.right.right = new TreeNode(7);

        expect(isBSTValid(root)).toEqual(false);    
    });

    test('should return false 3', () => {
        let root = new TreeNode(5);
        root.left = new TreeNode(4);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(6);// 6 is bigger than parent 5

        expect(isBSTValid(root)).toEqual(false);    
    });
    // [120,70,140,50,100,130,160,20,55,75,110,119,135,150,200] - failing
});