function fib(n) {
    const fibArr = [0]
    let k = 0
    if (n == 0) {
        return fibArr
    }
    if (n == 1) {
        fibArr.push(1)
        return fibArr
    }
    k = 1
    let acc = 0
    let acc2 = 0
    fibArr.push(1)  
    for (let i=1; i<n; i++) {
        acc2 = acc
        acc = k
        k = acc + acc2
        fibArr.push(k)
    }
    return fibArr
}