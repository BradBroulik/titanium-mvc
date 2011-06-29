
MVC.ui.LoginController = (function(){
			
    function setEventListeners(w){	
		w.addEventListener('blur', function(){
			w.close();
        });
						
        w.addEventListener('focus', function(){
			setTimeout( function(){w.usernameTextField.focus();},  50); // <-- Timeout hack for focus defect: http://developer.appcelerator.com/question/48141/text-field-focus-breaks-when-window-is-closed-and-reopened
        });
        
        w.usernameTextField.addEventListener('return', function(){
            w.passwordTextField.focus();
        });
        
        w.passwordTextField.addEventListener('return', function(){
			w.passwordTextField.blur();  // Hide keyboard to prevent double-submit problem
			handleLoginEvent(w);
        });
    }
	
	function handleLoginEvent(w){
		var username = w.usernameTextField.value;
		var password = w.passwordTextField.value;
		
		if (username == null || username.length == 0 ||	password == null ||	password.length == 0) {
			Ti.UI.createAlertDialog({title: "Login Failed", message: "Please login"}).show();
			return;
		} else {
			// Set remember me switch
			Ti.App.Properties.setString("REMEMBER_ME", w.rememberMeSwitch.value);
						
			// Process login and forward...
			Ti.UI.createAlertDialog({title: "Login", message: "Process logon and forward if successful..."}).show();
		} 
	}
		
    return {
        init: function(){
            var win = MVC.ui.LoginView.createWindow();
            setEventListeners(win);
            win.open();
        }
    };
})();

