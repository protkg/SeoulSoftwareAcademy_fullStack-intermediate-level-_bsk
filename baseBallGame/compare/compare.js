export function numCompare(comNum, user) {

    var strike = 0;
    var ball = 0;
    var compareValue = [];


    compareValue = user.filter(userInput => comNum.includes(userInput));
    
    compareValue.forEach((value, index) => {

        if (comNum.indexOf(value) == user.indexOf(value)) {
               
            user[index] = null;
            strike++;

        }else if(comNum[comNum.indexOf(value)] == user[user.indexOf(value)] ) {
            user[index] = null;
            ball++;
        }
                
    })

    console.log(`스트라이크 : ${strike}`);
    console.log(`볼 : ${ball}`);

    return [strike, ball]

}