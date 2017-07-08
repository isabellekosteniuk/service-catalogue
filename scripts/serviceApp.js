	
var app = angular.module('serviceApp',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

        $routeProvider
			.when("/", { templateUrl : "main.html", controller  : "mainController" })
			.when("/:id1", { templateUrl : "main.html", controller  : "mainServiceCtrl" })
			.when("/:id1/:id2", { templateUrl : "page.html", controller  : "subServiceCtrl" })
			
		.otherwise({ redirectTo: "/" });

		$locationProvider.hashPrefix("");
         
	});
	
	
app.service('mainService', function() { //Contains all service data, shareable to controllers
	
	//Email Addresses
	emails={
		it:"it@example.com", 
		records:"records@example.com", 
		corp:"+corp@example.com",
		adminOfficer:"",
		techOfficer:"",
		adminSupervisor:"",
		corpSrvDirector:"",
		financeOfficer:"",
		};
	
	this.catalogue = [
	
	{ //Travel Services Data
	
		name:'Travel',
		message: 'Travel Claims and Requests',
		services: [

					{
						name:'Duty Travel Coordination', 
						about:'',
						instructions: 'Please contact your finance support officer',
						forms: ['form a', 'form b'],
						formLinks: ['xxx','yyy']
					},

		],
	
	},
	
	{ //IT Services Data
		name:'IT',
		message: 'Protected A and Standalone IT requests',
		services: [	
	
					{
						name:'Toner Changes', 
						about:'Toner changes for printers',
						instructions: 'To request a toner change, send an email using the link below and specify the printer location and model.',
						contact: emails.it,
						contactSubject: 'Toner Change Request',
					},
						
					{
						name:'General IT', 
						about: 'General IT issues and requests',
						instructions: 'For general IT issues and requests, send an email using the link below.',
						contact: emails.it
					},
					
					{
						name:'Software Requests',  
						about:'Software/Program requests',
						instructions: 'For software requests, send an email using the link below. Please specify the program name and version you require.',
						contact: emails.it,
						contactSubject: 'Software Request'
					},

					
				  ],
	},
	
	{ //Mail Services Data
		name:'Mail',
		message: 'This list contains all mail services',
		services: [	
	
 					{
						name:'Mail By Hand', 
						about:'To send mail by hand, fill out the form "By Hand" and submit to Corporate Services by sending an email using the link below.',
						contact: emails.corp,
						contactSubject: 'By Hand Mail Request',
						forms: ['By Hand Instructions', 'By Hand EN', 'By Hand FR'],
						formLinks: ['../forms/ByHand Instructions_EN','../forms/yy','../forms/zz']
					},
						
					{
						name:'Mail Item 2', 
						about: 'general description'
					},
					
					{
						name:'Mail Item 3', 
						about:'general description'
					},
					

					
				
					
				  ],
	}];
	
});



app.directive('back', ['$window', function($window) { //Directive for back navigation
	
	return {
		
		restrict: 'A',
		link: function(scope,elem,attrs) {
			elem.bind('click', function() { $window.history.back();});
		}
		
	};
	
}]);

app.controller("mainController", function($scope, $location, mainService) {
		
		$scope.name = "Main Page";
		$scope.message = "Welcome to the Service Catalogue";
		$scope.catalogue = mainService.catalogue;
		$scope.buttonClick = function(id, clicked) {
			var clicked = !clicked;
			$location.path(id);
			return clicked;	
			
		};

});
				
		
app.controller("mainServiceCtrl", function($scope, $routeParams, mainService) {
	
		$scope.idMain= $routeParams.id1;
		data = mainService.catalogue[$scope.idMain];
		$scope.name = data.name;
		$scope.message = data.message;
		$scope.services = data.services;

});
		
app.controller("subServiceCtrl", function($scope, $routeParams, mainService, $sce) {
	
		$scope.idMain= $routeParams.id1;
		$scope.idSub= $routeParams.id2;
		data = mainService.catalogue;
		service = data[$scope.idMain].services[$scope.idSub];
		$scope.name = service.name;
		$scope.description = service.instructions;
		$scope.forms = service.forms;
		$scope.formLinks = service.formLinks;
		contact = service.contact;
		subject = service.contactSubject;
		mailToString = '<a href = "mailto:' + contact +  "?Subject=" + subject + '">Send Email</a>';
	
			if(contact !=undefined){
				$scope.mailTo = $sce.trustAsHtml(mailToString);
			} else {}
		
			
});