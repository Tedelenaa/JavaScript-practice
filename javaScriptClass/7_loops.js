// for loop


// for(i = 1; i <= 10; i++) {
//     console.log(i);
// }

// or

// let i = 1;
// for(; i <= 10; i++) {
//     console.log(i);
// }

// for(i = 1; i <= 10; i++) {
//     if(i % 2 === 1) {
//         continue;
//     }

//     console.log(i);
// }


// for(i = 1; i <= 10; i++) {
//     if(i % 2 === 1) {
//         console.log(`this is an odd number`);
//     }

//     console.log(i);
// }


let arr = ["Joy", "Matt", "Sydney", "Ada"]

let arrItems = ["volvo", "Benz", 10, 15, ["Ada", "Julius", ["cars", "kitchen wares", "music"]], 100, 1000,[10, 20, 30]]

// for(item = 0; item <= arr.length; item++) {
//     if(arr[item] === "Joy"){
//         console.log(`${arr[item]} is present`);
//     }
// }

// for(member = 0; member <= arrItems.length; member++) {
//     console.log(arrItems[member]);
// }


//forEach
// arr.forEach((user, index)=>{
//     console.log(user, index);
// })

// arr.forEach((user, index)=>{
//     console.log(user, index);
// })

// arrItems.forEach((singleItem)=>{
//     console.log(singleItem);
// })


//map
arr.map((item, index)=>{
    console.log(index, item);
})

let num = 0
while(num <= 10) {
    console.log(num);
    num++;
}

let item = 0;
while(item <= arr.length) {
    console.log(arr[item]);
    item++;
}

// do{

// } while();


