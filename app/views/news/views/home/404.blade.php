@extends('layouts.boilerplate')

@section('bodytag')
    <body id="not-found" class="body nav-trans animate-nav transparent-navbar">
@stop

@section('content')
    <div class="main-content row">
         {{--Modal ready for any use--}}

        {{--Main content --}}
    	<div class="col-xs-10 col-sm-6 col-xs-offset-1 col-sm-offset-3 centered-box">
        	<h1>404</h1>
	        <p>{{ trans('main.404 page message') }}</p>
		</div>
		@include('elements.footer')
    </div>
@stop

@section('scripts')

<script>

</script>

@stop
