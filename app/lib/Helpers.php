<?php

class Helpers
{
	private static $provider;

    public static function getOrdering()
    {
    	$opt = App::make('Options');
    	$provider = $opt->getDataProvider();

        if ($provider == 'imdb')
        {
            $ordering = 'imdb_votes_num';
        }
        elseif ($provider == 'tmdb')
        {
            $ordering = 'tmdb_popularity';
        }
        elseif ($provider == 'db')
        {
            $ordering = 'views';
        }
        else
        {
        	$ordering = 'imdb_votes_num';
        }

        return $ordering;
    }

	/**
	 * Makes a fully qualified urs from provider params.
	 * 
	 * @param  string $title 
	 * @return array
	 */
	public static function url($resource, $id, $controller = 'movies')
	{
		if ($controller == 'movie')
		{
			$controller = 'movies';
		}

		$opt = App::make('Options');

		//get uri separator
		$s = $opt->getUriSeparator();

		//get uri case
		$case = $opt->getUriCase();

		//remove all non alpha numeric characters and replace all spaces
		//and double spaces with uri separator
		$resource = preg_replace('~[^\p{L}\p{N} ]++~u', '', $resource);
		$resource = str_replace('  ', $s, trim($resource));
		$resource = str_replace(' ', $s, trim($resource));


		$controller = Str::slug(trans("main.$controller"));

		if ($case && $case == 'lowercase')
		{
			return url(strtolower($controller . '/' . $id . $s . $resource));
		}		

		return url($controller . '/' . $id . $s . Str::slug($resource));
	}

	/**
	 * Checks if user has specific privilegies.
	 * 
	 * @param  string $for
	 * @return boolean
	 */
	public static function hasAccess($for)
	{
		$user = self::loggedInUser();

		if ($user && $user->hasAccess($for))
		{
			return true;
		}

		return false;
	}

	/**
	 * Gets the currently logged in user
	 * 
	 * @return User
	 */
	public static function loggedInUser()
	{
		$user = Sentry::getUser();

		if (isset($user)) 
			return $user;
		return null;
	}

	/**
	 * Shorthens the string to the specified lenght.
	 * 
	 * @param  string  $string 
	 * @param  integer $lenght
	 * @return string 
	 */
	public static function shrtString($string, $lenght=20)
	{
		$string = strip_tags($string);

		if (strlen($string) > $lenght)
		{
			$string = substr($string, 0, $lenght) . '...';
		}

		return preg_replace('/<img.*?\/>/', '', $string);
	}

	/**
	 * Constructs url to current logged in users profile.
	 * 
	 * @return string
	 */
	public static function profileUrl()
	{
		$user = self::loggedInUser();

		if ($user)
			return self::url($user->username, $user->id, 'users');
		else
			return null;
	}

	/**
	 * Returns small version of user avatar path.
	 * 
	 * @return string
	 */
	public static function smallAvatar()
	{
		$user = self::loggedInUser();

		if ($user)
		{
			if ($user->avatar)
				return asset(str_replace('.jpg', '.small.jpg', $user->avatar));
			else
				return asset('assets/images/no_user_icon.png');		
		}
		else
			return null;
	}

	/**
	 * Extracts resource id from sites absolute or relative url.
	 * 
	 * @param  string $string 
	 * @return string
	 */
	public static function extractId($string)
	{
		$result = preg_split('/[^a-z0-9]/i', $string);
	
		//check if url structure is valid: id-title
		if ( ! isset($result[0]) || ! preg_match('/[0-9]+/', $result[0]))
		{
			App::abort(404, 'Not valid url');
		}
		return $result[0];
	}

	/**
	 * Returns ids of all titles current user has added to watchlist.
	 * 
	 * @return array
	 */
	public static function getUserLists($name = 'watchlist')
	{
		if ($user = self::loggedInUser())
		{
			return User::fetchLists($user, $name);
		}		
	}

	/**
	 * Compile genres from db into a string acceptable
	 * by javascript responsible for filtering titles.
	 * 
	 * @param  string $genres
	 * @return string
	 */
	public static function genreFilter($genres)
	{
		$compiled = '';

		if(strlen($genres) > 3)
		{			
			if (strpos($genres, '|'))
			{
				$gnr = explode(' | ', $genres);

				foreach ($gnr as $k => $v)
				{
					$compiled .= '"' . trim($v) . '", ';
				}
				
				return '[' . rtrim($compiled, ', ') . ', "All"' . ']';
			}
			else
			{
				$gnr = explode(',', $genres);

				foreach ($gnr as $k => $v)
				{
					$compiled .= '"' . trim($v) . '", ';
				}

				return '[' . rtrim($compiled, ', ') . ']';
			}
		}
	}

