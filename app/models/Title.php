<?php

class Title extends Eloquent {
    /**
     * Cacher instance.
     * 
     * @var Lib\Services\Cache\Cacher
     */
    private $cache;

    /**
     * Options instace.
     * 
     * @var Lib\Services\Options\Options
     */
    private $options;

    public function __construct()
    {
        $this->cache = App::make('Lib\Services\Cache\Cacher');
        $this->options = App::make('Options');
    }

    /**
     * Get the year of the oldest movie.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return string
     */
    public static function getYearOldest()
    {
        if (Helpers::hasAccess('titles.create'))
            $year = Title::min('year');
        else
            $year = Title::where('type', '=', 'movie')
                         ->whereNotNull('video')
                         ->where('video','<>','')
                         ->whereNotNull('poster')
                         ->where('poster','<>','')
                         ->whereNotNull('background')
                         ->where('background','<>','')                         
                         ->min('year');                            
        return $year;
    }

    /**
     * Get the year of the newest movie.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return string
     */
    public static function getYearNewest()
    {
        if (Helpers::hasAccess('titles.create'))
            $year = Title::max('year');
        else
            $year = Title::where('type', '=', 'movie')
                         ->whereNotNull('video')
                         ->where('video','<>','')
                         ->whereNotNull('poster')
                         ->where('poster','<>','')
                         ->whereNotNull('background')
                         ->where('background','<>','')
                         ->max('year');                            
        return $year;
    }

    /**
     * Get the name of the field to sort by.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @param  string $sortBy
     * @return string
     */
    public static function sortByString($sortBy)
    {
        switch ($sortBy) {
            case 'A-Z':
                $field =  'title';
                $direction = 'asc';
                break;
            case 'rating':
                $field =  'tmdb_rating';
                $direction = 'desc';
                break;
            case 'lastAdded':
                $field =  'created_at';
                $direction = 'desc';
                break;
            case 'releaseDate':
                $field =  'release_date';
                $direction = 'desc';
                break;
        }

        return array('field' => $field, 'direction' => $direction);      
    }

    /**
     * On-line movies query scope.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return collection
     */
    public function scopeOnline($query)
    {
        $fet = $query->whereNotNull('video')
                     ->where('video','<>','')
                     ->whereNotNull('poster')
                     ->where('poster','<>','')
                     ->whereNotNull('background')
                     ->where('background','<>','');

        return $fet;      
    }

    /**
     * Movies by Genre query scope.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @param  string $genres
     * @return collection
     */
    public function scopeGenres($query, $id, $genre = 'all')
    {
        $fet = $query;

        if ($genre != 'all')
        {
            $fet = $query->where('genre', 'Like', '%' . $genre . '%')->whereNotNull('video')->where('video','<>','');
        }

        if ($this->options->getDataProvider() == 'db' || ! $this->options->autoUpdateData())
        {
           return $fet;
        }

        if ($fet->isEmpty() || $fet->first()->updated_at->addDay() <= Carbon::now())
        {
            $fet = $this->updateFeatured();
        }

        return $fet;      
    }

    /**
     * Movies by Relevance query scope.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @param  string $genres
     * @return collection
     */
    public function scopeRelevance($query, $id, $relevance)
    {
        $fet = $query;

        if ($relevance == 'releases')
        {
            $fet = $query->where('releases', 1)->whereNotNull('video')->where('video','<>','');
        }
        else if ($relevance == 'reindexed')
        {
            $fet = $query->where('reindexed', 'Reindexed')->whereNotNull('video')->where('video','<>','');
        }
        else if ($relevance == 'featured')
        {
            $fet = $query->where('featured', 1)->whereNotNull('video')->where('video','<>','');
        }
        else if ($relevance == 'popular')
        {
            $fet = $query->where('created_at', '>', DB::raw('date_sub(now(), INTERVAL 90 DAY)'))->whereNotNull('video')->where('video','<>','')->orderBy('tmdb_popularity', 'desc');
        }
        else
        {
            $fet = $query->whereNotNull('video')->where('video','<>','');
        }
        return $fet;      
    }

    /**
     * Movies by Range of Years query scope.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return collection
     */
    public function scopeYearsRange($query, $id, $yearFrom, $yearTo)
    {
        $fet = $query;
        if ($yearFrom && $yearTo)
            $fet = $fet->whereBetween('year', array($yearFrom, $yearTo))->whereNotNull('video')->where('video','<>','');

        if ($this->options->getDataProvider() == 'db' || ! $this->options->autoUpdateData())
        {
           return $fet;
        }

        if ($fet->isEmpty() || $fet->first()->updated_at->addDay() <= Carbon::now())
        {
            $fet = $this->updateFeatured();
        }

        return $fet;      
    }

