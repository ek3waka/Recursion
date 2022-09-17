function mergeDivide(array) {
    const resultArr = []
    const arrayToDivide = [].concat(array) 
    mergeDivideRec(arrayToDivide)
    function mergeDivideRec(array) {
        if (array.length == 2) {
            array.sort(function(a, b) { return a - b })
            resultArr.push(array)
        } else if (array.length == 1) {
            let previousArr = resultArr[resultArr.length-1]
            resultArr[resultArr.length-1] = merge(previousArr, array)
        }
        while(array.length > 2) {
            let initialArr = array
            let secondHalf = initialArr.splice(Math.ceil(array.length/2))
            let firstHalf = initialArr
            mergeDivideRec(firstHalf)
            mergeDivideRec(secondHalf)
        }          
    }
    return resultArr 
}


function merge(arr1, arr2) {
    const resultArr = []
    mergeRec(arr1, arr2)
    function mergeRec(arr1, arr2) {
        while(arr1.length > 0 || arr2.length > 0) {
            let item1 = arr1[0]
            let item2 = arr2[0]
            if (item1 < item2 || item2 == undefined) {
            resultArr.push(item1)
            arr1.shift()
            } else {
            resultArr.push(item2)
            arr2.shift()
            }
            mergeRec(arr1, arr2)
        }
    }
    return resultArr
   
}

function mergeSort(array) {
    const dividedArr = mergeDivide(array)
    const resultArr = []
    function mergeArraysRec(array, acc) {
        while(array.length > 1) {
            acc.push(merge(array[0], array[1]))
            array.shift()
            array.shift()
        }
        return acc
    }
    const secondStep = mergeArraysRec(mergeArraysRec(dividedArr, resultArr), resultArr)
    console.log(secondStep)
}

console.log(testArr)
mergeSort(testArr)
