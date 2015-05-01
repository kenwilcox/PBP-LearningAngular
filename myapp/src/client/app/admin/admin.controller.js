(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['logger', 'dataservice', '$scope'];
    /* @ngInject */
    function AdminController(logger, dataservice, $scope) {
        //var vm = this;
        $scope.title = 'Admin';
        $scope.people = [];

        activate();

        function activate() {
            logger.info('Activated Admin View');
            //vm.people = dataservice.getPeople();
            //console.log(vm.people);
            dataservice.getPeople().then(function(data){
                $scope.people = data;
            });
        }
    }
})();
