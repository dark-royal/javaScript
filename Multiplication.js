
function multiplication(number) {
    let largestMultipication = number[0];
    let multiplication = 0;

    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < i; j++){
            multiplication = number[i] * number[j];
            if(multiplication > largestMultipication);
            largestMultipication = multiplication;
        }
        return largestMultipication;
    }

}

module.exports = multiplication;