@extends('layouts.boilerplate')

@section('bodytag')
	<body id="tos" class="body nav-trans animate-nav browse show transparent-navbar static-text">
@stop

@section('content')
    <div class="main-content row">
	    {{--Main content --}}
		<div class="main">
	    	{{ trans('tos.tos') }}
    	</div>
		@include('elements.footer')
    </div>
@stop


