@extends('layouts.boilerplate')

@section('bodytag')
    <body id="movieBrowse" class="body nav-trans animate-nav">
@stop

@section('content')
    <div class="main-content">
        @if($ad = $options->getHomeJumboAd())
            <div class="row ads-row">
                {{ $ad }}
            </div>
        @endif
        {{--Modal ready for any use--}}
         <div class="yt-modal-box"></div>
        {{--Show messages to the visitor--}}
         @include('elements.response')

        {{--Main content --}}
        <div class="row mobile-only">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">{{ trans('main.featured') }}</h3>
                </div>
                <div class="panel-body">
                </div>
            </div>
            <div class="row" style="text-align: center;">
                Ads
            </div>
        </div>
    </div>
@stop

@section('scripts')

<script>

</script>

@stop
