/*
 * Startup (main) controller for the app.
 * 
 * The startup controller may init a DB for offline use, check for network availability,
 * inspect the users session (they may already be authenticated if we support 
 * remember-me mode), and redirect accordingly.
 */
MVC.ui.StartupController = (function() {

	function showLoginWindow() {
		MVC.ui.LoginController.init();
	}
	
	
	return {
		init: function() {
			showLoginWindow();
		}
	};

})();