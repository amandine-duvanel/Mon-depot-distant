-- Evaluation BDD : exerice 1

DROP DATABASE IF EXISTS exo1;
CREATE DATABASE exo1;
USE exo1;
CREATE TABLE `produit`(
	pro_num	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	pro_libelle VARCHAR(50) NOT NULL,
	pro_description VARCHAR(50) NOT NULL 
);

CREATE TABLE `client`(
	cli_num	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	cli_nom 	VARCHAR(50) NOT NULL,
	cli_adresse VARCHAR(50) NOT NULL ,
	cli_tel  VARCHAR(30) NOT NULL
);
CREATE TABLE `commande`(
	com_num INT not NULL AUTO_INCREMENT PRIMARY KEY,
	cli_num INT,
	com_date DATETIME,
	com_obs VARCHAR(50),
	FOREIGN KEY (cli_num) REFERENCES `client`(cli_num)
);
CREATE TABLE `est_compose`(
	com_num INT,
	pro_num INT,
	est_qte INT,
	PRIMARY KEY (com_num,pro_num),
	FOREIGN KEY (com_num) REFERENCES `commande`(com_num),
	FOREIGN KEY (pro_num) REFERENCES `produit`(pro_num)
);

-- créer un index sur cli_nom
USE exo1;
CREATE INDEX `cli_index` ON `client`(cli_nom);