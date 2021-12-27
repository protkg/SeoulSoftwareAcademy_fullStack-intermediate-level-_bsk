
//객체 추가 함수 만들기

var dataValue = {}; 

function idAppendName(data) {
    
    dataValue = {
        ...data,
        name : "홍길동",
    }

    return dataValue
}

function idAppendAddress(data){

    dataValue = {
        ...data,
        address : "서울",
        
    }

    return dataValue

}

function idAppendCall(id){    
    
    dataValue = {
            id : id,
            call : 1,
        }

        return dataValue
}



idAppendName(idAppendAddress(idAppendCall("1 (방법 : curring)")));

console.log('-------------currying------------');
console.log(dataValue);



//compose사용

 const compose = (...fns) => (obj) => fns.reduce( (c, f) => f(c), obj );

 const composeUse  = compose(idAppendCall, idAppendAddress, idAppendName)("2 (방법 : compose함수)");

 console.log('-------------compose 함수-------------');
 console.log(composeUse);


 console.log('ES5로 바꿔보기');




//idValue(idAppendAddress(idAppendCall(1)))

// const compose  = (f1, f2, f3) => (value) => f1(f2(f3(value)));



 //composeTest(1,2)
 //console.log(dataValue);


//  function composeTest () {
//      console.log('인자값' + arguments.length);

//     for(var i = 0 ; i < arguments.length; i++){
//            console.log( arguments[i]);
//     }


//  }



 function composeTest () {
    

     var a  = arguments[0]
     var b  = arguments[1]
     var c  = arguments[2]
    
     //aruments에 함수가 '배열'형태로 들어옴
    
     return function (val) {
            console.log(val);
            c(
                b(
                    a(val)
                )
            )
        }
    }

 

 
composeTest(idAppendCall, idAppendAddress, idAppendName)("3 (방법 : ES5??함수 실행 단계)")

console.log(dataValue);



function composeTestArray () {
    
    var abc = [];

    for (var i = 0; i < arguments.length; i ++) {
        abc[i] = arguments[i]
     }

     return function (val) {

              for( var arrayData of abc )  {
                        val = arrayData(val)
              }
        }
    }

 
composeTestArray(idAppendCall, idAppendAddress, idAppendName)("4 (방법 : ES5??함수 풀기)")

console.log(dataValue);
