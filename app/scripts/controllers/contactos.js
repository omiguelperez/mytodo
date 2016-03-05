'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:ContactosCtrl
 * @description
 * # ContactosCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
  .controller('ContactosCtrl', function ($scope) {
    $scope.Contactos = [
       {nombre: "Ricardo", telefono: "2342344"},
       {nombre: "Nafer", telefono: "34534"},
       {nombre: "Jose", telefono: "5345435"},
       {nombre: "Alfredo", telefono: "86578"}
    ]
  });
