@extends('layouts.boilerplate')

@section('bodytag')
	<body id="contact" class="body nav-trans animate-nav browse show transparent-navbar">
@stop

@section('content')
    <div class="main-content row">
	    {{--Main content --}}
		<div class="main row">
			<div class="col-sm-6 col-sm-offset-3 contact-container">
				@include('elements.response')
				<h4>{{ trans('main.contact') }}</h4>
				<div class="help-block">To contact us use the form below.</div>
				{{ Form::open(array('route' => 'submit.contact', 'class' => 'form-horizontal')) }}
					{{ Form::label('name', trans('main.name')) }} <span class="req">*</span>
					{{ Form::text('name', Input::old('name'), array('class' => 'form-control')) }}
					{{ $errors->first('name', '<span class="help-block alert alert-danger">:message</span>') }}
					{{ Form::label('email', trans('main.email')) }} <span class="req">*</span>
					{{ Form::text('email', Input::old('email'), array('class' => 'form-control')) }}
					{{ $errors->first('email', '<span class="help-block alert alert-danger">:message</span>') }}
					{{ Form::label('comment', trans('main.contact messages')) }} <span class="req">*</span>
					{{ Form::textarea('comment', Input::old('comment'), array('class' => 'form-control', 'rows' => 5)) }}
					{{ $errors->first('comment', '<span class="help-block alert alert-danger">:message</span>') }}
					{{ Form::label('human', trans('main.are you human')) }} <span class="req">*</span>
					<br>
					{{ HTML::image(Captcha::img(), trans('main.captchaImage'), array('class' => 'captcha-image')) }}
					{{ Form::text('captcha', null, array('class' => 'form-control')) }}
					{{ $errors->first('captcha', '<span class="help-block alert alert-danger">:message</span>') }}
					{{ Form::submit('Submit', array('class' => 'btn btn-success')) }}
	    		{{ Form::close() }}
			</div>
    	</div>
		@include('elements.footer')
    </div>
@stop



