"use strict";

/* map.js: */

// initialize variables to keep track of questions
let totalQuestions = siteNarrativesAndQuestions.length;

function createMapPage() {
    main.innerHTML = `
    <div id="mapPageContainer">
        <div class="modal-container">
            <div class="modal-contentBox">
                <h1 class="title">Frågor</h1>
                <div id="questionProgressContainer"></div>
                <button id="saveClose-button">Spara och stäng</button>
                <div id="close-button">X</div>
            </div>
        </div>

        <div id="Qbtn-container">
            <button class="modal-button">Frågor</button>
        </div>

        <div id="map"></div>   
    </div>
    `;

    createMap('map', sites);
    launchQModal();

}
