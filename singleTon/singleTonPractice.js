let val = ""
let count = 0

class singleTonValue {

    constructor() {

        console.log("싱글톤 값 생성");
         count++
    }

}


 class singleTon {

    static getInstance() {
        console.log("getInstance 진입");
        if(!singleTon.instance) {
            console.log("singleTon.instance");
            singleTon.instance = new singleTonValue();
        }

        console.log("getInstance 리턴");
        
        return singleTon.instance
    }

}

a = singleTon.getInstance()
b = singleTon.getInstance()

console.log(count);
