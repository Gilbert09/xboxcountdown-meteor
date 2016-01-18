(function() {
    'use strict';

    angular
        .module('xboxcountdown')
        .directive('games', games);

    function games() {
        var directive = {
            bindToController: true,
            controller: GamesController,
            controllerAs: 'gamesController',
            link: link,
            restrict: 'E',
            templateUrl: 'client/games/game.html'
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
    function GamesController ($scope) {
        $('#container').isotope({ 
            itemSelector: '.item' 
        });
        
        $scope.helpers({
            games: () => {
                return Games.find({});
            }
        });
    }
})();