@extends('layouts.boilerplate')

@section('assets')
	@parent
	<meta name="title" content="{{ trans('main.meta title') }}">
	<meta name="description" content="{{ trans('main.meta description') }}">
	<meta name="keywords" content="{{ trans('main.meta keywords') }}">
@stop

@section('bodytag')
	<body id="home" class="body nav-trans animate-nav">
@stop

@section('content')
	{{--Show messages to the visitor--}}
   	@include('elements.response')
	{{--Background image and Slider --}}
	@include('elements.jumbotron')
	<div class="main-content">
		@if($ad = $options->getHomeJumboAd())
			<div class="row ads-row">
				  {{ $ad }}
			</div>
		@endif
		{{--Modal ready for any use--}}
    	<div class="yt-modal-box"></div>
		{{--Main content --}}
		<div class="row mobile-only">
			<div class="panel panel-default">
				<div class="panel-heading">
			    	<h3 class="panel-title">{{ trans('main.featured') }}</h3>
				</div>
			 	<div class="panel-body">
			        <div id="carousel1" class="carousel row slide col-xs-12" data-interval="false">		                
			            <!-- Carousel items -->
			            <div class="carousel-inner">
					 	    @if ($featured->slice(0, 3)->count() > 0)                
			                <div class="item active row">
					           	@foreach($featured->slice(0, 3) as $k => $v)
									<figure class="col-xs-4 home-trailer-poster" >
										<a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" class="updateJumbo"><img title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}" src="{{$v->poster}}" class="img-responsive" alt="{{{ $v->title . 'Poster' }}}" data-trailer="{{{ $v->trailer }}}"></a>			               
										<figcaption class="updateJumbo"><a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}">{{ $v->title }}</a></figcaption>                     
									</figure> 
								@endforeach             
			                </div>
			                @endif
			                <!--/item-->
					 	    @if ($featured->slice(3, 3)->count() > 0)                
			                <div class="item row">
					           	@foreach($featured->slice(3, 3) as $k => $v)
									<figure class="col-xs-4 home-trailer-poster" >
										<a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" class="updateJumbo"><img title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}" src="{{$v->poster}}" class="img-responsive" alt="{{{ $v->title . 'Poster' }}}" data-trailer="{{{ $v->trailer }}}"></a>			               
										<figcaption class="updateJumbo"><a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}">{{ $v->title }}</a></figcaption>                     
									</figure> 
								@endforeach             
			                </div>
			                @endif
			                <!--/item-->
					 	    @if ($featured->slice(6, 3)->count() > 0)                
			                <div class="item row">
					           	@foreach($featured->slice(6, 3) as $k => $v)
									<figure class="col-xs-4 home-trailer-poster" >
										<a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" class="updateJumbo"><img title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}" src="{{$v->poster}}" class="img-responsive" alt="{{{ $v->title . 'Poster' }}}" data-trailer="{{{ $v->trailer }}}"></a>			               
										<figcaption class="updateJumbo"><a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}">{{ $v->title }}</a></figcaption>                     
									</figure> 
								@endforeach             
			                </div>
			                @endif
			                <!--/item-->
					 	    @if ($featured->slice(9, 3)->count() > 0)                
			                <div class="item row">
					           	@foreach($featured->slice(9, 3) as $k => $v)
									<figure class="col-xs-4 home-trailer-poster" >
										<a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" class="updateJumbo"><img title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}" src="{{$v->poster}}" class="img-responsive" alt="{{{ $v->title . 'Poster' }}}" data-trailer="{{{ $v->trailer }}}"></a>			               
										<figcaption class="updateJumbo"><a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}">{{ $v->title }}</a></figcaption>                     
									</figure> 
								@endforeach             
			                </div>
			                @endif
			                <!--/item-->
					 	    @if ($featured->slice(12, 3)->count() > 0)                
			                <div class="item row">
					           	@foreach($featured->slice(12, 3) as $k => $v)
									<figure class="col-xs-4 home-trailer-poster" >
										<a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" class="updateJumbo"><img title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}" src="{{$v->poster}}" class="img-responsive" alt="{{{ $v->title . 'Poster' }}}" data-trailer="{{{ $v->trailer }}}"></a>			               
										<figcaption class="updateJumbo"><a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}">{{ $v->title }}</a></figcaption>                     
									</figure> 
								@endforeach             
			                </div>
			                @endif
			                <!--/item-->
					 	    @if ($featured->slice(15, 3)->count() > 0)                
			                <div class="item row">
					           	@foreach($featured->slice(15, 3) as $k => $v)
									<figure class="col-xs-4 home-trailer-poster" >
										<a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" class="updateJumbo"><img title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}" src="{{$v->poster}}" class="img-responsive" alt="{{{ $v->title . 'Poster' }}}" data-trailer="{{{ $v->trailer }}}"></a>			               
										<figcaption class="updateJumbo"><a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}">{{ $v->title }}</a></figcaption>                     
									</figure> 
								@endforeach             
			                </div>
			                @endif
			                <!--/item-->
			            </div>
			            <!--/carousel-inner-->
			            <a class="left carousel-control" href="#carousel1" data-slide="prev"><i class="fa fa-chevron-left fa-2x"></i></a>
			            <a class="right carousel-control" href="#carousel1" data-slide="next"><i class="fa fa-chevron-right fa-2x"></i></a>
			        </div>
			        <!--/myCarousel-->
				</div>
			</div>
			<div class="row" style="text-align: center;">
				Ads
			</div>
  			@if ($releasesCount > 0)
				<div class="col-xs-12 zone">
					<div class="bordered-heading">
						<span style="border-color:{{$options->getColor('warning')}};color:{{$options->getColor('warning')}}" class="text-border-top">
							<i class="fa fa-film"></i>
							{{ trans('main.releases') }}
						</span>
					</div>
			  		<div id="releases1" class="row">
				        <div id="carouselA1" class="carousel row slide col-xs-12" data-interval="false">		                
				            <!-- Carousel items -->
				            <div class="carousel-inner">
				                <div class="item active row">
				                	@include('elements.titlesFigure', array('array' => $releases))
				                </div>
				            </div>
				  			<div class="row insideTablinks">
				  				{{ $releases->links() }}
				  			</div>
				        </div>
					</div>
				</div>
		    @endif
  			@if ($mostPopularCount > 0)
				<div class="col-xs-12 zone">
					<div class="bordered-heading">
						<span style="border-color:{{$options->getColor('warning')}};color:{{$options->getColor('warning')}}" class="text-border-top">
							<i class="fa fa-film"></i>
							{{ trans('main.mostpopular') }}
						</span>
					</div>
			  		<div id="mostPopular1" class="row">
				        <div id="carouselB1" class="carousel row slide col-xs-12" data-interval="false">		                
				            <!-- Carousel items -->
				            <div class="carousel-inner">
				                <div class="item active row">
				                	@include('elements.titlesFigure', array('array' => $mostPopular))
				                </div>
				            </div>
				  			<div class="row insideTablinks">
				  				{{ $mostPopular->links() }}
				  			</div>
				        </div>
					</div>
				</div>
		    @endif
			@if ($lastAddedCount > 0)
				<div class="col-xs-12 zone">
					<div class="bordered-heading">
						<span style="border-color:{{$options->getColor('warning')}};color:{{$options->getColor('warning')}}" class="text-border-top">
							<i class="fa fa-film"></i>
							{{ trans('main.lastadded') }}
						</span>
					</div>
			  		<div id="lastAdded1" class="row">
				        <div id="carouselC1" class="carousel row slide col-xs-12" data-interval="false">		                
				            <!-- Carousel items -->
				            <div class="carousel-inner">
				                <div class="item active row">
				                	@include('elements.titlesFigure', array('array' => $lastAdded))
				                </div>
				            </div>
				  			<div class="row insideTablinks">
				  				{{ $lastAdded->links() }}
				  			</div>
				        </div>
					</div>
				</div>
		    @endif
  			@if ($reindexedCount > 0)
				<div class="col-xs-12 zone">
					<div class="bordered-heading">
						<span style="border-color:{{$options->getColor('warning')}};color:{{$options->getColor('warning')}}" class="text-border-top">
							<i class="fa fa-film"></i>
							{{ trans('main.reindexed') }}
						</span>
					</div>
			  		<div id="reindexed1" class="row">
				        <div id="carouselD1" class="carousel row slide col-xs-12" data-interval="false">		                
				            <!-- Carousel items -->
				            <div class="carousel-inner">
				                <div class="item active row">
				                	@include('elements.titlesFigure', array('array' => $reindexed))
				                </div>
				            </div>
				  			<div class="row insideTablinks">
				  				{{ $reindexed->links() }}
				  			</div>
				        </div>
					</div>
				</div>
		    @endif
		</div>


		{{--Tabs with Relevant Movies--}}
		<div id="tabs" class="row desktop-only">
			<ul class="nav nav-tabs" role="tablist">
	  			@if ($releasesCount > 0)
					<li class="active"><a href="#releases" role="tab" data-toggle="tab"><h2>{{ trans('main.releases') }}</h2></a></li>
				@endif
	  			@if ($mostPopularCount > 0)
					<li><a href="#mostPopular" role="tab" data-toggle="tab"><h2>{{ trans('main.mostpopular') }}</h2></a></li>
				@endif
	  			@if ($lastAddedCount > 0)
		        	<li><a href="#lastAdded" role="tab" data-toggle="tab"><h2>{{ trans('main.lastadded') }}</h2></a></li>
				@endif
	  			@if ($reindexedCount > 0)
		        	<li><a href="#reindexed" role="tab" data-toggle="tab"><h2>{{ trans('main.reindexed') }}</h2></a></li>
				@endif
	        </ul>
	        <div class="tab-content row">
  			@if ($releasesCount > 0)
		  		<div id="releases" class="tab-pane">
			        <div id="carouselA" class="carousel row slide col-xs-12" data-interval="false">		                
			            <!-- Carousel items -->
			            <div class="carousel-inner">
			                <div class="item active row">
			                	@include('elements.titlesFigure', array('array' => $releases))
			                </div>
			            </div>
			  			<div class="row insideTablinks">
			  				{{ $releases->links() }}
			  			</div>
			        </div>
				</div>
		    @endif
  			@if ($mostPopularCount > 0)
		  		<div id="mostPopular" class="tab-pane">
			        <div id="carouselB" class="carousel row slide col-xs-12" data-interval="false">		                
			            <!-- Carousel items -->
			            <div class="carousel-inner">
			                <div class="item active row">
			                	@include('elements.titlesFigure', array('array' => $mostPopular))
			                </div>
			            </div>
			  			<div class="row insideTablinks">
			  				{{ $mostPopular->links() }}
			  			</div>
			        </div>
				</div>
		    @endif
  			@if ($lastAddedCount > 0)
		  		<div id="lastAdded" class="tab-pane">
			        <div id="carouselC" class="carousel row slide col-xs-12" data-interval="false">		                
			            <!-- Carousel items -->
			            <div class="carousel-inner">
			                <div class="item active row">
			                	@include('elements.titlesFigure', array('array' => $lastAdded))
			                </div>
			            </div>
			  			<div class="row insideTablinks">
			  				{{ $lastAdded->links() }}
			  			</div>
			        </div>
				</div>
		    @endif
  			@if ($reindexedCount > 0)
		  		<div id="reindexed" class="tab-pane">
			        <div id="carouselD" class="carousel row slide col-xs-12" data-interval="false">		                
			            <!-- Carousel items -->
			            <div class="carousel-inner">
			                <div class="item active row">
			                	@include('elements.titlesFigure', array('array' => $reindexed))
			                </div>
			            </div>
			  			<div class="row insideTablinks">
			  				{{ $reindexed->links() }}
			  			</div>
			        </div>
				</div>
		    @endif
	        </div>
		</div>  		   
		{{--End of Tabs with Relevant Movies--}}
		{{--Beginning of News and in Theaters now--}}
		<div class="row secondary col-xs-12">
			{{--Latest News--}}
			<div class="col-sm-8 col-xs-12 news">
				<div class="bordered-heading">
					<span class="text-border-top">
						<i class="fa fa-fire"></i>
						{{ trans('main.latest news') }}
					</span>
				</div>
				@foreach($news->slice(0,6) as $k => $n)
					@if ($k == 3)
						@if($ad = $options->getHomeNewsAd())
					        <div class="ads-row">{{ $ad }}</div>
					    @endif
					@endif
					<div class="media mobile-only">
						<div class="media-body">
							@if ($options->scrapeNewsFully())
								<h4 class="media-heading row">
									<a href="{{{ Helpers::url($n->title, $n->id, 'news') }}}">{{{ $n['title'] }}}</a>
								</h4>
							@else
								<h4 class="media-heading row">
									<a href="{{{ $n['full_url'] ? $n['full_url'] : Helpers::url($n->title, $n->id, 'news') }}}">{{{ $n['title'] }}}</a>
								</h4>
							@endif
							<p class="home-news-body col-xs-7">
								{{ Helpers::shrtString($n['body'], $options->getNewsExeLen()) }}
							</p>
							<div class="media-object col-xs-5">
								@if ($options->scrapeNewsFully())
									<a href="{{{ Helpers::url($n->title, $n->id, 'news') }}}">
										<img src="{{{ asset($n->image) }}}" alt="{{ 'Image of News Item' . $k }}">
									</a>
								@else
									<a href="{{{ $n->full_url ? $n->full_url : Helpers::url($n->title, $n->id, 'news') }}}">
										<img src="{{{ asset($n->image) }}}" alt="{{ 'Image of News Item' . $k }}">
									</a>
								@endif				
							</div>			
							<span class="home-news-time pull-left"> {{ trans('main.from') }} {{{ $n['source'] ? $n['source'] : trans('main.brand') }}}
								<span class="home-news-ago">
									<i class="fa fa-clock-o"></i> 
									{{ \Carbon\Carbon::createFromTimeStamp(strtotime($n['created_at']))->diffForHumans() }}
								</span>
								@if ($options->scrapeNewsFully())
									<a href="{{{ Helpers::url($n->title, $n->id, 'news') }}}">
										{{ trans('main.read full article') }}
										<i class="fa fa-external-link"></i>
									</a>
								@else
									<a href="{{{ $n['full_url'] ? $n['full_url'] : Helpers::url($n->title, $n->id, 'news') }}}">
										{{ trans('main.read full article') }}
										<i class="fa fa-external-link"></i>
									</a>
								@endif
							</span>
						</div>
					</div>
					<div class="media desktop-only">
						@if ($options->scrapeNewsFully())
							<a class="pull-left" href="{{{ Helpers::url($n->title, $n->id, 'news') }}}">
								<img class="media-object" src="{{{ asset($n->image) }}}" alt="{{ 'Image of News Item' . $k }}">
							</a>
						@else
							<a class="pull-left" href="{{{ $n->full_url ? $n->full_url : Helpers::url($n->title, $n->id, 'news') }}}">
								<img class="media-object" src="{{{ asset($n->image) }}}" alt="{{ 'Image of News Item' . $k }}">
							</a>
						@endif
						<div class="media-body">
							@if ($options->scrapeNewsFully())
								<h4 class="media-heading">
									<a href="{{{ Helpers::url($n->title, $n->id, 'news') }}}">{{{ $n['title'] }}}</a>
								</h4>
							@else
								<h4 class="media-heading">
									<a href="{{{ $n['full_url'] ? $n['full_url'] : Helpers::url($n->title, $n->id, 'news') }}}">{{{ $n['title'] }}}</a>
								</h4>
							@endif
							<p class="home-news-body">
								{{ Helpers::shrtString($n['body'], $options->getNewsExeLen()) }}
							</p>
							<span class="home-news-time pull-left"> {{ trans('main.from') }} {{{ $n['source'] ? $n['source'] : trans('main.brand') }}}
								<span class="home-news-ago">
									<i class="fa fa-clock-o"></i> 
									{{ \Carbon\Carbon::createFromTimeStamp(strtotime($n['created_at']))->diffForHumans() }}
								</span>
								@if ($options->scrapeNewsFully())
									<a href="{{{ Helpers::url($n->title, $n->id, 'news') }}}">
										{{ trans('main.read full article') }}
										<i class="fa fa-external-link"></i>
									</a>
								@else
									<a href="{{{ $n['full_url'] ? $n['full_url'] : Helpers::url($n->title, $n->id, 'news') }}}">
										{{ trans('main.read full article') }}
										<i class="fa fa-external-link"></i>
									</a>
								@endif
							</span>
						</div>
					</div>
				@endforeach
			</div>
			{{--In theatres now--}}
			<div class="col-sm-4 col-xs-12 in-theatres">
				<div class="bordered-heading">
					<span style="border-color:{{$options->getColor('warning')}};color:{{$options->getColor('warning')}}" class="text-border-top">
						<i class="fa fa-fire"></i>
						{{ trans('main.in theaters') }}
					</span>
