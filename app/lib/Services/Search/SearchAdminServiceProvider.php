<?php namespace Lib\Services\Search;
 
use DB, Exception, App;
use Illuminate\Support\ServiceProvider;
use Helpers;
 
class SearchAdminServiceProvider extends ServiceProvider
{
    public function register()
    {

        //ask for search provider from options singleton
        $options = App::make('Options');
        $provider = $options->getSearchProvider();

        //get correct implementation namespace
        if ($provider === 'imdb')
        {
            $impl = 'Lib\Services\Search\ImdbSearchAdmin';
        }
        elseif ($provider === 'tmdb')
        {
            $impl = 'Lib\Repository\Data\TmdbDataAdmin';
        }
        elseif ($provider === 'db')
        {
            $impl = 'Lib\Services\Search\DbSearchAdmin';
        }
        else
        {
            $impl = 'Lib\Services\Search\ImdbSearchAdmin';
        }

        $this->app->bind(
             'Lib\Services\Search\SearchAdminProviderInterface', $impl
        );
    }
 
}