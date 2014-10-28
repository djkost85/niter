@extends('layouts.boilerplate')

@section('bodytag')
    <body id="resultSearch" class="body browse nav-trans animate-nav transparent-navbar" data-url="{{ url() }}">
@stop

@section('content')
    <div class="main-content row">
        @if($ad = $options->getHomeJumboAd())
            <div class="row ads-row">
                {{ $ad }}
            </div>
        @endif
        {{--Show messages to the visitor--}}
        @include('elements.response')

	    {{--Main content --}}
		<div class="main">
			<div class="row well search-well">
				<div class="col-xs-12 col-sm-6">
					<p><i class="fa fa-search"></i> {{ trans('main.top matches for') }} <strong>{{{ $term }}}</strong></p>
					<br class="mobile-only">
				</div>
    			<div class="tab-buttons col-xs-12 col-sm-6">
					<ul class="btn-group">
			    		<li><a id="trigger"  href="#movies" class="btn" data-toggle="tab"><i class="fa visible-xs fa-users"></i><span>{{ trans('main.movies') }}</span></a></li>
			   			<li><a id="trigger3" href="#people" class="btn no-bord-right" data-toggle="tab"><i class="fa fa-video-camera visible-xs"></i><span>{{ trans('main.people') }}</span></a></li>
			    		<li><a id="trigger4" href="#news" class="btn no-bord-right" data-toggle="tab"><i class="fa fa-video-camera visible-xs"></i><span>{{ trans('main.news') }}</span></a></li>
			  		</ul>
		 		</div>
			</div>
			<div class="tab-content">
	      		<div class="tab-pane fade in active" id="movies">
	       			@include('search.moviesGrid')
	      		</div>
				<div class="tab-pane fade" id="people">
	        		@include('search.peopleGrid')
	      		</div>
				<div class="tab-pane fade" id="news">
	        		@include('search.newsResults')
	      		</div>
	    	</div>
		</div>
		@include('elements.footer')
  	</div>
@stop

@section('scripts')

<script>
</script>

@stop
