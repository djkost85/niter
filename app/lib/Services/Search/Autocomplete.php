<?php namespace Lib\Services\Search;

use File, Helpers, App, Actor, Title, Response;
use Illuminate\Cache\CacheManager;

class Autocomplete
{
	/**
	 * What results will be ordered results on.
	 * 
	 * @var string
	 */
	private $order = 'tmdb_popularity';


	public function __construct()
	{
		$this->order = Helpers::getOrdering();
	}

	/**
	 * Provides autocplete when user types
	 * in words in searchbar.
	 * 
	 * @param  string $query
	 * @return json
	 */
	public function typeAhead($query)
	{	 	
		$q = $this->prepareQuery($query);

		/*$titles = Title::limit(8)
			->where('title', 'LIKE', $q)
			->where('now_playing', '=', 0)
			->where('type', '=', 'movie')
			->orderBy($this->order, 'desc')
			->select('id', 'title', 'poster', 'plot', 'genre', 'type')
			->remember(10);
		*/

		$titles = \DB::select(
					\DB::raw(
						"SELECT id, title, poster, plot, genre, type FROM titles WHERE title LIKE '".$q."' AND now_playing = 0 AND type = 'movie' AND video IS NOT NULL UNION SELECT id, name, image as poster, bio, awards, type FROM actors WHERE name LIKE '".$q."' UNION SELECT id, name, image as poster, bio, awards, type FROM directors WHERE name LIKE '".$q."' LIMIT 6 "
						// 
						)
					);

	    //prepare the array for display
	    foreach ($titles as $k => $v)
	    {
	    	//add title page url
	    	//$v->link = Helpers::url($v->title, $v->id);
			if($v->type == 'movie'){
				$v->link = \URL::to('/').'/movies/'.$v->id.'-'.$v->title;
			}else if($v->type == 'dir'){
				$v->link = \URL::to('/').'/director/'.$v->id.'-'.str_replace(' ', '-', $v->title);
			}else{
				$v->link = \URL::to('/').'/people/'.$v->id.'-'.$v->title;
			}

	    	 //prepare poster
	    	 if ( ! $v->poster)
	    	 {
	    	 	$v->poster = asset('/assets/images/cinema.png');
	    	 }
	    	 else
	    	 {
	    	 	$v->poster = asset($v->poster);
	    	 }

	    	//remove any zeros for null plots
	    	if ( ! $v->plot)
	    	{
	    		$v->plot = null;
	    	}

	    	//format genre
	    	if ($v->genre)
	    	{
	    		$v->genre = trim( str_replace(',', ' | ', $v->genre), ' | ' );
	    	}
	    }

	    return Response::json($titles);		
	}

	/**
	 * Prepares users search term to be run
	 * against database records.
	 * 
	 * @param  string $query
	 * @return string
	 */
	private function prepareQuery($query)
	{
		$query = preg_replace("/[^A-Za-z0-9]/i", '%', $query);
		
		return "%$query%";
	}

	/**
	 * Provides autocomplete for actor names
	 * when attaching new actor to title.
	 * 
	 * @param  string $query
	 * @return json
	 */
	public function castTypeAhead($query)
	{	 
		$q = $this->prepareQuery($query);

	    $actors = Actor::where('name', 'LIKE', $q)
					->select('id', 'name', 'image')->get();

	  	//add placeholder image if actor doesnt have one in db
	    foreach ($actors as $k=> $v)
	    {
	    	if ( ! $v->image)
	    	{
	    		$v->image = asset('assets/images/noimage.jpg');
	    	}
	    	elseif ( ! str_contains('http', $v->image))
	    	{
	    		$v->image = asset($v->image);
	    	}
	    }

	    return Response::json($actors);
	}
}