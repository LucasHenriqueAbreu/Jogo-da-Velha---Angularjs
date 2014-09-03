var app = angular.module('app', ['ngDialog']);

app.controller('Controller', ['$scope', '$rootScope', 'ngDialog',
    function (scope, rootScope,ngDialog) {
      scope.winner = "";
      scope.msgPlayer = "Você vai jogar com a Bolinha!";
      scope.player = 1;
      scope.namePlayer1;
      scope.namePlayer2;
      scope.name;
      scope.perm;

      scope.casasIguais = function(a, b, c){
          scope.casaA = document.getElementById("casa"+a);
          scope.casaB = document.getElementById("casa"+b);
          scope.casaC = document.getElementById("casa"+c);
          scope.bgA = document.getElementById("casa"+a).className;
          scope.bgB = document.getElementById("casa"+b).className;
          scope.bgC = document.getElementById("casa"+c).className;
          if( (scope.bgA == scope.bgB) && (scope.bgB == scope.bgC) && (scope.bgA != "none" && scope.bgA != "")){
              if(scope.bgA.className == "bolinha")
                  winner = "1";
              else
                  winner = "2";
              return true;
          }
          else{
              return false;
          }
      }

      scope.verificarFimDeJogo = function(){
          if( scope.casasIguais(1, 2, 3) || scope.casasIguais(4, 5, 6) || scope.casasIguais(7, 8, 9) ||
              scope.casasIguais(1, 4, 7) || scope.casasIguais(2, 5, 8) || scope.casasIguais(3, 6, 9) ||
              scope.casasIguais(1, 5, 9) || scope.casasIguais(3, 5, 7)
              ){
              alert("o winner é:"+scope.winner);
              scope.clearTable();
          } else {
            if(scope.verificarEmpate()){
              alert("Ocorreu empate");
              scope.clearTable();
            }
          }
      }

      scope.click = function(casa){
          var casa = document.getElementById(casa);
            if (!casa.className) {
              if(scope.player == 1){
                casa.className = "bolinha";
              } else {
                casa.className = "xis";
              }
            scope.player = (scope.player == 1? 2:1);  
            scope.verificarFimDeJogo();
          }
      }

      scope.clearTable = function(){
         for (var i = 9; i > 0; i--) {
              var casa = document.getElementById('casa'+i).className = "";
          };

      }
      scope.verificarEmpate = function(){
        var contador = 0;
         for (var i = 9; i > 0; i--) {
          var casa = document.getElementById('casa'+i)
            if (!casa.className == ""){
                contador ++;  
            } 
          }
          if (contador == 9){
            return true;
          } else {
            return false;
          }
       }

       scope.submitPlayer = function(player, name){
          if (player == 1) {
             scope.namePlayer1 = name;
             scope.name = "";
             scope.player = 2;
          } else {
             scope.msgPlayer = "Você vai jogar com o xis!" 
             scope.namePlayer2 = name;
             scope.close();
          }
       }
}]);
