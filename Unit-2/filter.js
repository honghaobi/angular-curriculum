angular.module("app", [])

.filter('kebab', function(){
  return function (input) {
    return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }
})

.filter('pigLatin', function(){
  return function (input) {
    return input.replace(/\b(\w)(\w+)\b/g, '$2$1ay');
  }
})

.filter('redact', function(){
  return function (input, replace) {
    return input.replace(input.match(replace),'REDACTED');
  }
});