	/**
	 * Compiles wikipedia url to a given string.
	 * 
	 * @param  string $string
	 * @return string
	 */
	public static function wikiUrl($string)
	{
		$base = 'http://en.wikipedia.org/wiki/'; //Sandra_Bullock

		return $base . str_replace(' ', '_', $string);
	}

	/**
	 * Sorts given collection by release date.
	 * 
	 * @param  Collection $col
	 * @return Collection
	 */
	public static function sortByYear($col)
	{
		$col->sort(function($a, $b)
    	{
	        preg_match('/(\d{4})/', $a->release_date ? $a->release_date : $a->year, $m);
	        $a = isset($m[0]) ? $m[0] : '';
	        
	        preg_match('/(\d{4})/', $b->release_date ? $b->release_date : $b->year, $m);
	        $b = isset($m[0]) ? $m[0] : '';

	        if ($a === $b) {
	            return 0;
	        }

	        return ($a < $b) ? 1 : -1;
   		});

   		return $col;
	}

	/**
	 * Checks if specified user is currently logged in user.
	 * 
	 * @param  string  $username
	 * @return boolean
	 */
	public static function isUser($username = null)
	{
		$user = self::loggedInUser();

		if ( ! $user || $user->username !== $username)
		{
			return false;
		}

		return true;
	}

    /**
     * Returns current data provider
     * 
     * @return string
     */
    public static function getProvider()
	{
    	if ( ! self::$provider)
    	{
    		$opt = App::make('Options');
    		self::$provider = $opt->getDataProvider();
    	}

    	return self::$provider;
    }

	/**
	 * Check if user has super access (all privilegies)
	 * 
	 * @return boolean
	 */
	public static function hasSuperAccess()
	{
		$user = Sentry::getUser();

		if (isset($user) && ! empty($user) && $user->hasAccess('super'))
		{
			return true;
		}
	}

	/**
	 * Extracts only 4 digit year from string.
	 * 
	 * @param  string $string
	 * @return string
	 */
	public static function extractYear($string)
	{
		preg_match('/\b\d{4}\b/', $string, $matches);

		return (isset($matches[0]) ? $matches[0] : Carbon::now()->addYear()->year);
	}

	/**
	 * Enlarges imdb image while keeping the aspect and crop.
	 *
	 * While the image will be responsive and scale to column lenght, giving
	 * it bigger size will make it sharper but also make it load slower.
	 * 
	 * @param  string $url
	 * @param  integer $s by how much to multiply image size
	 * @return string
	 */
	public static function size($url, $s = 4)
	{
		if ( ! strpos($url, '_V1_')) return $url;

		if ( ! empty($url))
		{
			if ($s === 'original')
			{
				return preg_replace('/_V1_.+?\.[a-zA-Z]{3}/', '.jpg', $url);
			}

			//grab only part of the string that represents img size and crop
			$numbers = explode('V1', $url);

			if ( ! isset($numbers[1]))
			{
				return null;
			}

			//multiply all size and crop numbers by 4
			$size = preg_replace_callback('/([0-9]+)/', function($m) use ($s)
			{
			   return ($m[0] * $s);

			}, $numbers[1]);
			//$size = preg_replace('/\d+/e', "$0 * $s", $numbers[1]);
			
			return $numbers[0] . 'V1' . $size;
		}
	}

	/**
	 * Makes images thumb path from full sized image path.
	 * 
	 * @param  string $url
	 * @return string
	 */
	public static function thumb($url)
	{	
		if (str_contains($url, 'http')) return $url;

		$path = asset(preg_replace('/imdb\/stills\/(.+?)\.jpg/', 'imdb/stills/$1.thumb.jpg', $url));

		if (@getimagesize($path))
		{
			return $path;
		}
		
		return asset($url);
	}


	/**
	 * Returns tmdb original size image url.
	 * 
	 * @param  string $url
	 * @return string 
	 */
	public static function original($url)
	{
		return preg_replace('/\/w[0-9]+\//', '/original/', $url);
	}

	public static function getSimilar(Title $title)
	{
		$genres = explode($title->genre);
	}


	/**
	 * Removes commas from imdb votes number and
	 * casts to integer.
	 * 
	 * @param  string $num
	 * @return int
	 */
	public static function imdbVotes($num)
	{
		$num = str_replace(',', '', (string) $num);

    	return (int) $num;
	}