    /**
     * Featured movies query scope.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return collection
     */
    public function scopeFeatured($query)
    {
        $fet = $query->where('featured', 1)->whereNotNull('video')->where('video','<>','');

        if ($this->options->getDataProvider() == 'db' || ! $this->options->autoUpdateData())
        {
           return $fet;
        }

        if ($fet->isEmpty() || $fet->first()->updated_at->addDay() <= Carbon::now())
        {
            $fet = $this->updateFeatured();
        }

        return $fet;      
    }

    /**
     * Released movies query scope.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return collection
     */
    public function scopeReleases($query)
    {
        $fet = $query->where('releases', 1)->whereNotNull('video')->where('video','<>','');

        return $fet;
    }

    /**
     * Most Popular movies query scope.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return collection
     */
    public function scopeMostPopular($query)
    {
        $fet = $query->where('created_at', '>', DB::raw('date_sub(now(), INTERVAL 90 DAY)'))->whereNotNull('video')->where('video','<>','')->orderBy('tmdb_popularity', 'desc');

        return $fet;      
    }

    /**
     * Last Added movies query scope.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return collection
     */
    public function scopeLastAdded($query)
    {
        $fet = $query->where('featured', 0)->where('releases', 0)->whereNotNull('video')->where('video','<>','');

        return $fet;      
    }

    /**
     * Reindexed movies query scope.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return collection
     */
    public function scopeReindexed($query)
    {
        $fet = $query->where('reindexed', 'Reindexed')->whereNotNull('video')->where('video','<>','');

        return $fet;
    }

    /**
     * Fetches movies that are now playing in theaters.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return collection
     */
    public function scopeNowPlaying($query)
    {
        $order = Helpers::getOrdering();
        $playing = $query->where('now_playing', 1)->whereNotNull('video')->where('video','<>','')->limit(10)->orderBy($order, 'desc')->get();

        if ($this->options->getDataProvider() == 'db' || ! $this->options->autoUpdateData())
        {
            return $playing;
        }

        if ($playing->isEmpty() || $playing->first()->updated_at->addDays(2) <= Carbon::now())
        {
            $playing = $this->updatePlaying($order);
        }

        return $playing;
    }

    /**
     * Fetches title with relations by id.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query
     * @param  Int $id
     * @return collection
     */
    public function scopeById($query, $id)
    {
        return $query->with('Actor', 'Image', 'Director', 'Writer', 'Review', 'Season')->findOrFail($id);
    }

    public function actor()
    {
        return $this->belongsToMany('Actor', 'actors_titles')->withPivot('known_for', 'char_name', 'id');

    }

    public function image()
    {
        return $this->hasMany('Image')->orderBy('created_at', 'asc');
    }

    public function director()
    {
       return $this->belongsToMany('Director', 'directors_titles');
    }

    public function writer()
    {
       return $this->belongsToMany('Writer', 'writers_titles');
    }

    public function review()
    {
       return $this->hasMany('Review');
    }

    public function season()
    {
        return $this->hasMany('Season');
    }

    /**
     * Performs like query by user specified search term.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query
     * @param  string $q
     * @return collection
     */
    public function scopeSearch($query, $q)
    {
        return $query->where('title', 'LIKE', $q)
                     ->select('id', 'imdb_id', 'tmdb_id', 'title', 'poster', 'type')
                     ->whereNotNull('video')
                     ->where('video','<>','')
                     ->groupBy('title')
                     ->orderBy(Helpers::getOrdering(), 'desc')
                     ->get();
    }

    /**
     * Format genre so it can be used as a filter for grid.
     * 
     * @param  string $value 
     * @return string
     */
    public function getGenreAttribute($value)
    {
       $genre = str_replace(',', ' | ', $value);

       return trim($genre, ' | ');
    }

     /**
     * Returns default image if title doesnt have poster.
     * 
     * @param  string $value 
     * @return string
     */
    public function getPosterAttribute($value)
    {
        if ( ! $value)
        {
            return 'assets/images/imdbnoimage.jpg';
        }

        if ( ! str_contains($value, 'http') && ! str_contains($value, 'imdb'))
        {
            return "imdb/posters/$value";
        }

        return $value;
    }

    /**
     * Formats release date before returning.
     * 
     * @param  string $value 
     * @return string
     */
    public function getReleaseDateAttribute($value)
    {
        //format release date if not already formatted
        if ( ! preg_match('/[a-z]|[A-Z]|-/', $value) && strlen($value) > 4)
        {
            return Carbon::createFromFormat('Y-m-d', $value)->toFormattedDateString();
        }

        return $value;
    }

