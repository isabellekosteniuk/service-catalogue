	
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
		records:"P-OTG.OmbsRecRoomSvs@intern.mil.ca", 
		corp:"P-OTG.Reception@intern.mil.ca",
		finance: "+Ombudsman-Finance@Ombudsman@Ottawa-Hull",
		hr: "OmbudsmanHRServices.OmbudsmanServicesRH@forces.gc.ca",
		translation: "P-OTG.OmbTranslation@intern.mil.ca",
		litigation: "P-OTG.OmbLitigaHold@intern.mil.ca"
		};
	
	this.catalogue = [

	
	{ //IT Services Data
		name:'IT',
		message: 'Click on the links below to find more information about each service',
		services: [	
	
					{
						name:'Toner Changes', 
						instructions: ['To request a toner change, send an email using the link below and specify the printer location and model.'],
						contact: emails.it,
						contactSubject: 'Toner Change Request',
					},
						
					{
						name:'Hardware Requests', 
						instructions: ['For hardware requests, such as monitors, keyboards, mice, etc., send an email using the link below.',
						'Note that all requests are subject to approval based on availability and will be scheduled accordingly.'],
						contact: emails.it,
						contactSubject: 'Hardware Request',
					},
					
					{
						name:'Software Requests',  
						instructions: ['For all software requests, send an email using the link below. Please specify the network (A or B), program name, and version you require.',
						'Note that all requests are subject to approval based on availability, licensing, and network authorities.',
						'PA: subject to DND service standard of 20 business days.',
						'PB: in stock licenses subject to 5 business days, out of stock subject to procurement.'],
						contact: emails.it,
						contactSubject: 'Software Request'
					},

					{
						name:'Hardware Issues', 
						instructions: ['For hardware issues, such as printer errors, dead monitors, etc. notify us using the email link below. Specify the hardware, issue, and any error codes.',
						],
						contact: emails.it,
						contactSubject: 'Hardware Issues',
					},
					
					{
						name:'Software Issues',  
						instructions: ['For all software issues, such as Outlook errors, notify us using the link below. Specify the software, network, issue, and any error codes.',
						],
						contact: emails.it,
						contactSubject: "Software Issues"
					},
					
					{
						name:'PKI (new users)',
						instructions: ['Submit a service request using the Assyst link below.'],
						forms: ['Assyst PKI Request Form'],
						formLinks: ['http://assyst.forces.mil.ca/assystnet/application/assystNET.jsp#id=3150;type=10;name=New%2FModify%20D-PKI%20Name%20Subscriber%20Certificate']
					},
					
					{
						name:'Network Problems',
						instructions: ['For any issues involving access to shared folders, internet, and intranet sites, send an email containing a description of the problem using the link below'],
						contact: emails.it,
						contactSubject: "Network Issue"
					},					
					

					{
						name:'Forgotten Passwords',
						instructions: [
							'For forgotten passwords on the PA network and mobile device passcodes, contact the NCR Help Desk at 992-4000. Please ensure you have your PRI number when you call.', 
							'For forgotten passwords on PB network accounts and PKI Cards send an email using the link below'],
						contact: emails.it,
						contactSubject: "Forgotten Password"
					
					},
			

					{
						name:'Technical Setups',
						instructions: ['Send an email below to organize offsite or boardroom setups. Please specify whether the setup is onsite or offsite. Include the time, date, location, hardware/software requirements, and any audio/video considerations. Please send the request with at least 48 hours notice.'],
						contact: emails.it,
						contactSubject: "Technical Setup"
					},

					{
						name:'Outlook Signature Block', 
						instructions: ['Signature blocks can be added / changed / modified in Outlook by following the steps outlined in the link below. Users must adopt the new signature block format in accordance with the Treasury Board of Canada Secretariat’s new Standard on Email Management. The standard states that signature blocks must appear in both official languages and include a separate section for each language.',
								'The following formatted should be used in all signature blocks:',
								'- Sans-serif font style, such as Verdana, Calibri, or Arial',
								'- 10 point font size',
								'- Black text color',
								'- White background color',
								'For more on office policy regarding signature blocks, as well as an example, please see the document linked below.',],
						forms: ['Outlook Signature Instructions', 'Office Policy for Outlook Signatures'],
						formLinks:['https://support.office.com/en-us/article/create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2', 'forms/Outlook Signature Block.docx'],

					},

					{
						name:'Adding a Printer', 
						instructions: [ 'For Protected A devices use the link below to view all available printers. Doucle click on the printer you would like to connect to. Once the installation has completed, close all windows and the printer should be available to you.',

								'For protected B devices, you will need to click Start, Devices and Printers, Add a Printer, Network and then select a printer closest to your area of work. ',

								],
						forms: ['PA Printer Locations'],
						formLinks: ['//img-urb-p005513'],

					},

					{ 
						name:'Changing Default Printer', 
						instructions: ['-Go to Start',
								'-Settings',
								'-Control Panel',
								'-Printers and Faxes',
								'-Choose the desired printer and right click',
								'-Choose "Set as Default Printer"',

								],

					},
			

					{
						name:'Contact Us',
						instructions: ['For any IT services not listed, questions or concerns, please send an email using the link below.'],
						contact: emails.it,
						contactSubject: "Other IT"
					},	

					
				  ],
	},
	

{ //Admin Services Data
		name:'General Admin',
		message: 'Click on the links below to find more information about each service',
		services: [
					{
						name:'Supplies', 
						instructions: [ 
								'Supply room locations:',
								'12th Floor - Room 1253',
								'13th Floor - Room 1341',
								'If you need specialty items such as a book, desk fan, table light or any particular office supplies (pens, folders, notebooks…) please use the email link below',
								'If the request is not sent to the positional mailbox directly, your request may be delayed.',
								'Please note that supplies are ordered on Wednesdays and have a 24-48 hour delivery time frame. Please plan ahead for your supply requirements. If something is required urgently, please indicate URGENT in the subject line of the request so that it can be treated accordingly.',

								],

						contact: emails.corp,
						contactSubject: "Supplies"
					},



					{
						name:'Equipment Requests', 
						instructions: ['For any equipment requests, please send an email using the link below. Include the equipment you require as well as justification. Examples of equipment include USBs, digital recorders, headsets, etc.',

								],
						contact: emails.corp,
						contactSubject: "Equipment Requests"

					},

					{
						name:'Translation', 
						instructions: ['To request translation services, please send an email using the link below. Specify the date and time you require the translation completed by as well as the language it is to be translated into. Attach the document to be translated to the email. Service standards vary based on document length and complexity.',


								],
						contact: emails.translation,
						contactSubject: "Translation"

					},

					{
						name:'Boardroom Booking', 
						instructions: ['To book a boardroom, take the following steps:',
								'- In Outlook, navigate to the "Calendar" tab',
								'- Click on "New Meeting" from the header toolbar',
								'- Copy the address of the boardroom from the list below into the "To" field of the new meeting window',
								'- When the location and time of the meeting is input, send the request',
								'If the boardroom is booked when you require it, you may contact the positional mailbox (using the link below) to discuss alternative options. ',
								'Boardroom email addresses:',
								'~NDHQ CR Ombudsman Rm 1212 Training Room - Salle de Formation',
								'~NDHQ CR Ombudsman Rm 1231 Big',
								'~NDHQ CR Ombudsman Rm 1255 Small',
								'~NDHQ CR Ombudsman Rm 1319 Big',
								'~NDHQ CR Ombudsman Rm 1328 Small',

								],
						contact: emails.corp,
						contactSubject: "Boardroom booking"

					},


			],
	},

{ //Facilities
		name: 'Facilities',
		message: 'To contact Corporate Services with an issue regarding facilities, send an email from the page listed below. In case of emergencies, call 1-800-463-1850',
		services: [
					{
						name: 'Facilities',
						instructions: [ 'If you find yourself in need of replacing burnt out lights, difficulties with the plumbing and other situations that effect the building. In case of emergencies, call 1-800-463-1850'],
						contact: emails.corp,
						contactSubject: "Facilities"
					}
				]
},

{ //Telecom Services Data
		name:'Telecommunications',
		message: 'Click on the links below to find more information about each service',
		services: [
					{
						name:'VTC Setups', 
						about: '',
						instructions: [
								
								],

					},
					{
						name:'Teleconferencing', 
						about: '',
						instructions: [
								
								],

					},

					{
						name:'Voicemail Resets', 
						instructions: ['If you require a voicemail reset, send an email using the link below'],
						contact: emails.corp,
						contactSubject: "Voicemail Reset"

					},

					{
						name:'Phone Lists', 
						instructions: ['There is an internal phone list for the office. It is divided into the separate departments within the office (sorted alphabetically by department). The list is updated regularly and can be found following the link below.',
								'If you notice any errors in the list, please send an email using the link below.',
								'On the list, Tab 1 is the English version and Tab 2 is the French version.',
								],
						forms: ['Phone Lists'],
						formLinks:['O:\\Administration\\Lists\\Telephone Lists'],
						contact: emails.corp,
						contactSubject: "Phone List"
					},


			],
	},

{ // Mail Services Data
		name: 'Mail',
		message: 'Click on the links below to find more information about each service',
		services: [
					{ 
						name:'Mail Room', 
						instructions: ['Pickup and drop off schedule:',
								'-9:00am',
								'-11:00am',
								'-2:00pm',
								'-4:00pm *pickup for next day drop off only*',
								'DND Internal Mail is delivered and picked up daily at 9:45am.',
								'Any items for DND internal mail that is prepared after 9:00am will be given to DND internal mail services the following business day. Internal mail is not tracked once it leaves our office if the individual sending this wants to track the mail, they need to use a DND 728 form (See link below). The DND 728 form must be completed - the "Consignee\'s Copy" and "To Be Signed Returned to Originator" copies must be placed in envelope.',
								'DND Internal Mail requires addresses to be in the following format:',
								'Attn: Capt. Smith',
								'Section/Directorate',
								'101 Colonel By Drive',
								'Ottawa ON K1A 0K2',
								'For any questions, send an email using the link below.',
								],
						forms: ['DND 728 Form', 'Instructions for DND 728 EN', 'Instructions for DND 728 FR'],
						formLinks: ['forms/DND 728 Electronic Form.pdf', 'forms/DND 728 ByHand Instructions_EN.pdf', 'forms/DND 728 ByHand Instructions_FR.pdf'],
						contact: emails.corp,
						contactSubject: "Mail Room",

					},



					{ 
						name:'Canada Post', 
						instructions: ['Note: Unless specifically requested by the sender, Canada Post mail is *not* tracked.',
								'For tracking, time-sensitive mail, and other special requests, please complete the Special Services Mail Request form (available below)',
								'Mail needs to be packaged and/or put into envelopes before being given to the mailroom. If the correct envelopes are not available in the supply rooms, please see the mailroom.',
								'Mail sent via Canada Post needs to conform to Canada Post’s addressing standards. Please see link below for the current standard. ',
								'For any questions, please send an email using the link below.'
								],
						forms:['Special Services Mail Request Form EN','Special Services Mail Request Form FR', 'Canada Post Addressing Standards'],
						formLinks: ['forms/Special Services Mail Request Form (E).pdf', 'forms/Special Services Mail Request Form (F).pdf', 'https://www.canadapost.ca/web/en/kb/details.page?article=how_to_address_mail_&cattype=kb&cat=sending&subcat=generalinformation'],
						contact: emails.corp,
						contactSubject: "Canada Post Mail Service"
					},
					{ 
						name:'Local Courier', 
						instructions: [
								'Local courier services are for same-day deliveries within the National Capital Region. Please complete the Special Services Mail Request form, available at the links below. Mail needs to be packaged and/or put into envelopes before being given to the mailroom. If the correct envelopes are not available in the supply rooms, please see the mailroom.',
								'For any questions, please send an email using the link below'

								],
						forms:['Special Services Mail Request Form EN','Special Services Mail Request Form FR'],
						formLinks: ['forms/Special Services Mail Request Form (E).pdf', 'forms/Special Services Mail Request Form (F).pdf'],
						contact: emails.corp,
						contactSubject: "Local Courier Service"

					},

					{ 
						name:'National and International Courier', 
						instructions: [
								'National and International courier service is provided by Purolator. A tracking number is provided by default. Please complete the Special Services Mail Request form available at the links below. Mail needs to be packaged and/or put into envelopes before being given to the mailroom. If the correct envelopes are not available in the supply rooms, please see the mailroom.',
								'***Remember to put the date the envelope(s)/package(s) must be delivered by. If no date is specified, the lowest shipping rate will be used. Envelope(s) and/or package(s) must be ready for shipment by 2:00pm or Purolator cannot pick it up that day.',
								'For any questions, please send an email using the link below.',


								],
						forms:['Special Services Mail Request Form EN','Special Services Mail Request Form FR'],
						formLinks: ['forms/Special Services Mail Request Form (E).pdf', 'forms/Special Services Mail Request Form (F).pdf'],
						contact: emails.corp,
						contactSubject: "National/International Courier Service"

					},

					{ 
						name:'By-Hand Delivery', 
						instructions: ['Note: By-hand services are provided only when the Mail Clerk is onsite and the delivery address is located close to 100 Metcalfe Street. Another option is the local courier service.',
								'A by-hand delivery requires the completion of the DND 728 form (available below). The DND 728 form must be completed and the “Consignee\’s Copy” placed in the envelope prior to the Mail Clerk delivering the envelope. The “Originator\’s File Copy” and “To Be Signed and Returned to Originator” copies are to be handed to the Mail Clerk prior to delivery. The DND 728 form allows for tracking of delivery and receipt.',
								'The name, exact address, and the phone number of the person receiving the delivery needs to be provided to the Mail Clerk prior to delivery.',
								'For any questions, please send an email using the link below.',


								],
						forms: ['DND 728 Form', 'Instructions for DND 728 EN', 'Instructions for DND 728 FR'],
						formLinks: ['forms/DND 728 Electronic Form.pdf', 'forms/DND 728 ByHand Instructions_EN.pdf', 'forms/DND 728 ByHand Instructions_FR.pdf'],
						contact: emails.corp,
						contactSubject: "ByHand Mail Service",

					},


			],
	},

{ //Security Services Data
		name:'Security',
		message: 'Click on the links below to find more information about each service',
		services: [
					{
						name:'Security Checks', 
						about: '',
						instructions: [
								'Information on security checks as noted in Annex I of the security handbook can be found using the link below',
								'For more information, please see the information document using the link below.'
								],
						forms:['Security Handbook EN', 'Security Handbook FR'],
						formLinks:['forms/Security Handbook_E - Final - 2017.pdf', 'forms/Security Handbook F - Final - 2017.pdf'],
					},

					{
						name:'Security Clearances', 
						about: '',
						instructions: ['To submit a security clearance for an incoming employee, please send an email using the link below.'],
						contact: emails.corp,
						contactSubject: "Security Clearances"
					},
					{
						name:'Visitors/Meeting Forms', 
						about: '',
						instructions: ['Visitors must report to commissionaires in the main lobby, who will notify the person responsible of their arrival. Visitors should be announced to commissionaires prior to meetings taking place using the commissionaire’s meeting form:', 
								'O:\\Administration\\Administration Forms\\Security',
								'This is especially important if you are receiving more than one guest at a time. However the commissionaires would like to be notified of all guests expected to the building. Family and Friends also need to be signed in through the commissionaires.',  
								'For more information, please see the information document using the link below.'
								],
						forms:['Visitors and Meeting Forms'],
						formLinks:['forms/commissionaires meeting form.docx']
					},


			],
	},



{ //Health and Safety Services Data
		name:'Health and Safety',
		message: 'Click on the links below to find more information about each service',
		services: [
					{
						name:'Employee Information Line', 
						instructions: ['The purpose of this phone line is for staff and their families to call and receive information during a crisis or emergency situation.  This is not a voicemail box and does not allow you to leave voicemails; it allows you to listen to a posted message',
								'The number is 613 996 6363',
								'Examples of why you would call this line (these are examples only and include but are not limited to what you see below):',
								'- there is a city wide blackout and you are asked not to come to work but to stand by for further instructions – you would call this line periodically for updates to the office’s status i.e. whether or not the office is closed, when it is reopening. ',
								'- Overnight, there is a building emergency such as a fire, you wake up in the morning to hear on the news of the fire and that the building is closed – you are unsure of when and where you are supposed to report to work – you would call this line for instructions and information regarding the status of the office',
								'- You have been asked to come to work either at this location or a temporary location during an emergency situation – your family members can call this line to obtain information about the status of our office',

								],

					},

					{
						name:'Small Applicance Policy', 
						about: '',
						instructions: ['The policy can be found using the links below',
								'If you would like to request the approval for a small appliance, please the Small Appliance Approval form linked below.',

								],

						forms: [
								'Small Appliance Policy EN',
								'Small Appliance Policy FR', 
								'Small Applicance Approval Form EN', 
								'Small Appliance Approval Form FR'
								],

						formLinks: [
								'forms/small appliance policy e.pdf',
								'forms/small appliance policy f.pdf', 
								'forms/Request for Approval form_E.pdf', 
								'forms/Request for Approval form_F.pdf'
								],
					},

					{
						name:'Ergonomic Assessment', 
						about: '',
						instructions: ['Please note that the procedure for requesting an ergonomic assessment is as follows:',
								'1) Obtain a note from your doctor / chiropractor / physiotherapist',
								'2) Send the designated positional mailbox a written request by email indicating that you require an assessment. Verbal requests are not acceptable and cannot be processed until they are in writing.',
								'3) The designated person will coordinate your assessment – approximately 1 month wait for the assessment.',
								'Your written request must include the following information:',
								'- Confirmation that you have received a doctors note',
								'- Brief description (no medical details) of the injury / why you require the assessment',
								'- Is the injury work related?',
								'- When did the injury take place?',
								'- Language of preference for your assessment and report',
								'- Is the requirement for the assessment urgent?',
								"All requests are to be sent to the positional mailbox using the link below. Your request must be cc'd to your manager.",

								],

						contact: emails.corp,
						contactSubject: "Ergonomic Assessment",
					},

					{
						name:'Self-Identification Program', 
						about: '',
						instructions: ['If you would like to provide a notice of allergy, sensitivity and/or medical condition, please use the form below.'],
						forms: ['Self-Identification Form'],
						formLinks: ['forms/SELF IDENTIFICATION FORM.doc'],
					},

					{
						name:'Return to Work Program', 
						about: '',
						instructions: ['Should you require any information regarding the Return to Work Program, it can be found using the links below.'],
						forms: ['Return to work EN', 'Return to Work FR'],
						formLinks: ['forms/Ombudsman_RTW_Civ_e_GBA_FINAL EN.pdf', 'forms/Ombudsman_RTW_Civ_e_GBA_FINAL FR.pdf'],
					},


					{
						name:'Emergency Evacuation Program', 
						about: '',
						instructions: ['The Emergency Evacuation Program can be found using the link below.'],
						forms: ['Emergency Evacuation Program'],
						formLinks: ['forms/WEEP - 100 Metcalfe St  - Urbandale Bldg.pdf'],
					},





			],
	},

{ //IM Services Data
		name:'Information Management',
		message: 'Click on the links below to find more information about each service',
		services: [

					{
						name:'CCM Mercury', 
						instructions: [
								'For all CCM resources and standard operating procedures, visit the CCM folder on the Protected B network. It can be found in the CCM folder on the O:\\Drive (O:\\CCM).',
								'For all requests including removal of attachments (accidentally/unintentionally added to file), please send an email using the link below. Include a detailed summary of the request as well as the file number or some kind of file identifier if a file number is not present. In some circumstances, a Director\’s approval may be required. ',
								'For more information on requesting services please consult the SOP located in the CCM folder. ',

								],

						contact: emails.ccm,
						contactSubject: "CCM Mercury",

					},

					{
						name:'Records Room', 
						instructions: [
								'For information on how to request Records Room Services, see the SOP below. Send requests to Records Room administrators using the send email link on this page.',
								'Service standards:',
								'-File requests: 1-2 hours',
								'-Library and Archives Canada file requests: 5 working days',
								'-DND Personnel Management Information System (PERMIS) file requests: 5 working days',
								
								],
						forms: ['Records Room Services SOP EN', 'Records Room Services SOP FR'],
						formLinks: ['forms/SOP_Records_Room_Services_EN.pdf', 'forms/SOP_Records_Room_Services_FR.pdf'],
						contact: emails.records,
						contactSubject: "Records Room Services",

					},

					{
						name:'Standards', 
						about: '',
						instructions: ['For information on how to effectively manage information, see the documents listed below. Send an email using the link on this page for any inquiries regarding this information.'],
						forms: [
							'Managing Email', 
							'Naming Electronic Documents',
							'Safeguarding Information',
							'Creating a Hyperlink in Outlook EN',
							'Creating a Hyperlink in Outlook FR'
							],
						formLinks: [
							'forms/Managing_Email_V3.doc', 
							'forms/Naming_Electronic_Documents_V3.docx',
							'forms/Safeguarding_Information_(Protected_A_and_Above)_V4.doc', 
							'forms/Creating_a_Hyperlink_in_Outlook_2010.pdf',
							'forms/Creating_a_Hyperlink_in_Outlook_2010_FR.pdf',
							],

						contact: emails.records,
						contactSubject: "IM Tips & Tricks",

					},

					{
						name:'Links', 
						instructions: ['See the links below for IM legislation policies, directives, standards, and guidelines. Send an email using the link on this page for any inquiries regarding this information.',

								],
						forms: [
							'TBS - Policy on Information Management', 
							'TBS - Directive on Information Management Roles and Responsibilities',
							'TBS - Directive on Recordkeeping',
							'TBS - Standard on Email Management',
							'TBS - Guidelines for Employees of the Government of Canada: Information Management Basics',
							'Justice - Access to Information Act', 
							'Justice - Privacy Act',
							'Justice - Library and Archives Canada Act',
							'LAC - Library and Archives Disposition Authorization #2016-001 for Transitory Records', 
							'DND - Defence Administrative Orders and Directives (DAODs) 6000-0 – Information Management and Information Technology', 
							'DND - Defence Administrative Orders and Directives (DAODs) 6001-0 - Information Management',
							'DND - Defence Administrative Orders and Directives (DAODs) 6001-1 - Recordkeeping',


							],
						formLinks: [
							'http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12742', 
							'http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12754',
							'http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=16552', 
							'http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27600',
							'http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=16557',
							'http://laws-lois.justice.gc.ca/eng/acts/a-1/', 
							'http://laws-lois.justice.gc.ca/eng/acts/p-21/',
							'http://laws.justice.gc.ca/eng/acts/L-7.7/',
							'http://www.bac-lac.gc.ca/eng/services/government-information-resources/disposition/Pages/DA-2016-001-transitory-records.aspx', 
							'http://intranet.mil.ca/en/defence-admin-orders-directives/6000/6000-0.page',
							'http://www.forces.gc.ca/en/about-policies-standards-defence-admin-orders-directives-6000/6001-0.page', 
							'http://www.forces.gc.ca/en/about-policies-standards-defence-admin-orders-directives-6000/6001-1.page',
							],


						contact: emails.records,
						contactSubject: "IM Links",
					},

					{
						name:'Litigation Hold Information', 
						instructions: ['See the links on this page for information regarding the potential class action lawsuits against DND. More information will be provided as it becomes available. Send any questions regarding litigation holds using the email link on this page.',
								],
						forms: ['LGBTQ2 and Race Litigation Hold', 'Government of Canada Employees Litigation Hold'],
						formLinks:['forms/litigation_hold_lgbt.msg', 'forms/litigation_hold_gc.msg'],
						contact: emails.litigation,
						contactSubject: "Litigation Hold Inquiry",
					},


			],
	},

	{ //HR
		name:'Human Resources',
		message: 'Click on the links below to find more information about each service',
		services: [
					{
						name:'Pay Action Request (PAR)', 
						about: '',
						instructions: [
								'Pay Action Request Form – Managers Responsibility:',
								'Complete the following fields:',
								'- Section 1 – Employee Information',
								'- Section 2 - Work Type*',
								'- Section 3 - Sub Type*',
								'- Section 4 - Requestor (Staffing/Manager)',
								'*If you are unsure of what work type or sub type to use, please leave the fields blank and we will input the correct type.',
								'Once you have completed your PAR, please send it to the HR positional mailbox using the link at the bottom of this page.',

								],
						contact: emails.hr,
						contactSubject: "PAR",

						forms: ['How to fill in a Leave Form EN', 'How to fill in a Leave Form FR', 'Pay Action Request EN', 'Pay Action Request FR', 'Leave Form GC-178'],
						formLinks: ['forms/How to fill in a Leave Form_EN.pdf', 'forms/How to fill in a Leave Form_FR.pdf', 'forms/PAR_e.pdf', 'forms/PAR_FR.pdf', 'forms/Leave Form_GC-178.pdf'  ],
					},

					{
						name:'Work Types Requiring a PAR',
						instructions:[
								'Work Types Requiring a PAR and required forms for each:',

								'1). Leave:',
								'When a leave application form is required to be sent to the pay centre, the employee can follow the instructions found using the link at the bottom of this page',
								'- Pay Action Request form',
								'- Leave Application form',

								'2). Transfer Out',
								'When an employee is leaving the Department of National Defence a PAR is required to be sent to the pay centre, along with the employees new Letter of Offer and confirmation from the employees manager of their departure (can be in the form of an email). ',
								'- Letter of Offer from new department',
								'- Email accepting the transfer from employees manager',
								'- Pay Action Request Form',

								'3). Return from LWOP',
								'When an employee returns from a leave without pay (such as from Maternity or Paternity leave), the pay centre requires confirmation from their manager of their return sent in with a Pay Action Request form.',
								'- Email to confirm the employees return from their manager',
								'- Pay Action Request ',

								'4). Resignation Process',
								'When an employee is resigning, they are required to submit a formal letter to their manager that states the date they plan on resigning. This, along with approval from the manager, is sent to the pay centre with a Pay Action Request form.',
								'- Letter confirming the employees resignation date',
								'- Approval from manager confirming employees resignation date',
								'- Pay Action Request',

								'5). Retirement Process',
								'When an employee is retiring, they are required to submit a formal letter to their manager that states the date they plan on retiring. This, along with approval from the manager, is sent to the pay centre with a Pay Action Request form.',
								'- Letter confirming the employees retirement date',
								'- Approval from manager confirming employees retirement date',

								],
	
						forms: ['How to fill in a Leave Form EN', 'How to fill in a Leave Form FR', 'Pay Action Request EN', 'Pay Action Request FR', 'Leave Form GC-178'],
						formLinks: ['forms/How to fill in a Leave Form_EN.pdf', 'forms/How to fill in a Leave Form_FR.pdf', 'forms/PAR_e.pdf', 'forms/PAR_FR.pdf','forms/Leave Form_GC-178.pdf' ],
					
					},

					{
						name:'AWA Centralized Filing', 
						about: '',
						instructions: [
								'When an employee begins any type of Alternative Work Arrangements, please ensure that you send related paperwork to the Ombudsman HR positional mailbox for filing using the "Send Email" link below. Information on AWA can be found using the link below',
								],
						forms: ['How to fill in a Leave Form EN', 'Alternative Work Arrangements Page'],
						formLinks: ['forms/How to fill in a Leave Form_EN.pdf', 'http://hrciv-rhciv.mil.ca/en/m-alternative-work-arrangements.page '],
						contact: emails.hr,
						contactSubject: "AWA Centralized Filing",
				
					},

					{
						name:'Extra Duty Pay', 
						about: '',
						instructions: [
								'There is currently a new process for claiming overtime for compensatory time-off (leave). Instructions on how to submit a request can be found using the link below',
								],
						forms: ['Claiming Overtime for Compensatory Time-Off (Leave) EN'],
						formLinks: ['http://hrciv-rhciv.mil.ca/en/dynamic-article.page?doc=new-process-claiming-overtime-for-compensatory-time-off-leave/jcdb6bgu&WT.mc_id=20170131DTupdate_personnel_eng'],
					
					
					},

					{
						name:'E-Class Requests', 
						about: '',
						instructions: [
								'If you are a manager and require any of the items listed below, please send an email using the link at the bottom of this page. Please include the position number and any details regarding the position in the body of the email',
								'- Change a security level',
								'- Change a linguistic profile',
								'- Create or clone a position',
								'- Abolish a position',
								],
						contact: emails.hr,
						contactSubject: "E-Class Request",
					
					
					},

					{
						name:'Training Policies', 
						instructions: ['Refer to these guidelines for instruction related to requests for registration in training courses. They also instruct the process to register employees. Reimbursement for training outside working hours can be explained in the CPAO 903 link below. For questions related to training please call the training coordinator at 613-996-6914 or the Finance Support Officer at 613-996-6715.'],
						forms: ['SOP Training Registration EN', 
							'SOP Training Registration FR', 
							'CPAO 903 Training Outside Working Hours'],
						formLinks: ['forms/SOP_Training Registration_En.doc',
							'forms/SOP_Training Registration_Fr.doc', 
							'forms/CPAO 903 - Training Outside Working Hours.doc']
					},

					{
						name:'Training Reimbursement', 
						instructions: ['Complete prior to training and return to the Finance Department with appropriate signatures and supporting documentation (ex. Proof of Completion, Proof of Payment, GC211, and Course Description).'],
						forms: ['Annex A Application Reimbursement Tuition Fees'],
						formLinks: ['forms/Annex A Application Reimbursement Tuition Fees.doc']
					},

					{
						name:'Training Registration', 
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
	},


	{ //Finance
		name:'Finance',
		message: 'Click on the links below to find more information about each service',
		services: [	



					{
						name:'Section 34 Checklist', 
						about:'',
						instructions: ['Refer to these general financial tools to help with procurement and delegation of authority inquiries. If you have any questions about these forms or delegation limits please send and email using the link below. '],
						forms: ['Section 34 Checklist', ],
						formLinks: ['forms/Section 34 Checklist.xlsx',],
						contact: emails.finance,
						contactSubject: "Section 34 Checklist",
				
					},

					{
						name:'Ombudsman Employee DOA Limitations', 
						about:'',
						instructions: ['Refer to these general financial tools to help with procurement and delegation of authority inquiries. If you have any questions about these forms or delegation limits please send and email using the link below. '],
						forms: ['DOA Matrix - Ombudsman' ],
						formLinks: ['forms/DOA matrix - Ombudsman.xlsx'],
						contact: emails.finance,
						contactSubject: "Section 34 Checklist",
				
					},
					

				
					
				  ],
	},


	{ //Travel Services
		name:'Travel',
		message: 'Click on the links below to find more information about each service',
		services: [	

						
					{
						name:'Duty Travel Coordination', 
						instructions: ['To budget for travel, please complete an Individual Travel Authorization Form (DND2999) and include along with other required documents to the Finance Department. In the rare case where a receipt has been lost while travelling, a Lost Receipt Declaration Form is included below.'],
						forms: ['Individual Travel Authority Form D2999M', 
							'Lost Receipt Declaration', 
							'Record of Travel Expenses EN',
							'Relevé des frais de déplacement FR',
							'Reference to kilometric rates - Annex B of NJC'],
						formLinks: ['forms/3 - Individual Travel Authority Form_d2999m (2016).pdf',
							'forms/Lost Receipt Declaration.pdf', 
							'forms/Record of Travel Expenses EN.xlsx',
							'forms/Relevé des frais de déplacement FR.xls',
							'http://www.njc-cnm.gc.ca/directive/d10/v238/en']
					
					},
					
					{
						name:'Traveler & Travel Arranger', 
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
						name:'Traveler & Travel Arranger Checklists', 
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
						instructions: ['To request a taxi chit, send an email using the link below and ensure receipts are delivered to the Finance Department upon returning from a trip.'],
						contact: emails.finance,
						contactSubject: "Taxi Chit Request"
				
					},

					{
						name:'Hospitality/Event Forms', 
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

	

	
	];
	
});



app.directive('back', ['$window', function($window) { //Directive for back navigation
	
	return {
		
		
		link: function(scope,elem,attrs) {
			elem.bind('click', function() { $window.history.back();});
		}
		
	};
	
}]);

app.directive('targetBlank', function() {
  return {
    compile: function(element) {
      var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
      elems.attr("target", "_blank");
    }
  };
});

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

