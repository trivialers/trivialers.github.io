function gameplay(){
	let Pedine = [];
	let skipMove = false;
	let again = false;
	let giocatore = 0;
	
	function sleep(milliseconds) {
	  const date = Date.now();
	  let currentDate = null;
	  do {
		currentDate = Date.now();
	  } while (currentDate - date < milliseconds);
	}

	function clickElementi(){	
		$(document).ready(function () {
			$("#Ellipse").click(function () {
				posizione("Polygon_2");
			});
			$("#Polygon_2").click(function () {
				posizione("Polygon_2");
			});
			$("#Ellipse_2").click(function () {
				posizione("Polygon_1");
			});
			$("#Polygon_1").click(function () {
				posizione("Polygon_1");
			});
			$("#Ellipse_3").click(function () {
				posizione("Polygon_6");
			});
			$("#Polygon_6").click(function () {
				posizione("Polygon_6");
			});
			$("#Ellipse_4").click(function () {
				posizione("Polygon_5");
			});
			$("#Polygon_5").click(function () {
				posizione("Polygon_5");
			});
			$("#Ellipse_5").click(function () {
				posizione("Polygon_4");
			});
			$("#Polygon_4").click(function () {
				posizione("Polygon_4");
			});
			$("#Ellipse_6").click(function () {
				posizione("Polygon_3");
			});
			$("#Polygon_3").click(function () {
				posizione("Polygon_3");
			});
			$("#Ellipse_7").click(function () {
				posizione("Ellipse_7");
			});
			$("#Ellipse_8").click(function () {
				posizione("Ellipse_8");
			});
			$("#Ellipse_9").click(function () {
				posizione("Ellipse_9");
			});
			$("#Ellipse_10").click(function () {
				posizione("Ellipse_10");
			});
			$("#Ellipse_11").click(function () {
				posizione("Ellipse_11");
			});
			$("#Ellipse_12").click(function () {
				posizione("Ellipse_12");
			});
			$("#Ellipse_13").click(function () {
				posizione("Ellipse_13");
			});
			$("#Ellipse_14").click(function () {
				posizione("Ellipse_14");
			});
			$("#Ellipse_15").click(function () {
				posizione("Ellipse_15");
			});
			$("#Ellipse_16").click(function () {
				posizione("Ellipse_16");
			});
			$("#Ellipse_17").click(function () {
				posizione("Ellipse_17");
			});
			$("#Ellipse_18").click(function () {
				posizione("Ellipse_18");
			});
			$("#Ellipse_19").click(function () {
				posizione("Ellipse_19");
			});
			$("#Ellipse_20").click(function () {
				posizione("Ellipse_20");
			});
			$("#Ellipse_21").click(function () {
				posizione("Ellipse_21");
			});
			$("#Ellipse_22").click(function () {
				posizione("Ellipse_22");
			});
			$("#Ellipse_23").click(function () {
				posizione("Ellipse_23");
			});
			$("#Ellipse_24").click(function () {
				posizione("Ellipse_24");
			});
			$("#Ellipse_25").click(function () {
				posizione("Ellipse_25");
			});
			$("#Ellipse_26").click(function () {
				posizione("Ellipse_26");
			});
			$("#Ellipse_27").click(function () {
				posizione("Ellipse_27");
			});
			$("#Ellipse_28").click(function () {
				posizione("Ellipse_28");
			});
			$("#Ellipse_29").click(function () {
				posizione("Ellipse_29");
			});
			$("#Ellipse_30").click(function () {
				posizione("Ellipse_30");
			});
			$("#Ellipse_31").click(function () {
				posizione("Ellipse_31");
			});
			$("#Ellipse_32").click(function () {
				posizione("Ellipse_32");
			});
			$("#Ellipse_33").click(function () {
				posizione("Ellipse_33");
			});
			$("#Ellipse_34").click(function () {
				posizione("Ellipse_34");
			});
			$("#Ellipse_35").click(function () {
				posizione("Ellipse_35");
			});
			$("#Ellipse_36").click(function () {
				posizione("Ellipse_36");
			});
			$("#Ellipse_37").click(function () {
				posizione("Ellipse_37");
			});
			$("#Ellipse_38").click(function () {
				posizione("Ellipse_38");
			});
			$("#Ellipse_39").click(function () {
				posizione("Ellipse_39");
			});
			$("#Ellipse_40").click(function () {
				posizione("Ellipse_40");
			});
			$("#Ellipse_41").click(function () {
				posizione("Ellipse_41");
			});
			$("#Ellipse_42").click(function () {
				posizione("Ellipse_42");
			});
			$("#esagono").click(function () {
				posizione("esagono");
			});
			$("#centro").click(function () {
				posizione("esagono");
			});
			$("#Rectangle_1_1").click(function () {
				posizione("Rectangle_1_1");
			});
			$("#Rectangle_2_1").click(function () {
				posizione("Rectangle_2_1");
			});
			$("#Rectangle_3_1").click(function () {
				posizione("Rectangle_3_1");
			});
			$("#Rectangle_4_1").click(function () {
				posizione("Rectangle_4_1");
			});
			$("#Rectangle_5_1").click(function () {
				posizione("Rectangle_5_1");
			});
			$("#Rectangle_1_2").click(function () {
				posizione("Rectangle_1_2");
			});
			$("#Rectangle_2_2").click(function () {
				posizione("Rectangle_2_2");
			});
			$("#Rectangle_3_2").click(function () {
				posizione("Rectangle_3_2");
			});
			$("#Rectangle_4_2").click(function () {
				posizione("Rectangle_4_2");
			});
			$("#Rectangle_5_2").click(function () {
				posizione("Rectangle_5_2");
			});
			$("#Rectangle_1_3").click(function () {
				posizione("Rectangle_1_3");
			});
			$("#Rectangle_2_3").click(function () {
				posizione("Rectangle_2_3");
			});
			$("#Rectangle_3_3").click(function () {
				posizione("Rectangle_3_3");
			});
			$("#Rectangle_4_3").click(function () {
				posizione("Rectangle_4_3");
			});
			$("#Rectangle_5_3").click(function () {
				posizione("Rectangle_5_3");
			});
			$("#Rectangle_1_4").click(function () {
				posizione("Rectangle_1_4");
			});
			$("#Rectangle_2_4").click(function () {
				posizione("Rectangle_2_4");
			});
			$("#Rectangle_3_4").click(function () {
				posizione("Rectangle_3_4");
			});
			$("#Rectangle_4_4").click(function () {
				posizione("Rectangle_4_4");
			});
			$("#Rectangle_5_4").click(function () {
				posizione("Rectangle_5_4");
			});
			$("#Rectangle_1_5").click(function () {
				posizione("Rectangle_1_5");
			});
			$("#Rectangle_2_5").click(function () {
				posizione("Rectangle_2_5");
			});
			$("#Rectangle_3_5").click(function () {
				posizione("Rectangle_3_5");
			});
			$("#Rectangle_4_5").click(function () {
				posizione("Rectangle_4_5");
			});
			$("#Rectangle_5_5").click(function () {
				posizione("Rectangle_5_5");
			});
			$("#Rectangle_1_6").click(function () {
				posizione("Rectangle_1_6");
			});
			$("#Rectangle_2_6").click(function () {
				posizione("Rectangle_2_6");
			});
			$("#Rectangle_3_6").click(function () {
				posizione("Rectangle_3_6");
			});
			$("#Rectangle_4_6").click(function () {
				posizione("Rectangle_4_6");
			});
			$("#Rectangle_5_6").click(function () {
				posizione("Rectangle_5_6");
			});
		});
	}

	function lanciaDado(){
		let cube = document.getElementById("cube");
		let y = 1800, x = 1080;
		cube.onclick = function (){
			let random = Math.ceil(Math.random()*6);
			let X, Y, Z;
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
			x += 1800;
			y += 1080;
			Y = Y + y;
			X = X + x;
			cube.style.transform = "rotateX(" + X + "deg) " + "rotateY(" + Y + "deg)"
		}
	}
	
	function posizione(id) {
		let pedina = document.getElementById(Pedine[giocatore]);
		let dimensioni = pedina.getBoundingClientRect();
		let indirizzo = document.getElementById(id);
		let posizione = indirizzo.getBoundingClientRect();
		if (!skipMove){
			pedina.style.top = (posizione.top - (dimensioni.height / 2) + (posizione.height / 2) + window.pageYOffset) + "px";
			pedina.style.left = (posizione.left - (dimensioni.width / 2) + (posizione.width / 2) + window.pageXOffset) + "px";
			//sleep(1000);
			skipMove= true;
			if (again){
				turno();
			}
			else{
				if (giocatore==(Pedine.length-1)){
					giocatore = 0;
				}
				else{
					giocatore += 1;
				}
				console.log("porca troia");
				turno();
			}
		}
	}
	
	function inizzializza(){	
		let inizio = document.getElementById("pedina_esempio");
		let dimensioni = inizio.getBoundingClientRect();
		let esagono = document.getElementById("esagono");
		let posizione = esagono.getBoundingClientRect();
		let topDefault = (posizione.top - (dimensioni.height / 2) + (posizione.height / 2) + window.pageYOffset) + "px";
		let leftDefault = (posizione.left - (dimensioni.width / 2) + (posizione.width / 2) + window.pageXOffset) + "px";
		let colori = ["#EF7733","#4BA2F2","#BC4BF2","#53D060","#F93CAD","#EFD02D" ]

		
		let numeroGiocatori = prompt("In quanti si vuole giocare? Da un minimo di 1 ad un massimo di 6 giocatori ");
		while(numeroGiocatori<1 || numeroGiocatori>6){
			numeroGiocatori = prompt("In quanti si vuole giocare? Da un minimo di 1 ad un massimo di 6 giocatori ");
		}
		for (let i=numeroGiocatori; i>0; i--){
			let text =
				` <div id="pedina_` + i + `" class="pedina">
					<svg width="4vh" height="4vh" viewBox="52 40 390 435" fill="none">
						<g id="Radial 1">
							<circle id="contornoPedina" fill="`+ colori[i] +`" cx="246" cy="257" r="215" fill="#B31818"/>
							<g id="Segment 5"> 
								<path id="Triangolino_1_`+ i +`" class="triangolini" d="M155.103 79.2909C183.332 64.8241 214.597 57.2793 246.318 57.2793C278.038 57.2793 309.303 64.8241 337.532 79.2909L255.439 239.48C252.616 238.034 249.49 237.279 246.318 237.279C243.145 237.279 240.019 238.034 237.196 239.48L155.103 79.2909Z" fill="#EFD02D"/>
							</g>
							<g id="Segment 1">
								<path id="Triangolino_2_`+ i +`" class="triangolini" d="M446.067 267.279C444.481 298.96 435.383 329.809 419.523 357.279C403.662 384.75 381.496 408.054 354.853 425.268L257.171 274.078C259.835 272.357 262.052 270.026 263.638 267.279C265.224 264.532 266.134 261.447 266.292 258.279L446.067 267.279Z" fill="#F93CAD"/>
							</g>
							<g id="Segment 2">
								<path id="Triangolino_3_`+ i +`" class="triangolini" d="M337.532 435.268C309.303 449.734 278.038 457.279 246.318 457.279C214.597 457.279 183.332 449.734 155.103 435.268L237.196 275.078C240.019 276.525 243.145 277.279 246.318 277.279C249.49 277.279 252.616 276.525 255.439 275.078L337.532 435.268Z" fill="#EF7733"/>
							</g>
							<g id="Segment 3">
								<path id="Triangolino_4_`+ i +`" class="triangolini" d="M137.782 425.268C111.139 408.054 88.9725 384.75 73.1124 357.279C57.2523 329.809 48.1537 298.96 46.5677 267.279L226.343 258.279C226.501 261.447 227.411 264.532 228.997 267.279C230.583 270.026 232.8 272.357 235.464 274.078L137.782 425.268Z" fill="#3C88F9"/>
							</g>
							<g id="Segment 4">
								<path id="Triangolino_5_`+ i +`" class="triangolini" d="M46.5677 247.279C48.1537 215.599 57.2523 184.75 73.1124 157.279C88.9725 129.809 111.139 106.505 137.782 89.2909L235.464 240.48C232.8 242.202 230.583 244.532 228.997 247.279C227.411 250.026 226.501 253.111 226.343 256.279L46.5677 247.279Z" fill="#53D060"/>
							</g>
							<g id="Segment 6">
								<path id="Triangolino_6_`+ i +`" class="triangolini" d="M354.853 89.2909C381.496 106.505 403.662 129.809 419.523 157.279C435.383 184.75 444.481 215.599 446.067 247.279L266.292 256.279C266.134 253.111 265.224 250.026 263.638 247.279C262.052 244.532 259.835 242.202 257.171 240.48L354.853 89.2909Z" fill="#BC4BF2"/>                    
							</g>
						</g>
					</svg>
				</div>`
				;
				
				Pedine.push(`pedina_${i}`);
				document.getElementById("map").innerHTML +=text;
				let elemento = document.getElementById(Pedine[i]);
				elemento.style.top= topDefault;
				elemento.style.left = leftDefault;
				elemento.style.visibility= "visible";
		}
	}

	function turno(){
		console.log(giocatore);
		//lanciaDado();
		skipMove = false;
	}
	
	inizzializza();
	clickElementi();
	console.log(Pedine);
	turno();
}
