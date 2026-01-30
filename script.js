// Basic button actions
document.addEventListener("DOMContentLoaded", function() {
    // Example buttons
    const donateBtn = document.getElementById("donateBtn");
    const signBtn = document.getElementById("signBtn");
    const learnBtn = document.getElementById("learnBtn");

    if(donateBtn) {
        donateBtn.addEventListener("click", function() {
            alert("Thank you! You can donate to legal defense & advocacy at example.org.");
        });
    }

    if(signBtn) {
        signBtn.addEventListener("click", function() {
            alert("Sign petitions for policy change at example.org.");
        });
    }

    if(learnBtn) {
        learnBtn.addEventListener("click", function() {
            alert("Learn about your rights and laws at example.org.");
        });
    }
});