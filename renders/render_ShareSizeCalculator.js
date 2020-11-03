"use strict";
window.onload = function() {
    // Inputs
    const entryPrice = parseFloat(document.getElementById("EntryPrice_SSC")).toFixed(2)
    const entryPrice_SSC   = document.getElementById("EntryPrice_SSC");
    const stopLossPrice_SSC = document.getElementById("StopLoss_SSC");

    // Targets
    let target1R_SSC = document.getElementById("1R");
    let target2R_SSC = document.getElementById("2R");
    let target3R_SSC = document.getElementById("3R");

    /**
     * 
     * @description Formats numbers to 2 decimals.
     */
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,      
        maximumFractionDigits: 2,
    });

    /**
     * 
     * @description Determines if the trade is a long or short trade and determines the
     * targets for 1R, 2R and 3R.
     * @param {obj} eve 
     * 
     */
    stopLossPrice_SSC.oninput = (eve) => {
        let direction = "";
        if ( Number(entryPrice_SSC.value) > Number(stopLossPrice_SSC.value) ) {
            direction = "long";
        } else if ( Number(entryPrice_SSC.value) < Number(stopLossPrice_SSC.value) ) {
            direction = "short";
        } else {
            direction="none";
        }

        // Get Number value out of Entry and StopLoss
        let entry = Number(entryPrice_SSC.value);
        let sl    = Number(stopLossPrice_SSC.value);

        // If direction is "long" add target to entry price, if "short" substract target from entry price, else no valid input
        if (direction === "long") {
            target1R_SSC.value = parseFloat(entry + ( entry - sl )).toFixed(2);
            target2R_SSC.value = parseFloat(entry + (2 * ( entry - sl ) )).toFixed(2);
            target3R_SSC.value = parseFloat(entry + (3 * ( entry - sl ) )).toFixed(2);
        } else if (direction === "short") {
            target1R_SSC.value = parseFloat(entry - ( sl - entry)).toFixed(2);
            target2R_SSC.value = parseFloat(entry - (2 * ( sl - entry ) )).toFixed(2);
            target3R_SSC.value = parseFloat(entry - (3 * ( sl - entry ) )).toFixed(2);
        } else {
            target1R_SSC.value = 0.00;
            target2R_SSC.value = 0.00;
            target3R_SSC.value = 0.00;
        }
    }
}