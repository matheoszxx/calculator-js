//funcoes declarativas
/* function funcao() {
    console.log("E ai pessoal!");
}
funcao(); */

//expressão de função com nomeação
/* var funcao = function () {
    console.log("função de expressão com nomeação");
}

funcao(); */

//arrow function
/* var funcao = () => {
    console.log("sou uma arrow function");
}
funcao(); */

function escopoLocal() {
	let escopoLocalInterno = 'local';
}
console.log(escopoLocalInterno);