"use strict";


// Check localStorage for saved data on narrative shown and answered questions
const savedSites = JSON.parse(localStorage.getItem('sites'));
const answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];

localStorage.clear();

// If saved data exists, create the map page
if (savedSites) {
    createMapPage();
} else {
    // Save the initial site data to localStorage
    saveSitesToLocalStorage();
    createLoadingScreenPage();
}

console.log(savedSites);

// Function to save site data to localStorage
function saveSitesToLocalStorage() {
    localStorage.setItem('sites', JSON.stringify(sites));
}
