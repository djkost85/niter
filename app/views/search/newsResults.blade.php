@if ( isset($news) && ! $news->isEmpty() )
	            <div class="col-xs-12 col-sm-10">
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
				</div>
				<div class="col-sm-2 hidden-xs">
					Ads
				</div>
</div>
@else
	<div><h3 class="reviews-not-released">{{ trans('main.no news items found') }}</h3></div>
@endif