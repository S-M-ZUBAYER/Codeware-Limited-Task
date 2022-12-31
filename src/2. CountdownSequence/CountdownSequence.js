
//create a function to solve the task question 2.Countdown Sequence
const finalCountdown = (countdownArr) => {
    let count = 0;
    let newArr = [];
    countdownArr.map(element => {
        if (element === 1) {
            count++;
        }
    })

    if (countdownArr.length == 0) {
        return [0, []]
    }
    else if (count === 0) {
        return [0, []]
    }


    else {
        countdownArr.forEach((cValue, index, arr) => {
            if (index === 0) {
                return;
            }
            else if (countdownArr[index] - countdownArr[index + 1] === 1) {
                newArr.push(cValue)
            }

            else {
                if (countdownArr[index - 1] - cValue === 1) {
                    newArr.push(cValue)
                }
                else if (countdownArr.slice(-1)[0] === 1) {
                    newArr.push(cValue)
                    console.log('ok')
                }
            }
            // if (countdownArr.slice(-1)[0] === 1) {
            //     newArr.push(cValue)
            //     console.log('ok')
            // }
            //    return newArr;
        })

        console.log(newArr)
        let count = 0;
        let countArr = 0;
        let result = [];
        let finalResult = [];
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] === 1) {

                let newOne = (newArr.slice(count, i + 1));
                count = i + 1;
                countArr++;
                result.push(newOne)
            }
        }
        finalResult = [countArr, [...result]]
        return finalResult;

    }
}





console.log(finalCountdown([30, 50, 4, 3, 2, 1, 1, 2, 3, 7, 5, 4, 3, 2, 1, 1]))