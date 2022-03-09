Mit dem Befehl 
```shell
docker run --name mysql -v db-data:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=sml12345 -e MYSQL_ROOT_HOST=% -p 3306:3306 -d mysql:latest
```
Kann der MySql docker Container gestartet werden, anschliessend mit 
```shell
docker exec -it mysql mysql -p 
```
zu dem mysql server des Container verbinden.
</br>
Mit Folgendem SQL kann die Datenbank erstellt werden.
```SQL
CREATE DATABASE `movie-db`;
USE `movie-db`;
CREATE TABLE `Movies` (`id` int(11) NOT NULL AUTO_INCREMENT,
`title` varchar(255) DEFAULT NULL,
`year` int(11) DEFAULT NULL,PRIMARY KEY (`id`)) 
ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `Movies` (`title`, `year`) VALUES 
('Avengers: Endgame', 2019),
('Avengers: Infinity War', 2018),
('Captain America: The First Avenger', 2011),
('Spider-Man: Far From Home', 2019);
```