	/**
	 * Extracts imdb title, actor or char id from url or other strings.
	 * 
	 * @param  string $url
	 * @return string
	 */
	public static function extract($url)
	{
		preg_match("/.*?([a-z]{2}[0-9]+)\/.*?/", $url, $m);

		return (isset($m[1]) ? $m[1] : '');
	}

    public static function createSitemap()
    {
        $contents = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">';
        $videos = Title::where('type', 'movie')->whereNotNull('video')->where('video', '<>', '')->orderBy('created_at', 'DESC')->get();
        foreach ($videos as $key => $video) {
            $contents = $contents . '<url>';
            $contents = $contents . '<loc>' . Helpers::url($video['title'], $video['id'], $video['type']) . '</loc>';
            $contents = $contents . '<video:video>';
            if (substr($video->poster, 0, 4) != 'http')
                $contents = $contents . '<video:thumbnail_loc>' . 'http://niter.tv/' . $video->poster . '</video:thumbnail_loc>';
            else
                $contents = $contents . '<video:thumbnail_loc>' . $video->poster . '</video:thumbnail_loc>';
            if (strpos($video['title'], '&') > 0) {
                $initial = array("&");
                $final   = array("&amp;");
                $video['title'] = str_replace($initial, $final, $video['title']);
            }
            $contents = $contents . '<video:title>![CDATA[' . substr($video['title'], 0, 100) . ']]</video:title>';
            $video['plot'] = substr($video['plot'], 0, 2048);
            if (strpos($video['plot'], '&') > 0) {
                $initial = array("&");
                $final   = array("&amp;");
                $video['plot'] = str_replace($initial, $final, $video['plot']);
            }
            $plot = 'Watch ' . $video['title'] . ' Online Free: ' . $video['plot'];
            $plot = substr($plot, 0, 2048);
            $contents = $contents . '<video:description>![CDATA[' . $plot . ']]</video:description>';
            if ($video['tmdb_rating'] > 0)
                $contents = $contents . '<video:rating>' . $video['tmdb_rating'] / 2 . '</video:rating>';
            $contents = $contents . '<video:family_friendly>yes</video:family_friendly>';
            $contents = $contents . "<video:player_loc allow_embed='yes' >" . url('movies/' . $video['id']) . "</video:player_loc>";
            $contents = $contents . '<video:duration>' . $video->runtime * 60 . '</video:duration>';
            $contents = $contents . '<video:publication_date>' . substr($video->created_at,0,10) . '</video:publication_date>';
            $contents = $contents . "<video:uploader info='http://niter.tv'></video:uploader>";
            $contents = $contents . '</video:video>';
            $contents = $contents . '</url>';
        }
        $contents = $contents . '</urlset>';

        File::put("sitemaps/sitemap.xml", $contents);
    }

}




// 	/**
// 	 * Compiles validator error messages into string.
// 	 * 
// 	 * @param  array $messages
// 	 * @return string
// 	 */
// 	public static function compileErrorsForAjax($messages)
// 	{
// 		$response = '';

// 	    foreach ($messages as $message)
// 	    {
// 	        $response .= $message . '<br>';
// 	    }

// 	    return $response;
// 	}

// 	/**
// 	 * Extracts specified season from eager loaded title.
// 	 * 
// 	 * @param  Title  $title
// 	 * @param  string/int $num
// 	 * @return Season
// 	 */
// 	public static function extractSeason(Title $title, $num)
// 	{
// 		foreach ($title->season as $k => $v)
// 		{
// 			if ($v->number == $num)
// 			{
// 				return $v;
// 			}
// 		}
// 	}


// 	/**
// 	 * Generates url to given season.
// 	 * 
// 	 * @param  model $season 
// 	 * @param  string $title 
// 	 * @return string
// 	 */
// 	public static function season($title, $season, $base = false)
// 	{
// 		$title = preg_replace('~[^\p{L}\p{N} ]++~u', '', $title);
// 		$title = str_replace(' ', '-', $title);

// 		if ( ! $base)
// 		{
// 			$url = Str::slug(trans('main.series')) . '/' . $season->title_id . "-$title" . "/seasons/{$season->number}";
// 		}

// 		//if true is passed as 3rd argument we'll generate url to series base seasons page
// 		else
// 		{
// 			$url = 'series/' . $season->title_id . "-$title" . "/seasons";
// 		}

// 		return url($url);
// 	}

	

