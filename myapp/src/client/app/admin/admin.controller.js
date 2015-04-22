(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['logger'];
    /* @ngInject */
    function AdminController(logger) {
        var vm = this;
        vm.title = 'Admin';
        vm.people = [{name:'john'}, {name:'jeff'}, {name:'barbarosa'}, {name:'ken'}];

        activate();

        function activate() {
            logger.info('Activated Admin View');
        }
    }
})();
