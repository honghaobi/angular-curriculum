var app = angular.module('mouseOverDirectiveApp', [])

app.directive('gsChangeBackground', function() {
  return {
    link: function(scope, element, attrs) {

      var oldColor = element.css('background-color');
      var newColor = attrs.hooverColor;
      var newTextColor = attrs.hooverTextColor;
      console.log('element', element);
      console.log('attrs', attrs);

      element.on('mouseenter', function(event) {
        element.css('background-color', newColor);
        element.css('color', newTextColor);
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
        element.css('color', 'white');
      })
    }
  };
});
