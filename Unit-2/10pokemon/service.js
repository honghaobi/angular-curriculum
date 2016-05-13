(function() {
    angular
        .module("app")
        .service("pokeService", pokeService);

    function pokeService($http) {

        var baseUrl = 'http://pokeapi.co/';
        var pokemonInfoPath = 'api/v1/pokemon/';
        this.catchEm = function() {
          var randomPokemon = Math.floor(Math.random() * 543);
          var pokeData = {};
          var fullUrl = baseUrl + pokemonInfoPath + randomPokemon + '/';
          return $http.get(fullUrl).then(function(baseData) {
            pokeData = baseData.data;
            return pokeData
          }).then(function(pokeData){
            var uri = pokeData.abilities[0].resource_uri;
            return $http.get(baseUrl + uri).then(function(abilityData) {
              pokeData.abilities[0] = abilityData.data;
              return pokeData;
            });
          }).then(function(pokeData){
            var uri = pokeData.moves[0].resource_uri;
            return $http.get(baseUrl + uri).then(function(moveData) {
              pokeData.moves[0] = moveData.data;
              return pokeData;
            });
          }).then(function(pokeData){
            var uri = pokeData.sprites[0].resource_uri;
            return $http.get(baseUrl + uri).then(function(spritesData) {
              pokeData.spritesImg = "http://pokeapi.co" + spritesData.data.image;
              return pokeData;
            });
          });
        };
      }
})();
