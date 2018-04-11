-- https://www.baddaddysburgerbar.com/stores/download-menu/23
-- use burgers_db;

INSERT INTO DevouredBy
    (name)
VALUES
    ("Marty"),
    ("Veronica"),
    ("Dominic");

INSERT INTO Burger
    (name)
VALUES
    ("Bacon Cheeseburger on Steroids"),
    ("Bad Ass Burger"),
    ("BT’s All-American"),
    ("SAM I Am"),
    ("Pittsburgher"),
    ("Nick’s Patty Melt"),
    ("Classic Southern"),
    ("Mama Ricotta’s"),
    ("Smokehouse"),
    ("Pastrami Reuben"),
    ("Magic Mushroom"),
    ("Fried Mozzarella"),
    ("Western Buffalo");

UPDATE Burger SET devoured=true,DevouredById = 1 WHERE id = 2;
UPDATE Burger SET devoured=true,DevouredById = 2 WHERE id = 5;
UPDATE Burger SET devoured=true,DevouredById = 3 WHERE id = 1;
