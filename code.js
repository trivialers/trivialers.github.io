function play() {
    let element = document.getElementById("play");
    element.remove();
    let gioco = document.getElementById("gioco");
    gioco.style.filter = "none";
    gameplay();
}

let insert, nomiGiocatori, flip, nuovoGioco;
function gameplay(){
    let id_possibili = [];
	let skipMove = true;
	let again = false;
    let numeroGiocatori=0;
	let giocatore = 0;
    let players=[];

	function clickElementi(){
		$(document).ready(function () {
            $("#Ellipse_1").click(function () {
				posizione("Ellipse_1", "sport_hobby");
			});
            $("#Ellipse_2").click(function () {
				posizione("Ellipse_2", "ritira");
			});
			$("#Ellipse_3").click(function () {
				posizione("Ellipse_3", "geografia");
			});
			$("#Ellipse_4").click(function () {
				posizione("Ellipse_4", "intrattenimento");
			});
			$("#Ellipse_5").click(function () {
				posizione("Ellipse_5", "ritira");
			});
			$("#Ellipse_6").click(function () {
				posizione("Ellipse_6", "storia");
			});
            $("#Polygon_3").click(function () {
				posizione("Ellipse_7", "art_letter", true);
			});
			$("#Ellipse_7").click(function () {
				posizione("Ellipse_7", "art_letter", true);
			});
            $("#Ellipse_8").click(function () {
				posizione("Ellipse_8", "storia");
			});
			$("#Ellipse_9").click(function () {
				posizione("Ellipse_9", "ritira");
			});
			$("#Ellipse_10").click(function () {
				posizione("Ellipse_10", "sport_hobby");
			});
			$("#Ellipse_11").click(function () {
				posizione("Ellipse_11", "nat_scienza");
			});
            $("#Ellipse_12").click(function () {
				posizione("Ellipse_12", "ritira");
			});
			$("#Ellipse_13").click(function () {
				posizione("Ellipse_13", "intrattenimento");
			});
			$("#Polygon_2").click(function () {
				posizione("Ellipse_14", "geografia", true);
			});
			$("#Ellipse_14").click(function () {
				posizione("Ellipse_14", "geografia", true);
			});
            $("#Ellipse_15").click(function () {
				posizione("Ellipse_15", "intrattenimento");
			});
			$("#Ellipse_16").click(function () {
				posizione("Ellipse_16", "ritira");
			});
			$("#Ellipse_17").click(function () {
				posizione("Ellipse_17", "storia");
			});
			$("#Ellipse_18").click(function () {
				posizione("Ellipse_18", "art_letter");
			});
			$("#Ellipse_19").click(function () {
				posizione("Ellipse_19", "ritira");
			});
			$("#Ellipse_20").click(function () {
				posizione("Ellipse_20", "nat_scienza");
			});
			$("#Polygon_1").click(function () {
				posizione("Ellipse_21", "sport_hobby", true);
			});
			$("#Ellipse_21").click(function () {
				posizione("Ellipse_21", "sport_hobby", true);
			});
            $("#Ellipse_22").click(function () {
				posizione("Ellipse_22", "nat_scienza");
			});
			$("#Ellipse_23").click(function () {
				posizione("Ellipse_23", "ritira");
			});
			$("#Ellipse_24").click(function () {
				posizione("Ellipse_24", "intrattenimento");
			});
			$("#Ellipse_25").click(function () {
				posizione("Ellipse_25", "geografia");
			});
			$("#Ellipse_26").click(function () {
				posizione("Ellipse_26", "ritira");
			});
			$("#Ellipse_27").click(function () {
				posizione("Ellipse_27", "art_letter");
			});
			$("#Polygon_6").click(function () {
				posizione("Ellipse_28", "storia", true);
			});
			$("#Ellipse_28").click(function () {
				posizione("Ellipse_28", "storia", true);
			});
            $("#Ellipse_29").click(function () {
				posizione("Ellipse_29", "art_letter");
			});
			$("#Ellipse_30").click(function () {
				posizione("Ellipse_30", "ritira");
			});
			$("#Ellipse_31").click(function () {
				posizione("Ellipse_31", "nat_scienza");
			});
			$("#Ellipse_32").click(function () {
				posizione("Ellipse_32", "sport_hobby");
			});
			$("#Ellipse_33").click(function () {
				posizione("Ellipse_33", "ritira");
			});
			$("#Ellipse_34").click(function () {
				posizione("Ellipse_34", "geografia");
			});
			$("#Polygon_5").click(function () {
				posizione("Ellipse_35", "intrattenimento", true);
			});
			$("#Ellipse_35").click(function () {
				posizione("Ellipse_35", "intrattenimento", true);
			});
            $("#Ellipse_36").click(function () {
				posizione("Ellipse_36", "geografia");
			});
			$("#Ellipse_37").click(function () {
				posizione("Ellipse_37", "ritira");
			});
			$("#Ellipse_38").click(function () {
				posizione("Ellipse_38", "art_letter");
			});
			$("#Ellipse_39").click(function () {
				posizione("Ellipse_39", "storia");
			});
			$("#Ellipse_40").click(function () {
				posizione("Ellipse_40", "ritira");
			});
			$("#Ellipse_41").click(function () {
				posizione("Ellipse_41", "sport_hobby");
			});
			$("#Polygon_4").click(function () {
				posizione("Ellipse_42", "nat_scienza", true);
			});
			$("#Ellipse_42").click(function () {
				posizione("Ellipse_42", "nat_scienza", true);
			});
			$("#esagono").click(function () {
				posizione("esagono", "ritira");
			});
			$("#centro").click(function () {
				posizione("esagono", "ritira");
			});
			$("#Ellipse_21_1").click(function () {
				posizione("Ellipse_21_1", "geografia");
			});
			$("#Ellipse_21_2").click(function () {
				posizione("Ellipse_21_2", "storia");
			});
			$("#Ellipse_21_3").click(function () {
				posizione("Ellipse_21_3", "intrattenimento");
			});
			$("#Ellipse_21_4").click(function () {
				posizione("Ellipse_21_4", "art_letter");
			});
			$("#Ellipse_21_5").click(function () {
				posizione("Ellipse_21_5", "nat_scienza");
			});
			$("#Ellipse_42_5").click(function () {
				posizione("Ellipse_42_5", "sport_hobby");
			});
			$("#Ellipse_42_4").click(function () {
				posizione("Ellipse_42_4", "storia");
			});
			$("#Ellipse_42_3").click(function () {
				posizione("Ellipse_42_3", "geografia");
			});
			$("#Ellipse_42_2").click(function () {
				posizione("Ellipse_42_2", "art_letter");
			});
			$("#Ellipse_42_1").click(function () {
				posizione("Ellipse_42_1", "intrattenimento");
			});
			$("#Ellipse_14_1").click(function () {
				posizione("Ellipse_14_1", "art_letter");
			});
			$("#Ellipse_14_2").click(function () {
				posizione("Ellipse_14_2", "sport_hobby");
			});
			$("#Ellipse_14_3").click(function () {
				posizione("Ellipse_14_3", "storia");
			});
			$("#Ellipse_14_4").click(function () {
				posizione("Ellipse_14_4", "nat_scienza");
			});
			$("#Ellipse_14_5").click(function () {
				posizione("Ellipse_14_5", "intrattenimento");
			});
			$("#Ellipse_35_5").click(function () {
				posizione("Ellipse_35_5", "geografia");
			});
			$("#Ellipse_35_4").click(function () {
				posizione("Ellipse_35_4", "sport_hobby");
			});
			$("#Ellipse_35_3").click(function () {
				posizione("Ellipse_35_3", "art_letter");
			});
			$("#Ellipse_35_2").click(function () {
				posizione("Ellipse_35_2", "nat_scienza");
			});
			$("#Ellipse_35_1").click(function () {
				posizione("Ellipse_35_1", "storia");
			});
			$("#Ellipse_28_1").click(function () {
				posizione("Ellipse_28_1", "sport_hobby");
			});
			$("#Ellipse_28_2").click(function () {
				posizione("Ellipse_28_2", "intrattenimento");
			});
			$("#Ellipse_28_3").click(function () {
				posizione("Ellipse_28_3", "nat_scienza");
			});
			$("#Ellipse_28_4").click(function () {
				posizione("Ellipse_28_4", "geografia");
			});
			$("#Ellipse_28_5").click(function () {
				posizione("Ellipse_28_5", "art_letter");
			});
			$("#Ellipse_7_5").click(function () {
				posizione("Ellipse_7_5", "storia");
			});
			$("#Ellipse_7_4").click(function () {
				posizione("Ellipse_7_4", "intrattenimento");
			});
			$("#Ellipse_7_3").click(function () {
				posizione("Ellipse_7_3", "sport_hobby");
			});
			$("#Ellipse_7_2").click(function () {
				posizione("Ellipse_7_2", "geografia");
			});
			$("#Ellipse_7_1").click(function () {
				posizione("Ellipse_7_1", "nat_scienza");
			});
		});
	}
    
    let dadoy = 1800, dadox = 1080;
    
	function lanciaDado(){
		let cube = document.getElementById("cube");
		cube.onclick = function (){
			let random = Math.ceil(Math.random()*6);
			let X=0, Y=0, Z=0;
			switch (random){
				case 1:
					X = 0;
					Y = 0;
					break;
				case 2:
					X = 0;
					Y = 90;
					break;
				case 3:
					X = 90;
					Y = 0;
					break;
				case 4:
					X = -90;
					Y = 0;
					break;
				case 5:
					X = 0;
					Y = -90;
					break;
				case 6:
					X = 0;
					Y = 180;
					break;
			}
			dadox += 1800;
			dadoy += 1080;
			Y = Y + dadoy;
			X = X + dadox;
            cube.onclick="";
			cube.style.transform = "rotateX(" + X + "deg) " + "rotateY(" + Y + "deg)";
            previsione(random, players[giocatore].id_casella, players[giocatore].id_casella);
            console.log(id_possibili);
			setTimeout(function(){
				skipMove= false;
			}, 5000);
		}
	}
	
    function previsione(mosse, id_attuale, id_passato){
        let id_futuro="";
        if (mosse==0){
            id_possibili.push(id_attuale);
        }
        else if (id_attuale=="esagono"){
            for (let i=1; i<=6; i++){
                id_futuro="Ellipse_"+(i*7)+"_1";
                if (id_futuro != id_passato){
                    previsione(mosse-1, id_futuro, id_attuale);
                }
            }
        }
        else {
            let id_diviso = id_attuale.split("_");
            id_diviso[1]= Number(id_diviso[1]);
            if (id_diviso[1] % 7 ==0 && id_diviso.length==2){
                id_futuro = "Ellipse_"+(id_diviso[1]+1);
                if (id_futuro != id_passato){
                    previsione(mosse-1, id_futuro, id_attuale);
                }
                id_futuro = "Ellipse_"+(id_diviso[1]-1);
                if (id_futuro != id_passato){
                    previsione(mosse-1, id_futuro, id_attuale);
                }
                id_futuro = "Ellipse_"+id_diviso[1]+"_5";
                if (id_futuro != id_passato){
                    previsione(mosse-1, id_futuro, id_attuale);
                }
            }
            else if (id_diviso.length==3){
                id_diviso[2]= Number(id_diviso[2]);
                id_futuro = "Ellipse_"+id_diviso[1]+"_"+(id_diviso[2]+1);
                if(id_diviso[2]==5){
                    id_futuro = "Ellipse_"+id_diviso[1];
                }
                if (id_futuro != id_passato){
                    previsione(mosse-1, id_futuro, id_attuale);
                }
                id_futuro = "Ellipse_"+id_diviso[1]+"_"+(id_diviso[2]-1);
                if(id_diviso[2]==1){
                    id_futuro = "esagono";
                }
                if (id_futuro != id_passato){
                    previsione(mosse-1, id_futuro, id_attuale);
                }
            }
            else {
                id_futuro = "Ellipse_"+(id_diviso[1]+1);
                if (id_futuro != id_passato){
                    previsione(mosse-1, id_futuro, id_attuale);
                }
                id_futuro = "Ellipse_"+(id_diviso[1]-1);
                if (id_futuro != id_passato){
                    previsione(mosse-1, id_futuro, id_attuale);
                }
            }
        }
    }

	function posizione(id, materia, triangolo = false) {
	    let pedina = document.getElementById(players[giocatore].id_pedina);
	    let dimensioni = pedina.getBoundingClientRect();
	    let indirizzo = document.getElementById(id);
	    let posizione = indirizzo.getBoundingClientRect();
	    if (!skipMove) {
	        if (id_possibili.includes(id)) {
	            skipMove = true;
	            players[giocatore].id_casella = id;
	            id_possibili = [];
	            setTimeout(function () {
	                pedina.style.top = (posizione.top - (dimensioni.height / 2) + (posizione.height / 2) + window.pageYOffset) + "px";
	                pedina.style.left = (posizione.left - (dimensioni.width / 2) + (posizione.width / 2) + window.pageXOffset) + "px";
	                setTimeout(function () {
	                    if (materia == "ritira") {
	                        turno();
	                    } else {
	                        carta(materia, triangolo);
	                    }
	                }, 300);
	            }, 1000);
	        }
	    }
	}
    
    function carta(materia, triangolo) {
        
        const storia = [
            {
                domanda: "Chi &#232; il padre degli dei?",
                r_corretta: "Zeus",
                opzioni: ["Ares", "Ade", "Zeus", "Apollo"]
            }, {
                domanda: "Come fu ucciso Robespierre?",
                r_corretta: "ghigliottinato",
                opzioni: ["impiccato", "assassinata", "ghigliottinato", "pugnalato"]
            }, {
                domanda: "Quali sono stati i maggiori esponenti della Riforma Protestante?",
                r_corretta: "Lutero e Calvino",
                opzioni: ["Mandela e Madre Teresa", "Boccaccio e Machiavelli", "Lutero e Calvino", "Montesquieu e Rosseau"]
            }, {
                domanda: "Chi diede inizio alla costruzione del colosseo?",
                r_corretta: "Tito Flavio Vespasiano",
                opzioni: ["Caio Giulio Cesare", "Diocleziano", "Nerone", "Tito Flavio Vespasiano"]
            }, {
                domanda: "Dove viveva il popolo Inca?",
                r_corretta: "Peru",
                opzioni: ["Messico", "Peru", "Brasile", "India"]
            }, {
                domanda: "In che giorno &#232; avvenuto sbarco in Normandia?",
                r_corretta: "6 giugno 1944",
                opzioni: ["6 giugno 1944", "7 giugno 1944", "6 giugno 1947", "7 giugno 1947"]
            }, {
                domanda: "In che giorno &#232; stata fondata la Repubblica italiana?",
                r_corretta: "2 giugno 1946",
                opzioni: ["2 giugno 1946", "2 giugno 1947", "2 giugno 1948", "2 giugno 1949"]
            }, {
                domanda: "Chi fu il primo presidente italiano?",
                r_corretta: "Enrico De Nicola",
                opzioni: ["Luigi Einaudi", "Enrico De Nicola", "Giovanni Grochi", "Antonio Segni"]
            }, {
                domanda: "Di quale paese erano originari gli aragonesi?",
                r_corretta: "Spagna",
                opzioni: ["Francia", "Austria", "Germania", "Spagna"]
            }, {
                domanda: "Cosa accade il 14 agosto 2018 in Italia?",
                r_corretta: "crolla il ponte Morandi",
                opzioni: ["Presidente dimesso", "elezione Presidente", "crolla il ponte Morandi", " terremoto di magnitudo 6"]
            }, {
                domanda: "In quale data si scopre l&#39;America?",
                r_corretta: "12 Ottobre 1492",
                opzioni: ["12 Ottobre 1491", "12 Ottobre 1492", "12 Ottobre 1493", "12 Ottobre 1494"]
            },{
                domanda: "Chi era il presidente americano nel 2018?",
                r_corretta: "Donald Trump",
                opzioni: ["Donald Duck", "Donald Trump", "Barack Obama", "George Bush"]
            }, {
                domanda: "Cosa conquist&#232; Giulio Cesare?",
                r_corretta: "Gallia",
                opzioni: ["Sicilia", "Russia", "Australia", "Gallia"]
            }, {
                domanda: "Quando entro l&#39;Italia nella prima guerra mondiale?",
                r_corretta: "1915",
                opzioni: ["1914", "1915", "1916", "1917"]
            }, {
                domanda: "Come si chiama questo simbolo &#8356;?",
                r_corretta: "sterlina",
                opzioni: ["euro", "sterlina", "dollaro", "yuan"]
            }, {
                domanda: "Per Illuminismo cosa si intende?",
                r_corretta: "diffondere i lumi della ragione",
                opzioni: ["illuminare la citt&#224;", "risparmiare sulla luce", "abbassare il prezzo delle lampade", "diffondere i lumi della ragione"]
            }, {
                domanda: "Quale citt&#224; venne divisa da un muro?",
                r_corretta: "Berlino",
                opzioni: ["New York", "Milano", "Berlino", "Nessuna &#232; corretta"]
            }, {
                domanda: "Quale filosofo mor&#236; avvelenato con la cicuta?",
                r_corretta: "Socrate",
                opzioni: ["Socrate", "Platone", "Aristotele", "Eraclito"]
            }, {
                domanda: "Chi furono i quattro imperatori della dinastia Giulio-Claudia?",
                r_corretta: "Tiberio Caligola Claudio Nerone",
                opzioni: ["Tiberio Caligola Brione Nerone", "Comodo Caligola Claudio Nerone", "Tito Domiziano Traiano Nerone", "Tiberio Caligola Claudio Nerone"]
            }, {
                domanda: "Nell&#39;Antico Egitto che tecnica si utilizza per la sepoltura dei Faraoni?",
                r_corretta: "mummificazione",
                opzioni: ["cremazione", "in pasto ai cani", "purificazione", "mummificazione"]
            }, {
                domanda: "Chi ha scritto le 95 tesi che diedero inizio alla Riforma Protestante?",
                r_corretta: "Martin Lutero",
                opzioni: ["Immanuel Kant", "Thomas More", "Martin Lutero", "Giacomo Leopardi"]
            }, {
                domanda: "Quando l&#39; Italia ha preso parte alla prima guerra mondiale a chi dichiara guerra?",
                r_corretta: "Austria-Ungheria",
                opzioni: ["Francia", "Austria-Ungheria", "Belgio", "Germania"]
            }, {
                domanda: "Come &#232; stato ucciso Giulio Cesare?",
                r_corretta: "pugnalato",
                opzioni: ["picchiato a sangue", "ucciso da un infarto", "pugnalato", "&#232; ancora vivo"]
            }, {
                domanda: "Dove sbarcano gli Alleati il 22 gennaio 1944 ?",
                r_corretta: "Ad Anzio",
                opzioni: ["Ad Anzio", "A Marsala", "A Trieste", "A Quarto"]
            }, {
                domanda: "Di quale giornale fu direttore Mussolini?",
                r_corretta: "Avanti",
                opzioni: ["La Repubblica", "Il fatto quotidiano", "Avanti", "Non &#232; mai stato direttore di alcun giornale"]
            }, {
                domanda: "In che anno il governo Giolitti diede le dimissioni dopo l&#39;uscita dei radicali?",
                r_corretta: "1914",
                opzioni: ["1913", "1914", "1915", "1916"]
            }, {
                domanda: "In seguito a cosa inizi&#242; la Seconda Guerra Mondiale?",
                r_corretta: "invasione della Polonia",
                opzioni: ["invasione della Francia", "invasione della Polonia", "invasione dell&#39;Inghilterra","Nessuna delle risposte precendenti"]
            }, {
                domanda: "Il sindacato dei lavoratori italiani fondato nel 1906 si chiamava:",
                r_corretta: "Confederazione Generale del Lavoro",
                opzioni: ["Unione Lavoratori", "Confederazione Italiana Dirigenti d&#39;Azienda", "Confederazione Generale del Lavoro", "Confederazione Italiana Sindacati Lavoratori"]
            }, {
                domanda: "Uno dei piani politici-economici messi in atto dagli Stati Uniti dopo la Seconda Guerra Mondiale si chiamava:",
                r_corretta: "Il Piano Marshall",
                opzioni: ["Il Piano Marshall", "Il Trattato di Lisbona", "Il Trattato di Maastricht", "I Patti Lateranensi"]
            }, {
                domanda: "In che anno fu firmato l&#39;armistizio che port&#242; alla conclusione della prima guerra mondiale?",
                r_corretta: "Novembre 1918",
                opzioni: ["Aprile 1919", "Novembre 1919", "Marzo 1918", "Novembre 1918"]
            }, {
                domanda: "In che anno Mussolini dichiar&#242; guerra alla Gran Bretagna e alla Francia?",
                r_corretta: "1940",
                opzioni: ["1939", "1940", "1941", "1938"]
            }, {
                domanda: "Come si chiama una parte dell&#39;India che divenne uno stato autonomo nel 1947?",
                r_corretta: "Pakistan",
                opzioni: ["Pakistan", "Delhi", "Manipur", "Tibet"]
            }, {
                domanda: "Che tassa venne introdotto durante il periodo fascista?",
                r_corretta: "sul celibato",
                opzioni: ["sul grano", "sugli allevamenti", "sul celibato", "sui terreni"]
            }, {
                domanda: "Che legge venne approvata in Italia dal Parlamento nel 1970?",
                r_corretta: "La legge sul divorzio",
                opzioni: ["La legge sull&#39;aborto", "La legge sulle carceri", "La legge sull&#39;omosessualit&#224;", "La legge sul divorzio"]
            }, {
                domanda: "Chi era Presidente del Consiglio dei Ministri nel 1984 quando si firm&#242; il concordato tra Stato e Chiesa?",
                r_corretta: "Craxi",
                opzioni: ["Andreotti", "Cossiga", "Scalfaro", "Craxi"]
            }, {
                domanda: "Quando cadde il muro di Berlino?",
                r_corretta: "1989",
                opzioni: ["1989", "1988", "1968", "1992"]
            }, {
                domanda: "Indica la data corretta del sequestro di Aldo Moro",
                r_corretta: "16 marzo 1978",
                opzioni: ["16 gennaio 1968", "16 gennaio 1978", "16 marzo 1978", "16 luglio 1978"]
            }, {
                domanda: "In che scandalo fu coinvolto l&#39;ex-presidente americano Reagan?",
                r_corretta: "Irangate",
                opzioni: ["Irangate", "Watergate", "Watergate che nell&#39;Irangate", "Non fu coinvolto in nessuno scandalo"]
            }, {
                domanda: "Che fenomeno demografico particolarmente importante ci fu tra il 1950 e il 1970?",
                r_corretta: "emigrazione dal Sud verso il nord",
                opzioni: ["emigrazione dal Sud verso il nord", "immigrazione di albanesi", "Lo sbarco di profughi albanesi", "aumento della mortalit&#224; per la malaria"]
            }, {
                domanda: "Cosa venne approvato nel 1947?",
                r_corretta: "abolizione della pena di morte",
                opzioni: ["La legge sull&#39;aborto", "La legge sul divorzio", "La dichiarazione sulla discriminazione razziale", "abolizione della pena di morte"]
            }, {
                domanda: "A che anno risale il periodo di liberalizzazione della storia cecoslovacca, noto come primavera di Praga ?",
                r_corretta: "1968",
                opzioni: ["1958", "1988", "1968", "1938"]
            }, {
                domanda: "Chi successe a Stalin?",
                r_corretta: "Kruscev",
                opzioni: ["Mussolini", "Hitler", "Lenin", "Kruscev"]
            }, {
                domanda: "Chi era John Fitzgerald Kennedy?",
                r_corretta: "Il Presidente degli Stati Uniti",
                opzioni: ["Un musicista", "Un attore di teatro", "Il Presidente degli Stati Uniti", "Un sindacalista"]
            }, {
                domanda: "Dove nacque Cristoforo Colombo?",
                r_corretta: "A Genova",
                opzioni: ["A Genova", "A Venezia", "A New York", "A Pisa"]
            }, {
                domanda: "Dove nacque Marco Polo?",
                r_corretta: "A Venezia",
                opzioni: ["A Milano", "A Venezia", "A Pechino", "A Genova"]
            }, {
                domanda: "Dove venne spostata la Sede papale dal 1309 al 1377?",
                r_corretta: "Avignone",
                opzioni: ["Avignone", "Costantinopoli", "Roma", "Orleans"]
            }, {
                domanda: "Grazie a quale mezzo &#232; stato possibile trovare la chiave per decodificare i geroglifici?",
                r_corretta: "Stele di Rosetta",
                opzioni: ["Stele di Rosetta", "Stele di Caltanissetta", "Menhir", "Dolmen"]
            }, {
                domanda: "Elisabetta I d&#39;Inghilterra fu figlia di Enrico VIII e:",
                r_corretta: "Anna Bolena",
                opzioni: ["Catherine Howard", "Caterina d&#39;Aragona", "Anna Bolena", "Jane Seymour"]
            }, {
                domanda: "Federico II di Svevia fu imperatore:",
                r_corretta: "del Sacro Romano Impero",
                opzioni: ["dell&#39;impero Bizantino", "dell&#39;impero coloniale Francese", "dell&#39;impero Russo ", "del Sacro Romano Impero"]
            }, {
                domanda: "Fino a quale anno regn&#242; in Russia la dinastia dei Romanov?",
                r_corretta: "1917",
                opzioni: ["1815", "1917", "1714", "1613"]
            }, {
                domanda: "Franasco Franco (1892-1975) &#232; stato un generale e dittatore:",
                r_corretta: "spagnolo",
                opzioni: ["colombiano", "venezuelano", "spagnolo", "argentino"]
            }, {
                domanda: "Gengis Khan fu un condottiero e sovrano:",
                r_corretta: "mongolo",
                opzioni: ["cinese", "siamese", "persiano", "mongolo"]
            }, {
                domanda: "Giovanna D&#39;Arco guid&#242; i Francesi nella:",
                r_corretta: "guerra dei cento anni",
                opzioni: ["guerra dei sette anni", "guerra dei cento anni", "guerra greco-gotico", "prima crociata"]
            }
        ];
        
        const geografia = [
            {
                domanda: "Dove si trova il Brasile?",
                r_corretta: "Sud America",
                opzioni: ["Centro America", "Sud America", "Australia", "Europa"]
            }, {
                domanda: "Cos&#39;&#232; la Sardegna?",
                r_corretta: "isola",
                opzioni: ["penisola", "arcipelago", "comune;", "isola"]
            }, {
                domanda: "Dove si trova la Piazza del Duomo?",
                r_corretta: "Milano",
                opzioni: ["Torino", "Milano", "Reggio Emilia", "Venezia"]
            }, {
                domanda: "Quali tra queste bandiere hanno il colore verde, bianco e rosso?",
                r_corretta: "Messico e Ungheria",
                opzioni: ["Olanda e Italia", "Irlanda e Russia", "Messico e Ungheria", "Svezia e Lettonia"]
            }, {
                domanda: "Quali tra le seguenti citt&#224; non si trova negli Stati Uniti?",
                r_corretta: "Dublino",
                opzioni: ["Chicago", "Charleston", "Boston", "Dublino"]
            }, {
                domanda: "In quale provincia si trova Agropoli?",
                r_corretta: "SA",
                opzioni: ["SA", "PA", "CS", "TA"]
            }, {
                domanda: "Dove si trova Ginza?",
                r_corretta: "Giappone",
                opzioni: ["Giappone", "Libia", "Egitto", "Messico"]
            }, {
                domanda: "Qual&#39;&#232; la lingua principale in Porto Rico?",
                r_corretta: "spagnolo",
                opzioni: ["inglese", "spagnolo", "francese", "italiano"]
            }, {
                domanda: "Dove si trova la stazione ferroviaria Tiburtina?",
                r_corretta: "Roma",
                opzioni: ["Genova", "Roma", "Venezia", "Milano"]
            }, {
                domanda: "Quali di questi stati non si trova nell&#39;Unione Europea?",
                r_corretta: "Islanda",
                opzioni: ["Cipro", "Germania", "Malta", "Islanda"]
            }, {
                domanda: "Dov&#39;&#232; prodotta la Peroni?",
                r_corretta: "Italia",
                opzioni: ["Spagna", "Burundi", "Bangladesh", "Italia"]
            }, {
                domanda: "Dov&#39;&#232; lo Zimbabwe?",
                r_corretta: "Sud Africa",
                opzioni: ["Asia", "Nord Africa", "Sud America", "Sud Africa"]
            }, {
                domanda: "Qual&#39;&#232; il nome del canale che divide il Mar Mediterraneo dal Mar Rosso?",
                r_corretta: "Suez",
                opzioni: ["Corinto", "Panama", "Suez", "Nessuna risposta precedente"]
            }, {
                domanda: "Dov&#39;&#232; la Citt&#224; Proibita?", 
                r_corretta: "Pechino", 
                opzioni: ["Pechino", "La Mecca", "El Cairo", "Bombay"]
            }, {
                domanda: "In quale citt&#224; si trova Piazza Affari?", 
                r_corretta: "Milano", 
                opzioni: ["Roma", "Firenze", "Milano", "Napoli"]
            }, {
                domanda: "Dove si trova l&#39;Eretteo?", 
                r_corretta: "Atene", 
                opzioni: ["Asmara", "Atene", "Istanbul", "Tripoli"]
            }, {
                domanda: "State visitando Teatro Farnese, in quale citt&#224; vi trovate?", 
                r_corretta: "Roma", 
                opzioni: ["Parma", "Palermo", "Roma", "Napoli"]
            }, {
                domanda: "Dove si trova la Sorbona?", 
                r_corretta: "Parigi", 
                opzioni: ["Berlino", "Barcellona", "Parigi", "Londra"]
            }, {
                domanda: "Scegli il paese che ha un confine marittimo:", 
                r_corretta: "Pakistan", 
                opzioni: ["Kirghizistan", "Afghanistan", "Tajikistan", "Pakistan"]
            }, {
                domanda: "Il lago Tanganica &#232; uno dei grandi laghi di:", 
                r_corretta: "Africa", 
                opzioni: ["Africa", "Asia", "Oceania", "America"]
            }, {
                domanda: "Qual &#232; la capitale del Burundi?", 
                r_corretta: "Gitega", 
                opzioni: ["Kigali", "Gitega", "Addis Abeba", "Dodoma"]
            }, {
                domanda: "Quale di queste citt&#224; &#232; la citt&#224; pi&#249; meridionale del mondo?", 
                r_corretta: "Puerto Natales", 
                opzioni: ["Ushuaia", "Puerto Rico", "Puerto Natales", "Puerto Williams"]
            }, {
                domanda: "In quale isola delle Hawaii si trova il Parco Nazionale di Haleakalā?", 
                r_corretta: "Maui", 
                opzioni: ["Oahu", "Maui", "Kauai", "Molokai"]
            }, {
                domanda: "Marsiglia &#232; una citt&#224; di:", 
                r_corretta: "Francia", 
                opzioni: ["Italia", "Lussemburgo", "Spagna", "Francia"]
            }, {
                domanda: "Quale di questi paesi non &#232; nel Corno d&#39;Africa?", 
                r_corretta: "Costa d&#39;Avorio", 
                opzioni: ["Gibuti", "Somalia", "Etiopia", "Costa d&#39;Avorio"]
            }, {
                domanda: "Il fiume Yalu &#232; un fiume di confine tra:", 
                r_corretta: "Cina e Corea del Nord", 
                opzioni: ["India e Nepal", "Cina e Corea del Nord", "Corea del Nord e Corea del Sud", "India e Bangladesh"]
            }, {
                domanda: "Il Monte Titano &#232; la montagna pi&#249; alta di:", 
                r_corretta: "San Marino", 
                opzioni: ["Malta", "Monaco", "Andorra", "San Marino"]
            }, {
                domanda: "Quale di questi paesi non &#232; un territorio britannico d&#39;oltremare?", 
                r_corretta: "Antigua e Barbuda", 
                opzioni: ["Isole Cayman", "Bermuda", "Isole Turks e Caicos", "Antigua e Barbuda"]
            }, {
                domanda: "Frutillar &#232; una citt&#224; di:", 
                r_corretta: "Cile", 
                opzioni: ["Cile", "Ecuador", "Messico", "Argentina"]
            }, {
                domanda: "Il fiume Tocantins &#232; un lungo fiume di:", 
                r_corretta: "America", 
                opzioni: ["Asia", "Europa", "Africa", "America"]
            }, {
                domanda: "Qual &#232; la capitale della Papua Nuova Guinea?", 
                r_corretta: "Moresby Harbour", 
                opzioni: ["Numer", "Wellington", "Moresby Harbour", "Rabaul"]
            }, {
                domanda: "Dove finisce il fiume Reno?", 
                r_corretta: "Mare del Nord", 
                opzioni: ["Mare della Frisia", "Mare del Nord", "Mar Morto", "Mar Tirreno"]
            }, {
                domanda: "Salonicco &#232; una citt&#224; di:", 
                r_corretta: "Grecia", 
                opzioni: ["Siria", "Grecia", "Libano", "Turchia"]
            }, {
                domanda: "Managua &#232; la capitale di:", 
                r_corretta: "Nicaragua", 
                opzioni: ["Honduras", "Papua Nuova Guinea", "El Salvador", "Nicaragua"]
            }, {
                domanda: "Qual &#232; il fiume principale della citt&#224; di Santiago, capitale del Cile?", 
                r_corretta: "Fiume Mapocho", 
                opzioni: ["Fiume Giallo", "Fiume Molina", "Fiume Vulcano", "Fiume Mapocho"]
            }, {
                domanda: "In quale citt&#224; canadese si trova il Ponte Sospensione di Capilano?", 
                r_corretta: "Vancouver", 
                opzioni: ["Toronto", "Vancouver", "Calgary ", "Montreal"]
            }, {
                domanda: "Quante sono le isole Fiji?", 
                r_corretta: "333", 
                opzioni: ["19", "333", "6852", "95"]
            }, {
                domanda: "Quale fu la capitale d&#39;Italia tra il 1865 e il 1871?", 
                r_corretta: "Firenze", 
                opzioni: ["Torino", "Napoli", "Firenze", "Roma"]
            }, {
                domanda: "Qual&#39;&#232; la capitale della Repubblica Democratica del Congo?", 
                r_corretta: "Kinshasa", 
                opzioni: ["Aba", "Kinshasa", "Maseru", "Lilongwe"]
            }, {
                domanda: "Il Mare di Ross appartiene all&#39;oceano:", 
                r_corretta: "Antartico", 
                opzioni: ["Pacifico", "Indiano", "Atlantico", "Antartico"]
            }, {
                domanda: "Qual'&#232; il principale passaggio naturale tra il Pacifico e l&#39;Oceano Atlantico?", 
                r_corretta: "Lo stretto di Magellano", 
                opzioni: ["Lo stretto di Bering", "Lo stretto di Malacca", "Lo stretto di Messina", "Lo stretto di Magellano"]
            }, {
                domanda: "Demonimo di Lettonia:", 
                r_corretta: "Lettone", 
                opzioni: ["Lettone", "Lettonico", "Lettonese", "Lettoniano"]
            }, {
                domanda: "Nome ufficiale di Samoa:", 
                r_corretta: "Stato indipendente di Samoa", 
                opzioni: ["Regno di Samoa", "Stato indipendente di Samoa", "Repubblica democratica di Samoa", "Repubblica di Samoa"]
            }, {
                domanda: "Dove si trova Ciad?",
                r_corretta: "Africa",
                opzioni: ["Africa", "Asia", "America", "Canada"]
            }, {
                domanda: "Dove si trova la famosa provincia dello Champagne?",
                r_corretta: "Francia",
                opzioni: ["Svizzera ", "Francia", "Spagna", "Germania"]
            }, {
                domanda: "Qual &#232; il nome di un monte situato nel Per&#249;?",
                r_corretta: "Machu Picchu",
                opzioni: ["Machu Picchu", "K2", "Everest", "Elbrus"]
            }, {
                domanda: "Qual&#39;&#232; l&#39;isola pi&#249; grande del mondo?",
                r_corretta: "Groenlandia",
                opzioni: ["Groenlandia", "Sardegna", "Giappone", "Gran Bretagna"]
            }, {
                domanda: "Dove ci troviamo se siamo a Piazza Plebiscito?",
                r_corretta: "Napoli",
                opzioni: ["Verona", "Napoli", "Venezia", "Roma"]
            }, {
                domanda: "Di quale dei seguenti arcipelaghi fa parte l&#39;isola Panarea?",
                r_corretta: "Isole Eolie",
                opzioni: [" Isola di Capo", "Isola Verde", "Isole Eolie", "Isole delle Antille"]
            }, {
                domanda: "Che cosa sono i pupi siciliani?",
                r_corretta: "marionette",
                opzioni: ["dolci", "marionette", "giochi", "accessori"]
            }, {
                domanda: "Quale lingua si parla in Mozambico?",
                r_corretta: "portoghese",
                opzioni: ["tedesco", "inglese", "olandese", "portoghese"]
            }, {
                domanda: "Qual&#39;&#232; il quinto pianeta del nostro sistema solare?",
                r_corretta: "Giove",
                opzioni: ["Giove", "Nettuno", "Terra", "Mercurio"]
            }, {
                domanda: "La capitale della Bulgaria?",
                r_corretta: "Sofia",
                opzioni: ["Vienna", "Chisinau ", "Bucarest", "Sofia"]
            }
        ];

        const sport_hobby = [
            {
                domanda: "Come si chiama il giocatore che gioca con una maglia diversa nel calcio?",
                r_corretta: "portiere",
                opzioni: ["portiere", "capitano", "playmaker", "rigorista"]
            }, {
                domanda: "Chi ha vinto il primo campionato di calcio italiano?",
                r_corretta: "Genoa",
                opzioni: ["Milan", "Inter", "Genoa", "Pro Vercelli"]
            }, {
                domanda: "In quale sport non si usa il pallone?",
                r_corretta: "corsa ad ostacoli",
                opzioni: ["basket", "pallavolo", "ginnastica ritmica", "corsa ad ostacoli"]
            }, {
                domanda: "Quale parole viene usata quando si buttano gi&#249; tutti i birilli nel Bowling?",
                r_corretta: "strike",
                opzioni: ["caput", "spare", "strike", "bingo"]
            }, {
                domanda: "Nel 2013 chi ha vinto il campionato italiano?",
                r_corretta: "Juve",
                opzioni: ["Roma", "Juve", "Sassuolo", "Napoli"]
            }, {
                domanda: "Quale squadra detiene il maggior numero di vittorie del campionato mondiali di calcio?",
                r_corretta: "Brasile",
                opzioni: ["Italia", "Argentina", "Qatar", "Brasile"]
            }, {
                domanda: "Quante volte &#232; stato campione nazionale nei 200 metri piani Pietro Mennea?",
                r_corretta: "11",
                opzioni: ["5", "8", "11", "14"]
            }, {
                domanda: "Chi &#232; il nuotatore italiano che ha vinto pi&#249; medaglie a livello internazionale?",
                r_corretta: "Gregorio Paltrinieri",
                opzioni: ["Massimiliano Rosolino", "Gregorio Paltrinieri", "Domenico Fioravanti", "Luca Marin"]
            }, {
                domanda: "A quale disciplina sportiva appartiene la lanterna?",
                r_corretta: "Orienteering",
                opzioni: ["Pesca sportiva", "Triathlon", "Orienteering", "Mountain bike"]
            }, {
                domanda: "Halterofilia significa?",
                r_corretta: "sollevamento pesi",
                opzioni: ["paura degli avversari", "disturbo nel processo di crescita", "alterazione dei livelli di ematocrito nel sangue", "sollevamento pesi"]
            }, {
                domanda: "Il soprannome di Clarence Seedorf?",
                r_corretta: "professore",
                opzioni: ["poeta", "genio", "scienziato", "professore"]
            }, {
                domanda: "Quale squadre &#232; definita A maggica?",
                r_corretta: "Roma",
                opzioni: ["Lazio", "Roma", "Napoli", "Juventus"]
            }, {
                domanda: "Quale sport praticava Bud Spencer?",
                r_corretta: "nuoto",
                opzioni: ["calcio", "ciclismo", "nuoto", "rugby"]
            }, {
                domanda: "Quanti giocatori formano una squadra di Baseball?",
                r_corretta: "9",
                opzioni: ["7", "8", "9", "10"]
            }, {
                domanda: "Quale giocatore di calcio viene chiamato El principe?",
                r_corretta: "Milito",
                opzioni: ["Ronaldinho", "Milito", "Pel&#232;", "Maradona"]
            }, {
                domanda: "Cosa vuol dire FIN?",
                r_corretta: "Federazione Italiana Nuoto",
                opzioni: ["Frazione Italiana Nuoto", "Ferrovia Italiana Nuova", "Federazione Italiana Nuoto", "Federazione Italiana Nuova"]
            }, {
                domanda: "WADA significa?",
                r_corretta: "Associazione Mondiale Anti Doping",
                opzioni: ["Associazione Mondiale Anti Doping", "Associazione Mondiale Anti Dropping", "Associazione Mondiale Anti Drop", "Associazione Mondiale Doping"]
            }, {
                domanda: "Cos&#39;&#232; un agente mascherante?",
                r_corretta: "mascherare le sostanze proibite",
                opzioni: ["Chi fornisce le sostanze proibite", "mascherare le sostanze proibite", "rappresentante di un atleta", "maschera teatrale"]
            }, {
                domanda: "il CIO &#232;?",
                r_corretta: "comitato olimpico internazionale",
                opzioni: ["centro olimpico interno", "comitato olimpico internazionale", "una lista di farmaci proibita", "codice internazionale antidoping"]
            }, {
                domanda: "Che cos&#39;&#232; il doping? L&#39;uso di . . . per migliorare la prestazione sportiva",
                r_corretta: "metodi nocivi alla salute",
                opzioni: ["metodi nocivi alla salute", "farmaci antinfiammatori", "allenamenti intensivi", "integratori"]
            },{
                domanda: "Nel basket in quanti secondi occorre concludere la propria azione con tiro a canestro?",
                r_corretta: "24",
                opzioni: ["18", "20", "22", "24"]
            }, {
                domanda: "Quanti sono i giocatori di una squadra di pallamano?",
                r_corretta: "7",
                opzioni: ["5", "7", "9", "11"]
            }, {
                domanda: "Quali sono le due prove del biathlon?",
                r_corretta: "Sci di fondo e tiro a segno",
                opzioni: ["Corsa e nuoto", "Ciclismo e skeleton", "Discesa libera e slalom speciale", "Sci di fondo e tiro a segno"]
            }, {
                domanda: "L&#39;atleta Oscar Pistorius, che correva i 400 m con due protesi in fibra di carbonio, &#232; di nazionalit&#224;:",
                r_corretta: "sudafricana",
                opzioni: ["finlandese", "brasiliana", "argentina", "sudafricana"]
            }, {
                domanda: "In atletica leggera, l&#39;impugnatura a maniglia &#232; riferita a lanciatori di:",
                r_corretta: "martello",
                opzioni: ["martello", "peso", "giavellotto", "disco"]
            }, {
                domanda: "Lo stretching &#232; utilizzato per:",
                r_corretta: "elasticizzare il muscolo",
                opzioni: ["elasticizzare il muscolo", "migliorare la potenza esplosiva muscolare", "migliorare la potenza reattiva muscolare", "non serve"]
            }, {
                domanda: "Quali caratteristiche psicofisiche tende a sviluppare la ginnastica artistica?",
                r_corretta: "Resistenza aerobica",
                opzioni: ["Forza lenta", "Una notevole statura", "Senso civico", "Resistenza aerobica"]
            }, {
                domanda: "In quale nazione &#232; nato il calcio moderno?",
                r_corretta: "Inghilterra",
                opzioni: ["Francia", "Brasile", "Italia", "Inghilterra"]
            }, {
                domanda: "In quale prova di ginnastica Yuri Chechi ha vinto due medaglie olimpiche?",
                r_corretta: "Anelli",
                opzioni: ["Anelli", "Sbarra", "Parallele", "Corpo libero"]
            }, {
                domanda: "Quale, tra i seguenti sport multidisciplinari, fa parte del programma olimpico invernale?",
                r_corretta: "Biathlon",
                opzioni: ["Triathlon", "Pentathlon", "Biathlon", "Eptathlon"]
            }, {
                domanda: "Quali, tra le seguenti specialit&#224;, sono eseguite unicamente nelle gare di ginnastica artistica femminile?",
                r_corretta: "Trave e parallele asimmetriche",
                opzioni: ["Volteggio e sbarra", "Corpo libero e volteggio", "Trave e parallele asimmetriche", "Cavallo con maniglie"]
            }, {
                domanda: "Su quale superficie si giocano le partite del Roland Garros, uno dei quattro tornei del Grande Slam di tennis?",
                r_corretta: "Terra rossa",
                opzioni: ["Erba", "Terra rossa", "Cemento", "Parquet"]
            }, {
                domanda: "Quanto dura una partita di calcio?",
                r_corretta: "90 min",
                opzioni: ["90 min", "100 min", "45 min", "95 min"]
            }, {
                domanda: "Quando si &#232; svolta la prima Coppa del Mondo?",
                r_corretta: "1930",
                opzioni: ["1927", "1928", "1929", "1930"]
            }, {
                domanda: "Quale squadra di calcio ha vinto pi&#249; Mondiali?",
                r_corretta: "Brasile",
                opzioni: ["Italia", "Francia", "Brasile", "Germania"]
            }, {
                domanda: "In quale citt&#224; si trova lo stadio popolarmente noto come La Bombonera?",
                r_corretta: "Argentina",
                opzioni: ["Brasile", "Argentina", "Uruguay", "Spagna"]
            }, {
                domanda: "Qual &#232; il diametro di un canestro da basket in pollici?",
                r_corretta: "18",
                opzioni: ["17", "18", "18.5", "19"]
            }, {
                domanda: "Le Olimpiadi si svolgono ogni quanti anni?",
                r_corretta: "4",
                opzioni: ["2", "3", "6", "4"]
            }, {
                domanda: "Qual &#232; lo sport nazionale del Canada?",
                r_corretta: "Lacrosse",
                opzioni: ["Calcio", "Lacrosse", "Baseball", "Golf"]
            }, {
                domanda: "Quante fossette ha una pallina da golf media?",
                r_corretta: "336",
                opzioni: ["336", "300", "20", "186"]
            }, {
                domanda: "Quale paese ha gareggiato pi&#249; volte alle Olimpiadi ma non ha vinto una medaglia d&#39;oro?",
                r_corretta: "Le Filippine",
                opzioni: ["Le Filippine", "San Marino", "Birmania", "Laos"]
            }, {
                domanda: "Alle Olimpiadi del 1971, quale paese rappresentava Nadia Comaneci?",
                r_corretta: "Romania",
                opzioni: ["Austria", "URSS", "Romania", "Bangladesh"]
            }, {
                domanda: "Quante medaglie ha vinto la Cina alle Olimpiadi di Pechino?",
                r_corretta: "100",
                opzioni: ["104", "98", "100", "76"]
            }, {
                domanda: "Di che colore sono i pali nel calcio?",
                r_corretta: "Giallo",
                opzioni: ["Giallo", "Bianco", "Rosso", "Verde"]
            }, {
                domanda: "In che gioco love &#232; un punteggio?",
                r_corretta: "Tennis",
                opzioni: ["Vita", "Tennis", "Basket", "Cricket"]
            }, {
                domanda: "Quale sport &#232; molto simile al softball?",
                r_corretta: "Baseball",
                opzioni: ["Lacrosse", "Basket", "Baseball", "Ping Pong"]
            }, {
                domanda: "Nel calcio, quale parte del corpo non pu&#242; toccare la palla?",
                r_corretta: "Mani",
                opzioni: ["Busto", "Testa", "Piedi", "Mani"]
            }, {
                domanda: "Quale dei seguenti sport non utilizza una palla?",
                r_corretta: "hockey",
                opzioni: ["golf", "tennis", "hockey ", "polo"]
            }, {
                domanda: "Quanti sport sono stati inclusi nelle Olimpiadi estive del 2008?",
                r_corretta: "28",
                opzioni: ["25", "33", "30", "28"]
            }, {
                domanda: "In quale anno le donne hanno potuto partecipare ai giochi olimpici moderni",
                r_corretta: "1900",
                opzioni: ["1850", "1900", "1420", "1964"]
            }, {
                domanda: "Quanti minuti &#232; stato il punto pi&#249; lungo registrato nella storia del tennis?",
                r_corretta: "29 min",
                opzioni: ["35 min", "20 min", "15 min", "29 min"]
            }, {
                domanda: "Durante le prime Olimpiadi moderne, con cosa sono stati premiati i primi classificati?",
                r_corretta: "Medaglie argento",
                opzioni: ["Medaglie argento", "Medaglie oro", "Collane di diamanti", "Coppe dorate"]
            }, {
                domanda: "Cosa rappresentano gli anelli alle Olimpiadi?",
                r_corretta: "I continenti del mondo",
                opzioni: ["I continenti del mondo", "Sport della prima Olimpiade", "I colori primari", "colori della bandiera ospitante"]
            }
        ];
        
        const art_letter = [
            {
                domanda: "Non &#232; bello ci&#242; che &#232; bello, ma &#232; bello. . .",
                r_corretta: "quello che piace",
                opzioni: ["quello non bello", "quello bello", "quello che costa", "quello che piace"]
            }, {
                domanda: "Chi ha progettato Piazza San Pietro a Roma?",
                r_corretta: "Bernini",
                opzioni: ["Alighieri", "Leopardi", "Verga", "Bernini"]
            }, {
                domanda: "Chi &#232; l&#39;autore di Hamlet? ",
                r_corretta: "William Shakespeare ",
                opzioni: ["Jane Austen ", "Geoffrey Chaucer ", "William Shakespeare ", "Michael Jackson "]
            }, {
                domanda: "Chi dipinse la Scuola di Atene?",
                r_corretta: "Raffaello",
                opzioni: ["da Vinci", "Raffaello", "Michelangelo", "Tiziano"]
            }, {
                domanda: "Quale colore ottieni mescolando il giallo e il blu?",
                r_corretta: "verde",
                opzioni: ["verde", "arancione", "rosso", "viola"]
            }, {
                domanda: "In quale paese &#232; nato Vincent Van Gogh?",
                r_corretta: "Paesi bassi",
                opzioni: ["Paesi bassi", "Russia", "Austria", "Francia"]
            }, {
                domanda: "Chi &#232; Simone de beauvoir?",
                r_corretta: "scrittrice",
                opzioni: ["scrittrice", "cantante", "ballerina", "attrice"]
            }, {
                domanda: "Chi scrisse la Fattoria degli animali?",
                r_corretta: "George Orwell",
                opzioni: ["J. K. Rowling.", "Dan Brown", "George Orwell", "Italo Calvino"]
            }, {
                domanda: "Chi scrisse il fu Mattia Pascal?",
                r_corretta: "Luigi Pirandello",
                opzioni: ["Ugo Foscolo", "Luigi Pirandello", "Niccol&#242; Machiavelli", "Italo Calvino"]
            }, {
                domanda: "Chi ha scritto Lettera a un bambino mai nato?",
                r_corretta: "Oriana Fallaci",
                opzioni: ["Umberto Eco", "Luciana Littizzetto", "Oriana Fallaci", "Federico Moccia"]
            }, {
                domanda: "Chi compose l&#39;opera Madama Butterfly?",
                r_corretta: "Puccini",
                opzioni: ["Mozart", "Puccini", "Bernini", "Monet"]
            }, {
                domanda: "Chi nacque durante il Rinascimento?",
                r_corretta: "Ludovico Ariosto",
                opzioni: ["Ludovico Ariosto", "Dante Alighieri", "Claude Monet", "Geoffrey Chaucer"]
            }, {
                domanda: "Dove hanno sepolto il corpo di Dante Alighieri?",
                r_corretta: "Ravenna",
                opzioni: ["Roma ", "Londra", "Firenze", "Ravenna"]
            },{
                domanda: "Chi era Gabriele D&#39;Annunzio?",
                r_corretta: "un poeta",
                opzioni: ["un bodybuilder", "un miliardario", "un poeta", "un cuoco"]
            }, {
                domanda: "Alla fine dell&#39;Ottocento &#232; stato rubato dal museo Louvre, quale dipinto? ",
                r_corretta: "La Gioconda",
                opzioni: ["La Gioconda", "Incoronazione di Napoleone", "Il Cenacolo", "La festa del Rosario"]
            }, {
                domanda: "L&#39;autore della poesia Marzo 1821?",
                r_corretta : "Alessandro Manzoni",
                opzioni: ["Giacomo Leopardi", "Ugo Foscolo", "Alessandro Manzoni", "Gabriele D&#39;Annunzio"]
            }, {
                domanda: "L&#39;autore del romanzo L&#39;Esclusa ? ", 
                r_corretta: "Luigi Pirandello", 
                opzioni: ["Giovanni Verga", "Luigi Pirandello", "Italo Svevo", "Vittorio Alfieri"]
            }, {
                domanda: "La gloria di colui che tutto move per l&#39;universo penetra, e risplende in una parte pi&#249; e meno altrove...",
                r_corretta : "incipit del Paradiso", 
                opzioni: ["incipit del Paradiso", "incipit del Purgatorio", "frase celebre di Virgilio", "frase celebre di Omero"]
            }, {
                domanda: "Qual &#232; la citt&#224; natale di Eugenio Montale?",
                r_corretta: "Genova",
                opzioni: ["Genova", "Milano", "Firenze", "Torino"]
            }, {
                domanda: "L&#39;autore del romanzo Madame Bovary ? ", 
                r_corretta: "Gustave Flaubert", 
                opzioni: ["Paul Thomas Mann", "Gustave Flaubert", "&#201;mile &#201;douard Charles Antoine Zola", "Guy de Maupassan"]
            }, {
                domanda: "Dove si trova la Torre degli Asinelli? ", 
                r_corretta: "Bologna", 
                opzioni: ["Roma", "Firenze", "Milano", "Bologna"]
            }, {
                domanda: "A quale corrente artistica fa parte Giorgio de Chirico? ", 
                r_corretta: "Metafisico", 
                opzioni: ["Metafisico", "Pop", "Minimalista", "Impressionismo"]
            }, {
                domanda: "Il nome Guernica del capolavoro di Pablo Picasso, deriva da... ? ", 
                r_corretta: "un paese bombardato", 
                opzioni: ["un aereo della prima guerra mondiale", "una razza di cavallo", "un paese bombardato", "il luogo dove studiava"]
            }, {
                domanda: "Dove si trova il Cenacolo di Leonardo da Vinci?", 
                r_corretta: "Milano", 
                opzioni: ["Torino", "Milano", "Parma", "Firenze"]
            }, {
                domanda: "Il Circo Agonale, oggi come si chiama?", 
                r_corretta: "Piazza Navona", 
                opzioni: ["Arena di Verona", "Piazza Navona", "Spianata delle Moschee", "Parco dei Principi"]
            }, {
                domanda: "Chi era Lisippo?", 
                r_corretta: "Uno scultore", 
                opzioni: ["Uno scultore", "Un filosofo", "Un cantante", "Un ceramista"]
            }, {
                domanda: "Chi &#232; l&#39;architetto autore della prospettiva della Galleria di Palazzo Spada, a Roma?", 
                r_corretta: "Borromini", 
                opzioni: ["Borromini", "Bernini", "Vanvitelli", "Michelangelo"]
            }, {
                domanda: "Se dico buccina, di cosa sto parlando?", 
                r_corretta: "Uno strumento musicale", 
                opzioni: ["Una bilancia", "Un timbro", "Un frutto", "Uno strumento musicale"]
            }, {
                domanda: "Nelle sue celebri incisioni, il Piranesi, quale citt&#224; ha immortalato?", 
                r_corretta: "Roma", 
                opzioni: ["Roma", "Urbino", "Pisa", "Napoli"]
            }, {
                domanda: "Dove si trova la Fontana di Trevi?", 
                r_corretta: "Roma", 
                opzioni: ["Viterbo", "Roma", "Mantova", "Perugia"]
            }, {
                domanda: "Qual era il vero nome della Gioconda?", 
                r_corretta: "Lisa Gherardini", 
                opzioni: ["Maria Luigia", "Lisa Gherardini", "Beatrice Cenci", "Bianca Cappello"]
            }, {
                domanda: "Come si chiama il protagonista de L&#39;avaro, di Moli&#232;re?", 
                r_corretta: "Arpagone", 
                opzioni: ["Carlone", "Salvatore", "Ganimede", "Arpagone"]
            }, {
                domanda: "Shakespeare ha scritto un&#39;opera in cui muoiono i quattro protagonisti: qual &#232;?", 
                r_corretta: "Amleto", 
                opzioni: ["Sogno di una notte di mezza estate", "La tempesta", "Romeo e Giulietta", "Amleto"]
            }, {
                domanda: "Quanti sono i samurai di Kurosawa?", 
                r_corretta: "Sette", 
                opzioni: ["Tre", "Sei", "Sette", "Dodici"]
            }, {
                domanda: "In quale basilica ci sono le statue dei Tetrarchi?", 
                r_corretta: "S. Marco a Venezia", 
                opzioni: ["S. Marco a Venezia", "S. Maria in Trastevere a Roma", "S. Sofia a Istanbul", "S. Croce a Firenze"]
            }, {
                domanda: "Qual &#232; la citt&#224; natale di Raffaello Sanzio?", 
                r_corretta: "Urbino", 
                opzioni: ["Brescia", "Urbino", "Perugia", "Firenze"]
            }, {
                domanda: "Chi guid&#242; Edipo accecato?", 
                r_corretta: "Antigone", 
                opzioni: ["Elena", "Menelao", "Antigone", "Giocasta"]
            }, {
                domanda: "In quale regione si trova la Cattolica di Stilo?", 
                r_corretta: "Calabria", 
                opzioni: ["Puglia", "Friuli Venezia Giulia", "Molise", "Calabria"]
            }, {
                domanda: "Cos&#39;&#232; un oboe?", 
                r_corretta: "Uno strumento musicale", 
                opzioni: ["Un tipo di capitello", "Una elemento teatrale", "Uno strumento musicale", "Una danza"]
            }, {
                domanda: "Dove si trova il Ponte dei Sospiri?", 
                r_corretta: "Venezia", 
                opzioni: ["Pavia", "Venezia", "Praga", "Firenze"]
            }, {
                domanda: "Il pittore Giorgio da Castelfranco &#232; meglio conosciuto con quale nome?", 
                r_corretta: "Giorgione", 
                opzioni: ["Masaccio", "Mantegna", "Giorgione", "Pisanello"]
            }, {
                domanda: "Chi ha dipinto la Vergine delle rocce?", 
                r_corretta: "Leonardo da Vinci", 
                opzioni: ["Tiziano", "Guido Reni", "Tintoretto", "Leonardo da Vinci"]
            }, {
                domanda: "Nel Sahara tunisino e pi&#249; precisamente a El Djem, cosa c&#39;&#232;?", 
                r_corretta: "Un anfiteatro romano", 
                opzioni: ["Una statua marina", "La prima ferrovia africana", "Un anfiteatro romano", "Una piramide rossa"]
            }, {
                domanda: "Ovale rosso, Tratto bianco, Nel grigio sono opere di quale noto pittore?", 
                r_corretta: "Kandinsky", 
                opzioni: ["Kandinsky", "Mondrian", "Klee", "Picasso"]
            }, {
                domanda: "Ren&#233; Magritte &#232; cresciuto in quale delle seguenti cittadine belghe?", 
                r_corretta: "Charleroi, cittadina industriale", 
                opzioni: ["Anversa,  portuale", "Bruges,  romantica", "Charleroi,  industriale", "Liegi, culturale"]
            }, {
                domanda: "Famoso scultore autore de La porta dell&#39;inferno", 
                r_corretta: "Auguste Rodin", 
                opzioni: ["Auguste Rodin", "Antonio Canova", "Giacomo Balla", "Amedeo Modigliani"]
            }, {
                domanda: "Rappresentava i suoi dipinti attraverso l&#39;utilizzo di frutti e vegetali. Chi era?", 
                r_corretta: "Arcimboldo", 
                opzioni: ["Arcimboldo", "Fontana", "Picasso", "Botero"]
            }, {
                domanda: "La storia di Ulisse &#232; narrata principalmente in quale delle seguenti opere?", 
                r_corretta: "Iliade", 
                opzioni: ["Odissea", "Iliade", "Eneide", "Chanson de Roland"]
            }, {
                domanda: "Alberto Moravia &#232; uno scrittore del:", 
                r_corretta: "XX secolo", 
                opzioni: ["XVIII secolo", "IX secolo", "XX secolo", "XXI secolo"]
            }, {
                domanda: "Chi ha scritto La Metamorfosi", 
                r_corretta: "Franz Kafka", 
                opzioni: ["Friedrich Nietzsche", "Franz Kafka", "Sigmund Freud", "Johann von Goethe"]
            }, {
                domanda: "Quale delle seguenti non &#232; un&#39;opera di italo calvino?	", 
                r_corretta: "Il fu Mattia Pascal", 
                opzioni: ["Il visconte dimezzato", "Il barone rampante", "Il fu Mattia Pascal", "Il cavaliere inesistente"]
            }, {
                domanda: "In che anno appare il manifesto del futurismo a firma di Filippo Tommaso Marinetti?", 
                r_corretta: "1909", 
                opzioni: ["1899", "1909", "1919", "1929"]
            }
        ]; 
        
        const intrattenimento = [
            {
                domanda: "Quale programma per bambini insegna a realizzare piccoli lavori con svariati materiali?", 
                r_corretta: "Art Attack", 
                opzioni: ["Art Attack", "Di tutto un p&#232;", "Artisti in erba", "Riciclando"]
            }, {
                domanda: "Come si chiama il famoso personaggio di un videogame che ha per fratello Mario?", 
                r_corretta: "Luigi", 
                opzioni: ["Luigi", "Lucas", "Ligi", "Luis"]
            }, {
                domanda: "Geronimo Stilton, protagonista di vari libri, che animale &#232;?", 
                r_corretta: "topo", 
                opzioni: ["gatto", "topo", "cane", "coniglio"]
            }, {
                domanda: "In quale cartone giapponese &#232; coinvolto un bambino investigatore?", 
                r_corretta: "Detective Conan", 
                opzioni: ["Detective Conan", "Doraemon", "Naruto Shippuden", "Dragon ball"]
            }, {
                domanda: "Cosa usa per volare Mary Poppins?", 
                r_corretta: "ombrello", 
                opzioni: ["aereo", "tappeto", "ombrello", "scopa"]
            }, {
                domanda: "Chi sono gli Arteteca?",
                r_corretta: "comici",
                opzioni: ["cantanti", "comici", "ballerini", "attori"]
            }, {
                domanda: "-Mii non ci posso credere! Quale attore pronuncia questa frase?",
                r_corretta: "Aldo",
                opzioni: ["Aldo", "Luca", "Giacomo", "Giovanni"]
            }, {
                domanda: "Quale di questi cartoni animati ha come protagonista un robot?",
                r_corretta: "Futurama",
                opzioni: ["Futurama", "Simpson", "Griffin", "Winx"]
            }, {
                domanda: "Gallina che non becca...",
                r_corretta: "ha beccato",
                opzioni: ["fa l&#39;uovo", "ha beccato", "dorme", "beccher&#224;"]
            }, {
                domanda: "Chi sono i Pentatonix?",
                r_corretta: "dei cantanti",
                opzioni: ["una band", "dei ballerini", "dei cantanti", "degli artisti"]
            }, {
                domanda: "Come si chiama la protagonista di Stranger Things?",
                r_corretta: "Eleven",
                opzioni: ["Max", "Samantha", "Emma", "Eleven"]
            }, {
                domanda: "Quale di questi programmi televisivi non &#232; condotto da Paolo Bonolis?",
                r_corretta: "Reazione a Catena",
                opzioni: ["Ciao Darwin", "Avanti un altro", "Reazione a Catena", "Non &#232; la Rai"]
            }, {
                domanda: "Nella serie Friends chi ha detto -how you doin&#39; ?",
                r_corretta: "Joey",
                opzioni: ["Joey", "Rachel", "Ross", "David"]
            }, {
                domanda: "Di che colore sono i capelli di Poison Ivy in Batman?",
                r_corretta: "rossi",
                opzioni: ["viola", "rossi", "verdi", "neri"]
            }, {
                domanda: "Qual &#232; il nome del protagonista in Dr.House?",
                r_corretta: "Gregory",
                opzioni: ["iTerence ", "Sheldon  ", "Gregory", "Willy"]
            },{
                domanda: "Chi &#232; Woody Allen?", 
                r_corretta: "regista", 
                opzioni: ["regista", "cuoco", "politico", "pittore"]
            }, {
                domanda: "In Harry Potter cosa protegge il cane a tre teste?", 
                r_corretta: "la pietra filosofale", 
                opzioni: ["Harry Potter", "il mondo", "la pietra filosofale", "la bacchetta magica"]
            }, {
                domanda: "Qual &#232; la protagonista del videogioco Life is strange?", 
                r_corretta: "Max", 
                opzioni: ["Max", "Alex", "Chloe", "Jessica"]
            }, {
                domanda: "Come si chiama la figlia di Marco ed Eva della serie TV i Cesaroni?", 
                r_corretta: "Marta", 
                opzioni: ["Marta", "Sara", "Martina", "Giulia"]
            }, {
                domanda: "Quale programma ha come logo un occhio?", 
                r_corretta: "Grande Fratello", 
                opzioni: ["X Factor", "Amici di Maria de Filippi", "The Voice", "Grande Fratello"]
            }, {
                domanda: "Quale di questi attori non ha interpretato un agente in Men in Black (1997)?", 
                r_corretta: "Kevin Costner", 
                opzioni: ["Will Smith", "Kevin Costner", "Rip Torn", "Tommy Lee Jones"]
            }, {
                domanda: "Come si chiamava Il Padrino?", 
                r_corretta: "Vito Corleone", 
                opzioni: ["Vito Corleone", "Sonny Corleone", "Michael Corleone", "Carlo Corleone"]
            }, {
                domanda: "Chi ha vinto sanremo 2023?", 
                r_corretta: "Marco Mengoni", 
                opzioni: ["Francesco Gabbani", "Marco Mengoni", "Ermal Meta", "Mahmood"]
            }, {
                domanda: "Mamma Roma di Pasolini &#232; interpretato da:", 
                r_corretta: "Anna Magnani", 
                opzioni: ["Anna Magnani", "Giulietta Masina", "Sophia Loren", " Monica Vitti"]
            }, {
                domanda: "La protagonista di The Scarlet Letter di Nathaniel Hawthorn si chiama", 
                r_corretta: "Esther Prynne", 
                opzioni: ["Esther Prynne", "Helen Schlegel", "Josephine March", "Jane Eyre"]
            }, {
                domanda: "A bout de souffle di Jean Luc Godard &#232; uno dei film−manifesto di:", 
                r_corretta: "Nouvelle vague", 
                opzioni: [" &#201;cole du regard", "Nouvelle vague", "Neorealismo", "Free cinema"]
            }, {
                domanda: "Michelangelo Antonioni &#232; il regista di:", 
                r_corretta: "Deserto rosso", 
                opzioni: ["Profondo rosso", "Sorgo rosso", "Deserto rosso", "Il fiume rosso"]
            }, {
                domanda: "&#200; stato assegnato, alla Mostra del Cinema di Venezia del 1992, il Leone D&#39;oro a chi?", 
                r_corretta: "Paolo Villaggio", 
                opzioni: ["Raimondo Vinello", "Ugo Tognazzi", "Paolo Villaggio", "Macario"]
            }, {
                domanda: "Quali trai seguenti non sono film di Ermanno Olmi:", 
                r_corretta: "Il posto delle fragole", 
                opzioni: ["La leggenda del Santo Bevitore", "Genesi", "L&#39;albero degli zoccoli", "Il posto delle fragole"]
            }, {
                domanda: "I film di Luis Bunuel sono caratterizzati da uno stile secco e da un umorismo che trasforma il quotidiano in fantastico, come avviene in:", 
                r_corretta: "Il fascino discreto della borghesia", 
                opzioni: ["Amarcord", "Il fascino discreto della borghesia", "L&#39;eclisse", "nessuna"]
            }, {
                domanda: " Il successo internazionale di un romanzo postumo &#232; davvero eccezionale. Tale &#232; stato il caso di:", 
                r_corretta: "Il Gattopardo", 
                opzioni: ["Il Gattopardo", "Ossi di Seppia", "V&#224; dove ti porta il cuore", "Gomorra"]
            }, {
                domanda: "“L&#39;insostenibile leggerezza dell&#39;essere” &#232; opera di:", 
                r_corretta: "Kundera", 
                opzioni: ["Kazan", "Kubrick", "Kundera", "Hesse"]
            }, {
                domanda: "La morsa e Lumie di Sicilia sono due atti unici che costituirono l&#39;esordio teatrale di", 
                r_corretta: "L. Pirandello", 
                opzioni: ["L. Pirandello", "G. Verga", "C. Pavese", "F. Tozzi"]
            }, {
                domanda: "Cos&#39;&#232; la sceneggiatura di un film?", 
                r_corretta: "la stesura del testo del film", 
                opzioni: ["insieme degli ambienti in cui si svolge il film", "gli argomenti del film", "insieme delle inquadrature del film", "la stesura del testo del film"]
            }, {
                domanda: "Come si definisce il procedimento cinematografico che permette di ampliare il formato delle proiezioni per scopi spettacolari?", 
                r_corretta: "cinemascope", 
                opzioni: ["editing", "cinemascope", " infotainment", "colophon"]
            }, {
                domanda: "Quali sono invece le uniche due attrici italiane ad aver conquistato l&#39;Oscar?", 
                r_corretta: "Anna Magnani e Sophia Loren", 
                opzioni: ["Gina Lollobrigida e Silvana Mangano", "Monica Vitti e Mariangela Melato", "Claudia Cardinale e Virna Lisi", "Anna Magnani e Sophia Loren"]
            }, {
                domanda: "Su un totale di 14 nomination, quanti Oscar si port&#242; a casa Titanic nel 1998?", 
                r_corretta: "11", 
                opzioni: ["4", "7", "9", "11"]
            }, {
                domanda: "Quale di questi attori vinse un Oscar per un ruolo recitato interamente in siciliano?", 
                r_corretta: "Robert De Niro", 
                opzioni: ["Marcello Mastroianni", "Chuck Norris", "Robert De Niro", "Gerard Depardieu"]
            }, {
                domanda: "Chi tra questi artisti ha vinto pi&#249; Oscar di qualunque altro individuo per un totale di 22 statuette?", 
                r_corretta: "Walt Disney", 
                opzioni: ["Walt Disney", "Alfred Hitchcock", "Stanley Kubrick", "Charlie Chaplin"]
            }, {
                domanda: "A cosa sopravvivono i protagonisti di Lost?", 
                r_corretta: "Guerra nucleare", 
                opzioni: ["Attentato terroristico", "Pandemia", "Incidente aereo", "Guerra nucleare"]
            }, {
                domanda: "Quale citt&#224; fa da sfondo alle vicende di Grey&#39;s Anatomy?", 
                r_corretta: "Chicago", 
                opzioni: ["New York", "Los Angeles", "Seattle", "Chicago"]
            }, {
                domanda: "Quale tra queste &#232; una delle principali abilit&#224; di Shaun Murphy, protagonista di The Good Doctor?", 
                r_corretta: "Risolvere il cubo di Rubik", 
                opzioni: ["Calcoli a mente", "Lingue straniere", "Memoria fotografica", "Risolvere il cubo di Rubik"]
            }, {
                domanda: "Le lavagne di quale personaggio di The Big Bang Theory sono celebri per le equazioni?", 
                r_corretta: "Raj", 
                opzioni: ["Leonard", "Howard", "Sheldon", "Raj"]
            }, {
                domanda: "Quale sovrano &#232; il protagonista della serie Versailles?", 
                r_corretta: "Luigi XVI", 
                opzioni: ["Luigi Filippo I", "Luigi XV", "Luigi XVI", "Luigi XIV"]
            }, {
                domanda: "In quale continente si trova la citt&#224; Approdo del Re ne Il Trono di Spade?", 
                r_corretta: "Occidentale", 
                opzioni: ["Settentrionale", "Meridionale", "Orientale", "Occidentale"]
            }, {
                domanda: "Chi furono i Peaky Blinders?", 
                r_corretta: "Una gang criminale", 
                opzioni: ["Ufficiali di polizia", "Esploratori", "Scienziati", "Una gang criminale"]
            }, {
                domanda: "Quale tra queste serie TV &#232; di genere post-apocalittico?", 
                r_corretta: "Downtown Abbey", 
                opzioni: ["Riverdale", "Emily in Paris", "Downtown Abbey", "The Walking Dead"]
            }, {
                domanda: "Di quale regista &#232; fan Dawson Leery, protagonista di Dawson&#39;s Creek?", 
                r_corretta: "Ridley Scott", 
                opzioni: ["Stanley Kubrick", "Steven Spielberg", "Chris Columbus", "Ridley Scott"]
            }, {
                domanda: "Ne L&#39;uomo nell&#39;alto castello quali potenze si spartiscono gli Stati Uniti?", 
                r_corretta: "Cina e India", 
                opzioni: ["Germania e Giappone", "Regno Unito e Francia", "Italia e Spagna", "Cina e India"]
            }, {
                domanda: "Come si chiama il protagonista di Lost?", 
                r_corretta: "Jack", 
                opzioni: ["Jack", "Julio", "Joseph", "Jos&#233;"]
            }, {
                domanda: "Cosa s&#39;intende per binge watching?", 
                r_corretta: "guardare gli episodi tutti di fila", 
                opzioni: ["guardare gli episodi con calma", "guardare gli episodi tutti di fila", "saltare gli episodi", "riguardare gli episodi"]
            }, {
                domanda: "Qual &#232; il nome del bar dove si trovano i protagonisti di Friends?",
                r_corretta: "Central Perk", 
                opzioni: ["Baretto", "Amigos", "Mc Laren&#39;s", "Central Perk"]
            }, {
                domanda: "Twin Peaks ruota attorno alla misteriosa morte di...", 
                r_corretta: "Laura Palmer", 
                opzioni: ["Ciara Palmer", "Sarah Palmer", "Laura Palmer", "Vera Palmer"]
            }
        ];

        const nat_scienza = [
            {
                domanda: "Cosa manca al pane azzimo?", 
                r_corretta: "sale", 
                opzioni: ["lievito", "olio di palma", "mollica", "sale"]
            }, {
                domanda: "Quale organo serve per la formazione della bile?", 
                r_corretta: "fegato", 
                opzioni: ["pancreas", "fegato", "stomaco", "vescica"]
            }, {
                domanda: "Che cos&#39;&#232; C6H12O6?", 
                r_corretta: "glucosio", 
                opzioni: ["glicerina", "glucosio", "formaldeide", "acqua ossigenata"]
            }, {
                domanda: "Cos&#39;&#232; la pectina?", 
                r_corretta: "polisaccaride", 
                opzioni: ["gomma", "proteina", "polisaccaride", "colla"]
            }, {
                domanda: "Cosa mangiano prevalentemente i panda?", 
                r_corretta: "bamboo", 
                opzioni: ["bamboo", "insetti", "fieno", "piccoli mammiferi"]
            }, {
                domanda: "Com&#39;&#232; chiamata una reazione chimica che produce calore?",
                r_corretta: "esotermica",
                opzioni: ["endotermica", "esotermica", "endobarica", "isobarica"]
            }, {
                domanda: "Quale elemento pesa di pi&#249;?",
                r_corretta: "oro",
                opzioni: ["rame", "magnesio", "ferro", "oro"]
            }, {
                domanda: "Quale elemento contenuto nel pesce pu&#242; essere tossico per l&#39;uomo?",
                r_corretta: "mercurio",
                opzioni: ["tellurio", "ossigeno", "mercurio", "magnesio"]
            }, {
                domanda: "Quale elemento ha un odore sgradevole se bruciato?",
                r_corretta: "zolfo",
                opzioni: ["idrogeno", "potassio", "neon", "zolfo"]
            }, {
                domanda: "Quale fenomeno non &#232; il risultato di una reazione chimica?",
                r_corretta: "evaporazione",
                opzioni: ["evaporazione", "arrugginimento", "cambiamento di colore", "sviluppo del calore"]
            }, {
                domanda: "Che cosa sono gram positivi e gram negativi?",
                r_corretta: "batteri",
                opzioni: ["funghi", "virus", "batteri", "proteine"]
            }, {
                domanda: "Che cosa fanno i ribosomi della cellula?",
                r_corretta: "sintesi proteica",
                opzioni: ["sintesi proteica", "respirazione cellulare", "fagocitosi", "glicolisi"]
            }, {
                domanda: "Quanto pu&#242; essere alta una giraffa?",
                r_corretta: "6m",
                opzioni: ["3m", "4m", "5m", "6m"]
            }, {
                domanda: "Che cos&#39;&#232; il pangasio?",
                r_corretta: "pesce",
                opzioni: ["pane", "pesce", "uccello", "insetto"]
            }, {
                domanda: "Cosa s&#39;intende per miraggio?",
                r_corretta: "illusione ottica",
                opzioni: ["illusione ottica", "arcobaleno", "forte vento", "stelle cadenti"]
            },{
                domanda: "Qual&#39;&#232; l&#39;oggetto della Psicologia?", 
                r_corretta: "studio scientifico della psiche",
                opzioni: ["le applicazioni", "il cinema", "studio della societ&#224;", "studio scientifico della psiche"]
            }, {
                domanda: "Quale ortaggio viene decorato ad Halloween?", 
                r_corretta: "zucca", 
                opzioni: ["zucca", "pomodoro", "melanzana", "peperone"]
            }, {
                domanda: "Con quale materiale puoi costruire un origami?", 
                r_corretta: "carta", 
                opzioni: ["fiori", "carta", "plastica", "vetro"]
            }, {
                domanda: "Quanti elettroni formano un ottetto completo?", 
                r_corretta: "8", 
                opzioni: ["2", "4", "6", "8"]
            }, {
                domanda: "Quale pesce &#232; famoso per nuotare controcorrente?", 
                r_corretta: "salmone", 
                opzioni: ["spigola", "luccio", "salmone", "sardina"]
            }, {
                domanda: "Quale virus ha provocato una pandemia all&#39;inizio del 2020?", 
                r_corretta: "COVID19", 
                opzioni: ["TOVID19", "COVID19", "COVIT19", "VOCID19"]
            }, {
                domanda: "Qual&#39;&#232; il composto chimico utilizzato nella piscina?", 
                r_corretta: "cloro", 
                opzioni: ["fluoro", "cloro", "bromo", "astato"]
            }, {
                domanda: "Il barracuda &#232; un tipo di...?", 
                r_corretta: "pesce", 
                opzioni: ["pesce", "roditore", "uccello", "cane"]
            }, {
                domanda: "Benjamin Franklin invent&#242;...", 
                r_corretta: "il parafulmine", 
                opzioni: ["la ruota", "il parafulmine", "Il motoscafo", "l&#39;aceto"]
            }, {
                domanda: "Il primo termometro fu realizzato da...", 
                r_corretta: "Galileo Galilei", 
                opzioni: ["Galileo Galilei", "Daniel Gabriel Fahrenheit", "Leonardo da Vinci", "Friedrich Nietzsche"]
            }, {
                domanda: "Il sassofono viene inventato dal costruttore di strumenti musicali belga Adolphe Sax nel...", 
                r_corretta: "1841", 
                opzioni: ["1778", "1612", "1945", "1841"]
            }, {
                domanda: "Invent&#242; la motocicletta a vapore...", 
                r_corretta: "Louis-Guillaume Perreaux", 
                opzioni: ["Thomas Edison", "Gottlieb Daimler", "Louis-Guillaume Perreaux", "Wilhelm Maybach"]
            }, {
                domanda: "I fratelli Wright compiono il primo volo su un aeroplano portato a termine con successo nel...", 
                r_corretta: "1903", 
                opzioni: ["1908", "1918", "1880", "1903"]
            }, {
                domanda: "Invent&#242; la macchina a vapore...", 
                r_corretta: "James Watt", 
                opzioni: ["Galileo Galilei", "Thomas Edison", "James Watt", "Benjamin Franklin"]
            }, {
                domanda: "Nel 1829 W.A Burt brevetta...", 
                r_corretta: "la macchina da scrivere", 
                opzioni: ["la macchina da scrivere", "il frigorifero", "il televisore", "la radio"]
            }, {
                domanda: "Chi inventó la pastorizzazione?", 
                r_corretta: "Louis Pasteur", 
                opzioni: ["Louis Pasteur", "Thomas Alva Edison", "Heinrich Hertz", "Antonio Meucci"]
            }, {
                domanda: "Chi inventó la macchina da cucire?", 
                r_corretta: "Isaac Singer", 
                opzioni: ["Georges Audemars", "George Pullman", "Levi Strauss", "Isaac Singer"]
            }, {
                domanda: "Nel 1901 trasmette via radio una lettera dell&#39;alfabeto Morse attraverso l&#39;oceano Atlantico:", 
                r_corretta: "Guglielmo Marconi", 
                opzioni: ["Guglielmo Marconi", "Samuel Morse", "Antonio Meucci", "Nikola Tesla"]
            }, {
                domanda: "La Penicillina venne scoperta da...", 
                r_corretta: "Alexander Fleming", 
                opzioni: ["Louis Pasteur", "Ernst Boris Chain", "Alexander Fleming", "James Parkinson"]
            }, {
                domanda: "Secondo gli studiosi la ruota fu inventata nell&#39;antica Mesopotamia...", 
                r_corretta: "dai Sumeri", 
                opzioni: ["dagli Egiziani", "dai Maya", "dai Sumeri", "dai Romani"]
            }, {
                domanda: "Venere possiede...", 
                r_corretta: "una massa simile alla terrestre", 
                opzioni: ["una massa simile alla terrestre", "8 satelliti", "2 anelli", "un atmosfera densa di gas di color rosso"]
            }, {
                domanda: "Il sistema solare si divide in...", 
                r_corretta: "interno ed esterno", 
                opzioni: ["primo e secondo", "di sopra e di sotto", "maggiore e minore", "interno ed esterno"]
            }, {
                domanda: "Il pianeta pi&#249; piccolo del nostro sistema solare &#232;...", 
                r_corretta: "Mercurio", 
                opzioni: ["Marte", "Venere", "Mercurio", "Nettuno"]
            }, {
                domanda: "Il nostro sistema solare ha 5...", 
                r_corretta: "pianeti nani", 
                opzioni: ["pianeti", "asteroidi", "soli", "pianeti nani"]
            }, {
                domanda: "Quale di questi pianeti non &#232; uno dei giganti gassosi?", 
                r_corretta: "Marte", 
                opzioni: ["Giove", "Urano", "Nettuno", "Marte"]
            }, {
                domanda: "La Luna compie un orbita ellittica completa della sfera celeste in...", 
                r_corretta: "27 giorni circa", 
                opzioni: ["27 giorni circa", "24 ore circa", "un anno circa", "due mesi"]
            }, {
                domanda: "Quali tra questi animali &#232; il pi&#249; pericoloso per l&#39;uomo?", 
                r_corretta: "Zanzara tigre", 
                opzioni: ["Squalo bianco", "Zanzara tigre", "Leone", "Serpente a sonagli"]
            }, {
                domanda: "I koala si trovano principalmente...", 
                r_corretta: "in Australia", 
                opzioni: ["in Australia", "in Germania", "in Venezuela", "in Cina"]
            }, {
                domanda: "L&#39; orso dagli occhiali vive in...", 
                r_corretta: "America meridionale", 
                opzioni: ["Mongolia", "America meridionale", "Cina", "Giappone"]
            }, {
                domanda: "La Fascia di Kuiper &#232; un fascia di asteroidi posta..", 
                r_corretta: "al confine del sistema solare", 
                opzioni: ["al confine del sistema solare", "attorno a Saturno", "attorno alla Terra", "tra Giove e Saturno"]
            }, {
                domanda: "Una nana rossa &#232; una stella...", 
                r_corretta: "piccola e fredda", 
                opzioni: ["piccola e fredda", "grande", "piccola e calda", "grande e di colore rosso o arancione"]
            }, {
                domanda: "La stella visibile dalla Terra pi&#249; luminosa dopo il nostro Sole &#232;...", 
                r_corretta: "Sirio", 
                opzioni: ["Betelgeuse", "Giove", "Sirio", "Rigel"]
            }, {
                domanda: "La Margherita ha i petali generalmente...", 
                r_corretta: "bianchi", 
                opzioni: ["verdi", "rossi", "bianchi", "gialli"]
            }, {
                domanda: "L&#39;alloro ha fiori...", 
                r_corretta: "gialli", 
                opzioni: ["blu", "rossi", "verdi", "gialli"]
            }, {
                domanda: "Quale &#232; il pesce pi&#249; grande degli oceani?", 
                r_corretta: "Lo squalo balena", 
                opzioni: ["La balena azzurra", "Il capodolio", "Lo squalo balena", "Lo squalo bianco"]
            }, {
                domanda: "La gestazione della foca dura circa...", 
                r_corretta: "undici mesi", 
                opzioni: ["cinque mesi", "undici mesi", "due mesi", "nove mesi"]
            }, {
                domanda: "La foca &#232;...", 
                r_corretta: "un mammifero", 
                opzioni: ["un uccello", "un pesce", "un mammifero", "un rettile"]
            }, {
                domanda: "Quanto puó essere alta una Giraffa?", 
                r_corretta: "5 metri", 
                opzioni: ["4 metri", "5 metri", "7 metri", "10 metri"]
            }
        ];
        
        let t=`
            <div id="card">
                <div id="davanti">
                    <img src="img/carta.png" id="pic">
                    <INPUT type="button" id="bottone" value="Rivela" onclick="flip();" />
                </div>
                <div id="dietro"></div>
            </div>`;
        document.getElementById("map").innerHTML += t;
        
        let quiz = {
            conten: null,
            domanda: null,
            risposte: null,
        }

        let argomento = [];
        let colore_triangolino;
        switch (materia) {
            case "storia":
                argomento = storia;
                colore_triangolino = "rgb(239, 208, 45)";
                break;
            case "geografia":
                argomento = geografia;
                colore_triangolino = "rgb(75, 162, 242)";
                break;
            case "art_letter":
                argomento = art_letter;
                colore_triangolino = "rgb(188, 75, 242)";
                break;
            case "intrattenimento":
                argomento = intrattenimento;
                colore_triangolino = "rgb(249, 60, 173)";
                break;
            case "sport_hobby":
                argomento = sport_hobby;
                colore_triangolino = "rgb(239, 119, 51)";
                break;
            case "nat_scienza":
                argomento = nat_scienza;
                colore_triangolino = "rgb(83, 208, 96)";
                break;
        }
        
        let random = Math.floor(Math.random() * (argomento.length));

        function gira() {
            let card = document.getElementById("card");
            card.style.transform = "rotatey(180deg)";
            card.style.transition = "1s ease";
            bottone = document.getElementById("bottone");
            bottone.disabled = true;
            let dav = document.getElementById("davanti");
            dav.style.display = "none";
            load();
        }
        
        flip=gira;
        
        function load() {
            quiz.conten = document.getElementById("dietro");
            let t = `<p id="tempo"></p>`;
            document.getElementById("dietro").innerHTML += t;
            quiz.domanda = document.createElement("div");
            quiz.domanda.id = "dom";
            quiz.conten.appendChild(quiz.domanda);
            quiz.risposte = document.createElement("div");
            quiz.risposte.id = "ris";
            quiz.conten.appendChild(quiz.risposte);
            inserisci();
        }

        function inserisci() {
            let t_iniziale="Tempo: 8s";
            document.getElementById("tempo").innerHTML=t_iniziale;
            let tempo = 7;
            let timer = setInterval(function(){
                if(tempo <= 0){
                    clearInterval(timer);
                    again=false;
                    verifica();
                }else{
                    let t="Tempo: "+tempo+"s";
                    document.getElementById("tempo").innerHTML=t;
                    tempo -= 1;
                }
            }, 1000);
            quiz.domanda.innerHTML = argomento[random].domanda;
            quiz.risposte.innerHTML = "";
            for (let i in argomento[random].opzioni) {
                let label = document.createElement("label");
                label.innerHTML = argomento[random].opzioni[i];
                label.id = "quiz" + i;
                label.addEventListener("click", () => {
                    clearInterval(timer);
                    click(label.id, label);
                });
                quiz.risposte.appendChild(label);
            }
        }

        function click(id, opzioni) {
            let all = quiz.risposte.getElementsByTagName("label");
            for (let label of all) {
                label.style.pointerEvents = "none";
            }
            let scelta = document.getElementById(id).innerHTML;
            let correct = (scelta == argomento[random].r_corretta);
            if (correct) {
                again = true;
                opzioni.classList.add("correct");
            } else {
                opzioni.classList.add("wrong");
            }
            verifica();
        }
        
        function verifica(){
            setTimeout(function () {
                let element = document.getElementById("card");
                element.remove();
                if (again) {
		    		again = false;	
		    		if (triangolo){
		    		    for(let i=1; i<=6; i++){
		    		        id_triangolino = document.getElementById("Triangolino_"+i+"_"+ giocatore );
		    		        if (id_triangolino.style.fill===colore_triangolino){
		    		            break;
		    		        }
		    		        if (id_triangolino.style.fill==="rgba(228, 231, 231, 0.4)"){
                                id_triangolino.style.fill=colore_triangolino;
                                if(i == 6){
                                setTimeout(function(){
                                    win(giocatore);
                                }, 2000);
                            }
		    		            break;
		    		        }
		    		    }
		    		}
                    turno();
                } else {
                    if (giocatore == (numeroGiocatori - 1)) {
                        giocatore = 0;
                    } else {
                        giocatore += 1;
                    }
					turno();
                }
            }, 1000);
        }
    }
    
    function win(giocatore){
        let t=`
            <div id="vincita">
                <img src="img/scritta.png" id="congra">
                <img src="img/lista.png" id="lista">
                <h3>Giocatore ` + (giocatore+1) + ` ha vinto la partita!</h3>
                <input type="button" id="btn" value="Gioca un&#39;altra partita" onclick="nuovoGioco();"/>
            </div>`;
        document.body.innerHTML += t;
    }
    
    function partita(){
        let element = document.getElementById("vincita");
        element.remove();
        for(let i=0; i<numeroGiocatori; i++){
            let el = document.getElementById("pedina_"+i);
            el.remove();
        }
        gameplay();
    }
    nuovoGioco=partita;
	
    function nrGiocatori(){
        let t=`
            <div id="nrGiocatori">
                <form onsubmit="nomiGiocatori();">
                    <h3>In quanti si vuole giocare? Da un minimo di 1 ad un massimo di 6 giocatori?</h3><br>
                    <input type="number" id="nGiocatori" min="1" max="6" step="1" required><br><br>
                    <input type="submit" value="Fatto!" id="btn">
                </form>
            </div>`;
        document.body.innerHTML += t;
    }
    nomiGiocatori=nicknames;
    
    function nicknames() {
        numeroGiocatori = document.getElementById("nGiocatori").value;
        let element=document.getElementById("nrGiocatori");
        element.remove();
        let a=`
            <div id="nicknames">
                <form onsubmit="insert();">
                    <h2> Inserisci nomi dei giocatori: </h2>
                    <div id="nome">
                    </div><br>
                    <input type="submit" value="Fatto!" id="btn">
                </form>
            </div>`;
        document.body.innerHTML += a;
        for (let i=0; i<numeroGiocatori; i++){
            let b = `
                <p>Giocatore `+(i+1)+`</p>
                <input type="text" id="nome`+i+`" required>`;
            document.getElementById("nome").innerHTML += b;
        }
    }
    insert=inizializza;
    
    function visualizzaNomi() {
        let t = `<div id="players">
                    <h2>Giocatori:</h2>
                    <div id="nomi">
                    </div>
                </div>`;
        document.getElementById("gioco").innerHTML += t;
        for (let i=0; i<numeroGiocatori; i++) {
            let li = document.createElement("li");
            li.innerHTML = players[i].nome;
            li.id = "li" + i;
            document.getElementById("nomi").appendChild(li);
        }
    }
    
	function inizializza(){
		let inizio = document.getElementById("pedina_esempio");
		let dimensioni = inizio.getBoundingClientRect();
		let esagono = document.getElementById("esagono");
		let posizione = esagono.getBoundingClientRect();
		let topDefault = (posizione.top - (dimensioni.height / 2) + (posizione.height / 2) + window.pageYOffset) + "px";
		let leftDefault = (posizione.left - (dimensioni.width / 2) + (posizione.width / 2) + window.pageXOffset) + "px";
		let colori = ["rgb(239, 119, 51)","rgb(75, 162, 242)","rgb(188, 75, 242)","rgb(83, 208, 96)","rgb(249, 60, 173)","rgb(239, 208, 45)" ]
        
        for (let i=0; i<numeroGiocatori; i++){
            let nome = document.getElementById("nome"+i).value;
            let giocator = {
                nome: nome,
                id_casella: "esagono",
                id_pedina: `pedina_${i}`,
            }
            players.push(giocator);
        }
        let element=document.getElementById("nicknames");
        element.remove();
        visualizzaNomi();
		for (let i=numeroGiocatori-1; i>=0; i--){
			let text =
				` <div id="pedina_` + i + `" class="pedina">
					<svg width="4vh" height="4vh" viewBox="52 40 390 435" fill="none">
						<g id="Radial 1">
							<circle id="contornoPedina" fill="`+ colori[i] +`" cx="246" cy="257" r="215" fill="#B31818"/>
							<g id="Segment 1">
								<path id="Triangolino_1_`+ i +`" style="fill:rgb(228, 231, 231,0.4)" d="M354.853 89.2909C381.496 106.505 403.662 129.809 419.523 157.279C435.383 184.75 444.481 215.599 446.067 247.279L266.292 256.279C266.134 253.111 265.224 250.026 263.638 247.279C262.052 244.532 259.835 242.202 257.171 240.48L354.853 89.2909Z" />         
							</g>
							<g id="Segment 2">
								<path id="Triangolino_2_`+ i +`" style="fill:rgb(228, 231, 231,0.4)" d="M446.067 267.279C444.481 298.96 435.383 329.809 419.523 357.279C403.662 384.75 381.496 408.054 354.853 425.268L257.171 274.078C259.835 272.357 262.052 270.026 263.638 267.279C265.224 264.532 266.134 261.447 266.292 258.279L446.067 267.279Z" />
							</g>
							<g id="Segment 3">
								<path id="Triangolino_3_`+ i +`" style="fill:rgb(228, 231, 231,0.4)" d="M337.532 435.268C309.303 449.734 278.038 457.279 246.318 457.279C214.597 457.279 183.332 449.734 155.103 435.268L237.196 275.078C240.019 276.525 243.145 277.279 246.318 277.279C249.49 277.279 252.616 276.525 255.439 275.078L337.532 435.268Z" />
							</g>
							<g id="Segment 4">
								<path id="Triangolino_4_`+ i +`" style="fill:rgb(228, 231, 231,0.4)" d="M137.782 425.268C111.139 408.054 88.9725 384.75 73.1124 357.279C57.2523 329.809 48.1537 298.96 46.5677 267.279L226.343 258.279C226.501 261.447 227.411 264.532 228.997 267.279C230.583 270.026 232.8 272.357 235.464 274.078L137.782 425.268Z" />
							</g>
							<g id="Segment 5">
								<path id="Triangolino_5_`+ i +`" style="fill:rgb(228, 231, 231,0.4)" d="M46.5677 247.279C48.1537 215.599 57.2523 184.75 73.1124 157.279C88.9725 129.809 111.139 106.505 137.782 89.2909L235.464 240.48C232.8 242.202 230.583 244.532 228.997 247.279C227.411 250.026 226.501 253.111 226.343 256.279L46.5677 247.279Z" />
							</g>
                            <g id="Segment 6"> 
								<path id="Triangolino_6_`+ i +`" style="fill:rgb(228, 231, 231,0.4)" d="M155.103 79.2909C183.332 64.8241 214.597 57.2793 246.318 57.2793C278.038 57.2793 309.303 64.8241 337.532 79.2909L255.439 239.48C252.616 238.034 249.49 237.279 246.318 237.279C243.145 237.279 240.019 238.034 237.196 239.48L155.103 79.2909Z" />
							</g>
						</g>
					</svg>
				</div>`		
				
				document.getElementById("map").innerHTML +=text;
		}
		for (let i=0; i<numeroGiocatori; i++){
			let elemento = document.getElementById(players[i].id_pedina);
			elemento.style.top= topDefault;
			elemento.style.left = leftDefault;
		}
        turno();
	}
    

	function turno(){
        let divPlayers=document.getElementById("players");
        divPlayers.remove();
        visualizzaNomi();
        turnoGiocatore=document.getElementById("li"+giocatore);
        turnoGiocatore.style.color="black";
        clickElementi();
		lanciaDado();
	}
	
	nrGiocatori();
}
