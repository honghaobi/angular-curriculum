angular.module('app').directive('pokeDirective', pokeDirective);

function pokeDirective() {
  return {
    templateUrl: 'pokedirective.html'
  };
};
