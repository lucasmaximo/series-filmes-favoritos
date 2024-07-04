function filtrar(tipo){
    var filmes = document.querySelectorAll('.filme');
    var series = document.querySelectorAll('.serie');

    filmes.forEach(filme => {
        if(tipo === 'filme'){
            filme.style.display = 'block';
        }
        else {
            filme.style.display = 'none';
        }
    });

    series.forEach(serie => {
        if(tipo === 'serie'){
            serie.style.display = 'block';
        }
        else {
            serie.style.display = 'none';
        }
    });
}

function limparFiltro(){
    var filmes = document.querySelectorAll('.filme');
    var series = document.querySelectorAll('.serie');

    filmes.forEach(filme => {
        filme.style.display = 'block';
    });

    series.forEach(serie => {
        serie.style.display = 'block';
    });
}

function ampliarImagem(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function fecharModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
