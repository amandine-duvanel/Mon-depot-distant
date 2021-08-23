DROP DATABASE IF EXISTS Hotel;
CREATE DATABASE Hotel;
USE Hotel;
CREATE TABLE station(
	num_station	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nom_station VARCHAR(50) NOT NULL
);

CREATE TABLE `client`(
	num_client	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	prenom_client 	VARCHAR(20) NOT NULL,
	nom_client VARCHAR(25) NOT NULL, 
	adresse_client  VARCHAR(50) NOT NULL
);
CREATE TABLE hotel	(
	num_hotel	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	numero_station INT NOT NULL, 
	adresse_hotel VARCHAR(50) NOT NULL,
	nom_hotel VARCHAR(20) NOT NULL, 
	categorie_hotel VARCHAR(50) NOT NULL, 
	capacite_hotel INT NOT NULL,
	FOREIGN KEY (numero_station) REFERENCES station(num_station)
);	
CREATE TABLE chambre(
	num_chambre INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	num_hotel INT NOT NULL,
	type_chambre VARCHAR(20) NOT NULL, 
	degre_confort VARCHAR(20) NOT NULL, 
	capacite_chambre INT NOT NULL, 
	FOREIGN KEY (num_hotel) REFERENCES hotel(num_hotel)
);	
	
CREATE TABLE Reservation( 
	num_chambre INT NOT NULL,
	num_client INT NOT NULL, 
	date_debut DATE,
	date_fin DATE,
	date_reservation DATE, 
	montant_arrhes INT NOT NULL, 
	prix_total INT NOT NULL, 
	PRIMARY KEY (num_chambre, num_client),
	FOREIGN KEY (num_chambre) REFERENCES hotel (num_hotel),
	FOREIGN KEY (num_client) REFERENCES `client`(num_client)
);
	