"use strict";

let totalQuestions = siteNarrativesAndQuestions.length;

function createMapPage() {
    main.innerHTML = `
    <div id="mapPageContainer">
        <div class="modal-container modal">
            <div class="modal-contentBox">
                <h1 class="title">Frågor</h1>
                <div id="questionProgressContainer"></div>
                <button class="mainBtn" id="saveClose-button">Stäng</button>
                <div id="close-button">X</div>
            </div>
        </div>

        <div id="Qbtn-container">
            <button class="mainBtn modal-button" id="modalBtn">Frågor</button>
        </div>

        <div id="map"></div>   
    </div>
    `;

    createMap('map', sites, handleSiteClick);
}

// Handler function to call createNarrativePage
function handleSiteClick(site, userLatLng) {
    createNarrativePage(site, userLatLng);
}