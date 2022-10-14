let arr = [10, 30, 40, "Ada"]

let arrItems = ["volvo", "Benz", 10, 15, ["Ada", "Julius", ["cars", "kitchen wares", "music"]], 100, 1000,[10, 20, 30]]

// let arrPostion = arr[2]
// arr[2] = 100

arrItems[4][2][1] = "kiwi"

// pop: removes the last item in an array
let poppedItem = arrItems.pop()

// push: adds a new items in an array at the end
let pushedItem = arrItems.push(["ray", "touch", 2, 3])

// shift: removes the first item in an array
let shiftItem = arrItems.shift()

// // unshift: adds a new items in an array at the beginning
// let unshiftItem = arrItems.unshift("Ada", "Lagos")

// do not use, use pop and shift instead
// delete arr[3]

// splice: adds element in between the array
// arr.splice(2, 1)
arrItems.splice(2, 0, "joe")
let newSplicedArr = arrItems.splice(6, 1)

console.log(arrItems);

// slice: creates a new array 
// let newArr = arr.slice(2) 
// console.log(arr);
// console.log(newArr);

// this will give us from the position 4 downwards
let newArrItems = arrItems.slice(4, 5)
console.log(newArrItems);



// sort  c
let names = ["Beans", "Zoe", "Timi", "Ada"]
let sortAndReverse = names.sort().reverse()
let numbers = [1, 20, 100, 3]
let sortNum = numbers.sort()
console.log(sortNum);
