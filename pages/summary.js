function createSummaryPage() {
    const username = localStorage.getItem("username");
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="summaryPageContainer">
            <div class="summaryBoxContainer">
                <h1>MCSP</h1>
                <p class="message">Hej <span style="color:#8ecae6">${username}</span>! Congratulations. You have successfully synchronized with the history of Malmö's canals.</p>
                <p class="message">Your time travel through the canal has revealed the following...</p>
                <button class="mainBtn" id="go-to-results-btn">Show my results</button>
            </div>
        </div>
    `;

    let summaryBoxContainer = document.querySelector(".summaryBoxContainer");

    document.getElementById("go-to-results-btn").addEventListener("click", createResultsPage);

    function createResultsPage() {
        summaryBoxContainer.innerHTML = `
        <h1>Results</h1>
        <div class="summary-container"></div>
        `;

        const summaryContainer = document.querySelector('.summary-container');
        let correctAnswersCount = 0;

        userSelections.forEach(selection => {
            const result = selection.isCorrect ? 'Correct' : 'Incorrect';
            if (selection.isCorrect) {
                correctAnswersCount++;
            }
        });

        const correctPercentage = (correctAnswersCount / totalQuestions) * 100;
        summaryContainer.innerHTML += `
            <p class="message">You answered ${correctPercentage.toFixed(2)}% of the questions correctly. Bra jobbat!</p>
        `;

        const finalMessage = `
            <div class="finalMessageContainer">
                <p class="message">Our journey through Malmö's canals ends here, but the memories remain. Your curiosity has kept Malmö's story alive.</p>
                <p class="message">Thank you for joining me on this adventure <span style="color:#8ecae6">${username}</span>. Until next time, safe travels!</p>
            </div>
    
            <div id="credit-container">
                <p>Made by Rabia Ahmadi</p>
                <p>Crossmedia projekt</p>
                <p>2024</p>
             </div>
        `;

        summaryContainer.innerHTML += finalMessage;
    }
}
