/* constante que armazena o nome dos livros, autores e as categorias */
const books = [
   { title: "O Castelo Animado", author: "Diana Wynne Jones", category: ["ficcao", "infantil", "romance", "fantasia"], image: "IMG/diana (3).jpg" },
   { title: "O gato que amava Livros", author: "Sosuke Natsukawa", category: ["ficcao", "ficcao_cura", "literatura_oriental" ], image: "IMG/sosuke.jpg" },
   { title: "Os sete maridos de Evelyn Hugo", author: "Taylor Reid Jenkins", category: ["ficcao", "romance", "LGBT", "literatura_ocidental"], image: "IMG/taylor.jpg" },
  { title: "O oráculo da Noite", author: "Sidarta Ribeiro", category: ["nao_ficcao", "uni"], image: "IMG/uni (2).jpg" },
  { title: "O Alquimista", author: "Paulo Coelho", category: ["ficcao", "literatura_ocidental"], image: "IMG/coelho.jpg" },
    { title: "Herdeiras de Duna", author: "Frank Herbert", category: ["ficcao", "ficcao_cient"], image: "IMG/frank (1).jpg" },
{ title: "Storytelling com Dados", author: "Cole Nussbaumer Knaflic", category: ["nao_ficcao", "uni"], image: "IMG/uni (3).jpg" },
{ title: "Da Terra à Lua", author: "Júlio Verne", category: ["ficcao", "ficcao_cient"], image: "IMG/verne.jpg" },
{ title: "Farmacologia Básica", author: "Lucimar Filot da Silva e mais", category: ["nao_ficcao", "uni"], image: "IMG/uni (4).jpg" },
{ title: "(Não)Quero ser como Você", author: "Vinícius Fernandes", category: ["ficcao", "romance", "LGBT", "literatura_ocidental"], image: "IMG/vinícius.jpg" },
{ title: "Manual de Contabilidade Societária", author: "Ariovaldo dos Santos e mais", category: ["nao_ficcao", "uni"], image: "IMG/uni (5).jpg" },
{ title: "Devoradores de Estrelas", author: "Andy Weir", category: ["ficcao", "ficcao_cient", "Literatura Ocidental"], image: "IMG/weir.jpg" },
{ title: "Vade Mecum", author: "Múltiplos Autores", category: ["nao_ficcao", "uni"], image: "IMG/uni (6).jpg" },
{ title: "1984", author: "George Orwell", category: ["ficcao", "ficcao_cient", "literatura_ocidental"], image: "IMG/orwell.jpg" },
{ title: "Pensamento Eficaz", author: "Shane Parrish", category: ["nao_ficcao", "uni"], image: "IMG/uni.jpg" },
{ title: "O livro da Matemática", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (3).jpg" },
{ title: "O Rascunho do Amor", author: "Emily Wibberley", category: ["ficcao", "romance", "literatura_ocidental"], image: "IMG/wibberley.jpg" },
{ title: "Mitologia Nórdica", author: "Neil Gaiman", category: ["ficcao_his", "literatura_ocidental"], image: "IMG/neil.jpg" },
{ title: "Oito Assassinatos Perfeitos", author: "Peter Swanson", category: ["ficcao", "suspense", "mistério", "literatura_ocidental"], image: "IMG/peter.jpg" },
{ title: "Fahrenheit 451", author: "Ray Bradbury", category: ["ficcao", "ficcao_cient", "literatura_ocidental"], image: "IMG/ray.jpg" },
{ title: "O livro da Sociologia", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (2).jpg" },
{ title: "O livro da Filosofia", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (1).jpg" },
{ title: "Oração para Desaparecer", author: "Socorro Acioli", category: ["ficcao", "literatura_ocidental"], image: "IMG/socorro (2).jpg" },
{ title: "O homem de Giz", author: "C.J. Tudor", category: ["ficcao", "mistério", "suspense"], image: "IMG/tudor.jpg" },
{ title: "Comporte-se", author: "Robert M.Sapolsky", category: ["nao_ficcao", "uni"], image: "IMG/uni (1).jpg" },
{ title: "Alice no país das Maravilhas", author: "Lewis Carroll", category: ["ficcao", "fantasia", "literatura_ocidental"], image: "IMG/lewis.jpg" },
{ title: "O livro da Literatura", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (4).jpg" },
{ title: "Herdeiras do Mar", author: "Mary Lynn Bracht", category: ["ficcao", "ficcao_his", "literatura_ocidental", "literatura_oriental"], image: "IMG/lynn.jpg" },
{ title: "Três chances para o Amor", author: "Lyssa Kay Adams", category: ["ficcao","romance"], image: "IMG/lyssa (1).jpg" },
{ title: "O livro do Feminismo", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (5).jpg" },
{ title: "Absolutamente Romântico", author: "Lyssa Kay Adams", category: ["ficcao", "romance"], image: "IMG/lyssa (2).jpg" },
{ title: "Estupidamente Apaixonados", author: "Lyssa Kay Adams", category: ["ficcao", "romance"], image: "IMG/lyssa (3).jpg" },
{ title: "O livro da história Negra", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (7).jpg" },
{ title: "Missão Romance", author: "Lyssa Kay Adams", category: ["ficcao", "romance", "Literatura Ocidental"], image: "IMG/lyssa (4).jpg" },
{ title: "O livro do Cinema", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (8).jpg" },
{ title: "O clube do livro dos Homens", author: "Lyssa Kay Adams", category: ["ficcao", "romance", "literatura_ocidental"], image: "IMG/lyssa (5).jpg" },
{ title: "O livro da Mitologia", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (9).jpg" },
{ title: "O conto da Aia", author: "Margaret Atwood", category: ["ficcao", "literatura_ocidental"], image: "IMG/margaret.jpg" },
{ title: "A Menina que roubava Livros", author: "Markus Zusak", category: ["ficcao", "ficcao_his", "literatura_ocidental"], image: "IMG/markus.jpg" },
{ title: "O livro da História", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (11).jpg" },
    { title: "A Hora da Estrela", author: "Clarice Lispector", category: ["ficcao", "literatura_ocidental"], image: "IMG/clarice.jpg" },
   { title: "O livro dos Negócios", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (12).jpg" },
   { title: "O livro da Economia", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (13).jpg" },
    { title: "A Casa dos muitos Caminhos", author: "Diana Wynne Jones", category: ["ficcao", "infantil", "romance", "fantasia"], image: "IMG/diana (1).jpg" },
    { title: "O livro da Arte", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (14).jpg" },
    { title: "O Castelo no Ar", author: "Diana Wynne Jones", category: ["ficcao", "infantil", "romance", "fantasia"], image: "IMG/diana (2).jpg" },
    { title: "O livro da Música", author: "Múltiplos Autores", category: ["ficcao"], image: "IMG/grandesideias (15).jpg" },
    { title: "O livro das Religiões", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (16).jpg" },
    { title: "O Guia do Mochileiro das Galáxias", author: "Douglas Adams", category: ["ficcao"], image: "IMG/douglas.jpg" },
    { title: "O livro da Biologia", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (17).jpg" },
    { title: "O Morro dos ventos Uivantes", author: "Emily Brontë", category: ["ficcao", "ficcao_his", "romance"], image: "IMG/emilly.jpg" },
  { title: "O livro da Política", author: "Múltiplos Autores", category: ["ficcao"], image: "IMG/grandesideias (18).jpg" },
    { title: "O Mar sem Estrelas", author: "Erin Mongenstern", category: ["ficcao"], image: "IMG/erin.jpg" },
    { title: "O livro da Ciência", author: "Múltiplos Autores", category: ["nao_ficcao"], image: "IMG/grandesideias (19).jpg" },
    { title: "Hereges de Duna", author: "Frank Herbert", category: ["ficcao", "ficcao_cient"], image: "IMG/frank (2).jpg" },
     { title: "Imperador Deus de Duna", author: "Frank Herbert", category: ["ficcao", "ficcao_cient"], image: "IMG/frank (3).jpg" },
      { title: "Filhos de Duna", author: "Frank Herbert", category: ["ficcao", "ficcao_cient"], image: "IMG/frank (4).jpg" },
       { title: "Messias de Duna", author: "Frank Herbert", category: ["ficcao", "ficcao_cient"], image: "IMG/frank (5).jpg" },
        { title: "Duna", author: "Frank Herbert", category: ["ficcao", "ficcao_cient"], image: "IMG/frank (6).jpg" },
    { title: "Eu, Robô", author: "Isaac Asimov", category: ["ficcao", "ficcao_cient"], image: "IMG/asimov.jpeg" },
    { title: "A Vida compartilhada em uma admirável órbita Fechada", author: "Becky Chambers", category: ["ficcao", "ficcao_cient"], image: "IMG/becky (1).jpg" },
    { title: "A Longa visita a um pequeno planeta Hostil", author: "Becky Chambers", category: ["ficcao", "ficcao_cient"], image: "IMG/becky (2).jpg" },
    { title: "Misto Quente", author: "Charles Bukowski", category: ["ficcao"], image: "IMG/bukowski.jpg" },
    { title: "Laranja Mecânica", author: "Anthony Burgess", category: ["ficcao", "ficcao_cient"], image: "IMG/burguess.jpg" },
    { title: "Depois daquele Verão", author: "Carley Fortune", category: ["ficcao", "jovem_adulto", "romance"], image: "IMG/carley.jpg" },
    { title: "O Retrato de Dorian Gray", author: "Oscar Wilde", category: ["ficcao", "LGBT"], image: "IMG/OSCAR.jpg" },
    { title: "Uma Mulher no Escuro", author: "Raphael Montes", category: ["ficcao", "suspense", "mistério"], image: "IMG/RAPHAEL.jpg" },
    { title: "O Médico e o Monstro", author: "Robert Louis Stevenson", category: ["ficcao", "mistério"], image: "IMG/ROBERT.jpg" },
    { title: "A cabeça do Santo", author: "Socorro Acioli", category: ["ficcao"], image: "IMG/SOCORRO.jpg" },
    { title: "A Palavra que Resta", author: "Stênio Garcia", category: ["ficcao", "romance", "LGBT"], image: "IMG/STÊNIO.jpg" },
    { title: "O Avesso da Pele", author: "Jeferson Tenório", category: ["ficcao"], image: "IMG/TENÓRIO.jpg" },
    { title: "O Hobbit", author: "J.R.R Tolkien", category: ["ficcao", "fantasia"], image: "IMG/TOLKIEN.jpg" },
    { title: "Antes que o café Esfrie", author: "Toshikazu Kawaguchi", category: ["ficcao", "Literatura Oriental"], image: "IMG/TOSHIKAZU.jpg" },
    { title: "Hamlet", author: "William Shakespeare", category: ["ficcao"], image: "IMG/WILLIAM.jpg" },
    { title: "A voz da sereia volta neste Livro", author: "Amanda Lovelace", category: ["nao_ficcao"], image: "IMG/amanda (1).jpg" },
    { title: "A bruxa não vai para a fogueira neste Livro", author: "Amanda Lovelace", category: ["nao_ficcao"], image: "IMG/amanda (2).jpg" },
];
/*constante que armazena as descrições de cada categoria*/
const genreDescriptions = {
    todas: "",
    ficcao: "A ficção abrange obras literárias criadas a partir da imaginação, não baseadas em fatos reais. Os enredos incluem personagens, cenários e eventos fictícios, explorando temas variados, como romances, aventuras e dramas psicológicos. É um gênero amplo que se subdivide em inúmeras categorias.",
    ficcao_cient: "A ficção científica explora cenários especulativos fundamentados em avanços científicos e tecnológicos. O gênero aborda temas como viagens espaciais, inteligência artificial e vida alienígena. Embora fictício, busca manter uma base lógica, desafiando o leitor a refletir sobre implicações éticas e sociais das inovações.",
    ficcao_his: "A ficção histórica combina elementos fictícios com eventos e períodos históricos reais. Os autores recriam épocas passadas, mergulhando o leitor em acontecimentos significativos de civilizações, guerras e culturas. Embora personagens principais sejam fictícios, o pano de fundo histórico é rigorosamente pesquisado e autêntico.",
    fantasia: "O gênero fantasia transporta o leitor para mundos imaginários, repletos de magia, criaturas sobrenaturais e aventuras épicas. Conhecida por suas mitologias complexas e heróis improváveis, a fantasia permite que autores explorem temas universais, como o bem versus o mal, em contextos únicos e inventivos.",
    romance: "Romance é um gênero que foca em relacionamentos amorosos e emocionais entre os personagens. As histórias geralmente envolvem encontros, desencontros, conflitos emocionais e resoluções felizes. Os romances variam de dramáticos e intensos a leves e cômicos, explorando o impacto do amor nas vidas de todos.",
    suspense: "O suspense é construído em torno da tensão e do mistério, mantendo o leitor na expectativa de um desfecho surpreendente. As narrativas contêm reviravoltas, segredos e perigos iminentes, explorando o lado psicológico dos personagens e a incerteza do que está por vir. É ideal para quem busca adrenalina.",
    historico: "O gênero histórico inclui narrativas ambientadas em contextos passados, mas que se baseiam em fatos verídicos. Ao contrário da ficção histórica, esses livros focam em personagens reais e eventos documentados, oferecendo uma recriação detalhada da sociedade, cultura e política de épocas anteriores.",
    infantil: "Livros infantis são escritos especialmente para crianças, com histórias curtas e lições morais. Narrativas criativas que estimulam  imaginação, frequentemente acompanhadas de ilustrações vibrantes. Temas variam de aventuras divertidas a mensagens sobre amizade e coragem, incentivando a curiosidade e o amor pela leitura.",
    policial: "O gênero policial gira em torno da investigação de crimes, com detetives como protagonistas. A busca pela verdade e resolução de mistérios são centrais. As histórias revelam a psicologia dos personagens e mantêm os leitores ansiosos para descobrir o culpado até o fim.",
    misterio: "Livros de mistério desafiam o leitor a desvendar o que está oculto, seja um criminoso, um segredo ou um evento inexplicável. Estruturados como quebra-cabeças, essas histórias mantêm o leitor em busca de respostas, criando uma atmosfera de tensão e expectativa até a revelação.",
    terror: "O terror explora os medos humanos, criando atmosferas de tensão e pavor. Criaturas sobrenaturais e psicopatas são comuns, provocando reações emocionais intensas. Com descrições vívidas, o autor cria uma experiência envolvente que desafia os leitores a enfrentar seus piores pesadelos e inquietações.",
    sobrenatural: "Obras de literatura sobrenatural focam em elementos além da compreensão, como fantasmas e poderes místicos. Essas narrativas exploram o desconhecido, combinando mistério e terror. Personagens enfrentam situações extraordinárias, permitindo que os autores explorem temas complexos sobre a vida e a morte, desafiando a lógica.",
    paranormal: "O gênero paranormal envolve fenômenos que desafiam a ciência, como telepatia e habilidades psíquicas. Personagens frequentemente possuem poderes ou se encontram em situações que misturam o sobrenatural com o cotidiano. Isso permite a exploração de temas como amor, amizade e coragem em contextos extraordinários.",
    nao_ficcao: "A não ficção abrange obras literárias baseadas em fatos, como ensaios e biografias. Esses livros informam e educam, permitindo ao leitor compreender melhor diversos temas. Os tópicos variam amplamente, incluindo ciência e sociedade, promovendo uma compreensão mais profunda do mundo e seus acontecimentos.",
    biografia: "Biografias relatam a vida de pessoas, desde seus primeiros anos até feitos e conquistas. Essas obras oferecem uma visão detalhada dos desafios e sucessos que moldaram vidas notáveis. A narrativa revela aspectos íntimos, proporcionando lições valiosas sobre perseverança e busca por objetivo",
    tecnologia:"Livros de tecnologia exploram inovações e avanços que moldam o mundo moderno. Eles abordam tópicos como programação, inteligência artificial e transformação digital. A literatura desse gênero foca nos aspectos técnicos e nos impactos sociais dessas inovações, oferecendo insights sobre o futuro tecnológico da sociedade.",
    criminologia: "A criminologia investiga o comportamento criminal e suas causas, além de formas de prevenção e punição. Esses livros analisam temas como psicologia criminal e justiça penal, proporcionando uma compreensão profunda das dinâmicas sociais que influenciam o crime e as mentes dos criminosos.",
    LGBT: "O gênero LGBT foca em narrativas que refletem experiências e questões da comunidade LGBTQIA+. Esses livros exploram temas como sexualidade, identidade e aceitação, proporcionando representatividade e visibilidade. A literatura LGBT destaca lutas por direitos e promove uma compreensão mais profunda das diversidades humanas."
,
    jovem_adulto: "O gênero jovem adulto (YA) é destinado a adolescentes e jovens adultos, abordando desafios e experiências dessa fase da vida. Os temas frequentemente incluem relacionamentos, amadurecimento e autodescoberta, criando histórias emocionantes e envolventes que refletem as questões e sentimentos dos leitores nessa faixa etária.",
    novo_adulto: "O gênero novo adulto (NA) se concentra em personagens que transitam entre a adolescência e a vida adulta, enfrentando desafios e transições dessa fase. As histórias frequentemente exploram temas como independência, relacionamentos e autoconhecimento, proporcionando uma perspectiva única sobre a vida nessa etapa de desenvolvimento.",
    HQ_Mangá: "HQs e mangás são formas de arte narrativa que combinam ilustrações e textos para contar histórias. Esses formatos abrangem uma vasta gama de gêneros, desde ação e aventura até romance e drama, proporcionando experiências visuais envolventes e narrativas que cativam leitores de todas as idades.",
    literatura_ocidental: "A literatura ocidental abrange obras de países ocidentais, explorando tradições culturais e artísticas. Os livros refletem temas variados, desde questões sociais até dilemas existenciais, proporcionando uma visão profunda da experiência humana. A diversidade das narrativas enriquece a compreensão das culturas ocidentais ao longo da história.",
    literatura_oriental: "A literatura oriental inclui obras de países do leste asiático, como China, Japão e Coreia, explorando tradições culturais ricas e filosóficas. As narrativas abordam temas como espiritualidade, natureza e questões sociais, oferecendo uma visão única e profunda das sociedades orientais e suas nuances culturais.",
    ficcao_cura: "A ficção de cura centra-se em histórias que exploram superação pessoal e transformação emocional. Os protagonistas enfrentam traumas e desafios profundos, buscando crescimento e bem-estar. Este gênero é ideal para leitores que desejam se inspirar com narrativas de redenção e autodescoberta significativas.",
    chick_lit: "Chick-lit é um gênero leve que foca nas vidas e desafios de mulheres contemporâneas. As histórias frequentemente exploram relacionamentos, carreira e autodescoberta com humor e otimismo. Com protagonistas cativantes, essas narrativas oferecem reflexões sobre a vida moderna e as complexidades das relações humanas.",
    uni: "Livros universitários são materiais acadêmicos voltados para estudantes de ensino superior. Eles abrangem uma vasta gama de disciplinas, oferecendo conteúdo técnico e aprofundado. Essenciais para o aprendizado, esses livros ajudam a consolidar conhecimentos teóricos e práticos, formando a base para estudos avançados."
};
let currentPage = 1; // Número da página sendo exibida, inicialmente 1
const itemsPerPage = 9; // Número de livros exibidos por página
let filteredBooks = books; // Inicialmente, armazena todos os livros disponíveis

// Função para exibir os livros na página
function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ''; // Limpa o conteúdo existente

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex); // Obtém os livros a serem exibidos

    paginatedBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <button onclick="requestLoan('${book.title}', '${book.author}', '${book.image}')" id="emprestimo">Solicitar Empréstimo</button>
        `;
        bookList.appendChild(bookDiv);
    });

    document.getElementById("page-info").innerText = `Página ${currentPage} de ${Math.ceil(filteredBooks.length / itemsPerPage)}`;
    document.getElementById("prev-btn").disabled = currentPage === 1;
    document.getElementById("next-btn").disabled = currentPage === Math.ceil(filteredBooks.length / itemsPerPage);
}

// Função para filtrar os livros com base na categoria
function filterBooks() {
    const categorySelect = document.getElementById("category");
    const selectedCategory = categorySelect.value; // Armazena a categoria escolhida

    filteredBooks = books.filter(book => {
        return selectedCategory === "todas" || book.category.includes(selectedCategory);
    });

    currentPage = 1; // Reseta a página ao filtrar
    displayBooks(); // Exibe os livros filtrados

    // Atualiza a descrição dos gêneros literários com base na categoria selecionada
    const genreDescription = document.getElementById("genre-description");
    genreDescription.innerText = genreDescriptions[selectedCategory] || "Categoria não encontrada.";
}

function nextPage() {
    if (currentPage < Math.ceil(filteredBooks.length / itemsPerPage)) {
        currentPage++; // Avança para a próxima página
        displayBooks(); // Atualiza a exibição dos livros
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--; // Volta para a página anterior
        displayBooks(); // Atualiza a exibição dos livros
    }
}

// Função do botão de empréstimo que redireciona o usuário para a página de empréstimo
function requestLoan(bookTitle, bookAuthor, bookImage) {
    const encodedTitle = encodeURIComponent(bookTitle); // Codifica o nome do livro
    const encodedAuthor = encodeURIComponent(bookAuthor); // Codifica o nome do autor
    const encodedImage = encodeURIComponent(bookImage); // Codifica a URL da imagem
    window.location.href = `emprestimo.html?title=${encodedTitle}&author=${encodedAuthor}&image=${encodedImage}`;
}
// Chama a função para que todos os livros sejam visíveis a princípio
displayBooks();

// catálogos.js

// Definindo a data final para a contagem regressiva (5 dias a partir de agora)
const countdownDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 5 dias em milissegundos

// Atualiza a contagem regressiva a cada 1 segundo
const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calcula o tempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualiza os elementos HTML com os valores calculados
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Se a contagem regressiva terminar
    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.countdown-container').innerHTML = "<h2>O tempo acabou!</h2>";
    }
}, 1000); // Atualiza a cada 1 segundo
