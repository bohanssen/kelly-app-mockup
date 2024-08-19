var competences = [];

async function load_competences(){
    var data = await fetch('/data/competences_nl.json');
    data = await data.text();
    competences = JSON.parse(data);
    console.log(competences);
}
load_competences();