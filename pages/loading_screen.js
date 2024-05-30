"use strict";

let main = document.querySelector("main");

function createLoadingScreenPage() {
    main.innerHTML = `
    <div class="loadingPageContainer">
        <div class="loaderContainer">
            <div id="loader"></div> 
            <img class="round" id="round-img" src="images/logo.jpg" alt="logo image of a boat tour company" width="150" height="150">
        </div>
    </div>
    `;

    document.addEventListener("DOMContentLoaded", timerFunction);

    let myTimer;
    function timerFunction() {
        myTimer = setTimeout(showPage, 3000);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        createStartPage();
    }
}

function createStartPage() {
    main.classList.remove("loadingScreenMain");
    main.innerHTML = `
    <div class="StartPageContainer">
        <div class="rectangle-logo-container"> 
            <img class="rectangle" alt="logo image of a boat tour company" src="images/logo.jpg">
            <button class="mainBtn" id="startTipsrundaBtn" type="submit">Start boat tour</button>
        </div>
    </div> 
    `;

    document.getElementById("startTipsrundaBtn").addEventListener("click", createAllowLocationPermissionPage);
}

function createAllowLocationPermissionPage() {
    main.innerHTML = `
    <div class="locationPermissionPageContainer">
        <div id="allowPermissionBoxContainer">
            <p>Malmö Kanalrundan needs access to your location in the background in order to inform you about interesting things near you and unlock the questions you come across. Go to your device's settings to turn on location permissions and select "Allow All The Time".</p>
            <button class="mainBtn" id="location-ok-btn">OK</button>
        </div>
    </div>
    `;

    document.getElementById("location-ok-btn").addEventListener("click", createIntroPage);
}

function createIntroPage() {
    main.innerHTML = `
    <div class="introPageContainer">
        <div class="introBoxContainer">
            <h1>MCSP</h1>
            <div class="introDialogueContainer">
                <p>Hej there! Welcome to the Memory Calibration and Synchronization Protocol. I'm Astrid, your virtual guide designed by MCSP.</p>
                <p>Oh, but before we dive in, what should I call you?</p>
            </div>
            <div>
                <input type="text" id="username-input" placeholder="Your name">
                <button class="mainBtn" id="username-submit-btn">Submit</button>
            </div>
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

    localStorage.setItem("username", username);
    createIntroPageWithUsername(username);
}

function createIntroPageWithUsername(username) {
    main.innerHTML = `
    <div class="introPageContainer">
        <div class="introBoxContainer">
            <h1>MCSP</h1>
            <div class="introDialogueContainer">
                <p>Hej <span style="color:#8ecae6">${username}</span>! Malmö Kanalrundan is MCSP's way of blending history with modern tech to keep Malmö's story alive.</p>
                <p>And with your help, we're making sure this city's rich past isn't forgotten.</p>
                <p>So, <span style="color:#8ecae6">${username}</span>, ready to join me on this journey through time and memory?</p>
            </div>
            <button class="mainBtn" id="lets-go-button">Let's go!</button>
        </div>
    </div>
    `;

    document.getElementById("lets-go-button").addEventListener("click", createMapPage);
}
