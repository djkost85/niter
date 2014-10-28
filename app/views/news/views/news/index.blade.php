@extends('layouts.boilerplate')

@section('title')
	<title>{{ trans('main.news archive') }} - {{ trans('main.brand') }}</title>
@stop

@section('bodytag')
	<body id="newsBrowse" class="body browse nav-trans animate-nav transparent-navbar">
@stop

@section('content')
    <div class="main-content">
        @if($ad = $options->getHomeJumboAd())
            <div class="row ads-row">
                {{ $ad }}
            </div>
        @endif
        {{--Show messages to the visitor--}}
        @include('elements.response')

	    {{--Main content --}}
		<div class="main col-xs-12">
			<div class="row"> @include('elements.response')
			</div>
			@if (!$news->isEmpty() )
				<div class="col-xs-12 col-sm-10 action-row">
					@if (Helpers::hasAccess('news.create'))
						<a href="{{ route(Str::slug(trans('main.news')) . '.create') }}" id="create-news" class="pull-right btn btn-success"><i class="fa fa-pencil"></i> {{ trans('main.create') }}</a>
					@endif
					@if (Helpers::hasAccess('news.update'))
						{{ Form::open(array('url' => 'news/external', 'class' => 'pull-right form-update-news')) }}
	                   	<button type="submit" class="btn btn-success"><i class="fa fa-refresh"></i> {{ trans('main.update') }}</button>
	                  	{{ Form::close() }}
					@endif
				</div>
	            <div class="bordered-heading">
	                <span class="text-border-top"><i class="fa fa-newspaper-o"></i> {{ trans('main.news') }}</span>
	            </div>
	            <div class="col-sm-10">
					@foreach($news as $k => $n)
						@unless($options->scrapeNewsFully() && $n->fully_scraped && strlen($n->body) < 350)
							@if ($k == 3)
								<div class="row ads-row">
									{{--PLACE YOUR AD CODE HERE--}}
								</div>
					    	@endif
							<div class="media col-xs-12 col-sm-12">
								<div class="media-image row col-xs-5 col-sm-3">
									@if ($options->scrapeNewsFully())
										<a class="pull-left" href="{{{ Helpers::url($n->title, $n->id, 'news') }}}">
											<img class="media-object img-responsive" src="{{{ asset($n['image']) }}}" alt="{{ 'Image of News Item' . $k }}">
										</a>
								 	@else
								    	<a class="pull-left" href="{{{ $n['full_url'] ? $n['full_url'] : Helpers::url($n->title, $n->id, 'news') }}}">
										    <img class="media-object img-responsive" src="{{{ asset($n['image']) }}}" alt="{{ 'Image of News Item' . $k }}">
										</a>
							      	@endif
						      	</div>
								<div class="media-body col-xs-7 col-sm-9">
									@if ($options->scrapeNewsFully())
										<h4 class="media-heading"><a href="{{{  Helpers::url($n->title, $n->id, 'news') }}}">{{{ $n['title'] }}}</a></h4>
								 	@else
								    	<h4 class="media-heading"><a href="{{{  $n['full_url'] ? $n['full_url'] : Helpers::url($n->title, $n->id, 'news') }}}">{{{ $n['title'] }}}</a></h4>
							      	@endif
									<p class="home-news-body">
							      		{{ Helpers::shrtString($n['body'], $options->getNewsExeLen()) }}
							     	</p>
							     	<div class="row home-news-time">
							     		{{ trans('main.from') }} {{{ $n['source'] ? $n['source'] : trans('main.brand') }}}
							       		<span class="home-news-ago"><i class="fa fa-clock-o"></i> 
							           		{{ \Carbon\Carbon::createFromTimeStamp(strtotime($n['created_at']))->diffForHumans() }}
							       		</span>
										@if ($n['full_url'] && ! $options->scrapeNewsFully())							
											<a href="{{{ $n['full_url'] ? $n['full_url'] : Helpers::url($n->title, $n->id, 'news') }}}">{{ trans('main.read full article') }} <i class="fa fa-external-link"></i></a>
										@else
											<a href='{{ Helpers::url($n->title, $n->id, 'news') }}'>{{ trans('main.read full article') }} <i class="fa fa-external-link"></i></a>
										@endif
									</div>
									<div class="row edit-btns-row">
						        		@if(Helpers::hasAccess('news.delete'))
						        			{{ Form::open(array('action' => array('NewsController@destroy', $n['id']), 'class' => 'pull-left padd-right', 'method' => 'delete')) }}
						               		<button type="submit" class="btn btn-danger btn-sm">{{ trans('main.delete') }}</button>
						           			{{ Form::close() }}
						        		@endif
							        	@if(Helpers::hasAccess('news.edit'))
							            	<a href="{{ Helpers::url($n->title, $n->id, 'news') . '/edit' }}" type="submit" class="btn btn-warning btn-sm">{{ trans('main.edit') }}</a>
										@endif
										@if ($n->source != 'ScreenRant')
											<div class="news-master-share">
										  		<div class="news-master-share-inner" data-image="{{ $n->image }}" data-url="{{ Helpers::url($n->title, $n->id, 'news') }}" data-text="{{ $n->title }}"></div>
											</div>
										@endif
							       	</div>
							   	</div>
							</div>
						@endunless
					@endforeach
					<div class="row col-xs-12 col-sm-10 pagination-right">{{ $news->links() }}</div>
				</div>
				<div class="col-sm-2">
					Ads
				</div>
			@else
				<p>{{ trans('main.no news found') }}</p>
			@endif
		</div>
		@include('elements.footer')
	</div>
@stop