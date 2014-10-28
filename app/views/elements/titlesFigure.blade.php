@foreach($array as $k => $v)
	<figure class="col-sm-2 home-trailer-poster desktop-only">
		<a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" class=""><img title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}" src="{{$v->poster}}" class="img-responsive" alt="{{{ $v->title . 'Poster' }}}" data-trailer="{{{ $v->trailer }}}" ></a>			               
		<figcaption><a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}">{{ $v->title }}</a></figcaption>                     
	</figure> 
	<figure class="col-xs-4 home-trailer-poster mobile-only" >
		<a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" class=""><img title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}" src="{{$v->poster}}" class="img-responsive" alt="{{{ $v->title . 'Poster' }}}" data-trailer="{{{ $v->trailer }}}" ></a>			               
		<figcaption><a href="{{ Helpers::url($v->title, $v->id, $v->type) }}" title="{{$v->background}}" realtitle="{{ $v->title . ' (' . $v->year . ')' }}" plot="{{ $v->plot }}" details="{{ ucfirst(str_replace("|", ",",$v->genre)) . ' | ' . $v->runtime . ' min.' }}" link="{{ Helpers::url($v->title, $v->id, $v->type) }}">{{ $v->title }}</a></figcaption>                     
	</figure> 
@endforeach             
