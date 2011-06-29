/*
 * Login UI
 */
MVC.ui.LoginView = (function(){

    function buildLoginWindow(){
        var loginWindow = Ti.UI.createWindow({
            title: 'Login',
            barColor: '#225377'
        });
        
        return loginWindow;
    }
    
    function buildNavigationGroup(loginWindow){
        var navigationGroup = Ti.UI.iPhone.createNavigationGroup({
            window: loginWindow
        });
        var mainWindow = Ti.UI.createWindow();
		mainWindow.backgroundColor = 'blue';
        mainWindow.add(navigationGroup);
        return mainWindow;
    }
    
    function buildUsernameTextField(mainWindow){
        mainWindow.usernameTextField = Ti.UI.createTextField({
            autocorrect: false,
            hintText: 'Username',
            left: 10,
			width: 285,
			suppressReturn:false,
			autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
            clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
            borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
            returnKeyType: Ti.UI.RETURNKEY_NEXT
        });
    }
    
    function buildPasswordTextField(mainWindow){
        mainWindow.passwordTextField = Ti.UI.createTextField({
            autocorrect: false,
            hintText: 'Password',
            left: 10,
			width: 285,
			suppressReturn:false,
            clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
            borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
            returnKeyType: Ti.UI.RETURNKEY_GO,
            passwordMask: true
        });
    }

	
    function buildTableView(win){
        var data = [
			buildTableViewRow(win.usernameTextField),
			buildTableViewRow(win.passwordTextField)
		];
        
        var tableView = Titanium.UI.createTableView({
			allowsSelection: false,
			scrollable: false,
            backgroundColor: '#d4d2d3',
			moving: false,
            top: 43, // Show nav group 43 height
            style: Ti.UI.iPhone.TableViewStyle.GROUPED,
            data: data
        });
		Ti.App.Properties.setString("TABLE_VIEW_SEPERATOR_COLOR",tableView.separatorColor);
		win.add(tableView);
    }
    
	function buildTableViewRow(field){
		var row = Ti.UI.createTableViewRow();
		row.left = 0;
        row.backgroundColor = '#FFF';
        row.add(field);
		return row;
	}
		
    function buildRememberMeSwitch(mainWindow){
        mainWindow.rememberMeLabel = Ti.UI.createLabel({
            text: 'Remember me',
            color: '#113366',
            font: {
                fontFamily: 'Helvetica Neue',
                fontSize: 15
            },
            top: 170,
            left: 30,
            height: 'auto'
        });
        mainWindow.add(mainWindow.rememberMeLabel);
		
        mainWindow.rememberMeSwitch = Ti.UI.createSwitch({
            value: true,
            top: 165,
            left: 185
        });
        mainWindow.add(mainWindow.rememberMeSwitch);
    }
	
    return {
        createWindow: function(){
            var loginWindow = buildLoginWindow();
            var mainWindow = buildNavigationGroup(loginWindow);
            buildUsernameTextField(mainWindow);
            buildPasswordTextField(mainWindow);
            buildTableView(mainWindow);
			buildRememberMeSwitch(mainWindow);
            return mainWindow;
        }
    };
})();
