
// Tableau des autoformations avec leurs compétences associées
const formations = [
    { nom: "HTML & CSS", code: "C1" },
    { nom: "JavaScript", code: "C2" },
    { nom: "Bases de données", code: "C3" },
    { nom: "Développement backend", code: "C4" },
    { nom: "Framework Frontend", code: "C5" },
    { nom: "Outils de versioning", code: "C6" },
    { nom: "Tests et qualité", code: "C7" },
    { nom: "Déploiement", code: "C8" }
  ];
  
let question = formations[1]
let repense ="C1"
if(repense === question.code){
  console.log("true");
  }else{
    console.log("false the true answer is"+ question.code);
  }

  console.log(formations[0].code)