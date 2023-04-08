function play() {
    let element = document.getElementById("play");
    element.remove();
    let gioco = document.getElementById("gioco");
    gioco.style.filter = "none";
    gameplay();
}

let insert, flip, nuovoGioco;
function gameplay(){
    let Pedine = [];
	let skipMove = true;
	let again = false;
	let giocatore = 0;

	function clickElementi(){
		$(document).ready(function () {
			$("#Ellipse").click(function () {
				posizione("Polygon_2", "geografia", true);
			});
			$("#Polygon_2").click(function () {
				posizione("Polygon_2", "geografia", true);
			});
			$("#Ellipse_2").click(function () {
				posizione("Polygon_1", "sport_hobby", true);
			});
			$("#Polygon_1").click(function () {
				posizione("Polygon_1", "sport_hobby", true);
			});
			$("#Ellipse_3").click(function () {
				posizione("Polygon_6", "storia", true);
			});
			$("#Polygon_6").click(function () {
				posizione("Polygon_6", "storia", true);
			});
			$("#Ellipse_4").click(function () {
				posizione("Polygon_5", "intrattenimento", true);
			});
			$("#Polygon_5").click(function () {
				posizione("Polygon_5", "intrattenimento", true);
			});
			$("#Ellipse_5").click(function () {
				posizione("Polygon_4", "nat_scienza", true);
			});
			$("#Polygon_4").click(function () {
				posizione("Polygon_4", "nat_scienza", true);
			});
			$("#Ellipse_6").click(function () {
				posizione("Polygon_3", "art_letter", true);
			});
			$("#Polygon_3").click(function () {
				posizione("Polygon_3", "art_letter", true);
			});
			$("#Ellipse_7").click(function () {
				posizione("Ellipse_7", "ritira");
			});
			$("#Ellipse_8").click(function () {
				posizione("Ellipse_8", "intrattenimento");
			});
			$("#Ellipse_9").click(function () {
				posizione("Ellipse_9", "intrattenimento");
			});
			$("#Ellipse_10").click(function () {
				posizione("Ellipse_10", "ritira");
			});
			$("#Ellipse_11").click(function () {
				posizione("Ellipse_11", "storia");
			});
			$("#Ellipse_12").click(function () {
				posizione("Ellipse_12", "art_letter");
			});
			$("#Ellipse_13").click(function () {
				posizione("Ellipse_13", "ritira");
			});
			$("#Ellipse_14").click(function () {
				posizione("Ellipse_14", "nat_scienza");
			});
			$("#Ellipse_15").click(function () {
				posizione("Ellipse_15", "nat_scienza");
			});
			$("#Ellipse_16").click(function () {
				posizione("Ellipse_16", "ritira");
			});
			$("#Ellipse_17").click(function () {
				posizione("Ellipse_17", "intrattenimento");
			});
			$("#Ellipse_18").click(function () {
				posizione("Ellipse_18", "geografia");
			});
			$("#Ellipse_19").click(function () {
				posizione("Ellipse_19", "ritira");
			});
			$("#Ellipse_20").click(function () {
				posizione("Ellipse_20", "art_letter");
			});
			$("#Ellipse_21").click(function () {
				posizione("Ellipse_21", "art_letter");
			});
			$("#Ellipse_22").click(function () {
				posizione("Ellipse_22", "ritira");
			});
			$("#Ellipse_23").click(function () {
				posizione("Ellipse_23", "nat_scienza");
			});
			$("#Ellipse_24").click(function () {
				posizione("Ellipse_24", "sport_hobby");
			});
			$("#Ellipse_25").click(function () {
				posizione("Ellipse_25", "ritira");
			});
			$("#Ellipse_26").click(function () {
				posizione("Ellipse_26", "geografia");
			});
			$("#Ellipse_27").click(function () {
				posizione("Ellipse_27", "geografia");
			});
			$("#Ellipse_28").click(function () {
				posizione("Ellipse_28", "ritira");
			});
			$("#Ellipse_29").click(function () {
				posizione("Ellipse_29", "art_letter");
			});
			$("#Ellipse_30").click(function () {
				posizione("Ellipse_30", "storia");
			});
			$("#Ellipse_31").click(function () {
				posizione("Ellipse_31", "ritira");
			});
			$("#Ellipse_32").click(function () {
				posizione("Ellipse_32", "sport_hobby");
			});
			$("#Ellipse_33").click(function () {
				posizione("Ellipse_33", "sport_hobby");
			});
			$("#Ellipse_34").click(function () {
				posizione("Ellipse_34", "ritira");
			});
			$("#Ellipse_35").click(function () {
				posizione("Ellipse_35", "geografia");
			});
			$("#Ellipse_36").click(function () {
				posizione("Ellipse_36", "intrattenimento");
			});
			$("#Ellipse_37").click(function () {
				posizione("Ellipse_37", "ritira");
			});
			$("#Ellipse_38").click(function () {
				posizione("Ellipse_38", "storia");
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
			$("#Ellipse_42").click(function () {
				posizione("Ellipse_42", "nat_scienza");
			});
			$("#esagono").click(function () {
				posizione("esagono", "ritira");
			});
			$("#centro").click(function () {
				posizione("esagono", "ritira");
			});
			$("#Rectangle_1_1").click(function () {
				posizione("Rectangle_1_1", "geografia");
			});
			$("#Rectangle_2_1").click(function () {
				posizione("Rectangle_2_1", "storia");
			});
			$("#Rectangle_3_1").click(function () {
				posizione("Rectangle_3_1", "intrattenimento");
			});
			$("#Rectangle_4_1").click(function () {
				posizione("Rectangle_4_1", "art_letter");
			});
			$("#Rectangle_5_1").click(function () {
				posizione("Rectangle_5_1", "nat_scienza");
			});
			$("#Rectangle_1_2").click(function () {
				posizione("Rectangle_1_2", "sport_hobby");
			});
			$("#Rectangle_2_2").click(function () {
				posizione("Rectangle_2_2", "storia");
			});
			$("#Rectangle_3_2").click(function () {
				posizione("Rectangle_3_2", "geografia");
			});
			$("#Rectangle_4_2").click(function () {
				posizione("Rectangle_4_2", "art_letter");
			});
			$("#Rectangle_5_2").click(function () {
				posizione("Rectangle_5_2", "intrattenimento");
			});
			$("#Rectangle_1_3").click(function () {
				posizione("Rectangle_1_3", "art_letter");
			});
			$("#Rectangle_2_3").click(function () {
				posizione("Rectangle_2_3", "sport_hobby");
			});
			$("#Rectangle_3_3").click(function () {
				posizione("Rectangle_3_3", "storia");
			});
			$("#Rectangle_4_3").click(function () {
				posizione("Rectangle_4_3", "nat_scienza");
			});
			$("#Rectangle_5_3").click(function () {
				posizione("Rectangle_5_3", "intrattenimento");
			});
			$("#Rectangle_1_4").click(function () {
				posizione("Rectangle_1_4", "geografia");
			});
			$("#Rectangle_2_4").click(function () {
				posizione("Rectangle_2_4", "sport_hobby");
			});
			$("#Rectangle_3_4").click(function () {
				posizione("Rectangle_3_4", "art_letter");
			});
			$("#Rectangle_4_4").click(function () {
				posizione("Rectangle_4_4", "nat_scienza");
			});
			$("#Rectangle_5_4").click(function () {
				posizione("Rectangle_5_4", "storia");
			});
			$("#Rectangle_1_5").click(function () {
				posizione("Rectangle_1_5", "sport_hobby");
			});
			$("#Rectangle_2_5").click(function () {
				posizione("Rectangle_2_5", "intrattenimento");
			});
			$("#Rectangle_3_5").click(function () {
				posizione("Rectangle_3_5", "nat_scienza");
			});
			$("#Rectangle_4_5").click(function () {
				posizione("Rectangle_4_5", "geografia");
			});
			$("#Rectangle_5_5").click(function () {
				posizione("Rectangle_5_5", "art_letter");
			});
			$("#Rectangle_1_6").click(function () {
				posizione("Rectangle_1_6", "storia");
			});
			$("#Rectangle_2_6").click(function () {
				posizione("Rectangle_2_6", "intrattenimento");
			});
			$("#Rectangle_3_6").click(function () {
				posizione("Rectangle_3_6", "sport_hobby");
			});
			$("#Rectangle_4_6").click(function () {
				posizione("Rectangle_4_6", "geografia");
			});
			$("#Rectangle_5_6").click(function () {
				posizione("Rectangle_5_6", "nat_scienza");
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
			setTimeout(function() { 
				skipMove= false;
			}, 5000);
		}

	}
	
	function posizione(id, materia, triangolo = false) {
		let pedina = document.getElementById(Pedine[giocatore]);
		let dimensioni = pedina.getBoundingClientRect();
		let indirizzo = document.getElementById(id);
		let posizione = indirizzo.getBoundingClientRect();
		if (!skipMove){
			skipMove= true;
			setTimeout( function() { 
				pedina.style.top = (posizione.top - (dimensioni.height / 2) + (posizione.height / 2) + window.pageYOffset) + "px";
				pedina.style.left = (posizione.left - (dimensioni.width / 2) + (posizione.width / 2) + window.pageXOffset) + "px";
				setTimeout( function() {
					if (materia=="ritira"){
						turno();
					}else{
						carta(materia, triangolo);
					}
				}, 300);
			}, 1000);
		}
	}
    
    function carta(materia, triangolo) {
        const storia = [
            {
                domanda: "Chi &#232; il padre degli dei?",
                r_corretta: "Zeus",
                opzioni: ["Ares", "Ade", "Zeus", "Apollo"]
            }, {
                domanda: "Chi era il presidente americano nel 2018?",
                r_corretta: "Donald Trump",
                opzioni: ["Donald Duck", "Donald Trump", "Barack Obama", "George Bush"]
            }, {
                domanda: "Cosa conquist&#232; Giulio Cesare?",
                r_corretta: "Gallia",
                opzioni: ["Sicilia", "Russia", "Australia", "Gallia"]
            }, {
                domanda: "Quando entro l'Italia nella prima guerra mondiale?",
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
                domanda: "Nell'Antico Egitto che tecnica si utilizza per la sepoltura dei Faraoni?",
                r_corretta: "mummificazione",
                opzioni: ["cremazione", "in pasto ai cani", "purificazione", "mummificazione"]
            }, {
                domanda: "Chi ha scritto le 95 tesi che diedero inizio alla Riforma Protestante?",
                r_corretta: "Martin Lutero",
                opzioni: ["Immanuel Kant", "Thomas More", "Martin Lutero", "Giacomo Leopardi"]
            }, {
                domanda: "Quando l' Italia ha preso parte alla prima guerra mondiale a chi dichiara guerra?",
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
                r_corretta: "L'Avanti",
                opzioni: ["La Repubblica", "Il fatto quotidiano", "L'Avanti", "Non &#232; mai stato direttore di alcun giornale"]
            }, {
                domanda: "In che anno il governo Giolitti diede le dimissioni dopo l'uscita dei radicali?",
                r_corretta: "1914",
                opzioni: ["1913", "1914", "1915", "1916"]
            }, {
                domanda: "In seguito a cosa inizi&#242; la Seconda Guerra Mondiale?",
                r_corretta: "L'invasione della Polonia",
                opzioni: ["L'invasione della Francia", "Nessuna delle risposte precendenti", "L'invasione della Polonia", "L'invasione dell'Inghilterra"]
            }, {
                domanda: "Il sindacato dei lavoratori italiani fondato nel 1906 si chiamava:",
                r_corretta: "Confederazione Generale del Lavoro",
                opzioni: ["Unione Lavoratori", "Confederazione Italiana Dirigenti d'Azienda", "Confederazione Generale del Lavoro", "Confederazione Italiana Sindacati Lavoratori"]
            }, {
                domanda: "Uno dei piani politici-economici messi in atto dagli Stati Uniti dopo la Seconda Guerra Mondiale si chiamava:",
                r_corretta: "Il Piano Marshall",
                opzioni: ["Il Piano Marshall", "Il Trattato di Lisbona", "Il Trattato di Maastricht", "I Patti Lateranensi"]
            }, {
                domanda: "In che anno fu firmato l'armistizio che port&#242; alla conclusione della prima guerra mondiale?",
                r_corretta: "Novembre 1918",
                opzioni: ["Aprile 1919", "Novembre 1919", "Marzo 1918", "Novembre 1918"]
            }, {
                domanda: "In che anno Mussolini dichiar&#242; guerra alla Gran Bretagna e alla Francia?",
                r_corretta: "1940",
                opzioni: ["1939", "1940", "1941", "1938"]
            }, {
                domanda: "Come si chiama una parte dell'India che divenne uno stato autonomo nel 1947?",
                r_corretta: "Pakistan",
                opzioni: ["Pakistan", "Delhi", "Manipur", "Tibet"]
            }, {
                domanda: "Che tassa venne introdotto durante il periodo fascista?",
                r_corretta: "sul celibato",
                opzioni: ["sul grano", "sugli allevamenti", "sul celibato", "sui terreni"]
            }, {
                domanda: "Che legge venne approvata in Italia dal Parlamento nel 1970?",
                r_corretta: "La legge sul divorzio",
                opzioni: ["La legge sull'aborto", "La legge sulle carceri", "La legge sull'omosessualit&#224;", "La legge sul divorzio"]
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
                domanda: "In che scandalo fu coinvolto l’ex-presidente americano Reagan?",
                r_corretta: "Irangate",
                opzioni: ["Irangate", "Watergate", "Fu coinvolto sia nel watergate che nell'irangate", "Non fu coinvolto in nessuno scandalo"]
            }, {
                domanda: "Che fenomeno demografico particolarmente importante ci fu tra il 1950 e il 1970?",
                r_corretta: "L’emigrazione dal Sud verso il nord Italia",
                opzioni: ["L’emigrazione dal Sud verso il nord Italia", "L'immigrazione di albanesi", "Lo sbarco di profughi albanesi", "L'aumento della mortalit&#224; a causa della malaria"]
            }, {
                domanda: "Cosa venne approvato nel 1947?",
                r_corretta: "L'abolizione della pena di morte",
                opzioni: ["La legge sull'aborto", "La legge sul divorzio", "La dichiarazione sulla discriminazione razziale", "L'abolizione della pena di morte"]
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
                domanda: "Elisabetta I d'Inghilterra fu figlia di Enrico VIII e:",
                r_corretta: "Anna Bolena",
                opzioni: ["Catherine Howard", "Caterina d'Aragona", "Anna Bolena", "Jane Seymour"]
            }, {
                domanda: "Federico II di Svevia fu imperatore:",
                r_corretta: "del Sacro Romano Impero",
                opzioni: ["dell'impero Bizantino", "dell'impero coloniale Francese", "dell'impero Russo ", "del Sacro Romano Impero"]
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
                domanda: "Giovanna D'Arco guid&#242; i Francesi:",
                r_corretta: "nella guerra dei cent'anni",
                opzioni: ["nella guerra dei sette anni", "nella guerra dei cent'anni", "nel conflitto greco-gotico", "nella prima crociata"]
            }
        ];
        
        const geografia = [
            {
                domanda: "Dove si trova il Brasile?",
                r_corretta: "Sud America",
                opzioni: ["Centro America", "Sud America", "Australia", "Europa"]
            }, {
                domanda: "Cos'&#232; la Sardegna?",
                r_corretta: "isola",
                opzioni: ["penisola", "arcipelago", "citt&#224;", "isola"]
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
                domanda: "Qual'&#232; la lingua principale in Porto Rico?",
                r_corretta: "spagnolo",
                opzioni: ["inglese", "spagnolo", "francese", "italiano"]
            }, {
                domanda: "Dove si trova la stazione ferroviaria Tiburtina?",
                r_corretta: "Roma",
                opzioni: ["Genova", "Roma", "Venezia", "Milano"]
            }, {
                domanda: "Quali di questi stati non si trova nell'Unione Europea?",
                r_corretta: "Islanda",
                opzioni: ["Cipro", "Germania", "Malta", "Islanda"]
            }, {
                domanda: "Dov'&#232; prodotta la Peroni?",
                r_corretta: "Italia",
                opzioni: ["Spagna", "Burundi", "Bangladesh", "Italia"]
            }, {
                domanda: "Dov'&#232; lo Zimbabwe?",
                r_corretta: "Sud Africa",
                opzioni: ["Asia", "Nord Africa", "Sud America", "Sud Africa"]
            }, {
                domanda: "Qual'&#232; il nome del canale che divide il Mar Mediterraneo dal Mar Rosso?",
                r_corretta: "Suez",
                opzioni: ["Corinto", "Panama", "Suez", "Nessuna risposta &#232; corretta"]
            }, {
                domanda: "Dov’&#232; la Citt&#224; Proibita?", 
                r_corretta: "Pechino", 
                opzioni: ["Pechino", "La Mecca", "El Cairo", "Bombay"]
            }, {
                domanda: "In quale citt&#224; si trova Piazza Affari?", 
                r_corretta: "Milano", 
                opzioni: ["Roma", "Firenze", "Milano", "Napoli"]
            }, {
                domanda: "Dove si trova l'Eretteo?", 
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
                domanda: "Quale di questi paesi non &#232; nel Corno d’Africa?", 
                r_corretta: "Costa d’Avorio", 
                opzioni: ["Gibuti", "Somalia", "Etiopia", "Costa d’Avorio"]
            }, {
                domanda: "Il fiume Yalu &#232; un fiume di confine tra:", 
                r_corretta: "Cina e Corea del Nord", 
                opzioni: ["India e Nepal", "Cina e Corea del Nord", "Corea del Nord e Corea del Sud", "India e Bangladesh"]
            }, {
                domanda: "Il Monte Titano &#232; la montagna pi&#249; alta di:", 
                r_corretta: "San Marino", 
                opzioni: ["Malta", "Monaco", "Andorra", "San Marino"]
            }, {
                domanda: "Quale di questi paesi non &#232; un territorio britannico d’oltremare?", 
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
                domanda: "Quale fu la capitale d’Italia tra il 1865 e il 1871?", 
                r_corretta: "Firenze", 
                opzioni: ["Torino", "Napoli", "Firenze", "Roma"]
            }, {
                domanda: "Qual’&#232; la capitale della Repubblica Democratica del Congo?", 
                r_corretta: "Kinshasa", 
                opzioni: ["Aba", "Kinshasa", "Maseru", "Lilongwe"]
            }, {
                domanda: "Il Mare di Ross appartiene all’oceano:", 
                r_corretta: "Antartico", 
                opzioni: ["Pacifico", "Indiano", "Atlantico", "Antartico"]
            }, {
                domanda: "Qual &#232; il principale passaggio naturale tra il Pacifico e l’Oceano Atlantico?", 
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
                domanda: "L’atleta Oscar Pistorius, che correva i 400 m con due protesi in fibra di carbonio, &#232; di nazionalit&#224;:",
                r_corretta: "sudafricana",
                opzioni: ["finlandese", "brasiliana", "argentina", "sudafricana"]
            }, {
                domanda: "In atletica leggera, l'impugnatura a maniglia &#232; riferita a lanciatori di:",
                r_corretta: "martello",
                opzioni: ["martello", "peso", "giavellotto", "disco"]
            }, {
                domanda: "Lo stretching &#232; utilizzato per:",
                r_corretta: "elasticizzare, migliorare la mobilit&#224; articolare, allenare il sistema propriocettori-nervomuscolari",
                opzioni: ["elasticizzare, migliorare la mobilit&#224; articolare, allenare il sistema propriocettori-nervomuscolari", "migliorare la potenza esplosiva muscolare", "migliorare la potenza reattiva muscolare", "allungare fino al massimo di 1 cm una struttura muscolare"]
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
                opzioni: ["Volteggio e sbarra", "Corpo libero e volteggio", "Trave e parallele asimmetriche", "Cavallo con maniglie e parallele asimmetriche"]
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
                domanda: "Quale paese ha gareggiato pi&#249; volte alle Olimpiadi estive ma non ha vinto una medaglia d'oro?",
                r_corretta: "Le Filippine",
                opzioni: ["Le Filippine", "San Marino", "Birmania", "Laos"]
            }, {
                domanda: "Alle Olimpiadi del 1971, Nadia Comaneci fu la prima ginnasta a segnare un punteggio perfetto. Quale paese rappresentava?",
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
                r_corretta: "",
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
                r_corretta: "Medaglie d'argento",
                opzioni: ["Medaglie d'argento", "Medaglie d'oro", "Collane di diamanti", "Coppe dorate"]
            }, {
                domanda: "Cosa rappresentano gli anelli alle Olimpiadi?",
                r_corretta: "I continenti del mondo",
                opzioni: ["I continenti del mondo", "Gli sport presenti nella prima Olimpiade moderna ", "I colori primari", "I colori della bandiera ospitante"]
            }
        ];
        
        const art_letter = [
            {
                domanda: "Non &#232; bello ci&#242; che &#232; bello. . .",
                r_corretta: "ma &#232; bello ci&#242; che piace",
                opzioni: ["ma &#232; bello ci&#242; che non &#232; bello", "perch&#232; nulla &#232; bello", "ma &#232; bello ci&#242; che costa", "ma &#232; bello ci&#242; che piace"]
            }, {
                domanda: "Chi ha progettato Piazza San Pietro a Roma?",
                r_corretta: "Bernini",
                opzioni: ["Alighieri", "Leopardi", "Verga", "Bernini"]
            }, {
                domanda: "Chi &#232; l'autore di Hamlet? ",
                r_corretta: "William Shakespeare ",
                opzioni: ["Jane Austen ", "Geoffrey Chaucer ", "William Shakespeare ", "Michael Jackson "]
            }, {
                domanda: "Chi era Gabriele D'Annunzio?",
                r_corretta: "un poeta",
                opzioni: ["un bodybuilder", "un miliardario", "un poeta", "un cuoco"]
            }, {
                domanda: "Alla fine dell'Ottocento &#232; stato rubato dal museo Louvre, quale dipinto? ",
                r_corretta: "La Gioconda",
                opzioni: ["La Gioconda", "Incoronazione di Napoleone", "Il Cenacolo", "La festa del Rosario"]
            }, {
                domanda: "L'autore della poesia Marzo 1821?",
                r_corretta : "Alessandro Manzoni",
                opzioni: ["Giacomo Leopardi", "Ugo Foscolo", "Alessandro Manzoni", "Gabriele D'Annunzio"]
            }, {
                domanda: "L'autore del romanzo L'Esclusa ? ", 
                r_corretta: "Luigi Pirandello", 
                opzioni: ["Giovanni Verga", "Luigi Pirandello", "Italo Svevo", "Vittorio Alfieri"]
            }, {
                domanda: "La gloria di colui che tutto move per l'universo penetra, e risplende in una parte pi&#249; e meno altrove...",
                r_corretta : "&#232; l'incipit del Paradiso di Dante", 
                opzioni: ["&#232; l'incipit del Paradiso di Dante", "&#232; l'incipit del Purgatorio", "&#232; una frase celebre di Virgilio", "&#232; una frase celebre di Omero"]
            }, {
                domanda: "Qual &#232; la citt&#224; natale di Eugenio Montale?",
                r_corretta: "Genova",
                opzioni: ["Genova", "Milano", "Firenze", "Torino"]
            }, {
                domanda: "L'autore del romanzo Madame Bovary ? ", 
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
                r_corretta: "una citt&#224; bombardata", 
                opzioni: ["un aereo in uso nella prima guerra mondiale", "una razza di cavallo", "una citt&#224; bombardata", "il luogo dove stava il suo studio"]
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
                domanda: "Chi &#232; l'architetto autore della prospettiva della Galleria di Palazzo Spada, a Roma?", 
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
                domanda: "Dove si trova la Fontana delle 99 cannelle?", 
                r_corretta: "L’Aquila", 
                opzioni: ["Viterbo", "L'Aquila", "Mantova", "Perugia"]
            }, {
                domanda: "Qual era il vero nome della Gioconda?", 
                r_corretta: "Lisa Gherardini", 
                opzioni: ["Maria Luigia", "Lisa Gherardini", "Beatrice Cenci", "Bianca Cappello"]
            }, {
                domanda: "Come si chiama il protagonista de L'avaro, di Moli&#232;re?", 
                r_corretta: "Arpagone", 
                opzioni: ["Carlone", "Salvatore", "Ganimede", "Arpagone"]
            }, {
                domanda: "Shakespeare ha scritto un’opera in cui muoiono i quattro protagonisti: qual &#232;?", 
                r_corretta: "Amleto", 
                opzioni: ["Sogno d'una notte di mezza estate", "La tempesta", "Romeo e Giulietta", "Amleto"]
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
                domanda: "Cos'&#232; un oboe?", 
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
                domanda: "Nel Sahara tunisino e pi&#249; precisamente a El Djem, cosa c’&#232;?", 
                r_corretta: "Un anfiteatro romano", 
                opzioni: ["La statua di una creatura marina", "La prima ferrovia del continente africano", "Un anfiteatro romano", "Una piramide di mattoni rossi"]
            }, {
                domanda: "Ovale rosso, Tratto bianco, Nel grigio sono opere di quale noto pittore?", 
                r_corretta: "Kandinsky", 
                opzioni: ["Kandinsky", "Mondrian", "Klee", "Picasso"]
            }, {
                domanda: "Ren&#233; Magritte &#232; cresciuto in quale delle seguenti citt&#224; belghe?", 
                r_corretta: "Charleroi, citt&#224; industriale", 
                opzioni: ["Anversa, citt&#224; portuale", "Bruges cittadina romantica caratterizzata dai canali", "Charleroi, citt&#224; industriale", "Liegi centro commerciale e culturale"]
            }, {
                domanda: "Famoso scultore autore de La porta dell’inferno", 
                r_corretta: "Auguste Rodin", 
                opzioni: ["Auguste Rodin", "Antonio Canova", "Giacomo Balla", "Amedeo Modigliani"]
            }, {
                domanda: "Rappresentava i suoi dipinti attraverso l'utilizzo di frutti e vegetali. Chi era?", 
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
                domanda: "Quale delle seguenti non &#232; un'opera di italo calvino?	", 
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
                domanda: "&#200; stato assegnato, alla Mostra del Cinema di Venezia del 1992, il Leone D'oro alla carriera ad un famoso comico e scrittore italiano. Chi &#232;?", 
                r_corretta: "Paolo Villaggio", 
                opzioni: ["Raimondo Vinello", "Ugo Tognazzi", "Paolo Villaggio", "Macario"]
            }, {
                domanda: "Ermanno Olmi traccia storie che sono favole proiettate verso l'affermazione dei valori essenziali della vita. Sono sue opere i seguenti film tranne:", 
                r_corretta: "Il posto delle fragole", 
                opzioni: ["La leggenda del Santo Bevitore", "Genesi", "L'albero degli zoccoli", "Il posto delle fragole"]
            }, {
                domanda: "I film di Luis Bunuel sono caratterizzati da uno stile secco e da un sottile umorismo che trasforma il quotidiano in fantastico, come avviene in:", 
                r_corretta: "Il fascino discreto della borghesia", 
                opzioni: ["Amarcord", "Il fascino discreto della borghesia", "L'eclisse", "nessuna delle precedenti"]
            }, {
                domanda: " Il successo internazionale di un romanzo postumo &#232; davvero eccezionale. Tale &#232; stato il caso di:", 
                r_corretta: "Il Gattopardo", 
                opzioni: ["Il Gattopardo", "Ossi di Seppia", "V&#224; dove ti porta il cuore", "Gomorra"]
            }, {
                domanda: "“L'insostenibile leggerezza dell'essere” &#232; opera di:", 
                r_corretta: "Kundera", 
                opzioni: ["Kazan", "Kubrick", "Kundera", "Hesse"]
            }, {
                domanda: "La morsa e Lumie di Sicilia sono due atti unici che costituirono l'esordio teatrale di", 
                r_corretta: "L. Pirandello", 
                opzioni: ["L. Pirandello", "G. Verga", "C. Pavese", "F. Tozzi"]
            }, {
                domanda: "Cos’&#232; la sceneggiatura di un film?", 
                r_corretta: "la stesura definitiva del testo del film", 
                opzioni: ["l’insieme degli ambienti in cui si svolge l’azione filmica", "la scaletta degli argomenti da trattare nel film", "l’insieme delle inquadrature riferibili all’inizio e alla fine del film", "la stesura definitiva del testo del film"]
            }, {
                domanda: "Come si definisce il procedimento cinematografico che permette di ampliare il formato delle proiezioni per scopi spettacolari?", 
                r_corretta: "cinemascope", 
                opzioni: ["editing", "cinemascope", " infotainment", "colophon"]
            }, {
                domanda: "Quali sono invece le uniche due attrici italiane ad aver conquistato l'Oscar?", 
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
                domanda: "Quale citt&#224; fa da sfondo alle vicende di Grey’s Anatomy?", 
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
                domanda: "Di quale regista &#232; fan Dawson Leery, protagonista di Dawson’s Creek?", 
                r_corretta: "Ridley Scott", 
                opzioni: ["Stanley Kubrick", "Steven Spielberg", "Chris Columbus", "Ridley Scott"]
            }, {
                domanda: "Ne L’uomo nell’alto castello quali potenze si spartiscono il territorio degli Stati Uniti?", 
                r_corretta: "Cina e India", 
                opzioni: ["Germania e Giappone", "Regno Unito e Francia", "Italia e Spagna", "Cina e India"]
            }, {
                domanda: "Come si chiama il protagonista di Lost?", 
                r_corretta: "Jack", 
                opzioni: ["Jack", "Julio", "Joseph", "Jos&#233;"]
            }, {
                domanda: "Cosa s'intende per binge watching?", 
                r_corretta: "guardare gli episodi tutti di fila", 
                opzioni: ["guardare gli episodi con calma", "guardare gli episodi tutti di fila", "saltare gli episodi", "riguardare gli episodi"]
            }, {
                domanda: "Qual &#232; il nome del bar dove si trovano i protagonisti di Friends?",
                r_corretta: "Central Perk", 
                opzioni: ["Baretto", "Amigos", "Mc Laren's", "Central Perk"]
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
                domanda: "Che cos'&#232; C6H12O6?", 
                r_corretta: "glucosio", 
                opzioni: ["glicerina", "glucosio", "formaldeide", "acqua ossigenata"]
            }, {
                domanda: "Cos'&#232; la pectina?", 
                r_corretta: "polisaccaride", 
                opzioni: ["gomma", "proteina", "polisaccaride", "colla"]
            }, {
                domanda: "Cosa mangiano prevalentemente i panda?", 
                r_corretta: "bamb&#249;", 
                opzioni: ["bamb&#249;", "insetti", "fieno", "piccoli mammiferi"]
            }, {
                domanda: "Qual'&#232; l'oggetto della Sociologia?", 
                r_corretta: "studio scientifico della societ&#224;", 
                opzioni: ["le applicazioni", "il cinema", "i giochi di societ&#224;", "studio scientifico della societ&#224;"]
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
                domanda: "Quale virus ha provocato una pandemia all'inizio del 2020?", 
                r_corretta: "COVID19", 
                opzioni: ["TOVID19", "COVID19", "COVIT19", "VOCID19"]
            }, {
                domanda: "Qual'&#232; il composto chimico utilizzato nella piscina?", 
                r_corretta: "cloro", 
                opzioni: ["fluoro", "cloro", "bromo", "astato"]
            }, {
                domanda: "Il barracuda &#232; un tipo di...?", 
                r_corretta: "pesce", 
                opzioni: ["pesce", "roditore", "uccello", "cane"]
            }, {
                domanda: "Benjamin Franklin invent&#242;...", 
                r_corretta: "il parafulmine", 
                opzioni: ["la ruota", "il parafulmine", "Il motoscafo", "l'aceto"]
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
                domanda: "Nel 1901 trasmette via radio una lettera dell'alfabeto Morse attraverso l'oceano Atlantico:", 
                r_corretta: "Guglielmo Marconi", 
                opzioni: ["Guglielmo Marconi", "Samuel Morse", "Antonio Meucci", "Nikola Tesla"]
            }, {
                domanda: "La Penicillina venne scoperta da...", 
                r_corretta: "Alexander Fleming", 
                opzioni: ["Louis Pasteur", "Ernst Boris Chain", "Alexander Fleming", "James Parkinson"]
            }, {
                domanda: "Secondo gli studiosi la ruota fu inventata nell'antica Mesopotamia...", 
                r_corretta: "dai Sumeri", 
                opzioni: ["dagli Egiziani", "dai Maya", "dai Sumeri", "dai Romani"]
            }, {
                domanda: "Venere possiede...", 
                r_corretta: "una massa simile a quella della terra", 
                opzioni: ["una massa simile a quella della terra", "8 satelliti", "2 anelli", "un atmosfera densa di gas che lo rendeno rossastro"]
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
                domanda: "Quali tra questi animali &#232; il pi&#249; pericoloso per l'uomo?", 
                r_corretta: "Zanzara tigre", 
                opzioni: ["Squalo bianco", "Zanzara tigre", "Leone", "Serpente a sonagli"]
            }, {
                domanda: "I koala si trovano principalmente...", 
                r_corretta: "in Australia", 
                opzioni: ["in Australia", "in Germania", "in Venezuela", "in Cina"]
            }, {
                domanda: "L’ orso dagli occhiali vive in...", 
                r_corretta: "America meridionale", 
                opzioni: ["Mongolia", "America meridionale", "Cina", "Giappone"]
            }, {
                domanda: "La Fascia di Kuiper &#232;..", 
                r_corretta: "un fascia di asteroidi posta al confine del sistema solare", 
                opzioni: ["un fascia di asteroidi posta al confine del sistema solare", "un fascia di asteroidi che gira attorno a Saturno", "un fascia di asteroidi che gira attorno alla Terra", "un fascia di asteroidi posta tra Giove e Saturno"]
            }, {
                domanda: "Una nana rossa &#232;...", 
                r_corretta: "una stella di piccole dimensioni e relativamente fredda", 
                opzioni: ["una stella di piccole dimensioni e relativamente fredda", "una grande stella", "una stella di piccole dimensioni e calda", "una grande stella di colore rosso o arancione"]
            }, {
                domanda: "La stella visibile dalla Terra pi&#249; luminosa dopo il nostro Sole &#232;...", 
                r_corretta: "Sirio", 
                opzioni: ["Betelgeuse", "Giove", "Sirio", "Rigel"]
            }, {
                domanda: "La Margherita ha i petali generalmente...", 
                r_corretta: "bianchi", 
                opzioni: ["verdi", "rossi", "bianchi", "gialli"]
            }, {
                domanda: "L’alloro ha fiori...", 
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

        let random = Math.floor(Math.random() * (Object.keys(storia).length));
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
            quiz.domanda = document.createElement("div");
            quiz.domanda.id = "dom";
            quiz.conten.appendChild(quiz.domanda);
            quiz.risposte = document.createElement("div");
            quiz.risposte.id = "ris";
            quiz.conten.appendChild(quiz.risposte);
            inserisci();
        }

        function inserisci() {
            quiz.domanda.innerHTML = argomento[random].domanda;
            quiz.risposte.innerHTML = "";
            for (let i in argomento[random].opzioni) {
                let label = document.createElement("label");
                label.innerHTML = argomento[random].opzioni[i];
                label.id = "quiz" + i;
                label.addEventListener("click", () => {
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
                    if (giocatore == (Pedine.length - 1)) {
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
                <input type="button" id="btn" value="Gioca un'altra partita" onclick="nuovoGioco();"/>
            </div>`;
        document.body.innerHTML += t;
    }
    
    function partita(){
        let element = document.getElementById("vincita");
        element.remove();
        for(let i=0; i<Pedine.length; i++){
            let el = document.getElementById("pedina_"+i);
            el.remove();
        }
        gameplay();
    }
    nuovoGioco=partita;
	
    function nrGiocatori(){
        let t=`
            <div id="nrGiocatori">
                <form onsubmit="insert();">
                    <h3>In quanti si vuole giocare? Da un minimo di 1 ad un massimo di 6 giocatori? "</h3><br>
                    <input type="number" id="nGiocatori" min="1" max="6" step="1" required><br><br>
                    <input type="submit" value="Fatto!" id="btn">
                </form>
            </div>`;
        document.body.innerHTML += t;
    }
    
    insert=inizializza;
    
	function inizializza(){
        event.preventDefault();
		let inizio = document.getElementById("pedina_esempio");
		let dimensioni = inizio.getBoundingClientRect();
		let esagono = document.getElementById("esagono");
		let posizione = esagono.getBoundingClientRect();
		let topDefault = (posizione.top - (dimensioni.height / 2) + (posizione.height / 2) + window.pageYOffset) + "px";
		let leftDefault = (posizione.left - (dimensioni.width / 2) + (posizione.width / 2) + window.pageXOffset) + "px";
		let colori = ["rgb(239, 119, 51)","rgb(75, 162, 242)","rgb(188, 75, 242)","rgb(83, 208, 96)","rgb(249, 60, 173)","rgb(239, 208, 45)" ]

		let numeroGiocatori = document.getElementById("nGiocatori").value;
        let element=document.getElementById("nrGiocatori");
        element.remove();
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
				;
				
				
				document.getElementById("map").innerHTML +=text;
		}
		for (let i=0; i<numeroGiocatori; i++){
			Pedine.push(`pedina_${i}`);
			let elemento = document.getElementById(Pedine[i]);
			elemento.style.top= topDefault;
			elemento.style.left = leftDefault;
			elemento.style.visibility= "visible";
		}
        turno();
	}
    

	function turno(){
        clickElementi();
		lanciaDado();
	}
	
	nrGiocatori();
}
