<?php
if(isset($_GET['Search'])){
	$Search = array_diff(scandir("applications"), array('.', '..', 'Spotlight'));

	$SearchTerm = $_GET['Search'];

	foreach($Search as $File){

		if(stripos($File, $SearchTerm) !== false) {
			echo "<li>" . $File . "</li>";
		}
	}
} else {
	echo"Default Layout here.";
}

?>