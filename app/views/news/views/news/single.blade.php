@extends('layouts.boilerplate')

@section('title')
	<title>{{{ $news->title }}} - {{ trans('main.brand') }}</title>
@stop

@section('assets')

	@parent

	<meta name="title" content="{{{ $news->title . ' - ' . trans('main.brand') }}}">
	<meta name="description" content="{{{ Helpers::shrtString($news->body, 200) }}}">
	<meta property="og:title" content="{{{ $news->title . ' - ' . trans('main.brand') }}}"/>
	<meta property="og:url" content="{{ Request::url() }}"/>
	<meta property="og:site_name" content="{{ trans('main.brand') }}"/>
	<meta property="og:image" content="{{ $news->image }}"/>
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@{{ trans('main.brand') }}">
	<meta name="twitter:title" content="{{{ $news->title . ' - ' . trans('main.brand') }}}">
	<meta name="twitter:description" content="{{{ Helpers::shrtString($news->body, 200) }}}">
	<meta name="twitter:image" content="{{ $news->image }}">

@stop

@section('bodytag')
	<body id="newsSingle" class="body nav-trans animate-nav transparent-navbar">
@stop

@section('content')
	<div class="main-content col-sm-12 row">
		<div class="main row">
			<article class="col-sm-7">
				<div class="row">
					<h4 class="reviews-not-released">{{{ $news->title }}}</h4>			
				</div>
				<section class="row body-row">
					{{ $news->body }}
				</section>
				@if ($news->source)
					<p class="row">{{ trans('main.source') }}: <a href="{{ $news->full_url }}">{{ $news->source }}</a></p>
				@endif
			</article>
			<!-- <div class="recent-news col-sm-5"> -->
			<div class="news col-sm-5">
				<div class="bordered-heading">
					<span class="text-border-top">
						<i class="fa fa-fire"></i>
						{{ trans('main.latest news') }}
					</span>
				</div>
				@foreach($recent as $k => $n)
					@if ($k == 3)
						@if($ad = $options->getHomeNewsAd())
					        <div class="ads-row">{{ $ad }}</div>
					    @endif
					@endif
					<div class="media mobile-only">
						<div class="media-body">
							@if ($options->scrapeNewsFully())
								<h4 class="media-heading row">
									<a href="{{{ Helpers::url($n->title, $n->id, 'news') }}}">{{{ $n->title }}}</a>
								</h4>
							@else
								<h4 class="media-heading row">
									<a href="{{{ $n->full_url ? $n->full_url : Helpers::url($n->title, $n->id, 'news') }}}">{{{ $n->title }}}</a>
								</h4>
							@endif
							<p class="home-news-body col-xs-7">
								{{ Helpers::shrtString($n->body, $options->getNewsExeLen()) }}
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
							<span class="home-news-time pull-left"> {{ trans('main.from') }} {{{ $n->source ? $n->source : trans('main.brand') }}}
								<span class="home-news-ago">
									<i class="fa fa-clock-o"></i> 
									{{ \Carbon\Carbon::createFromTimeStamp(strtotime($n->created_at))->diffForHumans() }}
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
									<a href="{{{ Helpers::url($n->title, $n->id, 'news') }}}">{{{ $n->title }}}</a>
								</h4>
							@else
								<h4 class="media-heading">
									<a href="{{{ $n->full_url ? $n->full_url : Helpers::url($n->title, $n->id, 'news') }}}">{{{ $n->title }}}</a>
								</h4>
							@endif
							<p class="home-news-body">
								{{ Helpers::shrtString($n->body, $options->getNewsExeLen()) }}
							</p>
							<span class="home-news-time pull-left"> {{ trans('main.from') }} {{{ $n->source ? $n->source : trans('main.brand') }}}
								<span class="home-news-ago">
									<i class="fa fa-clock-o"></i> 
									{{ \Carbon\Carbon::createFromTimeStamp(strtotime($n->created_at))->diffForHumans() }}
								</span>
								@if ($options->scrapeNewsFully())
									<a href="{{{ Helpers::url($n->title, $n->id, 'news') }}}">
										{{ trans('main.read full article') }}
										<i class="fa fa-external-link"></i>
									</a>
								@else
									<a href="{{{ $n->full_url ? $n->full_url : Helpers::url($n->title, $n->id, 'news') }}}">
										{{ trans('main.read full article') }}
										<i class="fa fa-external-link"></i>
									</a>
								@endif
							</span>
						</div>
					</div>
				@endforeach
			</div>



<!-- 				<div class="bordered-heading"><span class="text-border-top"><i class="fa fa-fire"></i>{{ trans('main.recent news') }}</span></div>
				@if (isset($recent) && ! empty($recent))
					@foreach($recent as $k => $n)
					    @if ($k == 3)
							<div class="row ads-row">
								{{--PLACE YOUR AD CODE HERE--}}
							</div>
					    @endif
					    <div class="media">
				    	@if ($options->scrapeNewsFully())
							<a class="pull-left" href="{{{ Helpers::url($n->title, $n->id, 'news') }}}">
							    <img class="media-object img-responsive" src="{{{ asset($n->image) }}}" alt="{{ 'Image of News Item' . $k }}">
							</a>
					 	@else
					    	<a class="pull-left" href="{{{ $n->full_url ? $n->full_url : Helpers::url($n->title, $n->id, 'news') }}}">
							    <img class="media-object img-responsive" src="{{{ asset($n->image) }}}" alt="{{ 'Image of News Item' . $k }}">
							</a>
				      	@endif
							<div class="media-body">
					    		<p class="home-news-body">
									@if ($options->scrapeNewsFully())
										<a href="{{{ Helpers::url($n->title, $n->id, 'news') }}}">{{{ $n->title }}}</a> 
						  			@else
						    			<a href="{{{ $n->full_url ? $n->full_url : Helpers::url($n->title, $n->id, 'news') }}}">{{{ $n->title }}}</a> 
					      			@endif
					      			<br>
									<span>{{ Helpers::shrtString($n->body, 100) }}</span>
					     		</p>
								<span class="home-news-time pull-left"> {{ trans('main.from') }} {{{ $n->source ? $n->source : trans('main.brand') }}}
					       			<span class="home-news-ago"><i class="fa fa-clock-o"></i> 
										{{ \Carbon\Carbon::createFromTimeStamp(strtotime($n->created_at))->diffForHumans() }}
					       			</span>
								</span>
					   		</div>
						</div>
					@endforeach
				@endif
			</div> -->
		</div>
		@if (isset($disqus))
			<div class="row">
				<section class="disqus row">
					<div class="bordered-heading"><span style="border-color:{{$options->getColor('warning')}};color:{{$options->getColor('warning')}}" class="text-border-top"><i class="fa fa-comments"></i> {{ trans('main.comments') }}</div>
					<div id="disqus_thread"></div>
				</section>
				@include('Titles.Partials.Disqus')
			</div>
    	@endif
		@include('elements.footer')
	</div>
@stop