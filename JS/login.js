// Função para alternar entre o formulário de login e o de recuperação de senha
function toggleForms() {
    const loginForm = document.querySelector('.active');
    const forgotForm = document.querySelector('.forgot');
    
    // Alternar visibilidade
    loginForm.style.display = (loginForm.style.display === 'none' || loginForm.style.display === '') ? 'none' : 'block';
    forgotForm.style.display = (forgotForm.style.display === 'none' || forgotForm.style.display === '') ? 'block' : 'none';
}

// Função para exibir o formulário de cadastro
function showRegistrationForm() {
    const loginForm = document.querySelector('.active');
    const registrationForm = document.querySelector('.registration');
    
    // Alternar visibilidade
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
}

// Função para exibir o formulário de preferências literárias
function showPreferencesForm() {
    const registrationForm = document.querySelector('.registration');
    const preferencesForm = document.querySelector('.preferences');
    
    // Alternar visibilidade
    registrationForm.style.display = 'none';
    preferencesForm.style.display = 'block';
}

// Função para exibir o formulário de formato de livro
function showBookFormatForm() {
    const preferencesForm = document.querySelector('.preferences');
    const bookFormatForm = document.querySelector('.book-format');
    
    // Alternar visibilidade
    preferencesForm.style.display = 'none';
    bookFormatForm.style.display = 'block';
}

// Função para exibir o formulário de inscrição na newsletter
function showNewsletterForm() {
    const bookFormatForm = document.querySelector('.book-format');
    const newsletterForm = document.querySelector('.newsletter');
    
    // Alternar visibilidade
    bookFormatForm.style.display = 'none';
    newsletterForm.style.display = 'block';
}

// Função para enviar o código de recuperação (simulado aqui)
function sendRecoveryCode() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Código de recuperação enviado para ${email}`);
        // Lógica real de envio de e-mail deve ser implementada
    } else {
        alert('Por favor, insira um e-mail válido');
    }
}

// Função para confirmar o código de recuperação (simulado)
function confirmCode() {
    const code = document.getElementById('code').value;
    if (code) {
        alert('Código confirmado!');
        // Lógica real de validação de código deve ser implementada
    } else {
        alert('Por favor, insira o código de recuperação');
    }
}

// Função para redefinir a senha (simulado)
function resetPassword() {
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (newPassword && confirmPassword) {
        if (newPassword === confirmPassword) {
            alert('Senha redefinida com sucesso!');
            // Lógica real de atualização de senha deve ser implementada
        } else {
            alert('As senhas não coincidem');
        }
    } else {
        alert('Por favor, preencha todos os campos');
    }
}

// Função para fazer login e redirecionar para a conta
function handleLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Definir usuário e senha padrão
    const storedUsername = "Rui"; // Nome de usuário padrão
    const storedPassword = "senha123"; // Senha padrão

    // Verifica se os dados de login correspondem aos dados padrão
    if (username === storedUsername && password === storedPassword) {
        alert("Login bem-sucedido!");
        window.location.href = "conta.html"; // Redireciona para a página de conta
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

// Função para preencher o ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Evento de envio do formulário de login
document.querySelector("form.active").addEventListener("submit", handleLogin);

// Função de cadastro do usuário (simulada)
function handleRegistration(event) {
    event.preventDefault(); // Impede o envio do formulário de registro

    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    if (username && password) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "conta.html"; // Redireciona para a página de conta após o cadastro
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Evento de envio do formulário de registro
document.querySelector("form.registration").addEventListener("submit", handleRegistration);