angular.module('xboxcountdown')
.config(config)
.run(run);
    
function config($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('games', {
      url: '/',
      template: '<games></games>'
    });

  $urlRouterProvider.otherwise("/");
}

function run() {
    console.log("xboxcountdown.com is running.")
}