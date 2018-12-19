var SUJET_JE = "Que je";
    SUJET_TU = "Que tu";
    SUJET_IL = "Qu'il";
    SUJET_ELLE = "Qu'elle";
    SUJET_ON = "Qu'on";
    SUJET_NOUS = "Que nous";
    SUJET_VOUS = "Que vous";
    SUJET_ILS = "Qu'ils";
    SUJET_ELLES = "Qu'elles";

function entier_aleatoire(max) {
     return Math.floor(Math.random() * Math.floor(max));
}

function sujet_aleatoire() {
    switch (entier_aleatoire(9)) {
        case 0: return SUJET_JE;
        case 1: return SUJET_TU;
        case 2: return SUJET_IL;
        case 3: return SUJET_ELLE;
        case 4: return SUJET_ON;
        case 5: return SUJET_NOUS;
        case 6: return SUJET_VOUS;
        case 7: return SUJET_ILS;
        case 8: return SUJET_ELLES;
    }
}
function verbe_aleatoire() {
    switch (entier_aleatoire(21)) {
        case 0: return "avoir";
        case 1: return "boire";
        case 2: return "devoir";
        case 3: return "dire";
        case 4: return "disparaître"
        case 5: return "écrire";
        case 6: return "être";
        case 7: return "faire";
        case 8: return "lire";
        case 9: return "mettre";
        case 10: return "ouvrir";
        case 11: return "pouvoir";
        case 12: return "prendre";
        case 13: return "recevoir";
        case 14: return "savoir";
        case 15: return "vivre";
        case 16: return "voir";
        case 17: return "vouloir";
        case 18: return "réveiller";
        case 19: return "parler";
        case 20: return "aller";
    }
}

function terminaison_subj(sujet) {
    switch (sujet) {
        case SUJET_JE: return "e";
        case SUJET_TU: return "es";
        case SUJET_IL:
        case SUJET_ELLE:
        case SUJET_ON:
            return "e";
        case SUJET_NOUS: return "ions";
        case SUJET_VOUS: return "iez";
        case SUJET_ILS:
        case SUJET_ELLES:
            return "ent";
    }
}

function racine_subj(verbe) {
    switch (verbe) {
        case "avoir": return "ai";
        case "boire": return "boiv";
        case "devoir": return "doiv";
        case "dire": return "dis";
        case "disparaître": return "disparaiss";
        case "écrire": return "écriv";
        case "être": location.reload();
        case "faire": return "fass";
        case "lire": return "lis";
        case "mettre": return "mett";
        case "ouvrir": return "ouvr";
        case "pouvoir": return "puiss";
        case "prendre": return "prenn";
        case "recevoir": return "reçoiv";
        case "savoir": return "sach";
        case "vivre": return "viv";
        case "voir": return "voi";
        case "vouloir": return "veuill";
        case "réveiller": return "réveill";
        case "parler": return "parl";
        case "aller": return "aill";
    }
}
function racine_imparfait_pour_subj(verbe) {
    switch (verbe) {
        case "avoir": location.reload();
        case "boire": return "buv";
        case "devoir": return "dev";
        case "dire": return "dis";
        case "disparaître": return "disparaiss";
        case "écrire": return "écriv";
        case "être": location.reload();
        case "faire": return "fass";
        case "lire": return "lis";
        case "mettre": return "mett";
        case "ouvrir": return "ouvr";
        case "pouvoir": return "puiss";
        case "prendre": return "pren";
        case "recevoir": return "recev";
        case "savoir": return "sach";
        case "vivre": return "viv";
        case "voir": return "voy";
        case "vouloir": return "voul";
        case "réveiller": return "réveill";
        case "parler": return "parl";
        case "aller": return "all";
    }
}

function subj_avoir(sujet) {
    switch (sujet) {
		case SUJET_JE: return "aie";
		case SUJET_TU: return "aies";
		case SUJET_IL: return "ait";
		case SUJET_ELLE: return "ait";
		case SUJET_ON: return "ait";
		case SUJET_NOUS: return "ayons";
		case SUJET_VOUS: return "ayez";
		case SUJET_ILS: return "aient";
		case SUJET_ELLES: return "aient";
    }
}
function subj_etre(sujet) {
    switch (sujet) {
		case SUJET_JE: return "sois";
		case SUJET_TU: return "sois";
		case SUJET_IL: return "soit";
		case SUJET_ELLE: return "soit";
		case SUJET_ON: return "soit";
		case SUJET_NOUS: return "soyons";
		case SUJET_VOUS: return "soyez";
		case SUJET_ILS: return "soient";
		case SUJET_ELLES: return "soient";
    }
}

console.log("Starting.")

var question_out = document.getElementById("question-out"),
    response_in = document.getElementById("response-in"),
    feedback_out = document.getElementById("feedback-out");

response_in.onkeyup = function(event) {
    if (event.key === "Enter") {
        check_answer();
    }
};

var reponse_correcte;

function generate_question() {
    response_in.value = "";
    
    var sujet = sujet_aleatoire(),
        verbe = verbe_aleatoire();
    
    if (verbe == "avoir") {
        reponse_correcte = subj_avoir(sujet);
    } else if (verbe == "être") {
        reponse_correcte = subj_etre(sujet);
    } else {
        if (sujet == SUJET_NOUS || sujet == SUJET_VOUS) {
            reponse_correcte = racine_imparfait_pour_subj(verbe);
        } else {
            reponse_correcte = racine_subj(verbe);
        }
        
        reponse_correcte += terminaison_subj(sujet);
    }
    
    question_out.innerHTML = sujet + " (" + verbe + ") ";
}

function check_answer() {
    if (response_in.value == reponse_correcte) {
        feedback_out.innerHTML = "C'est correct!";
        generate_question();
    } else {
        feedback_out.innerHTML = "Erroné…";
    }
}

generate_question();
