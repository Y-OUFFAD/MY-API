-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost.3000
-- Generation Time: Sep 12, 2016 at 09:39 AM
-- Server version: 10.0.25-MariaDB-0ubuntu0.16.04.1
-- PHP Version: 7.0.8-0ubuntu0.16.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------

--
--
Database: `MyIRC`

CREATE DATABASE IF NOT EXISTS `myIRC`;

-- USE `myIRC`;

CREATE TABLE IF NOT EXISTS `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    CONSTRAINT UC_Users UNIQUE (`username`),
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Channels` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `identifier` VARCHAR(45) NOT NULL,
    `creation_date` DATETIME NOT NULL,
    `type` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `messages`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `channel_id` INTEGER NOT NULL,
    `sender_id` INTEGER NOT NULL,
    `receiver_id` INTEGER,
    `text` TEXT NOT NULL,
    `date` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`channel_id`) REFERENCES `channels`(`id`),
    FOREIGN KEY (`receiver_id`) REFERENCES `users`(`id`),
    FOREIGN KEY (`sender_id`) REFERENCES `users`(`id`)
);

ENGINE=InnoDB DEFAULT CHARSET=utf8;*/

Table structure for table `user`

CREATE TYPE role_enum AS ENUM ('user', 'admin');
CREATE TABLE user (
    userID int (12),
    LastName varchar(255),
    FirstName varchar(255),
    Password varchar (255)
    Adress varchar(255),
    role role_enum,
    Userline BIT (0),
);
--

INSERT INTO user (
  userID, 
  LastName,
  FirstName, 
  Password, 
  Adress, 
  role, 
  Userline, 
) VALUES (

  23499,
  'Adk',
  'ZAO'
  'POUREIIAPS',
  'djhdyya@gmail.com'
  'user',
  'Online'

);

SELECT * FROM user WHERE UsersID < 5


CREATE TABLE Channels (
    ChannelsID varchar (25),
    UserID int(12),
    types varchar(255),
    Export varchar(255)
-- 
CREATE TABLE Messages (
    MessageID varchar(255),
    ChannelsID varchar (25),
    UserID int(12),
    content varchar(1000), 

    heure date(100),
-- 
CREATE TABLE Users.Channels (
    MessageID varchar(255),
    ChannelID varchar (25),
    UsersID int(12),
    content varchar(1000), 
    heure date(100),
    -- 