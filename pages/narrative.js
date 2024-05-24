"use strict";

/* narrative.js: */

function createNarrativePage(site, userLatLng) {

    console.log('Creating narrative page for site:', site, 'at location:', userLatLng);

    main.innerHTML = `
    <div class="narrativePageContainer">
        <div class="dialogue-container">
            <h1></h1>
            <p></p>
        </div>
        <button class="mainBtn" id="tipsrundaQuestion-btn">Tipsrundafråga</button>
    </div>
    `;

    // Call displayNarrative to get the narrative data
    const narrativeData = displayNarrative(site);

    let tipsrundaQuestionBtn = document.getElementById("tipsrundaQuestion-btn");

    tipsrundaQuestionBtn.addEventListener("click", () => createTipsrundaPage(narrativeData, site.id));

    function displayNarrative(site) {
        const narrativeContainer = document.querySelector(".dialogue-container");

        // Find the narrative and tipsrunda question for the specified site
        const siteData = siteNarrativesAndQuestions.find(data => data.id === site.id);

        // Check if site data is found
        if (siteData) {
            // Extract narrative and tipsrunda question
            const { narrative, tipsrundaQuestion } = siteData;

            // Display narrative
            narrativeContainer.innerHTML = `
                <h1>${narrative.narrativeHeadline}</h1>
                <p>${narrative.siteNarrative}</p>
            `;

            // Return the tipsrunda question for further processing if needed
            return tipsrundaQuestion;
        } else {
            // Handle case where site data is not found
            narrativeContainer.innerHTML = "<p>Narrative not found for this site.</p>";
            return null;
        }
    }
}
