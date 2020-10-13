"use strict";
window.onload = function(){
    // Check buttons
    const checkBtn_CP   = document.getElementById("checkBtn_CP");

    // Reset buttons
    const resetBtn_CP = document.getElementById("resetBtn_CP");

    // form elements BS
    const resultText_CP = document.getElementById("cpResultText");
    const form_CP = document.getElementById("form_CP");
    const ratingText_CP = document.getElementById("cpRatingText");
    const chkBxboNearRoundNumber_CP = document.getElementById("cpNearRoundNumber");

    // Ratings
    let rating_CP   = 0;

    /**
     * @description Checks the results BuySetup/SellSetup checklist
     */
    const checkCPTrade = () => {
        // At least 2+ SUPER Wide Range Bars (SWRB's)?
        if( testCheckbox(document.getElementById("cpPriorRedBars")) ) {
            rating_CP += 25;
        } else {
            rating_CP -= 0;
        }

        // Does the 'last' bar have massive Ending Volume?
        if( testCheckbox(document.getElementById("cpEndingVolume")) ) {
            rating_CP += 20;
        } else {
            rating_CP -= 0;
        }

        // Do(es) the last bar(s) have Bottoming Tails?
        if( testCheckbox(document.getElementById("cpBottomingTails")) ) {
            rating_CP += 20;
        } else {
            rating_CP -= 0;
        }

        // Does price break prior Support or Resistance?
        if( testCheckbox(document.getElementById("cpBreakingSupportOrResistance")) ) {
            rating_CP += 15;
        } else {
            rating_CP -= 0;
        }

        // Does price break prior Support or Resistance?
        if( testCheckbox(document.getElementById("cpAwayFrom21EMA")) ) {
            rating_CP += 15;
        } else {
            rating_CP -= 0;
        }

        // Does the Igniting Bar have big volume?
        if( testCheckbox(document.getElementById("cpIgnitingVolume")) ) {
            rating_CP += 10;
        } else {
            rating_CP -= 0;
        }

        // Do the bars change their color?
        if( testCheckbox(document.getElementById("cpCOCBars")) ) {
            rating_CP += 10;
        } else {
            rating_CP -= 0;
        }

        // Results
        let formResult = "";

        if ( rating_CP <= 70 ) {
            formResult = "Bad Trade!";
        } else if ( rating_CP > 70 && rating_CP <= 85 ) {
            formResult = "Good Trade!";
        } else if ( rating_CP > 85 && rating_CP < 100 ) {
            formResult = "Great Trade!";
        } else if ( rating_CP >= 100 ) {
            formResult = "Awesome Trade! I would take it!";
        } else {
            formResult = "ERROR: No result available!";
        }

        // Displaying Results
        resultText_CP.innerHTML = formResult;
        ratingText_CP.innerHTML = rating_CP;
    };

    // Check BO/BD form inputs
    checkBtn_CP.onclick = () => {
        // reset ratings
        rating_CP = 0;

        checkCPTrade();
    };

    // Clear Rating, Results and Form Elements of BO form
    resetBtn_CP.onclick = () => {
        form_CP.reset();
        resultText_CP.innerHTML = "";
        ratingText_CP.innerHTML = "";
        rating_CP = 0;
    }

    /**
     * @description Checks if checkbox is checked
     * @param {html} ele 
     */
    const testCheckbox = (ele) => {
        return ele.checked == true ? true : false;
    };
};