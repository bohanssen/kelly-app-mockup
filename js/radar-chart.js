
var radarChart = null;

function draw_competence_chart(profile,functions, profileChartMode){
    var competenceCanvas = document.getElementById("competenceChart");
    let fc = profileChartMode == 'current' ? profile.functionCode : profile.careerDevelopmentGoal;
    let job = functions[fc];

    let labels = [];
    labels = labels.concat(Object.keys(job.competences).filter(competence => !labels.includes(competence) && job.competences[competence] != 0));
    labels = labels.concat(Object.keys(profile.competences).filter(competence => !labels.includes(competence) && profile.competences[competence] != 0));

    let personCompetences = [];

    var compentenceData = {
        labels: labels,
        datasets: [{
            label: profile.name,
            backgroundColor: "rgba(200,0,0,0.2)",
            data: labels.map(competence => competence in profile.competences ? profile.competences[competence] : 0)
            }, {
            label: job.functionFamily + " " + job.level,
            backgroundColor: "rgba(0,0,200,0.2)",
            data: labels.map(competence => competence in job.competences ? job.competences[competence] : 0)
        }]
    };

    var options = {
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 4,
                ticks: {
                beginAtZero: true,
                                                callback: function (value) { if (Number.isInteger(value)) { return value; } },
                                                stepSize: 1
                }
            }
        }
    };

    if (radarChart){
        radarChart.destroy();
    }
    radarChart = new Chart(competenceCanvas, {
        type: 'radar',
        data: compentenceData,
        options: options
    });
}

var jobChart = null;
function draw_job_chart(levels){
    var jobCanvas = document.getElementById("jobChart");
    let labels = [];
    levels.forEach(level => {
        labels = labels.concat(Object.keys(level.competences).filter(competence => !labels.includes(competence) && level.competences[competence] != 0));
    });

    let personCompetences = [];
    let datasets = levels.map(level => { return {
        label: level.key,
        data: labels.map(competence => competence in level.competences ? level.competences[competence] : 0)
    }});
    var jobData = {
        labels: labels,
        datasets: datasets
    };

    var options = {
        scales: {
            r: {
                    suggestedMin: 0,
                    suggestedMax: 4,
                    ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (Number.isInteger(value)) { return value; } },
                    stepSize: 1
                }
            }
        }
    };

    if (jobChart){
        jobChart.destroy();
    }
    console.log(jobData);
    jobChart = new Chart(jobCanvas, {
        type: 'radar',
        data: jobData,
        options: options
    });
    console.log(jobChart);
}