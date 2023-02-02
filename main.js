let nome = prompt("Insira o seu nome:")
let dolarReal = 5.01
let euroReal = 5.50
let libraReal = 6.16
let bitcoinReal = 119147.44
let conversao;
let valor;
let desejoUsuario;
let continua = true;

function repetirOuNao(resposta) {
    if(resposta === 1) {
        continua = true;
    } else {continua = false}
}

while(continua === true) {
    let moeda = prompt("Qual moeda você deseja converter? Digite 1 para DOLAR, 2 para EURO, 3 para LIBRA e 4 para BITCOIN.")

    if (moeda == 1) {
        valor = parseFloat(prompt(`Insira um valor em Dólar. Esse valor será convertido em Real.\nLembrando que a conversão atual é US$1,00 para R$${dolarReal}.`))
        conversao = valor * dolarReal;
        conversao = conversao.toFixed(2)
        alert(`${nome}, o valor convertido é de R$${conversao}.`)
    } else if (moeda == 2) {
        valor = parseFloat(prompt(`Insira um valor em Euro. Esse valor será convertido em Real.\nLembrando que a conversão atual é 1,00€ para R$${euroReal}.`))
        conversao = valor * euroReal;
        conversao = conversao.toFixed(2)
        alert(`${nome}, o valor convertido é de R$${conversao}.`)
    } else if (moeda == 3) {
        valor = parseFloat(prompt(`Insira um valor em Libra Esterlina. Esse valor será convertido em Real.\nLembrando que a conversão atual é £1,00 para R$${libraReal}.`))
        conversao = valor * libraReal;
        conversao = conversao.toFixed(2)
        alert(`${nome}, o valor convertido é de R$${conversao}.`)

    } else if(moeda == 4) {
        valor = parseFloat(prompt(`Insira um valor em Bitcoin. Esse valor será convertido em Real.\nLembrando que a conversão atual é ₿1,00 para R$${bitcoinReal}.`))
        conversao = valor * bitcoinReal;
        conversao = conversao.toFixed(2)
        alert(`${nome}, o valor convertido é de R$${conversao}.`)
    } else {
        let desejoUsuario = parseInt(prompt("Valor inválido. Por favor, digite 1 para TENTAR NOVAMENTE ou 2 para ENCERRAR APLICAÇÃO."))
        repetirOuNao(desejoUsuario);
    }

    if (moeda < 5 && moeda > 0) {
        desejoUsuario = parseInt(prompt("Digite 1 para fazer outra conversão ou 2 para ENCERRAR APLICAÇÃO."))
        repetirOuNao(desejoUsuario)
    }
    }
