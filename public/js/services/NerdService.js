var NerdService = angular.module('NerdService',[]);

NerdService.service('Nerd', function($http){
	return {
		//Call to get all nerds
		get : function(){
			return $http.get('/api/nerds');
		},

		create : function(nerdData){
			return $http.post('/api/nerds', nerdData)
		},

		delete: function(id){
			return $http.delete('/api/nerd/'+id);
		}
	}
});