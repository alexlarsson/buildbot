class Apps {
    constructor($scope, $log, dataService, resultsService, bbSettingsService, $stateParams,
        $location, dataGrouperService, $rootScope, $filter) {
        // make resultsService utilities available in the template
        _.mixin($scope, resultsService);

        const data = dataService.open().closeOnDestroy($scope);
        data.getBuilders('Builds').onNew = function(builder) {
            $scope.mainBuilder = builder;
            if ($stateParams.numbuilds != null) {
                $scope.numbuilds = +$stateParams.numbuilds;
            }

            $scope.builds = builder.getBuilds({
                flathub_build_type__eq: 1, // Official
                property: ["owners", "unique-apps"],
                order: ['flathub_name', '-number']
            });
        };
    }
}

angular.module('app')
.controller('appsController', ['$scope', '$log', 'dataService', 'resultsService', 'bbSettingsService', '$stateParams', '$location', 'dataGrouperService', '$rootScope', '$filter', Apps]);
