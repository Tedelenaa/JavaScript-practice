const car = {
    brand: "Volvo",
    color: "grey",
    year: 2005,
    design: function(){
        return `${this.brand} is color ${this.color} and was released in ${this.year}`
    }  
}

console.log(car);
console.log(car.brand);
console.log(car.color);
console.log(car.design());

// array of objects
const cars = [
    {
        brand: "Volvo",
        color: "grey",
        year: 2005,
    },

    {
        brand: "Benz",
        color: "green",
        year: 2006,
    },

    ["Bisi", 5, 100, 400],

    {
        brand: "Range rover",
        color: "white",
        year: 2015,
    },

    ["kola", 5, 50, 30],

    {
        brand: "camry",
        color: "blue",
        year: 2035,
    },

    ["Dele", 50, 1000, 4000]
]

console.log(cars);
console.log(cars[0]);
console.log(cars[3].year);


let today = new Date()

let now = today.getFullYear()
console.log(now);
