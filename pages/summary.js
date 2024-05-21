"use strict";
// Create summary page
function createSummaryPage() {
    main.innerHTML = `
        <div class="summaryPageContainer">
            <h1>Results Summary</h1>
            <p>Grattis {användarnamn}! Du har framgångsrikt synkroniserat med Malmös kanalhistoria. Din resa genom kanalens tidslinje har avslöjat följande insikter...
            <div class="summary-container"></div>
        </div>
    `;
    console.log(totalQuestions);


    /*function displayQuizResult(questionsAnswered, totalQuestions) {
    const progressBar = document.getElementById("tipsrunda-progress-bar");
    const progressPercentage = (questionsAnswered / totalQuestions) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    }
    
    displayQuizResult(answeredQuestions.length, totalQuestions);*/


}