function fibRec(n) {
    return n <= 1 ? n : fibRec(n - 1) + fibRec(n - 2);
}

function fiboRec(n) {
    const arr = []
    for (let i=0; i<n; i++) {
        arr.push(fibRec(i))
    }
}

