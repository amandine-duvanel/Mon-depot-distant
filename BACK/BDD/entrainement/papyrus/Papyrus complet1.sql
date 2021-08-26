-- cas papyrus complet

-- 1- Quelles sont les commandes du fournisseur 09120?
-- afficher numfou,nomvu,numcom, numlig,produit

USE papyrus;
select numfou,nomfou,numcom,numlig,libart from fournis
natural join ligcom
natural join produit
where numfou = 9120

-- 2 -Afficher le code des fournisseurs pour lesquels des commandes ont été passées.
-- numfou, numcom, delliv (attention au 0)
select numfou,delliv from vente
natural join fournis
where delliv > 0;

-- 3- Afficher le nombre de commandes fournisseurs passées, et le nombre de fournisseur concernés.
select count(delliv) as Nbr_cmd,count(DISTINCT numfou) as Nbr_fournis_concern from vente
where delliv>0;

-- 4 - Editer les produits ayant un stock inférieur ou égal au stock d'alerte et dont la quantité annuelle est inférieure à 1000 
-- (informations à fournir : n° produit, libelléproduit, stock, stockactuel d'alerte, quantitéannuelle)
select codart,libart,stkale,stkphy,qteann from produit
where stkphy <= stkale and qteann<1000;

-- 5- Quels sont les fournisseurs situés dans les départements 75 78 92 77 par ordre décroissant. 
-- num fou,nom fou, posfou
select numfou,nomfou,posfou from fournis
WHERE posfou LIKE '75%' OR posfou LIKE '78%' OR posfou LIKE '92%' OR posfou LIKE '77%'
order by posfou desc;

-- -- 6- Quelles sont les commandes passées au mois de mars et d'avril.
-- numcom,datcom,nomfou
select numcom,nomfou,libart,MONTH(datcom) as Mois from entcom
natural join fournis
natural join produit
where MONTH(datcom) = 3 or month(datcom)=4;

 -- 7- Quelles sont les commandes du jour qui ont des obversations particulières?
-- numcom,obscom,datcom,
select numcom,obscom,datcom,numfou from entcom
where obscom like "commande%";

--8 Lister le total de chaque commande par total décroissant (Affichage numéro de commande et total)
-- total = qtecde * priuni , numcom
select numcom, (qtecde*priuni) as total_cmd from ligcom
order by total_cmd desc

--9 Lister les commandes dont le total est supérieur à 10 000€; on exclura dans le calcul du total les articles commandés en quantité supérieure ou égale à 1000.(Affichage numéro de commande et total)
-- numcom, total_cmd 
select numcom,qtecde,(qtecde*priuni) as total_cmd from ligcom
where (qtecde*priuni) >10000 and qtecde<1000
order by total_cmd desc;

-- 10 Lister les commandes par nom fournisseur (Afficher le nom du fournisseur, le numéro de commande et la date)
select nomfou,numcom,datcom from fournis
NATURAL JOIN entcom
group by nomfou,numcom;

-- 11 Sortir les produits des commandes ayant le mot "urgent' en observation?
-- (Afficher le numéro de commande, le nom du fournisseur, le libellé du produit et le sous total= quantité commandée * Prix unitaire)
select numcom,nomfou,libart,obscom,(qtecde*priuni) as total from entcom
natural join fournis
natural join ligcom
natural join produit
where obscom ="commande urgente";

-- 12- Coder de 2 manières différentes la requête suivante:
-- Lister le nom des fournisseurs susceptibles de livrer au moins un article
-- nomfou,(si qteliv<qtecde) as Art_a_livrer
select distinct nomfou,numcom,(qtecde-qteliv) as Art_a_livrer from fournis
natural join ligcom
where qteliv<qtecde;

select distinct nomfou,numcom,(qtecde-qteliv) as Art_a_livrer from fournis
natural join ligcom
where qtecde-qteliv>0;

--13-Coder de 2 manières différentes la requête suivante:
-- Lister les commandes (Numéro et date) dont le fournisseur est celui de la commande 70210

select numcom,datcom,numfou from entcom
where numfou = (select numfou from entcom where 
    numcom=70210);

-- 14 Dans les articles susceptibles d’être vendus, lister les articles moins chers (basés sur Prix1) que le moins cher des rubans 
-- (article dont le premier caractère commence par R).
--  On affichera le libellé de l’article et prix1

select libart,prix1 from produit 
natural join vente
where prix1<(select prix1 from vente where libart like "R0") ;

-- 15 Editer la liste des fournisseurs susceptibles de livrer les produits dont le
--  stock est inférieur ou égal à 150 % du stock d'alerte. La liste est triée
--   par produit puis fournisseur

select nomfou,numfou,numcom,stkale,stkphy,libart from fournis
natural join entcom
natural join ligcom
natural join produit
where stkphy<= (1.5*stkale)
order by libart,nomfou;

-- 16 Éditer la liste des fournisseurs susceptibles de livrer les produit dont le stock est inférieur 
-- ou égal à 150 % du stock d'alerte et un délai de livraison d'au plus 30 jours. 
-- La liste est triée par fournisseur puis produit

select nomfou,numfou,nomfou,stkale,stkphy,libart,delliv from fournis
natural join entcom
natural join ligcom
natural join produit
natural join vente
where stkphy<= (1.5*stkale) and delliv<=30
order by libart,nomfou;

-- 17 Avec le même type de sélection que ci-dessus, sortir un total des stocks par fournisseur trié par total décroissant
SELECT nomfou, SUM(stkphy) AS total_stk FROM produit
natural JOIN vente
natural JOIN fournis
WHERE (stkale*1.5) <= stkphy AND delliv <= 30
GROUP BY fournis.nomfou
ORDER BY total_stk DESC ;

-- En fin d'année, sortir la liste des produits dont la quantité réellement 
-- commandée dépasse 90% de la quantité annuelle prévue.
SELECT codart, libart, SUM(qtecde) AS total_cmd, qteann FROM produit
natural JOIN ligcom
GROUP BY codart
HAVING total_cmd > (qteann * 0.9);

-- Calculer le chiffre d'affaire par fournisseur pour l'année 2007 sachant que 
-- les prix indiqués sont hors taxes et que le taux de TVA est 20%.
select nomfou,sum(qteliv*priuni) as CA_HT,SUM((qteliv*priuni)*1.2) as CA_TTC from fournis
natural join ligcom
where derliv>='2007-01-01' and derliv<='2007-12-31'
group by nomfou
order by CA_TTC;

-- les besoins de mise à jour 

-- 1 Application d'une augmentation de tarif de 4% pour le prix 1, 
-- 2% pour le prix2 pour le fournisseur 9180
update vente
set prix1 = prix1 *1.04
set prix2=prix2*1.02
where numfou = 9180;

-- Dans la table vente, mettre à jour le prix2 des articles dont le prix2 est null, 
-- en affectant a valeur de prix.
update vente
set vente.prix2=vente.prix1
where vente.prix2=0;
-- ???

-- Mettre à jour le champ obscom en positionnant '*****' pour toutes les commandes
--  dont le fournisseur a un indice de satisfaction <5
update entcom
natural join fournis
set entcom.obscom ='*****'
where fournis.satisf < 5;


-- Suppression du produit I110

-- supprimer ligne enfant avant > dans vente
delete from vente
where codart='I110';
delete from produit
where codart='I110';

delete from vente
join produit 
on vente.codart = produit.codart
where codart='I108';