let palavra = "";
let tamanhoPalavra = 0;
let letrasReveladas = 0;

$(document).ready(function(){
	inicializar();
});

//Reiniciar
$(".btn-reset").click(inicializar);	// clicando em recomeçar
$('body').keyup(function(e){
	if(e.keyCode == "32") {
		inicializar();
	}
}); // pressionando a barra de espaço

let palavras = [
	{"palavra": "morango","dica": "Fruta"},
	{"palavra": "leite","dica": "Bebida"},
	{"palavra": "cachorro","dica": "Animal"},
	{"palavra": "elefante","dica": "Animal"},
	{"palavra": "tomate","dica": "Fruta"},
	{"palavra": "Abacate","dica": "Fruta"},
	{"palavra": "Amora","dica": "Fruta"},
	{"palavra": "Ameixa","dica": "Fruta"},
	{"palavra": "Acerola","dica": "Fruta"},
	{"palavra": "Banana","dica": "Fruta"},
	{"palavra": "Caqui","dica": "Fruta"},
	{"palavra": "Caju","dica": "Fruta"},
	{"palavra": "Cereja","dica": "Fruta"},
	{"palavra": "Carambola","dica": "Fruta"},
	{"palavra": "Damasco","dica": "Fruta"},
	{"palavra": "Figo","dica": "Fruta"},
	{"palavra": "Framboesa","dica": "Fruta"},
	{"palavra": "Goiaba","dica": "Fruta"},
	{"palavra": "Guaraná","dica": "Fruta"},
	{"palavra": "Jaca","dica": "Fruta"},
	{"palavra": "Jabuticaba","dica": "Fruta"},
	{"palavra": "Jambolão","dica": "Fruta"},
	{"palavra": "Kiwi","dica": "Fruta"},
	{"palavra": "Laranja","dica": "Fruta"},
	{"palavra": "Limão","dica": "Fruta"},
	{"palavra": "Melancia","dica": "Fruta"},
	{"palavra": "Melão","dica": "Fruta"},
	{"palavra": "Maçã","dica": "Fruta"},
	{"palavra": "Maracujá","dica": "Fruta"},
	{"palavra": "Mamão","dica": "Fruta"},
	{"palavra": "Manga","dica": "Fruta"},
	{"palavra": "Nectarina","dica": "Fruta"},
	{"palavra": "Pêra","dica": "Fruta"},
	{"palavra": "Pitanga","dica": "Fruta"},
	{"palavra": "Pêssego","dica": "Fruta"},
	{"palavra": "Romã","dica": "Fruta"},
	{"palavra": "Tomate","dica": "Fruta"},
	{"palavra": "Tangerina","dica": "Fruta"},
	{"palavra": "Uva","dica": "Fruta"},
	{"palavra": "Aranha","dica": "Animal"},
	{"palavra": "Anta","dica": "Animal"},
	{"palavra": "Arara","dica": "Animal"},
	{"palavra": "Águia","dica": "Animal"},
	{"palavra": "Boi","dica": "Animal"},
	{"palavra": "Boto","dica": "Animal"},
	{"palavra": "Baleia","dica": "Animal"},
	{"palavra": "Cobra","dica": "Animal"},
	{"palavra": "Cavalo","dica": "Animal"},
	{"palavra": "Camaleão","dica": "Animal"},
	{"palavra": "Coelho","dica": "Animal"},
	{"palavra": "Dromedário","dica": "Animal"},
	{"palavra": "Elefante","dica": "Animal"},
	{"palavra": "Égua","dica": "Animal"},
	{"palavra": "Esquilo","dica": "Animal"},
	{"palavra": "Foca","dica": "Animal"},
	{"palavra": "Formiga","dica": "Animal"},
	{"palavra": "Fuinha","dica": "Animal"},
	{"palavra": "Furão","dica": "Animal"},
	{"palavra": "Girafa","dica": "Animal"},
	{"palavra": "Gazela","dica": "Animal"},
	{"palavra": "Garça","dica": "Animal"},
	{"palavra": "Gorila","dica": "Animal"},
	{"palavra": "Hipopótamo","dica": "Animal"},
	{"palavra": "Hiena","dica": "Animal"},
	{"palavra": "Hamster","dica": "Animal"},
	{"palavra": "Iguana","dica": "Animal"},
	{"palavra": "Javali","dica": "Animal"},
	{"palavra": "Jacaré","dica": "Animal"},
	{"palavra": "Jiboia","dica": "Animal"},
	{"palavra": "Jumento","dica": "Animal"},
	{"palavra": "Lagarta","dica": "Animal"},
	{"palavra": "Lesma","dica": "Animal"},
	{"palavra": "Lula","dica": "Animal"},
	{"palavra": "Lagartixa","dica": "Animal"},
	{"palavra": "Morsa","dica": "Animal"},
	{"palavra": "Mosca","dica": "Animal"},
	{"palavra": "Mosquito","dica": "Animal"},
	{"palavra": "Macaco","dica": "Animal"},
	{"palavra": "Naja","dica": "Animal"},
	{"palavra": "Ornitorrinco","dica": "Animal"},
	{"palavra": "Ovelha","dica": "Animal"},
	{"palavra": "Onça","dica": "Animal"},
	{"palavra": "Pato","dica": "Animal"},
	{"palavra": "Pavão","dica": "Animal"},
	{"palavra": "Porco","dica": "Animal"},
	{"palavra": "Panda","dica": "Animal"},
	{"palavra": "Quati","dica": "Animal"},
	{"palavra": "Quero-Quero","dica": "Animal"},
	{"palavra": "Rato","dica": "Animal"},
	{"palavra": "Rinoceronte","dica": "Animal"},
	{"palavra": "Rã","dica": "Animal"},
	{"palavra": "Sapo","dica": "Animal"},
	{"palavra": "Tartaruga","dica": "Animal"},
	{"palavra": "Tatu","dica": "Animal"},
	{"palavra": "Tarantula","dica": "Animal"},
	{"palavra": "Urubu","dica": "Animal"},
	{"palavra": "Urso","dica": "Animal"},
	{"palavra": "Vaca","dica": "Animal"},
	{"palavra": "Vespa","dica": "Animal"},
	{"palavra": "Vagalume","dica": "Animal"},
	{"palavra": "Zebra","dica": "Animal"},
	{"palavra": "Zangão","dica": "Animal"},
	{"palavra": "Anel","dica": "Objeto"},
	{"palavra": "Apontador","dica": "Objeto"},
	{"palavra": "Almofada","dica": "Objeto"},
	{"palavra": "Borracha","dica": "Objeto"},
	{"palavra": "Bacia","dica": "Objeto"},
	{"palavra": "Bicicleta","dica": "Objeto"},
	{"palavra": "Bola","dica": "Objeto"},
	{"palavra": "Camisa","dica": "Objeto"},
	{"palavra": "Chaveiro","dica": "Objeto"},
	{"palavra": "Câmera","dica": "Objeto"},
	{"palavra": "Carimbo","dica": "Objeto"},
	{"palavra": "Dado","dica": "Objeto"},
	{"palavra": "Dedal","dica": "Objeto"},
	{"palavra": "Dicionário","dica": "Objeto"},
	{"palavra": "Espelho","dica": "Objeto"},
	{"palavra": "Escova","dica": "Objeto"},
	{"palavra": "Faca","dica": "Objeto"},
	{"palavra": "Fax","dica": "Objeto"},
	{"palavra": "Garrafa","dica": "Objeto"},
	{"palavra": "Haltere","dica": "Objeto"},
	{"palavra": "Harpa","dica": "Objeto"},
	{"palavra": "Helicóptero","dica": "Objeto"},
	{"palavra": "Ioio","dica": "Objeto"},
	{"palavra": "Jarra","dica": "Objeto"},
	{"palavra": "Ketchup","dica": "Objeto"},
	{"palavra": "Lápis","dica": "Objeto"},
	{"palavra": "Máscara","dica": "Objeto"},
	{"palavra": "Navalha","dica": "Objeto"},
	{"palavra": "Óculos","dica": "Objeto"},
	{"palavra": "Pincel","dica": "Objeto"},
	{"palavra": "Parafuso","dica": "Objeto"},
	{"palavra": "Quadro","dica": "Objeto"},
	{"palavra": "Rádio","dica": "Objeto"},
	{"palavra": "Relógio","dica": "Objeto"},
	{"palavra": "Sandália","dica": "Objeto"},
	{"palavra": "Torneira","dica": "Objeto"},
	{"palavra": "Unha Postiça","dica": "Objeto"},
	{"palavra": "Vela","dica": "Objeto"},
	{"palavra": "Walkie-talkie","dica": "Objeto"},
	{"palavra": "Xícara","dica": "Objeto"},
	{"palavra": "Zarabatana","dica": "Objeto"}
]

