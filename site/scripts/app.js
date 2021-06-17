function resetForm() {
    document.getElementById("myForm").reset();
}

function getNeeded() {
    let gradeScale = getGradeScale();
    let gradeLabels = getGradeLabels();
    let grade1 = parseFloat(document.getElementById('txtFirstGrade').value) || 91;
    let grade2 = parseFloat(document.getElementById('txtSecondGrade').value) || 89;
    let examWeight = parseInt(document.getElementById('ddExamWeight').value) / 100;
    let gWeight = (1 - examWeight);

    gradeScale.forEach((grade, i) => {
        let goalGrade = Math.round(((grade - (((grade1 + grade2) / 2) * gWeight)) / examWeight) * 10) / 10;
        let hold = 'holder' + i;
        if (goalGrade < 110 && goalGrade > 0) {
            document.getElementById(hold).innerHTML = goalGrade;
        } else {
            document.getElementById(hold).innerHTML = "---";
        } 
    });

    gradeLabels.forEach((label, i) => {
        document.getElementById("scale" + i).innerHTML = label;
    });

    document.getElementById('standard-grade-table').style.display = 'block';
    document.getElementById('standard-grade-table').scrollIntoView();

}

function getGradeScale() {
    if (document.getElementById("cbTenPointScale").checked === true) {
        return gradeScale = [89.5, 79.5, 69.5, 59.5];
    } else {
        return gradeScale = [92.5, 84.5, 74.5, 66.5];
    }

}

function getGradeLabels() {
    if (document.getElementById("cbTenPointScale").checked === true) {
        return gradeLabels = ["(100 - 90)", "(89 - 80)", "(79 - 70)", "(69 - 60)"];
    } else {
        return gradeLabels = ["(100 - 93)", "(92 - 85)", "(84 - 75)", "(74 - 67)"];
    }

}

