-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: sensorcloud
-- ------------------------------------------------------
-- Server version	5.7.11-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `billing_info`
--

DROP TABLE IF EXISTS `billing_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `billing_info` (
  `bill_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `UsageTime` varchar(45) NOT NULL,
  `price` decimal(2,0) NOT NULL,
  `amount` decimal(2,0) NOT NULL,
  PRIMARY KEY (`bill_id`),
  KEY `user_idx` (`user_id`),
  CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing_info`
--

LOCK TABLES `billing_info` WRITE;
/*!40000 ALTER TABLE `billing_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `billing_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `humidity_data`
--

DROP TABLE IF EXISTS `humidity_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `humidity_data` (
  `sensor_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `humidity_data` varchar(45) NOT NULL,
  `timestamp` varchar(45) NOT NULL,
  KEY `user_id_idx` (`user_id`),
  KEY `sensor_id_idx` (`sensor_id`),
  CONSTRAINT `sensor_id` FOREIGN KEY (`sensor_id`) REFERENCES `sensor_details` (`sensor_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `humidity_data`
--

LOCK TABLES `humidity_data` WRITE;
/*!40000 ALTER TABLE `humidity_data` DISABLE KEYS */;
INSERT INTO `humidity_data` VALUES (1,1,' 54','2016-11-10 23:49:03'),(1,1,'56','2016-11-10 23:49:13');
/*!40000 ALTER TABLE `humidity_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sensor_details`
--

DROP TABLE IF EXISTS `sensor_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sensor_details` (
  `sensor_id` int(11) NOT NULL,
  `lattitude` varchar(45) NOT NULL,
  `longitude` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `public_ip` varchar(45) NOT NULL,
  `private_ip` varchar(45) NOT NULL,
  `sensor_tag_key` varchar(45) NOT NULL,
  `user_id` int(11) NOT NULL,
  `instance_id` varchar(45) NOT NULL,
  `sensor_tag_value` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`sensor_id`),
  KEY `userid_idx` (`user_id`),
  CONSTRAINT `userid` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sensor_details`
--

LOCK TABLES `sensor_details` WRITE;
/*!40000 ALTER TABLE `sensor_details` DISABLE KEYS */;
INSERT INTO `sensor_details` VALUES (1,'37.24782','-122.03613','running','54.186.233.231','172.31.33.132','Name',1,'i-002ac897f284db273','sensor1'),(2,'37.15624','-122.03824','running','54.191.213.214','172.31.25.112','Name',2,'i-0127d50d82f64f8f9','sensor2');
/*!40000 ALTER TABLE `sensor_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_details` (
  `id` int(11) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `address` varchar(45) NOT NULL,
  `zipcode` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
INSERT INTO `user_details` VALUES (1,'Ajay','Modi','ajay.modi@sjsu.edu','1234','6464076527','san jose','95112'),(2,'Sid','Gupta','sid@gail.com','123456','6465287910','san jose','95117'),(3,'Ashay','Argal','ash@gmail.com','1125','6465210347','san jose','95112');
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-30 21:26:10
