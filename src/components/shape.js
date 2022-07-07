// declare class

class Shape {
    constructor(color){
        this.color = color
    }
    drawShape(){
        console.log("This is Shape");
    }
    calculateArea(){
        console.log("Calculating Area");
    }
}

// export class using module.exports
module.exports = {
    Shape : Shape
}