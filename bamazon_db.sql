DROP DATABASE bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(75) NOT NULL,
	department_name VARCHAR(75) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Glide Away Band-Aids", "health & wellness", 6.99, 140);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Delicious Chocolate Bars", "food", 2.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hiker's Instant Oatmeal", "food", 5.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nature's Health Toner", "skin & beauty", 7.99, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Glitter Gal Nail Polish-red", "sport & outdoors", 3.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Awesome Mountain Bike", "sport & outdoors", 399.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HDMI cable- 15 feet long", "electronics", 8.99, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sun Gummies- Vitamin C", "health & wellness", 12.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yoga Mat", "sport & outdoors", 5.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kindle", "electronics", 199.00, 105);

SELECT * FROM products;

ALTER TABLE products
ADD product_sales DECIMAL(10,2) DEFAULT "0.00";

SELECT * FROM products;