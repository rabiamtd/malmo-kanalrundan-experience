"use strict";
// Create summary page
function createSummaryPage() {
    main.innerHTML = `
        <div class="summaryPageContainer">
            <h1>Results Summary</h1>
            <div class="summary-container">
                ${siteNarrativesAndQuestions.map((site, index) => `
                    <div class="site-summary">
                        <h2>Site ${site.id}</h2>
                        <div class="question-summary">
                            <p><strong>Question:</strong> ${site.tipsrundaQuestion.question}</p>
                            <p><strong>Selected Answer:</strong> ${site.tipsrundaQuestion.options[0]}</p> <!-- Assuming correct answer is always the first option -->
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}