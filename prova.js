function gameplay(){
	let Pedine = [];
	let giocatore = -1;
	let skipMove = false;
	let again = false;
	
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
		return 0;
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
		let pedina = document.getElementById("pedina");
		let dimensioni = pedina.getBoundingClientRect();
		let indirizzo = document.getElementById(id);
		let posizione = indirizzo.getBoundingClientRect();
		if (!skipMove){
			pedina.style.top = (posizione.top - (dimensioni.height / 2) + (posizione.height / 2) + window.pageYOffset) + "px";
			pedina.style.left = (posizione.left - (dimensioni.width / 2) + (posizione.width / 2) + window.pageXOffset) + "px";
			skipMove= true;
		}
		if(giocatore >= 0){
			sleep(1000)
			Pedine[giocatore].top = pedina.style.top;
			Pedine[giocatore].left = pedina.style.left;
			pedina.style.visibility = "hidden";
			sleep(1000)
			if (again){
				turno()
			}
			else{
				if (giocatore==(Pedine.length-1)){
					giocatore = 0;
				}
				else{
					giocatore += 1;
				}
				turno();
			}
		}
	}
	
	function inizzializza(){	
		posizione("esagono");
		giocatore = 0;
		let colori = ["#EF7733","#4BA2F2","#BC4BF2","#53D060","#F93CAD","#EFD02D" ]
		let coloreDefault = [];
		for (let i=0; i<6; i++){
			let colore = "rgb(228, 231, 231,0.4)";
			coloreDefault.push(colore);
		}
		let pedina = document.getElementById("pedina");
		let topDefault = pedina.style.top
		let leftDefault = pedina.style.left
		
		let numeroGiocatori = prompt("In quanti si vuole giocare? Da un minimo di 1 ad un massimo di 6 giocatori ")
		for (let i=0; i< numeroGiocatori; i++){
			let pedina={
						top: topDefault,
						left: leftDefault,
						colorePedina: colori[i],
						triangoli: coloreDefault,
					};
			Pedine.push(pedina);
		}
	}

	function turno(){
		console.log(giocatore);
		let pedina = document.getElementById("pedina");
		let contornoPedina = document.getElementById("contornoPedina");
		let idTriangoli = ["Triangolino_1","Triangolino_2","Triangolino_3","Triangolino_4","Triangolino_5","Triangolino_6"];
		let turno = false;
		pedina.style.visibility = "visible";
		pedina.style.top = Pedine[giocatore].top;
		pedina.style.left = Pedine[giocatore].left;
		contornoPedina.style.fill = Pedine[giocatore].colorePedina;
		for(let k=0; k<6; k++){
			let triangolino = document.getElementById(idTriangoli[k]);
			console.log(Pedine[giocatore].triangoli[k]);
			triangolino.style.fill = Pedine[giocatore].triangoli[k];
		}
		skipMove = false;
		//lanciaDado();
		clickElementi();
		
	}
	
	inizzializza();
	console.log(Pedine);
	turno();
}