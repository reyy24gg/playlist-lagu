-- Nama File: database.sql
-- Digunakan untuk membuat database dan tabel musik

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- 1. Buat Database (Jika belum ada)
CREATE DATABASE IF NOT EXISTS `music_db`;
USE `music_db`;

-- 2. Hapus tabel jika sudah ada (untuk reset/clean install)
DROP TABLE IF EXISTS `songs`;

-- 3. Struktur Tabel `songs`
CREATE TABLE `songs` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL COMMENT 'Judul Lagu',
  `artist` VARCHAR(255) NOT NULL COMMENT 'Nama Penyanyi',
  `image_name` VARCHAR(255) DEFAULT 'default.jpg' COMMENT 'Nama file cover gambar',
  `file_name` VARCHAR(255) NOT NULL COMMENT 'Nama file mp3',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Data Contoh (Opsional)
-- Data ini agar web kamu tidak kosong saat pertama kali dibuka
INSERT INTO `songs` (`title`, `artist`, `image_name`, `file_name`) VALUES
('Lagu Contoh 1', 'Penyanyi AI', 'default.jpg', 'sample1.mp3'),
('Lagu Contoh 2', 'Indie Artist', 'default.jpg', 'sample2.mp3');

COMMIT;