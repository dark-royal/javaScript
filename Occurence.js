function occurence(number){
    let count = 0;
    for (let i = 0; i < number.length; i++) {
            number[i] = count[i];
            count++;


            }
            return number;
        }

        let number = [1,2,2,1,3];
        console.log(occurence(number));