function inicializar() {
	$(".btn").attr("disabled",false);
	$(".campo-dica").show();
	$(".btn-letra").show();
	$(".palavrachave").text("");
	$(".resultado").text("");
	letrasReveladas = 0;
	
	let objNovaPalavra = gerarPalavra();
	palavra = objNovaPalavra.palavra.toUpperCase();
	tamanhoPalavra = palavra.length;
	
	setarCampos(objNovaPalavra);
}

function gerarPalavra() {
	let nAleatorio = Math.floor(Math.random() * palavras.length);
	return palavras[nAleatorio];
}

function setarCampos(objPalavra) {
	$(".tentativas-restantes").text(5);
	$(".campo-dica").text(objPalavra.dica);
	
	let palavraEncoberta = palavra.replace(/[^0-9|-| ]/g,"_");
	let spanLetraEncoberta = [];
	let palavraEncobertaArr = palavraEncoberta.split("");
	setarPalavraOculta(palavraEncobertaArr)
}

// função recebe palavra e cria um span para cada letra
function setarPalavraOculta(palavraArr) {
	$(".palavrachave").text("");
	palavraArr.forEach(function(letra) {
		let spanLetra = document.createElement("span");
		$(spanLetra).addClass("spanLetra");
		$(spanLetra).append(letra);
		$(".palavrachave").append(spanLetra);
	});
}

