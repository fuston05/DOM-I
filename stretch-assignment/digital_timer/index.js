
// function startTimer(){

    //initial count vars
    let msTensCount= 0;
    let msHundredsCount= 0;
    let secondsOnesCount= 0;
    let secondsTensCount= 0;

    const interval= window.setInterval( function(){ //set the timer
        //get msTens
        const msTens= document.querySelector('#msTens');

        //get msHunderds
        const msHundreds= document.querySelector('#msHundreds');

        //get secondsOnes
        const secondsOnes= document.querySelector('#secondsOnes');

        //get secondsTens
        const secondsTens= document.querySelector('#secondsTens');

        //get digits as a nodeList
        const getDigits= document.querySelectorAll('.digit');

        // set initial '0' for all
        msTens.textContent= msTensCount;
        msHundreds.textContent= msHundredsCount;
        secondOnes.textContent= secondsOnesCount;
        secondTens.textContent= secondsTensCount;

        //start incrementing from smallest digit up
        msTens.textContent= msTensCount;
        msTensCount++;
        
        if(msTensCount > 9){ // increment msHundreds when tens > 9
            msHundreds.textContent= msHundredsCount;
            msHundredsCount ++;
            msTensCount= 0;
        }//end if msTens
            
        if( msHundredsCount > 9 ){ //increment secondOnes when msHundreds > 9
            msHundredsCount= 0;
            secondOnes.textContent= secondsOnesCount;
            secondsOnesCount++;
        }//end if msHundreds

        if( secondsOnesCount > 9 ){ //increment secondTens when secondOnes > 9
            secondTens.textContent= secondsTensCount;
            secondsOnesCount= 0;
            secondsTensCount++;
        }// end if

        if( secondsTensCount === 1 ){ //when 10 sec, update all digits, stop timer, change color
            msTens.textContent= msTensCount;
            msHundreds.textContent= msHundredsCount;
            secondOnes.textContent= secondsOnesCount;
            secondTens.textContent= secondsTensCount;
            clearInterval(interval); //stop timer

            //change digit color 'nodeList'
            for(let i=0; i < getDigits.length; i++){
                getDigits[i].style.color= 'red';
            }//end for

        }// end if
    }, 10 );//end interval

// }//end func

window.onload= function(){
    //create button
    const button= document.createElement('button');
    button.textContent= 'Start';

    const body= document.querySelector('body');

    body.append(button);
}


