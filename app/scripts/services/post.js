'use strict';

app.factory('Post', function ($resource) {
    return $resource('https://angrock.firebaseio.com/posts/:id.json');
});