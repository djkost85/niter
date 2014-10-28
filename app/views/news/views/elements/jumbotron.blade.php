@if (count($featured)>0)
<div class="jumbotron fadeIn desktop-only col-sm-12" style="background: url('{{ $featured->first()->background }}');">
	<div class="jumbotron-text fadeIn col-sm-5">
		<p class="realtitle">
			{{ $featured->first()->title . ' (' . $featured->first()->year . ')' }}
		</p>
		<div class="ellipsis">
			<div>
				<p class="tt-plot plot">
					{{ $featured->first()->plot }}
				</p>
			</div>
		</div>
		<p class="details">
			{{ ucfirst(str_replace("|", ",",$featured->first()->genre)) . ' | ' . $featured->first()->runtime . ' min.' }}
		</p>
		<a type="button" class="btn trans-button" href="{{ Helpers::url($featured->first()->title, $featured->first()->id, $featured->first()->type) }}">
		            <span><i class="fa fa-play"></i>{{ trans('main.watchMovieNow') }}</span>
		</a>			
	</div>
@else
<div class="jumbotron fadeIn">
@endif
 	<div class="transparent">
	</div>
	{{--slider begins--}}
	@if ( count($featured) > 0)
        <div id="carousel2" class="main-slider carousel row slide col-sm-12" data-interval="false">		                
            <!-- Carousel items -->
            <div class="carousel-inner">
		 	    @if ($featured->slice(0, 5)->count() > 0)                
                <div class="item active row">
                	<div class="col-sm-1"></div>                	
		           	@foreach($featured->slice(0, 5) as $k => $v)
						<figure class="col-sm-2 home-trailer-poster" >
							<a href="#" class="updateJumbo"><img title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}" src="{{$v->poster}}" class="img-responsive" alt="{{{ $v->title . 'Poster' }}}" data-trailer="{{{ $v->trailer }}}"></a>			               
							<figcaption class="updateJumbo"><a href="#" title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}">{{ $v->title }}</a></figcaption>                     
						</figure> 
					@endforeach             
                	<div class="col-sm-1"></div>                	
                </div>
                @endif
                <!--/item-->
		 	    @if ($featured->slice(5, 5)->count() > 0)                
                <div class="item row">
                	<div class="col-sm-1"></div>                	
		           	@foreach($featured->slice(5, 5) as $k => $v)
						<figure class="col-sm-2 home-trailer-poster" >
							<a href="#" class="updateJumbo"><img title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}" src="{{$v->poster}}" class="img-responsive" alt="{{{ $v->title . 'Poster' }}}" data-trailer="{{{ $v->trailer }}}"></a>			               
							<figcaption class="updateJumbo"><a href="#" title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}">{{ $v->title }}</a></figcaption>                     
						</figure> 
					@endforeach             
                	<div class="col-sm-1"></div>                	
                </div>
                @endif
                <!--/item-->
		 	    @if ($featured->slice(10, 5)->count() > 0)                
                <div class="item row">
                	<div class="col-sm-1"></div>                	
		           	@foreach($featured->slice(10, 5) as $k => $v)
						<figure class="col-sm-2 home-trailer-poster" >
							<a href="#" class="updateJumbo"><img title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}" src="{{$v->poster}}" class="img-responsive" alt="{{{ $v->title . 'Poster' }}}" data-trailer="{{{ $v->trailer }}}"></a>			               
							<figcaption class="updateJumbo"><a href="#" title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}">{{ $v->title }}</a></figcaption>                     
						</figure> 
					@endforeach             
                	<div class="col-sm-1"></div>                	
                </div>
                @endif
                <!--/item-->
		 	    @if ($featured->slice(15, 5)->count() > 0)                
                <div class="item row">
                	<div class="col-sm-1"></div>                	
		           	@foreach($featured->slice(15, 5) as $k => $v)
						<figure class="col-sm-2 home-trailer-poster" >
							<a href="#" class="updateJumbo"><img title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}" src="{{$v->poster}}" class="img-responsive" alt="{{{ $v->title . 'Poster' }}}" data-trailer="{{{ $v->trailer }}}"></a>			               
							<figcaption class="updateJumbo"><a href="#" title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}">{{ $v->title }}</a></figcaption>                     
						</figure> 
					@endforeach             
                	<div class="col-sm-1"></div>                	
                </div>
                @endif
                <!--/item-->
            </div>
            <!--/carousel-inner-->
            <a class="left carousel-control" href="#carousel2" data-slide="prev"><i class="fa fa-chevron-left fa-2x"></i></a>
            <a class="right carousel-control" href="#carousel2" data-slide="next"><i class="fa fa-chevron-right fa-2x"></i></a>
        </div>
	@endif		
</div>{{--jumbotron--}}
