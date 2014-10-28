<?php

// use Carbon\Carbon;
use Lib\Services\Mail\Mailer;
use Lib\Services\Validation\ContactValidator;

class HomeController extends BaseController
{
	/**
	 * Validator instance.
	 * 
	 * @var Lib\Services\Validation\ContactValidator
	 */
	private $validator;

	/**
	 * Options instance.
	 * 
	 * @var Lib\Services\Options\Options
	 */
	private $options;

	/**
	 * Mailer instance.
	 * 
	 * @var Lib\Services\Mail\Mailer;
	 */
	private $mailer;


	public function __construct(ContactValidator $validator, Mailer $mailer)
	{
		$this->mailer = $mailer;
		$this->validator = $validator;
		$this->options = App::make('Options');
	}

	/**
	 * Show homepage.
	 * 
	 * @return View
	 */
	public function index()
	{	
		$view = ucfirst($this->options->getHomeView());

		$featured   = Title::featured()->orderBy('created_at', 'desc')->paginate(20);
		$releases   = Title::releases()->orderBy('created_at', 'desc')->paginate(6);	
		$mostPopular   = Title::mostPopular()->orderBy('tmdb_popularity', 'desc')->paginate(6);	
		$lastAdded   = Title::lastAdded()->orderBy('created_at', 'desc')->paginate(6);	
		$reindexed    = Title::reindexed()->orderBy('created_at', 'desc')->paginate(6);		
		$playing   = Title::nowPlaying();	
		
		$news = News::news();		

		if ($view == 'Rows')
		{
			// $upcoming = Title::upcoming();
			// $actors   = Actor::popular();
			// $latest   = Title::latest();

			// if (is_a($latest, 'Illuminate\Database\Eloquent\Builder'))
			// {
			// 	$latest = null;
			// }
	
	        if (Request::ajax())
	        {
	        	$responseArray = array();
	        	$featuredCount = $featured->count();	        	
	        	if ($featuredCount>0)
	        	{
					$featuredHtml = View::make('elements.titlesFigureAjax')->with('array', $featured)->render();
					$responseArray = array_merge($responseArray, array('featuredCount' => $featuredCount, 'featured' => $featuredHtml, 'featuredLinks' => $featured->links()->render()));
	        	}
	        	$releasesCount = $releases->count();	        	
	        	if ($releasesCount>0)
	        	{
					$releasesHtml = View::make('elements.titlesFigureAjax')->with('array', $releases)->render();
					$responseArray = array_merge($responseArray, array('releasesCount' => $releasesCount, 'releases' => $releasesHtml, 'releasesLinks' => $releases->links()->render()));
	        	}
	        	$mostPopularCount = $mostPopular->count();	        	
	        	if ($mostPopularCount>0)
	        	{
					$mostPopularHtml = View::make('elements.titlesFigureAjax')->with('array', $mostPopular)->render();
					$responseArray = array_merge($responseArray, array('mostPopularCount' => $mostPopularCount, 'mostPopular' => $mostPopularHtml, 'mostPopularLinks' => $mostPopular->links()->render()));
	        	}
	        	$lastAddedCount = $lastAdded->count();	        	
	        	if ($lastAddedCount>0)
	        	{
					$lastAddedHtml = View::make('elements.titlesFigureAjax')->with('array', $lastAdded)->render();
					$responseArray = array_merge($responseArray, array('lastAddedCount' => $lastAddedCount, 'lastAdded' => $lastAddedHtml, 'lastAddedLinks' => $lastAdded->links()->render()));
	        	}
	        	$reindexedCount = $reindexed->count();	        	
	        	if ($reindexedCount>0)
	        	{
					$reindexedHtml = View::make('elements.titlesFigureAjax')->with('array', $reindexed)->render();
					$responseArray = array_merge($responseArray, array('reindexedCount' => $reindexedCount, 'reindexed' => $reindexedHtml, 'reindexedLinks' => $reindexed->links()->render()));
	        	}
				return Response::json($responseArray);
	        }
        	$featuredCount = $featured->count();	        	
        	$releasesCount = $releases->count();	        	
        	$mostPopularCount = $mostPopular->count();	        	
        	$lastAddedCount = $lastAdded->count();	        	
        	$reindexedCount = $reindexed->count();	        	

			return View::make("home.home$view")
				  ->with('featured', $featured)
				  ->with('featuredCount', $featuredCount)
				  ->with('releases',$releases)
				  ->with('releasesCount', $releasesCount)
				  ->with('lastAdded',$lastAdded)
				  ->with('lastAddedCount', $lastAddedCount)
				  ->with('mostPopular', $mostPopular)
				  ->with('mostPopularCount', $mostPopularCount)
				  ->with('reindexed', $reindexed)
				  ->with('reindexedCount', $reindexedCount)
				  ->with('playing', $playing)
				  ->withBg($this->options->getBg('home'))
				  ->withFacebook($this->options->getFb())
				  ->withNews($news);
				  // ->withUpcoming($upcoming)
				  // ->withActors($actors)
				  // ->withLatest($latest);
		}
		else
		{
	        if(Request::ajax())
	        {
				$featuredHtml = View::make('elements.titlesFigure', $featured)->render();

				$responseArray = array('featured' => $featuredHtml);
				return Response::json($responseArray);
	        }
			return View::make("Main.Themes.$view.Home")
					  ->with('featured', $featured)
					  ->with('releases',$releases)
					  ->with('lastAdded',$lastAdded)
					  ->with('mostPopular', $mostPopular)
					  ->with('reindexed', $reindexed)
					  ->with('playing', $playing)
					  ->withNews($news)
					  ->withBg($this->options->getBg('home'))
					  ->withFacebook($this->options->getFb());
		}									  
	}

	/**
	 * Show privacy policy page.
	 * 
	 * @return View
	 */
	public function privacy()
	{
		return View::make('home.privacy');
	}

	/**
	 * Show terms of service page.
	 * 
	 * @return View
	 */
	public function tos()
	{
		return View::make('home.tos');
	}

	/**
	 * Show contact us page.
	 * 
	 * @return View
	 */
	public function contact()
	{
		return View::make('home.contact');
	}

	/*
	 * Sends an email message from contact us form.
	 * 
	 * @return View
	 */
	
	public function submitContact()
	{
		$input = Input::all();

		if ( ! $this->validator->with($input)->passes())
		{
			return Redirect::back()->withErrors($this->validator->errors())->withInput($input);
		}

		$this->mailer->sendContactUs($input);

		return Redirect::to('/')->withSuccess( trans('main.contact succes') );
	}
}