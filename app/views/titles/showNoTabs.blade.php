@extends('layouts.boilerplate')

@section('title')

	<title>Watch {{ $data->getTitle() . ' (' . DateTime::createFromFormat("Y-m-d", $data->getReleaseDate())->format("Y") . ')'}} Movie Online Free - {{ trans('main.brand') }}</title>

@stop

@section('assets')

    @parent
  
    <meta name="title" content="Watch {{ $data->getTitle() . ' (' . DateTime::createFromFormat("Y-m-d", $data->getReleaseDate())->format("Y") . ')'}} Movie Online Free - {{ trans('main.brand') }}">
    <meta name="description" content="Watch {{{ $data->getTitle() }}} Online Free: {{{ $data->getPlot() }}}">
    <meta name="keywords" content="watch {{{ $data->getTitle() }}} Online Free, watch {{{ $data->getTitle() }}} movie in hd, download {{{ $data->getTitle() }}} free movie">
    <meta property="og:title" content="Watch {{ $data->getTitle() . ' (' . DateTime::createFromFormat("Y-m-d", $data->getReleaseDate())->format("Y") . ')'}} Movie Online Free - {{ trans('main.brand') }}"/>
    <meta property="og:url" content="{{ Request::url() }}"/>
    <meta property="og:type" content="video.movie" />
    <meta property="og:video:width" content="640" />
    <meta property="og:video:height" content="390" />
    <meta property="og:video:type" content="application/x-shockwave-flash" />
    <meta property="og:site_name" content="{{ trans('main.brand') }}"/>
    <meta property="og:image" content="{{str_replace('w342', 'original', asset($data->getPoster()))}}"/>
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="{{ trans('main.brand') }}">
    <meta name="twitter:title" content="{{ $data->getTitle() }}">
    <meta name="twitter:description" content="{{ $data->getPlot() }}">
    <meta name="twitter:image" content="{{ $data->getPoster() }}">
    <link rel="stylesheet" type="text/css" href="../player/css/player.css?v=1.1.3">
    
    <!-- Schema.VideoObject -->

  <div itemprop="video" itemscope itemtype="http://schema.org/VideoObject" style="display:none;" >
  <meta itemprop="url" content ="{{ Request::url() }}" />
  <meta itemprop="duration" content="<?php 
    $minutes= $data->getRuntime();
    $seconds=60;
    $total= $minutes * $seconds;
	echo $total;
  ?>" />
  <meta itemprop="thumbnail" content="{{str_replace('w342', 'original', asset($data->getPoster()))}}" />
  <span itemprop="description">Watch {{ $data->getTitle() . ' (' . DateTime::createFromFormat("Y-m-d", $data->getReleaseDate())->format("Y") . ')'}} Movie Online Free - {{ trans('main.brand') }}</span>
  <meta itemprop="date" content="{{{ $data->getCreatedAt() }}}">
  <meta itemprop="embedURL" content="{{ Request::url() }}">
  </div>   
    
@stop

@section('bodytag')
    <body id="movieDetail" class="body nav-trans animate-nav" data-url="{{ url() }}">
@stop