    public function getRatingAttribute()
    {
        $count = 0;
        $sum = 0;

        $imdb_rating = $this->attributes['imdb_rating'];
        $tmdb_rating = $this->attributes['tmdb_rating'];
        $mc_critic_score = $this->attributes['mc_critic_score'];

        if ($imdb_rating >=0)
        {
            $sum += $imdb_rating;
            $count++;
        }
        if ($tmdb_rating >=0)
        {
            $sum += $tmdb_rating;
            $count++;
        }
        if ($mc_critic_score >=0)
        {
            $sum += $mc_critic_score;
            $count++;
        }

        if ($count>0)
            $avg = $sum/$count;
        else
            $avg = null;

        return $avg;
    }

    public function user()
    {
        return $this->belongsToMany('User', 'users_titles')->withPivot('favorite', 'watchlist');
    }

/* 2014-07-31 genre */
    public function scopeGenres10($query)
    {
        $order = Helpers::getOrdering();
        $genre10 = $query->where('now_playing', 1)->limit(10)->orderBy($order, 'desc')->get();

        if ($this->options->getDataProvider() == 'db' || ! $this->options->autoUpdateData())
        {
            return $genre10;
        }

        if ($genre10->isEmpty() || $genre10->first()->updated_at->addDays(2) <= Carbon::now())
        {
            $genre10 = $this->updatePlaying($order);
        }

        return $genre10;
    }

    public function scopeShow2014to2008($query)
    {       
        return $query->where('created_at', '>', 2008)
                     ->where('created_at', '<', 2014)->get();
    }

    public function scopeRelease($query)
    {
        $release = Title::orderBy('created_at', 'DESC')->get();
        return $release;
    }

    public function scopePopularity($query)
    {
        return $query->where('tmdb_popularity', 'DESC')->get();
    }
    
    /**
     * Fetches latest title.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query
     * @param  Int $id
     * @return collection
     */
    public function scopeLatest($query)
    {
        return $query->where('poster', '>', 0)
                     ->where('fully_scraped', '=', 1)
                     ->where('release_date', '<', Carbon::now()->toDateString())
                     ->has('review', '>', 5)
                     ->orderBy('year', 'desc')
                     ->limit(1)
                     ->with('Review')
                     ->first();
    }


     /**
     * Fetches all titles matching $id.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query
     * @param  Int $id
     * @return collection
     */
    public function scopeByTempId($query, $id, $order = null)
    {
        if ($order)
        {
            return $query->where('temp_id', '=', $id)->orderBy($order, 'desc')->get();
        }

        return $query->where('temp_id', '=', $id)->get();      
    }
  
    /**
     * Fetches all information about series.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return collection
     */
    public function scopeSeries($query, $id)
    {
        return $query->where('id', '=', $id)->with('Season.Episode')->first();
    }

    /**
     * Fetches all upcoming titles.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return collection
     */
    public function scopeUpcoming($query)
    {
        return $query->where('release_date', '>', Carbon::now()->toDateString())->limit(6)->get();
    }



    /**
     * Returns paginated titles for movie page index.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return collection
     */
    public function scopeMovieIndex($query, $perPage = 36)
    {
        return $query->where('type', '=', 'movie')
                     ->orderBy(Helpers::getOrdering(), 'desc')
                     ->paginate($perPage);
    }

     /**
     * Returns paginated titles for series page index.
     * 
     * @param  Illuminate\Database\Eloquent\Builder $query 
     * @return collection
     */
    public function scopeSeriesIndex($query, $perPage = 36)
    {
        return $query->where('type', '=', 'series')
                     ->orderBy(Helpers::getOrdering(), 'desc')
                     ->paginate($perPage);
    }

    /**
     * Updates featured movies from external sources.
     * 
     * @return Collection
     */
    public function updateFeatured()
    {
        $s = App::make('Lib\Services\Scraping\Scraper');
        $s->featured();

        $fet = $this->where('featured', 1)->limit(8)->orderBy('created_at', 'asc')->get();

        return $fet;
    }

    /**
     * Updates featured movies from external sources.
     * 
     * @return Collection
     */
    public function updatePlaying($order = 'created_at')
    {
        $s = App::make('Lib\Services\Scraping\Scraper');
        $s->updateNowPlaying();

        $playing = $this->where('now_playing', 1)->limit(10)->orderBy($order, 'desc')->get();

        return $playing;
    }

    /**
     * Updates titles information from tmdb or imdb.
     * 
     * @return void
     */
    public function updateFromExternal()
    {
        $title = App::make('Lib\Repository\Title\TitleRepositoryInterface');
        $title->getCompleteTitle($this);

        return true;
    }
}


