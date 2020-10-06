"use strict";
window.onload = function(){
    // Check buttons
    const checkBtn_BS   = document.getElementById("checkBtn_BS");

    // Reset buttons
    const resetBtn_BS = document.getElementById("resetBtn_BS");

    // form elements BS
    const resultText_BS = document.getElementById("bsResultText");
    const form_BS = document.getElementById("form_BS");
    const ratingText_BS = document.getElementById("bsRatingText");

    // Ratings
    let rating_BS   = 0;

    /**
     * @description Checks the results BuySetup/SellSetup checklist
     */
    const checkBSTrade = () => {
        // In an uptrend?
        if( testCheckbox(document.getElementById("bsTrend")) ) {
            rating_BS += 10;
        } else {
            rating_BS -= 0;
        }

        // Does setup appear after a retracement?
        if( testCheckbox(document.getElementById("bsRetracement")) ) {
            rating_BS += 20;
        } else {
            rating_BS -= 0;
        }

        // Retracement to Moving Average?
        if( testCheckbox(document.getElementById("bsRetracementEMA")) ) {
            rating_BS += 5;
        } else {
            rating_BS -= 0;
        }

        // 50% Retracement?
        if( testCheckbox(document.getElementById("bsRetracement50perCent")) ) {
            rating_BS += 10;
        } else {
            rating_BS -= 0;
        }

        // Retracement to prior Pivot or Support / Resistance?
        if( testCheckbox(document.getElementById("bsRetracementPivot")) ) {
            rating_BS += 10;
        } else {
            rating_BS -= 0;
        }

        // Indecision candles?
        if( testCheckbox(document.getElementById("bsIndecisionCandles")) ) {
            rating_BS += 10;
        } else {
            rating_BS -= 0;
        }

        // Retest & Failure?
        if( testCheckbox(document.getElementById("bsRetestAndFailure")) ) {
            rating_BS += 10;
        } else {
            rating_BS -= 0;
        }

        // Ending Volume
        if( testCheckbox(document.getElementById("bsEndingVolume")) ) {
            rating_BS += 10;
        } else {
            rating_BS -= 0;
        }

        // Bottomin Tails
        if( testCheckbox(document.getElementById("bsBottomingTails")) ) {
            rating_BS += 10;
        } else {
            rating_BS -= 0;
        }

        // V-shape top of prior Pivot
        if( testCheckbox(document.getElementById("bsVShapePivot")) ) {
            rating_BS += 5;
        } else {
            rating_BS -= 0;
        }

        // Results
        let formResult = "";

        if ( rating_BS <= 70 ) {
            formResult = "Bad Trade!";
        } else if ( rating_BS > 70 && rating_BS <= 85 ) {
            formResult = "Good Trade!";
        } else if ( rating_BS > 85 && rating_BS < 100 ) {
            formResult = "Great Trade!";
        } else if ( rating_BS >= 100 ) {
            formResult = "Awesome Trade! I would take it!";
        } else {
            formResult = "ERROR: No result available!";
        }

        // Displaying Results
        resultText_BS.innerHTML = formResult;
        ratingText_BS.innerHTML = rating_BS;
        console.log("rating-BS: " + rating_BS);
    };

    // Check BS/SS form inputs
    checkBtn_BS.onclick = () => {
        // reset ratings
        rating_BS = 0;

        checkBSTrade();
    };

    // Clear Rating, Results and Form Elements of BS form
    resetBtn_BS.onclick = () => {
        form_BS.reset();
        resultText_BS.innerHTML = "";
        ratingText_BS.innerHTML = "";
        rating_BS = 0;
    }

    /**
     * @description Checks if checkbox is checked
     * @param {html} ele 
     */
    const testCheckbox = (ele) => {
        return ele.checked == true ? true : false;
    };
};