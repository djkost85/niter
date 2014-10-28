<?php

class MoviesController extends \TitleController {

	/**
	 * Instantiate new movie controller instance.
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Displays a grid of titles with pagination.
	 *
	 * @return View
	 */
	public function index()
	{
		$input = Input::all();
		$data = $this->title->titleIndex($input, 'movie');
		if (isset($input['genre']))
		{
			$genre = $input['genre'];
			$data = $data->genres($data, $genre);
		}
		else
			$genre = 'all';

		if (isset($input['relevance']))
		{
			$relevance = $input['relevance'];
			$data = $data->relevance($data, $relevance);
		}
		else
			$relevance = 'all';

		if (isset($input['yearFrom']))
			$yearFrom = $input['yearFrom'];
		else
			$yearFrom = Title::getYearOldest();

		if (isset($input['yearTo']))
			$yearTo = $input['yearTo'];
		else
			$yearTo = Title::getYearNewest();

		$data = $data->yearsRange($data, $yearFrom, $yearTo);

		$yearFrom = Title::getYearOldest();
		$yearTo = Title::getYearNewest();

		if (isset($input['view']))
			if (($input['view'] > 1) || ($input['view'] < 0))
				$view=0;
			else	
				$view = $input['view'];
		else
		 	$view=0;

		// Get only online movies
		if (!Helpers::hasAccess('titles.create'))
			$data = $data->online($data);

		if (isset($input['numRows']))
			$numRows = $input['numRows'];			
		else
			$numRows = 18;	

		if (isset($input['sortBy']))
			$sortBy = Title::sortByString($input['sortBy']);
		else
			$sortBy = Title::sortByString('lastAdded');	


		$data = $data->orderBy($sortBy['field'], $sortBy['direction'])->paginate($numRows);

		if (isset($input['sortBy']))
			$sortBy = $input['sortBy'];
		else
			$sortBy = 'lastAdded';

		return View::make('titles.index')->withData($data)
											->withView($view)
											->withGenre($genre)
											->withRelevance($relevance)
											->withYearfrom($yearFrom)
											->withYearto($yearTo)
											->withNumrows($numRows)
											->withSortby($sortBy);
	}

	/**
	 * Displays the page for creating new movie.
	 *
	 * @return View
	 */
	public function create()
	{
		return View::make('Titles.Create');
	}

	/**
	 * Stores newly created movie in database.
	 *
	 * @return void
	 */
	public function store()
	{
		$input = Input::except('_token');

		if ( ! $this->validator->with($input)->passes())
		{
			return Redirect::back()->withErrors($this->validator->errors())->withInput($input);
		}

		$this->title->create($input);

		return Redirect::back()->withSuccess( trans('main.created successfully') );
	}

	/**
	 * Displays the specified movies main page.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($title)
	{
		$title = $this->title->byUri( e($title) );
		
		if ($this->title->needsScraping($title))
		{
			$title = $this->title->getCompleteTitle($title);
		}

		$view = ucfirst($this->options->getTitleView());

		return View::make("titles.show$view")->withData($title)->withId($title->id);
	}

	/**
	 * Displays page for editing general movie info.
	 *
	 * @param  string $title
	 * @return View
	 */
	public function edit($title)
	{
		$title = $this->title->byURi( e($title) );

		return View::make('Titles.Edit')->withTitle($title)->withType('movies');
	}

	/**
	 * Updates the movie from input.
	 *
	 * @param  string $id
	 * @return Redirect
	 */
	public function update($id)
	{
		$input = Input::except('_token', '_method');
		//$input = Input::except('q', 'q');

		// This is a patch, not a solution.
		unset($input['q']);
		// print_r($input);
		Input::merge($input);
		$this->title->update($input, $id);

		return Redirect::back()->withSuccess( trans('main.title update success') );
	}

	/**
	 * Deletes a movie from database.
	 *
	 * @param  string $title
	 * @return Redirect
	 */
	public function destroy($id)
	{
		$this->title->delete($id);

		return Redirect::back()->withSuccess( trans('main.movie deletion successfull') );
	}
	/**
	 * Release a movie from database.
	 *
	 * @param  
	 * @return view
	 */
	public function release()
	{
		// $input = Input::all();
		$input = Title::Release();
		$data = $this->title->titleIndex($input, 'movie');		
		return View::make('Titles.Realeses')->withData($data);

	}
	/**
	 * Popular a movie from database.
	 *
	 * @param  
	 * @return view
	 */
	public function popular()
	{
		// $input = Input::all();
		// $data = $this->title->titleIndex($input, 'movie');
		$input = Title::popularity();
		$data = $this->title->titleIndex($input, 'movie');				
		return View::make('Titles.Popular')->withData($data);
	}
	/**
	 * Genres a movie from database.
	 *
	 * @param  
	 * @return view
	 */
	public function genres()
	{
		// $genre10 = Title::genres10();
		// //$input = Input::all();
		// //$data = $this->title->titleIndex($input, 'movie');
		// return View::make('Titles.Genres')->withData($genre10);

		//$input = Input::all();
		$input = Title::genres10();
		$data = $this->title->titleIndex($input, 'movie');
		return View::make('Titles.Genres')->withData($data);
	}

	/**
	 * Show2014to2010 a movie from database.
	 *
	 * @param  
	 * @return view
	 */
	public function show2014to2010()
	{
		//$data = Title::show2014to2010();
		$input = Title::show2014to2008();
		$data = $this->title->titleIndex($input, 'movie');
		return View::make('Titles.Show2014to2008')->withData($data);
	}

	public function updateMovieBrokenLink()
	{
		$id = Input::get('id');
        
        $movie = Title::find($id);
		$movie->reindexed = 'Broken Link';
		$respuesta = $movie->save();

		$rows[] = array ('id'	=> '1', 'value'	=> trans('main.errorMessageBrokenLink'));
		return json_encode($rows);
	}

}