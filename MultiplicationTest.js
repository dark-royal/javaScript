let multiplication = require("./Multiplication");
const expect = require("node:expect");

test("largest multiplication", ()=>{
    let number = [-3,2,6,10];
    let result = multiplication(number)
    expect(result).toEqual(60)

})