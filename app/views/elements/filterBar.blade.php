<div id="filters" class="row btn-row mobile-only">
	<div class="btn-group col-xs-12">
		{{ Form::open(array('url' => $action, 'class' => 'form-inline', 'method' => 'GET')) }}
			<div class="filter row">			
				<div class="label col-xs-3">
					<strong class="">{{ trans('main.relevance') }}:</strong>
				</div>
				<div class="form-group col-xs-9">
					{{ Form::select('relevance',
					array(	'all'	=> trans('main.all'),
							'releases'	=> trans('main.releases'),
							'featured'	=> trans('main.featured'),
							'reindexed'	=> trans('main.reindexed'),
							'popular'	=> trans('main.mostpopular')),
					Input::get('relevance') ? e(Input::get('relevance')) : 'all', array('class' => 'form-control', 'id' => 'relevance')) }}
				</div>
			</div>
			<div class="filter row">			
				<div class="label col-xs-3">
					<strong class="">{{ trans('main.genre') }}:</strong>
				</div>
				<div class="form-group col-xs-9">
					{{ Form::select('genre',
					array('all'			=> trans('main.all'),
						  'action'		=> trans('main.action'),
					      'adventure'	=> trans('main.adventure'),
						  'animation'	=> trans('main.animation'),
					      'comedy'		=> trans('main.comedy'),
						  'crime'		=> trans('main.crime'),
						  'documentary'	=> trans('main.documentary'),
						  'drama'		=> trans('main.drama'),
						  'family'		=> trans('main.family'),
						  'fantasy'		=> trans('main.fantasy'),
						  'history'		=> trans('main.history'),
						  'horror'		=> trans('main.horror'),
						  'mystery'		=> trans('main.mystery'),
						  'music'		=> trans('main.music'),
					      'romance'		=> trans('main.romance'),
					      'sci'    		=> trans('main.sci-fi'),
					      'sports'    	=> trans('main.sports'),
					      'war'    		=> trans('main.war'),
						  'western'		=> trans('main.western')),
					Input::get('genre') ? e(Input::get('genre')) : 'all', array('class' => 'form-control', 'id' => 'genre')) }}
				</div>
			</div>
			<div class="filter row">			
				<div class="label col-xs-3">
					<strong class="">{{ trans('main.year') }}:</strong>
				</div>
				<div class="form-group col-xs-3">
					{{ Form::selectYear('yearFrom', $yearfrom, Carbon\Carbon::now()->addYears(0)->year,
					e(Input::get('yearFrom')), array('class' => 'form-control', 'id' => 'yearFrom')) }}
				</div>
				<div class="label col-xs-3">
					{{ trans('main.to') }}
				</div>
				<div class="form-group col-xs-3">
					{{ Form::selectYear('yearTo', $yearfrom, Carbon\Carbon::now()->addYears(0)->year,
					Input::get('yearTo') ? e(Input::get('yearTo')) : Carbon\Carbon::now()->addYears(0)->year, array('class' => 'form-control', 'id' => 'yearTo')) }}
				</div>
			</div>
			<div class="filter row">			
				<div class="label col-xs-3">
					<strong class="">{{ trans('main.sortBy') }}:</strong>
				</div>
				<div class="form-group col-xs-9">
					{{ Form::select('sortBy',
					array(	'lastAdded'	=> trans('main.lastAdded'),
							'A-Z'			=> trans('main.az'),
						  	'rating'	=> trans('main.rating')),
					Input::get('sortBy') ? e(Input::get('sortBy')) : 'lastAdded', array('class' => 'form-control', 'id' => 'sortBy')) }}
				</div>
			</div>
			<div class="filter row">				
				<div class="label col-xs-3">
					<strong class="">{{ trans('main.numRows') }}:</strong>
				</div>
				<div class="form-group col-xs-2">
					{{ Form::select('numRows',
					array('18'	=> trans('main.18'),
						  '30'	=> trans('main.30'),
						  '48'	=> trans('main.48')),
					Input::get('numRows') ? e(Input::get('numRows')) : '18', array('class' => 'form-control', 'id' => 'numRows')) }}
				</div>				
				<div class="form-group list-button col-xs-1 col-xs-offset-1">
					<a title="List View" data-view="{{$view}}" href="{{ Request::url() . '?view=0&relevance=' . $relevance . '&genre=' . $genre . '&yearFrom=' . $yearfrom . '&yearTo=' . $yearto . '&sortBy=' . $sortby . '&numRows=' . $numrows }}"></a>
				</div>
				<div class="form-group grid-button col-xs-1">
					<a title="Grid View" data-view="{{$view}}" href="{{ Request::url() . '?view=1&relevance=' . $relevance . '&genre=' . $genre . '&yearFrom=' . $yearfrom . '&yearTo=' . $yearto . '&sortBy=' . $sortby . '&numRows=' . $numrows }}"></a>
				</div>
				<!-- <button type="submit"><i class="icon-trash"></i></button> -->
				@if(Helpers::hasAccess('titles.create'))	
					<div class="form-group create-button col-xs-1">
						<a title="Create a movie" href="{{ url(Str::slug(trans('main.movies')) . '/create') }}"></a>
					</div>
					{{ Form::submit(trans('main.filter'), array('class' => 'btn btn-xs btn-warning col-xs-3')) }}
				@else
					{{ Form::submit(trans('main.filter'), array('class' => 'btn btn-xs btn-warning col-xs-3 col-xs-offset-1')) }}
				@endif
			</div>
			{{ Form::hidden('view', $view) }}
		{{ Form::close() }}
	</div>
