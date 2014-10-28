@extends('layouts.boilerplate')

@section('bodytag')
	<body id="movieBrowse" class="body browse nav-trans animate-nav transparent-navbar" data-url="{{ url() }}">
@stop

@section('content')
  	<div class="main-content row col-xs-12">
    	@if($ad = $options->getHomeJumboAd())
      		<div class="row ads-row">
        		{{ $ad }}
      		</div>
    	@endif
    	{{--Modal ready for any use--}}
    	<div class="yt-modal-box"></div>
    	{{--Show messages to the visitor--}}
    	@include('elements.response')
	    {{--Main content --}}
	    <div class="main">
	    	{{--Filters--}}
			@include('elements.filterBar', array('action' => Str::slug(head(Request::segments()))))
			@if ($view==0)
			    <div id="list" class="browse-list col-xs-12 col-sm-10">	
					@if (!$data->isEmpty())
						@foreach($data as $k => $r) 
						    <figure class="movie-item row col-xs-12 col-sm-12" data-filter-class='{{ Helpers::genreFilter($r->genre) }}' data-popularity="{{ $r['mc_num_of_votes'] ? $r['mc_num_of_votes'] : ($r['imdb_votes_num'] ? $r['imdb_votes_num'] : $r['tmdb_popularity'])}}" data-name="{{{ $r->title }}}" data-release="{{{ $r->year }}}">
						    	<div class="img-container row">
									<div class="col-xs-4 col-sm-2">
							    		<a href="{{Helpers::url($r['title'], $r['id'], $r['type'])}}">
							    			<img class ="img-responsive" src="{{str_replace('w185', 'w342', $r->poster) }}" alt="{{{ $r['title'] }}}">
										</a>
										<span class="rating-section mobile-only">
											@if($r['tmdb_rating'])
												<span class="rating">{{ 'TMDb - ' . $r['tmdb_rating'] . '/10'}}</span>
											@endif
											@if($r['mc_user_score'])
												<span class="rating">{{ 'Meta - ' . $r['mc_user_score'] . '/10' }}</span>
											@endif
											@if($r['imdb_rating'])
												<span class="rating">{{ 'IMDb - ' . $r['imdb_rating'] . '/10'}}</span>
											@endif 
										</span>
									</div>
									<div class="col-xs-8 col-sm-10">
										<figcaption title="{{{ $r->title }}}" >
									  	  	<section class="row movie-description">
												<a href="{{Helpers::url($r['title'], $r['id'], $r['type'])}}"> {{  $r['title'] . ' (' . $r['year'] . ')' }} </a>
												<span class="rating-section desktop-only">
													@if($r['tmdb_rating'])
														<span class="rating">{{ 'TMDb - ' . $r['tmdb_rating'] . '/10'}}</span>
													@endif
													@if($r['mc_user_score'])
														<span class="rating">{{ 'Metacritic - ' . $r['mc_user_score'] . '/10' }}</span>
													@endif
													@if($r['imdb_rating'])
														<span class="rating">{{ 'IMDb - ' . $r['imdb_rating'] . '/10'}}</span>
													@endif 
												</span>
												<p class="highlights desktop-only">
													{{ $r['runtime'] . ' minutes - ' . $r['genre'] . ' - ' . ucfirst(trans('main.releasedOn')) . ': ' . $r['release_date'] }}
												</p>
												<p class="highlights mobile-only">
													{{ $r['runtime'] . ' minutes<br>' . $r['genre'] . '<br>' . ucfirst(trans('main.releasedOn')) . ': ' . $r['release_date'] }}
												</p>
												<div class="ellipsis desktop-only">
													<div>
														<p class="plot">
															{{ '<b>' . ucfirst(trans('main.synopsis')) . ':</b> ' . $r['plot'] }}
														</p>
													</div>
												</div>
											</section>
									  	  	<section class="directorsAndCast desktop-only">
												<p>
													<b>{{ trans('main.directors') }}:</b>
											  		@foreach($r->director->take(5) as $j => $s)
											  			@if ($j < 4)
									                    	<a class="director" href="{{ Helpers::url($s->name, $s->id, 'director') }}">{{{$s->name . ', '}}}</a>
								                    	@else
								                    		<a class="director" href="{{ Helpers::url($s->name, $s->id, 'director') }}">{{{$s->name}}}</a>
								                    	@endif

								                    	</a>
											  		@endforeach
										  		</p>
												<p>
													<b>{{ trans('main.mainCast') }}:</b>
											  		@foreach($r->actor->take(5) as $j => $s)
											  			@if ($j < 4)
								                    		<a class="cast" href="{{ Helpers::url($s->name, $s->id, 'people') }}">{{{$s->name . ','}}} </a>
								                    	@else
								                    		<a class="cast" href="{{ Helpers::url($s->name, $s->id, 'people') }}">{{{$s->name}}} </a>
								                    	@endif
											  		@endforeach
									  		</p>
											</section>
									  	  	<section class="row action-buttons">
									  	  		@include('elements.addToListButtons')
												<button type="button" class="btn trailer-trigger btn-danger-drk btn-xs lists" data-trailer="{{{ $r['trailer'] }}}">
													<i class="fa fa-play"></i> {{ trans('main.play trailer') }}
												</button>
									  	  	</section>
								  	  	</figcaption>
								  	</div>
						    	</div>	      
						    </figure>
					    @endforeach
					@else
						<div><h3 class="movies-not-released"> {{ trans('main.no results') }}</h3></div>
					@endif
				</div> 
			@else
			    <div class="browse-grid col-xs-12 col-sm-10 row">	
					@if (!$data->isEmpty())
						@foreach($data as $k => $r)
						    <figure class="movie-item col-xs-6 col-sm-2" data-filter-class='{{ Helpers::genreFilter($r->genre) }}' data-popularity="{{ $r['mc_num_of_votes'] ? $r['mc_num_of_votes'] : ($r['imdb_votes_num'] ? $r['imdb_votes_num'] : $r['tmdb_popularity'])}}" data-name="{{{ $r->title }}}" data-release="{{{ $r->year }}}">
						    	<div class="img-container">
						    		<a href="{{Helpers::url($r['title'], $r['id'], $r['type'])}}">
						    			<img class ="img-responsive" src="{{str_replace('w185', 'w342', $r->poster) }}" alt="{{{ $r['title'] }}}">
									</a>
									<figcaption title="{{{ $r->title }}}" >
										<a href="{{Helpers::url($r['title'], $r['id'], $r['type'])}}"> {{  Helpers::shrtString($r['title']) }} </a>
								  	  	<section class="row action-buttons">
								  	  		@include('elements.addToListButtons')
							    			@if ($r['mc_critic_score'])
												<span class="pull-right">{{ substr($r['mc_critic_score'], 0, -1) . '/10' }}</span>
											@elseif ($r['imdb_rating'])
							    				<span class="pull-right">{{ ! str_contains($r['imdb_rating'], '.') ? $r['imdb_rating'] . '.0' : $r['imdb_rating'] . '/10'}} </span>
							    			@elseif ($r['tmdb_rating'])
							    				<span class="pull-right">{{ ! str_contains($r['tmdb_rating'], '.') ? $r['tmdb_rating'] . '.0' : $r['tmdb_rating'] . '/10'}}</span>
							    			@endif
								  	  	</section>
							  	  	</figcaption>
						    	</div>	      
						    </figure>
					    @endforeach
					@else
						<div><h3 class="movies-not-released"> {{ trans('main.no results') }}</h3></div>
					@endif
				</div> 
			@endif		
			<div class="col-sm-2 desktop-only">
				Ads
			</div>
			<div class="row col-xs-10 pagination-right">{{ $data->appends(array('relevance' => Input::get('relevance'), 'genre' => Input::get('genre'), 'yearFrom' => Input::get('yearFrom'), 'yearTo' => Input::get('yearTo'), 'sortBy' => Input::get('sortBy'), 'numRows' => Input::get('numRows'), 'view' => Input::get('view')))->links() }}</div>
		</div>
		@include('elements.footer')
  	</div>
@stop
