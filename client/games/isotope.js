(function() {
    'use strict';

    angular
        .module('xboxcountdown')
        .directive('isotope', isotope);

    function isotope() {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;
        
        function link(scope, element, attrs) {
            $('#container').isotope('insert', element);
        }
    }
})();