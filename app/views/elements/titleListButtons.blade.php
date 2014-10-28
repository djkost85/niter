@if ( $user = Helpers::loggedInUser())
	@if( ! isset($watchlist[$data->getId()]))
		{{ Form::open(array('action' => 'ListsController@postAdd', 'class' => 'lists-form')) }}
			{{ Form::hidden('user', $user->id) }}
			{{ Form::hidden('title', $data->getid()) }}
			{{ Form::hidden('list', 'watchlist') }}
		  <button data-user="{{{ $user->id }}}" data-title="{{{ $data->getid() }}}" type="submit" title="{{ trans('main.add to watchlist') }}" class="btn trans-button lists"><i class="fa fa-plus"></i> </button>
		{{ Form::close() }}
	@else
		{{ Form::open(array('action' => 'ListsController@postRemove', 'class' => 'lists-form')) }}
		  {{ Form::hidden('user', $user->id) }}
		  {{ Form::hidden('title', $data->getid()) }}
		  {{ Form::hidden('list', 'watchlist') }}
		  <button type="submit" title="{{ trans('main.remove from watchlist') }}" data-user="{{{ $user->id }}}" data-title="{{{ $data->getid() }}}" class="btn trans-button lists watchlisted"><i class="fa fa-plus"></i></button>
		{{ Form::close() }}
	@endif
	@if ( ! isset($favorites[$data->getid()]))
		{{ Form::open(array('action' => 'ListsController@postAdd', 'class' => 'lists-form')) }}
			{{ Form::hidden('user', $user->id) }}
			{{ Form::hidden('title', $data->getid()) }}
			{{ Form::hidden('list', 'favorite') }}
		  <button  type="submit" data-user="{{{ $user->id }}}" data-title="{{{ $data->getid() }}}" title="{{ trans('main.add to favorites') }}" class="btn trans-button lists"><i class="fa fa-heart"></i> </button>
		{{Form::close()}}
	@else
		{{ Form::open(array('action' => 'ListsController@postRemove', 'class' => 'lists-form')) }}
		  {{ Form::hidden('user', $user->id) }}
		  {{ Form::hidden('title', $data->getid()) }}
		  {{ Form::hidden('list', 'favorite') }}
		  <button type="submit" title="{{ trans('main.remove from favorites') }}" data-user="{{{ $user->id }}}" data-title="{{{ $data->getid() }}}" class="btn trans-button lists watchlisted"><i class="fa fa-heart"></i></button>
		{{ Form::close() }}
	@endif
@else
	<a href="{{ url('login') }}" title="{{ trans('main.add to watchlist') }}" class="btn trans-button lists"><i class="fa fa-plus"></i> </a>
	<a href="{{ url('login') }}" title="{{ trans('main.add to favorites') }}" class="btn trans-button lists"><i class="fa fa-heart"></i> </a>
	
	<a target="_blank" href="http://www.facebook.com/sharer/sharer.php?u={{ Helpers::url($data->getTitle(), $data->getid(), $data->getType()) . '/' }}" title="Share it on Facebook" type="button" class="btn trans-button lists" style="margin-left: 5px;height:36px">
                            <span><i class="fa fa-facebook" style="font-size: 18px;padding-left: 4px;padding-top:2px;"></i></span>
                        </a>
                        
                     <a target="_blank" href="http://twitter.com/share?text=Watch {{ $data->getTitle() . ' (' . DateTime::createFromFormat("Y-m-d", $data->getReleaseDate())->format("Y") . ')'}} Movie Online Free - {{ trans('main.brand') }}&url={{ Helpers::url($data->getTitle(), $data->getid(), $data->getType()) . '/' }}" title="Share it on Twitter" type="button" class="btn trans-button" style="height:36px">
                            <span><i class="fa fa-twitter" style="font-size: 18px;padding-left: 4px;padding-top:2px;"></i></span>
                        </a>
                        
                     <a target="_blank" href="//www.reddit.com/submit" onclick="window.location = '//www.reddit.com/submit?url=' + encodeURIComponent(window.location); return false" title="Share it on Reddit" type="button" class="btn trans-button" style="height:36px">
                            <span><i class="fa fa-reddit" style="font-size: 18px;padding-left: 4px;padding-top:2px;"></i></span>
                        </a> 
	
	
	
@endif