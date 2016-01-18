(function() {
    'use strict';

    angular
        .module('xboxcountdown')
        .directive('header', header);

    function header() {
        var directive = {
            bindToController: true,
            controller: HeaderController,
            controllerAs: 'header',
            restrict: 'E',
            templateUrl: 'client/header/header.html'
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
    function HeaderController () {
        
    }
})();