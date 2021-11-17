document.querySelector('table').style.display = 'none';
document.getElementById('load').style.display = 'none';

function mostrar(){
    fetch('http://localhost:8000/search')
    .then(function(response){
        return response.json()
        
        .then(data => {
            document.querySelector('table').style.display = 'table';
            let linha = '';
            data.forEach(i => {
                linha += "<tr>"
                linha += `<td>${i.id}</td>`
                linha += `<td>${i.name}</td>`
                linha += `<td>${i.description}</td>`
                linha += `<td>${i.category_id}</td>`
                linha += "</tr>"
            });
            document.querySelector('tbody').innerHTML = linha;
        })
    })
    .catch(error => console.error('Erro: ', error))
}

function select(){
    document.getElementById('load').style.display = 'block';
    // pegando o select de categorias
    let cat_select = document.getElementById('cat_select');

    // identificando o value do option selecionado deste select
    let id = cat_select.options[cat_select.selectedIndex].value;

    fetch("http://localhost:8000/select/" + id)
    .then(function(response){
        return response.json()
        .then(function(data){
            opcoes = '';
            opcoes += `<option value="" selected disabled>Selecione o produto</option>`;
            data.forEach(i => {
                opcoes += `<option value="${i.id}">${i.name}</option>`;
            });
            prod_select.innerHTML = opcoes;

            document.getElementById('load').style.display = 'none';
        })
        .catch(function(error){
            console.log(error)
        })
    })
}

/* Busca na tabela */
function search2(){
    let search2 = document.getElementById('search').value;
    fetch('http://localhost:8000/produtos/search/' + search2)
    /* .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Erro: ", error)) */

    .then(function(response){
        return response.json()
        .then(function(data){
            let tabela = '';
            tabela += '<table class="table table-hover">';
            tabela += '<thead class="table table-dark">';
            tabela += '<th>#</th>';
            tabela += '<th>Nome</th>'
            tabela += '<th>Descrição</th>';
            tabela += '</thead>';
            tabela += '<tbody>';
            data.forEach(item => {
                tabela += '<tr>'
                tabela += `<td>${item.id}</td>`
                tabela += `<td>${item.name}</td>`
                tabela += `<td>${item.description}</td>`
                tabela += '</tr>'
            });
            tabela += '</tbody>';
            tabela += '</table>';

            document.getElementById('tabela').innerHTML = tabela;
        })
        .catch(function(erro){
            console.log(erro)
        })
    })
}