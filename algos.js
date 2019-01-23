
////// Algorithm
// var num = [5, 0, 3, 4, 5]
// var maxSum = [];
// var sum = 0;

// for (let i = 0; i < num.length; i++) {
//     sum += num[i]
// }
// for (let i = 0; i < num.length; i++) {
//     maxSum.push(sum - num[i]);
// }

// var sorted = maxSum.sort();
// var result = []
// result.push(sorted[0], sorted[(sorted.length - 1)])
// console.log(result)

// result.map((num) => {
//     return sum += num
// })


// Remove Dublicate algos
// const uniqSort = function (arr) {

//     const cache = {}
//     const res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!cache[arr[i]]) {
//             res.push(arr[i])
//             cache[arr[i]] = true;
//         }
//     }

//     return res.sort((a, b) => a - b)
// }
// console.log(uniqSort([12, 2, 3, 44, 44, 2]))


// Task 2

// var times10 = function (n) {
//     return n * 10;
// }

// const cache = {}
// const memoTimes10 = (n) => {
//     if (n in cache) {
//         console.log(`Fetching from cache`)
//         return cache[n]
//     } else {
//         console.log(`calculating result`)
//         let res = times10(n)
//         cache[n] = res
//         return res;
//     }
// };
// console.log(memoTimes10(10));
// console.log(memoTimes10(10));

// console.log(cache);

// // Task 3
// const memoTimes10 = () => {
//     cache = {}
//     return (n) => {
//         if (n in cache) {
//             console.log(`Fetching from cache`);
//             return cache[n]
//         } else {
//             let result
//             console.log(`calculating...`);
//             result = n * 10
//             cache[n] = result;
//             return result;
//         }

//     }
// }
// const readyTimes10 = memoTimes10();
// console.log(readyTimes10(4))
// console.log(readyTimes10(5))
// console.log(readyTimes10(4))

/// with call back 
// times10 = (n) => {
//     return n * 10;
// }

// memozied = (cb) => {
//     const cache = {}
//     return (n) => {
//         if (n in cache) {
//             console.log(`Fetching from cache`);
//             return cache[n]
//         } else {
//             let result
//             console.log(`calculating...`);
//             result = cb(n)
//             cache[n] = result;
//             return result;
//         }

//     }
// }

// const closure = memozied(times10)
// console.log(closure(10));
// console.log(closure(10));

//~~~~~~~~~~~~~~       Recursion

//1

// var tracker = 0;
// const callMe = () => {
//     if (tracker === 3) {
//         return console.log('loops')
//     }
//     tracker++;
//     console.log(tracker)
//     return callMe()
// }
// callMe()

//2 


function money(num) {
    const result = [];
    while (num > 5) {
        if (num >= 25) {
            result.push(25);
            num -= 25;
        }
        else if (num < 25 && num <= 15) {
            result.push(15);
            num -= 15
        }
        else if (num < 15 && num >= 5) {
            result.push(5)
            num -= 5
        }
    }
    return console.log(result);
}
money(40)












