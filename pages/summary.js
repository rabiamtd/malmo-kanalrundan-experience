function createSummaryPage() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="summaryPageContainer">
            <h1>Results Summary</h1>
            <p>Grattis {användarnamn}! Du har framgångsrikt synkroniserat med Malmös kanalhistoria. Din resa genom kanalens tidslinje har avslöjat följande insikter...</p>
            <div class="summary-container"></div>
        </div>
    `;

    const summaryContainer = document.querySelector('.summary-container');
    let correctAnswersCount = 0;

    userSelections.forEach(selection => {
        const result = selection.isCorrect ? 'Correct' : 'Incorrect';
        summaryContainer.innerHTML += `
            <p>Question ${selection.siteId}: You answered "${selection.selectedAnswer}". This is ${result}.</p>
        `;
        if (selection.isCorrect) {
            correctAnswersCount++;
        }
    });

    const correctPercentage = (correctAnswersCount / totalQuestions) * 100;
    summaryContainer.innerHTML += `
        <p>You answered ${correctPercentage.toFixed(2)}% of questions correctly.</p>
    `;

    console.log(totalQuestions);
}
