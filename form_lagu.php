<?php 
include 'db_config.php';
$id = $_GET['id'] ?? null;
$data = ['title' => '', 'artist' => '', 'image_name' => '', 'file_name' => ''];

if ($id) {
    $res = mysqli_query($conn, "SELECT * FROM songs WHERE id = $id");
    $data = mysqli_fetch_assoc($res);
}

if (isset($_POST['save'])) {
    $title = mysqli_real_escape_string($conn, $_POST['title']);
    $artist = mysqli_real_escape_string($conn, $_POST['artist']);

    if ($id) {
        // Mode EDIT: Update teks dulu
        mysqli_query($conn, "UPDATE songs SET title='$title', artist='$artist' WHERE id=$id");
        
        // Cek jika gambar diganti
        if ($_FILES['image']['name']) {
            $imgName = time() . "_" . $_FILES['image']['name'];
            move_uploaded_file($_FILES['image']['tmp_name'], "images/" . $imgName);
            mysqli_query($conn, "UPDATE songs SET image_name='$imgName' WHERE id=$id");
        }
        header("Location: index.php");
    } else {
        // Mode TAMBAH: Upload lagu & gambar
        $songName = time() . "_" . $_FILES['music_file']['name'];
        $imgName = time() . "_" . $_FILES['image']['name'];

        move_uploaded_file($_FILES['music_file']['tmp_name'], "uploads/" . $songName);
        move_uploaded_file($_FILES['image']['tmp_name'], "images/" . $imgName);

        mysqli_query($conn, "INSERT INTO songs (title, artist, image_name, file_name) 
                             VALUES ('$title', '$artist', '$imgName', '$songName')");
        header("Location: index.php");
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Input Lagu</title>
    <style>
        body { background: #121212; color: white; font-family: sans-serif; padding: 50px; text-align: center; }
        form { background: #181818; padding: 20px; border-radius: 8px; display: inline-block; width: 400px; text-align: left; }
        input { width: 95%; padding: 10px; margin: 10px 0; background: #282828; border: 1px solid #333; color: white; }
        .btn { background: #1DB954; color: white; border: none; padding: 10px; width: 100%; font-weight: bold; cursor: pointer; }
    </style>
</head>
<body>
    <form action="" method="POST" enctype="multipart/form-data">
        <h2><?= $id ? 'Edit Lagu' : 'Tambah Lagu Baru' ?></h2>
        
        <label>Judul Lagu</label>
        <input type="text" name="title" value="<?= $data['title'] ?>" required>
        
        <label>Nama Artis/Penyanyi</label>
        <input type="text" name="artist" value="<?= $data['artist'] ?>" required>

        <label>Cover Gambar (.jpg / .png)</label>
        <input type="file" name="image" accept="image/*" <?= $id ? '' : 'required' ?>>
        
        <?php if (!$id): ?>
            <label>File Lagu (.mp3)</label>
            <input type="file" name="music_file" accept="audio/*" required>
        <?php endif; ?>

        <button type="submit" name="save" class="btn">SIMPAN LAGU</button>
        <p><a href="index.php" style="color: #b3b3b3; text-decoration: none;">Batal</a></p>
    </form>
</body>
</html>