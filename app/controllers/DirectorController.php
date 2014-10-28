<?php
use Lib\Services\Options\Options;
use Lib\Repository\Actor\DbActor;

class DirectorController extends \BaseController {


	/**
	 * Options instance.
	 * 
	 * @var Lib\Services\Options\Options;
	 */
	private $options;

	public function __construct(Options $options){
		$this->options = $options;
	}

	function showDirectors(){
		$directors = DB::table('directors')->paginate(24);

		return View::make('directors.index')->withDirectors($directors);
	}

	function director($id){
		$provider = $this->options->getDataProvider();
		$str = $id;
		preg_match('!\d+!', $str, $idD);
		$known = DB::select("SELECT *, t.id AS idTitle FROM titles as t JOIN directors_titles as dt ON t.id = dt.title_id JOIN directors as d ON d.id = dt.director_id WHERE t.type = 'movie' AND d.id = ".$idD[0]);
//		$director = Director::find($id); ." LIMIT 4"

		$director = Director::with(array('title' => function($query){
    		$query->where('type', '=', 'movie')->whereNotNull('video')->where('video','<>','');
		}))->findOrFail($id);

		return View::make('directors.show')->withActor($director)->withProvider($provider)->with('known', $known);
	}
}
?>