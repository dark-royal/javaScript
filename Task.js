class Shapes {
    constructor(name) {
        this._name = name;
    }

    getName(){
        return this._name;
    }

}

class Rectangle extends  Shapes{
    constructor(name,side1,side2) {
        super(name);
        this.name = name;
        this.side1 = side1;
        this.side2 = side2;
    }

    setSide1(side1){
        this.side1 = side1;
    }
    setSide2(side2){
        this.side2 = side2;
    }


    getArea(){
        return this.side1 * this.side2;
    }

    isSquare(){
        if(this.side1 === this.side2){
            return  true

        }
        else{
            return false
        }
    }

}

let shape = new Rectangle()
shape.setSide2(5);
shape.setSide1(5);
console.log(shape.getArea());
console.log(shape.isSquare())
