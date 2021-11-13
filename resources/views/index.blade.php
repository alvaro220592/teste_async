@extends('template')

@section('title', 'Ínicio')

@section('content')

<div class="row mb-2">
    <div class="col-md-6">
        <select name="" id="cat_select" class="form-select" onblur="select()">
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
        </select>
    </div>
</div>

<button class="btn-dark" onclick="mostrar()">Mostrar</button>

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
        
        
    </tbody>
</table>


@endsection