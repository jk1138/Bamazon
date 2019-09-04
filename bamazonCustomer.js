//==========================================================================================================
//=========================================== NPM packages =================================================
//==========================================================================================================
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

//==========================================================================================================
//============================= CREATE THE CONNECTION FOR SQL DATABASE  ====================================
//==========================================================================================================
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ROOTROOT",
    database: "bamazon"
});
 //connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
     //run the start function after the connection is made to prompt the user
    else console.log("\nWelcome to the Bamazon store");
    console.log("===============================================================================");
    start ();
});


//=================================================================================================================================================
//============================================   BAMAZON STORE FRONT   ============================================================================
//=================================================================================================================================================

function start() {
    inquirer.prompt([{
        name: "confirm",
        type: "confirm",
        message: "Would you like to see our products todays?",
        default: true
    }]).then(function (answer) {
        if (answer.confirm) {
            //Query to database to get all item info
            var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products";
            connection.query(query, function (err, res) {
                var table = new Table({
                    head: ["Product Id", "Product Name", "Department", "Price", "Stock Quantity"],
                    colWidths: [20, 20, 20, 20, 20]
                });
                for (var i = 0; i < res.length; i++) {
                    table.push([res[i].item_id, res[i].product_name, res[i].department_name, "$" + res[i].price, res[i].stock_quantity]);
                }
                console.log("\n" + table.toString() + "\n");
                purchaseItems();
            });
        } else {
            console.log("Come back soon!");
            connection.end();
        };
    });
};
//=================================================================================================================================================
//============================================   BAMAZON CHECKOUT   ===============================================================================
//=================================================================================================================================================

function purchaseItems() {
    inquirer
        .prompt([{
                name: "id",
                type: "input",
                message: "Enter the Product ID of the item you wish to purhase: ",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "units",
                type: "input",
                message: "Enter the amount of units you would like to purchase: ",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    };
                    return false;
                }
            }
        ])
        .then(function (answer) {
            var query = "SELECT item_id, stock_quantity, price, product_sales FROM products WHERE ?";
            connection.query(query, {
                    item_id: answer.id
                },
                function (err, res) {
                    //If requested units is more than stock quantity
                    if (err) throw err
                    var checkStock= res[0].stock_quantity
                    var purchasedStock= answer.units
                    
                    if (checkStock <= purchasedStock) {
                        console.log("Insufficient quantity!")
                        start();
                    } else {
                        //Update stock quantity in database
                        var updateStock = checkStock - purchasedStock;
                        connection.query("UPDATE products SET stock_quantity = " + updateStock + " WHERE ?", {
                            item_id: answer.id
                        });
                        //Update product_sales column
                        var priceCalculator= res[0].price
                        var checkout = priceCalculator * purchasedStock;
                        connection.query("UPDATE products SET product_sales = product_sales + " + checkout + " WHERE ?", {
                            item_id: answer.id
                        });
                        //Display total cost
                        console.log("Your order total is: $" + checkout);
                        console.log("----------------------------------------------")
                        start();
                    };
                });
        });
};

