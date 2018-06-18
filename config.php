<?php
$servername = $_SERVER['SERVER_NAME'];
$username = "root";
$password = "";
$dbname = "";
//connect to server
$conn = mysqli_connect($servername, $username, $password);
//set custom error messages
//create error handling function
function errorHandler($errlevel, $errMessage, $errFile, $errLine){
	echo "<h3><font color='red'>An error occured on line " . $errLine . " at " . $errFile . " : " . $errMessage . "</font></h3>";
}
set_error_handler("errorHandler");
if(!$conn){
	echo "<h1>Error ". mysqli_connect_error($conn) . "</h1>";
}
else{
	//create database OYINKAN if it does not exist before
	$createDatabaseSql = "CREATE DATABASE IF NOT EXISTS OYINKAN";
	if(mysqli_query($conn, $createDatabaseSql)){
		$dbname = "OYINKAN";
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		if(!$conn){
			echo "<h1>An error occured while trying to connect server</h1>";
		}
		else{
			
		}
	}
	else{
		echo "<h3>An error occured on the server</h3>";
	}
}
?>