// Função - Pressionando Letras
$(".btn-letra").click(function(){
	$(this).attr("disabled",true)
	let letraSelecionada = $(this).data("letra");
	validarJogada(letraSelecionada);
});

$(document).on("keypress",function(e){ // Quando usuário usar o teclado
	let letraPressionada = String.fromCharCode(e.which).toUpperCase();
	
	let todosBotoes = $(".btn-letra");
	todosBotoes.each(function(botao){
		let valorBotao = $(this).data("letra");
		if(valorBotao == letraPressionada) {
			if(!$(this).attr("disabled") == true) {
				$(this).attr("disabled",true);
				validarJogada(letraPressionada);
			}
		}
	});
})

function validarJogada(letra) {
	let ocorrencias = verificarOcorrencias(letra);
	
	if(ocorrencias.length > 0) {
		revelarLetras(ocorrencias);
		if(letrasReveladas == tamanhoPalavra) {
			fimDeJogo(true);
		}
	} else {
		let tentativas = $(".tentativas-restantes").text();
		if(tentativas == 0) {
			fimDeJogo(false);
		} else {
			$(".tentativas-restantes").text(tentativas-1);
		}
	}
}

function verificarOcorrencias(letra) {
	let ocorrencias = [];
	let c = 0;
	let palavraLetras = palavra.split("");
	palavraLetras.forEach(function(letraAtual){
		if(letraAtual == letra) {
			ocorrencias.push(c);
		} else if(letraAtual == "Ç" && letra == "C") { // Verificando se letra é Ç
			ocorrencias.push(c);
		} else if(/[\xC0-\xC6]/.test(letraAtual) && letra == "A") { // Verificando se é A c/ acento
			ocorrencias.push(c);
		} else if(/[\xC8-\xCB]/.test(letraAtual) && letra == "E") { // Verificando se é E c/ acento
			ocorrencias.push(c);
		} else if(/[\xCC-\xCF]/.test(letraAtual) && letra == "I") { // Verificando se é I c/ acento
			ocorrencias.push(c);
		} else if(/[\xD2-\xD6]/.test(letraAtual) && letra == "O") { // Verificando se é O c/ acento
			ocorrencias.push(c);
		} else if(/[\xD9-\xDC]/.test(letraAtual) && letra == "U") { // Verificando se é U c/ acento
			ocorrencias.push(c);
		}
		c++;
	});
	letrasReveladas += ocorrencias.length;
	return ocorrencias;
}

function revelarLetras(ocorrencias) {
	let palavraOculta = $(".palavrachave").text().split("");
	let palavraChave = palavra.split("");
	ocorrencias.forEach(function(ocorrencia){
		palavraOculta[ocorrencia] = palavraChave[ocorrencia];
	});
	setarPalavraOculta(palavraOculta);
}

// Fim de Jogo
function fimDeJogo(resultado) {
	$(".btn-letra").fadeOut(500);
	$(".campo-dica").fadeOut(500);
	$(".palavrachave").text(palavra);
	if(resultado == false) {
		gameOver();
	} else {
		vitoria();
	}
}

function gameOver() {
	$(".resultado").text("Fim de Jogo!");
}

function vitoria() {
	$(".resultado").text("Vitória!");
	atualizaPontuacao();
	atualizarJSONusuario();
}

function atualizaPontuacao() {
	let pontosUsuario = parseInt($(".pontuacao").text());
	let tentativasRestantes = $(".tentativas-restantes").text();
	let pontuacao = 0;
	switch(tentativasRestantes) {
		case "5":
		pontuacao = 15;
		break;
		case "4":
		pontuacao = 12;
		break;
		case "3":
		pontuacao = 10;
		break;
		case "2":
		pontuacao = 8;
		break;
		case "1":
		pontuacao = 5;
		break;
		case "0":
		pontuacao = 3;
		break;
	}
	let novaPontuacaoUsuario = pontosUsuario + pontuacao;
	$(".pontuacao").text(novaPontuacaoUsuario);
}

// Botões de Informação
$(".btn-pontuacao").click(function(){
	$(".lista-pontuacao").slideToggle(100);
});

$(".btn-instrucoes").click(function(){
	$(".lista-instrucoes").slideToggle(100);
});