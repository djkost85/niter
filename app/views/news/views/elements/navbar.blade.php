<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			 <a class="navbar-brand" href="#">
				@if (isset($options->options['logo']) && Str::length($options->options['logo']) > 4)
					<a class="navbar-brand" href="{{ route('home') }}">
						<img class="brand-logo" src="{{ asset('assets/images/' . $options->options['logo']) }}">
					</a>	
				@else
					<a class="navbar-brand" href="{{ route('home') }}">{{ trans('main.brand') }}</a>
				@endif
			 </a>
		</div>
		<div class="collapse navbar-collapse">
			<div id='cssmenu'>
				<ul class="nav navbar-nav navbar-left">
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							{{ trans('main.movies-menu') }}
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="{{ url(Str::slug(trans('main.movies'))) }}">{{ trans('main.allmovies-menu') }}</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?releases=on' }}">{{ trans('main.releases-menu') }}</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?sortBy=lastAdded' }}">{{ trans('main.popular-menu') }}</a></li>
						</ul>
					</li>
					<!--<li><a href="{{ url(Str::slug(trans('main.series'))) }}">{{ trans('main.series-menu') }}</a></li>-->
			        <li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							{{ trans('main.genres') }}
							<span class="caret"></span>
						</a>
			        	<ul class="dropdown-menu" role="menu">
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?genre=action' }}">{{ trans('main.action') }}</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?genre=adventure' }}">{{ trans('main.adventure') }}</a></li>					
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?genre=animation' }}">{{ trans('main.animation') }}</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?genre=comedy' }}">{{ trans('main.comedy') }}</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?genre=drama' }}">{{ trans('main.drama') }}</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?genre=family' }}">{{ trans('main.family') }}</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?genre=horror' }}">{{ trans('main.horror') }}</a></li>
						</ul>							
			        </li>
			        <li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							{{ trans('main.years') }}
							<span class="caret"></span>
						</a>
			        	<ul class="dropdown-menu" role="menu">
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?yearFrom=2014&yearTo=2014' }}">2014</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?yearFrom=2013&yearTo=2013' }}">2013</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?yearFrom=2012&yearTo=2012' }}">2012</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?yearFrom=2011&yearTo=2011' }}">2011</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?yearFrom=2010&yearTo=2010' }}">2010</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?yearFrom=2009&yearTo=2009' }}">2009</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?yearFrom=2008&yearTo=2008' }}">2008</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?yearFrom=2007&yearTo=2007' }}">2007</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?yearFrom=2006&yearTo=2006' }}">2006</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?yearFrom=2005&yearTo=2005' }}">2005</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?yearFrom=2004&yearTo=2004' }}">2004</a></li>
							<li><a href="{{ url(Str::slug(trans('main.movies'))) . '?yearFrom=2003&yearTo=2003' }}">2003</a></li>
						</ul>
			        </li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							{{ trans('main.people-menu') }}
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="{{ url(Str::slug(trans('main.actors'))) }}">{{ trans('main.actors-menu') }}</a></li>
							<li><a href="{{ url(Str::slug(trans('main.directors'))) }}">{{ trans('main.directos-menu') }}</a></li>
						</ul>					
					</li>
					<li>
						<a href="{{ url(Str::slug(trans('main.news'))) }}">{{ trans('main.news-menu') }}</a>
					</li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li>
						{{ Form::open(array('url' => Str::slug(trans('main.search')), 'class' => 'navbar-form nav-search', 'method' => 'get')) }}
							<div class="input-group search-bar">
								{{ Form::text('q', null, array('id' => 'auto-complete-small', 'class' => 'form-control search-bar-field', 'placeholder' => trans('main.nav search place'), 'data-url' => url('typeahead'))) }}
								<span class="input-group-btn">
									<button class="btn btn-default search-button" type="submit"><i class="fa fa-search"></i></span></button>
								</span>
							</div>
						{{ Form::close() }}				
					</li>
	 				@if (Helpers::loggedInUser())
	 				<li>
						<a class="nav-photo desktop-only" href="{{ Helpers::profileUrl() }}">
							<img class="small-avatar" src="{{ Helpers::smallAvatar() }}" alt="" class="img-responsive">
						</a>
					</li>
					<li>
						<a class="mobile-only" title="{{ trans('main.config') }}" href="{{ Helpers::profileUrl() }}">
							{{ trans('main.config') }}
						</a>
						<a class="desktop-only" title="{{ trans('main.config') }}" href="{{ Helpers::profileUrl() }}">
							{{{ Helpers::loggedInUser()->first_name ? Helpers::loggedInUser()->first_name : ucfirst(Helpers::loggedInUser()->username) }}}
						</a>
					</li>
					@else
					<li>
						<a href="{{ url(Str::slug(trans('main.register'))) }}">{{ trans('main.register-menu') }}</a>
					</li>
					<li>
						<a href="{{ url(Str::slug(trans('main.login'))) }} ">{{ trans('main.login-menu') }}</a>
					</li>
					@endif
					@if(Helpers::hasAccess('super'))
						<li>
							<a class="mobile-only" title="{{ trans('main.dashboard') }}" href="{{ url('dashboard') }}">{{ trans('main.dashboard') }}</a>
							<a class="desktop-only" title="{{ trans('main.dashboard') }}" href="{{ url('dashboard') }}"><i class="fa fa-cog"></i></a>
						</li>
	                @endif
	 				@if (Helpers::loggedInUser())
					<li>
						<a class="mobile-only" title="{{ trans('main.logout') }}" href="{{ action('SessionController@logOut') }}">{{ trans('main.logout') }}</a>
						<a class="desktop-only" title="{{ trans('main.logout') }}" href="{{ action('SessionController@logOut') }}"><i class="fa fa-power-off"></i></a>
					</li>
	                @endif
			    </ul>
			</div>
		</div>
</nav>