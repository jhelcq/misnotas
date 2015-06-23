//forEach para los modelos de una coleccion
_.each( curso_materiasConCurso, function(element, index, list) {
	console.log(curso_materiasConCurso.at(index));
}, [context]);

//en la sig intruccion al filtrar y obtener todos aquellos modelos de nombre_collection
//cuyo cid es distinto de algunCid en el navegador(Aurora) podemos observar 
//que los elementos del array(supuestamente) 'a' estan progidos(con un grafico candado)
var a= _.filter(nombre_collection, function( element, index, list ) {
  return nombre_collection.at(index).cid!= algunCid ;
}, nombre_collection);
