let totalGeral;
limpar();

function adicionar() {
    // recuperar valores(nome produto, quantidade, valores)
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // calcular preço = subtotal
    let preco = quantidade * valorUnitario;
    // add no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML +`<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`
    // atualizar valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = null;
}
function limpar() {
    // zerar carrinho
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML=' ';
    document.getElementById('valor-total').innerHTML='R$ 0,00 ';
}
