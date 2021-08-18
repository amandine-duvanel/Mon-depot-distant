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
select sta_nom, hot_nom, hot_categorie, hot_ville from station
inner join hotel
on hot_sta_id = sta_id;
-- relier par la clé étrangere, en faisant attention aux différences de nom

-- 8 - Afficher la liste des chambres et leur hôtel Le résultat doit faire apparaître le nom de l’hôtel, la catégorie, la ville, le numéro de la chambre
select hot_nom,hot_categorie,hot_ville, cha_numero from hotel 
inner join chambre
on cha_hot_id = hot_id;

-- 9 - Afficher la liste des chambres de plus d'une place dans des hôtels situés sur la ville de Bretou Le résultat doit faire apparaître le nom de l’hôtel, la catégorie, la ville, le numéro de la chambre et sa capacité
select hot_nom,hot_categorie,hot_ville,cha_numero,cha_capacite from hotel
join chambre
on cha_hot_id = hot_id
where cha_capacite>1 and hot_ville='Bretou';

-- 10 - Afficher la liste des réservations avec le nom des clients Le résultat doit faire apparaître le nom du client, le nom de l’hôtel, la date de réservation
SELECT cli_nom, hot_nom, res_date FROM `client`
JOIN reservation
ON client.cli_id = reservation.res_cli_id
JOIN chambre
ON reservation.res_cha_id = chambre.cha_id
JOIN hotel
ON chambre.cha_hot_id = hotel.hot_id

-- 11 - Afficher la liste des chambres avec le nom de l’hôtel et le nom de la station Le résultat doit faire apparaître le nom de la station, le nom de l’hôtel, le numéro de la chambre et sa capacité
select sta_nom,hot_nom,cha_numero,cha_capacite from station
join hotel
on station.sta_id=hot_sta_id
join chambre
on cha_hot_id = hot_id;

-- 12 - Afficher les réservations avec le nom du client et le nom de l’hôtel AVEC datediff Le résultat doit faire apparaître le nom du client, le nom de l’hôtel, la date de début du séjour et la durée du séjour
select cli_nom, hot_nom,res_date_debut, datediff(res_date_fin,res_date_debut) from client
JOIN reservation
on res_cli_id = cli_id
join chambre
on res_cha_id=cha_id
join hotel 
on hot_id= cha_hot_id;
-- on doit passer par des tables dont on a pas besoin pour lier les clés étrangeres et primaires ensemble

-- 13 - Compter le nombre d’hôtel par station
-- count ? SUM 
select sta_id,sta_nom,COUNT(hot_sta_id) from station
join hotel
on hot_sta_id=sta_id
GROUP BY sta_id

-- 14 - Compter le nombre de chambre par station
select sta_id,sta_nom,COUNT(cha_hot_id) from station
join hotel
on hot_sta_id=sta_id
JOIN chambre
ON cha_hot_id=hot_id
GROUP BY sta_id;

-- 15 - Compter le nombre de chambre par station ayant une capacité > 1
select sta_id,sta_nom,COUNT(cha_hot_id) from station
join hotel
on hot_sta_id=sta_id
JOIN chambre
ON cha_hot_id=hot_id
where cha_capacite>1
GROUP BY sta_id;

-- 16 - Afficher la liste des hôtels pour lesquels Mr Squire a effectué une réservation
SELECT hot_nom, cli_nom, cha_numero, res_id FROM client
JOIN reservation
ON cli_id = res_cli_id
JOIN chambre
ON res_cha_id = cha_id
JOIN hotel
ON cha_hot_id = hot_id
WHERE cli_nom = 'Squire';

-- -- 17- Afficher la durée moyenne des réservations par station
select sta_id, AVG(datediff(res_date_fin,res_date_debut)) from reservation
join chambre
on res_cha_id = cha_id
JOIN hotel
on cha_hot_id =hot_id
join station
on sta_id=hot_sta_id
GROUP by sta_id;