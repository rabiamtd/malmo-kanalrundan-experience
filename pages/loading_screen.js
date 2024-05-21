"use strict";

let main = document.querySelector("main");

function createLoadingScreenPage() {
    main.innerHTML = `
    <div class="loadingPageContainer">
        <div id="loader"></div> 
        <img class="round" id="round-img" src="images/placeholder-1-1.png" width="130" height="130">
    </div>
    `;

    // adding event listener for DOMContentLoaded event
    document.addEventListener("DOMContentLoaded", timerFunction);

    let myTimer;
    function timerFunction() {
        myTimer = setTimeout(showPage, 3000);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        createStartPage(); // call the function to create the loading screen
    }
}

function createStartPage() {
    main.classList.remove("loadingScreenMain");
    main.innerHTML = `
    <div class="StartPageContainer">
        <div class="rectangle-logo-container"> 
            <img class="rectangle" src="images/placeholder-1-1.png" width="130" height="130">
            <button class="mainBtn" id="startTipsrundaBtn" type="submit">Starta tipsrunda</button>
        </div>
    </div> 
`;

    document.getElementById("startTipsrundaBtn").addEventListener("click", createMapPage);
}
