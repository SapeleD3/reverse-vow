let isVowel = (sen) => {
    // let vowels = ['a', 'e', 'i', 'o', 'u']
    // for(let i = 0; i < vowels.length;  i++){
    //     if(sen.includes(vowels[i])){
    //         return true
    //     }
    // }
    if (sen.includes('aeiou'))
    return true
    else
    return false
}
let swap = (arr, low, high) => {
    let hold = arr[low]
    arr[low] = arr[high]
    arr[high]= hold
}
let varObj = {arr:'my name is mo'}
let twopointer = (arr) => {
let low = 0
let high = arr.length-1

for(let i = 0; i < arr.length/2; i++){
    let one = isVowel(arr[low]);
    let two = isVowel(arr[high]);

    if(one && two){
        swap(arr, low, high)
    } else if (one){
        high--
    }else if (two) {
        low++
    } else {
        high--
        low++
    }
}
console.log(arr)
}

twopointer(varObj.arr)