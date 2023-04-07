let flip, nuovoGioco;
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
                console.log(skipMove)
			}, 5000);
		}

	}
	
	function posizione(id, materia, triangolo = false) {
        console.log(skipMove)
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
                domanda: "Chi &egrave; il padre degli dei?",
                r_corretta: "Zeus",
                opzioni: ["Ares", "Ade", "Zeus", "Apollo"]
            },
            {
                domanda: "Chi era il presidente americano nel 2018?",
                r_corretta: "Donald Trump",
                opzioni: ["Donald Duck", "Donald Trump", "Barack Obama", "George Bush"]
            },
            {
                domanda: "Cosa conquist&ograve; Giulio Cesare?",
                r_corretta: "Gallia",
                opzioni: ["Sicilia", "Russia", "Australia", "Gallia"]
            },
            {
                domanda: "Quando entro l'Italia nella prima guerra mondiale?",
                r_corretta: "1915",
                opzioni: ["1914", "1915", "1916", "1917"]
            },
            {
                domanda: "Come si chiama questo simbolo &#8356;?",
                r_corretta: "sterlina",
                opzioni: ["euro", "sterlina", "dollaro", "yuan"]
            },
            {
                domanda: "Per Illuminismo cosa si intende?",
                r_corretta: "diffondere i lumi della ragione",
                opzioni: ["illuminare la citt&agrave;", "risparmiare sulla luce", "abbassare il prezzo delle lampade", "diffondere i lumi della ragione"]
            },
            {
                domanda: "Quale citt&agrave; venne divisa da un muro?",
                r_corretta: "Berlino",
                opzioni: ["New York", "Milano", "Berlino", "Nessuna &egrave; corretta"]
            },
            {
                domanda: "Quale filosofo mor&igrave; avvelenato con la cicuta?",
                r_corretta: "Socrate",
                opzioni: ["Socrate", "Platone", "Aristotele", "Eraclito"]
            },
            {
                domanda: "Chi furono i quattro imperatori della dinastia Giulio-Claudia?",
                r_corretta: "Tiberio Caligola Claudio Nerone",
                opzioni: ["Tiberio Caligola Brione Nerone", "Comodo Caligola Claudio Nerone", "Tito Domiziano Traiano Nerone", "Tiberio Caligola Claudio Nerone"]
            },
            {
                domanda: "Nell'Antico Egitto che tecnica si utilizza per la sepoltura dei Faraoni?",
                r_corretta: "mummificazione",
                opzioni: ["cremazione", "in pasto ai cani", "purificazione", "mummificazione"]
            },
            {
                domanda: "Chi ha scritto le 95 tesi che diedero inizio alla Riforma Protestante?",
                r_corretta: "Martin Lutero",
                opzioni: ["Immanuel Kant", "Thomas More", "Martin Lutero", "Giacomo Leopardi"]
            },
            {
                domanda: "Quando l' Italia ha preso parte alla prima guerra mondiale a chi dichiara guerra?",
                r_corretta: "Austria-Ungheria",
                opzioni: ["Francia", "Austria-Ungheria", "Belgio", "Germania"]
            },
            {
                domanda: "Come &egrave; stato ucciso Giulio Cesare?",
                r_corretta: "pugnalato",
                opzioni: ["picchiato a sangue", "ucciso da un infarto", "pugnalato", "&egrave; ancora vivo"]
            }
        ];
        
        const geografia = [
            {
                domanda: "Dove si trova il Brasile?",
                r_corretta: "Sud America",
                opzioni: ["Centro America", "Sud America", "Australia", "Europa"]
            }, {
                domanda: "Cos'&egrave; la Sardegna?",
                r_corretta: "isola",
                opzioni: ["penisola", "arcipelago", "citt&agrave;", "isola"]
            }, {
                domanda: "Dove si trova la Piazza del Duomo?",
                r_corretta: "Milano",
                opzioni: ["Torino", "Milano", "Reggio Emilia", "Venezia"]
            }, {
                domanda: "Quali tra queste bandiere hanno il colore verde, bianco e rosso?",
                r_corretta: "Messico e Ungheria",
                opzioni: ["Olanda e Italia", "Irlanda e Russia", "Messico e Ungheria", "Svezia e Lettonia"]
            }, {
                domanda: "Quali tra le seguenti citt&agrave; non si trova negli Stati Uniti?",
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
                domanda: "Qual &egrave; la lingua principale in Porto Rico?",
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
                domanda: "Dov'&egrave; prodotta la Peroni?",
                r_corretta: "Italia",
                opzioni: ["Spagna", "Burundi", "Bangladesh", "Italia"]
            }, {
                domanda: "Dov'&egrave; lo Zimbabwe?",
                r_corretta: "Sud Africa",
                opzioni: ["Asia", "Nord Africa", "Sud America", "Sud Africa"]
            }, {
                domanda: "Qual'&egrave; il nome del canale che divide il Mar Mediterraneo dal Mar Rosso?",
                r_corretta: "Suez",
                opzioni: ["Corinto", "Panama", "Suez", "Nessuna risposta &egrave; corretta"]
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
                domanda: "Quale parole viene usata quando si buttano gi&ugrave; tutti i birilli nel Bowling?",
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
                domanda: "Quante volte &egrave; stato campione nazionale nei 200 metri piani Pietro Mennea?",
                r_corretta: "11",
                opzioni: ["5", "8", "11", "14"]
            }, {
                domanda: "Chi &egrave; il nuotatore italiano che ha vinto pi&ugrave; medaglie a livello internazionale?",
                r_corretta: "Gregorio Paltrinieri",
                opzioni: ["Massimiliano Rosolino", "Gregorio Paltrinieri", "Domenico Fioravanti", "Luca Marin"]
            }, {
                domanda: "A quale disciplina sportiva appartiene la 'lanterna'?",
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
            }
        ];
        
        const art_letter = [
            {
                domanda: "Non &egrave; bello ci&ograve; che &egrave; bello…?",
                r_corretta: "ma &egrave; bello ci&ograve; che piace",
                opzioni: ["ma &egrave; bello ci&ograve; che non &egrave; bello", "perché nulla &egrave; bello", "ma &egrave; bello ci&ograve; che costa", "ma &egrave; bello ci&ograve; che piace"]
            }, {
                domanda: "Chi ha progettato Piazza San Pietro a Roma?",
                r_corretta: "Bernini",
                opzioni: ["Alighieri", "Leopardi", "Verga", "Bernini"]
            }, {
                domanda: "Chi &egrave; l'autore di Hamlet? ",
                r_corretta: "William Shakespeare ",
                opzioni: ["Jane Austen ", "Geoffrey Chaucer ", "William Shakespeare ", "Michael Jackson "]
            }, {
                domanda: "Chi era Gabriele D'Annunzio?",
                r_corretta: "un poeta",
                opzioni: ["un bodybuilder", "un miliardario", "un poeta", "un cuoco"]
            }, {
                domanda: "Alla fine dell'Ottocento &egrave; stato rubato dal museo Louvre, quale dipinto? ",
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
                domanda: "La gloria di colui che tutto move per l'universo penetra, e risplende in una parte pi&ugrave; e meno altrove...",
                r_corretta : "&egrave; l'incipit del Paradiso di Dante", 
                opzioni: ["&egrave; l'incipit del Paradiso di Dante", "&egrave; l'incipit del Purgatorio", "&egrave; una frase celebre di Virgilio", "&egrave; una frase celebre di Omero"]
            }, {
                domanda: "Qual &egrave; la citt&agrave; natale di Eugenio Montale?",
                r_corretta: "Genova",
                opzioni: ["Genova", "Milano", "Firenze", "Torino"]
            }, {
                domanda: "L'autore del romanzo Madame Bovary ? ", 
                r_corretta: "Gustave Flaubert", 
                opzioni: ["Paul Thomas Mann", "Gustave Flaubert", "Émile Édouard Charles Antoine Zola", "Guy de Maupassan"]
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
                r_corretta: "una citt&agrave; bombardata", 
                opzioni: ["un aereo in uso nella prima guerra mondiale", "una razza di cavallo", "una citt&agrave; bombardata", "il luogo dove stava il suo studio"]
            } 
        ]; 
        
        const intrattenimento = [
            {
                domanda: "Quale programma per bambini insegna a realizzare piccoli lavori con svariati materiali?", 
                r_corretta: "Art Attack", 
                opzioni: ["Art Attack", "Di tutto un p&ograve;", "Artisti in erba", "Riciclando"]
            }, {
                domanda: "Come si chiama il famoso personaggio di un videogame che ha per fratello Mario?", 
                r_corretta: "Luigi", 
                opzioni: ["Luigi", "Lucas", "Ligi", "Luis"]
            }, {
                domanda: "Geronimo Stilton, protagonista di vari libri, che animale &egrave;?", 
                r_corretta: "topo", 
                opzioni: ["gatto", "topo", "cane", "coniglio"]
            }, {
                domanda: "In quale cartone giapponese &egrave; coinvolto un bambino investigatore?", 
                r_corretta: "Detective Conan", 
                opzioni: ["Detective Conan", "Doraemon", "Naruto Shippuden", "Dragon ball"]
            }, {
                domanda: "Cosa usa per volare Mary Poppins?", 
                r_corretta: "ombrello", 
                opzioni: ["aereo", "tappeto", "ombrello", "scopa"]
            }, {
                domanda: "Chi &egrave; Woody Allen?", 
                r_corretta: "regista", 
                opzioni: ["regista", "cuoco", "politico", "pittore"]
            }, {
                domanda: "In Harry Potter cosa protegge il cane a tre teste?", 
                r_corretta: "la pietra filosofale", 
                opzioni: ["Harry Potter", "il mondo", "la pietra filosofale", "la bacchetta magica"]
            }, {
                domanda: "Qual &egrave; la protagonista del videogioco Life is strange?", 
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
                domanda: "Che cosa &egrave; C6H12O6?", 
                r_corretta: "glucosio", 
                opzioni: ["glicerina", "glucosio", "formaldeide", "acqua ossigenata"]
            }, {
                domanda: "Cos'&egrave; la pectina?", 
                r_corretta: "polisaccaride", 
                opzioni: ["gomma", "proteina", "polisaccaride", "colla"]
            }, {
                domanda: "Cosa mangiano prevalentemente i panda?", 
                r_corretta: "bamb&ugrave;", 
                opzioni: ["bamb&ugrave;", "insetti", "fieno", "piccoli mammiferi"]
            }, {
                domanda: "Qual &egrave; l'oggetto della Sociologia?", 
                r_corretta: "studio scientifico della societ&agrave;", 
                opzioni: ["le applicazioni", "il cinema", "i giochi di societ&agrave;", "studio scientifico della societ&agrave;"]
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
                domanda: "Quale pesce &egrave; famoso per nuotare controcorrente?", 
                r_corretta: "salmone", 
                opzioni: ["spigola", "luccio", "salmone", "sardina"]
            }, {
                domanda: "Quale virus ha provocato una pandemia all'inizio del 2020?", 
                r_corretta: "COVID19", 
                opzioni: ["TOVID19", "COVID19", "COVIT19", "VOCID19"]
            }, {
                domanda: "Qual &egrave; il composto chimico utilizzato nella piscina?", 
                r_corretta: "cloro", 
                opzioni: ["fluoro", "cloro", "bromo", "astato"]
            }, {
                domanda: "Il barracuda &egrave; un tipo di...?", 
                r_corretta: "pesce", 
                opzioni: ["pesce", "roditore", "uccello", "cane"]
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

        let random = Math.floor(Math.random() * 13);
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
        gameplay();
    }
    nuovoGioco=partita;
	
	function inizzializza(){
		let inizio = document.getElementById("pedina_esempio");
		let dimensioni = inizio.getBoundingClientRect();
		let esagono = document.getElementById("esagono");
		let posizione = esagono.getBoundingClientRect();
		let topDefault = (posizione.top - (dimensioni.height / 2) + (posizione.height / 2) + window.pageYOffset) + "px";
		let leftDefault = (posizione.left - (dimensioni.width / 2) + (posizione.width / 2) + window.pageXOffset) + "px";
		let colori = ["rgb(239, 119, 51)","rgb(75, 162, 242)","rgb(188, 75, 242)","rgb(83, 208, 96)","rgb(249, 60, 173)","rgb(239, 208, 45)" ]


		let numeroGiocatori = prompt("In quanti si vuole giocare? Da un minimo di 1 ad un massimo di 6 giocatori ");
		while (numeroGiocatori<0|| numeroGiocatori>6){
			numeroGiocatori = prompt("Valore inserito non corretto. In quanti si vuole giocare? Da un minimo di 1 ad un massimo di 6 giocatori ");
		}
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
	}

	function turno(){
		console.log(giocatore);
        clickElementi();
		lanciaDado();
	}
	
	inizzializza();
	console.log(Pedine);
	turno();
}
