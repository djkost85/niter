@extends('layouts.boilerplate')

@section('title')
  <title>{{ trans('users.change password') . ' - ' . trans('main.brand') }}</title>
@stop

@section('bodytag')
	<body id="changePassword" class="body browse profile nav-trans animate-nav transparent-navbar">
@stop

@section('content')
	<div class="main-content">
		<div class="main row">	
			@include('elements.userHeader')
			<div class="col-sm-4"></div>
			<div class="col-sm-4">
				{{ Form::open(array('route' => array('users.storeNewPass', $user['username']))) }}
					<div class="form-group">
						<label for="old_password"><i class="fa fa-user"></i> {{ trans('users.old password') }}</label>
						{{ Form::password('old_password', array('class' => 'form-control')) }}
						{{ $errors->first('old_password', "<span class='help-block alert alert-danger'>:message</span>") }}
					</div>
					<div class="form-group">
						<label for="new_password"><i class="fa fa-user"></i> {{ trans('users.new password') }}</label>
						{{ Form::password('new_password', array('class' => 'form-control')) }}
						{{ $errors->first('new_password', "<span class='help-block alert alert-danger'>:message</span>") }}
					</div>
					<div class="form-group">
						<label for="confirm_new_password"><i class="fa fa-user"></i> {{ trans('users.confirm new password') }}</label>
						{{ Form::password('new_password_confirmation', array('class' => 'form-control')) }}
						{{ $errors->first('new_password_confirmation', "<span class='help-block alert alert-danger'>:message</span>") }}
          			</div>
						<button type="submit" class="btn btn-warning pull-right">{{ trans('users.confirm') }}</button>
				{{ Form::close() }}
			</div>
			<div class="col-sm-4"></div>
		</div>
    	@include('elements.footer')
  	</div>
@stop

@section('ads')
@stop