<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

//search
Route::get(Str::slug(trans('main.search')), 'SearchController@byQuery');
Route::get('typeahead/{query}', array('uses' => 'SearchController@typeAhead', 'as'   => 'typeahead'));
Route::get('typeahead-actor/{query}', array('uses' => 'SearchController@castTypeAhead', 'as'   => 'typeahead-cast'));

//homepage and footer
Route::get('/', array('as' => 'home', 'uses' => 'HomeController@index'));
Route::get(Str::slug(trans('main.privacyUrl')), array('uses' => 'HomeController@privacy', 'as' => 'privacy'));
Route::get(Str::slug(trans('main.tosUrl')), array('uses' => 'HomeController@tos', 'as' => 'tos'));
Route::get(Str::slug(trans('main.contactUrl')), array('uses' => 'HomeController@contact', 'as' => 'contact'));
Route::post(Str::slug(trans('main.contactUrl')), array('uses' => 'HomeController@submitContact', 'as' => 'submit.contact'));

//news 
Route::resource(Str::slug(trans('main.news')), 'NewsController');
Route::post('news/external', array('uses' => 'NewsController@updateFromExternal', 'as' => 'news.ext'));

//movies/series 
// Move this to MoviesController@updateMovieBrokenLink
// Route::get(Str::slug(trans('main.movies')) . '/updateMovieBrokenLink', 'MoviesController@updateMovieBrokenLink');
Route::get(Str::slug(trans('main.movies')) . '/updateMovieBrokenLink', function(){
        $id = Input::get('id');
        
        $movie = Title::find($id);
        $movie->reindexed = 'Broken Link';
        $respuesta = $movie->save();

        $rows[] = array ('id'   => '1', 'value' => trans('main.errorMessageBrokenLink'));
        return json_encode($rows);
    // return Input::get('id');
});
Route::resource(Str::slug(trans('main.movies')), 'MoviesController');

//lists(watchlist/favorites)
Route::controller('lists', 'ListsController');

//reviews
Route::resource(Str::slug(trans('main.movies')) . '.reviews', 'ReviewController', array('only' => array('store', 'destroy')));
Route::post(Str::slug(trans('main.movies')) . '/{title}/reviews', 'ReviewController@store');

//people
Route::resource(Str::slug(trans('main.people')), 'ActorController');
Route::get('actors', array('uses' => 'ActorController@index'));
Route::resource(Str::slug(trans('main.actors')), 'ActorController@index');
Route::get('people/{id}/edit-filmography', array('uses' => 'ActorController@editFilmo', 'as' => 'people.editFilmo'));
Route::post('people/unlink', array('uses' => 'ActorController@unlinkTitle', 'as' => 'people.unlink'));
Route::post('people/knownFor', array('uses' => 'ActorController@knownFor', 'as' => 'people.knownFor'));

//directors
Route::get('directors', array('uses' => 'DirectorController@showDirectors'));
Route::get('director/{id}', array('uses'=>'DirectorController@director'));


//internal
Route::group(array('prefix' => 'private'), function()
{
    Route::post('update-playing', array('uses' => 'TitleController@updatePlaying', 'as' => 'titles.updatePlaying'));
});

//login/logout 
Route::get(Str::slug(trans('main.login')), 'SessionController@create');
Route::get(Str::slug(trans('main.logout')), 'SessionController@logOut');
Route::get(Str::slug(trans('main.register')), 'UserController@create');
Route::resource('sessions', 'SessionController', array('only' => array('create', 'store')));
Route::get('forgot-password', 'UserController@requestPassReset');
Route::post('forgot-password', 'UserController@sendPasswordReset');
Route::get('reset-password/{code}', 'UserController@resetPassword');
Route::get('activate/{id}/{code}', 'UserController@activate');

//users
Route::post(Str::slug(trans('main.users')) . '/{username}/change-password', array('uses' => 'UserController@storeNewPass', 'as' => 'users.storeNewPass'));
Route::post(Str::slug(trans('main.users')) . '/{username}/avatar', array('uses' => 'UserController@avatar', 'as' => 'users.avatar'));
Route::post(Str::slug(trans('main.users')) . '/{username}/bg', array('uses' => 'UserController@background', 'as' => 'users.bg'));
Route::post(Str::slug(trans('main.users')) . '/{username}/assignGroup', 'UserController@assignToGroup');
Route::post(Str::slug(trans('main.users')) . '/makeMini', array('uses' => 'UserController@miniProfile', 'as' => 'users.mini-profile'));
Route::resource(Str::slug(trans('main.users')), 'UserController', array('except' => array('index')));
Route::group(array('before' => 'is.user'), function()
{
    Route::get(Str::slug(trans('main.users')) . '/{id}/favorites', array('uses' => 'UserController@showFavorites', 'as' => 'favorites'));
    Route::get(Str::slug(trans('main.users')) . '/{id}/reviews', array('uses' => 'UserController@showReviews', 'as' => 'reviews'));
    Route::get(Str::slug(trans('main.users')) . '/{id}/settings', array('uses' => 'UserController@edit', 'as' => 'settings'));
    Route::get(Str::slug(trans('main.users')) . '/{username}/ban','UserController@ban');
    Route::get(Str::slug(trans('main.users')) . '/{username}/unban', 'UserController@unban');
    Route::get(Str::slug(trans('main.users')) . '/{username}/suspend', 'UserController@suspend');
    Route::get(Str::slug(trans('main.users')) . '/{username}/change-password', array('uses' => 'UserController@changePassword', 'as' => 'changePass'));
    Route::get('UserController@search', 'UserController@search');
});

//dashboard
Route::controller('dashboard', 'DashboardController');

//internal
Route::group(array('prefix' => 'private'), function()
{
    Route::post('add-cast', 'TitleController@storeCast');
    Route::post('destroy-relation', 'TitleController@destroyCast');
    Route::post('edit-cast', 'TitleController@editCastInfo');
    Route::post('attach-image', 'TitleController@attachImage');
    Route::post('detach-image', 'TitleController@detachImage');
    Route::post('upload-image', 'TitleController@uploadImage');
    Route::post('update-reviews', 'TitleController@updateReviews');
    Route::post('scrape-fully', array('uses' => 'TitleController@scrapeFully', 'as' => 'titles.scrapeFully'));
    Route::post('update-playing', array('uses' => 'TitleController@updatePlaying', 'as' => 'titles.updatePlaying'));
});

//RSS
Route::group(array('prefix' => Str::slug(trans('feed.feed'))), function()
{
    Route::get(Str::slug(trans('feed.theatersUrl')), array('uses' => 'RssController@nowInTheaters', 'as' => 'feed.theaters'));
    Route::get(Str::slug(trans('feed.newsUrl')), array('uses' => 'RssController@news', 'as' => 'feed.news'));
});

Route::get('sitemap', function(){
    Helpers::createSitemap();
    return Redirect::to("/");
});