"use strict";
const Store = require('../store');
// const { app } = require('electron');

// First instantiate the class
const store = new Store({
    // We'll call our data file 'user-preferences'
    configName: 'user-preferences_tradeHelpers',
    defaults: {
      // 10$ is the default amount of risk
      riskAmount: 10.00
    }
});

window.onload = function() {
    // Inputs
    // const entryPrice = parseFloat(document.getElementById("EntryPrice_SSC")).toFixed(2)
    const entryPrice_SSC   = document.getElementById("EntryPrice_SSC");
    const stopLossPrice_SSC = document.getElementById("StopLoss_SSC");
    const shareNumber_SSC = document.getElementById("shares");

    // Get risk amount from store and set the value of input tag in html shareSizeCalculatr.html
    let riskAmount_SSC = store.get("riskAmount");
    document.getElementById("riskAmount").value = riskAmount_SSC;

    // Targets
    let target1R_SSC = document.getElementById("1R");
    let target2R_SSC = document.getElementById("2R");
    let target3R_SSC = document.getElementById("3R");

    /**
     * 
     * @description Determines on entering of an entry value if the trade is a long or short trade and determines the
     * targets for 1R, 2R and 3R.
     * @param {obj} eve 
     * 
     */
    entryPrice_SSC.oninput = (eve) => {
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

        console.log("shares before calcShareSize = " + shareNumber_SSC.value);
        // Get number of shares depending on amount of risk and stoploss
        shareNumber_SSC.value = calcShareSize(entry, sl);
        console.log("shares after calcShareSize = " + shareNumber_SSC.value);

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

    /**
     * 
     * @description Determines on entering of a stop loss value if the trade is a long or short trade and determines the
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

        console.log("shares before calcShareSize = " + shareNumber_SSC);
        // Get number of shares depending on amount of risk and stoploss
        shareNumber_SSC.value = calcShareSize(entry, sl);
        console.log("shares after calcShareSize = " + shareNumber_SSC);

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

    /**
     * 
     * @description Calculates the necessary share Size
     * @param {number} entry 
     * @param {number} stoploss 
     * 
     */
    const calcShareSize = (entry, stoploss) => {
        // console.log("riskAmount = " + riskAmount_SSC + " of type : " + typeof(riskAmount_SSC) );
        let result = 0;
        if (entry > stoploss) {
            console.log("result if = " + (riskAmount_SSC / ( entry - stoploss )) );
            result = Number(riskAmount_SSC) / ( entry - stoploss );
        } else {
            console.log("result else = " + riskAmount_SSC / ( stoploss - entry ) );
            result = Number(riskAmount_SSC) / ( stoploss - entry );
        }
        console.log("result = " + result + " of type : " + typeof(result));
        return result;
    }

    /**
     * 
     * @description Save user defined amount of risk in userData (user-perferences_tradeHelpers.json)
     * 
     */
    document.getElementById("riskAmount").onchange = () => {
        let riskAmount_SSC = Number(document.getElementById("riskAmount").value);

        // Now that we have them, save them using the `set` method.
        store.set('riskAmount', riskAmount_SSC );
    }
}