CREATE DATABASE `movie-db`;
USE `movie-db`;
CREATE TABLE `Movies` (`id` int(11) NOT NULL AUTO_INCREMENT,
`title` varchar(255) DEFAULT NULL,
`year` int(11) DEFAULT NULL,
`user` varchar(255) DEFAULT NULL,
`public` boolean DEFAULT true,
 PRIMARY KEY (`id`)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `Movies` (`title`, `year`) VALUES
('Avengers: Endgame', 2019),
('Avengers: Infinity War', 2018),
('Captain America: The First Avenger', 2011),
('Spider-Man: Far From Home', 2019);