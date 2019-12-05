
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


    for(let i= 1; i <= max; i++){
        if( i === 10 ){
            clearInterval(interval);
        }//end if

        msTens.textContent

    }//end for

}, 10 );//end interval


/* <div class="digit" id="secondTens">-</div>
<div class="digit" id="secondOnes">-</div>
<div class="digit" id="colon">:</div>
<div class="digit" id="msHundreds">-</div>
<div class="digit" id="msTens">-</div> */