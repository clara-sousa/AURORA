document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('protocol');
    // Obtém os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookTitle = urlParams.get('title'); // Obtém o título
    const bookAuthor = urlParams.get('author'); // Obtém o autor
    const bookImage = urlParams.get('image'); // Obtém a URL da imagem
    // Preenche os elementos HTML com os dados obtidos
 document.getElementById("book-title").innerText = bookTitle || "Título não disponível";
  document.getElementById("book-author").innerText = bookAuthor || "Autor não disponível";
    document.getElementById("book-cover").src = bookImage || ""; // Define a fonte da imagem
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
     // Coleta os dados do formulário
        const fullName = form.fullName.value;
        const email = form.email.value;
        const address = form.address.value;
        const cep = form.cep.value;
        const phone = form.phone.value;
        const returnDate = form.returnDate.value;

        // Valida se uma data de devolução foi selecionada
        if (returnDate === "0") {
            alert("Por favor, selecione uma data de devolução.");
            return;
        }

        // Armazena o título do livro no localStorage
        if (bookTitle) {
            localStorage.setItem('bookTitle', bookTitle);
        }

        // Exibe os dados coletados 
        alert(`Dados enviados:\nNome: ${fullName}\nE-mail: ${email}\nEndereço: ${address}\nCEP: ${cep}\nTelefone: ${phone}\nData de Devolução: ${getReturnDate(returnDate)}`);
        // Redireciona o usuário para páginainicial.html
        window.location.href = 'páginainicial.html';
    });
   /* retorna a data baseado no value do select */
    function getReturnDate(value) {
        switch (value) {
            case "1":
                return "30 de Novembro de 2024";
            case "2":
                return "30 de Dezembro de 2024";
            case "3":
                return "30 de Janeiro de 2025";
            case "4":
                return "25 de Fevereiro de 2025";
            default:
                return "Data não válida";
        }
    }
});