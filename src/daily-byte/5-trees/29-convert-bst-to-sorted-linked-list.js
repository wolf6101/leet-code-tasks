function convertBstToSortedArray(node, arr) {
    if (node.left) {
        convertBstToSortedArray(node.left, arr);
    }

    arr.push(node.value);
   
    if (node.right) {
        convertBstToSortedArray(node.right, arr);
    }
}

function convertBstToSortedLinkedList(node, linkedList) {
    if (node.right) {
        convertBstToSortedLinkedList(node.right, linkedList);
    }

    linkedList.setHead(node.value);

    if (node.left) {
        convertBstToSortedLinkedList(node.left, linkedList);
    }    
}

module.exports.convertBstToSortedLinkedList = convertBstToSortedLinkedList;
module.exports.convertBstToSortedArray = convertBstToSortedArray;