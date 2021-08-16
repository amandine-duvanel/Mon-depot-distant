-- 1 - Afficher la liste des hôtels. Le résultat doit faire apparaître le nom de l’hôtel et la ville
use hotel;
select hot_nom, hot_ville from hotel;

-- 2 - Afficher la ville de résidence de Mr White Le résultat doit faire apparaître le nom, le prénom, et l'adresse du client
select cli_nom, cli_prenom, cli_ville FROM client
WHERE cli_nom = 'White';

-- 3 - Afficher la liste des stations dont l’altitude < 1000 Le résultat doit faire apparaître le nom de la station et l'altitude
select sta_nom,sta_altitude FROM station
WHERE sta_altitude<1000;

-- 4 - Afficher la liste des chambres ayant une capacité > 1 Le résultat doit faire apparaître le numéro de la chambre ainsi que la capacité
select cha_numero,cha_capacite from chambre
WHERE cha_capacite>1;

-- 5 - Afficher les clients n’habitant pas à Londre Le résultat doit faire apparaître le nom du client et la ville
select cli_nom,cli_prenom,cli_ville from client
where cli_ville <> 'Londre';

-- 6 - Afficher la liste des hôtels située sur la ville de Bretou et possédant une catégorie>3 Le résultat doit faire apparaître le nom de l'hôtel, ville et la catégorie
select hot_nom,hot_ville,hot_categorie from hotel
where hot_ville='Bretou' and hot_categorie>3;

-- lot 2 : JOIN 
-- 7 - Afficher la liste des hôtels avec leur station Le résultat doit faire apparaître le nom de la station, le nom de l’hôtel, la catégorie, la ville
select nom_hotel,hot_categorie,hot_ville from hotel
join station
on 