"use strict";
// Check localStorage for saved data on narrative shown and answered questions
const savedSites = JSON.parse(localStorage.getItem('sites'));
const answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];


// If saved data exists, create the map page
if (answeredQuestions.length != 0) {
    createMapPage();
} else {
    // Save the initial site data to localStorage
    saveSitesToLocalStorage();
    createLoadingScreenPage();
}

function saveSitesToLocalStorage() {
    localStorage.setItem('sites', JSON.stringify(sites));
}
