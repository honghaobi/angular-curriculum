app.controller("NavController", function($scope, UserService){
  $scope.$watch( UserService.currentUser, function ( user ) {
    $scope.currentUser = UserService.currentUser();
  });
});

app.controller("SignupController", function($scope, UserService, $location){

  $scope.signup = function(user){
    UserService.signup(user).then(function(data){
      UserService.setCurrentUser(data);
      $location.path('/users');
    }).catch(function(data){
      $scope.errors = data.data;
    });
  };
});

app.controller("LoginController", function($scope, UserService, $location){
  $scope.login = function(user){
    UserService.login(user).then(function(data){
      UserService.setCurrentUser(data);
      $location.path('/users');
    }).catch(function(data){
      $scope.errors = data.data;
    });
  };
});

app.controller("UserController", function($scope, user){
  $scope.user = user.data;
});

app.controller("EditController", function($scope, $location, UserService, user, $window){
  $scope.user = user.data;
  $scope.editUser = function(user){
    UserService.editUser(user).then(function(data){
      $window.localStorage.setItem("user",JSON.stringify(data.data));
      $location.path('/users');
    }).catch(function(err){
      $scope.errors = "Looks like someone already has that username!";
    });
  };

  $scope.removeUser = function(user){
    UserService.removeUser(user).then(function(data){
      UserService.logout();
      $location.path('/login');
    }).catch(function(err){
      $scope.errors = err;
    });
  };
});

app.controller("UsersController", function($scope,currentUser,users){
  $scope.users = users;
  $scope.currentUser = currentUser;
});
