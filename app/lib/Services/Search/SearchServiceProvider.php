<?php namespace Lib\Services\Search;
 
use DB, Exception, App;
use Illuminate\Support\ServiceProvider;
use Helpers;
 
class SearchServiceProvider extends ServiceProvider
{
    public function register()
    {

        //ask for search provider from options singleton

        $impl = 'Lib\Services\Search\DbSearch';
        $this->app->bind(
             'Lib\Services\Search\SearchProviderInterface', $impl
        );
    }
 
}