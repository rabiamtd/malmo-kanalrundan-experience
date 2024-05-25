"use strict";

let userMarker = null;

function createMap(mapContainerId, sites) {
    var map = L.map(mapContainerId).setView([55.60544094541752, 12.998602498847754], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const updateLocationButton = L.control({ position: 'bottomright' });
    updateLocationButton.onAdd = function () {
        const div = L.DomUtil.create('div', 'update-location-button');
        div.innerHTML = '<button>Update Location</button>';
        div.firstChild.addEventListener('click', updateLocation);
        return div;
    };
    updateLocationButton.addTo(map);

    launchQModal();

    map.locate({
        setView: false,
        maxZoom: 16,
        timeout: 10000,
        enableHighAccuracy: true
    });

    function onLocationFound(e) {
        const userLatLng = e.latlng;

        if (userMarker) {
            map.removeLayer(userMarker);
        }

        // Calculate initial position for the animation (top of the page)
        const initialPosition = map.containerPointToLatLng([0, 0]);

        // Create the userMarker at the initial position
        userMarker = L.marker(initialPosition).addTo(map);

        // Create a new PosAnimation object
        var animation = new L.PosAnimation();

        // Start the animation to the user's location
        animation.run(userMarker._icon, map.latLngToLayerPoint(userLatLng), 1);

        createQuestionsInModal(userLatLng);
        console.log(userLatLng);
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

    function updateLocation() {
        map.locate({
            setView: false,
            maxZoom: 16,
            timeout: 10000,
            enableHighAccuracy: true
        });

        // Check if userMarker exists
        if (userMarker) {
            // Get current position of userMarker
            var currentPosition = userMarker.getLatLng();

            // Calculate new position for the animation (drop down from the top)
            var newPosition = map.containerPointToLatLng([0, 0]);

            // Create a new PosAnimation object
            var animation = new L.PosAnimation();

            // Start the animation to the new position
            animation.run(userMarker._icon, map.latLngToLayerPoint(newPosition), 1);
        }
    }


    function createQuestionsInModal(userLatLng) {
        document.getElementById("questionProgressContainer").innerHTML = '';

        sites.forEach(site => {
            let modalQuestion = document.createElement("div");
            modalQuestion.innerHTML = '';

            modalQuestion.innerHTML = `
            <div class="site-info-container">
                <h3>Fråga ${site.id}</h3>
                <p>${site.name}</p>
            </div>
            `;
            modalQuestion.classList.add("modal-question-container");

            if (!answeredQuestions.includes(site.id) && site.id === answeredQuestions.length + 1) {
                if (isUserNearSite(site, userLatLng)) {
                    let playIcon = document.createElement("i");
                    playIcon.classList.add("fa-solid", "fa-chevron-right", "status-icon");
                    modalQuestion.appendChild(playIcon);

                    modalQuestion.addEventListener("click", function () {
                        if (typeof createNarrativePage === 'function') {
                            createNarrativePage(site, userLatLng);
                        } else {
                            console.warn('createNarrativePage function is not defined');
                        }
                    });
                } else {
                    let lockIcon = document.createElement("i");
                    lockIcon.classList.add("fa-solid", "fa-lock", "status-icon");
                    modalQuestion.appendChild(lockIcon);
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
                modalQuestion.addEventListener("click", function () {
                    displayStatusBox("Frågan är fortfarande låst. Svara på de tidigare frågorna för låsa upp den.", modalQuestion);
                });
            }

            document.getElementById("questionProgressContainer").append(modalQuestion);
        });
    }
}

// Placeholder function, to be defined in narrative.js
function createNarrativePage(site, userLatLng) {
    console.warn('createNarrativePage function is not defined');
}
