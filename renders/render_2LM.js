"use strict";
window.onload = function(){
    // Check buttons
    const checkBtn_2LM   = document.getElementById("checkBtn_2LM");

    // Reset buttons
    const resetBtn_2LM = document.getElementById("resetBtn_2LM");

    // form elements BS
    const resultText_2LM = document.getElementById("2lmResultText");
    const form_2LM = document.getElementById("form_2LM");
    const ratingText_2LM = document.getElementById("2lmRatingText");
    const chkBxboNearRoundNumber_2LM = document.getElementById("2lmNearRoundNumber");

    // Ratings
    let rating_2LM   = 0;

    /**
     * @description Checks the results BuySetup/SellSetup checklist
     */
    const check2LMTrade = () => {
        // Strong initial move with 2 - 5 Bars?
        if( testCheckbox(document.getElementById("2lmStrongIgniting")) ) {
            rating_2LM += 20;
        } else {
            rating_2LM -= 0;
        }

        // Initial move comes after a retracement?
        if( testCheckbox(document.getElementById("2lmPriorConsolidation")) ) {
            rating_2LM += 10;
        } else {
            rating_2LM -= 0;
        }

        // The 1st leg hast to be smaller than 15 of stock price?
        if( testCheckbox(document.getElementById("2lmSmallFirstLeg")) ) {
            rating_2LM += 5;
        } else {
            rating_2LM -= 0;
        }

        // Short Consolidation with no or small retracement = Inside Resting Bar??
        if( testCheckbox(document.getElementById("2lmInsideRestingBar")) ) {
            rating_2LM += 15;
        } else {
            rating_2LM -= 0;
        }

        // Consolidation only 1 (max. 2) Bars?
        if( testCheckbox(document.getElementById("2lmIRB1or2Bars")) ) {
            rating_2LM += 15;
        } else {
            rating_2LM -= 0;
        }

        // Does IRB have low volume (NO high Ending Volume)?
        if( testCheckbox(document.getElementById("2lmIRBLowVolume")) ) {
            rating_2LM += 15;
        } else {
            rating_2LM -= 0;
        }

        // Does IRB make a 50% retracement of prior bar?
        if( testCheckbox(document.getElementById("2LMIRB50PercentRetracement")) ) {
            rating_2LM += 5;
        } else {
            rating_2LM -= 0;
        }

        // Does IRB form in upper 50% of prior bar?
        if( testCheckbox(document.getElementById("2lmIRBUpper50Percent")) ) {
            rating_2LM += 10;
        } else {
            rating_2LM -= 0;
        }

        // Does IRB have Bottoming Tails?
        if( testCheckbox(document.getElementById("2lmIRBBottomingTails")) ) {
            rating_2LM += 5;
        } else {
            rating_2LM -= 0;
        }

        // Results
        let formResult = "";

        if ( rating_2LM <= 70 ) {
            formResult = "Bad Trade!";
        } else if ( rating_2LM > 70 && rating_2LM <= 85 ) {
            formResult = "Good Trade!";
        } else if ( rating_2LM > 85 && rating_2LM < 100 ) {
            formResult = "Great Trade!";
        } else if ( rating_2LM >= 100 ) {
            formResult = "Awesome Trade! I would take it!";
        } else {
            formResult = "ERROR: No result available!";
        }

        // Displaying Results
        resultText_2LM.innerHTML = formResult;
        ratingText_2LM.innerHTML = rating_2LM;
    };

    // Check BO/BD form inputs
    checkBtn_2LM.onclick = () => {
        // reset ratings
        rating_2LM = 0;

        check2LMTrade();
    };

    // Clear Rating, Results and Form Elements of BO form
    resetBtn_2LM.onclick = () => {
        form_2LM.reset();
        resultText_2LM.innerHTML = "";
        ratingText_2LM.innerHTML = "";
        rating_2LM = 0;
    }

    /**
     * @description Checks if checkbox is checked
     * @param {html} ele 
     */
    const testCheckbox = (ele) => {
        return ele.checked == true ? true : false;
    };
};