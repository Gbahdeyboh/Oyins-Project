/*================================================================================
|*The class below is uses to display and hide sruffs on the page in different ways |====================================
|*If the stuff to be displayed is to be displayed as a css "block", then the showStuffs() method of the class is called|===
|*If the stuff to be displayed is to be displayed as a css "flex", then the showFlexStuffs() method of the class is called|===============
|*If an element is to be hidden on the page, either it was displayed as "flex", or "block" the hideStuffs() method of the class is called|
========================================================================================================================================
*/
class displayStatus{
	/* The showStuffs() method displays stuffs as a "block" css style  */
	static showStuffs(stuff){
		stuff.style.display = "block";
	}
	/* The showFlexStuffs() method displays stuffs as a "flex" css style  */
	static showFlexStuffs(stuff){
		stuff.style.display = "flex";
	}
	static hideStuffs(stuff){
		stuff.style.display = "none";
	}
	/* The showInlineBlockStuffs() method displaylays stuffs as a "inline-css" css style  */
	static showInlineBlockStuffs(){
		stuff.style.display = "inline-block";
	}
}
//The function below handles users login
function login(){
	const username = document.querySelector('#username'); //Default username
	const password = document.querySelector('#password'); //Default password
	if(username.value == "" && password.value == ""){
		const hideLogin = document.getElementsByClassName('login-body')[0];
		displayStatus.hideStuffs(hideLogin); //hide login panel if username and password inputed are correct
		const showBody = document.getElementsByClassName('body')[0];
		displayStatus.showStuffs(showBody);
		const showBar = document.getElementsByClassName('bar')[0];
		displayStatus.showFlexStuffs(showBar);
		const mainBody = document.getElementsByClassName('mainBody')[0];
		displayStatus.showFlexStuffs(mainBody);
		const slideMenuBar = document.getElementsByClassName('bar_icon')[0];
		displayStatus.showStuffs(slideMenuBar)
	}
	else{
		const errorMessage = document.querySelector("#login_error");
		displayStatus.showStuffs(errorMessage); //show error message if username or password is wrong
	}
}
//display menu when menu icon is clicked
function showMenu(){
	const menu = document.getElementsByClassName('slideInMenu')[0];
	displayStatus.showStuffs(menu);
	/*
	const overlay = document.getElementsByClassName('generalPageOverlay')[0];
	showStuffs(overlay);
	*/
}
//hide menu when close icon is clicked
function hideMenu(){
	const close = document.getElementsByClassName('slideInMenu')[0];
	displayStatus.hideStuffs(close); //close slide in menu
}
function showRegister(){
	const registrationPage = document.getElementsByClassName('registrationPage')[0];
	displayStatus.showStuffs(registrationPage); //displays registration page
	//Hides every other pages
	const slideInMenu = document.getElementsByClassName('slideInMenu')[0];
	displayStatus.hideStuffs(slideInMenu);
	const diagnosis = document.getElementsByClassName('diagnosis')[0];
	displayStatus.hideStuffs(diagnosis);
	const patientsHistory = document.getElementsByClassName('patientsMedicalHistory')[0];
	displayStatus.hideStuffs(patientsHistory);
	const patientsLists = document.getElementsByClassName('patientsRecords')[0];
	displayStatus.hideStuffs(patientsLists);
	/*
	const overlay = document.getElementsByClassName('generalPageOverlay')[0];
	showStuffs(overlay);
	*/
}
function logout(){
	//hide every other page
	const close = document.getElementsByClassName('slideInMenu')[0];
	displayStatus.hideStuffs(close); //hide slideIn menu
	const registrationPage = document.getElementsByClassName('registrationPage')[0];
	displayStatus.hideStuffs(registrationPage); //hide registration page
	const patientsHistory = document.getElementsByClassName('patientsMedicalHistory')[0];
	displayStatus.hideStuffs(patientsHistory);
	const patientsLists = document.getElementsByClassName('patientsRecords')[0];
	displayStatus.hideStuffs(patientsLists);
	/*
	|=====================================================================================
	| Display login page after successfull logout                                          |
	| A function that checks if user has been successfully logged out should be used here  |
	=======================================================================================
	*/
	const showLogin = document.getElementsByClassName('login-body')[0];
	displayStatus.showFlexStuffs(showLogin);
	const menuBars = document.getElementsByClassName('bar')[0];
	displayStatus.hideStuffs(menuBars);
}
//Diagnose a patient
function diagnose(){
	//hide every other page first
	const close = document.getElementsByClassName('slideInMenu')[0];
	displayStatus.hideStuffs(close); //hide slideIn menu
	const registrationPage = document.getElementsByClassName('registrationPage')[0];
	displayStatus.hideStuffs(registrationPage); //hide registration page
	const hideLogin = document.getElementsByClassName('login-body')[0];
	displayStatus.hideStuffs(hideLogin);
	const patientsHistory = document.getElementsByClassName('patientsMedicalHistory')[0];
	displayStatus.hideStuffs(patientsHistory);
	const patientsLists = document.getElementsByClassName('patientsRecords')[0];
	displayStatus.hideStuffs(patientsLists);
	//show diagnosis page after every other page has been hidden
	const diagnosis = document.getElementsByClassName('diagnosis')[0];
	displayStatus.showStuffs(diagnosis);
}
//Displaying list of registered patients
function showPatientsLists(){
	//hide every other page first
	const close = document.getElementsByClassName('slideInMenu')[0];
	displayStatus.hideStuffs(close); //hide slideIn menu
	const registrationPage = document.getElementsByClassName('registrationPage')[0];
	displayStatus.hideStuffs(registrationPage); //hide registration page
	const hideLogin = document.getElementsByClassName('login-body')[0];
	displayStatus.hideStuffs(hideLogin);
	const diagnosis = document.getElementsByClassName('diagnosis')[0];
	displayStatus.hideStuffs(diagnosis);
	const patientsHistory = document.getElementsByClassName('patientsMedicalHistory')[0];
	displayStatus.hideStuffs(patientsHistory);
	//show lists of patients
	const patientsLists = document.getElementsByClassName('patientsRecords')[0];
	displayStatus.showStuffs(patientsLists);
	/*
	===================================================================================
	|Event Listener is added to the view button to display medical history when clicked|
	|This is done because patients history is dynamically loaded from the database and |
	|has to match selected patients records                                            |
	===================================================================================
	*/
	const viewHistory = document.getElementsByClassName('viewHistory');
	let i; 
	for(i = 0; i < viewHistory.length; i++){
		viewHistory[i].addEventListener("click", function(){
			showPatientsHistory();
		});
	}
}
//Showing patients history and brief data
function showPatientsHistory(){
	//hide all other pages first
	const close = document.getElementsByClassName('slideInMenu')[0];
	displayStatus.hideStuffs(close); //hide slideIn menu
	const registrationPage = document.getElementsByClassName('registrationPage')[0];
	displayStatus.hideStuffs(registrationPage); //hide registration page
	const hideLogin = document.getElementsByClassName('login-body')[0];
	displayStatus.hideStuffs(hideLogin);
	const diagnosis = document.getElementsByClassName('diagnosis')[0];
	displayStatus.hideStuffs(diagnosis);
	const patientsLists = document.getElementsByClassName('patientsRecords')[0];
	displayStatus.hideStuffs(patientsLists);
	//show patients medical history
	const patientRocords = document.getElementsByClassName('patientsMedicalHistory')[0];
	displayStatus.showStuffs(patientRocords);
}