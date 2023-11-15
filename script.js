const precos = {
    'Empada de Frango': 8.00,
    'Empada de camarão': 10.00,
    'Empadinha de Frango': 2.00,
    'Empadinha de camarão': 3.00,
    // Adicione outros sabores e seus preços aqui...
  };
  
  let totalCompra = 0;
  
  function adicionarAoCarrinho(empada) {
    const carrinhoLista = document.getElementById('carrinho-lista');
    const novoItem = document.createElement('li');
  
    const spanEmpada = document.createElement('span');
    spanEmpada.textContent = empada;
    novoItem.appendChild(spanEmpada);
  
    const precoEmpada = precos[empada];
    totalCompra += precoEmpada;
  
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('remove-button');
    botaoRemover.onclick = function() {
      totalCompra -= precoEmpada;
      atualizarTotalCompra();
      carrinhoLista.removeChild(novoItem);
    };
  
    novoItem.appendChild(botaoRemover);
    carrinhoLista.appendChild(novoItem);
  
    atualizarTotalCompra();
  }
  
  function atualizarTotalCompra() {
    const totalElement = document.getElementById('total');
    totalElement.textContent = totalCompra.toFixed(2);
  }
  
  function enviarPedidoWhatsApp() {
    const numeroWhatsApp = '92993706807';
    let mensagem = 'Gostaria de fazer um pedido: ';
  
    const carrinhoLista = document.getElementById('carrinho-lista').getElementsByTagName('span');
    for (let i = 0; i < carrinhoLista.length; i++) {
      mensagem += carrinhoLista[i].textContent + ', ';
    }
  
    mensagem += `Total: R$ ${totalCompra.toFixed(2)}.`; // Adiciona o valor total ao final da mensagem
  
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  
    window.open(url, '_blank');
  }
  
  