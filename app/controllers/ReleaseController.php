<?php

class ReleaseController extends \TitleController {
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
  
		//return View::make('Titles.Browse')->withData($data);
	}
}
