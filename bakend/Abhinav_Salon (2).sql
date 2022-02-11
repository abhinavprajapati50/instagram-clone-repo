-- -- phpMyAdmin SQL Dump
-- -- version 5.1.1
-- -- https://www.phpmyadmin.net/
-- --
-- -- Host: localhost
-- -- Generation Time: Dec 21, 2021 at 09:29 AM
-- -- Server version: 5.7.36-0ubuntu0.18.04.1
-- -- PHP Version: 7.4.23

-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- START TRANSACTION;
-- SET time_zone = "+00:00";


-- /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
-- /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
-- /*!40101 SET NAMES utf8mb4 */;

-- --
-- -- Database: `Abhinav_Salon`
-- --

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `appointment`
-- --

-- CREATE TABLE `appointment` (
--   `id` int(11) NOT NULL,
--   `first_name` varchar(255) NOT NULL,
--   `last_name` varchar(255) NOT NULL,
--   `email` varchar(255) NOT NULL,
--   `mobile` varchar(15) NOT NULL,
--   `service_type` varchar(255) NOT NULL,
--   `date` date NOT NULL,
--   `time` time NOT NULL,
--   `remark` varchar(14) NOT NULL,
--   `status` varchar(255) NOT NULL,
--   `chr_delete` tinyint(4) NOT NULL,
--   `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   `modified_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `contact`
-- --

-- CREATE TABLE `contact` (
--   `id` int(11) NOT NULL,
--   `first_name` varchar(255) NOT NULL,
--   `last_name` varchar(255) NOT NULL,
--   `email` varchar(255) NOT NULL,
--   `remark` varchar(255) DEFAULT NULL,
--   `chr_delete` tinyint(4) NOT NULL,
--   `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   `modified_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `navbars`
-- --

-- CREATE TABLE `navbars` (
--   `id` int(11) NOT NULL,
--   `title` varchar(255) DEFAULT NULL,
--   `parent_Menu` int(11) DEFAULT NULL,
--   `page_slug` varchar(255) DEFAULT NULL,
--   `chr_delete` tinyint(4) DEFAULT '0',
--   `createdAt` datetime NOT NULL,
--   `updatedAt` datetime NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --
-- -- Dumping data for table `navbars`
-- --

-- INSERT INTO `navbars` (`id`, `title`, `parent_Menu`, `page_slug`, `chr_delete`, `createdAt`, `updatedAt`) VALUES
-- (1, 'Home', 0, NULL, 0, '2021-12-20 05:27:53', '2021-12-20 05:27:53'),
-- (2, 'About Us', 0, NULL, 0, '2021-12-20 05:28:06', '2021-12-20 05:28:06'),
-- (3, 'Careers', 2, NULL, 0, '2021-12-20 05:28:19', '2021-12-20 05:28:19'),
-- (4, 'Our Team', 2, NULL, 0, '2021-12-20 05:28:29', '2021-12-20 05:28:29'),
-- (5, 'Contact us', 0, NULL, 0, '2021-12-20 05:28:36', '2021-12-20 05:28:36'),
-- (6, 'Services', 0, NULL, 0, '2021-12-20 05:28:48', '2021-12-20 05:28:48'),
-- (7, 'Luxury Spa', 6, NULL, 0, '2021-12-20 05:29:16', '2021-12-20 05:29:16'),
-- (8, 'Hair Cutting', 6, NULL, 0, '2021-12-20 05:29:25', '2021-12-20 05:29:25');

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `pages`
-- --

-- CREATE TABLE `pages` (
--   `id` int(10) NOT NULL,
--   `title` varchar(255) NOT NULL,
--   `slug` varchar(255) NOT NULL,
--   `image` varchar(255) DEFAULT NULL,
--   `description` varchar(255) NOT NULL,
--   `chr_delete` tinyint(4) NOT NULL DEFAULT '0',
--   `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   `modified_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `services`
-- --

-- CREATE TABLE `services` (
--   `id` int(11) NOT NULL,
--   `title` varchar(255) NOT NULL,
--   `image` varchar(255) NOT NULL,
--   `short_description` varchar(255) NOT NULL,
--   `long_description` varchar(255) NOT NULL,
--   `chr_delete` tinyint(4) NOT NULL,
--   `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   `modified_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `signUpUsers`
-- --

-- CREATE TABLE `signUpUsers` (
--   `id` int(11) NOT NULL,
--   `email` varchar(255) DEFAULT NULL,
--   `password` varchar(255) DEFAULT NULL,
--   `createdAt` datetime NOT NULL,
--   `updatedAt` datetime NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --
-- -- Dumping data for table `signUpUsers`
-- --

-- INSERT INTO `signUpUsers` (`id`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
-- (35, 'abhinav50@gmail.com', 'anbsjj4g@G', '2021-12-10 10:05:00', '2021-12-10 10:05:00'),
-- (36, 'niraj50@gmail.com', 'anbsjj4g@Gsd', '2021-12-10 10:44:27', '2021-12-10 10:44:27');

-- --
-- -- Indexes for dumped tables
-- --

-- --
-- -- Indexes for table `appointment`
-- --
-- ALTER TABLE `appointment`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Indexes for table `contact`
-- --
-- ALTER TABLE `contact`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Indexes for table `navbars`
-- --
-- ALTER TABLE `navbars`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Indexes for table `pages`
-- --
-- ALTER TABLE `pages`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Indexes for table `services`
-- --
-- ALTER TABLE `services`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Indexes for table `signUpUsers`
-- --
-- ALTER TABLE `signUpUsers`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- AUTO_INCREMENT for dumped tables
-- --

-- --
-- -- AUTO_INCREMENT for table `appointment`
-- --
-- ALTER TABLE `appointment`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `navbars`
-- --
-- ALTER TABLE `navbars`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

-- --
-- -- AUTO_INCREMENT for table `pages`
-- --
-- ALTER TABLE `pages`
--   MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `services`
-- --
-- ALTER TABLE `services`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- --
-- -- AUTO_INCREMENT for table `signUpUsers`
-- --
-- ALTER TABLE `signUpUsers`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
-- COMMIT;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
