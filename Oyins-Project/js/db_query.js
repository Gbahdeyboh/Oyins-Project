/*
===========================================================================================
|                        ALL AJAX REQUESTS ARE MADE IN THIS SCRIPT                         |
===========================================================================================
| A class is defined that handles all ajax requests, each time an ajax request is to be    |
| made the class is to be called with  required details passed as arguments to the class    |
============================================================================================
*/
class ajaxRequests{
	static requests(var param = []){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				alert(this.responseText);
			}
		}
		var sentData = this.param[0];
		for(var i = 1; i < this.param.length; i++){
			sentData += `&&`
		}
		xhttp.send()
	}
}
function hey(){
	ajaxRequests.requests();
}