// O(N*M*LogM) T | O(1) S, M - cols, N - rows
function sortMatrixRowColumnWise(matrix) {
    const comparator = (a, b) => {
        return a - b;
    };

    // O(N*M*Log(M))
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].sort(comparator);    
    }

    // O(N*M) T, O(N*M) S
    matrix = transposeInPlace(matrix);

    // O(N*M*Log(M))
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].sort(comparator);
    }

    return transposeInPlace(matrix);;
}

// O(N*M) T, O(N*M) S
function transpose(matrix) {
    let transposed = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (!transposed[j]) transposed[j] = [];
            transposed[j].push(matrix[i][j]);
        }
    }

    return transposed;
}

// O(N^2) T | O(1) S
function transposeInPlace(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        // it is important that j = i + 1, as we don't want to revert transposal on prev step
        for (let j = i + 1; j < matrix[0].length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
}

module.exports = sortMatrixRowColumnWise;

// mistakes:
// forgot to transpose matrix back
// used default sort which compares numbers alphabetically
// had troubles figuring out transposing in place