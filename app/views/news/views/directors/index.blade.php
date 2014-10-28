@extends('layouts.boilerplate')

@section('bodytag')
	<body id="directorBrowse" class="body browse nav-trans animate-nav transparent-navbar">
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
			<div class="row"> @include('elements.response') </div>
            <div class="bordered-heading">
                <span class="text-border-top"><i class="fa fa-user"></i> {{ trans('main.directors') }}</span>
            </div>
            <br>
	    	<div class="browse-grid col-xs-12 col-sm-10">	
				@foreach($directors as $d)
					<figure class="col-xs-6 col-sm-2" data-name="{{{ $d->name }}}">
						<div class="img-container">
							<a href="<?php echo \URL::to('/').'/director/'.$d->id.'-'.str_replace(' ', '-', $d->name) ?>">
								<img class ="img-responsive" src="{{ asset(($d->image == '') ? 'assets/images/photoPlaceholder.png' : $d->image ) }}" alt="{{{ $d->name }}}">
							</a>
							<figcaption name="{{{ $d->name }}}" >
								<a href="<?php echo \URL::to('/').'/director/'.$d->id.'-'.str_replace(' ', '-', $d->name) ?>"> {{  Helpers::shrtString($d->name) }} </a>
							</figcaption>
						</div>
					</figure>
				@endforeach
			</div> 
			<div class="col-sm-2 desktop-only">
				Ads
			</div>
			<div class="row col-xs-12 col-sm-10 pagination-right">{{ $directors->links() }}</div>
		</div>
		@include('elements.footer')
	</div>
@stop
