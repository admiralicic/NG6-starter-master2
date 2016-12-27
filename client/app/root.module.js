import 'jquery';
import 'bootstrap-loader';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import Common from './common/common';
// import Components from './components/components';
import AppComponent from './root.component';
import 'normalize.css';

angular.module('root', [
  uiRouter,
  // Common,
  // Components
])
  .component('root', AppComponent)
  .config(($locationProvider, $stateProvider) => {
    "ngInject";


    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  });

