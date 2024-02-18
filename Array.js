
    let billetter = [];
    function kjøpbillett(){
    let film = document.getElementById("filmliste").value;
    let antall = document.getElementById("antallinn").value;
    let fornavn = document.getElementById("fornavninn").value;
    let etternavn = document.getElementById("etternavninn").value;
    let telefon = document.getElementById("tlfinn").value;
    let Epost = document.getElementById("Epostinn").value;

    if (!film || !fornavn || !etternavn || !telefon || !Epost){
        if (!fornavn){
            document.getElementById("FornavnError").innerHTML="Fyll inn Fornavn!";
        } else {
            document.getElementById("FornavnError").innerHTML ="";
        }
        if (!etternavn){
            document.getElementById("EtternavnError").innerHTML="Fyll inn Etternavn!";
        } else {
            document.getElementById("EtternavnError").innerHTML ="";
        }
        if (!telefon){
            document.getElementById("TelefonError").innerHTML="Fyll inn Telefonnummer!";
        } else {
            document.getElementById("TelefonError").innerHTML ="";
        }
        if (!Epost){
            document.getElementById("EpostError").innerHTML="Fyll inn Epost!";
        }else {
            document.getElementById("EpostError").innerHTML ="";
        }
    }
    else{
        billetter.push({
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefon: telefon,
            Epost: Epost
        })

        oppdaterTabell();
    }
    }

    function oppdaterTabell(){
    let tabell = document.getElementById("billettTabell")
    let tbody = tabell.querySelector("tbody") || document.createElement("tbody");

    billetter.forEach(billett => {
    let rad = document.createElement("tr");
    rad.innerHTML =`
                <td>${billett.film}</td>
                <td>${billett.antall}</td>
                <td>${billett.fornavn}</td>
                <td>${billett.etternavn}</td>
                <td>${billett.telefon}</td>
                <td>${billett.Epost}</td>`
    ;
    tbody.appendChild(rad);
});
    tabell.appendChild(tbody)

}
    function Slettbillett(){
    billetter = [];
    let tabell = document.getElementById("billettTabell");
    let  tbody = tabell.querySelector("tbody");
    if (tbody){
        tabell.removeChild(tbody);
    }
    oppdaterTabell();
}
