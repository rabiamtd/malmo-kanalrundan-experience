"use strict";

let main = document.querySelector("main");

function createLoadingScreenPage() {
    main.innerHTML = `
    <div class="loadingPageContainer">
        <div id="loader"></div> 
        <img class="round" id="round-img" src="images/logo1.jpg" width="130" height="130">
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
            <img class="rectangle" src="images/logo1.jpg" width="130" height="130">
            <button class="mainBtn" id="startTipsrundaBtn" type="submit">Starta tipsrunda</button>
        </div>
    </div> 
`;

    document.getElementById("startTipsrundaBtn").addEventListener("click", createAllowLocationPermissionPage);
}


function createAllowLocationPermissionPage() {

    main.innerHTML = `
    <div class="locationPermissionPageContainer">
        <div>
            <p>Malmö kanalrundan behöver tillgång till din plats i bakgrunden för att köra upplevelsen i bakgrunden och informera dig om intressanta saker nära dig och låsa upp de frågor du stöter på. Gå till enhetens inställningar för att aktivera platstjänster och välj 'Tillåt alltid'.
            </p>
            <button id="location-ok-btn">OK</button>
        </div>
    </div>
    `;

    document.getElementById("location-ok-btn").addEventListener("click", createIntroPage);
}

function createIntroPage() {
    main.innerHTML = `
    <div class="introPageContainer">
        <div>
            <p>Astrid: Hey there! Welcome to the Memory Calibration and Synchronization Protocol. I'm Astrid, your virtual guide designed by MCSP.</p>
            <p>Astrid: Oh, but before we dive in, what should I call you?</p>
            <input type="text" id="username-input" placeholder="Your name">
            <button id="username-submit-btn">Submit</button>
        </div>
    </div>
    `;

    document.getElementById("username-submit-btn").addEventListener("click", handleUsernameSubmit);
}

function handleUsernameSubmit() {
    const username = document.getElementById("username-input").value;
    if (username.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    // Save username to local storage
    localStorage.setItem("username", username);

    createIntroPageWithUsername(username);
}


function createIntroPageWithUsername(username) {
    main.innerHTML = `
    <div class="introPageContainer">
        <div>
            <p>Astrid: Hey there, ${username}! Malmö Kanalrundan is MCSP's way of blending history with modern tech to keep Malmö's story alive.</p>
            <p>Astrid: And with your help, we're making sure this city's rich past isn't forgotten.</p>
            <p>Astrid: So, ${username}, ready to join me on this journey through time and memory?</p>
            <button id="lets-go-button">Let's go!</button>
        </div>
    </div>
    `;

    document.getElementById("lets-go-button").addEventListener("click", createMapPage);
}

