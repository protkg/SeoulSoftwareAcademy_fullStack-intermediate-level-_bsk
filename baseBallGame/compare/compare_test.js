export function numCompare(comNum, user) {

    var strike = 0;
    var ball = 0;
    var compareValue = [];

    compareValue = user.filter(userInput => comNum.includes(userInput));
    
    console.log(`들어오는 값 ${compareValue}`);
    console.log(`들어오는 값 ${comNum}`);
    
    console.log("타입??" + typeof compareValue );
    console.log("타입>>" + typeof comNum );

    compareValue.forEach((value, index) => {

        console.log("컴퓨터 값 >?>>: " + comNum.indexOf(value));
        console.log("입력 값 >?>>: " + user.indexOf(value));



        if (comNum.indexOf(value) == user.indexOf(value)) {
            console.log("컴퓨터 값 : " + comNum.indexOf(value));
            console.log("입력 값 : " + user.indexOf(value));
            
            user[index] = null;
            strike++;

        }else if(comNum[comNum.indexOf(value)] == user[user.indexOf(value)] ) {
            ball++;
            user[index] = null;
        }
                
    })

    console.log(`스트라이크 : ${strike}`);
    console.log(`볼 : ${ball}`);

    return [strike, ball]

}