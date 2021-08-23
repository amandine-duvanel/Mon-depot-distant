-- Evaluaion BDD : Exercice 2 -> Nothwind
-- 1 - contacts français
USE northwind;
select customers.CompanyName as Société, customers.ContactName as Contact, customers.ContactTitle as Fonction, Customers.Phone as Téléphone 
from customers
WHERE customers.country = 'France';

-- 2 - Produits du fournisseur "exotic liquids"
USE northwind;
SELECT products.ProductName AS Produit,products.UnitPrice AS Prix
FROM products
JOIN suppliers
ON products.supplierID=suppliers.supplierID
WHERE CompanyName= "Exotic Liquids";

-- 3 -Nombre de produits vendus par fourni français 
USE northwind;
SELECT suppliers.CompanyName AS Fournisseur, COUNT(products.ProductID) as Nbre_produits FROM suppliers
JOIN products
ON suppliers.SupplierID = products.SupplierID
WHERE suppliers.country = "France"
GROUP BY suppliers.CompanyName
ORDER BY COUNT(products.ProductID) DESC;

-- 4- clients français avec +de 10 commandes
USE northwind;
SELECT customers.CompanyName AS `CLIENT`, COUNT(orders.OrderID) AS Nbre_commandes 
FROM customers
JOIN orders
ON customers.CustomerID=orders.CustomerID
WHERE customers.Country="France"
GROUP BY customers.CompanyName
HAVING COUNT(orders.OrderID) > 10;

-- 5- clients ayant ca  sup à 30.000
USE northwind;

SELECT customers.CompanyName AS 'Client', SUM(Quantity*UnitPrice) AS 'CA', Country AS 'Pays' FROM customers
JOIN orders
ON customers.CustomerID = orders.CustomerID
JOIN `order details`
ON orders.OrderID = `order details`.OrderID
GROUP BY customers.CompanyName, Country
HAVING SUM(Quantity*UnitPrice) > 30000
ORDER BY SUM(Quantity*UnitPrice) DESC 

-- - 6 liste des pays dont les clients ont passé commande de produits fournis par exotic liquids
SELECT customers.Country AS 'Pays', suppliers.CompanyName FROM customers
JOIN orders
ON customers.CustomerID = orders.CustomerID
JOIN `order details`
ON orders.OrderID = `order details`.OrderID
JOIN products
ON `order details`.ProductID = products.ProductID
JOIN suppliers
ON products.SupplierID = suppliers.SupplierID
GROUP BY customers.Country, suppliers.CompanyName
HAVING suppliers.CompanyName = 'Exotic Liquids'
ORDER BY customers.Country 

-- 7 Montant des ventes de 1997
select sum(UnitPrice*Quantity) as `Montant ventes 1997` from `order details`
join Orders 
on `order details`.OrderID = orders.OrderID
where OrderDate LIKE '1997%' ;

-- 8  Montant des ventes de 1997 mois par mois
select month(OrderDate) as `Mois 97`, sum(UnitPrice*Quantity) as `Montant ventes 1997` from `order details`
join Orders 
on `order details`.OrderID = orders.OrderID
where OrderDate LIKE '1997%' 
group by month(OrderDate);

-- 9 Depuis quelle date le client "du monde entier" n'a plus commandé ?
SELECT max(OrderDate) AS 'Date dernière commande' from Orders
join customers
ON customers.CustomerID=orders.CustomerID
where customers.CompanyName = "Du monde entier";

-- 10 Délai moyen de livraison en jours ? (rép :8)
select round(avg(datediff(ShippedDate,OrderDate))) as Délai moyen de livraion en jours from Orders

