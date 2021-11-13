document.querySelector('table').style.display = 'none';

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
    let cat_select = document.getElementById('cat_select');
    let id = cat_select.options[cat_select.selectedIndex].value;

    fetch("http://localhost:8000/select/" + id)
    .then(function(response){
        return response.json()
        .then(function(data){
            opcoes = '';
            data.forEach(i => {
                opcoes += `<option value="${i.id}">Nome: ${i.name}, desc: ${i.description}, categoria ${i.category_id}</option>`;
            });
            prod_select.innerHTML = opcoes;
        })
        .catch(function(error){
            console.log(error)
        })
    })
}