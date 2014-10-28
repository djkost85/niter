@extends('layouts.boilerplate')

@section('title')
	<title> {{  trans('users.profile details') . ' - ' . trans('main.brand') }}</title>
@stop

@section('bodytag')
	<body id="editProfile" class="body show profile nav-trans animate-nav transparent-navbar">
@stop

@section('content')
	<div class="main-content">
		@include('elements.userHeader')
		<div class="lists-wrapper">
			<div class="col-xs-12 user-information">
				<div class="change-password row">
					<span>
						<p>
							{{ trans('users.change password expl') }}:
						</p>
						<a class="btn btn-success" href="{{ Helpers::url($user->username, $user->id, 'users') . '/change-password' }}">{{ trans('users.change password') }}</a>
					</span>
				</div>
				<hr>
				<div class="change-avatar row">
					<span>
						<p>{{ trans('users.edit avatar expl') }}</p>
					</span>
      				<img class="img-profile" src="{{{ $user->avatar ? asset($user->avatar) : asset('assets/images/no_user_icon_big.jpg') }}}" alt="{{{ $user->username . trans('users.avatar') }}}" class="img-responsive thumb">
					{{ Form::open(array('route' => array('users.avatar', $user->id), 'files' => true, 'class' => 'load_avatar')) }}
						<div class="form-group">
	          				{{ Form::file('avatar') }}
	          				{{ $errors->first('avatar', '<span class="help-block alert alert-danger">:message</span>') }}
	          				<span class="help-block">*{{ trans('users.avatar expl') }}</span>
	        			</div>
						<button type="submit" class="btn btn-success">{{ trans('users.upload') }}</button>
					{{ Form::close() }}
				</div>
				<hr>
				<div class="change-background row">	
					<span>
						<p>{{ trans('users.edit background expl') }}</p>
					</span>
					<img src="{{{ $user->background ? asset($user->background) : asset('assets/images/1.jpg') }}}" alt="{{{ $user->username . trans('users.avatar') }}}" class="img-responsive thumb">
					{{ Form::open(array('route' => array('users.bg', $user->id), 'files' => true)) }}
						<div class="form-group">
							{{ Form::file('bg') }}
	      					{{ $errors->first('bg', '<span class="help-block alert alert-danger">:message</span>') }}
	      					<span class="help-block">*{{ trans('main.user bg expl') }}</span>
       					</div>
						<button type="submit" class="btn btn-success">{{ trans('users.upload') }}</button>
					{{ Form::close() }}
				</div>
				<hr>
				<div class="change-personal row col-xs-12 col-sm-3">
					{{ Form::model($user, array('route' => array(Str::slug(trans('main.users')).'.update', $user->username), 'method' => 'PUT')) }}
        				<div class="form-group">
        					{{ Form::label('first_name', trans('users.first name')) }}
        					{{ Form::text('first_name', Input::old('first_name'), array('class' => 'form-control')) }}
          					{{ $errors->first('first_name', '<span class="help-block alert alert-danger">:message</span>') }}
        				</div>
			        	<div class="form-group">
    	    				{{ Form::label('last_name', trans('users.last name')) }}
        	  				{{ Form::text('last_name', Input::old('last_name'), array('class' => 'form-control')) }}
          					{{ $errors->first('last_name', '<span class="help-block alert alert-danger">:message</span>') }}
	        			</div>   
						<div class="form-group">
        	  				{{ Form::label('gender', trans('users.gender')) }}
          					{{ Form::select('gender', array('male' => trans('main.male'), 'female' => trans('main.female')), $user->gender, array('class' => 'form-control')) }}
         					{{ $errors->first('gender', '<span class="help-block alert alert-danger">:message</span>') }}
        				</div>
        				<br>
						<a type="button" href="{{ Helpers::url($user->username, $user->id, 'users') }}" class="btn btn-warning">
    	        			{{ trans('main.cancel') }}
        	  			</a>
          				<button type="submit" class="btn btn-success">{{ trans('dash.update') }}</button>
      				{{ Form::close() }}
    			</div>
			</div>
			@if (Request::segment(3) == 'favorites')
				{{ $favorite->appends(array())->links() }}
			@else
				{{ $watchlist->appends(array())->links() }}
			@endif
		</div>
		@include('elements.footer')
	</div>
@stop

@section('ads')
@stop