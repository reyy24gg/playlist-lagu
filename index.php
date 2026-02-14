<?php include 'db_config.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Spotify Clone</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background: #121212; color: white; padding: 40px; }
        .container { max-width: 900px; margin: auto; }
        .song-card { background: #181818; padding: 15px; margin-bottom: 10px; border-radius: 8px; display: flex; align-items: center; gap: 20px; transition: 0.3s; }
        .song-card:hover { background: #282828; }
        .cover-img { width: 60px; height: 60px; border-radius: 4px; object-fit: cover; }
        .info { flex-grow: 1; }
        .info h4 { margin: 0; font-size: 16px; }
        .info p { margin: 5px 0 0; color: #b3b3b3; font-size: 14px; }
        .actions a { color: #b3b3b3; text-decoration: none; font-size: 12px; margin-left: 10px; }
        .actions a:hover { color: #1DB954; }
        .btn-add { background: #1DB954; color: white; padding: 10px 20px; border-radius: 20px; text-decoration: none; font-weight: bold; display: inline-block; margin-bottom: 20px; }
        audio { height: 35px; filter: invert(100%) hue-rotate(180deg) brightness(1.5); }
    </style>
</head>
<body>
    <div class="container">
        <a href="form_lagu.php" class="btn-add">TAMBAH LAGU</a>
        
        <?php
        $res = mysqli_query($conn, "SELECT * FROM songs ORDER BY id DESC");
        while ($row = mysqli_fetch_assoc($res)): ?>
            <div class="song-card">
                <img src="images/<?= $row['image_name'] ?: 'default.jpg' ?>" class="cover-img">
                <div class="info">
                    <h4><?= $row['title'] ?></h4>
                    <p><?= $row['artist'] ?></p>
                </div>
                <audio controls>
                    <source src="uploads/<?= $row['file_name'] ?>" type="audio/mpeg">
                </audio>
                <div class="actions">
                    <a href="form_lagu.php?id=<?= $row['id'] ?>">Edit</a>
                    <a href="hapus.php?id=<?= $row['id'] ?>" onclick="return confirm('Hapus?')">Hapus</a>
                </div>
            </div>
        <?php endwhile; ?>
    </div>
</body>
</html>