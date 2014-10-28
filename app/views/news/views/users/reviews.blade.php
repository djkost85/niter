@extends('layouts.boilerplate')

@section('title')
	<title>{{{ $user->username }}} - {{ trans('users.profile') }}</title>
@stop

@section('bodytag')
	<body id="userReviews" class="body browse profile nav-trans animate-nav transparent-navbar">
@stop

@section('content')
	<div class="main-content">
		@include('elements.userHeader')
		<div class="lists-wrapper reviews">
			@foreach ($reviews as $k => $r)
				<li>			
					<div class="row review-info">
        	        	<span class="review-score">
        	        		<div>{{{ $r->score * 10 }}}</div>
        	        	</span>
        	        	<strong>{{ \Carbon\Carbon::createFromTimeStamp(strtotime($r->created_at))->diffForHumans() }}</strong> - <strong>{{ Title::find($r->title_id)->title }}</strong>
	            	</div>
		            <p class="review-body">{{{ $r->body }}}</p>
					<hr> 
				</li>
			@endforeach
			{{ $reviews->links() }}
		</div>
		@include('elements.footer')
	</div>
@stop

@section('ads')
@stop