@section('content')
    <div itemscope itemtype="http://schema.org/Movie" class="main-content row">
        @if($ad = $options->getHomeJumboAd())
            <div class="row ads-row">
                {{ $ad }}
            </div>
        @endif
        {{--Modal ready for any use--}}
        <div class="yt-modal-box"></div>
        {{--Modal ready for any use--}}
        <div class="movie-modal-box">
            <div class="modal fade animated fadeInBig" id="movie-modal">
                <div class="modal-dialog">
                    <div class="modal-body flex-video widescreen">
                        <button type="button" class="modal-close" data-dismiss="modal" aria-hidden="true"></button>
                        @include('elements.videoPlayer')
                    </div>
                </div>
            </div>          
        </div>
        {{--Show messages to the visitor--}}
        @include('elements.response')
        <div id="dataId" class="invisible">{{$data->getId()}}</div>

        {{--Main content --}}
        <div class="main jumbotron row mobile-only col-xs-12" style="background-image: url({{{ asset($data->getBackground()) }}});">
            <div class="poster">
                <figure class="home-trailer-poster" >
                    <a href="#"><img itemprop="image" title="{{$data->getBackground()}}" src="{{$data->getPoster()}}" class="img-responsive" alt="{{{ $data->getTitle() . 'Poster' }}}"></a>                           
                </figure>
                @if ($data->getRating())
                    <div class="ratings">
                        @if($data->getTmdbRating())
                            <div>{{ 'TMDb - ' . "<strong>{$data->getTmdbRating()}</strong>" . '/10'}}</div>
                        @endif
                        @if($data->getMcRating())
                            <div>{{ 'Metacritic - ' . "<strong>{$data->getMcRating()}</strong>" . '/10' }}</div>
                        @endif
                        @if($data->getImdbRating())
                            <div>{{ 'IMDB - ' . "<strong>{$data->getImdbRating()}</strong>" . '/10'}}</div>
                        @endif 
                    </div>
                @endif                
            </div>
            <div class="actions col-xs-6 row">
                <div class="title row">
                    <a href="{{ Helpers::url($data->getTitle(), $data->getId(), $data->getType()) }}" class="title-title">{{{ $data->getTitle() . ' (' . DateTime::createFromFormat("Y-m-d", $data->getReleaseDate())->format("Y") . ')'}}}</a>
                </div>
                 <button type="button" class="btn trans-button trailer-trigger" data-trailer="{{{ $data->getTrailer() }}}">
                    <span><i class="fa fa-film"></i> {{ trans('main.play trailer') }}</span>
                </button>
                <button type="button" class="btn trans-button movie-trigger" data-trailer="">
                    <span><i class="fa fa-play"></i> {{ trans('main.watchMovie') }}</span>
                </button>
                @if ( Helpers::hasAccess('titles.edit') )
                    <a href="{{ Helpers::url($data->getTitle(), $data->getid(), $data->getType()) . '/edit' }}" type="button" class="btn trans-button">
                        <span><i class="fa fa-edit"></i> {{ trans('main.edit') }}</span>
                    </a>
                @endif
                <div class="title-list-btns">
                    @include('elements.titleListButtons')
                </div>
            </div>
            <div class="transparent">
            </div>            
        </div>
        <div class="main jumbotron row desktop-only" style="background-image: url({{{ asset($data->getBackground()) }}});">
            <div class="poster">
                <div class="play-button">
                    <a href="#">
                        <i class="fa fa-play-circle-o fa-5x movie-trigger"></i>
                    </a>
                </div>
                <figure class="home-trailer-poster movie-trigger" >
                    <a href="#"><img style="margin-top:-0px;padding: 1px 1px !important;border:0 !important;border-radius:0 !important" class="btn trans-button movie-trigger" title="{{$data->getBackground()}}" src="{{$data->getPoster()}}" class="img-responsive" alt="{{{ $data->getTitle() . 'Poster' }}}"></a>
                </figure>
                @if ($data->getRating())
                    <div class="ratings">
                        @if($data->getTmdbRating())
                            <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating"><span itemprop="ratingValue">{{ 'TMDB - ' . "<strong>{$data->getTmdbRating()}</strong>" . '/10'}}</span></div>
                        @endif
                        @if($data->getMcRating())
                            <div>{{ 'Metacritic - ' . "<strong>{$data->getMcRating()}</strong>" . '/10' }}</div>
                        @endif
                        @if($data->getImdbRating())
                            <div>{{ 'IMDB - ' . "<strong>{$data->getImdbRating()}</strong>" . '/10'}}</div>
                        @endif 
                    </div>
                @endif                
            </div>
            <div class="detailed-information row">
                <div class="title row">
                    <a href="{{ Helpers::url($data->getTitle(), $data->getId(), $data->getType()) }}" class="title-title"><span itemprop="name">{{ $data->getTitle() . ' (' . DateTime::createFromFormat("Y-m-d", $data->getReleaseDate())->format("Y") . ')'}}</span></a>
                </div>
                <div class="title-info row">
                    @if ($data->getRuntime())
                        <span>{{ $data->getRuntime() . ' ' . trans('main.min')}}</span> - 
                    @endif
                    @if ($data->getGenre())
                        <span>{{ $data->getGenre() }}</span> - 
                    @endif
                    @if ($data->getReleasedate())
                        <span>{{{ $data->getReleasedate() }}}</span>
                    @endif
                </div>
                <div class="actions row">
                    <button type="button" class="btn trans-button trailer-trigger" data-trailer="{{{ $data->getTrailer() }}}">
                        <span><i class="fa fa-film"></i> {{ trans('main.play trailer') }}</span>
                    </button>
                    <button type="button" class="btn trans-button movie-trigger" data-trailer="" style="background-color: rgba(27, 54, 85, 0.7);">
                        <span><i class="fa fa-play"></i> {{ trans('main.watchMovie') }}</span>
                    </button>
                    @if ( Helpers::hasAccess('titles.edit') )
                        <a href="{{ Helpers::url($data->getTitle(), $data->getid(), $data->getType()) . '/edit' }}" type="button" class="btn trans-button">
                            <span><i class="fa fa-edit"></i> {{ trans('main.edit') }}</span>
                        </a>
                    @endif
                    <div class="title-list-btns">
                        @include('elements.titleListButtons')
                    </div>
               
                </div>
                <div>
                    <dl class="additional-information row">
                        @if ($directors = array_slice($data->getDirectors(), 0, 5))
                            <dt>{{ trans('main.directors') }}:</dt>
                            <dd>
                                @foreach($directors as $s)
                                    <strong><a href="{{ Helpers::url($s['name'], $s['id'], 'director') }}"><span itemprop="director" itemscope itemtype="http://schema.org/Person"><span itemprop="name">{{{ $s['name'] }}},</span></span></a></strong>
                                @endforeach
                            </dd>
                        @endif
                        @if ($writers = $data->getWriters())
                            <dt>{{ trans('main.writing') }}:</dt>
                            <dd>
                            @foreach($writers as $w)
                                {{{ $w['name'] }}},
                            @endforeach
                            </dd>
                        @endif
                        @if ($stars = array_slice($data->getCast(), 0, 7))
                            <dt>{{ trans('main.stars') }}:</dt>
                            <span itemprop="actor" itemscope itemtype="http://schema.org/Person">
                            <dd itemprop="name">
                            @foreach($stars as $s)
                                <strong><a href="{{ Helpers::url($s['name'], $s['id'], 'people') }}">{{{ $s['name'] }}}</a>,</strong>
                            @endforeach
                            </dd>
                        @endif
                        @if ($country = $data->getCountry())
                            <dt>{{ trans('main.country') }}:</dt>
                            <dd>{{{ $country }}}</dd>       
                        @endif
                        @if ($language = $data->getLanguage())
                            <dt>{{ trans('main.lang') }}:</dt>
                            <dd>{{{ $language }}}</dd>        
                        @endif
                        <dt>{{ trans('main.Synopsis') }}:</dt>
                        <dd class="synopsis">{{{ $data->getPlot() }}}</dd>
                    </dl>
                </div>
            </div>
            <div class="transparent">
            </div>            
        </div>
        <div class="secondary row col-xs-12">
            {{--Detailed information--}}
            <div class="col-xs-12 details mobile-only">
                <div class="bordered-heading">
                    <span class="text-border-top"><i class="fa fa-film"></i> {{ trans('main.details') }}</span>
                </div>
               <div class="title-info row">
                    @if ($data->getRuntime())
                        <span class="col-xs-12">{{ $data->getRuntime() . ' ' . trans('main.min')}}</span> 
                    @endif
                    @if ($data->getGenre())
                        <span class="col-xs-12">{{ $data->getGenre() }}</span>
                    @endif
                    @if ($data->getReleasedate())
                        <span class="col-xs-12">{{{ $data->getReleasedate() }}}</span>
                    @endif
                </div>
                <div>
                    <dl class="additional-information row">
                        @if ($directors = array_slice($data->getDirectors(), 0, 5))
                            <dt>{{ trans('main.directors') }}:</dt>
                            <dd>
                                @foreach($directors as $s)
                                    <strong><a href="{{ Helpers::url($s['name'], $s['id'], 'director') }}">{{{ $s['name'] }}},</a></strong>
                                @endforeach
                            </dd>
                        @endif
                        @if ($writers = $data->getWriters())
                            <dt>{{ trans('main.writing') }}:</dt>
                            <dd>
                            @foreach($writers as $w)
                                {{{ $w['name'] }}},
                            @endforeach
                            </dd>
                        @endif
                        @if ($stars = array_slice($data->getCast(), 0, 7))
                            <dt>{{ trans('main.stars') }}:</dt>
                            <dd>
                            @foreach($stars as $s)
                                <strong><a href="{{ Helpers::url($s['name'], $s['id'], 'people') }}">{{{ $s['name'] }}}</a>,</strong>
                            @endforeach
                            </dd>
                        @endif
                        @if ($country = $data->getCountry())
                            <dt>{{ trans('main.country') }}:</dt>
                            <dd>{{{ $country }}}</dd>       
                        @endif
                        @if ($language = $data->getLanguage())
                            <dt>{{ trans('main.lang') }}:</dt>
                            <dd>{{{ $language }}}</dd>        
                        @endif
                        <dt>{{ trans('main.Synopsis') }}:</dt>
                        <dd class="synopsis">{{{ $data->getPlot() }}}</dd>
                    </dl>
                </div>
            </div>            
            {{--adapt the view based on if we have critic reviews or not--}}
            @include('elements.hasCriticReviewsContent')
        </div>
        @if (isset($disqus))
            <section class="container disqus">
                <div class="bordered-heading">
                    <span class="text-border-top">
                        <i class="fa fa-comments"></i> {{ trans('main.comments') }}
                    </span>
                </div>
                <div id="disqus_thread"></div>
            </section>
            @include('elements.disqus')
        @endif
        @include('elements.footer')
    </div>
