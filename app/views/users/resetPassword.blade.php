@extends('layouts.boilerplate')

@section('title')
	<title>{{ trans('users.forgot pass title') }}</title>
@stop

@section('bodytag')
	<body id="resetPassword" class="body show nav-trans animate-nav transparent-navbar">
@stop

@section('content')
    <div class="main-content row" style="background: url( {{{ asset('assets/images/' . $bg) }}} )">
        {{--Main content --}}
        <div class="main">
            <div class="col-sm-4"></div>
            <div class="col-xs-12 col-sm-4 contact-container">
                @include('elements.response')
				{{ Form::open(array('url' => '/forgot-password')) }}
					<div class="form-group">
						<label class="mar-bot" for="email"><i class="fa fa-user"></i></span> {{ trans( 'users.forgot password' ) }} </label>
						{{ Form::text('email', Input::old('email'), array('class' => 'form-control')) }}
						{{ $errors->first('email', "<span class='help-block alert alert-danger'>:message</span>") }}
					</div>
      				<hr>
      				<button type="submit" class="btn btn-warning pull-right">{{ trans('users.confirm') }}</button>
      			{{ Form::close() }}
			</div>
    		<div class="col-sm-4"></div>
    	</div>
   		@include('elements.footer')
	</div>
@stop