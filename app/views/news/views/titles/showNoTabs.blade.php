@extends('layouts.boilerplate')

@section('title')
    <title>{{{ $data->getTitle() }}} - {{ trans('main.brand') }}</title>
@stop

@section('assets')

    @parent
  
    <meta name="title" content="{{{ $data->getTitle() . ' - ' . trans('main.brand') }}}">
    <meta name="description" content="{{{ $data->getPlot() }}}">
    <meta name="keywords" content="{{ trans('main.meta title keywords') }}">
    <meta property="og:title" content="{{{ $data->getTitle() . ' - ' . trans('main.brand') }}}"/>
    <meta property="og:url" content="{{ Request::url() }}"/>
    <meta property="og:site_name" content="{{ trans('main.brand') }}"/>
    <meta property="og:image" content="{{str_replace('w342', 'original', asset($data->getPoster()))}}"/>
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@{{ trans('main.brand') }}">
    <meta name="twitter:title" content="{{ $data->getTitle() }}">
    <meta name="twitter:description" content="{{ $data->getPlot() }}">
    <meta name="twitter:image" content="{{ $data->getPoster() }}">
    <link rel="stylesheet" type="text/css" href="../player/css/player.css?v=1.1.1">
@stop

@section('bodytag')
    <body id="movieDetail" class="body nav-trans animate-nav">
@stop

@section('content')
    <div class="main-content row">
        @if($ad = $options->getHomeJumboAd())
            <div class="row ads-row">
                {{ $ad }}
            </div>
        @endif
        {{--Modal ready for any use--}}
        <div class="yt-modal-box"></div>
        {{--Modal ready for any use--}}
        <div class="movie-modal-box">
            <div class="modal fade" id="movie-modal">
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

        {{--Main content --}}
        <div class="main jumbotron row mobile-only col-xs-12" style="background-image: url({{{ asset($data->getBackground()) }}});">
            <div class="poster">
                <figure class="home-trailer-poster" >
                    <a href="#"><img title="{{$data->getBackground()}}" src="{{$data->getPoster()}}" class="img-responsive" alt="{{{ $data->getTitle() . 'Poster' }}}"></a>                           
                </figure>
                @if ($data->getRating())
                    <div class="ratings">
                        @if($data->getTmdbRating())
                            <div>{{ 'IMDb - ' . "<strong>{$data->getTmdbRating()}</strong>" . '/10'}}</div>
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
                <figure class="home-trailer-poster" >
                    <a href="#"><img title="{{$data->getBackground()}}" src="{{$data->getPoster()}}" class="img-responsive" alt="{{{ $data->getTitle() . 'Poster' }}}"></a>                           
                </figure>
                @if ($data->getRating())
                    <div class="ratings">
                        @if($data->getTmdbRating())
                            <div>{{ 'IMDb - ' . "<strong>{$data->getTmdbRating()}</strong>" . '/10'}}</div>
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
                    <a href="{{ Helpers::url($data->getTitle(), $data->getId(), $data->getType()) }}" class="title-title">{{ $data->getTitle() . ' (' . DateTime::createFromFormat("Y-m-d", $data->getReleaseDate())->format("Y") . ')'}}</a>
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
<!--         <div class="modal fade animated fadeInBig" id="img-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body"></div>
                </div>
            </div>
        </div> -->
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
    <script src="../player/funciones.js?v=1.1.1"></script>
    
    <script>
        $(document).ready(function (){
                parametros = "?" + $('#videoParameter').text();
                mostrarOpciones();
        });
        var oop = $(".border-radius-player").css("opacity");
        function on_Play(){$(".border-radius-player").css({"opacity":1});}
        function on_Pause(){$(".border-radius-player").css({"opacity":oop});}
        function reproducir(){
                var respuesta = reproducir2(0);
                // It the is a problem with the video link, we call an API to update Title to reindexed = Broken Link
                if (respuesta == 'nada') {
                  id = $('#dataId').text();
                  $.getJSON("updateMovieBrokenLink?id="+id, function(data){
                    $.each(data, function() {
                      $("#fadingBarsG").html(this.value);
                      $("#fadingBarsG").css("color", "white");
                      $("#fadingBarsG").css("font-size", "0.55em");
                    });                    
                  });                  
                }
        }
    </script>
@stop

