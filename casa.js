	let futuroTitulo

	let aparelhoPotencia

	let dinheiroKwh = 0

	function disparo(clicked) {
		const id_btn = clicked

		if (id_btn == 'chuveiro') {
			var card = document.getElementById('card');
			card.style.display = 'block';

			var titulo = document.getElementById('titulo-card')
			titulo.innerHTML = 'Chuveiro';

			var conteudo = document.getElementById('conteudo-card')
			conteudo.innerHTML = 'Um chuveiro elétrico em média consome por hora um valor de 4500 W/h'

		} else if (id_btn == 'lampada') {
			var card = document.getElementById('card');
			card.style.display = 'block';

			var titulo = document.getElementById('titulo-card')
			titulo.innerHTML = 'Lâmpada';

			var conteudo = document.getElementById('conteudo-card')
			conteudo.innerHTML = 'Uma lâmpada fluorescente comum em média consome por hora um valor de 15W/h'

		} else if (id_btn == 'tv') {
			var card = document.getElementById('card');
			card.style.display = 'block';

			var titulo = document.getElementById('titulo-card')
			titulo.innerHTML = 'Televisão';

			var conteudo = document.getElementById('conteudo-card')
			conteudo.innerHTML = 'Uma televsão comum em média consome por hora um valor de 90 W/h '

		} else if (id_btn == 'maquina') {
			var card = document.getElementById('card');
			card.style.display = 'block';

			var titulo = document.getElementById('titulo-card')
			titulo.innerHTML = 'Máquina de Lavar';

			var conteudo = document.getElementById('conteudo-card')
			conteudo.innerHTML = 'Uma máquina de lavar em média consome por hora um valor de 500 W/h'

		} else if (id_btn == 'pc') {
			var card = document.getElementById('card');
			card.style.display = 'block';

			var titulo = document.getElementById('titulo-card')
			titulo.innerHTML = 'Computador';

			var conteudo = document.getElementById('conteudo-card')
			conteudo.innerHTML = 'Um computador em média consome por hora um valor de 300 W/h'

		} else if (id_btn == 'geladeira') {
			var card = document.getElementById('card');
			card.style.display = 'block';

			var titulo = document.getElementById('titulo-card')
			titulo.innerHTML = 'Geladeira';

			var conteudo = document.getElementById('conteudo-card')
			conteudo.innerHTML = 'Uma geladeira consome por hora um valor de 90 W/h'

		} else if (id_btn == 'micro') {
			var card = document.getElementById('card');
			card.style.display = 'block';

			titulo = document.getElementById('titulo-card')
			titulo.innerHTML = 'Micro-Ondas'; 

			var conteudo = document.getElementById('conteudo-card')
			conteudo.innerHTML = 'Um micro-ondas consome por hora um valor de 1200 W/h'
		}

		futuroTitulo = titulo.innerHTML

		aparelhoPotencia = id_btn
	}

	let horasCalc

	function range(){
		const horas = document.getElementById('horas')
		let horasDisplay = document.getElementById('displayHoras')
		horasDisplay.innerHTML = 'Este é o número de horas que você selecionou: ' + horas.value
	
		horasCalc = horas.value
	}

	function calcular(){
		const abrirCalc = document.getElementById('cardCalc')
		abrirCalc.style.display = 'block'

		const horas = document.getElementById('horas')
		let horasDisplay = document.getElementById('displayHoras')
		horasDisplay.innerHTML = 'Este é o número de horas que você selecionou: ' + horas.value 

		var tituloCalc = document.getElementById('aparelhoTit')
		tituloCalc.innerHTML = 'O aparelho: ' + futuroTitulo

	}

	function calculador(){

		let potencia =  0

		if (aparelhoPotencia == 'lampada') {

			potencia = 15
		} else if (aparelhoPotencia == 'chuveiro') {

			potencia = 4500
		} else if (aparelhoPotencia == 'tv') {

			potencia = 90
		} else if (aparelhoPotencia == 'maquina') {

			potencia = 500
		} else if (aparelhoPotencia == 'pc') {

			potencia = 300
		} else if (aparelhoPotencia == 'geladeira') {

			potencia = 90
		} else if (aparelhoPotencia == 'micro') {

			potencia = 1200
		}

		let horasFunc = horasCalc

		let kwH = (potencia * horasFunc) / 1000;

		dinheiroKwh = kwH

		let kwhDisplay = document.getElementById('kwh')

		kwhDisplay.innerHTML = 'O valor de KwH gastos no tempo de ' + horasCalc + ' hora(s) é de: ' + kwH + 'Kw/h'
	
	}

	

	function fecharCard(){
		let close = document.getElementById('fechar')
		card.style.display = 'none'
		cardCalc.style.display = 'none'
		cardConv.style.display = 'none'
	}

	function voltar(){
		const abrirCalc = document.getElementById('cardCalc')
		const close = document.getElementById('fechar')

		abrirCalc.style.display = 'none'
		card.style.display = 'block'
	}

	function converter(){
		const fecharCalc = document.getElementById('cardCalc')
		const fecharCard = document.getElementById('card')
		const abrirCalc = document.getElementById('cardConv')
		abrirCalc.style.display = 'block'
		fecharCalc.style.display = 'none'
		card.style.display = 'none'

		let dinheiroFinal = 0;

		dinheiroFinal = (dinheiroKwh * 1.04) 

		let dinheiroArredondado = dinheiroFinal.toFixed(2)

		console.log(dinheiroFinal)

		let resultadoFinal = document.getElementById('resultadoFinal')
		resultadoFinal.innerHTML = 'O total de R$ gastos de consumo de energia é de: ' + dinheiroArredondado + ' real(is).'
	}	

	function voltar2(){
		const abrirCalc = document.getElementById('cardCalc')
		const closeConv = document.getElementById('cardConv')

		abrirCalc.style.display = 'block'
		closeConv.style.display = 'none'
	}