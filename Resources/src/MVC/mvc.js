/*
 * MVC namespace contains the resources for the MVC example app.
 */
var MVC = {}; 


/*
 * MVC.ui resources.
 */
MVC.ui = {};
Ti.include(
	'/src/MVC/ui/LoginController.js',
	'/src/MVC/ui/LoginView.js',
	'/src/MVC/ui/StartupController.js'
);