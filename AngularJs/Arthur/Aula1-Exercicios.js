var pessoa = {
	nome: 'chimbinha',
	idade: 40,
	endereco:{
		rua:'cavalo manco',
		cidade:'belém',
		estado:'pará'
	}
};


//--------------------------------------------------- Functions

nome();

function nome(){
	return 'hello world';
}

nome();
var nome = funtion(){
	return 'hello world';
}

var nome = function name(){
	return 'hello world';
}

//--------------------------------------------------------------

nome.call(this,2,3,4,5);
nome.apply(this,[1,2,3,4,5]);

//função fabrica

var pessoa = function(nome, idade){
	return{
		nome: nome,
		idade: idade
	}
}
var joao = pessoa('joao', 22);

//função construtora

var pessoa = function(nome, idade){
	this.nome = nome,
	this.idade = idade
}
//-------------------------------------------EXERCICIOS


//EXERCICIO 1

	var powerRanger = {
		cor: 'verde',
		nome: 'tommy',
		serie: 'mighty morphin',
		megazord: 'dragonzord'
	}

//EXERCICIO 2

	//fabrica
	var livro = function(titulo, autor){
		return{
			titulo: titulo,
			autor: autor
		}
	}
	var livro1 = livro('menino no espelho', 'sabino fernando');

	//CONSTRUTORA
	var carro = function(marca, modelo){
		this.marca = marca,
		this.modelo = modelo
	}

	var carro1 = new carro('volks', 'gol');

//EXERCICIO 3

	// função Expression é uma função sem a necessidade de atribuir à uma variavel
	//a função Declaration é inserida dentro de uma variavel, e quando usar a variavel, a função ja será realizada.


//EXERCICIO 4
	
	//named functions expressions é util para que o erro seja exibido ao debugar

//EXERCICIO 5

	var rg = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\-?\w{1,2}/;

	var rgtest = '21.543.543-2';	
	
	rg.test(rgtest);

//EXERCICIO 6

	//map() é usado para alterar/mapear todos os elementos de uma array para outro conjunto de valores.
	// filter() é usado para remover elementos indesejados com base em alguma condição.

//EXERCICIO 7

	//não funciona porque na declaração de pessoa está com ; e nao com ,  - Da esse erro Uncaught SyntaxError: Unexpected token ;
	//mas arrumando isso, funciona





