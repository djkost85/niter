<footer class="footer row">
  <div class="copyright col-xs-12 col-sm-4"> {{ trans('main.copyright') }} &#169;
    <span class="brand">{{ trans('main.brand') }}</span>{{ Carbon\Carbon::now()->year }}
  </div>
  <div class="terms-conditions col-xs-12 col-sm-4">
    <a href="{{ route('privacy') }}">{{ trans('main.privacy') }}</a> |
    <a href="{{ route('tos') }}">{{ trans('main.tos') }}</a> |
    <a href="{{ route('contact') }}">{{ trans('main.contact') }}</a>
  </div>
  <div class="home-social col-xs-12 col-sm-4">
    <div id="twitter" data-url="{{ url() }}" data-text='{{ trans("main.meta description") }}' data-title="<i class='fa fa-twitter'></i>"></div>
    <div id="facebook" data-url="{{ url() }}" data-text='{{ trans("main.meta description") }}' data-title="<i class='fa fa-facebook'></i>"></div>
    <div id="pinterest" data-url="{{ url() }}" data-text='{{ trans("main.meta description") }}' data-title="<i class='fa fa-pinterest'></i>"></div>
    <div id="linkedin" data-url="{{ url() }}" data-text='{{ trans("main.meta description") }}' data-title="<i class='fa fa-linkedin'></i>"></div>
  </div>
</footer>