<!-- 					<a href="{{ route('feed.theaters') }}" class="pull-right feed-ico"><i class="fa fa-rss"></i></a>
					@if (Helpers::hasAccess('titles.update'))
						{{ Form::open(array('route' => 'titles.updatePlaying', 'class' => 'pull-right in-heading-form')) }}
							<button type="submit" class="btn btn-info btn-xs"><i class="fa fa-refresh"></i>{{ trans('dash.update') }}</button>
						{{ Form::close() }}
					@endif -->
				</div>
				<section class="browse-grid">
					@foreach($playing->slice(0,6) as $k => $movie)
						<figure class="col-xs-6">
							<!--<a href="{{ Helpers::url($movie['title'], $movie['id'], $movie['type']) }}">-->
							<img data-trailer="{{{ $movie->trailer }}}" class="img-responsive trailer-trigger" src="{{{ asset($movie['poster']) }}}" alt="{{ 'Poster of ' . $movie['title'] }}">
							<!--</a>-->
							<figcaption>
								<a data-trailer="{{{ $movie->trailer }}}" class="trailer-trigger" href="#">{{{ $movie['title'] }}}</a><br>
							</figcaption>
						</figure> 
					@endforeach
				</section>
				@if (isset($facebook))
					<div class="col-sm-12 likebox">    	
						<iframe src="//www.facebook.com/plugins/likebox.php?href={{{ $facebook }}}&amp;width&amp;height=290&amp;colorscheme=light&amp;show_faces=true&amp;header=true&amp;stream=false&amp;show_border=true" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:290px;" allowTransparency="true"></iframe>
					</div>
				@endif
			</div>
		</div>
		@include('elements.footer')
	</div>
