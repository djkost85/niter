@extends('layouts.boilerplate')

@section('bodytag')
    <body id="actorBrowse" class="body browse nav-trans animate-nav transparent-navbar">
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
		  	@if(Helpers::hasAccess('people.create'))	
		  		<a href="{{ route(Str::slug(trans('main.people')) . '.create') }}" class="pull-right btn btn-success">{{ trans('main.create new') }}</a>
		  	@endif
			<div class="row"> @include('elements.response')</div>			
            <div class="bordered-heading">
                <span class="text-border-top"><i class="fa fa-user"></i> {{ trans('main.actors') }}</span>
            </div>
            <br>
	    	<div class="browse-grid col-xs-12 col-sm-10">	
				@foreach($actors as $k => $r)
					<figure class="col-xs-6 col-sm-2" data-age="{{{ $r['birth_date'] }}}" data-name="{{{ $r['name'] }}}">
						<div class="img-container">
							<a href="{{ Helpers::url($r['name'], $r['id'], 'people') }}">
								<img class ="img-responsive" src="{{ str_replace('w185', 'w342', asset(($r['image'] == '') ? 'assets/images/photoPlaceholder.png' : $r['image'] )) }}" alt="{{{ $r['name'] }}}">
							</a>
							<figcaption name="{{{ $r['name'] }}}" >
								<a href="{{ Helpers::url($r['name'], $r['id'], 'people') }}"> {{  Helpers::shrtString($r['name']) }} </a>
								<section class="row action-buttons">
									@if (Helpers::hasAccess('people.delete'))
										{{ Form::open(array('route' => array(Str::slug(trans('main.people')) . '.destroy', $r['id']), 'method' => 'delete')) }}
										<button type="submit" title="{{ trans('main.delete') }}" class="btn btn-danger-drk btn-xs"><i class="fa fa-trash-o"></i> </button>
										{{ Form::close() }}
									@endif
									@if (Helpers::hasAccess('people.edit'))
										<a href="{{ route(Str::slug(trans('main.people')) . '.edit', $r['id']) }}" title="{{ trans('main.edit') }}" class="btn btn-warning btn-xs actor-edit-sm"><i class="fa fa-edit"></i> </a>
									@endif
								</section>
							</figcaption>
						</div>	      
					</figure>
		 		@endforeach
			</div> 
			<div class="col-sm-2 desktop-only">
				Ads
			</div>
			<div class="row col-xs-12 col-sm-10 pagination-right">{{ $actors->links() }}</div>
  		</div>
		@include('elements.footer')
  	</div>
@stop

@section('scripts')

<script>

</script>

@stop

