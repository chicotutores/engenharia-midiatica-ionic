/**
 * Created by douglas.nunes on 02/08/2016.
 */
app.directive('ionSearchBar', function($timeout) {
  return {
    restrict: 'E',
    replace: true,
    scope: { search: '=?filter' },
    link: function(scope, element, attrs) {
      scope.placeholder = attrs.placeholder || '';
      scope.search = {value: '', focus: false};
      if (attrs.class) {
        element.addClass(attrs.class);
      }

      // We need the actual input field to detect focus and blur
      var inputElement = element.find('input')[0];

      // This function is triggered when the user presses the `Cancel` button
      scope.cancelSearch = function() {
        // Manually trigger blur
        inputElement.blur();
        scope.search.value = '';
      };

      // When the user focuses the search bar
      angular.element(inputElement).bind('focus', function () {
        // We store the focus status in the model to show/hide the Cancel button
        scope.search.focus = 1;
        // Add a class to indicate focus to the search bar and the content area
        element.addClass('search-bar-focused');
        angular.element(document.querySelector('.has-search-bar')).addClass('search-bar-focused');
        // We need to call `$digest()` because we manually changed the model
        scope.$digest();
      });
      // When the user leaves the search bar
      angular.element(inputElement).bind('blur', function() {
        scope.search.focus = 0;
        element.removeClass('search-bar-focused');
        angular.element(document.querySelector('.has-search-bar')).removeClass('search-bar-focused');
      });
    },
    template: '<div class="search-bar bar bar-header item-input-inset">' +
    '<label class="item-input-wrapper">' +
    '<i class="icon ion-ios-search placeholder-icon"></i>' +
    '<input type="search" placeholder="" ng-model="search.value">' +
    '</label>' +
    '<button class="button button-clear button-positive" ng-show="search.focus" ng-click="cancelSearch()">' +
    'Cancel' +
    '</button>' +
    '</div>'
  };
});