@stop

@section('scripts')
    <script src="../player/jwplayer/jwplayer/jwplayer.js"></script>
    <script type="text/javascript">jwplayer.key="4284NkInM2Jp3ew7DYEQ/z2jBHBT6cbIKDdhlDeO3+QXn+3iL67Xej9wEIM5hoXW";</script>
    <script src="../player/funciones.js?v=1.1.93"></script>
    
    <script>
        $(document).ready(function (){
                parametros = "?" + $('#videoParameter').text();
                mostrarOpciones();
        });
        function on_Play(){if(jwplayer().getRenderingMode()=="flash"){$(jwplayer().container).css({opacity:1})}else{$("#player_media.jwvideo").css({"opacity":1});$("#player.jwplayer").css({"background-color":"rgba(0, 0, 0, 1)"})}};
	   function on_Pause(){if(jwplayer().getRenderingMode()=="flash"){$(jwplayer().container).css({opacity:0.4})}else{$("#player_media.jwvideo").css({"opacity":0.41});$("#player.jwplayer").css({"background-color":"rgba(0, 0, 0, 0.41)"})}}
        function reproducir(){
                reproducir2(0);
                // It the is a problem with the video link, we call an API to update Title to reindexed = Broken Link
		// On reproducir with some link is need do asynchronously, i can't return a value. I create on_Link_Error function, i call it when error occur while try getting the video link 
        }
        function on_Link_Error(){
		//broken_link =  sources[sourceSelected]['valor'];
		$('#cuenta').html('<span class="fileError">The Mirror is broken.<br/><br/>If available you can choose other source<br/ >');
		ShowDiv('cuenta'); //hide all others div except #cuenta
        $.getJSON(
            "updateMovieBrokenLink",
            { id: $('#dataId').text() },
            function(data) {
                console.log(data);
            }
        );
	}
    </script>
@stop

