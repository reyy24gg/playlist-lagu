<?php
include 'db_config.php';
$id = $_GET['id'];

$res = mysqli_query($conn, "SELECT * FROM songs WHERE id = $id");
$data = mysqli_fetch_assoc($res);

// Hapus file fisik
if ($data['file_name']) unlink("uploads/" . $data['file_name']);
if ($data['image_name'] && $data['image_name'] != 'default.jpg') unlink("images/" . $data['image_name']);

// Hapus dari database
mysqli_query($conn, "DELETE FROM songs WHERE id = $id");
header("Location: index.php");
?>