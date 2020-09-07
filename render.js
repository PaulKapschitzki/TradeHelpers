const checkBtn = document.getElementById("checkBtn");
let resultText = document.getElementById("resultText");
let result = document.getElementsByName("result");

checkBtn.onclick = () => {
    checkTrade();
};

/**
 * @description Checks the results of the checklists and checks if criteria for a trade setup are met.
 * @param {*} inputs 
 */
const checkTrade = (inputs) => {
    resultText.innerHTML = "Good Trade";
    resultText.class.add("text-success");
    console.log("checkTrade end");
};

/**
 * @description Calculates the setup rating according to checklist inputs
 * @param {array} results 
 */
const calcRating = (results) => {
    // check which setup is chosen
    // calculate rating
};