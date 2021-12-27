
import { numCompare } from '../compare/compare.js';
import { computerNum } from '../computer/computer.js';
import { readL } from './readLine.js';

var user = [];
var count = 0;
var repeatgame = 0;
var comNum = computerNum();

export function start() {

    console.log("번호 3가지를 입력하세요~!");

    readL.on('line', (input) => {
        user.push(`${input}`)
        count++

        if (count == 3) {

            let [strike, ball] = numCompare(comNum, user)
            repeatgame++

            if (strike == 3 || repeatgame == 3) {
                readL.close()
            }

            count = 0
            user.length = 0

        }
    })

}
 
