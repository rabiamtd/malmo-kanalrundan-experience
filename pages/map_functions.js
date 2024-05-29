"use strict";

let userMarker = null;
let userLatLng = null;

function createMap(mapContainerId, sites, siteClickHandler) {
    var map = L.map(mapContainerId).setView([55.60544094541752, 12.998602498847754], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const updateLocationButton = L.control({ position: 'bottomright' });
    updateLocationButton.onAdd = function () {
        const div = L.DomUtil.create('div', 'update-location-button');
        const button = document.createElement('button');
        button.innerHTML = '<i class="fa-solid fa-location-crosshairs"></i>';
        button.addEventListener('click', updateLocation);
        div.appendChild(button);
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
        userLatLng = e.latlng;

        if (userMarker) {
            map.removeLayer(userMarker);
        }

        userMarker = L.marker(userLatLng).addTo(map);
        userMarker.setLatLng(userLatLng);

        // Add a popup to the user marker
        userMarker.bindPopup("You are here").openPopup();

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
            color: "#FB8500",
            fillColor: '#f03',
            fillOpacity: 0.1,
            radius: site.radius
        }).addTo(map);
    });

    function isUserNearSite(site, userLatLng) {
        var siteLatLng = L.latLng(site.lat, site.lng);
        var distance = userLatLng.distanceTo(siteLatLng);
        var thresholdDistance = site.radius;
        return distance < thresholdDistance;
    }

    function updateLocation() {
        map.locate({
            setView: false,
            maxZoom: 16,
            timeout: 10000,
            enableHighAccuracy: true
        });

        if (userMarker) {
            var currentPosition = userMarker.getLatLng();
            userMarker.setLatLng(currentPosition);

            if (userLatLng) {
                // Fly to the user's location with a smoother animation
                map.flyTo(userLatLng, 16, {
                    duration: 2, // Duration of the animation in seconds
                    easeLinearity: 0.25 // Easing factor for the animation
                });

                createQuestionsInModal(userLatLng);
            }
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
                        if (typeof siteClickHandler === 'function') {
                            siteClickHandler(site, userLatLng);
                        } else {
                            console.warn('siteClickHandler function is not defined');
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

    // Set max bounds to restrict zooming out further than displayed bounds
    map.setMaxBounds(map.getBounds());
}
