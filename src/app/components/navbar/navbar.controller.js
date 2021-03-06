'use strict';

angular.module('bhendi')
        .controller('NavbarCtrl', function ($scope, $mdSidenav, $state, $mdBottomSheet, $q, $log, $mdToast) {
            $scope.notify = function (msg) {
                var toast = $mdToast.simple()
                        .content(msg)
                        .action('OK')
                        .highlightAction(false)
                        .position('bottom left');
                $mdToast.show(toast);
            };
            $scope.date = new Date();
            /**
             * First hide the bottomsheet IF visible, then
             * hide or Show the 'left' sideNav area
             */
            $scope.toggleMenu = function () {
                var pending = $mdBottomSheet.hide() || $q.when(true);

                pending.then(function () {
                    $mdSidenav('left').toggle();
                });
            };

            $scope.menu =
                    [
                        {
                            link: 'home.events',
                            title: 'Questions'

                        },
                        {
                            link: 'home.schedule',
                            title: 'Time Table'

                        },
                        {
                            link: 'home.board',
                            title: 'Bulletin Board'
                        }
                    ];

            $scope.goto = function (state) {
                $log.debug(state);
                $state.go(state.link);
            };
        });
