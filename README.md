# Bamazon

## Overview
In this project I created  an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory.


### Expected Outcomes
The Bamazon app was designed to create a amazon store front interface through node. Despite having only 10 products in its categories, it will show the stock quantity depleting and the checkout total while the user goes from the storefront to the checkout steps. 


### Built with

- [JavaScript] (https://www.javascript.com/) - The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.
- [Node.js] (https://nodejs.org/en/)- Node.js is a cross-platform JavaScript runtime environment that allows developers to build server-side and network applications with JavaScript.

#### Node Packages used
- MySQL -
- Inquirer -
- Cli-Table -


### Functionality
--- 
1. First Creating A Connection to MySQL

*< var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ROOTROOT",
    database: "bamazon" });
    / /connect to the mysql server and sql database
    connection.connect(function(err) {
        if (err) throw err;
        //run the start function after the connection is made to prompt the user
        else console.log("\nWelcome to the Bamazon store");
        cons
.log("===============================================================================");
start ();
});>*

Function takes the userInput (command) and the userQuery(artist), and returns the next concert time and date for that artist, as well as location and city.

######demo gif
![concert-this demo](./screenshots/concert.gif)

2. spotify-this-song

*<command, song name>*

Function takes the userInput (command) and the userQuery(song), and returns the artist, full track name, a preview link and the album.

######demo gif
![spotify-this demo](./screenshots/spotify.gif)

3. movie-this
*<command, movie name>*

Function takes the userInput (command) and the userQuery(song), and returns title, cast, release date, ratings, country of origin, original language and synopsis.

######demo gif
![movie-this demo](./screenshots/movie.gif)


4. do-this

*<command>*

This function is a wildcard that will randomly select one of the functions and produce a search. The only way to find out what it does is to try!

######demo gif
![do-this demo](./screenshots/read.gif)
