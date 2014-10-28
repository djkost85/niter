<!DOCTYPE html>

@section('htmltag')
  <html>
@show
    <head>
        
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55214733-1', 'auto');
  ga('send', 'pageview');

	</script>

@section('title')
      <title>{{ trans('main.meta title') }}</title>
@show
      <meta name="viewport" content="width=device-width, maximum-scale=1, user-scalable=no">

@section('assets')
      <link rel="shortcut icon" href="{{{ asset('assets/images/favicon.ico') }}}">
      <link href='http://fonts.googleapis.com/css?family=Ubuntu:400,700' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Ceviche+One' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Cantora+One' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Quando' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400' rel='stylesheet' type='text/css'>
      <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
      {{ HTML::style('assets/packages/bootstrap/css/bootstrap.min.css') }}
      {{ HTML::style('assets/packages/animate/animate.css') }}
      {{ HTML::style('assets/css/styles.css') }}
      {{ HTML::style('assets/css/' . $options->getColorScheme() . '.css') }}
@show
    </head>
  
@section('bodytag')
    <body>
@show
    <div class="container">
<!--       <div id="page-left-shadow" class="container-shadow"></div>
      <div id="page-right-shadow" class="container-shadow"></div>
 -->
@section('nav')
      @include('elements.navbar')
@show
      <div class="content">
        @yield('content')
      </div>
      
@section('ads')
      @if($ad = $options->getFooterAd())
        <div class="row ads-row">{{ $ad }}</div>
      @endif
@show
      {{ HTML::script('assets/packages/jquery/jquery-1.11.1.min.js') }}
      {{ HTML::script('assets/packages/underscore/underscore-min.js') }}
      {{ HTML::script('assets/packages/bootstrap/js/bootstrap.min.js') }}
      {{ HTML::script('assets/js/scripts.js') }}

      @yield('scripts')

      @if ($options->getAnalytics())
        {{ $options->getAnalytics() }}
      @endif
      </div>
    </body>
  </html>