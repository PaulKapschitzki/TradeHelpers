"use strict";
window.onload = function(){
    // Check buttons
    const checkBtn_34BP = document.getElementById("checkBtn_34BP");

    // Reset buttons
    const resetBtn_34BP = document.getElementById("resetBtn_34BP");

    // form elements 34BP
    const resultText_34BP = document.getElementById("34bpResultText");
    const form_34BP = document.getElementById("form_34BP");
    const ratingText_34BP = document.getElementById("34bpRatingText");
    const chkBxIsGap_34BP = document.getElementById("34bpGap");

    // Ratings
    let rating_34BP = 0;

    /**
     * @description Checks the results 34BP checklist
     */
    const check34BPTrade = () => {
        // Igniting Bar
        if( testCheckbox(document.getElementById("34bpIgnitingBar")) ) {
            rating_34BP += 25;
        } else {
            rating_34BP -= 25;
        }

        // WideRangeBar = WRB
        if( testCheckbox(document.getElementById("34bpWideRangeBar")) ) {
            rating_34BP += 20;
        } else {
            rating_34BP -= 20;
        }

        // InsideRestingBar = IRB
        if( testCheckbox(document.getElementById("34bpInsideRestingBar")) ) {
            rating_34BP += 20;
        } else {
            rating_34BP -= 20;
        }

        // Equal Highs
        if( testCheckbox(document.getElementById("34bpEqualHighs")) ) {
            rating_34BP += 10;
        } else {
            rating_34BP -= 10;
        }

        // Increased Volume
        if( testCheckbox(document.getElementById("34bpIncreasedVolume")) ) {
            rating_34BP += 15;
        } else {
            rating_34BP -= 15;
        }

        // Gap?
        if( testCheckbox(document.getElementById("34bpGap")) ) {
            rating_34BP += 10;
        } else {
            rating_34BP -= 10;
        }

        // Gap level
        let gapLevel = document.getElementsByName("gapLevel");
        let gapType = "";

        for(var i = 0; i < gapLevel.length; i++)
        {
            if(gapLevel[i].checked)
            {
                gapType = gapLevel[i].value;
                if (gapType === "level1") rating_34BP += 20;
                if (gapType === "level2") rating_34BP += 10;
                if (gapType === "level3") rating_34BP += 5;
            }
        }

        // Results
        let formResult = "";

        if ( rating_34BP <= 70 ) {
            formResult = "Bad Trade!";
        } else if ( rating_34BP > 70 && rating_34BP <= 90 ) {
            formResult = "Good Trade!";
        } else if ( rating_34BP > 90 ) {
            formResult = "Great Trade!";
        } else {
            formResult = "ERROR: No result available!";
        }

        // Displaying Results
        resultText_34BP.innerHTML = formResult;
        ratingText_34BP.innerHTML = rating_34BP;
    };

    // Check 34BP Form inputs
    checkBtn_34BP.onclick = () => {
        // reset rating
        rating_34BP = 0;

        check34BPTrade();
    };

    // Clear Rating, Results and Form Elements of 34BP Form
    resetBtn_34BP.onclick = () => {
        form_34BP.reset();
        resultText_34BP.innerHTML = "";
        ratingText_34BP.innerHTML = "";
        rating_34BP = 0;
    }

    /**
     * @description Enables or disables gap level HTML elements according to value of a the "isGap" checkbox
     */
    chkBxIsGap_34BP.onchange = () => {
        const gapLevelGroup = document.getElementsByName("gapLevelGroup");
        for (let i = 0; i < gapLevelGroup.length; i++) {
            if (chkBxIsGap_34BP.checked === true) {
                gapLevelGroup[i].disabled = false;
            } else {
                gapLevelGroup[i].disabled = true;
            }
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