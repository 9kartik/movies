app.controller('ctrl',function($scope){
	// ctr.strp=x=>x.replace(/.*title\//,'').replace(/\/\?.*/,'');
  	$scope.movz=[];
	var db = new zango.Db('newdb', { movies: ['movie_title'] });
	var movs= db.collection('movies');//<-|
	movs.insert(movies).then(() => {
		$scope.totalItems = movies.length;
	  	$scope.currentPage = 1;
	  	$scope.maxSize = 5;
	  	$scope.bigTotalItems = movies.length;
	  	$scope.bigCurrentPage = 1;
	    return movies.sort({
	        title_year: -1
	    }
	    ).forEach(
	    	function(doc){
	    		$scope.movz.push(doc)
	    	}
	   	);
	}).catch(error => console.error(error));


})
