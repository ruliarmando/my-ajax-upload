<?php
//include kan script untuk error handler
include('error_handler.php');
//folder tempat mengupload
$uploaddir = './uploads/';
$file = $uploaddir.basename($_FILES['file']['name']);
if(move_uploaded_file($_FILES['file']['tmp_name'], $file)){
	//upload berhasil
	$result = 1;
}else{
	//upload gagal
	$result = 0;
}
sleep(10);
echo $result;