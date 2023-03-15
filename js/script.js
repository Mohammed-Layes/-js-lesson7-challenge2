// Your JS code here
var subTypeElement = document.querySelector("select#subscription");

var subDurationElement = document.querySelector("select#months");

var result = document.querySelector("p.result");

var subType = "basic";

var subDuration = 1;

subTypeElement.addEventListener("change", function(e) {
    subType = e.target.value;
    updateSubscriptionDiv();
    //console.log(subType);
});

subDurationElement.addEventListener("change", function(e) {
    subDuration = Number(e.target.value);
    updateSubscriptionDiv();
    //console.log(subDuration);
});

var updateSubscriptionDiv = function() {
    monthlyCost = 5;
    if (subType === "standard") {
        monthlyCost = 7;
    } else if (subType === "premium") {
        monthlyCost = 10;
    }
    
    var total = subDuration * monthlyCost;

    result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};