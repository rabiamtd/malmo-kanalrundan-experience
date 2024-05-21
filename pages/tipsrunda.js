"use strict";


function createTipsrundaPage(narrativeData, siteId) {
    const main = document.querySelector('main');
    main.innerHTML = `
    <div class="tipsrundaPageContainer">
    <h1>Malmö Kanalrundan</h1>
    <p>Frågor</p>
    <p>${answeredQuestions.length}/${totalQuestions}</p>
        <div class="tipsrundaContainer"> 
            <div id="tipsrunda-progress-bar-container">
                <div id="tipsrunda-progress-bar"></div>
            </div>
            <div id="tipsrunda-questions-container"></div>
            <button class="mainBtn" id="saveBtn" disabled></button>
        </div>
    </div>
    `;

    displayTipsrundaQuestion(narrativeData);

    function displayTipsrundaQuestion(narrativeData) {
        const tipsrundaContainer = document.getElementById("tipsrunda-questions-container");

        if (narrativeData) {
            const shuffledOptions = shuffleArray([...narrativeData.options]);

            tipsrundaContainer.innerHTML = `
                <h1>${narrativeData.question}</h1>
            `;

            shuffledOptions.forEach(option => {
                const optionElement = document.createElement('button');
                optionElement.className = 'option-button';
                optionElement.innerText = option;
                optionElement.addEventListener('click', () => handleOptionClick(optionElement));
                tipsrundaContainer.appendChild(optionElement);
            });
        } else {
            tipsrundaContainer.innerHTML = "<p>Narrative not found for this site.</p>";
            return null;
        }

        function handleOptionClick(selectedElement) {
            const options = document.querySelectorAll('.option-button');
            options.forEach(option => {
                option.classList.remove('selected');
            });

            selectedElement.classList.add('selected');
            document.getElementById('saveBtn').disabled = false;
        }
    }

    // Update the button text based on whether it's the last question
    const saveBtn = document.getElementById('saveBtn');
    //const remainingQuestions = totalQuestions - answeredQuestions.length;
    //  if (remainingQuestions === 0) { // maybe 1, if not saved yet?

    if (answeredQuestions.length === 1) {
        saveBtn.textContent = "Save and exit tipsrunda";
    } else {
        saveBtn.textContent = "Save and return to map";
    }

    // Add event listener to the "Save" button
    saveBtn.addEventListener('click', handleSave);

    function handleSave() {
        const selectedOption = document.querySelector('.option-button.selected').innerText;

        if (!answeredQuestions.includes(siteId)) {
            answeredQuestions.push(siteId);
            localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
            updateProgressBar(answeredQuestions.length, totalQuestions);
        }

        // if (remainingQuestions === 0) {
        if (answeredQuestions.length === 2) {
            createSummaryPage();
        } else {
            createUpdatedMapPage();
        }

        // Disable the save button after saving
        saveBtn.disabled = true;

    }


    function createUpdatedMapPage() {
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

        createMap("map", sites);
    }


    function updateProgressBar(questionsAnswered, totalQuestions) {
        const progressBar = document.getElementById("tipsrunda-progress-bar");
        const progressPercentage = (questionsAnswered / totalQuestions) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    updateProgressBar(answeredQuestions.length, totalQuestions);
}
