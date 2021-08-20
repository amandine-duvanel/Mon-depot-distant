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

