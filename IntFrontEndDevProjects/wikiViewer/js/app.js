$(document).foundation()
$(document).ready(function(){
	//$().on('click', function(){
	  $.ajax( {
		url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json",
      	success: function(data) {
        	var title = [],
        		snippet = [],
        		pageUrl = [],
        		x = 0;
        		for (x; x < data.query.search; x + 1){
        			title[x] = data.query.search.title;
        			snippet[x] = data.query.search.snippet;
        			pageUrl[x] = 'https://en.wikipedia.org/wiki/' + title;
        		}
      		},
      	cache: false
    	});
	//})  

})