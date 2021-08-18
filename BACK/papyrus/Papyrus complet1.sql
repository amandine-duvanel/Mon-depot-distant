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
select 