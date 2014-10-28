{{--Cast column begins--}}
<section class="col-sm-3 col-xs-12 casting">
    <div class="bordered-heading">
        <span class="text-border-top"><i class="fa fa-user"></i> {{ trans('main.cast') }}</span>
        @if (Helpers::hasAccess('titles.edit'))
            <a href="{{ Request::fullUrl() . '/edit-cast' }}" type="button" class="pull-right btn btn-info btn-xs"><i class="fa fa-edit"></i> {{ trans('main.edit') }}</a>
        @endif
    </div>
    <div class="order cast-grid">
        @foreach(array_slice($data->getCast(), 0, 14) as $k => $actor)
            <figure class="col-xs-6 title-actors" data-order="{{{ $k }}}">
                <a href="{{{ Helpers::url($actor['name'], $actor['id'], 'people') }}}">
                    <img src="{{{ asset($actor['image']) }}}" class="img-responsive" alt="{{ 'Picture of ' . $actor['name'] }}">
                </a>         
                <figcaption>
                    <a href="{{{ Helpers::url($actor['name'], $actor['id'], 'people') }}}">{{{ $actor['name'] }}}</a> <br>
                    {{{ $actor['pivot']['char_name'] }}}
                </figcaption>
            </figure> 
        @endforeach
    </div>
</section>
{{--Cast column ends--}}
{{--critic review column--}}
<section class="col-sm-5 col-xs-12 reviews">
    <div class="bordered-heading">
        <span class="text-border-top"><i class="fa fa-thumbs-o-down"></i> {{ trans('main.critic reviews') }}</span>
        @if (Helpers::hasAccess('reviews.update'))
            {{ Form::open(array('url' => 'private/update-reviews', 'class' => 'pull-right')) }}
            {{ Form::hidden('id', $data->getId()) }}
            <button type = "submit" title="{{ trans('dash.delete') }}" class="btn btn-info btn-xs"><i class="fa fa-refresh"></i> {{ trans('main.update') }}</button>
            {{ Form::close() }}
        @endif
    </div>
    @if ($data->getCriticReviews())
        @foreach(array_slice($data->getCriticReviews(), 0, 9) as $k => $r)
            <div class="review">
                @if ($k == 4)
                    @if($ad = $options->getTitleCriticAd())
                    <div class="row ads-row">{{ $ad }}</div>
                    <hr>
                    @endif
                @endif
                <div class="row review-info">
                    <div class="review-score">
                        <div>{{{ $r['score'] }}}</div>
                    </div>
                    <div class="review-author">
                        {{ trans('main.by') }} 
                        @if ($r['author'])
                            <strong>{{{ $r['author'] }}}</strong> - 
                        @endif
                        <strong>{{{ $r['source'] }}}</strong>
                    </div>
                </div>
                <div class="review-body">{{{ $r['body'] }}}</div>
                <div class="row review-full">
                    <div class="link-fullreview">
                        <a target="_blank" href="{{{ $r['link'] }}}">{{ trans('main.full review') }}
                            <i class="icon-share-alt"></i>
                        </a>
                    </div>
                    <div class="delete-button">
                        @if(Helpers::hasAccess('reviews.delete'))
                            {{ Form::open(array('url' => Request::url() . '/reviews/' . $r['id'], 'class' => 'trash-ico-critic', 'method' => 'delete')) }}
                            {{ Form::hidden('id', $data->getId()) }}
                            <button type = "submit" title="{{ trans('dash.delete') }}" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> </button>
                            {{ Form::close() }}
                        @endif
                    </div>
                </div>
            </div>
        @endforeach
    @else
        <div class="no-reviews">
            <strong>{{ trans('main.no critic reviews') }}</strong>
            <p>
            <strong><a target="_blank" href="http://metacritic.com/movie/<?php 
    $title= $data->getTitle();
    $title = str_replace(" ", "-", $title);
    $title = str_replace("'", "", $title);
    $lowertitle = strtolower($title); 
	echo $lowertitle;
  ?>/"><img src="/imdb/metacritic_logo.gif"></a> More info at Metacritic</strong>  
        </div>
    @endif
</section>
{{--critic review column ends--}}
{{--user reviews column--}}
<section class="col-sm-4 col-xs-12 user-reviews">
    <div class="bordered-heading">
        <span class="text-border-top"> <i class="fa fa-thumbs-o-up"></i> {{ trans('main.user reviews') }}</span>
        {{--display modal button if user review found--}}
        @if ($data->getUserReviews())
            <a href="#" type="button" data-toggle="modal" data-target="#review-modal" class="pull-right btn btn-info btn-xs">
                <i class="fa fa-pencil"></i>
                {{ trans('main.write one') }}
            </a>
            @include('elements.formModal')
        @endif
    </div>
    {{--display form if no user reviews found--}}
    @if ( ! $data->getUserReviews() )
        <div> @include('elements.reviewForm') </div> 
        {{--if found review display them and pop up modal with form--}}  
    @else
        @foreach(array_slice($data->getUserReviews(), 0, 10) as $r)
            @if ($k == 4)
                @if($ad = $options->getTitleUserAd())
                    <div class="row ads-row">{{ $ad }}</div>
                    <hr>
                @endif
            @endif
            <div class="row review-info">
                <div class="review-score">
               		<div>{{{ $r['score'] . '0' }}}</div>
                </div>
                <div class="review-author">
                	{{ trans('main.by') }} 
                	<strong>{{{ $r['author'] }}}</strong> - <strong>{{ \Carbon\Carbon::createFromTimeStamp(strtotime($r['created_at']))->diffForHumans() }}</strong>
                </div>
                {{--delete review button--}}
                @if (Helpers::hasAccess('reviews.delete') || (Sentry::check() && Sentry::getUser()->username == $r['author']))
                    {{ Form::open(array('url' => Request::url() . '/reviews/' . $r['id'], 'class' => 'trash-ico-user', 'method' => 'delete')) }}
						{{ Form::hidden('id', $data->getId()) }}
						<button type = "submit" title="{{ trans('dash.delete') }}" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> </button>
                    {{ Form::close() }}
				@endif
			</div> 
			<p class="review-body">{{{ $r['body'] }}}</p>
      		<hr> 
		@endforeach
	@endif
</section>
