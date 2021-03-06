-- --------------------------------------------------------
-- Host:                         localhost
-- Server Version:               8.0.26 - MySQL Community Server - GPL
-- Server Betriebssystem:        Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Exportiere Datenbank Struktur für seatplandb
CREATE DATABASE IF NOT EXISTS `seatplandb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `seatplandb`;

-- Exportiere Struktur von Tabelle seatplandb.booking_history
CREATE TABLE IF NOT EXISTS `booking_history` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `USERID` int DEFAULT NULL,
  `ROOM` varchar(50) NOT NULL,
  `ROOMID` int DEFAULT NULL,
  `SEATNUMBER` int DEFAULT NULL,
  `MORNING` int DEFAULT NULL,
  `AFTERNOON` int DEFAULT NULL,
  `CREATEDDATE` timestamp NULL DEFAULT NULL,
  `STARTDATE` timestamp NULL DEFAULT NULL,
  `STARTDATESTAMP` int DEFAULT NULL,
  `ENDDATE` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Exportiere Daten aus Tabelle seatplandb.booking_history: ~0 rows (ungefähr)
/*!40000 ALTER TABLE `booking_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking_history` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle seatplandb.divisions
CREATE TABLE IF NOT EXISTS `divisions` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Exportiere Daten aus Tabelle seatplandb.divisions: ~0 rows (ungefähr)
/*!40000 ALTER TABLE `divisions` DISABLE KEYS */;
/*!40000 ALTER TABLE `divisions` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle seatplandb.favorites
CREATE TABLE IF NOT EXISTS `favorites` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `USERID` int DEFAULT NULL,
  `ROOMID` int DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Exportiere Daten aus Tabelle seatplandb.favorites: ~0 rows (ungefähr)
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle seatplandb.users
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `PASSWORD` varchar(50) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `NAME` varchar(50) NOT NULL DEFAULT '',
  `SHORT` varchar(50) NOT NULL DEFAULT '',
  `DIVISION` varchar(50) NOT NULL DEFAULT '',
  `DIVISIONID` int DEFAULT NULL,
  `IMGPATH` varchar(50) DEFAULT '',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Exportiere Daten aus Tabelle seatplandb.users: ~0 rows (ungefähr)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
