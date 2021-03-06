var sandwich = function (x, y, z){
    var sandwich = [];
    var cuboBucato = [];
    var dim = 1/3;
    cuboBucato.push (SIMPLEX_GRID([[-(2*dim),dim],[-(2*dim),dim],[(2*dim),dim]])); // faccia est--up
    cuboBucato.push (SIMPLEX_GRID([[-(2*dim),dim],[0,dim],[(2*dim),dim]]));  // faccia est--down
    cuboBucato.push (SIMPLEX_GRID([[-(2*dim),dim],[(2*dim),dim],[-(2*dim),dim]])); // faccia est-sud
    cuboBucato.push (SIMPLEX_GRID([[-(2*dim),dim],[(2*dim),dim],[0,dim]]));  // faccia est-nord
    cuboBucato.push (SIMPLEX_GRID([[0,dim],[-(2*dim),dim],[(2*dim),dim]]));  // faccia ovest--up
    cuboBucato.push (SIMPLEX_GRID([[0,dim],[0,dim],[(2*dim),dim]]));   // faccia ovest--down
    cuboBucato.push (SIMPLEX_GRID([[0,dim],[(2*dim),dim],[-(2*dim),dim]]));  // faccia ovest-sud
    cuboBucato.push (SIMPLEX_GRID([[0,dim],[(2*dim),dim],[0,dim]]));   // faccia ovest-nord
    cuboBucato.push (SIMPLEX_GRID([[(2*dim),dim],[-(2*dim),dim],[-(2*dim),dim]])); // faccia sud--up
    cuboBucato.push (SIMPLEX_GRID([[(2*dim),dim],[0,dim],[-(2*dim),dim]]));  // faccia sud--down
    cuboBucato.push (SIMPLEX_GRID([[(2*dim),dim],[-(2*dim),dim],[0,dim]]));  // faccia nord--up
    cuboBucato.push (SIMPLEX_GRID([[(2*dim),dim],[0,dim],[0,dim]]));   // faccia nord--down
    for (var zi=0; zi<z; zi++){
      for (var yi=0; yi<y; yi++){
        for (var xi=0; xi<x; xi++){
          sandwich.push(T([0,1,2]) ([ -(xi*(1-dim)),-(yi*(1-dim)),-(zi*(1-dim)) ]) (STRUCT (cuboBucato)));
          }
        }
      }

    sandwich = COLOR([0, 0, 1])(STRUCT(sandwich));
    DRAW(sandwich);
}


//ecco una seconda versione del homework, in quanto non sono sicuro al 100% di aver ben interpretato la richiesta

var x = [1,1,1,-1,-1,1,-1,-1];
var y = 4
var z = [1,1,-1,1,-1,-1,1];

var sandwichV2 = function (x, y, z){
    var strutFinal = [];
	var strutPiena = SIMPLEX_GRID([[0,1],[0,y],[0,1]]); 
	var strutBucata = [];
	strutBucata.push( SIMPLEX_GRID([[0,1],[0,(y*2/4)],[0,1]]) ); 
	strutBucata.push( SIMPLEX_GRID([[0,1],[-(y*3/4),(y/4)],[0,1]]) );
	for (var zi=0; zi<z.length; zi++){
		for (var xi=0; xi<x.length; xi++){
			if (z[zi]>=0){
				if (x[xi]>=0)
					strutFinal.push( T([0,1,2])([xi,0,zi])(strutPiena) );
				else
					strutFinal.push( T([0,1,2])([xi,0,zi])(STRUCT (strutBucata)) );
			}else{
				strutFinal.push( T([0,1,2])([xi,0,zi])(STRUCT (strutBucata)) );
				}	
		 	}
		 }	
	strutFinal = COLOR([0, 0, 1])(STRUCT (strutFinal));
	DRAW (strutFinal);
}

sandwichV2(x,y,z);