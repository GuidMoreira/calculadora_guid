// Variavel para armazenar o valor atual
let resultado = '';

// Funcao para adicionar numeros ou operadores no display
function adicionar(valor) {
    resultado += valor;
    document.getElementById('display').value = resultado;
}

// Funcao para limpar o display
function limpar() {
    resultado = '';
    document.getElementById('display').value = '';
}

// Funcao para calcular a expressao
function calcular() {
    try {
        resultado = eval(resultado).toString();
        document.getElementById('display').value = resultado;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
        resultado = '';
    }
}