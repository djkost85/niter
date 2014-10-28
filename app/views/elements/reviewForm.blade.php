<div class="review-form-heading row">
    {{ trans('main.write a review', array('title' => $data->getTitle())) }}
</div>
<div class="review-form row">
    {{ Form::open(array('route' => array(Str::slug(trans('main.movies')) . '.reviews.store'), 'id' => 'review-form', 'data-path' => asset('assets/images'), 'data-url' => Request::url())) }}
    <p class="pull-left">{{ trans('main.your rating') }}:</p>
    <div id="rating" class="pull-left"></div>
    <div class="current pull-left"></div>
    @if (Helpers::loggedInUser())
        {{ Form::hidden('author', Helpers::loggedInUser()->username) }}
        {{ Form::hidden('user_id', Helpers::loggedInUser()->id) }}
    @endif
    {{ Form::hidden('title_id', $data->getId(), array('id' => 'title_id')) }}
    {{ Form::textarea('body', Input::old('body'), array('rows' => 5, 'class' => 'form-control firefox-text-fix')) }}
    @foreach ($errors->all('<span class="help-block alert alert-danger">:message</span>') as $message)
        {{ $message }}
    @endforeach
    @if (Sentry::check())
        <button type="submit" class="btn btn-default btn-sm pull-right btn-inheading" id="submit">{{ trans('main.publish') }}</button>
    @else
        <span class="pull-right">{{ trans('main.please') }}<a href="{{ url('login') }}">{{ trans('main.log in') }}</a> {{ trans('main.to publish a review') }}.</span>
    @endif
    {{ Form::close() }}
</div>