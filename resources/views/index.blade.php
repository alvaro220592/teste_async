@extends('template')

@section('title', 'Ínicio')

@section('content')

<div class="row mb-2">
    <div class="col-md-6">
        <select name="" id="cat_select" class="form-select" onchange="select()">
            <option value="" selected disable>Selecione a categoria</option>
            @foreach ($categorias as $cat)
            <option value="{{ $cat->id }}">{{ $cat->name }}</option>
            @endforeach
        </select>
    </div>
</div>
<div class="row mb-5">
    <div class="col-md-6">
        <select name="" id="prod_select" class="form-select">
            <option value="" selected disable>Selecione o produto</option>
        </select><img src="img/load.gif" id="load">
    </div>
</div>

{{-- button class="btn-dark" onclick="mostrar()">Mostrar</button> --}}


{{-- TABELA PARA O JAVASCRIPT MOSTRAR OS DADOS --}}
{{-- <table class="table table-hover">
    <thead class="table table-dark">
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>ID categoria</th>
        </tr>
    </thead>
    <tbody id="tbody">
        
        
    </tbody>
</table> --}}

{{-- TABELA PARA SER LISTADA COM O BACKEND, MAS COM BUSCAS PELO JS --}}
{{-- SEARCH --}}
<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      
        <input class="form-control me-2" type="search" name="search" id="search" placeholder="Buscar" aria-label="Search"  onkeyup="search2()">
    
    </div>
  </nav>

<table class="table table-hover">
    <thead class="table table-dark">
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>ID categoria</th>
        </tr>
    </thead>
    <tbody id="tbody">
       {{--  @foreach ($produtos as $pr)
            <tr>
                <td>{{ $pr->id }}</td>
                <td>{{ $pr->name }}</td>
                <td>{{ $pr->description }}</td>
            </tr>            
        @endforeach
        
    </tbody> --}}
</table>

<div class="tabela" id="tabela">

</div>


@endsection