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
            <h1 class="narrative-headline">Loading...</h1>
            <p class="narrative-text">Loading...</p>
        </div>
        <button class="mainBtn" id="tipsrundaQuestion-btn">Tipsrundafråga</button>
    </div>
    `;

    // Call displayNarrative to get the narrative data
    const narrativeData = displayNarrative(site.id);

    let tipsrundaQuestionBtn = document.getElementById("tipsrundaQuestion-btn");

    tipsrundaQuestionBtn.addEventListener("click", () => createTipsrundaPage(narrativeData, site.id));

    function displayNarrative(siteId) {
        const narrativeContainer = document.querySelector(".dialogue-container");

        // Find the narrative and tipsrunda question for the specified site
        const siteData = siteNarrativesAndQuestions.find(data => data.id === siteId);

        // Check if site data is found
        if (siteData) {
            console.log(siteData);
            console.log(siteData.narrative.narrativeHeadline);
            console.log(siteData.narrative.siteNarrative);

            // Set the initial text content before animating
            const narrativeHeadline = document.querySelector(".narrative-headline");
            const narrativeText = document.querySelector(".narrative-text");

            /*// Animate the headline text using the TextPlugin
            gsap.to(narrativeHeadline, {
                duration: 2,
                text: {
                    value: siteData.narrative.narrativeHeadline,
                    ease: "none"
                }
            });*/


            // Set up the initial state
            narrativeText.innerHTML = "";

            // Define the narrative text
            const narrative = siteData.narrative.siteNarrative;

            // Define the duration for the typewriter effect
            const typewriterDuration = 0.1; // Faster typewriter effect
            const delayBetweenCharacters = 0.05; // Shorter delay between characters

            // Set up the typewriter effect
            const revealCharacters = () => {
                for (let i = 0; i <= narrative.length; i++) {
                    gsap.to(narrativeText, {
                        duration: typewriterDuration, // Faster character reveal
                        text: narrative.substring(0, i), // Reveal characters gradually
                        delay: typewriterDuration + delayBetweenCharacters * i, // Shorter delay between characters
                        ease: "none",
                    });
                }
            };

            // Trigger the typewriter effect after a delay for a more dynamic feel
            setTimeout(revealCharacters, 500);

            // Return the tipsrunda question for further processing if needed
            return siteData.tipsrundaQuestion;
        } else {
            // Handle case where site data is not found
            narrativeContainer.innerHTML = "<p>Narrative not found for this site.</p>";
            return null;
        }
    }
}
