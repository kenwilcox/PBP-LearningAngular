(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['logger', 'dataservice'];
    /* @ngInject */
    function AdminController(logger, dataservice) {
        var vm = this;
        vm.title = 'Admin';
        vm.people = [];

        activate();

        function activate() {
            logger.info('Activated Admin View');
            //vm.people = dataservice.getPeople();
            //console.log(vm.people);
            dataservice.getPeople().then(function(data){
                vm.people = data;
            });
        }
    }
})();
