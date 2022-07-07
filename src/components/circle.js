// import using require
var Shape = require('./shape');

// declare class
class Circle extends Shape{
    constructor(){
        super();
        this.calculateArea = ()=>{}
    }
    
};

// export class using module.exports
module.exports = Circle;