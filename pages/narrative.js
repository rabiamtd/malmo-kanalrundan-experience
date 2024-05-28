"use strict";

/* Ensure GSAP and TextPlugin are loaded */
if (typeof gsap === "undefined" || typeof gsap.registerPlugin === "undefined") {
    console.error("GSAP is not loaded");
} else {
    console.log("GSAP is loaded");
    gsap.registerPlugin(TextPlugin);
}


function createNarrativePage(site, userLatLng) {
    console.log('Creating narrative page for site:', site, 'at location:', userLatLng);

    const main = document.querySelector('main');
    main.innerHTML = `
    <div class="narrativePageContainer">
        <div class="dialogue-container">
            <h1 class="narrative-headline"></h1>
            <p class="narrative-text"></p>
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

            // Set the initial text content before animating
            const narrativeHeadline = document.querySelector(".narrative-headline");
            const narrativeText = document.querySelector(".narrative-text");

            narrativeHeadline.innerHTML = narrative.narrativeHeadline;
            narrativeText.innerHTML = narrative.siteNarrative;

            if (narrative.siteNarrative === null || narrative.siteNarrative === undefined) {
                console.log(`${narrative.siteNarrative} is null`);

            } else {
                console.log(`${narrative.siteNarrative} is available`);
                // Animate the narrative text using the TextPlugin
                gsap.to(narrativeText, {
                    duration: 10,
                    text: {
                        value: narrative.siteNarrative,
                        ease: "none"
                    }
                });

            }

            // Animate the headline text using the TextPlugin
            gsap.to(narrativeHeadline, {
                duration: 2,
                text: {
                    value: narrative.narrativeHeadline,
                    ease: "none"
                }
            });

            // Return the tipsrunda question for further processing if needed
            return tipsrundaQuestion;
        } else {
            // Handle case where site data is not found
            narrativeContainer.innerHTML = "<p>Narrative not found for this site.</p>";
            return null;
        }
    }
}