</div>
<div id="filters" class="row btn-row desktop-only">
	<div class="col-xs-12">
		<div class="btn-group">
			{{ Form::open(array('url' => $action, 'class' => 'form-inline', 'method' => 'GET')) }}
				<strong class="">{{ trans('main.relevance') }}:</strong>
				<div class="form-group">
					{{ Form::select('relevance',
					array(	'all'	=> trans('main.all'),
							'releases'	=> trans('main.releases'),
							'featured'	=> trans('main.featured'),
							'reindexed'	=> trans('main.reindexed'),
							'popular'	=> trans('main.mostpopular')),
					Input::get('relevance') ? e(Input::get('relevance')) : 'all', array('class' => 'form-control', 'id' => 'relevance')) }}
				</div>
				<strong class="">{{ trans('main.genre') }}:</strong>
				<div class="form-group">
					{{ Form::select('genre',
					array('all'			=> trans('main.all'),
						  'action'		=> trans('main.action'),
					      'adventure'	=> trans('main.adventure'),
						  'animation'	=> trans('main.animation'),
					      'comedy'		=> trans('main.comedy'),
						  'crime'		=> trans('main.crime'),
						  'documentary'	=> trans('main.documentary'),
						  'drama'		=> trans('main.drama'),
						  'family'		=> trans('main.family'),
						  'fantasy'		=> trans('main.fantasy'),
						  'history'		=> trans('main.history'),
						  'horror'		=> trans('main.horror'),
						  'mystery'		=> trans('main.mystery'),
						  'music'		=> trans('main.music'),
					      'romance'		=> trans('main.romance'),
					      'sci'    		=> trans('main.sci-fi'),
					      'sports'    	=> trans('main.sports'),
					      'war'    		=> trans('main.war'),
						  'western'		=> trans('main.western')),
					Input::get('genre') ? e(Input::get('genre')) : 'all', array('class' => 'form-control', 'id' => 'genre')) }}
				</div>
				<strong class="">{{ trans('main.year') }}:</strong>
				<div class="form-group">
					{{ Form::selectYear('yearFrom', $yearfrom, Carbon\Carbon::now()->addYears(0)->year,
					e(Input::get('yearFrom')), array('class' => 'form-control', 'id' => 'yearFrom')) }}
				</div>
				{{ trans('main.to') }}
				<div class="form-group">
					{{ Form::selectYear('yearTo', $yearfrom, Carbon\Carbon::now()->addYears(0)->year,
					Input::get('yearTo') ? e(Input::get('yearTo')) : Carbon\Carbon::now()->addYears(0)->year, array('class' => 'form-control', 'id' => 'yearTo')) }}
				</div>
				<strong class="">{{ trans('main.sortBy') }}:</strong>
				<div class="form-group">
					{{ Form::select('sortBy',
					array(	'lastAdded'	=> trans('main.lastAdded'),
							'A-Z'			=> trans('main.az'),
						  	'rating'	=> trans('main.rating')),
					Input::get('sortBy') ? e(Input::get('sortBy')) : 'lastAdded', array('class' => 'form-control', 'id' => 'sortBy')) }}
				</div>
				{{ Form::submit(trans('main.filter'), array('class' => 'btn btn-xs btn-warning')) }}
				<strong class="">{{ trans('main.numRows') }}:</strong>
				<div class="form-group">
					{{ Form::select('numRows',
					array('18'	=> trans('main.18'),
						  '30'	=> trans('main.30'),
						  '48'	=> trans('main.48')),
					Input::get('numRows') ? e(Input::get('numRows')) : '18', array('class' => 'form-control', 'id' => 'numRows')) }}
				</div>				
				<div class="form-group list-button">
					<a title="List View" data-view="{{$view}}" href="{{ Request::url() . '?view=0&relevance=' . $relevance . '&genre=' . $genre . '&yearFrom=' . $yearfrom . '&yearTo=' . $yearto . '&sortBy=' . $sortby . '&numRows=' . $numrows }}"></a>
				</div>
				<div class="form-group grid-button">
					<a title="Grid View" data-view="{{$view}}" href="{{ Request::url() . '?view=1&relevance=' . $relevance . '&genre=' . $genre . '&yearFrom=' . $yearfrom . '&yearTo=' . $yearto . '&sortBy=' . $sortby . '&numRows=' . $numrows }}"></a>
				</div>
				<!-- <button type="submit"><i class="icon-trash"></i></button> -->
				@if(Helpers::hasAccess('titles.create'))	
					<div class="form-group create-button">
						<a title="Create a movie" href="{{ url(Str::slug(trans('main.movies')) . '/create') }}"></a>
					</div>
				@endif
				{{ Form::hidden('view', $view) }}
			{{ Form::close() }}
		</div>
	</div>
</div>


<!-- 	<div class="col-xs-3 hidden-xs hidden-sm">
		<div class="btn-group" id="grid-sorters">
		  <button type="button" class="btn btn-sort" data-sortby="popularity">{{ trans('main.popularity') }}</button>
		  <button type="button" class="btn btn-sort" data-sortby="name">{{ trans('main.title a-z') }}</button>
		  <button type="button" class="btn btn-sort" data-sortby="release">{{ trans('main.all title') }}</button>
		</div>
	</div> -->
<!-- 				{{ Form::submit(trans('main.filter'), array('class' => 'btn btn-warning hidden-xs')) }} -->
