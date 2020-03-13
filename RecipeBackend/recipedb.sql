-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 06 mars 2020 kl 10:30
-- Serverversion: 10.4.8-MariaDB
-- PHP-version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `recipedb`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(34, 'Köttfärs'),
(32, 'Lasagne'),
(33, 'Pasta');

-- --------------------------------------------------------

--
-- Tabellstruktur `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `author_id` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL,
  `answer_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellstruktur `ingredient`
--

CREATE TABLE `ingredient` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `ingredient`
--

INSERT INTO `ingredient` (`id`, `name`) VALUES
(17, 'färska lasagneplattor'),
(18, 'blandfärs'),
(19, 'gul lök'),
(20, 'klyfta vitlök'),
(21, 'krossade tomater'),
(22, 'chilisås'),
(23, 'salt'),
(24, 'peppar'),
(25, 'olivolja'),
(26, 'mozzarellaost'),
(27, 'oregano'),
(28, 'smör'),
(29, 'vetemjöl'),
(30, 'mjölk'),
(31, 'vispgrädde'),
(32, 'muskot');

-- --------------------------------------------------------

--
-- Tabellstruktur `instruction`
--

CREATE TABLE `instruction` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `instruction`
--

INSERT INTO `instruction` (`id`) VALUES
(38);

-- --------------------------------------------------------

--
-- Tabellstruktur `recipe`
--

CREATE TABLE `recipe` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `author_id` int(11) NOT NULL,
  `instruction_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `recipe`
--

INSERT INTO `recipe` (`id`, `name`, `image`, `author_id`, `instruction_id`) VALUES
(22, 'Lasagne de luxe', 'https://img.koket.se/mobile/lasagne-de-luxe.jpg', 1, 38);

-- --------------------------------------------------------

--
-- Tabellstruktur `recipe_has_category`
--

CREATE TABLE `recipe_has_category` (
  `recipe_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `recipe_has_category`
--

INSERT INTO `recipe_has_category` (`recipe_id`, `category_id`) VALUES
(22, 32),
(22, 33),
(22, 34);

-- --------------------------------------------------------

--
-- Tabellstruktur `recipe_has_ingredient`
--

CREATE TABLE `recipe_has_ingredient` (
  `ingredient_id` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL,
  `unit` text NOT NULL,
  `amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `recipe_has_ingredient`
--

INSERT INTO `recipe_has_ingredient` (`ingredient_id`, `recipe_id`, `unit`, `amount`) VALUES
(22, 17, 'unit', 12),
(22, 18, 'gram', 600),
(22, 19, 'unit', 1),
(22, 20, 'unit', 2),
(22, 21, 'gram', 400),
(22, 22, 'mL', 50),
(22, 23, 'unit', 0),
(22, 24, 'unit', 0),
(22, 25, 'unit', 0),
(22, 26, 'mL', 300),
(22, 27, 'unit', 0),
(22, 28, 'g', 100),
(22, 29, 'mL', 100),
(22, 30, 'mL', 400),
(22, 31, 'mL', 500),
(22, 32, 'gram', 0.25);

-- --------------------------------------------------------

--
-- Tabellstruktur `recipe_like`
--

CREATE TABLE `recipe_like` (
  `id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellstruktur `step`
--

CREATE TABLE `step` (
  `id` int(11) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `number` int(2) NOT NULL,
  `instruction_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `step`
--

INSERT INTO `step` (`id`, `content`, `number`, `instruction_id`) VALUES
(60, 'Sätt ugnen på 200 grader. Hetta upp en stekpanna med smör och stek färs, lök och vitlök. Finfördela färsen och se till att den blir genomstekt.', 1, 38),
(61, 'Blanda ner konserverade tomater, chilisås, salt och peppar. Låt alltsammans sjuda, medan du gör béchamelsåsen.', 2, 38),
(62, 'Smält smöret i en kastrull. Vispa ner mjölet, och tillsätt mjölk och grädde under fortsatt vispning så att det inte blir klumpar. Krydda med muskot, salt och peppar. Låt koka upp och sjuda i ett par minuter.', 3, 38),
(63, 'Ringla lite olivolja i en ugnsform. Täck bottnen med béchamelsås och sedan med lasagneplattor. Varva sedan sås, köttfärsröra, riven ost och lasagneplattor ungefär tre gånger. Avsluta med sås och riven ost på toppen.', 4, 38),
(64, 'Grädda lasagnen i 20 minuter, eller tills osten fått vacker färg.', 5, 38),
(65, 'Servera tillsammans med en god och krispig sallad och toppa gärna med lite oregano.', 6, 38);

-- --------------------------------------------------------

--
-- Tabellstruktur `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index för tabell `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `instruction`
--
ALTER TABLE `instruction`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `instruction_id` (`instruction_id`);

--
-- Index för tabell `recipe_like`
--
ALTER TABLE `recipe_like`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `step`
--
ALTER TABLE `step`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`) USING HASH,
  ADD UNIQUE KEY `username` (`username`) USING HASH;

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT för tabell `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT för tabell `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT för tabell `instruction`
--
ALTER TABLE `instruction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT för tabell `recipe`
--
ALTER TABLE `recipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT för tabell `recipe_like`
--
ALTER TABLE `recipe_like`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT för tabell `step`
--
ALTER TABLE `step`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT för tabell `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
