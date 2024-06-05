"use strict";

let userSelections = []; // Array to store the user's selections and results
let currentQuestionIndex = 0; // Track the current question number


function createTipsrundaPage(narrativeData, siteId) {
    console.log(siteId);

    console.log(answeredQuestions.length);
    const main = document.querySelector('main');
    main.innerHTML = `
    <div class="tipsrundaPageContainer">
        <div class="tipsrundaContainer"> 
            <h1>Memory Calibration and Synchronization Protocol</h1>
            <p>Question</p>
            <p id="question-progress">${currentQuestionIndex + 1}/${totalQuestions}</p>
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
            const correctAnswer = narrativeData.options[0]; // Store the correct answer before shuffling
            const shuffledOptions = shuffleArray([...narrativeData.options]);

            tipsrundaContainer.innerHTML = `
                <h1>${narrativeData.question}</h1>
            `;

            shuffledOptions.forEach(option => {
                const optionElement = document.createElement('button');
                optionElement.className = 'option-button';
                optionElement.innerText = option;
                optionElement.addEventListener('click', () => handleOptionClick(optionElement, correctAnswer));
                tipsrundaContainer.appendChild(optionElement);
            });
        } else {
            tipsrundaContainer.innerHTML = "<p>Narrative not found for this site.</p>";
            return null;
        }

        function handleOptionClick(selectedElement, correctAnswer) {
            const options = document.querySelectorAll('.option-button');
            options.forEach(option => {
                option.classList.remove('selected');
            });

            selectedElement.classList.add('selected');
            document.getElementById('saveBtn').disabled = false;

            // Store the selection result
            const existingSelectionIndex = userSelections.findIndex(selection => selection.siteId === siteId);
            const selectionData = {
                siteId: siteId,
                selectedAnswer: selectedElement.innerText,
                isCorrect: selectedElement.innerText === correctAnswer
            };

            if (existingSelectionIndex >= 0) {
                userSelections[existingSelectionIndex] = selectionData;
            } else {
                userSelections.push(selectionData);
            }
        }
    }

    // Update the button text based on whether it's the last question
    const saveBtn = document.getElementById('saveBtn');
    if (answeredQuestions.length === totalQuestions - 1) {
        saveBtn.textContent = "Save and exit tipsrunda";
    } else {
        saveBtn.textContent = "Save and return to map";
    }

    /*if (answeredQuestions.length === 1) {
        saveBtn.textContent = "Save and exit tipsrunda";
    } else {
        saveBtn.textContent = "Save and return to map";
    }*/

    saveBtn.addEventListener('click', handleSave);

    function handleSave() {
        const selectedOption = document.querySelector('.option-button.selected').innerText;

        if (!answeredQuestions.includes(siteId)) {
            answeredQuestions.push(siteId);
            localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
            currentQuestionIndex++;
            updateProgressBar(currentQuestionIndex, totalQuestions);
            updateQuestionProgress(currentQuestionIndex, totalQuestions);

        }

        if (answeredQuestions.length === totalQuestions) {
            createSummaryPage();
        } else {
            createUpdatedMapPage(sites);
        }

        /*if (answeredQuestions.length === 2) {
            createSummaryPage();
        } else {
            createUpdatedMapPage(sites);
        }*/

        saveBtn.disabled = true;
    }

    function createUpdatedMapPage(sites) {
        const main = document.querySelector('main');
        main.innerHTML = `
        <div id="mapPageContainer">
            <div class="modal-container">
                <div class="modal-contentBox">
                    <h1 class="title">Questions</h1>
                    <div id="questionProgressContainer"></div>
                    <button class="mainBtn" id="saveClose-button">Close</button>
                    <div id="close-button">X</div>
                </div>
            </div>

            <div id="Qbtn-container">
                <button class="mainBtn modal-button" id="mainBtn">Questions</button>
            </div>

            <div id="map"></div>   
        </div>
        `;

        createMap("map", sites, handleSiteClick);
    }


    function updateProgressBar(currentQuestionIndex, totalQuestions) {
        const progressBar = document.getElementById("tipsrunda-progress-bar");
        const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    function updateQuestionProgress(currentQuestionIndex, totalQuestions) {
        const questionProgress = document.getElementById("question-progress");
        questionProgress.textContent = `${currentQuestionIndex + 1}/${totalQuestions}`;
    }

    updateProgressBar(currentQuestionIndex, totalQuestions);
    updateQuestionProgress(currentQuestionIndex, totalQuestions);
}
