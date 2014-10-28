@extends('layouts.boilerplate')

@section('title')
    <title>{{ trans('users.login title') }}</title>
@stop

@section('bodytag')
    <body id="login" class="body nav-trans animate-nav transparent-navbar">
@stop

@section('content')
    <div class="main-content row" style="background: url( {{{ asset('assets/images/' . $bg) }}} )">
        {{--Main content --}}
        <div class="main">
            <div class="col-sm-3"></div>
            <div class="col-xs-12 col-sm-6 contact-container">
                @include('elements.response')
                <div class="col-xs-12 col-sm-7">
                    {{ Form::open(array('action' => 'SessionController@store')) }}
        	        <div class="form-group">
	                   <label for="username"><i class="fa fa-user"></i> {{ trans('users.username') }}</label>
	                   {{ Form::text('username', Input::old('username'), array('class' => 'form-control')) }}
	                   {{ $errors->first('username', "<span class='help-block alert alert-danger'>:message</span>") }}
                    </div>
                    <div class="form-group">
	                   <label for="password"><i class="fa fa-lock"></i> {{ trans('users.password') }}</label>
	                   {{ Form::password('password', array('class' => 'form-control')) }}
	                   {{ $errors->first('password', "<span class='help-block alert alert-danger'>:message</span>") }}
                    </div>
                    <hr>
                    <div class="login-remember-row">
						<label for="remember">{{ trans('users.remember me') }}</label>
						{{ Form::checkbox('remember', 1, true, array('id' => 'remember')) }}						
						<button type="submit" class="btn btn-warning pull-right">{{ trans('users.login') }}</button>
					</div>
					{{ Form::close() }}
        		</div>
             	<div class="col-xs-12 col-sm-5 social-login-btns">
              		<a class="btn btn-block fb-login" href="{{ url('social/facebook') }}"><i class="fa fa-facebook-square"></i> {{ trans('main.log with fb') }}</a>
              		<a class="btn btn-block tw-login" href="{{ url('social/twitter') }}"><i class="fa fa-twitter-square"></i> {{ trans('main.log with tw') }}</a>
              		<a class="btn btn-block go-login" href="{{ url('social/google') }}"><i class="fa fa-google-plus-square"></i> {{ trans('main.log with gg') }}</a>              		
              		<a href="{{ url('forgot-password') }}">{{ trans('users.forgot your password') }}</a>
              	</div>
    		</div>
      		@include('elements.footer')
    	</div>
	</div>
@stop