<?php
include_once('./connect.php');
$query = 'SELECT * FROM exam_elem_1';
$ques = array();
$a = -1;
$result = mysqli_query($connect,$query) or die('Query failed: ' . mysql_error());
while ($list = mysqli_fetch_assoc($result)) {
	$ques[++$a] = $list;
}
echo json_encode($ques);
?>
