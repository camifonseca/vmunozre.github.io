angular.module('app', [])
  .controller('Controller', function() {
    var vm = this;
    vm.tagActual = ' ';
    vm.tagsUsados = [];
    vm.getTag = function(){
      return vm.tagActual;
    };
    vm.setTag = function(tag){
      vm.tagActual = tag;
      location.href = "/tag";
      console.log("CARACULO");
    };
    vm.addTagUsado = function(tag){
      vm.tagsUsados.push(tag);
    }
    vm.getTagsUsados = function(){
      return vm.tagsUsados;
    }
  });
