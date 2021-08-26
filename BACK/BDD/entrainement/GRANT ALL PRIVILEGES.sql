-- pour donner tous les droits sur la bdd à util1
GRANT ALL PRIVILEGES 
ON Hotels.*
TO 'util1'@'localhost'IDENTIFIED BY 'util1'; 

-- pour afficher tous les utilisateurs-- 
select user,host from MySQL.user;

-- pour aficher les droits d'un utilisateur --
show grants for 'util1'@'localhost';

-- supprimer un utilisateur--
DROP user 'util1'@'localhost';