var billetter = []; //lager arreyet

//setter verdiene til det i input feltet
document.getElementById("submitBtn").addEventListener("click", function() {
    var isValid = true;
    var film = document.getElementById("filmListe").value;
    var fornavn = document.getElementById("fornavn").value;
    var etternavn = document.getElementById("etternavn").value;
    var telefonnr = document.getElementById("telefonnr").value;
    var epost = document.getElementById("epost").value;
    var antall = document.getElementById("antall").value;

    document.getElementById("fornavnError").textContent = '';
    document.getElementById("etternavnError").textContent = '';
    document.getElementById("telefonnrError").textContent = '';
    document.getElementById("epostError").textContent = '';
    document.getElementById("antallError").textContent = '';
    document.getElementById("filmListeError").textContent = '';

    //sjekker at krav er oppfylt

    if (fornavn.trim() === "") {
        document.getElementById("fornavnError").textContent = "Fornavn kan ikke være tomt.";
        isValid = false;
    }

    if (etternavn.trim() === "") {
        document.getElementById("etternavnError").textContent = "Etternavn kan ikke være tomt.";
        isValid = false;
    }

    if (!/^\d{8}$/.test(telefonnr)) {
        document.getElementById("telefonnrError").textContent = "Telefonnummer må være 8 siffer.";
        isValid = false;
    }

    if (!/@/.test(epost)) {
        document.getElementById("epostError").textContent = "Epost må inneholde '@'.";
        isValid = false;
    }

    if (antall.trim() === "" || antall <= 0) {
        document.getElementById("antallError").textContent = "Antall kan ikke være tomt eller mindre enn 1.";
        isValid = false;
    }

    if (film === "Velg film her") {
        document.getElementById("filmListeError").textContent = "Vennligst velg en film.";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    var fulltNavn = film + " " + antall + " " + fornavn + " " + etternavn + " " + telefonnr + " " + epost;
    billetter.push(fulltNavn);
    visBilletter();

    document.getElementById("filmListe").selectedIndex = 0;
    document.getElementById("fornavn").value = '';
    document.getElementById("etternavn").value = '';
    document.getElementById("telefonnr").value = '';
    document.getElementById("epost").value = '';
    document.getElementById("antall").value = 1;
});

document.getElementById("clearBtn").addEventListener("click", function() {
    billetter = []; // nullstiller arrayet
    visBilletter(); // fjerner viste billetter
});

function visBilletter() {
    var listeHTML = "";
    for (var i = 0; i < billetter.length; i++) {
        listeHTML += billetter[i] + "<br>";
    }
    document.getElementById("billettList").innerHTML = listeHTML;
}