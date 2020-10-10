"use strict";
window.onload = function(){
    // Check buttons
    const checkBtn_BO   = document.getElementById("checkBtn_BO");

    // Reset buttons
    const resetBtn_BO = document.getElementById("resetBtn_BO");

    // form elements BS
    const resultText_BO = document.getElementById("boResultText");
    const form_BO = document.getElementById("form_BO");
    const ratingText_BO = document.getElementById("boRatingText");
    const chkBxboNearRoundNumber_BO = document.getElementById("boNearRoundNumber");

    // Ratings
    let rating_BO   = 0;

    /**
     * @description Checks the results BuySetup/SellSetup checklist
     */
    const checkBOTrade = () => {
        // Consolidation before setup with at least 5 Bars?
        if( testCheckbox(document.getElementById("boConsolidation")) ) {
            rating_BO += 25;
        } else {
            rating_BO -= 0;
        }

        // Relatively low volume during consolidation?
        if( testCheckbox(document.getElementById("boConsolLowVol")) ) {
            rating_BO += 20;
        } else {
            rating_BO -= 0;
        }

        // Relative Strength?
        if( testCheckbox(document.getElementById("boRS")) ) {
            rating_BO += 5;
        } else {
            rating_BO -= 0;
        }

        // 21 EMA retracement?
        if( testCheckbox(document.getElementById("bo21EmaRetracement")) ) {
            rating_BO += 10;
        } else {
            rating_BO -= 0;
        }

        // Clean and Tight base?
        if( testCheckbox(document.getElementById("boCleanAndTightBase")) ) {
            rating_BO += 15;
        } else {
            rating_BO -= 0;
        }

        // Big Round Number
        let roundNumbers = document.getElementsByName("numberType");
        let numberType = "";

        for(var i = 0; i < roundNumbers.length; i++)
        {
            if(roundNumbers[i].checked)
            {
                numberType = roundNumbers[i].value;
                if (numberType === "VBRN") rating_BO += 15;
                if (numberType === "BRN") rating_BO += 10;
                if (numberType === "HRN") rating_BO += 5;
            }
        }

        // Retest & Failure?
        if( testCheckbox(document.getElementById("boTrendlineBreak")) ) {
            rating_BO += 5;
        } else {
            rating_BO -= 0;
        }

        // Ending Volume
        if( testCheckbox(document.getElementById("boEasy2See")) ) {
            rating_BO += 5;
        } else {
            rating_BO -= 0;
        }

        // Results
        let formResult = "";

        if ( rating_BO <= 70 ) {
            formResult = "Bad Trade!";
        } else if ( rating_BO > 70 && rating_BO <= 85 ) {
            formResult = "Good Trade!";
        } else if ( rating_BO > 85 && rating_BO < 100 ) {
            formResult = "Great Trade!";
        } else if ( rating_BO >= 100 ) {
            formResult = "Awesome Trade! I would take it!";
        } else {
            formResult = "ERROR: No result available!";
        }

        // Displaying Results
        resultText_BO.innerHTML = formResult;
        ratingText_BO.innerHTML = rating_BO;
        console.log("rating-BS: " + rating_BO);
    };

    // Check BO/BD form inputs
    checkBtn_BO.onclick = () => {
        // reset ratings
        rating_BO = 0;

        checkBOTrade();
    };

    // Clear Rating, Results and Form Elements of BO form
    resetBtn_BO.onclick = () => {
        form_BO.reset();
        resultText_BO.innerHTML = "";
        ratingText_BO.innerHTML = "";
        rating_BO = 0;
    }

    /**
     * @description Enables or disables numberType HTML elements according to value of a the "boNearRoundNumber" checkbox
     */
    chkBxboNearRoundNumber_BO.onclick = () => {
        let vbrn = document.getElementById("boVBRN");
        let brn = document.getElementById("boBRN");
        let hrn = document.getElementById("boHRN");
        
        if (chkBxboNearRoundNumber_BO.checked == true) {
            // enable radio buttons
            vbrn.disabled = false;
            brn.disabled = false;
            hrn.disabled = false;
        } else {
            // clear selection
            vbrn.checked = false;
            brn.checked = false;
            hrn.checked = false;
            // disable radio buttons
            vbrn.disabled = true;
            brn.disabled = true;
            hrn.disabled = true;
        }
    }

    /**
     * @description Checks if checkbox is checked
     * @param {html} ele 
     */
    const testCheckbox = (ele) => {
        return ele.checked == true ? true : false;
    };
};