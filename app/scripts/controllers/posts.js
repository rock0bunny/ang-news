'use strict';

app.controller('PostsCtrl', function ($scope, Post){
    $scope.post = {url: 'http://', title: ''};
    $scope.posts = Post.get();

    $scope.submitPost = function() {
        Post.save($scope.post, function(ref){
            $scope.posts[ref.name] = $scope.post;
            $scope.post = {url: 'http://', title: ''};
        });
    };

    $scope.deletePost = function(postId) {
        Post.delete({id: postId}, function(){
            delete $scope.posts[postId];
        });
    };
});
