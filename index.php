<!DOCTYPE html>
<html>
	<head>
		<title>OSX JavaScript Remake</title>
		<link rel="stylesheet" href="css/style.css" />
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	</head>
	<body>
		<div id='menubar'>
			<div class='AppContainer'>
			<div class='Blur'></div>
				<div class='AppContent'>
					<ul id='menu-items' class='left'>
						<li class='fa fa-apple icon'></li>
						<li class='page drops'>Finder</li>
						<li class='drops'>File</li>
						<li class='drops'>Edit</li>
						<li class='drops'>View</li>
						<li class='drops'>Go</li>
						<li class='drops'>Window</li>
						<li class='drops'>Help</li>
					</ul>
					<ul id='menu-items' class='right'>
						<li class='fa fa-dropbox icon'></li>
						<li class='fa fa-volume-up icon'></li>
						<li class='fa fa-wifi icon'></li>
						<li class='fa fa-battery-half icon'></li>
						<li class='time drops'></li>
						<li class='fa fa-search icon'></li>
						<li class='fa fa-align-left icon'></li>
					</ul>
				</div>
			</div>
		</div>
		<div id='container'>
						
		</div>
		<div id='dock'>
			<div class='AppContainer'>
			<div class='Blur'></div>
				<div class='AppContent'>
					Dock Content Here
				</div>
			</div>
		</div>
	</body>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="js/desktop.js" type="text/javascript"></script>
</html>