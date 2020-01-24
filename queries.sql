-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT Product.ProductName, Category.CategoryName FROM Category
JOIN Product ON Product.CategoryId = Category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT "Order".Id, Shipper.CompanyName FROM "Order"
JOIN Shipper ON Shipper.Id = "Order".ShipVia
WHERE "Order".OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT Product.ProductName, OrderDetail.Quantity, 
"Order".Id FROM "Order"
JOIN Product ON Product.Id = OrderDetail.ProductId
JOIN OrderDetail ON OrderDetail.OrderId = "Order".Id
WHERE "Order".Id = 10251 
ORDER BY ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT "Order".Id AS ID, Customer.CompanyName AS "Company Name",
Employee.LastName AS "Employee's Last Name" FROM "Order"
JOIN Employee ON Employee.Id = "Order".EmployeeId
JOIN Customer ON Customer.Id = "Order".CustomerId;
