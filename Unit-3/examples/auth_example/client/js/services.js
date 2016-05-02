app.service("UserService", function($http, $window){
  var user = {}
  return {
    currentUser: function () {
      return user;
    },
    login: function(user){
      var service = this;
      return $http.post('/api/login', user)
    },
    setFromLocal: function () {
      user = JSON.parse($window.localStorage.getItem("user"));
      console.log('just setFromLocal', user);
    },
    logout: function(){
      user = null;
      console.log('just logged out', user);
      $window.localStorage.clear();
    },
    signup: function(user){
      return $http.post('/api/signup', user);
    },
    setCurrentUser: function(data){
      user = data.data.user
      console.log('just setCurrentUser', user);
      $window.localStorage.setItem("token",data.data.token);
      $window.localStorage.setItem("user",JSON.stringify(data.data.user));
    },
    getCurrentUser: function(){
      return JSON.parse($window.localStorage.getItem("user"));
    },
    getAllUsers: function(){
      return $http.get("/api/users/");
    },
    getSingleUser: function(id){
      return $http.get("/api/users/" + id);
    },
    editUser: function(user){
      return $http.put("/api/users/" + user.id, user);
    },
    removeUser: function(user){
      return $http.delete("/api/users/" + user.id);
    }
  };
});
