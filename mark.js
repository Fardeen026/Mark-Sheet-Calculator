function calculateGrade() {
    const subject1 = parseFloat(document.getElementById('subject1').value) || 0;
    const subject2 = parseFloat(document.getElementById('subject2').value) || 0;
    const subject3 = parseFloat(document.getElementById('subject3').value) || 0;
    const subject4 = parseFloat(document.getElementById('subject4').value) || 0;
    const subject5 = parseFloat(document.getElementById('subject5').value) || 0;
    const subject6 = parseFloat(document.getElementById('subject6').value) || 0;

    if (subject1 < 0 || subject1 > 100 || subject2 < 0 || subject2 > 100 ||
        subject3 < 0 || subject3 > 100 || subject4 < 0 || subject4 > 100 || 
        subject5 < 0 || subject5 > 100 || subject6 < 0 || subject6 > 100) {
        alert("Please enter valid marks between 0 and 100 for all subjects.");
        return;
    }

    const total = subject1 + subject2 + subject3 + subject4 + subject5 + subject6;
    const Percantage = (total / 6);
    let grade;

    if (Percantage >= 90) {
        grade = 'A';
    } else if (Percantage >= 80) {
        grade = 'B';
    } else if (Percantage >= 70) {
        grade = 'C';
    } else if (Percantage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Total Marks: ${total}<br>Percantage: ${Percantage.toFixed(2)}<br>Grade: ${grade}`;
}
