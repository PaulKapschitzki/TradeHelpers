const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");

const resultText = document.getElementById("resultText");
const result = document.getElementsByName("result");
const form_34BP = document.getElementById("form_34BP");
const ratingText = document.getElementById("ratingText");
const chkBxIsGap = document.getElementById("isGap");
const gapLevelGroup = document.getElementsByName("gapLevelGroup");
let rating = 0;

// Check Form inputs
checkBtn.onclick = () => {
    checkTrade();
};

// Clear Rating, Results and Form Elements
resetBtn.onclick = () => {
    form_34BP.reset();
    resultText.innerHTML = "";
    ratingText.innerHTML = "";
    rating = 0;
}

// // Check value of isGap checkbox
// chkBxIsGap.onclick = () => {
//     if ( this.checked ) {
//         gapLevelGroup.show();
//     } else {
//         gapLevelGroup.hide();
//     }
// }

/**
 * @description Shows or Hides HTML elements according to value of a the "isGap" checkbox
 */
const showHideGapLevel = (chkBxIsGap) => {
    if (chkBxIsGap.checked == true) {
        gapLevelGroup.fadeIn();
    } else {
        gapLevelGroup.fadeOut();
    }
};

// Hide and Show Gap Level elements with checking the "Is there a Gap" Checkbox
// chkBxIsGap.onChange = (chkBIsGap) => {
    
// }

/**
 * @description Checks the results of the checklists and checks if criteria for a trade setup are met.
 * @param {*} inputs 
 */
const checkTrade = () => {
    // Igniting Bar
    if( testCheckbox(document.getElementById("ignitingBar")) ) {
        rating += 25;
    } else {
        rating -= 25;
    }

    // WideRangeBar = WRB
    if( testCheckbox(document.getElementById("wideRangeBar")) ) {
        rating += 20;
    } else {
        rating -= 20;
    }

    // InsideRestingBar = IRB
    if( testCheckbox(document.getElementById("insideRestingBar")) ) {
        rating += 20;
    } else {
        rating -= 20;
    }

    // Equal Highs
    if( testCheckbox(document.getElementById("equalHighs")) ) {
        rating += 10;
    } else {
        rating -= 10;
    }

    // Increased Volume
    if( testCheckbox(document.getElementById("increasedVolume")) ) {
        rating += 15;
    } else {
        rating -= 15;
    }

    // Gap?
    if( testCheckbox(document.getElementById("gap")) ) {
        rating += 10;
    } else {
        rating -= 10;
    }

    // Gap level
    let gapLevel = document.getElementsByName("gapLevel");
    let gapTyp = "";

    for(var i = 0; i < gapLevel.length; i++)
    {
        if(gapLevel[i].checked)
        {
            gapTyp = gapLevel[i].value;
            if (gapTyp === "level1") rating += 20;
            if (gapTyp === "level2") rating += 10;
            if (gapTyp === "level3") rating += 5;
        }
    }

    let formResult = "";

    if ( rating <= 70 ) {
        formResult = "Bad Trade!";
    } else if ( rating > 70 && rating <= 90 ) {
        formResult = "Good Trade!";
    } else if ( rating > 90 ) {
        formResult = "Great Trade!";
    } else {
        formResult = "ERROR: No result available!";
    }

    // Displaying Results
    resultText.innerHTML = formResult;
    ratingText.innerHTML = rating;
};

/**
 * @description Calculates the setup rating according to checklist inputs
 * @param {array} results 
 */
const calcRating = (results) => {
    // check which setup is chosen
    // calculate rating
};

/**
 * @description Checks if checkbox is checked
 * @param {html} ele 
 */
const testCheckbox = (ele) => {
    return ele.checked == true ? true : false;
};