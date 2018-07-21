This is the README file for the DND/CAF Ombudsman service request app. This document contains instructions on modifying the services available through the site.

Note: the most common bug encountered when modifying the serviceApp.js script is misplaced/missing commas and brackets. these errors prevent the site from rendering 
correctly, for example displaying {{category.name}} where "Admin" should be, for example.fixing them should be the first step in troubleshooting.

Adding Service

	Open 'serviceApp.js', located in the 'scripts' folder
	Copy and paste the following template
	Remove any unused categories. Make sure all lines are terminated with a comma, and no brackets are misplaced.



					{
						name:'', 
						about:'',
						instructions: '',
						forms: ['', ''],
						formLinks: ['',''],
						contact: ,
						contactSubject: '',
					},


name: Name of service
about: description of service that appears in main service page
instructions: detailed instructions on how to submit the request
forms: names of forms required
formLinks: the relative path location of the forms required
contact: the email address used to submit the request. should be in the form: emails.xxx. 
contactSubject: the subject line of the email


example 1:


					{
						name:'Duty Travel Coordination', 
						about:'',
						instructions: 'Please contact your finance support officer',
						forms: ['form a', 'form b'],
						formLinks: ['../forms/yyy','../forms/xxx']
					},


example 2:

					{
						name:'Software Requests',  
						about:'Software/Program requests on the Protected A network.',
						instructions: 'For Protected A software requests, send an email using the link below. Please specify the program name and version you require.',
						contact: emails.it,
						contactSubject: 'Protected A Software Request'
					},




Removing Service

	To delete a service entirely, remove the entire service object, including the braces { } and the comma 

Modifying Service 


Modifying emails

	To modify an email address, change the address located between the double quotes in the 'emails' object in serviceApp.js. This address will be changed for all the services using it as a contact. 
	


	To add a new address, create a new line in the emails object with the following syntax:
		
		emailName: "email@address.com",

	Once this line is added, the address can be used by any service by modifying it's contact information. 



example: The email object looks like this:

	emails={
		it:"+Ombudsman IT Services-Ombudsman Services TI@Ombudsman@Ottawa-Hull", 
		records:"+Ombudsman Records Room Services-Ombudsman services de la salle des archives@Ombudsman@Ottawa-Hull", 
		corp:"+Ombudsman Corporate Services-Ombudsman Services Coporatifs@Ombudsman@Ottawa-Hull",
		};

 	To add a new administrative officer email address, change the object to this:

	emails={
		it:"+Ombudsman IT Services-Ombudsman Services TI@Ombudsman@Ottawa-Hull", 
		records:"+Ombudsman Records Room Services-Ombudsman services de la salle des archives@Ombudsman@Ottawa-Hull", 
		corp:"+Ombudsman Corporate Services-Ombudsman Services Coporatifs@Ombudsman@Ottawa-Hull",
		adminOfficer:"admin@Ombudsman.ca",
		};

	Any service that uses this address as a point of contact should contain the following line:

			contact: emails.adminOfficer,





