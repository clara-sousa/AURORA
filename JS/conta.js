const status = "Ativo"
document.getElementById("status").textContent = status; 
const emprestimo = "2"
document.getElementById("emprestimo").textContent = emprestimo; 
const ctx = document.getElementById('myChart').getContext('2d');

const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
        label: 'Empréstimos por Mês',
        data: [65, 59, 80, 81, 56],
        backgroundColor: ' #a47928',
        borderColor: ' #a47928',
        borderWidth: 1
        
    }]
};

const chart = new Chart(ctx, {
    type: 'bar', 
    data: data,
    options: {
        plugins: {
            subtitle: {
                display: false,
                text: 'Gráfico de Empréstimos Mensais'
            }
        }
    }
});