/*================================================================================
|*The class below is udes to display and hide sruffs on the page in different ways |====================================
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
	displayStatus.hideStuffs(close);
}
function showRegister(){
	const registrationPage = document.getElementsByClassName('registrationPage')[0];
	displayStatus.showStuffs(registrationPage);
	const slideInMenu = document.getElementsByClassName('slideInMenu')[0];
	displayStatus.hideStuffs(slideInMenu);
	const diagnosis = document.getElementsByClassName('diagnosis')[0];
	displayStatus.hideStuffs(diagnosis);
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
	//show lists of patients
	const patientsLists = document.getElementsByClassName('patientsRecords')[0];
	displayStatus.showStuffs(patientsLists);
}	