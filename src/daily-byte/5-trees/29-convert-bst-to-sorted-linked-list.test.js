const {
    convertBstToSortedLinkedList,
    convertBstToSortedArray,
} = require('./29-convert-bst-to-sorted-linked-list');
const TreeNode = require('./../../data-structures/tree/tree-node');
const LinkedList = require('./../../data-structures/linked-list/linked-list');
const { getArrayFromLinkedList } = require('../../utils');

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

describe('convertBstToSortedArray', () => {
    test('should return sorted array', () => {
        const head = constructTree();
        const arr = [];
        convertBstToSortedArray(head, arr);

        expect(arr).toEqual([7, 8, 9, 10, 11, 12, 13]);
    });
});

describe('convertBstToSortedLinkedList', () => {
    test('should return sorted linked list', () => {
        const head = constructTree();
        const linkedList = new LinkedList();

        convertBstToSortedLinkedList(head, linkedList);

        const arr = getArrayFromLinkedList(linkedList.head);

        expect(arr).toEqual([7, 8, 9, 10, 11, 12, 13]);
    });
});
