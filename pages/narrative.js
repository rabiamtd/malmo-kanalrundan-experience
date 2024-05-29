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

            const narrativeHeadline = document.querySelector(".narrative-headline");
            const narrativeText = document.querySelector(".narrative-text");

            // Animate the headline text using the TextPlugin
            gsap.to(narrativeHeadline, {
                duration: 5,
                text: {
                    value: siteData.narrative.narrativeHeadline,
                    ease: "none"
                },
                onComplete: () => {
                    // Define the narrative text
                    const narrative = siteData.narrative.siteNarrative;

                    // Define the duration for the typewriter effect
                    const typewriterDuration = 0.08; // Duration for each character
                    const delayBetweenCharacters = 0.03; // Delay between each character
                    const totalDuration = (narrative.length * (typewriterDuration + delayBetweenCharacters));

                    // Use GSAP's stagger feature for a more accurate typewriter effect
                    gsap.to(narrativeText, {
                        duration: totalDuration,
                        text: {
                            value: narrative,
                            delimiter: "",
                        },
                        ease: "none",
                        delay: 2 // Delay before starting the narrative text animation
                    });
                }
            });

            return siteData.tipsrundaQuestion;
        } else {
            // Handle case where site data is not found
            narrativeContainer.innerHTML = "<p>Narrative not found for this site.</p>";
            return null;
        }
    }
}
