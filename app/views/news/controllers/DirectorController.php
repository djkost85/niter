<?php
use Lib\Services\Options\Options;

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
		$known = DB::select("SELECT *, t.id AS idTitle FROM titles as t JOIN directors_titles as dt ON t.id = dt.title_id JOIN directors as d ON d.id = dt.director_id WHERE d.id = ".$idD[0]." LIMIT 4");
		$director = Director::find($id);

		return View::make('directors.show')->withActor($director)->withProvider($provider)->with('known', $known);
	}
}
?>