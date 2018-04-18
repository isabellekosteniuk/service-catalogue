	
var app = angular.module('serviceApp',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

        $routeProvider
			.when("/", { templateUrl : "search.html", controller  : "mainController" })
			.when("/:id1", { templateUrl : "main.html", controller  : "mainServiceCtrl" })
			.when("/:id1/:id2", { templateUrl : "page.html", controller  : "subServiceCtrl" })
			
			
		.otherwise({ redirectTo: "/" });

		$locationProvider.hashPrefix("");
         
	});
	
	
app.service('mainService', function() { //Contains all service data, shareable to controllers
	
	//Email Addresses
	emails={
		it:"+Ombudsman IT Services-Ombudsman Services TI@Ombudsman@Ottawa-Hull", 
		records:"+Ombudsman Records Room Services-Ombudsman services de la salle des archives@Ombudsman@Ottawa-Hull", 
		corp:"+Ombudsman Corporate Services-Ombudsman Services Coporatifs@Ombudsman@Ottawa-Hull",
		adminOfficer:"",
		techOfficer:"",
		adminSupervisor:"",
		corpSrvDirector:"",
		financeOfficer:"",
		taxiContact: "ramzi.oueriemmi@forces.gc.ca",
		hrContact: "vanessa.basile@forces.gc.ca"
		};
	
	this.catalogue = [

	
	{ //IT Services Data
		name:'IT',
		message: 'Current IT Service Offerings',
		services: [	
	
					{
						name:'Toner Changes', 
						about:'Toner changes for printers',
						instructions: ['To request a toner change, send an email using the link below and specify the printer location and model.'],
						contact: emails.it,
						contactSubject: 'Toner Change Request',
					},
						
					{
						name:'Hardware Requests', 
						about: 'Requests for monitors, keyboards, etc.',
						instructions: ['For hardware requests, such as monitors, keyboards, mice, etc., send an email using the link below.'],
						contact: emails.it,
						contactSubject: 'Hardware Request',
					},
					
					{
						name:'Software Requests',  
						about:'Software/Program requests',
						instructions: ['For all software requests, send an email using the link below. Please specify the network (A or B), program name, and version you require.'],
						contact: emails.it,
						contactSubject: 'Software Request'
					},
					
					{
						name:'PKI (new users)',
						about:'PKI Card enrolment and recovery',
						instructions: ['Submit a service request using the Assyst link below.'],
						forms: ['Assyst PKI Request Form'],
						formLinks: ['http://assyst.forces.mil.ca/assystnet/application/assystNET.jsp#id=3150;type=10;name=New%2FModify%20D-PKI%20Name%20Subscriber%20Certificate']
					},
					
					{
						name:'Network Problems',
						about:'Issues on the network',
						instructions: ['Send an email containing a description of the problem using the link below'],
						contact: emails.it,
						contactSubject: "Network Issue"
					},					
					

					{
						name:'Forgotten Passwords',
						about:'Forgotten passwords on mobile devices, PKI, etc.',
						instructions: [
							'For forgotten passwords on the PA network and mobile device passcodes, contact the NCR Help Desk at 992-4000', 
							'For forgotten passwords on PB network accounts and PKI Cards send an email using the link below'],
						contact: emails.it,
						contactSubject: "Forgotten Password"
					
					},
			

					{
						name:'Technical Setups',
						instructions: ['Send an email below to organize offsite or boardroom setups. Please specify whether the setup is onsite or offsite.'],
						contact: emails.it,
						contactSubject: "Technical Setup"
					},
			

					{
						name:'Other',
						instructions: ['For any IT services not listed, please send an email using the link below.'],
						contact: emails.it,
						contactSubject: "Other IT"
					},	

					
				  ],
	},
	
	{ //Admin Services Data
		name:'Admin',
		message: 'Coming soon!',
		services: [],
	},

	{ //HR
		name:'Human Resources',
		message: 'Coming soon!',
		services: [],
	},

	{ //Travel Services
		name:'Travel',
		message: 'This list contains all travel services',
		services: [	

						
					{
						name:'Duty Travel Coordination', 
						about: 'Common travel forms',
						instructions: ['To budget for travel, please complete an Individual Travel Authorization Form (DND2999) and include along with other required documents to the Finance Department. In the rare case where a receipt has been lost while travelling, a Lost Receipt Declaration Form is included below.'],
						forms: ['Individual Travel Authority Form D2999M', 
							'Lost Receipt Declaration', 
							'Record of Travel Expenses',
							'Reference to kilometric rates'],
						formLinks: ['forms/3 - Individual Travel Authority Form_d2999m (2016).pdf',
							'forms/Lost Receipt Declaration.pdf', 
							'forms/Record of Travel Expenses (Eng) April 2017.xls',
							'http://www.njc-cnm.gc.ca/directive/d10/v238/en']
					
					},
					
					{
						name:'Traveller & Travel Arranger', 
						about:'Information regarding the responsibilities of a traveller & travel arranger',
						instructions: ['Please refer to the SOPs below to aid in what is necessary of a traveller or travel arranger throughout the process of when embarking on travel is required. If travel is considered an event or hospitality is required, refer to the Event & Hospitality SOP below. For concerns that are still unclear after researching, please send an email using the link below to the positional mailbox of the Finance Department.'],
						forms: ['SOP Travel Arranger EN', 
							'SOP Travel Arranger FR', 
							'SOP Traveler EN', 
							'SOP Traveler FR', 
							'SOP Event & Hospitality EN', 
							'SOP Event & Hospitality FR'],
						formLinks: ['forms/SOP Travel Arranger - Final - EN.doc',
							'forms/SOP Travel Arranger - Final - FR.doc', 
							'forms/SOP Traveler - Final - EN.doc', 
							'forms/SOP Traveler - Final - FR.doc', 
							'forms/SOP Event & Hospitality - EN.docx', 
							'forms/SOP Event & Hospitality  - FR.docx']
				
					},
					
					{
						name:'Traveller & Travel Arranger Checklists', 
						about:'Checklists to be completed before and after each travel as guidelines',
						instructions: ['Checklists are to be monitored pre and post travel in order to validate that internal controls and procedures are being respected throughout the filing of a trip. Each checklist assures the proper documentation is being collected for future referral and/or audits. For more information on what is required refer to the "Traveller & Travel Arranger" Tab for detailed SOPs.'],
						forms: ['Annex A Travel Arranger Checklist', 
							'Annex A Traveler Checklist', 
							'Annex B Travel Arranger Document Checklist'],
						formLinks: ['forms/Annex A - Travel Arranger Checklist.docx',
							'forms/Annex A - Traveler Checklist.docx', 
							'forms/Annex B - Travel Arranger Document Checklist.docx']
				
					}, 

					{
						name:'Taxi Chits', 
						about: 'Taxi requests',
						instructions: ['To request a taxi chit, send an email using the link below and ensure receipts are delivered to the Finance Department upon returning from a trip.'],
						contact: emails.taxiContact,
						contactSubject: "Taxi Chit Request"
				
					},

					{
						name:'Hospitality/Event Claims', 
						about:'Event forms',
						instructions: ['Refer to the THCEE Treasury Board Policy to determine which event form below should be completed according to specific circumstances. '],
						forms: ['TBS link',
							'Hospitality Request Form for internal use', 
							'Detailed Event Costs Form', 
							'Hospitality Request form for OMB Outreach', 
							'Bundled Event Approval Package'],
						formLinks: ['https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228',
							'forms/2a - Blank_EVENT  Hospitality_Request Form (NEW)_Apr 2017_for internal use only.xlsx',
							'forms/2b - Blank_Detailed Event Costs Form.xlsx', 
							'forms/2c - Blank_EVENT  Hospitality Request Form (NEW)_Apr 2017_for OMB Outreach.xlsx', 
							'forms/2d - Blank_DM Bundled Event Approval Package_as of May 2014.xls']
				
					},
					
				
					
				  ],
	},

	{ //Expense Claims
		name:'Expense Claims',
		message: 'This list contains all expense claim services',
		services: [	


					
					{
						name:'Hospitality/Event Claims', 
						about:'Event forms',
						instructions: ['Refer to the THCEE Treasury Board Policy to determine which event form below should be completed according to specific circumstances. '],
						forms: ['TBS link',
							'Hospitality Request Form for internal use', 
							'Detailed Event Costs Form', 
							'Hospitality Request form for OMB Outreach', 
							'Bundled Event Approval Package'],
						formLinks: ['https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228',
							'forms/2a - Blank_EVENT  Hospitality_Request Form (NEW)_Apr 2017_for internal use only.xlsx',
							'forms/2b - Blank_Detailed Event Costs Form.xlsx', 
							'forms/2c - Blank_EVENT  Hospitality Request Form (NEW)_Apr 2017_for OMB Outreach.xlsx', 
							'forms/2d - Blank_DM Bundled Event Approval Package_as of May 2014.xls']
				
					},
					
					
				
					
				  ],
	},

	
	{ //Training Services Data
	
		name:'Training',
		message: 'This list contains all training services',
		services: [

					{
						name:'Policies', 
						about:'Information regarding an employee’s responsibility in terms of training and registration',
						instructions: ['Refer to these guidelines for instruction related to requests for registration in training courses. They also instruct the process to register employees. Reimbursement for training outside working hours can be explained in the CPAO 903 link below. For questions related to training please call the training coordinator at 613-996-6914 or the Finance Support Officer at 613-996-6715.'],
						forms: ['SOP Training Registration EN', 
							'SOP Training Registration FR', 
							'CPAO 903 Training Outside Working Hours'],
						formLinks: ['forms/SOP_Training Registration_En.doc',
							'forms/SOP_Training Registration_Fr.doc', 
							'forms/CPAO 903 - Training Outside Working Hours.doc']
					},

					{
						name:'Reimbursement', 
						about:'Form to be completed for reimbursement of tuition fees',
						instructions: ['Complete prior to training and return to the Finance Department with appropriate signatures and supporting documentation (ex. Proof of Completion, Proof of Payment, GC211, and Course Description).'],
						forms: ['Annex A Application Reimbursement Tuition Fees'],
						formLinks: ['forms/Annex A Application Reimbursement Tuition Fees.doc']
					},

					{
						name:'Registration', 
						about:'Forms to be completed for training registration',
						instructions: ['Complete the appropriate form depending on the training center, attach to the GC211 form, and return to the Finance Department for financial coding.'],
						forms: ['CSPS Registration Form EN', 
							'DND Required Training Form EN', 
							'DND Required Training Form FR', 
							'GC211 Application for Training', 
							'LCC Training Form'],
						formLinks: ['forms/CSPS English Registration Form.pdf',
							'forms/DND Required Training Form En.doc', 
							'forms/DND Required Training Form Fr.doc', 
							'forms/GC211 Application for Training .pdf', 
							'forms/LCC Training Form en-fr.doc']
					}

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
		$scope.message = "Welcome to the DND/CAF Ombudsman Service Catalogue";
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
		$scope.descriptions = service.instructions;
		$scope.forms = service.forms;
		$scope.formLinks = service.formLinks;
		contact = service.contact;
		subject = service.contactSubject;
		mailToString = '<a href = "mailto:' + contact +  "?Subject=" + subject + '">Send Email</a>';
	
			if(contact !=undefined){
				$scope.mailTo = $sce.trustAsHtml(mailToString);
			} else {}
		
			
});

