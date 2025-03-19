function transporMatriz(A) {
    console.log('Matriz Original:');
    A.forEach(row => console.log(row));

    let transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < A.length; j++) {
            transposta[i][j] = A[j][i];
        }
    }

    console.log('Matriz Transposta:');
    transposta.forEach(row => console.log(row));
}

// Exemplo de utilização:
const matrizExemplo = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matrizExemplo);
