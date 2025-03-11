const express = require("express");
const app = express();

//Sample Data
const users = [
    {id:1, name:"Alice"},
    {id:2, name:"Bob"},
];

const products = [
    {id:1, name:"Laptop", price: 999},
    {id:2, name:"Phone", price: 699},
]

const fruits = [
    {id:1, name:"Apple", price: 2.99},
    {id:2, name:"Banana", price: 3.99},
]

const candies = [
    {id:1, name:"Skittles", price: 1.49},
    {id:2, name:"M&Ms", price: 1.49},
]

const meats = [
    {id:1, name:"Beef", price: 12.99},
    {id:2, name:"Chicken", price: 11.99},
]

const clothes = [
    {id:1, name:"Shirt", price: 7.99},
    {id:2, name:"Pants", price: 6.99},
]


//Routing...
app.get("/", (req, res) => res.send("Welcome to my API!"));

app.get("/users", (req, res) => res.json(users));

app.get("/products", (req, res) => res.json(products));

app.get("/fruits", (req, res) => res.json(fruits));

app.get("/candies", (req, res) => res.json(candies));

app.get("/meats", (req, res) => res.json(meats));

app.get("/clothes", (req, res) => res.json(clothes));

/*
Routes with 3 items in the data set
*/

//Start server...
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));