Java script 
function calculateResult() {
    const scores = document.querySelectorAll('.score');
    let total = 0;
    let fail = false;

    // Calculate Total and check for individual subject pass (min 35)
    scores.forEach(input => {
        let val = parseFloat(input.value) || 0;
        if (val < 35) fail = true; 
        total += val;
    });

    const percentage = (total / (scores.length * 100)) * 100;
    let grade = "";

    // Grade Logic
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else grade = "D";

    [span_4](start_span)// Update Dashboard[span_4](end_span)
    document.getElementById('displayTotal').innerText = total;
    document.getElementById('displayPercentage').innerText = percentage.toFixed(2);
    document.getElementById('displayGrade').innerText = fail ? "F" : grade;
    
    const statusEl = document.getElementById('displayStatus');
    statusEl.innerText = fail ? "FAILED" : "PASSED";
    statusEl.style.color = fail ? "red" : "green";

    document.getElementById('resultDashboard').classList.remove('hidden');
}