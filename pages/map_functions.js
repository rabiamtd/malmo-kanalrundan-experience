"use strict";

function createMap(mapContainerId, sites) {
    var map = L.map(mapContainerId).setView([55.60544094541752, 12.998602498847754], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    map.locate({
        setView: false,
        maxZoom: 16,
        timeout: 10000,
        enableHighAccuracy: true
    });

    function onLocationFound(e) {
        var userLatLng = e.latlng;
        sites.forEach(site => {
            if (isUserNearSite(site, userLatLng)) {
                // Trigger narrative for the site
            }
        });
        // Call the function to create questions in modal with user's location
        createQuestionsInModal(userLatLng);
    }

    function onLocationError(e) {
        alert(e.message);
    }

    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);

    sites.forEach(site => {
        var circle = L.circle([site.lat, site.lng], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.1,
            radius: site.radius
        }).addTo(map);
    });

    function isUserNearSite(site, userLatLng) {
        var siteLatLng = L.latLng(site.lat, site.lng);
        var distance = userLatLng.distanceTo(siteLatLng);
        var thresholdDistance = 50;
        return distance < thresholdDistance;
    }

    function createQuestionsInModal(userLatLng) {
        document.getElementById("questionProgressContainer").innerHTML = ''; // Clear existing questions

        sites.forEach(site => {
            let modalQuestion = document.createElement("div");

            // Clear any existing content
            modalQuestion.innerHTML = '';

            modalQuestion.textContent = `Fråga ${site.id}`;
            modalQuestion.classList.add("modal-question-container");

            if (!answeredQuestions.includes(site.id) && site.id === answeredQuestions.length + 1) {
                if (isUserNearSite(site, userLatLng)) {
                    let playIcon = document.createElement("i");
                    playIcon.classList.add("fa-solid", "fa-chevron-right", "status-icon");
                    modalQuestion.appendChild(playIcon);

                    modalQuestion.addEventListener("click", function () {
                        createNarrativePage(site, userLatLng);
                    });
                } else {
                    let lockIcon = document.createElement("i");
                    lockIcon.classList.add("fa-solid", "fa-lock", "status-icon");
                    modalQuestion.appendChild(lockIcon);

                    // Add event listener to display status box when locked question is clicked
                    modalQuestion.addEventListener("click", function () {
                        displayStatusBox("Frågan är fortfarande låst. Närma dig platsen för att låsa upp den.", modalQuestion);
                    });
                }
            } else if (answeredQuestions.includes(site.id)) {
                let checkIcon = document.createElement("i");
                checkIcon.classList.add("fa-solid", "fa-check", "status-icon");
                modalQuestion.appendChild(checkIcon);
            } else {
                let lockIcon = document.createElement("i");
                lockIcon.classList.add("fa-solid", "fa-lock", "status-icon");
                modalQuestion.appendChild(lockIcon);

                // Add event listener to display status box when locked question is clicked
                modalQuestion.addEventListener("click", function () {
                    displayStatusBox("Frågan är fortfarande låst. Svara på de tidigare frågorna för låsa upp den.", modalQuestion);
                });
            }

            document.getElementById("questionProgressContainer").append(modalQuestion);
        });
    }

    function displayStatusBox(message, parentElement) {
        // Remove any existing status box
        const existingStatusBox = document.querySelector(".status-box");
        if (existingStatusBox) {
            existingStatusBox.remove();
        }

        // Create status box container
        const statusBox = document.createElement("div");
        statusBox.classList.add("status-box");
        statusBox.textContent = message;

        // Create close button
        const closeButton = document.createElement("button");
        closeButton.textContent = "Stäng";
        closeButton.addEventListener("click", () => {
            statusBox.remove();
        });

        statusBox.appendChild(closeButton);

        // Append status box after the parent element
        parentElement.parentNode.insertBefore(statusBox, parentElement.nextSibling);

        // Add styles for the status box to appear below the question and add an arrow
        statusBox.style.position = "absolute";
        statusBox.style.zIndex = "1000";
        statusBox.style.marginTop = "10px";
        statusBox.style.padding = "10px";
        statusBox.style.border = "1px solid #ccc";
        statusBox.style.borderRadius = "5px";
        statusBox.style.backgroundColor = "#fff";
        statusBox.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";

        const arrow = document.createElement("div");
        arrow.classList.add("status-box-arrow");
        arrow.style.position = "absolute";
        arrow.style.top = "-10px";
        arrow.style.left = "50%";
        arrow.style.transform = "translateX(-50%)";
        arrow.style.width = "0";
        arrow.style.height = "0";
        arrow.style.borderLeft = "10px solid transparent";
        arrow.style.borderRight = "10px solid transparent";
        arrow.style.borderBottom = "10px solid #fff";

        statusBox.appendChild(arrow);

        // Position the status box right below the parent element
        const parentRect = parentElement.getBoundingClientRect();
        statusBox.style.left = `${parentRect.left}px`;
        statusBox.style.top = `${parentRect.bottom}px`;
    }
}


