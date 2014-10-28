<?php

use Lib\Services\Cache\Cacher;
use Lib\Services\Validation\SearchValidator;
use Lib\Services\Search\Autocomplete as Auto;
use Lib\Services\Search\SearchProviderInterface as Search;
use Lib\Services\Search\SearchAdminProviderInterface as SearchAdmin;

class SearchController extends BaseController
{
	/**
	 * Search provider instance.
	 * 
	 * @var Lib\Services\Search\SearchProviderInterface
	 */
	private $search;

	/**
	 * Caching service provider.
	 * 
	 * @var Lib\Services\Cache\Cacher;
	 */
	private $cache;

	/**
	 * Autocomplete service instance.
	 * 
	 * @var Lib\Services\Autocomplete\Autocomplete
	 */
	private $autocomplete;

	/**
     * Options instace.
     * 
     * @var Lib\Services\Options\Options
     */
    private $options;

	/**
	 * Current search provider name.
	 * 
	 * @var string
	 */
	private $provider;

	public function __construct(Search $search, SearchAdmin $searchAdmin, Auto $autocomplete, Cacher $cache)
	{
		$this->beforeFilter('csrf', array('on' => 'post'));

		$this->cache = $cache;
		$this->autocomplete = $autocomplete;

		//get search provider name for differianting between
		//different providers query caches
		$this->options = App::make('Options');
		if (Helpers::hasAccess('super'))
		{
			$this->search = $searchAdmin;
			$this->provider = $this->options->getSearchProvider();
		}
		else
		{
			$this->search = $search;
			$this->provider = 'db';
		}
	}

	/**
	 * Use current dataprovider to perform seacrh
	 * by given query and return view with results.
	 * 
	 * @return View
	 */
	public function byQuery()
	{	
		$input = (string) Input::get('q');

		if ( ! $input || Str::length($input) <= 1)
			return View::make('search.results')->withTerm('');

		if ( is_a($this->search, 'Lib\Services\Search\DbSearch') )
		{
			$encoded = $input;
		}
		else
		{
			$encoded = urlencode($input);
   		}
		$clean = e($input);

		//make search cache section name
		$section = 'search' . $this->provider;

		if ($encoded)
		{
            if (Helpers::hasSuperAccess()) {
                $results = $this->search->byQuery($encoded);
            }
            else{
                if ($this->options->useCache())
                {
                    $results = $this->cache->get($section, md5($encoded));
                    if ( !$results || count($results) == 0)
                    {
                        $results = $this->search->byQuery($encoded);

                        $this->cache->put($section, md5($encoded), $results);
                    }
                }
                else
                {
                    $results = $this->search->byQuery($encoded);
                }
            }

			return View::make('search.results')->withData($results)->withTerm($clean);
		}

		return View::make('search.results')->withTerm($clean);
	}

	/**
	 * Provide autocomplete/suggest for titles.
	 * 
	 * @param  string $query
	 * @return json
	 */
	public function typeahead($query)
	{
		if ( ! Request::ajax() ) App::abort(404);	

		return $this->autocomplete->typeahead($query);
	}

	/**
	 * Provide autocomplete/suggest for actors.
	 * 
	 * @param  string $query
	 * @return json
	 */
	public function castTypeahead($query)
	{
		if ( ! Request::ajax() ) App::abort(404);

		return $this->autocomplete->castTypeahead($query);
	}

}
