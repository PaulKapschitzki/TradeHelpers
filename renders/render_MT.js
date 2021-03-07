"use strict";
window.onload = function(){
    // Check buttons
    const checkBtn_MT   = document.getElementById("checkBtn_MT");

    // Reset buttons
    const resetBtn_MT = document.getElementById("resetBtn_MT");

    // Share Size Calc button
    const shareSizeButton = document.getElementById("shareSizeCalcBtn_MT");

    // form elements BS
    const resultText_MT = document.getElementById("mtResultText");
    const form_MT = document.getElementById("form_MT");
    const ratingText_MT = document.getElementById("mtRatingText");
    const chkBxboNearRoundNumber_MT = document.getElementById("mtNearRoundNumber");

    // Ratings
    let rating_MT   = 0;

    /**
     * @description Checks the results BuySetup/SellSetup checklist
     */
    const checkMTTrade = () => {
        debugger;
        // Is the stock in an obvious trend with higher highs and lower lows?
        if( testCheckbox(document.getElementById("mtTrend")) ) {
            rating_MT += 25;
        } else {
            rating_MT -= 0;
        }

        // Does price reside under strong resistance?
        if( testCheckbox(document.getElementById("mtResistance")) ) {
            rating_MT += 20;
        } else {
            rating_MT -= 0;
        }

        // Is the stock part of a "hot" sector? Does the sector perform well at the time?
        if( testCheckbox(document.getElementById("mtHotSector")) ) {
            rating_MT += 20;
        } else {
            rating_MT -= 0;
        }

        // Does price have Relative Strength or Weakness?
        if( testCheckbox(document.getElementById("mtRelativeStrengthWeakness")) ) {
            rating_MT += 20;
        } else {
            rating_MT -= 0;
        }

        // Does price show a 1-2-3 Setup on a lower timeframe?
        if( testCheckbox(document.getElementById("mt123Setup")) ) {
            rating_MT += 15;
        } else {
            rating_MT -= 0;
        }

        // Do corrections happen in form of consolidations?
        if( testCheckbox(document.getElementById("mtCorrectionAsConsolidation")) ) {
            rating_MT += 10;
        } else {
            rating_MT -= 0;
        }

        // Is price over 200 and 50 EMA?
        if( testCheckbox(document.getElementById("mtOver50And200EMA")) ) {
            rating_MT += 10;
        } else {
            rating_MT -= 0;
        }

        // Results
        let formResult = "";

        if ( rating_MT <= 70 ) {
            formResult = "Bad Trade!";
            shareSizeButton.hidden = true;
        } else if ( rating_MT > 70 && rating_MT <= 85 ) {
            formResult = "Good Trade!";
            shareSizeButton.hidden = false;
        } else if ( rating_MT > 85 && rating_MT < 100 ) {
            formResult = "Great Trade!";
            shareSizeButton.hidden = false;
        } else if ( rating_MT >= 100 ) {
            formResult = "Awesome Trade! I would take it!";
            shareSizeButton.hidden = false;
        } else {
            formResult = "ERROR: No result available!";
        }
        // Displaying Results
        resultText_MT.innerHTML = formResult;
        ratingText_MT.innerHTML = rating_MT;
    };

    // Check BO/BD form inputs
    checkBtn_MT.onclick = () => {
        // reset ratings
        rating_MT = 0;

        checkMTTrade();
    };

    // Clear Rating, Results and Form Elements of BO form
    resetBtn_MT.onclick = () => {
        form_MT.reset();
        resultText_MT.innerHTML = "";
        ratingText_MT.innerHTML = "";
        rating_MT = 0;
        shareSizeButton.hidden = true;
    }

    /**
     * @description Checks if checkbox is checked
     * @param {html} ele 
     */
    const testCheckbox = (ele) => {
        return ele.checked == true ? true : false;
    };
};