@stop

@section('scripts')

<script>
	$(document).ready(function(){
	  	$(this).find('.insideTablinks ul li a').text("");
	  	$('.nav-tabs a:last').tab('show');
	  	$('.nav-tabs a:first').tab('show');
	});

	function carousel(currentPage, maxPage) {
	    this.currentPage = currentPage;
	    this.maxPage = maxPage;
	}

	function determineIndex(name) {
		if (name == 'releases' || name == 'releases1') 
	    	return 0;
	  	else if (name == 'mostPopular' || name == 'mostPopular1')
	    	return 1;
	  	else if (name == 'lastAdded' || name == 'lastAdded1')
		    return 2;
		else if (name == 'reindexed' || name == 'reindexed1')
	    	return 3;
	  	else
	    	alert('Array not defined');
	}

	var arr = [];

	arr[0] = new carousel(1, 1);
	arr[1] = new carousel(1, 1);
	arr[2] = new carousel(1, 1);
	arr[3] = new carousel(1, 1);

	$(document).on('click', '.insideTablinks ul li a', function (e) {
		e.preventDefault();
		var currentObject = $(this);
		var currentCarousel;
		myurl = currentObject.attr('href');
		direction = currentObject.attr('rel');
		currentObject = currentObject.parent().parent().parent();  
		nameParent = currentObject.parent().parent().attr('id');
		indexParent = determineIndex(nameParent);
		currentCarousel = arr[indexParent];
		if (direction == 'prev') {
			$.ajax({
				url: myurl,
				type: "get",
				datatype: "html",
				beforeSend: function() {
					// Show Loading message
					// $('#ajax-loading').show();
					}
			}).done(function(data) {
				// Delete Loading message
				// $('#ajax-loading').hide();

				// Update the pagination and links
				switch (indexParent) {
					case 0:
						if (data.releasesCount>0)
							currentObject.empty().append(data.releasesLinks).find('ul li a').text("");
						break;
					case 1:
						if (data.mostPopularCount>0)
							   currentObject.empty().append(data.mostPopularLinks).find('ul li a').text("");
						break;
					case 2:
						if (data.lastAddedCount>0)
							      currentObject.empty().append(data.lastAddedLinks).find('ul li a').text("");
						break;
					case 3:
						if (data.reindexedCount>0)
							      currentObject.empty().append(data.reindexedLinks).find('ul li a').text("");
						break;
					default:          
				}
			}).fail(function(jqXHR, ajaxOptions, thrownError) {
				alert('No response from server');
				return false;
			});
			// Slide back
			currentObject.parent().carousel('prev');
			// Go back
			currentCarousel.currentPage --;	  	
	 	}
	  	else {
	  	// Go forward. Check if it is necessary to load more data using AJAX
 		// Load data
			$.ajax({
		        url: myurl,
		        type: "get",
		        datatype: "html",
		        beforeSend: function() {
		          // Show Loading message
		          // $('#ajax-loading').show();
		        }
	      	}).done(function(data) {
	        // Delete Loading message
	        // $('#ajax-loading').hide();
				switch (indexParent) {
					case 0:
						if (data.releasesCount>0) {
							if (currentCarousel.currentPage == currentCarousel.maxPage)	{
								// We found more movies, so we add them to the structure and then, more the slides
								// Adding movies to the structure
								currentObject.empty().append(data.releasesLinks).find('ul li a').text("").ready(function(){
									currentObject.parent().children(":first").append(data.releases).ready(function(){
										currentObject.parent().carousel('next');
										// Update the position
										currentCarousel.currentPage++;
										currentCarousel.maxPage++;
									});
								});
							}
							else 
								currentObject.empty().append(data.releasesLinks).find('ul li a').text("").ready(function(){
									currentObject.parent().carousel('next');
									currentCarousel.currentPage++;
								});
						}
						break;
					case 1:
						if (data.mostPopularCount>0) {
							if (currentCarousel.currentPage == currentCarousel.maxPage)	{
								// We found more movies, so we add them to the structure and then, more the slides
								// Adding movies to the structure
								currentObject.empty().append(data.mostPopularLinks).find('ul li a').text("").ready(function(){
									currentObject.parent().children(":first").append(data.mostPopular).ready(function(){
										currentObject.parent().carousel('next');
										// Update the position
										currentCarousel.currentPage++;
										currentCarousel.maxPage++;
									});
								});
							}
							else
								currentObject.empty().append(data.mostPopularLinks).find('ul li a').text("").ready(function(){
									currentObject.parent().carousel('next');
									currentCarousel.currentPage++;
								});					 			
						}
						break;
					case 2:
						if (data.lastAddedCount>0) {
							if (currentCarousel.currentPage == currentCarousel.maxPage) {
								// We found more movies, so we add them to the structure and then, more the slides
								// Adding movies to the structure
								currentObject.empty().append(data.lastAddedLinks).find('ul li a').text("").ready(function(){
									currentObject.parent().children(":first").append(data.lastAdded).ready(function(){
										currentObject.parent().carousel('next');
										// Update the position
										currentCarousel.currentPage++;
										currentCarousel.maxPage++;
									});
								});
							}
							else
								currentObject.empty().append(data.lastAddedLinks).find('ul li a').text("").ready(function(){
									currentObject.parent().carousel('next');
									currentCarousel.currentPage++;
								});					 			
						}
						break;
					case 3:
						if (data.reindexedCount>0) {
							if (currentCarousel.currentPage == currentCarousel.maxPage) {
								// We found more movies, so we add them to the structure and then, more the slides
								// Adding movies to the structure
								currentObject.empty().append(data.reindexedLinks).find('ul li a').text("").ready(function(){
									currentObject.parent().children(":first").append(data.reindexed).ready(function(){
										currentObject.parent().carousel('next');
										// Update the position
										currentCarousel.currentPage++;
										currentCarousel.maxPage++;
									});
								});
							}
							else
								currentObject.empty().append(data.reindexedCount).find('ul li a').text("").ready(function(){
									currentObject.parent().carousel('next');
									currentCarousel.currentPage++;
								});					 			
						}
						break;
					default:
	        	}
	     	}).fail(function(jqXHR, ajaxOptions, thrownError) {
		        alert('No response from server');
		        return false;
			});
		}
  	});


	var lastObjectClicked = $(this);
	$('.updateJumbo img, .updateJumbo a').click(function() {
		var objectClicked = $(this);
		if (lastObjectClicked.attr('title') != objectClicked.attr('title')) {
			lastObjectClicked = objectClicked;
			$('.realtitle').fadeOut('fast');
			$('.plot').fadeOut('fast');
			$('.trans-button').fadeOut('fast');
			$('.details').fadeOut('fast', function() {
				$('.trans-button').attr('href','');
				var imgUrl = objectClicked.attr('title');   
				var linkUrl= objectClicked.attr('link');
				var details= objectClicked.attr('details');
				var realtitle = objectClicked.attr('realtitle');
				$('.realtitle').text(realtitle);
				$('.details').text(details);
				$('.trans-button').attr('href', linkUrl);
				var plot = objectClicked.attr('plot');
				if (plot.length > 75) {
					plot = plot.substring(0,260) + '....';
				}
				$('.plot').text(plot);
				$('.jumbotron').css('background-image', 'url('+ imgUrl +')');
				$('.realtitle').fadeIn('fast');
				$('.plot').fadeIn('fast');
				$('.details').fadeIn('fast');
				$('.trans-button').fadeIn('fast');
			});
		}
	});

</script>

@stop

