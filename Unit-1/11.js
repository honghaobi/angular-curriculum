var app = angular.module('reddit', ['ngAnimate']);
app.controller('MyController', function($scope, $http) {
  $scope.view = {};
  $scope.newComment = {};
  $scope.view.posts = [
    {
      title: "Monkey costumes are totally in this season",
      author: "Linus Lane",
      image: "https://scontent-lga3-1.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/11809944_1676694042554573_495250395_n.jpg",
      description: "Hey, hey, we're the Monkees, and people say we monkey around. But we're too busy singing to put anybody down. We're just tryin' to be friendly, come and watch us sing and play. We're the young gneration, and we've got something to say.",
      date: moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
      votes: 10,
      comments: [
        {
          author: "Matt",
          text: "Cool costume."
        }
      ]
    }, {
      title: "2016 Baseball",
      author: "Andrew Baggarly",
      image: "https://punkyg.files.wordpress.com/2012/06/sf-giants-matches-1966.jpg",
      description: "The Giants win it all in even years. Next year is an even year. Therefore, the Giants will win it all next year.",
      date: moment().subtract(2, 'hours').calendar(),
      votes: 2,
      comments: [
        {
          author: "Matt",
          text: "Sound reasoning!"
        }, {
          author: "Billy Bean",
          text: "Oakland rulez"
        }
      ]
    }, {
      title: "New Years",
      author: "Ryan Seacrest",
      image: "https://tribzap2it.files.wordpress.com/2012/12/ryan-seacrest-new-years-rockin-eve-400.jpg",
      description: "Come hang out with me on New Year's Eve!",
      date: moment("20151010","YYYYMMDD").calendar(),
      votes: -3,
      comments: []
    }, {
      title: "XKCD",
      author: "Randall Munroe",
      image: "http://www.userlogos.org/files/logos/Mafia_Penguin/xkcdLogo.png",
      description: "rofl. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum excepturi ad totam autem dignissimos molestiae a consequatur cupiditate, eum enim. Magni expedita, nam in eligendi sed totam fugiat numquam consequatur.",
      date: moment().subtract(14, 'days').calendar(),
      votes: 2,
      comments: []
    }
  ];
  $scope.addPost = function(post) {
    post.date = moment().calendar();
    post.votes = 0;
    post.comments = [];
    $scope.view.posts.push(post);
    $scope.newPost = {};
  };

  $scope.addComment = function(post, comment) {
    if (comment.author && comment.text) {
      post.comments.push(comment);
      $scope.newComment = {};
    }
  };

  $scope.checkForError = function(field) {
    return field.$invalid && field.$touched;
  };

  //Never use Jquery!!!
  // $.get('https://www.reddit.com/.json').done(function(result){
  //   $scope.redditPosts = result.data.children;
  //   console.log(result);
  //   $scope.$apply();
  // });

  $http.get('https://www.reddit.com/.json').then(function(result){
    var posts = result.data.data.children;
    console.log(posts);
    for (var i = 0; i < posts.length; i++) {
      $scope.view.posts.push({
        title: posts[i].data.title,
        author: posts[i].data.author,
        image: posts[i].data.thumbnail,
        description: 'yolo',
        date: posts[i].data.created_utc,
        votes: posts[i].data.ups,
        comments: []
      })
    }
  });

  //watched search bar input
  // $scope.$watch("view.search", function(newVal, oldVal){
  //   console.log('changed from', newVal, 'to', oldVal);
  // });

});
