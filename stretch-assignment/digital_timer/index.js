let msTensCount= 0;
let msHundredsCount= 0;
let secondsOnesCount= 0;
let secondsTensCount= 0;

const interval= window.setInterval( function(){
    
    const max= 10;
    
    //get msTens
    const msTens= document.querySelector('#msTens');

    //get msHunderds
    const msHundreds= document.querySelector('#msHundreds');

    //get secondsOnes
    const secondsOnes= document.querySelector('#secondsOnes');

    //get secondsTens
    const secondsTens= document.querySelector('#secondsTens');

    const getDigits= document.querySelectorAll('.digit');

    // set initial '0' for all
    msTens.textContent= msTensCount;
    msHundreds.textContent= msHundredsCount;
    secondOnes.textContent= secondsOnesCount;
    secondTens.textContent= secondsTensCount;


    msTens.textContent= msTensCount;
    msTensCount++;
    
    if(msTensCount > 9){

        msHundreds.textContent= msHundredsCount;
        msHundredsCount ++;
        msTensCount= 0;
    }//end if msTens
        
    if( msHundredsCount > 9 ){
        msHundredsCount= 0;
        secondOnes.textContent= secondsOnesCount;
        secondsOnesCount++;
    }//end if msHundreds

    if( secondsOnesCount > 9 ){
        secondTens.textContent= secondsTensCount;
        secondsOnesCount= 0;
        secondsTensCount++;
    }// end if

    if( secondsTensCount ===1 ){
        msTens.textContent= msTensCount;
        msHundreds.textContent= msHundredsCount;
        secondOnes.textContent= secondsOnesCount;
        secondTens.textContent= secondsTensCount;
        clearInterval(interval);//stop timer

        //change digit color 'nodeList'
        for(let i=0; i < getDigits.length; i++){
            getDigits[i].style.color= 'red';
        }//end for

    }// end if
}, 10 );//end interval


/* <div class="digit" id="secondTens">-</div>
<div class="digit" id="secondOnes">-</div>
<div class="digit" id="colon">:</div>
<div class="digit" id="msHundreds">-</div>
<div class="digit" id="msTens">-</div> */