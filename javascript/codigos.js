//funcion que obtiene el indice de un array cuando se utiliza Handlebars
var helpers = function() {
    var index = 0;
    Handlebars.registerHelper('index', function() {
      index++;
      return index;
    });
    Handlebars.registerHelper('reset_index', function() {
      index = 0;
    })
}();