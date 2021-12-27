export function computerNum() {

    var comNum = [];

    for (var i = 0; i < 3; i++) {

        const comNumber = parseInt(Math.random() * 10).toString();
        var flag = false;

        comNum.forEach(dataNum => {

            if (dataNum == comNumber) {
                flag = true;
            }

        })

        flag ? i-- : comNum.push(comNumber);

    }
    console.log(comNum);
    return comNum;
}







