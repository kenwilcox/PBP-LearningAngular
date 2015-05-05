(function () {
    'use strict';

    angular
        .module('app.users')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['logger', 'dataservice'];
    /* @ngInject */
    function UsersController(logger, dataservice) {
        var vm = this;
        vm.title = 'Users';
        vm.people = [];

        activate();

        function activate() {
            logger.info('Activated Users View');
            //vm.people = dataservice.getPeople();
            //console.log(vm.people);
            dataservice.getPeople().then(function(data){
                vm.people = data;
            });
        }
    }
})();
