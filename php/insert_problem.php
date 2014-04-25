<?php
	include_once('./connect.php');
	$grade = $_REQUEST['grade'];
	$ques = $_REQUEST['ques'];
	$ans = $_REQUEST['ans'];
	mysqli_query($connect, "INSERT INTO $grade (ques, ans) VALUES ('$ques','$ans')");
# vi:nu:nowrap:st=4:ts=4
?>
