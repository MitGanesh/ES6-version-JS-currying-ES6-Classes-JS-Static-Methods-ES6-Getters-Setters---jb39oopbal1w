// import using require
const obj = require('./shape');
let Shape = obj.Shape;

// declare class
class Circle extends Shape{
    constructor(color){
        super(color);
    }
    calculateArea(radius){
        return Math.PI * radius * radius;
    }
}

// export class using module.exports
module.exports = {
    Circle : Circle
}