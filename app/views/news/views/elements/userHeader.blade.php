<div style="background-color: grey; background-image: url({{ $user->background ? asset($user->background) : asset('assets/images/1.jpg') }})" id="img-bg">
	<div id="img-contents row">
		<div class="img-profile">
			<img class="img-thumbnail" src="{{ $user->avatar ? asset($user->avatar) : asset('assets/images/no_user_icon_big.jpg')}}" alt="">
		</div>
		<div class="name-profile">
			<h1>{{ $user->first_name && $user->last_name ? $user->first_name . ' ' . $user->last_name : $user->username }}</h1>
			<span class="grey-out">{{ trans('main.member since') }}</span>&nbsp;<span class="number">{{ $user->created_at->toFormattedDateString() }}</span>
			<div class="under-image-wrapper mobile-only">
				<div class="stats">
					<span class="number">{{ $watCount }}</span>&nbsp;<span class="grey-out">{{ trans('main.titles watchlisted') }}</span>
				</div>
				<div class="stats">
					<span class="number">{{ $favCount }}</span>&nbsp;<span class="grey-out">{{ trans('main.titles favorited') }}</span>
				</div>
				<div class="stats">
					<span class="number">{{ $revCount }}</span>&nbsp;<span class="grey-out">{{ trans('main.reviews written') }}</span>
				</div>
			</div>
		</div>
		<div class="under-image-cont desktop-only">			
			<div class="under-image-wrapper">
				<div class="stats">
					<span class="number">{{ $watCount }}</span>&nbsp;<span class="grey-out">{{ trans('main.titles watchlisted') }}</span>
				</div>
				<div class="stats">
					<span class="number">{{ $favCount }}</span>&nbsp;<span class="grey-out">{{ trans('main.titles favorited') }}</span>
				</div>
				<div class="stats">
					<span class="number">{{ $revCount }}</span>&nbsp;<span class="grey-out">{{ trans('main.reviews written') }}</span>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="row"> @include('elements.response') </div>
<div class="lists-wrapper">
	<ul class="nav nav-pills nav-justified">
		<li class="{{ ! Request::segment(3) ? 'active' : '' }}"><a href="{{ Helpers::url($user->username, $user->id, 'users') }}">{{ trans('users.watchlist') }}</a></li>
		<li class="{{ Request::segment(3) == 'favorites' ? 'active' : '' }}"><a href="{{ Helpers::url($user->username, $user->id, 'users') . '/favorites' }}">{{ trans('users.favorites') }}</a></li>
		<li class="{{ Request::segment(3) == 'reviews' ? 'active' : '' }}"><a href="{{ Helpers::url($user->username, $user->id, 'users') .'/reviews' }}">{{ trans('users.reviews') }}</a></li>
		@if(Helpers::isUser($user->username))
	  		<li class="{{ (Request::segment(3) == 'settings' || Request::segment(3) == 'change-password')  ? 'active' : '' }}"><a href="{{ Helpers::url($user->username, $user->id, 'users') . '/settings' }}">{{ trans('users.settings') }}</a></li>
	  	@endif
	</ul>
</div>